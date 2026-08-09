import { Metadata } from 'next'
import configPromise from '@payload-config'
import Image from 'next/image'
import { getPayload } from 'payload'
import { FormBlock } from '@/blocks/Form/Component'
import Contact from '@/components/Contact'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'

export default async function ContactPage() {
  return (
    <main className="bg-secondary flex flex-col">
      <div className="relative h-screen max-h-[550px] shrink-0 flex flex-col">
        <Image
          alt="Gemini Hardscape outdoor living space"
          className="object-cover object-center"
          fill
          priority
          sizes="100vw"
          src="/herocontact.webp"
        />

        <div className="container relative flex flex-1 flex-col items-end justify-center text-white">
          <h1 className="uppercase text-8xl text-end">Contact</h1>
          <hr className="h-0.5 w-24 bg-accent border-0 mt-8" />
        </div>
      </div>
      <Contact />
    </main>
  )
}

const description =
  'Get a free estimate from Gemini Hardscape. Serving Oakland, Macomb, and Wayne with expert patio, retaining wall, and outdoor living installations.'

export const metadata: Metadata = {
  title: 'Contact & Free Estimate',
  description,
  openGraph: mergeOpenGraph({
    title: 'Contact Gemini Hardscape',
    description,
    url: '/contact',
  }),
}
