import Image from 'next/image'

import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import { getAllProjects } from '@/lib/projects'

export const metadata = {
  title: 'Projects',
  description: 'Things I’ve made trying to put my dent in the universe.',
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

export default async function Projects() {
  let projects = await getAllProjects()

  projects.sort((a, b) => b.number - a.number)

  return (
    <SimpleLayout
      title="Projects"
      intro="These are some of the projects I have enjoyed most working on. Some of them during the 4 years of my Bachelor's degree in computer science, others during my free time."
    >
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
