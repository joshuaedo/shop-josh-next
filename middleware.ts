import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export async function middleware(req: NextRequest) {
  return NextResponse.redirect(new URL('/categories/shop-all', req.nextUrl));
}

export const config = {
  matcher: ['/'],
};
