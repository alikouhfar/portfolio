import type { NextRequest } from 'next/server'
import { NextResponse } from 'next/server'

const locales = ['en', 'de', 'fa']
const defaultLocale = 'en'

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl

  if (pathname.startsWith('/_next') || pathname.startsWith('/images') || pathname.includes('.')) {
    return NextResponse.next()
  }

  const acceptLang = request.headers.get('accept-language')
  const preferred = acceptLang?.split(',')[0].split('-')[0]
  const locale = locales.includes(preferred || '') ? preferred : defaultLocale

  const pathnameHasLocale = locales.some((l) => pathname === `/${l}` || pathname.startsWith(`/${l}/`))

  if (pathnameHasLocale) return NextResponse.next()

  const url = request.nextUrl.clone()
  url.pathname = `/${locale}${pathname}`

  return NextResponse.redirect(url)
}

export const config = {
  matcher: ['/((?!_next).*)'],
}
