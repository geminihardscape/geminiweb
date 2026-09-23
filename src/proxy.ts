import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
  if (process.env.MAINTENANCE_MODE !== 'true') {
    return NextResponse.next()
  }

  if (request.nextUrl.pathname === '/') {
    return NextResponse.next()
  }

  return NextResponse.rewrite(new URL('/', request.url))
}

export const config = {
  matcher: [
    '/((?!admin|api|_next/static|_next/image|favicon.ico|site.webmanifest|robots.txt|.*\\.(?:ico|png|jpg|jpeg|svg|webp|xml|txt|json)$).*)',
  ],
}
