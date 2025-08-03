import { auth } from '@/auth';
import { NextResponse } from 'next/server';

const publicRoutes = ['/admin/login'];

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route));
  const isApiAuthRoute = pathname.startsWith('/api/auth');
  const isLoggedIn = !!req.auth;

  // Allow API auth routes and public routes
  if (isApiAuthRoute || isPublicRoute) {
    return NextResponse.next();
  }

  // Redirect to login if not authenticated
  if (!isLoggedIn) {
    let callbackUrl = pathname;
    if (req.nextUrl.search) {
      callbackUrl += req.nextUrl.search;
    }
    const encodedCallbackUrl = encodeURIComponent(callbackUrl);
    return NextResponse.redirect(
      new URL(`/admin/login?callbackUrl=${encodedCallbackUrl}`, req.url)
    );
  }

  // If user is logged in and tries to access login page, redirect to dashboard
  if (pathname.startsWith('/admin/login') && isLoggedIn) {
    return NextResponse.redirect(new URL('/admin/subscribers', req.url));
  }

  return NextResponse.next();
});

// Optionally, don't invoke Middleware on some paths
export const config = {
  matcher: [
    // Match all request paths except for the ones starting with:
    // - _next/static (static files)
    // - _next/image (image optimization files)
    // - favicon.ico (favicon file)
    // - public folder
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
};