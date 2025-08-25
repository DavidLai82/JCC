import { createContext, useContext, useState, useEffect, ReactNode } from 'react'
import { supabase } from '../lib/supabaseClient'

// Types for user and authentication
interface User {
  id: string
  email: string
  name: string
  role: 'admin' | 'member' | 'visitor'
  avatar?: string
}

interface AuthContextType {
  user: User | null
  isLoading: boolean
  isAuthenticated: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => Promise<void>
  register: (email: string, password: string, name: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Supabase authentication functions
  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) {
        throw new Error(error.message)
      }

      if (data.user) {
        // Fetch user profile from database
        const { data: profileData, error: profileError } = await supabase
          .from('profiles')
          .select('id, email, name, role, avatar')
          .eq('id', data.user.id)
          .single()

        if (profileError) {
          console.warn('Failed to fetch user profile:', profileError)
          // Create a basic profile if one doesn't exist
          const mockUser: User = {
            id: data.user.id,
            email: data.user.email || email,
            name: data.user.user_metadata?.name || email.split('@')[0],
            role: 'member'
          }
          setUser(mockUser)
        } else {
          setUser(profileData as User)
        }
      }
    } catch (error) {
      console.error('Login failed:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = async () => {
    try {
      await supabase.auth.signOut()
      setUser(null)
      localStorage.removeItem('jcc_user')
    } catch (error) {
      console.error('Logout failed:', error)
      throw error
    }
  }

  const register = async (email: string, password: string, name: string) => {
    setIsLoading(true)
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            name: name,
          },
        },
      })

      if (error) {
        throw new Error(error.message)
      }

      if (data.user) {
        // Create user profile in database
        const { error: profileError } = await supabase
          .from('profiles')
          .insert([
            {
              id: data.user.id,
              email: email,
              name: name,
              role: 'member'
            }
          ])
          .select()
          .single()

        if (profileError) {
          console.warn('Failed to create user profile:', profileError)
        }

        const user: User = {
          id: data.user.id,
          email: email,
          name: name,
          role: 'member'
        }
        
        setUser(user)
        localStorage.setItem('jcc_user', JSON.stringify(user))
      }
    } catch (error) {
      console.error('Registration failed:', error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  // Check for existing user session on mount
  useEffect(() => {
    const checkAuthState = async () => {
      try {
        // Check if there's an existing session
        const { data: { session } } = await supabase.auth.getSession()
        
        if (session?.user) {
          // Fetch user profile from database
          const { data, error } = await supabase
            .from('profiles')
            .select('id, email, name, role, avatar')
            .eq('id', session.user.id)
            .single()

          if (!error && data) {
            setUser(data as User)
          } else {
            // Create a basic profile if one doesn't exist
            const mockUser: User = {
              id: session.user.id,
              email: session.user.email || '',
              name: session.user.user_metadata?.name || session.user.email?.split('@')[0] || '',
              role: 'member'
            }
            setUser(mockUser)
          }
        }
      } catch (error) {
        console.error('Failed to restore user session:', error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuthState()

    // Listen for auth state changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session?.user) {
        // Update user state when auth state changes
        const user: User = {
          id: session.user.id,
          email: session.user.email || '',
          name: session.user.user_metadata?.name || session.user.email?.split('@')[0] || '',
          role: 'member'
        }
        setUser(user)
      } else {
        setUser(null)
      }
    })

    // Clean up subscription on unmount
    return () => {
      subscription.unsubscribe()
    }
  }, [])

  const value: AuthContextType = {
    user,
    isLoading,
    isAuthenticated: !!user,
    login,
    logout,
    register
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

// Custom hook to use auth context
export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export default AuthContext