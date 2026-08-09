import type { CollectionAfterChangeHook, CollectionAfterDeleteHook } from 'payload'

import { revalidatePath } from 'next/cache'

// Shared by collections that are only ever rendered on the home page
// (Services, Testimonials), so any change just needs to revalidate `/`.
export const revalidateHomepage: CollectionAfterChangeHook = ({ doc, req: { payload, context } }) => {
  if (!context.disableRevalidate) {
    payload.logger.info('Revalidating home page')
    revalidatePath('/')
  }

  return doc
}

export const revalidateHomepageOnDelete: CollectionAfterDeleteHook = ({
  doc,
  req: { context },
}) => {
  if (!context.disableRevalidate) {
    revalidatePath('/')
  }

  return doc
}
