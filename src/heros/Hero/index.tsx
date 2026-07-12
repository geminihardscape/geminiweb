import Image from 'next/image'

type HeroProps = {
  image: string
  children: React.ReactNode
}

const Hero = ({ image, children }: HeroProps) => {
  return (
    <div className="relative h-screen max-h-[746px] shrink-0 flex flex-col">
      <Image src={image} alt="" fill priority className="object-cover object-center" />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'linear-gradient(to bottom, #000000 0%, #66666682 50%)',
        }}
      />

      <div className="container relative flex flex-1 flex-col items-end justify-center text-white">
        {children}
        <hr className="h-0.5 w-24 bg-accent border-0 mt-8" />
      </div>
    </div>
  )
}

export default Hero
