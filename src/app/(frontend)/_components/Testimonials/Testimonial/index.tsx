type TestimonialProps = {
  author: string
  quote: string
  location?: string | null
}

const Testimonial = ({ author, quote, location }: TestimonialProps) => {
  return (
    <div className="bg-[linear-gradient(180deg,#272727_0%,#000000_100%)] border-2 border-[#1e2939] hover:border-2 hover:border-accent flex flex-col gap-6 p-8">
      <img src="/quote.svg" alt="" className="h-10 w-10" />

      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <img key={index} src="/star.svg" alt="" className="h-4 w-4" />
        ))}
      </div>

      <p className="text-sm leading-relaxed text-muted">{quote}</p>

      <div className="border-t pt-6">
        <p className="text-xs font-extrabold tracking-[1.2px] text-white uppercase">{author}</p>
        {location && (
          <p className="mt-1 text-xs tracking-[0.6px] text-muted uppercase">{location}</p>
        )}
      </div>
    </div>
  )
}

export default Testimonial
