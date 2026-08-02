import type { Project } from '@/payload-types'

import { Media } from '@/components/Media'

type GalleryProps = {
  gallery: Project['gallery']
}

const Gallery = ({ gallery }: GalleryProps) => {
  if (!gallery || gallery.length === 0) return null

  return (
    <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
      {gallery.map((item) => (
        <div
          key={item.id}
          className="border-tertiary/40 relative aspect-square overflow-hidden border"
        >
          <Media resource={item.image} fill imgClassName="object-cover object-center" />
        </div>
      ))}
    </div>
  )
}

export default Gallery
