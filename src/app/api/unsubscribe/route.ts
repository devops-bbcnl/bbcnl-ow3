import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (!email) {
    return NextResponse.json(
      { error: 'Email parameter is required' },
      { status: 400 }
    );
  }

  try {
    // Check if subscriber exists
    const subscriber = await prisma.subscriber.findUnique({
      where: { email },
    });

    if (!subscriber) {
      return NextResponse.json(
        { error: 'Email not found in our subscription list' },
        { status: 404 }
      );
    }

    // Update subscriber to inactive
    await prisma.subscriber.update({
      where: { email },
      data: { active: false },
    });

    return NextResponse.json({
      success: true,
      message: 'You have been successfully unsubscribed from our mailing list.',
    });
  } catch (error) {
    console.error('Unsubscribe error:', error);
    return NextResponse.json(
      { error: 'Failed to process unsubscribe request' },
      { status: 500 }
    );
  }
}
