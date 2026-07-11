import Nav from '@/components/Nav'
import Logo from '@/components/Nav/Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="bg-primary text-white flex flex-col items-center justify-center py-4">
      <div className="max-w-7xl w-full flex items-center justify-between px-8">
        <Logo />
        <Nav />
      </div>
      <div className="max-w-7xl w-full flex items-center justify-between px-8 text-xs">
        <p>&copy; {currentYear} GEMINI HANDSCAPING </p>
        <p>ALL RIGHTS RESERVED</p>
      </div>
    </div>
  )
}

export default Footer
