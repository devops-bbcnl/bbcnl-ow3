import { NextResponse } from 'next/server'
import { prisma } from '@/lib/db'

export async function POST(request: Request) {
  try {
    const { email } = await request.json()

    const subscriber = await prisma.subscriber.upsert({
      where: { email },
      update: { active: true },
      create: { email }
    })

    return NextResponse.json(subscriber)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: 'Failed to process subscription' },
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