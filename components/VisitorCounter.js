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

    const hitOnce = async () => {
      if (didHitRef.current) return
      didHitRef.current = true
      try {
        const res = await fetch('/api/visits?hit=1', { cache: 'no-store' })
        const data = await res.json()
        setFromResponse(data)
      } catch {
        if (!isMounted) return
        setError('—')
      }
    }

    const refresh = async () => {
      try {
        const res = await fetch('/api/visits?hit=0', { cache: 'no-store' })
        const data = await res.json()
        setFromResponse(data)
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


