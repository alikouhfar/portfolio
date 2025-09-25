'use client'

import { Button } from '@/components/ui/button'
import Link from 'next/link'

const AboutError = ({ error, reset }: { error: Error; reset: () => void }) => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-950 text-gray-100">
      <div className="relative flex h-20 w-20 items-center justify-center">
        <div className="absolute h-20 w-20 animate-pulse rounded-full bg-rose-600/30" />
        <div className="absolute h-10 w-10 animate-pulse rounded-full bg-rose-400/50" />
        <span className="relative z-10 text-3xl font-bold text-rose-400 drop-shadow-md">!</span>
      </div>

      <h1 className="mt-6 text-4xl font-bold text-rose-500 drop-shadow-md">Error</h1>
      <p className="mt-2 text-lg text-gray-400 capitalize">{error.message}</p>

      <div className="mt-10 flex gap-4">
        {reset && (
          <Button
            onClick={reset}
            className="h-10 w-28 rounded-lg bg-rose-600 text-sm font-medium text-white shadow-md transition hover:cursor-pointer hover:bg-rose-500 hover:shadow-lg"
          >
            Try Again
          </Button>
        )}
        <Link
          href="/"
          className="flex h-10 w-28 items-center justify-center rounded-lg bg-purple-600 text-sm font-medium text-white shadow-md transition hover:bg-purple-500 hover:shadow-lg"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}

export default AboutError
