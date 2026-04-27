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
    if (pathname === '/') {
      return NextResponse.rewrite(new URL('/shop', request.url))
    }
    if (pathname.startsWith('/shop')) {
      return NextResponse.next()
    }
    // Anything else → redirect back to main domain
    return NextResponse.redirect(new URL(`https://abujablazers.com${pathname}`))
  }

  // Handle players.abujablazers.com
  if (hostname === 'players.abujablazers.com') {
    if (pathname === '/') {
      return NextResponse.rewrite(new URL('/player-market', request.url))
    }
    if (pathname.startsWith('/player-market')) {
      return NextResponse.next()
    }
    // Anything else → redirect back to main domain
    return NextResponse.redirect(new URL(`https://abujablazers.com${pathname}`))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}