import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-50 via-white to-red-50 flex items-center justify-center px-4">
      <div className="max-w-2xl w-full text-center">
        {/* 404 Illustration */}
        <div className="mb-8">
          <h1 className="text-9xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-red-500">
            404
          </h1>
          <div className="mt-4 flex justify-center gap-2">
            <div className="h-2 w-12 bg-cyan-500 rounded-full animate-pulse"></div>
            <div className="h-2 w-12 bg-red-500 rounded-full animate-pulse delay-75"></div>
            <div className="h-2 w-12 bg-cyan-500 rounded-full animate-pulse delay-150"></div>
          </div>
        </div>

        {/* Content */}
        <div className="space-y-4 mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Page Not Found
          </h2>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            Sorry, we couldn't find the page you're looking for. It might have been moved, deleted, or the URL might be incorrect.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-500 text-white rounded-lg hover:bg-cyan-600 transition-colors font-semibold shadow-lg hover:shadow-xl"
          >
            <Home className="w-5 h-5" />
            Go to Homepage
          </Link>
          
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-semibold border-2 border-gray-200 hover:border-cyan-500"
          >
            <Search className="w-5 h-5" />
            Visit Our Blog
          </Link>
        </div>

        {/* Help Text */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-sm text-gray-500">
            Need help? Contact us at{' '}
            <a
              href="mailto:info@tfclimited.com"
              className="text-cyan-500 hover:text-cyan-600 font-semibold underline"
            >
              info@tfclimited.com
            </a>
            {' '}or call{' '}
            <a
              href="tel:+2348033062445"
              className="text-cyan-500 hover:text-cyan-600 font-semibold underline"
            >
              +234 803 306 2445
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
