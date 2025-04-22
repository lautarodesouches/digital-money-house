'use client'
import { useEffect, useState, useCallback } from 'react'

export const useFetch = <T = unknown>(url: string) => {
    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const [error, setError] = useState<Error | null>(null)

    const fetchData = useCallback(async () => {
        setLoading(true)
        setError(null)

        try {
            const response = await fetch(url, {
                headers: { accept: 'application/json' },
            })

            if (!response.ok) throw new Error(`HTTP error: ${response.status}`)

            const json = await response.json()

            setData(json)
        } catch (err) {
            setError(err instanceof Error ? err : new Error(String(err)))
        } finally {
            setLoading(false)
        }
    }, [url])

    useEffect(() => {
        fetchData()
    }, [fetchData])

    return { data, loading, error, refetch: fetchData }
}
