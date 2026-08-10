import Image from 'next/image'
import Link from 'next/link'

const Logo = () => {
  return (
    <Link href="/" className="shrink-0">
      <Image
        src="/gemini-logo.png"
        alt="Gemini Hardscape"
        width={400}
        height={120}
        priority
        className="h-10 w-auto md:h-12"
      />
    </Link>
  )
}

export default Logo
