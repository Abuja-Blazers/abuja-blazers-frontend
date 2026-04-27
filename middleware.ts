import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const hostname = request.headers.get('host') || ''
  const pathname = request.nextUrl.pathname

  // Handle shop.abujablazers.com
  if (hostname === 'shop.abujablazers.com') {
    // Only allow shop-related paths
    if (!pathname.startsWith('/shop')) {
      return NextResponse.redirect(
        new URL(`https://abujablazers.com${pathname}`),
        308
      )
    }

    return NextResponse.rewrite(
      new URL(`/shop${pathname}`, request.url)
    )
  }

  // Handle players.abujablazers.com
  if (hostname === 'players.abujablazers.com') {
  
    if (!pathname.startsWith('/player-market')) {
      return NextResponse.redirect(
        new URL(`https://abujablazers.com${pathname}`),
        308
      )
    }

    return NextResponse.rewrite(
      new URL(`/player-market${pathname}`, request.url)
    )
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}