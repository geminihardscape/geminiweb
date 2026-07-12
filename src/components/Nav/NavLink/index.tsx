import Link from 'next/link'

export type NavLinkType = {
  label: string
  href: string
}
const NavLink = ({ label, href }: NavLinkType) => {
  return (
    <li>
      <Link href={href}>{label}</Link>
    </li>
  )
}

export default NavLink
