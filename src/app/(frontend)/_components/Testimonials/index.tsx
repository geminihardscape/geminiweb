import type { Testimonial as TestimonialType } from '@/payload-types'

import Testimonial from './Testimonial'
import Title from '@/components/Title'

type TestimonialsProps = {
  testimonials: TestimonialType[]
}

const Testimonials = ({ testimonials }: TestimonialsProps) => {
  return (
    <div className="bg-primary w-full py-8">
      <div className="w-full container text-white">
        <Title title="What Our Clients Say" />
        <div className="mt-10 grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Testimonial
              key={testimonial.id}
              author={testimonial.author}
              quote={testimonial.quote}
              location={testimonial.location}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Testimonials
