import type { Metadata } from 'next'

import configPromise from '@payload-config'
import { getPayload } from 'payload'

import HomeHeroSlider from '@/heros/HomeHeroSlider'
import Services from '@/components/Services'
import Title from '@/components/Title'

export default async function HomePage() {
  const payload = await getPayload({ config: configPromise })
  const home = await payload.findGlobal({ slug: 'home' })
  const services = await payload.find({ collection: 'services', sort: 'createdAt' })

  return (
    <main className="bg-primary flex flex-col">
      {home.slides && home.slides.length > 0 && <HomeHeroSlider slides={home.slides} />}
      <div className="bg-secondary w-full py-8">
        <div className="w-full container text-white">
          <Title title="Our Services" />
          <p className="text-center">
            Premium hardscaping solutions designed to transform your outdoor space
          </p>
          {services.docs.length > 0 && <Services services={services.docs} />}
        </div>
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Inicio',
}
