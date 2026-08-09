import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import { cache, Suspense } from 'react'

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

// Deduped per-request: every section below awaits this for the same slug, so
// without cache() each one would re-run the Payload query independently.
const queryProjectBySlug = cache(async (slug: string) => {
  const payload = await getPayload({ config: configPromise })

  const projects = await payload.find({
    collection: 'projects',
    where: { slug: { equals: slug } },
    limit: 1,
  })

  return projects.docs[0] ?? null
})

const ProjectTitle = async ({ slug }: { slug: string }) => {
  const project = await queryProjectBySlug(slug)
  if (!project) notFound()
  return <Title title={project.title} />
}

const ProjectHeroImage = async ({ slug }: { slug: string }) => {
  const project = await queryProjectBySlug(slug)
  if (!project) notFound()
  if (!project.heroImage) return null
  return <Media resource={project.heroImage} fill imgClassName="object-cover object-center" priority />
}

const ProjectGallerySection = async ({ slug }: { slug: string }) => {
  const project = await queryProjectBySlug(slug)
  if (!project) notFound()
  return <Gallery gallery={project.gallery} />
}

const ProjectMetaSection = async ({ slug }: { slug: string }) => {
  const project = await queryProjectBySlug(slug)
  if (!project) notFound()
  const categories = (project.categories ?? []).filter(
    (category): category is Category => typeof category === 'object',
  )
  return <Meta location={project.location} year={project.year} categories={categories} />
}

export default async function ProjectPage({ params }: Args) {
  const { slug } = await params

  return (
    <main className="bg-primary text-white">
      <div className="container py-24">
        <Subtitle subtitle="Project Gallery" />

        <Suspense
          fallback={
            <div className="flex flex-col items-center justify-center p-4">
              <div className="bg-secondary/60 h-9 w-64 animate-pulse" />
              <hr className="border-tertiary mt-4 h-0.5 w-24 border-0" />
            </div>
          }
        >
          <ProjectTitle slug={slug} />
        </Suspense>

        {/*
          This container carries the shared view-transition-name matched by
          the project card, so it must mount immediately (no DB wait) for the
          card -> hero morph to actually play. Only the image inside is deferred.
        */}
        <div
          className="border-tertiary/40 relative mt-10 aspect-video overflow-hidden border"
          style={{ viewTransitionName: `project-hero-${slug}` }}
        >
          <Suspense fallback={<div className="bg-secondary/40 absolute inset-0 animate-pulse" />}>
            <ProjectHeroImage slug={slug} />
          </Suspense>
        </div>

        <Suspense
          fallback={
            <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
              {Array.from({ length: 4 }).map((_, index) => (
                <div
                  key={index}
                  className="border-tertiary/40 bg-secondary/40 relative aspect-square animate-pulse overflow-hidden border"
                />
              ))}
            </div>
          }
        >
          <ProjectGallerySection slug={slug} />
        </Suspense>

        <hr className="border-tertiary/30 mt-16 w-full" />

        <Suspense fallback={<div className="bg-secondary/40 mt-6 h-6 w-full animate-pulse" />}>
          <ProjectMetaSection slug={slug} />
        </Suspense>

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
