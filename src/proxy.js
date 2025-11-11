import { NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

// --- Configuration ---
let locales = ['en', 'es', 'fr', 'vi']
let defaultLocale = 'en'
const COOKIE_NAME = 'NEXT_LOCALE'

// --- Helper Function: Get Preferred Locale (Server Side) ---
function getLocale(request) {
  // 1. Check for the custom COOKIE_NAME first (HIGHEST PRIORITY)
  const cookieLocale = request.cookies.get(COOKIE_NAME)?.value
  if (cookieLocale && locales.includes(cookieLocale)) {
    return cookieLocale
  }

  // 2. Fallback to Accept-Language header matching
  const headers = { 'accept-language': request.headers.get('accept-language') }
  let languages = new Negotiator({ headers }).languages()

  return match(languages, locales, defaultLocale)
}

// --- Middleware Core Logic ---
export function proxy(request) {
  const { pathname } = request.nextUrl

  // 1. Check if the pathname already contains a supported locale (e.g., /es/products)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  // If the locale is in the URL, the path is already correct, so we stop here.
  if (pathnameHasLocale) {
    // We should also check if the URL locale matches the cookie locale.
    // This is optional but ensures the cookie is always up-to-date with the URL.
    const urlLocale = pathname.split('/')[1]
    const cookieLocale = request.cookies.get(COOKIE_NAME)?.value

    // If the URL locale is different from the cookie, update the cookie.
    if (urlLocale !== cookieLocale) {
      const response = NextResponse.next()
      response.cookies.set(COOKIE_NAME, urlLocale, { path: '/' })
      return response
    }

    return NextResponse.next()
  }

  // 2. Determine the preferred locale (using cookie preference first)
  const locale = getLocale(request) // Reads the preferred locale

  // 3. Create the redirect response object
  request.nextUrl.pathname = `/${locale}${pathname}`
  const response = NextResponse.redirect(request.nextUrl)

  // 4. Set the cookie on the response so the browser saves the preferred locale.
  response.cookies.set(COOKIE_NAME, locale, { path: '/', maxAge: 31536000 }) // Set maxAge for 1 year persistence

  return response
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
}
