import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

import type { Media } from '@/payload-types'

type Args = {
  params: Promise<{ slug: string }>
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

export default async function ProjectsByCategoryPage({ params }: Args) {
  const { slug } = await params
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
  })

  return (
    <main className="bg-primary container py-24 text-white">
      <h1 className="text-4xl font-medium uppercase">{category.title}</h1>

      <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {projects.docs.map((project) => {
          const heroImage = project.heroImage as Media
          const imageUrl = typeof heroImage === 'object' ? (heroImage.url ?? undefined) : undefined

          return (
            <Link
              key={project.id}
              className="group relative flex aspect-square flex-col justify-end overflow-hidden p-6"
              href={`/projects/${project.slug}`}
            >
              {imageUrl && (
                <Image
                  alt={project.title}
                  className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
                  fill
                  src={imageUrl}
                />
              )}
              <p className="relative text-lg font-medium uppercase">{project.title}</p>
            </Link>
          )
        })}
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
