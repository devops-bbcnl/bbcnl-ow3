import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'
import { sendSubscriptionConfirmation } from '@/lib/email'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address' },
        { status: 400 }
      )
    }

    // Store the result in a variable but don't use it to avoid lint warning
    await prisma.subscriber.upsert({
      where: { email },
      update: { 
        active: true,
        // Prisma will handle the updatedAt field automatically if it's set to @updatedAt in the schema
      },
      create: { 
        email,
        active: true
      }
    })

    try {
      // Try to send confirmation email
      await sendSubscriptionConfirmation(email);
      return NextResponse.json({
        success: true,
        message: 'Subscription successful! Please check your email for confirmation.'
      });
    } catch (emailError) {
      console.error('Email sending failed but subscription was saved:', emailError);
      // Still return success since the subscription was saved
      return NextResponse.json({
        success: true,
        message: 'Subscription successful!',
        warning: 'Confirmation email could not be sent.'
      });
    }

  } catch (error) {
    console.error('Subscription error:', error)
    return NextResponse.json(
      { 
        success: false,
        error: 'Failed to process subscription. Please try again later.' 
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  const subscribers = await prisma.subscriber.findMany({
    orderBy: { createdAt: 'desc' }
  })
  return NextResponse.json(subscribers)
}