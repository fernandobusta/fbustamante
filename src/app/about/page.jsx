import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import portraitImage from '@/images/sistem-pitch.jpeg'

function SocialLink({ className, href, children, icon: Icon }) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata = {
  title: 'About',
  description: 'I’m Fernando, currently living in Dublin.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            I´m Fernando, an Integrations Engineer at Cellusys
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I am an Integration Engineer at <strong>Cellusys</strong>, where
              we design, deploy, and integrate advanced telecom software
              solutions that keep mobile networks secure, efficient, and
              intelligent. Our systems protect critical signalling traffic and
              help operators gain visibility, control, and monetisation
              opportunities across their networks.
            </p>
            <p>
              I have a strong background in
              <strong>
                software engineering, networking, and telecom protocols
              </strong>
              , with hands-on expertise across SS7, Diameter, GTP, and 5G
              technologies. I’m deeply passionate about
              <strong>
                5G innovation, signalling intelligence, and cybersecurity in
                telecom
              </strong>
              — helping build solutions that strengthen network resilience while
              enabling operators to deliver safer and smarter connectivity.
              Alongside the technical, I also focus on the{' '}
              <strong>human side of engineering</strong>: improving how we
              communicate with customers, foster trust, and deliver exceptional
              service.
            </p>
            <p>
              I’m driven by complex systems, meaningful collaboration, and the
              challenge of turning technical depth into business impact. My goal
              is to continue growing as an engineer and communicator,
              contributing to a more secure, intelligent, and connected telecom
              ecosystem.
            </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href="https://github.com/fernandobusta"
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href="https://www.linkedin.com/in/fernandobustamantedelrio-bourman/"
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:fbustamantedelriob@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              fbustamantedelriob@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
