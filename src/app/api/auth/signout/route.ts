import { auth, signOut } from '@/auth';
import { NextResponse } from 'next/server';

export async function POST() {
  const session = await auth();
  if (session) {
    await signOut();
  }
  return NextResponse.redirect(new URL('/admin/login', 'http://localhost:3000'));
}