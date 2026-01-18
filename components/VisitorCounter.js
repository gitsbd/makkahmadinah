'use client'

import { useEffect, useRef, useState } from 'react'

export default function VisitorCounter() {
  const [count, setCount] = useState(null)
  const [error, setError] = useState(null)
  const didHitRef = useRef(false)

  useEffect(() => {
    let isMounted = true

    const setFromResponse = (data) => {
      if (!isMounted) return
      if (data && data.ok && typeof data.value === 'number') {
        setCount(data.value)
        setError(null)
      } else {
        setError('—')
      }
    }

    const namespace = 'makkahmadinah'
    const key = 'homepage'

    const hitOnce = async () => {
      if (didHitRef.current) return
      didHitRef.current = true
      try {
        const url = `https://api.countapi.xyz/hit/${namespace}/${key}`
        const res = await fetch(url, {
          cache: 'no-store',
          headers: { Accept: 'application/json' },
        })
        if (!res.ok) {
          throw new Error('Failed to fetch')
        }
        const data = await res.json()
        const value = typeof data?.value === 'number' ? data.value : null
        setFromResponse({ ok: value !== null, value })
      } catch {
        if (!isMounted) return
        setError('—')
      }
    }

    const refresh = async () => {
      try {
        const url = `https://api.countapi.xyz/get/${namespace}/${key}`
        const res = await fetch(url, {
          cache: 'no-store',
          headers: { Accept: 'application/json' },
        })
        if (!res.ok) {
          return
        }
        const data = await res.json()
        const value = typeof data?.value === 'number' ? data.value : null
        setFromResponse({ ok: value !== null, value })
      } catch {
        // ignore background refresh errors
      }
    }

    hitOnce()
    const interval = setInterval(refresh, 15000)

    return () => {
      isMounted = false
      clearInterval(interval)
    }
  }, [])

  return (
    <span className="visitor-counter">
      <span className="label">Visitors:</span>{' '}
      <span className="count">{count ?? error ?? '…'}</span>
    </span>
  )
}


