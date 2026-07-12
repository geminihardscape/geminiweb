import { Metadata } from 'next'
import configPromise from '@payload-config'
import Image from 'next/image'
import { getPayload } from 'payload'
import { FormBlock } from '@/blocks/Form/Component'
import Contact from '@/components/Contact'

export default async function ContactPage() {
  return (
    <main className="bg-secondary flex flex-col">
      <div className="relative h-screen max-h-[550px] shrink-0 flex flex-col">
        <Image
          src="/herocontact.webp"
          alt=""
          fill
          priority
          className="object-cover object-center"
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

export const metadata: Metadata = {
  title: 'Gemini - Contact',
}
