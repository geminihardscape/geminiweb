import type { Service as ServiceType } from '@/payload-types'

import Service from './Service'

type ServicesProps = {
  services: ServiceType[]
}

const Services = ({ services }: ServicesProps) => {
  return (
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
  )
}

export default Services
