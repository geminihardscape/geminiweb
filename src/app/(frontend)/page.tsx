import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

import HomeHeroSlider from '@/heros/HomeHeroSlider'
import Services from './_components/Services'
import Testimonials from './_components/Testimonials'

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })
  const home = await payload.findGlobal({ slug: 'home' })
  const services = await payload.find({ collection: 'services', sort: 'createdAt' })
  const testimonials = await payload.find({ collection: 'testimonials', sort: 'createdAt' })

  return (
    <main className="bg-primary flex flex-col">
      {home.slides && home.slides.length > 0 && <HomeHeroSlider slides={home.slides} />}
      {services.docs.length > 0 && <Services services={services.docs} />}
      {testimonials.docs.length > 0 && <Testimonials testimonials={testimonials.docs} />}
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Inicio',
}
