import Link from 'next/link'
import { getDictionary } from '@/app/[lang]/dictionaries'
import { ContainerInner, ContainerOuter } from '@/components/Container'

function NavLink({ href, children }) {
  return (
    <Link
      href={href}
      className="transition hover:text-teal-500 dark:hover:text-teal-400"
    >
      {children}
    </Link>
  )
}

export async function Footer({ lang }) {
  const dict = await getDictionary(lang)
  const fDict = dict.footer
  return (
    <footer className="mt-32 flex-none">
      <ContainerOuter>
        <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
          <ContainerInner>
            <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
                {/* Localized Navigation Links */}
                <NavLink href="/">{fDict.nav_home}</NavLink>
                <NavLink href="/about">{fDict.nav_about}</NavLink>
                <NavLink href="/projects">{fDict.nav_projects}</NavLink>
                <NavLink href="/work">{fDict.nav_work}</NavLink>
                <NavLink href="/websites">{fDict.nav_websites}</NavLink>
              </div>
              <p className="text-sm text-zinc-400 dark:text-zinc-500">
                {/* Localized Copyright */}
                &copy; {new Date().getFullYear()} {fDict.copyright_prefix}
                <br />
                fbustamantedelriob@gmail.com
              </p>
            </div>
          </ContainerInner>
        </div>
      </ContainerOuter>
    </footer>
  )
}
