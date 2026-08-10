import Nav from '@/components/Nav'
import MobileNav from '@/components/Nav/MobileNav'
import Logo from '@/components/Nav/Logo'

const Header = () => {
  return (
    <div className="bg-primary text-white relative flex items-center justify-center">
      <div className="container flex items-center justify-between px-8 py-4 md:py-0">
        <Logo />
        <Nav className="hidden md:flex" />
        <MobileNav />
      </div>
    </div>
  )
}

export default Header
