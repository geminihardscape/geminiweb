import NavLink, { NavLinkType } from './NavLink'

const links: NavLinkType[] = [
  {
    label: 'Home',
    href: '/',
  },
  {
    label: 'About Us',
    href: '/',
  },
  {
    label: 'Projects',
    href: '/',
  },
  {
    label: 'Contact',
    href: '/',
  },
]

const Nav = () => {
  return (
    <ul className="flex gap-5 uppercase">
      {links.map((link: NavLinkType) => {
        return <NavLink key={link.href} {...link} />
      })}
    </ul>
  )
}

export default Nav
