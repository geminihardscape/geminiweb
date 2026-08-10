'use client'

import { useEffect } from 'react'
import { ChevronLeft, ChevronRight, X } from 'lucide-react'

import type { Media as MediaDoc } from '@/payload-types'
import { Media } from '@/components/Media'

type LightboxProps = {
  images: (number | MediaDoc)[]
  transitionName: string
  index: number
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
}

const Lightbox = ({ images, transitionName, index, onClose, onPrevious, onNext }: LightboxProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose()
      if (event.key === 'ArrowLeft') onPrevious()
      if (event.key === 'ArrowRight') onNext()
    }

    document.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [onClose, onPrevious, onNext])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={(event) => {
          event.stopPropagation()
          onClose()
        }}
        aria-label="Cerrar"
        className="border-tertiary/40 hover:bg-tertiary absolute top-4 right-4 z-10 flex h-10 w-10 items-center justify-center border bg-black/50 text-white transition-colors"
      >
        <X className="h-5 w-5" />
      </button>

      {images.length > 1 && (
        <>
          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              onPrevious()
            }}
            aria-label="Imagen anterior"
            className="border-tertiary/40 hover:bg-tertiary absolute top-1/2 left-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border bg-black/50 text-white transition-colors"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>

          <button
            type="button"
            onClick={(event) => {
              event.stopPropagation()
              onNext()
            }}
            aria-label="Siguiente imagen"
            className="border-tertiary/40 hover:bg-tertiary absolute top-1/2 right-4 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center border bg-black/50 text-white transition-colors"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        </>
      )}

      <div
        className="relative h-[80vh] w-full max-w-5xl"
        style={{ viewTransitionName: transitionName }}
        onClick={(event) => event.stopPropagation()}
      >
        <Media resource={images[index]} fill imgClassName="object-contain" />
      </div>
    </div>
  )
}

export default Lightbox
