'use client'

import { useEffect, useRef } from 'react'

export const SiteChrome = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const setChromeHeight = () => {
      document.documentElement.style.setProperty('--chrome-height', `${el.offsetHeight}px`)
    }

    setChromeHeight()

    const observer = new ResizeObserver(setChromeHeight)
    observer.observe(el)

    return () => observer.disconnect()
  }, [])

  return <div ref={ref}>{children}</div>
}
