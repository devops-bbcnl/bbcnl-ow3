'use client'
import { useEffect, useState } from 'react'
import { signOut } from 'next-auth/react'
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

  const handleLogout = async () => {
    try {
      const data = await signOut({ 
        redirect: false,
        callbackUrl: '/admin/login' 
      });
      // Force a full page reload to clear any cached auth state
      window.location.href = data.url || '/admin/login';
    } catch (error) {
      console.error('Error during sign out:', error);
      // If there's an error, still redirect to login
      window.location.href = '/admin/login';
    }
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Subscribers</h1>
        <button
          onClick={handleLogout}
          className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors"
        >
          Logout
        </button>
      </div>
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