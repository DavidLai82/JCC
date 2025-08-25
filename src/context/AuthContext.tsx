import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react'

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
  logout: () => void
  register: (email: string, password: string, name: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

interface AuthProviderProps {
  children: ReactNode
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // Mock authentication functions - replace with real authentication service
  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock successful login
      const mockUser: User = {
        id: '1',
        email: email,
        name: email.split('@')[0],
        role: 'member'
      }
      
      setUser(mockUser)
      localStorage.setItem('jcc_user', JSON.stringify(mockUser))
    } catch (error) {
      console.error('Login failed:', error)
      throw new Error('Login failed')
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    setUser(null)
    localStorage.removeItem('jcc_user')
  }

  const register = async (email: string, password: string, name: string) => {
    setIsLoading(true)
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      // Mock successful registration
      const mockUser: User = {
        id: Date.now().toString(),
        email: email,
        name: name,
        role: 'member'
      }
      
      setUser(mockUser)
      localStorage.setItem('jcc_user', JSON.stringify(mockUser))
    } catch (error) {
      console.error('Registration failed:', error)
      throw new Error('Registration failed')
    } finally {
      setIsLoading(false)
    }
  }

  // Check for existing user session on mount
  useEffect(() => {
    const checkAuthState = () => {
      try {
        const savedUser = localStorage.getItem('jcc_user')
        if (savedUser) {
          setUser(JSON.parse(savedUser))
        }
      } catch (error) {
        console.error('Failed to restore user session:', error)
        localStorage.removeItem('jcc_user')
      } finally {
        setIsLoading(false)
      }
    }

    checkAuthState()
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