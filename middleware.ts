import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const pathname = request.nextUrl.pathname

  // Skip static files, api routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next()
  }

  // Handle shop.abujablazers.com
  if (hostname === 'shop.abujablazers.com') {
    if (!pathname.startsWith('/shop')) {
      return NextResponse.rewrite(
        new URL(`/shop${pathname === '/' ? '' : pathname}`, request.url)
      )
    }
  }

  // Handle players.abujablazers.com
  if (hostname === 'players.abujablazers.com') {
    if (!pathname.startsWith('/player-market')) {
      return NextResponse.rewrite(
        new URL(`/player-market${pathname === '/' ? '' : pathname}`, request.url)
      )
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}