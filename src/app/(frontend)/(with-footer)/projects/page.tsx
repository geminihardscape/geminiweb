import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

import Hero from '@/heros/Hero'
import ProjectCard from './_components/ProjectCard'
import Pagination from './_components/Pagination'
import Title from '@/components/Title'
import Subtitle from '@/components/Subtitle'
import { PROJECTS_PER_PAGE } from './_components/constants'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

type Args = {
  searchParams: Promise<{ page?: string }>
}

export default async function ProjectsPage({ searchParams }: Args) {
  const { page } = await searchParams
  const currentPage = Math.max(1, Number(page) || 1)

  const payload = await getPayload({ config: configPromise })

  const projects = await payload.find({
    collection: 'projects',
    sort: '-publishedAt',
    page: currentPage,
    limit: PROJECTS_PER_PAGE,
  })

  return (
    <main className="bg-primary text-white">
      <Hero image="/heroprojects.webp">
        <h1 className="text-4xl uppercase sm:text-5xl md:text-7xl lg:text-8xl">Our Projects</h1>
      </Hero>

      <div className="container py-24">
        <Subtitle subtitle="Our work" />
        <Title title="FEATURED PROJECTS" />
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.docs.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <Pagination
          page={projects.page ?? 1}
          totalPages={projects.totalPages}
          hasPrevPage={projects.hasPrevPage}
          hasNextPage={projects.hasNextPage}
          prevPage={projects.prevPage}
          nextPage={projects.nextPage}
        />
      </div>
    </main>
  )
}

const description =
  'Browse our portfolio of custom patios, retaining walls, and outdoor living projects completed across Oakland, Macomb, and Wayne County.'

export const metadata: Metadata = {
  title: 'Our Projects',
  description,
  openGraph: mergeOpenGraph({
    title: 'Gemini Hardscape Projects',
    description,
    url: '/projects',
  }),
}
