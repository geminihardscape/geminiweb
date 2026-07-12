import Nav from '@/components/Nav'
import Logo from '@/components/Nav/Logo'

const Header = () => {
  return (
    <div className="bg-primary text-white flex items-center justify-center">
      <div className="container flex items-center justify-between px-8">
        <Logo />
        <Nav />
      </div>
    </div>
  )
}

export default Header
