import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath, revalidateTag } from 'next/cache'

import type { Category } from '../../payload-types'

export const revalidateCategory: CollectionAfterChangeHook<Category> = ({
  doc,
  req: { payload, context },
}) => {
  if (!context.disableRevalidate) {
    payload.logger.info(`Revalidating category at path: /projects/category/${doc.slug}`)

    revalidatePath('/')
    revalidatePath(`/projects/category/${doc.slug}`)
    revalidateTag('categories-sitemap', 'max')
  }

  return doc
}

export const revalidateCategoryOnDelete: CollectionAfterDeleteHook<Category> = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    revalidatePath('/')
    revalidatePath(`/projects/category/${doc?.slug}`)
    revalidateTag('categories-sitemap', 'max')
  }

  return doc
}
