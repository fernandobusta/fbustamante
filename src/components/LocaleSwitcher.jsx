'use client'

import {
  Popover,
  PopoverButton,
  PopoverBackdrop,
  PopoverPanel,
} from '@headlessui/react'
import { LanguageIcon } from '@heroicons/react/20/solid'

import Cookies from 'js-cookie'

import { usePathname } from 'next/navigation'
import Link from 'next/link'

function CloseIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        d="m17.25 6.75-10.5 10.5M6.75 6.75l10.5 10.5"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

// Define your supported locales
const locales = ['en', 'es', 'fr', 'vi']
const localeDict = {
  en: 'English',
  es: 'Spanish',
  fr: 'French',
  vi: 'Vietnamese',
}
const COOKIE_NAME = 'NEXT_LOCALE'

export default function LocaleSwitcher({ className, text }) {
  const pathname = usePathname()

  // Function to determine the target path for a new locale
  const redirectPath = (locale) => {
    // 1. Get the current path (e.g., "/en/about")
    if (!pathname) return `/${locale}`

    // 2. Extract the current locale from the path
    const pathSegments = pathname.split('/')
    const currentLocale = pathSegments[1]

    // 3. Check if the current path starts with a supported locale
    if (locales.includes(currentLocale)) {
      // Replace the current locale with the new locale
      pathSegments[1] = locale
      // Rejoin segments: e.g., ["", "en", "about"] -> "/es/about"
      return pathSegments.join('/')
    }

    // 4. If the path is just "/" (root), append the new locale
    return `/${locale}${pathname}`
  }

  // New function to handle the language switch and cookie setting
  const handleSwitch = (locale) => {
    // Set the cookie so the middleware picks it up on the next request
    Cookies.set(COOKIE_NAME, locale, { expires: 365, path: '/' })
  }

  return (
    <Popover className={className}>
      <PopoverButton className="group flex items-center rounded-full bg-white/90 px-2 py-2 text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20">
        <LanguageIcon className="h-auto w-6 stroke-zinc-500 group-hover:stroke-zinc-700 dark:group-hover:stroke-zinc-400" />
      </PopoverButton>
      <PopoverBackdrop
        transition
        className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm duration-150 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in dark:bg-black/80"
      />
      <PopoverPanel
        focus
        transition
        className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 duration-150 data-[closed]:scale-95 data-[closed]:opacity-0 data-[enter]:ease-out data-[leave]:ease-in sm:inset-x-auto dark:bg-zinc-900 dark:ring-zinc-800"
      >
        <div className="flex flex-row-reverse items-center justify-between">
          <PopoverButton aria-label="Close menu" className="-m-1 p-1">
            <CloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
          </PopoverButton>
          <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
            {text}
          </h2>
        </div>
        <nav className="mt-6">
          <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300">
            {locales.map((locale) => (
              <li key={locale}>
                <Link
                  href={redirectPath(locale)}
                  // 👈 Add onClick handler here
                  onClick={() => handleSwitch(locale)}
                  className="block w-full rounded-md px-3 py-2 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                >
                  {localeDict[locale]}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </PopoverPanel>
    </Popover>
  )
}
