import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, renderHook, act } from '@testing-library/react'
import { AuthProvider, useAuth } from '../context/AuthContext'
import { ReactNode } from 'react'
import { supabase } from '../lib/supabaseClient'

// Mock Supabase client
vi.mock('../lib/supabaseClient', () => ({
  supabase: {
    auth: {
      signInWithPassword: vi.fn(),
      signUp: vi.fn(),
      signOut: vi.fn(),
      getSession: vi.fn(),
      onAuthStateChange: vi.fn().mockReturnValue({
        data: { subscription: { unsubscribe: vi.fn() } }
      })
    },
    from: vi.fn().mockReturnThis(),
    select: vi.fn().mockReturnThis(),
    eq: vi.fn().mockReturnThis(),
    single: vi.fn(),
    insert: vi.fn().mockReturnThis()
  }
}))

// Mock window.localStorage
const localStorageMock = (() => {
  let store: Record<string, string> = {}
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString()
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    }
  }
})()

Object.defineProperty(window, 'localStorage', {
  value: localStorageMock
})

// Test wrapper component
const TestWrapper = ({ children }: { children: ReactNode }) => (
  <AuthProvider>{children}</AuthProvider>
)

describe('AuthContext', () => {
  beforeEach(() => {
    // Clear mocks before each test
    vi.clearAllMocks()
    localStorageMock.clear()
  })

  afterEach(() => {
    // Clean up after each test
    vi.restoreAllMocks()
  })

  it('should provide default values', () => {
    const { result } = renderHook(() => useAuth(), {
      wrapper: TestWrapper
    })

    expect(result.current.user).toBeNull()
    expect(result.current.isLoading).toBe(true)
    expect(result.current.isAuthenticated).toBe(false)
  })

  it('should handle login successfully', async () => {
    const mockUser = {
      id: '1',
      email: 'test@example.com',
      name: 'Test User',
      role: 'member' as const
    }

    const mockSession = {
      user: {
        id: '1',
        email: 'test@example.com',
        user_metadata: { name: 'Test User' }
      }
    }

    // Mock Supabase responses
    ;(supabase.auth.signInWithPassword as jest.Mock).mockResolvedValue({
      data: mockSession,
      error: null
    })

    ;(supabase.from('').select('').eq('').single as jest.Mock).mockResolvedValue({
      data: mockUser,
      error: null
    })

    const { result } = renderHook(() => useAuth(), {
      wrapper: TestWrapper
    })

    // Wait for initial loading to complete
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    // Perform login
    await act(async () => {
      await result.current.login('test@example.com', 'password')
    })

    expect(result.current.user).toEqual(mockUser)
    expect(result.current.isAuthenticated).toBe(true)
    expect(result.current.isLoading).toBe(false)
  })

  it('should handle login failure', async () => {
    // Mock Supabase error response
    ;(supabase.auth.signInWithPassword as jest.Mock).mockResolvedValue({
      data: { user: null },
      error: { message: 'Invalid credentials' }
    })

    const { result } = renderHook(() => useAuth(), {
      wrapper: TestWrapper
    })

    // Wait for initial loading to complete
    await act(async () => {
      await new Promise(resolve => setTimeout(resolve, 0))
    })

    // Attempt login and expect it to throw
    await expect(
      act(async () => {
        await result.current.login('test@example.com', 'wrongpassword')
      })
    ).rejects.toThrow('Invalid credentials')

    expect(result.current.user).toBeNull()
    expect(result.current.isAuthenticated).toBe(false)
  })

  it('should handle logout', async () => {
    // Mock successful logout
    ;(supabase.auth.signOut as jest.Mock).mockResolvedValue({ error: null })

    const { result } = renderHook(() => useAuth(), {
      wrapper: TestWrapper
    })

    // Simulate user being logged in
    act(() => {
      // @ts-ignore - accessing private state for testing
      result.current.setUser({
        id: '1',
        email: 'test@example.com',
        name: 'Test User',
        role: 'member'
      })
    })

    // Perform logout
    await act(async () => {
      await result.current.logout()
    })

    expect(result.current.user).toBeNull()
    expect(result.current.isAuthenticated).toBe(false)
    expect(localStorageMock.getItem('jcc_user')).toBeNull()
  })
})