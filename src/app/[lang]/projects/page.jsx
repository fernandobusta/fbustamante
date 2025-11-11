import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllProjects } from '@/lib/projects'
import { getDictionary } from '../dictionaries'

export const metadata = {
  title: 'Projects',
  description:
    'A look at some of my favorite projects—the things I´ve built during my degree and in my own time.',
}

function Project({ project }) {
  return (
    <Card as="li" key={project.name}>
      <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-xl bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        <Image
          src={project.logo}
          alt=""
          className={project.imageClass ? project.imageClass : ''}
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

export default async function Projects({ params }) {
  const { lang } = await params

  // Fetch the dictionary for the current language
  const dict = await getDictionary(lang)
  const pDict = dict.projects_page // Alias for projects dictionary

  let projects = await getAllProjects()

  projects.sort((a, b) => b.number - a.number)

  return (
    <SimpleLayout title={pDict.title} intro={pDict.intro}>
      <ul
        role="list"
        className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
      >
        {projects.map((project) => (
          <Project key={project.slug} project={project} />
        ))}
      </ul>
    </SimpleLayout>
  )
}
