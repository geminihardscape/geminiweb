import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

import HomeHeroSlider from '@/heros/HomeHeroSlider'

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })
  const home = await payload.findGlobal({ slug: 'home' })

  return (
    <main className="bg-primary flex flex-1 flex-col">
      {home.slides && home.slides.length > 0 && <HomeHeroSlider slides={home.slides} />}
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Inicio',
}
