import Image from 'next/image'
import Link from 'next/link'

import { getDictionary } from './dictionaries'

import { Button } from '@/components/Button'
import { Card } from '@/components/Card'
import { Container } from '@/components/Container'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'
import logoCellusys from '@/images/logos/cellusys-logo.jpg'
import logoBoxing from '@/images/logos/dcu-boxing-logo.jpeg'
import logoFuture from '@/images/logos/future-logo.jpeg'
import logoOxfam from '@/images/logos/oxfam-logo.png'
import tutor from '@/images/logos/tutor.png'
import waiter from '@/images/logos/waiter.png'

import { getAllProjects } from '@/lib/projects'

function MailIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 7.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="m4 6 6.024 5.479a2.915 2.915 0 0 0 3.952 0L20 6"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function BriefcaseIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  )
}

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Project({ project }) {
  return (
    <Card as="li" key={project.name}>
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={project.logo}
          alt=""
          className={`rounded-xl ${project.imageClass}`}
          unoptimized
        />
      </div>
      <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
        <Card.Link href={`/projects/${project.slug}`}>{project.name}</Card.Link>
      </h2>
      <p className="text-xs font-medium text-zinc-400 dark:text-zinc-200">
        <span>{project.date}</span>
      </p>

      <Card.Description>{project.description}</Card.Description>
      <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
        <span>{project.title}</span>
      </p>
    </Card>
  )
}

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

function Role({ role, hDict }) {
  let startLabel =
    typeof role.start === 'string' ? role.start : role.start.label
  let startDate =
    typeof role.start === 'string' ? role.start : role.start.dateTime

  let endLabel = typeof role.end === 'string' ? role.end : role.end.label
  let endDate = typeof role.end === 'string' ? role.end : role.end.dateTime

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={role.logo}
          alt=""
          className={role.imageClass ? role.imageClass : 'h-7 w-7'}
          unoptimized
        />
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">
          {role.title}
        </dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${startLabel} ${hDict.role_date_separator} ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{' '}
          <span aria-hidden="true">—</span>{' '}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  )
}

function Resume({ hDict }) {
  let resume = [
    {
      company: 'Cellusys',
      localizedCompany: hDict.company_cellusys,
      imageClass: 'rounded-full',
      title: 'Integration Engineer',
      localizedTitle: hDict.title_ie,
      logo: logoCellusys,
      start: '2025',
      end: hDict.date_present,
    },
    {
      company: 'Cellusys',
      localizedCompany: hDict.company_cellusys,
      imageClass: 'rounded-full',
      title: 'Software Engineer',
      localizedTitle: hDict.title_se,
      logo: logoCellusys,
      start: '2023',
      end: '2024',
    },
    {
      company: 'DCU Boxing Club',
      localizedCompany: hDict.company_dcu_abc,
      imageClass: 'rounded-full',
      title: 'Sponsorship & Events Officer',
      localizedTitle: hDict.title_officer,
      logo: logoBoxing,
      start: '2023',
      end: '2024',
    },
    {
      company: 'Future Connections',
      localizedCompany: hDict.company_future,
      title: 'Software Engineer Intern',
      localizedTitle: hDict.title_se_intern,
      imageClass: 'rounded-full',
      logo: logoFuture,
      start: '2022',
      end: '2022',
    },
    {
      company: 'Private Events',
      localizedCompany: hDict.company_private_events,
      title: 'Wedding Catering and Restaurants',
      localizedTitle: hDict.title_waiter,
      logo: waiter,
      start: '2018',
      end: '2022',
    },
    {
      company: 'Private Tutor',
      localizedCompany: hDict.company_private_tutor,
      title: 'Maths, Languages and Others',
      localizedTitle: hDict.title_tutor,
      logo: tutor,
      start: '2019',
      end: '2024',
    },
    {
      company: 'Oxfam',
      localizedCompany: hDict.company_oxfam,
      title: 'Volunteer',
      localizedTitle: hDict.title_volunteer,
      logo: logoOxfam,
      start: '2016',
      end: '2017',
    },
  ]
  return (
    <div className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40">
      <Link href="work">
        <h2 className="flex text-sm font-semibold text-zinc-900 hover:text-teal-500 dark:text-zinc-100 dark:hover:text-teal-400">
          <BriefcaseIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">{hDict.resume_heading}</span>
        </h2>
      </Link>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} hDict={hDict} />
        ))}
      </ol>
      <Button href="#" variant="secondary" className="group mt-6 w-full">
        {hDict.resume_button}
        <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
      </Button>
    </div>
  )
}

export default async function Home({ params }) {
  const { lang } = await params
  const dict = await getDictionary(lang)
  const hDict = dict.home
  const socialDict = dict.links

  let projects = (await getAllProjects())
    .sort((a, b) => b.number - a.number)
    .slice(0, 2)

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
            {hDict.bio_name}
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            {hDict.bio_text}
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/fernandobusta"
              aria-label={socialDict.github}
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://www.linkedin.com/in/fernandobustamantedelrio-bourman/"
              aria-label={socialDict.linkedin}
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            {projects.map((project) => (
              <Project key={project.slug} project={project} />
            ))}
          </div>
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <Resume hDict={hDict} />
          </div>
        </div>
      </Container>
    </>
  )
}
