export type NavLinkType = {
  label: string
  href: string
}
const NavLink = ({ label, href }: NavLinkType) => {
  return (
    <li>
      <a href={href}>{label}</a>
    </li>
  )
}

export default NavLink
