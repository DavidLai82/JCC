import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabaseClient'

interface SupabaseDataState<T> {
  data: T | null
  loading: boolean
  error: Error | null
}

export function useSupabaseData<T>(table: string, filters?: Record<string, any>) {
  const [state, setState] = useState<SupabaseDataState<T>>({
    data: null,
    loading: true,
    error: null
  })

  useEffect(() => {
    const fetchData = async () => {
      try {
        setState(prev => ({ ...prev, loading: true, error: null }))

        let query = supabase.from(table).select('*')

        // Apply filters if provided
        if (filters) {
          Object.entries(filters).forEach(([key, value]) => {
            query = query.eq(key, value)
          })
        }

        const { data, error } = await query

        if (error) throw error

        setState({
          data: data as T,
          loading: false,
          error: null
        })
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error: error as Error
        })
      }
    }

    fetchData()
  }, [table, JSON.stringify(filters)])

  return state
}