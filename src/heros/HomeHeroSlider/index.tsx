'use client'

import { useEffect, useState } from 'react'

import type { Home, Media } from '@/payload-types'

import Hero from '@/heros/Hero'
import { cn } from '@/utilities/ui'

type HomeHeroSliderProps = {
  slides: NonNullable<Home['slides']>
}

const HomeHeroSlider = ({ slides }: HomeHeroSliderProps) => {
  const [activeIndex, setActiveIndex] = useState(0)

  useEffect(() => {
    if (slides.length <= 1) return

    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [slides.length])

  const activeSlide = slides[activeIndex]
  const image = activeSlide.image as Media
  const imageUrl = typeof image === 'object' ? image.url : undefined

  if (!imageUrl) return null

  return (
    <div className="relative flex flex-col">
      <Hero image={imageUrl}>
        <h1 className="font-medium text-8xl uppercase">{activeSlide.title}</h1>
        {activeSlide.subtitle && <h2 className="text-3xl font-normal">{activeSlide.subtitle}</h2>}
      </Hero>

      {slides.length > 1 && (
        <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              aria-label={`Ir al slide ${index + 1}`}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'h-2 w-2 rounded-full',
                index === activeIndex ? 'bg-white' : 'bg-white/40',
              )}
            />
          ))}
        </div>
      )}
    </div>
  )
}

export default HomeHeroSlider
