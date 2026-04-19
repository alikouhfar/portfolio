import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-950 text-gray-100">
      <h1 className="text-theme text-7xl font-extrabold drop-shadow-lg">404</h1>
      <p className="mt-4 text-lg text-gray-400">Oops! This page doesn’t exist.</p>

      <Link
        href="/"
        className="bg-theme hover:bg-theme/50 mt-6 rounded-xl px-6 py-2 text-sm font-medium text-white shadow-md transition hover:shadow-lg"
      >
        Go Home
      </Link>
    </div>
  )
}

export default NotFound
