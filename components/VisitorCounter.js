'use client'

import { useEffect, useState } from 'react'

export default function VisitorCounter() {
  const [count, setCount] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    let isMounted = true
    const namespace = 'makkahmadinah'
    const key = 'homepage'
    const url = `https://api.countapi.xyz/hit/${namespace}/${key}`

    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (!isMounted) return
        if (data && typeof data.value === 'number') {
          setCount(data.value)
        } else {
          setError('—')
        }
      })
      .catch(() => {
        if (!isMounted) return
        setError('—')
      })

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <span className="visitor-counter">
      <span className="label">Visitors:</span>{' '}
      <span className="count">{count ?? error ?? '…'}</span>
    </span>
  )
}


