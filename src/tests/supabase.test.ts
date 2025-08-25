import { describe, it, expect } from 'vitest'
import { supabase } from '../lib/supabaseClient'

describe('Supabase Client', () => {
  it('should be defined', () => {
    expect(supabase).toBeDefined()
  })

  it('should have auth methods', () => {
    expect(supabase.auth).toBeDefined()
    expect(typeof supabase.auth.signInWithPassword).toBe('function')
    expect(typeof supabase.auth.signUp).toBe('function')
    expect(typeof supabase.auth.signOut).toBe('function')
  })

  it('should have database methods', () => {
    expect(supabase.from).toBeDefined()
    expect(supabase.rpc).toBeDefined()
  })
})