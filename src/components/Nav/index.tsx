import { cn } from '@/utilities/ui'

import NavLink from './NavLink'
import { links } from './links'

type NavProps = {
  className?: string
}

const Nav = ({ className }: NavProps) => {
  return (
    <ul className={cn('flex gap-5 uppercase', className)}>
      {links.map((link) => (
        <NavLink key={link.href} {...link} />
      ))}
    </ul>
  )
}

export default Nav
