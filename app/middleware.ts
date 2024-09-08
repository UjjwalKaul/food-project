import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/options';

export async function middleware(req: NextRequest) {
  const session = await getServerSession(authOptions);
  const url = req.nextUrl.clone();

  // Redirect to the home page if the user is not authenticated and trying to access the dashboard
  if (!session && url.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'],
};
