import type { Category as CategoryType, Media } from '@/payload-types'

import Category from './Category'
import Button from '@/components/Button'

type CategoriesProps = {
  categories: CategoryType[]
}

const Categories = ({ categories }: CategoriesProps) => {
  return (
    <div className="bg-primary text-white flex flex-col items-center justify-center py-18">
      <div className="container grid grid-cols-4 mb-4">
        {categories.map((category) => {
          const image = category.image as Media
          const imageUrl = typeof image === 'object' ? (image.url ?? undefined) : undefined

          return (
            <Category
              key={category.id}
              image={imageUrl}
              slug={category.slug ?? undefined}
              title={category.title}
            />
          )
        })}
      </div>
      <Button href="/projects" variant="secondary" label="More projects" />
    </div>
  )
}

export default Categories
