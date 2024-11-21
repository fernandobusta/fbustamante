'use client'

import { useContext } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

import { AppContext } from '@/app/providers'
import { Container } from '@/components/Container'
import { Prose } from '@/components/Prose'

import { Subheading } from '@/components/heading'
import { Badge } from '@/components/badge'
import { Divider } from '@/components/divider'

import { GitHubIcon } from '@/components/SocialIcons'

export function RepoTile({ title, url, lang }) {
  return (
    <Link
      href={url}
      className="transition hover:text-teal-500 group-hover:fill-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
    >
      <Divider />
      <div className="mb-6 mt-6 text-lg/6 font-medium sm:text-sm/6">
        {title}
      </div>

      <div className="group flex text-sm font-medium text-zinc-800 transition">
        <GitHubIcon className="h-6 w-6 flex-none fill-zinc-500 transition" />
        <span className="ml-4">
          <Badge color="lime">{lang}</Badge>
        </span>
      </div>

      <div className="mt-3 text-sm/6 sm:text-xs/6"></div>
    </Link>
  )
}

function ArrowLeftIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M7.25 11.25 3.75 8m0 0 3.5-3.25M3.75 8h8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function ProjectLayout({ project, children }) {
  let router = useRouter()
  let { previousPathname } = useContext(AppContext)

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          {previousPathname && (
            <button
              type="button"
              onClick={() => router.back()}
              aria-label="Go back to projects"
              className="group mb-8 flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 transition lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 dark:ring-white/10 dark:hover:border-zinc-700 dark:hover:ring-white/20"
            >
              <ArrowLeftIcon className="h-4 w-4 stroke-zinc-500 transition group-hover:stroke-zinc-700 dark:stroke-zinc-500 dark:group-hover:stroke-zinc-400" />
            </button>
          )}
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                {project.name}
              </h1>
              <time
                dateTime={project.date}
                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                <span className="ml-3">{project.date}</span>
              </time>
            </header>
            <Prose className="mt-8" data-mdx-content>
              {children}
            </Prose>
            {project.repos && (
              <>
                <div className="mt-8 flex items-end justify-between">
                  <Subheading>
                    For more information, please check out the repos:
                  </Subheading>
                </div>
                <ul
                  role="list"
                  className="mt-4 grid gap-8 sm:grid-cols-2 xl:grid-cols-4"
                >
                  {project.repos.map((repo) => (
                    <RepoTile
                      title={repo.name}
                      url={repo.url}
                      lang={repo.lang}
                    />
                  ))}
                </ul>
              </>
            )}
          </article>
        </div>
      </div>
    </Container>
  )
}
