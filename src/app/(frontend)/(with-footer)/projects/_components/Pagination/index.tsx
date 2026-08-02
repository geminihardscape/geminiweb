import Link from 'next/link'

type PaginationProps = {
  basePath?: string
  page: number
  totalPages: number
  hasPrevPage: boolean
  hasNextPage: boolean
  prevPage?: number | null
  nextPage?: number | null
}

const Pagination = ({
  basePath = '/projects',
  page,
  totalPages,
  hasPrevPage,
  hasNextPage,
  prevPage,
  nextPage,
}: PaginationProps) => {
  if (totalPages <= 1) return null

  return (
    <div className="mt-10 flex items-center justify-center gap-4">
      {hasPrevPage && (
        <Link
          className="border-tertiary text-tertiary border px-6 py-2 uppercase"
          href={`${basePath}?page=${prevPage}`}
        >
          Previous
        </Link>
      )}

      <span className="uppercase">
        Page {page} of {totalPages}
      </span>

      {hasNextPage && (
        <Link
          className="border-tertiary text-tertiary border px-6 py-2 uppercase"
          href={`${basePath}?page=${nextPage}`}
        >
          Next
        </Link>
      )}
    </div>
  )
}

export default Pagination
