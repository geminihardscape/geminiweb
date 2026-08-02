import type { Category } from '@/payload-types'

import MetaItem from '../MetaItem'

type MetaProps = {
  location?: string | null
  year?: number | null
  categories: Category[]
}

const Meta = ({ location, year, categories }: MetaProps) => {
  return (
    <dl className="mt-6 flex flex-wrap items-center justify-between gap-x-8 gap-y-2">
      {location && <MetaItem label="Location" value={location} />}
      {year && <MetaItem label="Year" value={year} />}
      {categories.length > 0 && (
        <MetaItem label="Scope" value={categories.map((category) => category.title).join(', ')} />
      )}
    </dl>
  )
}

export default Meta
