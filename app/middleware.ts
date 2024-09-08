import { NextRequest, NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from './api/auth/[...nextauth]/options';

export async function middleware(req: NextRequest) {
  const session = await getServerSession(authOptions);
  console.log(session);
  const url = req.nextUrl.clone();

  // Redirect to the home page if the user is not authenticated and trying to access the dashboard
  if (!session && url.pathname.startsWith('/dashboard')) {
    // Redirect to the login page or home page
    return NextResponse.redirect(new URL('/', req.url));
  }

  return NextResponse.next();
}

// Securing /dashboard route
export const config = {
  matcher: ['/dashboard/:path*'],
};
