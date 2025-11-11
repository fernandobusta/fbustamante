import { SimpleLayout } from '@/components/SimpleLayout'
import Image from 'next/image'
import Blog from '@/components/Blog'
import InfoAlert from '@/components/InfoAlert'
import {
  PaintBrushIcon,
  ComputerDesktopIcon,
  RocketLaunchIcon,
  ChartBarIcon,
  ShieldCheckIcon,
  AdjustmentsHorizontalIcon,
} from '@heroicons/react/20/solid'

import { getDictionary } from '../dictionaries'
import MarkdownRenderer from '@/components/MarkdownRenderer'

// Web images
import bizimagineImage from '@/images/websites/bizimagine.jpeg'
import delrioabogados from '@/images/websites/drbabogados.jpeg'
import bynle from '@/images/websites/bynlelanding.jpeg'
import dcuboxing from '@/images/websites/dcuboxing.jpeg'
import firewall from '@/images/websites/firewall.png'
// Web logos
import bizLogo from '@/images/websites/logos/biz-logo.png'
import bynleLogo from '@/images/websites/logos/bynle-logo.jpeg'
import dcuabcLogo from '@/images/websites/logos/dcuabc-logo.png'
import drbLogo from '@/images/websites/logos/drb-logo.jpeg'
import firewallLogo from '@/images/websites/logos/firewall-logo.png'

export const metadata = {
  title: 'Websites',
  description: 'Website Portfolio',
}

// If anything needs to be translated add on .json translation file and
// append it in the component below
const rawPosts = [
  {
    id: 1,
    href: '#',
    imageUrl: firewall,
    date: 'Jan 2025',
    datetime: '2025-01-01',
    category: { href: '#' },
    author: {
      name: 'SMS Firewall',
      href: '#',
      imageUrl: firewallLogo,
    },
  },
  {
    id: 2,
    href: '#',
    imageUrl: dcuboxing,
    date: 'Jan 2023',
    datetime: '2023-01-01',
    category: { href: '#' },
    author: {
      name: 'DCU ABC',
      href: '#',
      imageUrl: dcuabcLogo,
    },
  },
  {
    id: 3,
    href: '#',
    imageUrl: delrioabogados,
    date: 'Jan 2022',
    datetime: '2022-01-01',
    category: { href: '#' },
    author: {
      name: 'Del Rio Bourman Abogados',
      href: '#',
      imageUrl: drbLogo,
    },
  },
  {
    id: 4,
    href: '#',
    imageUrl: bynle,
    date: 'Jan 2024',
    datetime: '2023-01-01',
    category: { href: '#' },
    author: {
      name: 'Bynle',
      href: '#',
      imageUrl: bynleLogo,
    },
  },
  {
    id: 5,
    href: '#',
    imageUrl: bizimagineImage,
    date: 'Feb 2019',
    datetime: '2019-01-01',
    category: { href: '#' },
    author: {
      name: 'BizImagine',
      href: '#',
      imageUrl: bizLogo,
    },
  },
]

async function WebsitesInfo({ lang }) {
  const dict = await getDictionary(lang)
  const wDict = dict.websites
  return (
    <div className="pb-6">
      <MarkdownRenderer markdownText={wDict.intro_p1} className="pb-4" />
      <figure className="border-l border-indigo-600 pl-8 dark:border-indigo-400">
        <blockquote className="text-xl/8 font-semibold tracking-tight text-gray-900 dark:text-white">
          <p>{wDict.quote_heading}</p>
        </blockquote>
      </figure>
      <div className="">
        <MarkdownRenderer
          markdownText={wDict.section_visible_title}
          className="pb-4 pt-6"
        />

        <ul
          role="list"
          className="mx-auto mt-2 max-w-7xl space-y-6 px-6 text-gray-600 lg:px-8 dark:text-gray-400"
        >
          <li className="flex gap-x-2">
            <PaintBrushIcon
              aria-hidden="true"
              className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
            />
            <span>
              <strong className="font-semibold text-gray-900 dark:text-white">
                {wDict.item_design_strong}
              </strong>{' '}
              {wDict.item_design_desc}
            </span>
          </li>
          <li className="flex gap-x-3">
            <ComputerDesktopIcon
              aria-hidden="true"
              className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
            />
            <span>
              <strong className="font-semibold text-gray-900 dark:text-white">
                {wDict.item_ux_strong}
              </strong>{' '}
              {wDict.item_ux_desc}
            </span>
          </li>
          <li className="flex gap-x-3">
            <RocketLaunchIcon
              aria-hidden="true"
              className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
            />
            <span>
              <strong className="font-semibold text-gray-900 dark:text-white">
                {wDict.item_tech_strong}
              </strong>{' '}
              {wDict.item_tech_desc}
            </span>
          </li>
        </ul>
        <div className="pb-4 pt-6">
          <MarkdownRenderer
            markdownText={wDict.section_invisible_title}
            className="pb-2"
          />
          <MarkdownRenderer
            markdownText={`${wDict.section_invisible_p1} \n\n${wDict.section_invisible_quote}`}
          />
        </div>
        <ul
          role="list"
          className="mx-auto mt-2 max-w-7xl space-y-6 px-6 text-gray-600 lg:px-8 dark:text-gray-400"
        >
          <li className="flex gap-x-2">
            <AdjustmentsHorizontalIcon
              aria-hidden="true"
              className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
            />
            <span>
              <strong className="font-semibold text-gray-900 dark:text-white">
                {wDict.item_platforms_strong}
              </strong>{' '}
              {wDict.item_platforms_desc}
            </span>
          </li>
          <li className="flex gap-x-3">
            <ChartBarIcon
              aria-hidden="true"
              className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
            />
            <span>
              <strong className="font-semibold text-gray-900 dark:text-white">
                {wDict.item_data_strong}
              </strong>{' '}
              {wDict.item_data_desc}
            </span>
          </li>
          <li className="flex gap-x-3">
            <ShieldCheckIcon
              aria-hidden="true"
              className="mt-1 size-5 flex-none text-indigo-600 dark:text-indigo-400"
            />
            <span>
              <strong className="font-semibold text-gray-900 dark:text-white">
                {wDict.item_security_strong}
              </strong>{' '}
              {wDict.item_security_desc}
            </span>
          </li>
        </ul>

        <MarkdownRenderer markdownText={wDict.outro} className="pt-4" />
      </div>
    </div>
  )
}

export default async function Websites({ params }) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const wDict = dict.websites
  const blogDict = wDict.website_portfolio

  // Merge static data with translated data
  const posts = rawPosts.map((post) => {
    // Find the corresponding translation using the post ID
    const translation = blogDict.find((t) => t.id === post.id)

    if (!translation) {
      console.warn(`Translation missing for post ID: ${post.id}`)
      return post // Return untranslated post if missing
    }

    return {
      ...post,
      title: translation.title,
      description: translation.description,
      category: {
        title: translation.category_title,
      },
      author: {
        ...post.author,
        role: translation.author_role,
      },
    }
  })
  return (
    <SimpleLayout title="Website Portfolio" marginClass="mt-6 sm:mt-10">
      <div className="pb-6">
        <InfoAlert
          text={wDict.alert_email_text}
          action={wDict.alert_email_action}
          link="mailto:fbustamantedelriob@gmail.com?subject=Website%20Portfolio%20Inquiry"
        />
      </div>
      <WebsitesInfo lang={lang} />
      <InfoAlert
        text={wDict.alert_linkedin_text}
        action={wDict.alert_linkedin_action}
        link="https://www.linkedin.com/in/fernandobustamantedelrio-bourman/"
      />

      <Blog posts={posts} />
    </SimpleLayout>
  )
}
