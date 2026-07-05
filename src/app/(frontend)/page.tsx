import type { Metadata } from 'next'
import Link from 'next/link'

export default function HomePage() {
  return (
    <main className="container pt-24 pb-24">
      <div className="prose dark:prose-invert max-w-none">
        <h1>Bienvenido</h1>
        <p>
          Esta página de inicio (y el resto de páginas institucionales) se construyen a medida en
          Next.js. El admin de Payload solo gestiona <Link href="/proyectos">Proyectos</Link> y el{' '}
          <Link href="/posts">Blog</Link>.
        </p>
      </div>
    </main>
  )
}

export const metadata: Metadata = {
  title: 'Inicio',
}
