'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cn } from '@/utilities/ui'

export type NavLinkType = {
  label: string
  href: string
}
const NavLink = ({ label, href }: NavLinkType) => {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <li>
      <Link className={cn(isActive && 'text-tertiary')} href={href}>
        {label}
      </Link>
    </li>
  )
}

export default NavLink
