import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'

import type { Category } from '@/payload-types'
import { Media } from '@/components/Media'
import Button from '@/components/Button'
import Title from '@/components/Title'
import Subtitle from '@/components/Subtitle'
import Meta from '../_components/Meta'
import Gallery from '../_components/Gallery'

type Args = {
  params: Promise<{ slug: string }>
}

const queryProjectBySlug = async (slug: string) => {
  const payload = await getPayload({ config: configPromise })

  const projects = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  return projects.docs[0] ?? null
}

export default async function ProjectPage({ params }: Args) {
  const { slug } = await params
  const project = await queryProjectBySlug(slug)

  if (!project) notFound()

  const categories = (project.categories ?? []).filter(
    (category): category is Category => typeof category === 'object',
  )

  return (
    <main className="bg-primary text-white">
      <div className="container py-24">
        <Subtitle subtitle="Project Gallery" />
        <Title title={project.title} />

        {project.heroImage && (
          <div className="border-tertiary/40 relative mt-10 aspect-video overflow-hidden border">
            <Media
              resource={project.heroImage}
              fill
              imgClassName="object-cover object-center"
              priority
            />
          </div>
        )}

        <Gallery gallery={project.gallery} />

        <hr className="border-tertiary/30 mt-16 w-full" />

        <Meta location={project.location} year={project.year} categories={categories} />

        <div className="mt-16 flex justify-center">
          <Button label="All Projects" href="/projects" variant="secondary" />
        </div>
      </div>
    </main>
  )
}

export async function generateMetadata({ params }: Args): Promise<Metadata> {
  const { slug } = await params
  const project = await queryProjectBySlug(slug)

  return {
    title: project ? `Gemini - ${project.title}` : 'Gemini - Project',
  }
}
