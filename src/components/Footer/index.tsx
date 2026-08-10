import Nav from '@/components/Nav'
import Logo from '@/components/Nav/Logo'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <div className="bg-primary text-white flex flex-col items-center justify-center gap-6 border-t py-8">
      <div className="container flex flex-col items-center justify-between gap-6 px-8 md:flex-row">
        <Logo />
        <Nav className="flex-wrap justify-center gap-x-5 gap-y-2 text-center" />
      </div>
      <div className="container flex flex-col items-center justify-between gap-1 px-8 text-center text-xs md:flex-row md:text-left">
        <p>&copy; {currentYear} GEMINI HARDSCAPE</p>
        <p>ALL RIGHTS RESERVED</p>
      </div>
    </div>
  )
}

export default Footer
