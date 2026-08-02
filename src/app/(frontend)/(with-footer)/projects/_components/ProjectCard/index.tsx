import Image from 'next/image'
import Link from 'next/link'

import type { Media, Project } from '@/payload-types'

type ProjectCardProps = {
  project: Project
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  const heroImage = project.heroImage as Media
  const imageUrl = typeof heroImage === 'object' ? (heroImage.url ?? undefined) : undefined

  return (
    <div className="border-tertiary/40 group flex flex-col border">
      <div className="p-4">
        <div className="relative aspect-video overflow-hidden bg-secondary">
          {imageUrl && (
            <Image
              alt={project.title}
              className="object-cover object-center transition-transform duration-300 group-hover:scale-110"
              fill
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
              src={imageUrl}
            />
          )}
        </div>
      </div>

      <div className="flex flex-col gap-2 p-6">
        <p className="text-lg font-bold uppercase">{project.title}</p>
        {project.location && (
          <p className="text-tertiary text-xs uppercase tracking-wide">{project.location}</p>
        )}
        <hr className="border-tertiary/30 my-2" />
        <Link
          className="text-tertiary text-xs uppercase tracking-wide hover:underline"
          href={`/projects/${project.slug}`}
        >
          View Project &rarr;
        </Link>
      </div>
    </div>
  )
}

export default ProjectCard
