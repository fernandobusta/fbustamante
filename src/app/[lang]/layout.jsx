import { Providers } from '@/app/[lang]/providers'
import { Layout } from '@/components/Layout'
import { getDictionary } from './dictionaries'

import '@/styles/tailwind.css'

export const metadata = {
  title: {
    template: '%s - Fernando',
    default: 'Fernando Bustamante - Integration Engineer',
  },
  description:
    'I’m an Integration Engineer at Cellusys, where we build telecom solutions that secure and optimise mobile networks worldwide.',
  alternates: {
    types: {
      'application/rss+xml': `${process.env.NEXT_PUBLIC_SITE_URL}/feed.xml`,
    },
  },
}

export default async function RootLayout({ children, params }) {
  const { lang } = await params
  return (
    <html lang={lang} className="h-full antialiased" suppressHydrationWarning>
      <body className="flex h-full bg-zinc-50 dark:bg-black">
        <Providers>
          <div className="flex w-full">
            <Layout lang={lang}>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  )
}
