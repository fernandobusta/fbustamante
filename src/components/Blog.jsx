import Image from 'next/image'

export default function Blog({ posts }) {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8">
      <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {posts.map((post) => (
          <article
            key={post.id}
            className="flex flex-col items-start justify-between"
          >
            <div className="relative w-full">
              {/* <img
                  alt=""
                  src={post.imageUrl}
                  className="sm:aspect-2/1 lg:aspect-3/2 aspect-video w-full rounded-2xl bg-gray-100 object-cover dark:bg-gray-800"
                /> */}

              <div className="sm:aspect-2/1 lg:aspect-3/2 relative aspect-video w-full rounded-2xl bg-gray-100 dark:bg-gray-800">
                <Image
                  alt={post.title}
                  src={post.imageUrl}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="rounded-2xl object-cover"
                />
              </div>

              <div className="inset-ring inset-ring-gray-900/10 dark:inset-ring-white/10 absolute inset-0 rounded-2xl" />
            </div>
            <div className="flex max-w-xl grow flex-col justify-between">
              <div className="mt-8 flex items-center gap-x-4 text-xs">
                <time
                  dateTime={post.datetime}
                  className="text-gray-500 dark:text-gray-400"
                >
                  {post.date}
                </time>
                <a
                  href={post.category.href}
                  className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100 dark:bg-gray-800/60 dark:text-gray-300 dark:hover:bg-gray-800"
                >
                  {post.category.title}
                </a>
              </div>
              <div className="group relative grow">
                <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600 dark:text-white dark:group-hover:text-gray-300">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600 dark:text-gray-400">
                  {post.description}
                </p>
              </div>

              <div className="relative mt-8 flex items-center gap-x-4 justify-self-end">
                {/* <img
                    alt=""
                    src={post.author.imageUrl}
                    className="size-10 rounded-full bg-gray-100 dark:bg-gray-800"
                  /> */}
                <Image
                  alt={post.author.name}
                  src={post.author.imageUrl}
                  width={40} // Equivalent to size-10 (40px)
                  height={40} // Equivalent to size-10 (40px)
                  className="rounded-full bg-gray-100 object-cover dark:bg-gray-800"
                />
                <div className="text-sm/6">
                  <p className="font-semibold text-gray-900 dark:text-white">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {post.author.role}
                  </p>
                </div>
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  )
}
