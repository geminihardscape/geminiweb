'use client'

import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { usePathname } from 'next/navigation'

import { cn } from '@/utilities/ui'

import NavLink from '../NavLink'
import { links } from '../links'

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [isOpen])

  return (
    <div className="md:hidden">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
        className="text-white"
      >
        {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
      </button>

      <div
        className={cn(
          'bg-primary border-tertiary/40 absolute inset-x-0 top-full z-40 overflow-hidden border-t transition-[max-height] duration-300 ease-in-out',
          isOpen ? 'max-h-96' : 'max-h-0',
        )}
      >
        <ul className="flex flex-col items-center gap-6 px-8 py-8 uppercase">
          {links.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </ul>
      </div>
    </div>
  )
}

export default MobileNav
