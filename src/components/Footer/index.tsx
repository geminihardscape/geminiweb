import Nav from '@/components/Nav'
import Logo from '@/components/Nav/Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="bg-primary text-white flex flex-col items-center justify-center py-4">
      <div className="container flex items-center justify-between px-8">
        <Logo />
        <Nav />
      </div>
      <div className="container flex items-center justify-between px-8 text-xs">
        <p>&copy; {currentYear} GEMINI HANDSCAPING </p>
        <p>ALL RIGHTS RESERVED</p>
      </div>
    </div>
  )
}

export default Footer
