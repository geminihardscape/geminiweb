import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'

import EmptyState from '@/components/EmptyState'
import Hero from '@/heros/Hero'
import ProjectCard from '../../_components/ProjectCard'
import Pagination from '../../_components/Pagination'
import { PROJECTS_PER_PAGE } from '../../_components/constants'

type Args = {
  params: Promise<{ slug: string }>
  searchParams: Promise<{ page?: string }>
}

const queryCategoryBySlug = async (slug: string) => {
  const payload = await getPayload({ config: configPromise })

  const categories = await payload.find({
    collection: 'categories',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  return categories.docs[0] ?? null
}

export default async function ProjectsByCategoryPage({ params, searchParams }: Args) {
  const { slug } = await params
  const { page } = await searchParams
  const currentPage = Math.max(1, Number(page) || 1)

  const category = await queryCategoryBySlug(slug)

  if (!category) notFound()

  const payload = await getPayload({ config: configPromise })
  const projects = await payload.find({
    collection: 'projects',
    where: {
      categories: {
        in: [category.id],
      },
    },
    page: currentPage,
    limit: PROJECTS_PER_PAGE,
  })

  return (
    <main className="bg-primary text-white">
      <Hero image="/heroprojects.webp">
        <h1 className="text-8xl uppercase">{category.title}</h1>
      </Hero>

      <div className="container py-24">
        {projects.docs.length > 0 ? (
          <>
            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {projects.docs.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>

            <Pagination
              basePath={`/projects/category/${slug}`}
              page={projects.page ?? 1}
              totalPages={projects.totalPages}
              hasPrevPage={projects.hasPrevPage}
              hasNextPage={projects.hasNextPage}
              prevPage={projects.prevPage}
              nextPage={projects.nextPage}
            />
          </>
        ) : (
          <EmptyState
            message="No projects in this category yet."
            ctaLabel="All Projects"
            ctaHref="/projects"
          />
        )}
      </div>
    </main>
  )
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params
  const category = await queryCategoryBySlug(slug)

  return {
    title: category ? `${category.title} Projects` : 'Projects',
  }
}
