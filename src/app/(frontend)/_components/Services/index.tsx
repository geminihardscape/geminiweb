import type { Service as ServiceType } from '@/payload-types'

import Service from './Service'
import Title from '@/components/Title'

type ServicesProps = {
  services: ServiceType[]
}

const Services = ({ services }: ServicesProps) => {
  return (
    <div className="bg-secondary w-full py-8">
      <div className="w-full container text-white">
        <Title title="Our Services" />
        <p className="text-center">
          Premium hardscaping solutions designed to transform your outdoor space
        </p>
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 lg:grid-cols-3 mt-10">
          {services.map((service) => (
            <Service
              key={service.id}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
