import type { Metadata } from 'next'

import { cn } from '@/utilities/ui'
import { Red_Hat_Display } from 'next/font/google'
import React from 'react'

import { AdminBar } from '@/components/AdminBar'
import { mergeOpenGraph } from '@/utilities/mergeOpenGraph'
import { draftMode } from 'next/headers'
import { ViewTransitions } from 'next-view-transitions'

import './globals.css'
import { getServerSideURL } from '@/utilities/getURL'
import Header from '@/components/Header'

const redHatDisplay = Red_Hat_Display({
  subsets: ['latin'],
  weight: ['400', '500', '900'],
  variable: '--font-red-hat-display',
})

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { isEnabled } = await draftMode()

  return (
    <ViewTransitions>
      <html className={cn(redHatDisplay.variable)} lang="en">
        <body>
          <AdminBar
            adminBarProps={{
              preview: isEnabled,
            }}
          />
          <Header />

          {children}
        </body>
      </html>
    </ViewTransitions>
  )
}

export const metadata: Metadata = {
  metadataBase: new URL(getServerSideURL()),
  title: {
    default: 'Gemini Hardscape',
    template: '%s | Gemini Hardscape',
  },
  description:
    'Custom patios, retaining walls, and outdoor living spaces built by Gemini Hardscape — serving Oakland, Macomb, and Wayne. Free estimates on new installs and repairs.',
  openGraph: mergeOpenGraph(),
  twitter: {
    card: 'summary_large_image',
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '32x32' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
}
