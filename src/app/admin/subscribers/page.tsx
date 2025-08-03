'use client'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Subscriber {
  id: string;
  email: string;
  createdAt: string;
  active: boolean;
}

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [loading, setLoading] = useState(true)
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const router = useRouter()

  useEffect(() => {
    const fetchSubscribers = async () => {
      try {
        const res = await fetch('/api/subscribe')
        const data = await res.json()
        setSubscribers(data)
      } catch (error) {
        console.error('Error:', error)
      } finally {
        setLoading(false)
      }
    }
    fetchSubscribers()
  }, [])

  if (loading) return <div>Loading...</div>

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">Subscribers</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr>
              <th className="py-2 px-4 border">Email</th>
              <th className="py-2 px-4 border">Joined</th>
              <th className="py-2 px-4 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((sub) => (
              <tr key={sub.id}>
                <td className="py-2 px-4 border">{sub.email}</td>
                <td className="py-2 px-4 border">
                  {new Date(sub.createdAt).toLocaleDateString()}
                </td>
                <td className="py-2 px-4 border">
                  {sub.active ? 'Active' : 'Inactive'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}