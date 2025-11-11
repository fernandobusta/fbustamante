import rehypePrism from '@mapbox/rehype-prism'
import nextMDX from '@next/mdx'
import remarkGfm from 'remark-gfm'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'ts', 'tsx', 'mdx'],
  outputFileTracingIncludes: {
    '/projects/*': ['./src/app/[lang]/projects/**/*.mdx'],
  },
  experimental: {},
}

const withMDX = nextMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [
      'remark-gfm', // Using the package name as a string
    ],
    rehypePlugins: [
      '@mapbox/rehype-prism', // Using the package name as a string
    ],
  },
})

export default withMDX(nextConfig)
