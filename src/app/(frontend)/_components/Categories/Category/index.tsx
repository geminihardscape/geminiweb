import Image from 'next/image'
import Link from 'next/link'

type CategoryProps = {
  image?: string
  title?: string
  slug?: string
}

const Category = ({ image, title = 'Category', slug }: CategoryProps) => {
  return (
    <Link
      className=" group relative block min-h-[400px] overflow-hidden p-8"
      href={slug ? `/projects/category/${slug}` : '#'}
    >
      {image && (
        <>
          <Image
            alt={title}
            className="object-cover object-center grayscale transition-all duration-300 group-hover:scale-110 group-hover:grayscale-0"
            fill
            src={image}
          />
          <div
            className="absolute inset-0 transition-opacity duration-300 group-hover:opacity-0"
            style={{
              background:
                'linear-gradient(0deg, #000000 0%, rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0) 100%)',
            }}
          />
        </>
      )}
      <p className="relative text-white text-3xl uppercase">{title}</p>
    </Link>
  )
}

export default Category
