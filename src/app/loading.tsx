'use client'

import { useEffect, useState } from 'react'

const Loading = () => {
  const [dots, setDots] = useState('')

  useEffect(() => {
    const interval = setInterval(() => {
      setDots((prev) => (prev.length < 3 ? prev + '.' : ''))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-950 text-gray-100">
      <div className="relative flex h-16 w-16 items-center justify-center">
        <div className="absolute h-16 w-16 animate-spin rounded-full border-4 border-gray-700 border-t-purple-400" />
        <div className="absolute h-10 w-10 animate-pulse rounded-full bg-purple-600/30" />
        <div className="absolute h-6 w-6 animate-pulse rounded-full bg-purple-400/50" />
      </div>

      <h1 className="mt-6 text-4xl font-bold text-purple-400 drop-shadow-md">Loading {dots}</h1>
      <p className="mt-2 text-lg text-gray-400">Hang tight, we’re conjuring your content!</p>
    </div>
  )
}

export default Loading
