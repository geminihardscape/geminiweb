import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

import HomeHeroSlider from '@/heros/HomeHeroSlider'
import Services from './_components/Services'
import Testimonials from './_components/Testimonials'
import Contact from '@/components/Contact'
import Categories from './_components/Categories'

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })
  const home = await payload.findGlobal({ slug: 'home' })
  const services = await payload.find({ collection: 'services', sort: 'createdAt' })
  const testimonials = await payload.find({ collection: 'testimonials', sort: 'createdAt' })
  const categories = await payload.find({ collection: 'categories' })

  return (
    <main className="bg-primary flex flex-col">
      {home.slides && home.slides.length > 0 && <HomeHeroSlider slides={home.slides} />}
      {services.docs.length > 0 && <Services services={services.docs} />}
      {categories.docs.length > 0 && <Categories categories={categories.docs} />}
      {testimonials.docs.length > 0 && <Testimonials testimonials={testimonials.docs} />}
      <Contact />
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Gemini - Home',
}
