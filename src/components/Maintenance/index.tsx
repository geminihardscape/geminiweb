import Image from 'next/image'

const Maintenance = () => {
  return (
    <main className="bg-primary text-white flex min-h-screen flex-col items-center justify-center gap-6 px-8 text-center">
      <Image
        src="/gemini-logo.png"
        alt="Gemini Hardscape"
        width={400}
        height={120}
        priority
        className="h-12 w-auto"
      />
      <h1 className="text-3xl font-black md:text-5xl">Site Under Construction</h1>
      <p className="max-w-xl text-base opacity-80 md:text-lg">
        We&apos;re working on improving our website. Please check back soon.
      </p>
    </main>
  )
}

export default Maintenance
