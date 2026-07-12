import type { Media } from '@/payload-types'

type ServiceProps = {
  icon: number | Media
  title: string
  description: string
}

const Service = ({ icon, title, description }: ServiceProps) => {
  const iconUrl = typeof icon === 'object' ? icon.url : undefined

  return (
    <div className="bg-[linear-gradient(180deg,#272727_0%,#000000_100%)] border hover:border-accent flex flex-col gap-4 p-8">
      <div className=" flex h-10 w-10 ">
        {iconUrl && <img src={iconUrl} alt={title} className="h-10 w-10" />}
      </div>
      <h3 className="text-sm font-medium uppercase">{title}</h3>
      <p className="text-sm text-muted">{description}</p>
    </div>
  )
}

export default Service
