import { auth } from '@/auth';
import { NextResponse } from 'next/server';

// Only protect the subscribers page
const protectedRoutes = ['/admin/subscribers'];
const publicRoutes = ['/admin/login'];

export default auth((req) => {
  const { pathname } = req.nextUrl;
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));
  const isPublicRoute = publicRoutes.some(route => pathname.startsWith(route));
  const isApiAuthRoute = pathname.startsWith('/api/auth');
  const isLoggedIn = !!req.auth;

  // Allow API auth routes and non-protected routes
  if (isApiAuthRoute || !isProtectedRoute) {
    return NextResponse.next();
  }

  // Handle protected routes
  if (isProtectedRoute && !isLoggedIn) {
    const callbackUrl = pathname + (req.nextUrl.search || '');
    const encodedCallbackUrl = encodeURIComponent(callbackUrl);
    return NextResponse.redirect(
      new URL(`/admin/login?callbackUrl=${encodedCallbackUrl}`, req.url)
    );
  }

  // If user is logged in and tries to access login page, redirect to subscribers
  if (isPublicRoute && isLoggedIn) {
    return NextResponse.redirect(new URL('/admin/subscribers', req.url));
  }

  return NextResponse.next();
});

export const config = {
  // Only run middleware on the protected and auth routes
  matcher: ['/admin/subscribers/:path*', '/admin/login'],
};