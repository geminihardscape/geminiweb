import Button from '@/components/Button'
import Hero from '@/heros/Hero'
import Image from 'next/image'

export default async function AboutUsPage() {
  return (
    <main className="bg-secondary flex flex-col">
      <Hero image="/abouthero.webp">
        <h1 className="text-3xl text-end">
          We are commited to design a beatiful <br />
          <span className="uppercase text-8xl">outdoor space</span>
        </h1>
      </Hero>
      <div className="bg-primary flex flex-col items-center">
        <div className="max-w-3xl flex flex-col items-center p-8 mt-10 gap-8 text-center text-muted">
          <Image src="/logo2.webp" width={250} height={250} alt="" />
          <div>
            <p className="font-black text-tertiary text-3xl">NEW INSTALLS AND REPAIRS</p>
            <p className="uppercase text-3xl text-white">
              We work in Oakland, Macomb and Wayne. Free estimates.
            </p>
          </div>
          <p>
            Gemini Hardscape was founded on a simple principle: the great outdoors should be more
            than just a yard. It should be a sanctuary, a masterpiece of natural elements and human
            ingenuity. For over a decade, our team of dedicated artisans has been redefining local
            landscapes through meticulous stone work, custom masonry, and sustainable design.
          </p>
          <p>
            We believe that every project is a collaboration between our expertise and your vision.
            Whether it's a sprawling estate requiring a complex multi-level patio or a cozy backyard
            needing a bespoke fire feature, we treat every brick and boulder with the respect it
            deserves. Our process is rooted in quality, utilizing only the finest locally sourced
            materials to ensure longevity and timeless beauty.
          </p>
          <p>
            As a family-owned business, our reputation is built on the relationships we forge with
            our clients. We aren't just building hardscapes; we're building the backdrops for your
            family's future memories. From the first sketch to the final stone placement, our
            commitment to excellence is unwavering.
          </p>
          <Button label="Contact Us" href="/contact" variant="secondary" />
        </div>
      </div>
    </main>
  )
}
