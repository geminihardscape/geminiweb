type HeroProps = {
  image: string
  children: React.ReactNode
}

const Hero = ({ image, children }: HeroProps) => {
  return (
    <div
      className="bg-cover bg-center min-h-[calc(100vh-var(--chrome-height,0px))] shrink-0 flex flex-col"
      style={{
        backgroundImage: `linear-gradient(to bottom, #000000 0%, #66666682 50%), url(${image})`,
      }}
    >
      <div className="container flex flex-col items-end justify-center  flex-1 text-white">
        {children}
        <hr className="h-0.5 w-24 bg-accent border-0 mt-8" />
      </div>
    </div>
  )
}

export default Hero
