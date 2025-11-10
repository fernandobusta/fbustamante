import { NextResponse } from 'next/server'
import { match } from '@formatjs/intl-localematcher'
import Negotiator from 'negotiator'

// Define all supported locales
let locales = ['en', 'es', 'fr', 'vi']
let defaultLocale = 'en' // English is the default

// Function to determine the best matching locale from the request headers
function getLocale(request) {
  // Negotiator expects a plain object
  const headers = { 'accept-language': request.headers.get('accept-language') }
  let languages = new Negotiator({ headers }).languages()

  // Match the preferred language(s) against the supported locales
  return match(languages, locales, defaultLocale)
}

export function proxy(request) {
  const { pathname } = request.nextUrl

  // 1. Check if the pathname already contains a supported locale (e.g., /es/products)
  const pathnameHasLocale = locales.some(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`,
  )

  // If a locale is found, let the request continue
  if (pathnameHasLocale) return

  // 2. If no locale is found, determine the user's preferred locale
  const locale = getLocale(request)

  // 3. Rewrite the URL to include the locale and redirect
  request.nextUrl.pathname = `/${locale}${pathname}`
  // e.g. /products is rewritten to /en/products or /es/products
  return NextResponse.redirect(request.nextUrl)
}

export const config = {
  matcher: [
    // Skip all internal paths (_next) and static files
    '/((?!_next|.*\\..*).*)',
  ],
}
