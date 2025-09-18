import Link from 'next/link'

const NotFound = () => {
  return (
    <div className="flex h-screen flex-col items-center justify-center bg-gray-950 text-gray-100">
      <h1 className="text-7xl font-extrabold text-purple-400 drop-shadow-lg">
        404
      </h1>
      <p className="mt-4 text-lg text-gray-400">
        Oops! This page doesn’t exist.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-xl bg-purple-600 px-6 py-2 text-sm font-medium text-white shadow-md transition hover:bg-purple-500 hover:shadow-lg"
      >
        Go Home
      </Link>
    </div>
  )
}

export default NotFound
