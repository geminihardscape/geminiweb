import type { Metadata } from 'next'
import { getServerSideURL } from './getURL'

const defaultOpenGraph: Metadata['openGraph'] = {
  type: 'website',
  description:
    'Custom patios, retaining walls, and outdoor living spaces built by Gemini Hardscape — serving Oakland, Macomb, and Wayne. Free estimates on new installs and repairs.',
  images: [
    {
      url: `${getServerSideURL()}/heroprojects.webp`,
      width: 1388,
      height: 778,
    },
  ],
  siteName: 'Gemini Hardscape',
  title: 'Gemini Hardscape',
}

export const mergeOpenGraph = (og?: Metadata['openGraph']): Metadata['openGraph'] => {
  return {
    ...defaultOpenGraph,
    ...og,
    images: og?.images ? og.images : defaultOpenGraph.images,
  }
}
