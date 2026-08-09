'use client'

import { useState } from 'react'
import { flushSync } from 'react-dom'
import { Plus } from 'lucide-react'

import type { Project } from '@/payload-types'

import { Media } from '@/components/Media'
import Lightbox from './Lightbox'

type GalleryProps = {
  gallery: Project['gallery']
}

const LIGHTBOX_TRANSITION_NAME = 'gallery-image'

const runViewTransition = (update: () => void, direction?: 'next' | 'prev') => {
  if (typeof document !== 'undefined' && 'startViewTransition' in document) {
    if (direction) {
      document.documentElement.dataset.lightboxDirection = direction
    } else {
      delete document.documentElement.dataset.lightboxDirection
    }

    const transition = document.startViewTransition(() => flushSync(update))
    // A new transition can interrupt this one (e.g. rapid clicks), which rejects
    // `ready` with an AbortError per spec — that's expected, not a bug.
    transition.ready.catch(() => {})
  } else {
    update()
  }
}

const Gallery = ({ gallery }: GalleryProps) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null)
  // Only the thumbnail at this index carries the shared view-transition-name at
  // any given moment, so at most one element (besides root) is ever named —
  // otherwise every thumbnail would live in its own top-layer group and they'd
  // stack in DOM order instead of visually above/below each other correctly.
  const [namedIndex, setNamedIndex] = useState<number | null>(null)

  if (!gallery || gallery.length === 0) return null

  const openLightbox = (index: number) => {
    // Assign the name to the clicked thumbnail immediately (outside the
    // transition) so it's already present when the transition captures the
    // "before" snapshot.
    flushSync(() => setNamedIndex(index))
    runViewTransition(() => {
      setActiveIndex(index)
      setNamedIndex(null)
    })
  }

  const closeLightbox = () => {
    if (activeIndex === null) return
    const index = activeIndex
    runViewTransition(() => {
      setActiveIndex(null)
      setNamedIndex(index)
    })
  }

  const goToPrevious = () => {
    if (activeIndex === null) return
    const nextIndex = (activeIndex - 1 + gallery.length) % gallery.length
    runViewTransition(() => setActiveIndex(nextIndex), 'prev')
  }

  const goToNext = () => {
    if (activeIndex === null) return
    const nextIndex = (activeIndex + 1) % gallery.length
    runViewTransition(() => setActiveIndex(nextIndex), 'next')
  }

  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-8 md:grid-cols-2">
        {gallery.map((item, index) => (
          <div
            key={item.id}
            className="border-tertiary/40 relative aspect-square overflow-hidden border"
            style={{
              viewTransitionName: namedIndex === index ? LIGHTBOX_TRANSITION_NAME : undefined,
            }}
          >
            <Media resource={item.image} fill imgClassName="object-cover object-center" />
            <button
              type="button"
              onClick={() => openLightbox(index)}
              aria-label="Ampliar imagen"
              className="border-tertiary/40 bg-primary/70 hover:bg-tertiary/10 absolute top-2 right-2 flex h-10 w-10 items-center justify-center border backdrop-blur-sm transition-colors"
            >
              <Plus className="text-tertiary h-5 w-5" />
            </button>
          </div>
        ))}
      </div>

      {activeIndex !== null && (
        <Lightbox
          images={gallery.map((item) => item.image)}
          transitionName={LIGHTBOX_TRANSITION_NAME}
          index={activeIndex}
          onClose={closeLightbox}
          onPrevious={goToPrevious}
          onNext={goToNext}
        />
      )}
    </>
  )
}

export default Gallery
