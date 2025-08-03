'use client'
import { useEffect, useState, useCallback } from 'react'
import { signOut } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface Subscriber {
  id: string;
  email: string;
  createdAt: string;
  active: boolean;
}

type FilterType = 'all' | 'active' | 'inactive';

export default function SubscribersPage() {
  const [subscribers, setSubscribers] = useState<Subscriber[]>([])
  const [filteredSubscribers, setFilteredSubscribers] = useState<Subscriber[]>([])
  const [selectedSubscribers, setSelectedSubscribers] = useState<string[]>([])
  const [filter, setFilter] = useState<FilterType>('all')
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Filter subscribers based on active/inactive status
  useEffect(() => {
    const filtered = subscribers.filter(sub => {
      if (filter === 'active') return sub.active;
      if (filter === 'inactive') return !sub.active;
      return true; // 'all'
    });
    setFilteredSubscribers(filtered);
  }, [subscribers, filter]);

  // Handle row selection
  const toggleSubscriberSelection = (id: string) => {
    setSelectedSubscribers(prev => 
      prev.includes(id) 
        ? prev.filter(subId => subId !== id)
        : [...prev, id]
    );
  };

  // Handle select all/none
  const toggleSelectAll = (checked: boolean) => {
    if (checked) {
      setSelectedSubscribers(filteredSubscribers.map(sub => sub.id));
    } else {
      setSelectedSubscribers([]);
    }
  };

  // Export selected subscribers to CSV
  const exportToCSV = () => {
    if (selectedSubscribers.length === 0) {
      alert('Please select at least one subscriber to export');
      return;
    }

    const selectedData = subscribers.filter(sub => selectedSubscribers.includes(sub.id));
    
    // Create CSV header
    const headers = ['Email', 'Status', 'Joined Date'];
    
    // Create CSV rows
    const rows = selectedData.map(sub => ({
      Email: `"${sub.email}"`,
      Status: sub.active ? 'Active' : 'Inactive',
      'Joined Date': new Date(sub.createdAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      })
    }));

    // Convert to CSV string
    const csvContent = [
      headers.join(','),
      ...rows.map(row => Object.values(row).join(','))
    ].join('\n');

    // Create download link
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `subscribers_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Check if all visible rows are selected
  const allSelected = filteredSubscribers.length > 0 && 
                     filteredSubscribers.every(sub => selectedSubscribers.includes(sub.id));

  // Fetch subscribers
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
        <div className="flex items-center space-x-4">
          {selectedSubscribers.length > 0 && (
            <>
              <button
                onClick={exportToCSV}
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors flex items-center space-x-2"
                title="Export selected to CSV"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                <span>Export ({selectedSubscribers.length})</span>
              </button>
              <button
                onClick={() => {
                  // Implement delete selected functionality
                  alert(`Delete ${selectedSubscribers.length} selected subscribers`);
                }}
                className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors flex items-center space-x-2"
                title="Delete selected"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                </svg>
                <span>Delete ({selectedSubscribers.length})</span>
              </button>
            </>
          )}
          <button
            onClick={handleLogout}
            className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex space-x-2 mb-4">
        <button
          onClick={() => setFilter('all')}
          className={`px-4 py-2 rounded-md ${
            filter === 'all' 
              ? 'bg-blue-600 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter('active')}
          className={`px-4 py-2 rounded-md ${
            filter === 'active' 
              ? 'bg-green-600 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Active
        </button>
        <button
          onClick={() => setFilter('inactive')}
          className={`px-4 py-2 rounded-md ${
            filter === 'inactive' 
              ? 'bg-yellow-600 text-white' 
              : 'bg-gray-200 hover:bg-gray-300'
          }`}
        >
          Inactive
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border">
          <thead>
            <tr className="bg-gray-50">
              <th className="py-3 px-4 border-b text-left">
                <input
                  type="checkbox"
                  checked={allSelected}
                  onChange={(e) => toggleSelectAll(e.target.checked)}
                  className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                />
              </th>
              <th className="py-3 px-4 border-b text-left font-medium text-gray-700">Email</th>
              <th className="py-3 px-4 border-b text-left font-medium text-gray-700">Joined</th>
              <th className="py-3 px-4 border-b text-left font-medium text-gray-700">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredSubscribers.length === 0 ? (
              <tr>
                <td colSpan={4} className="py-4 text-center text-gray-500">
                  No subscribers found
                </td>
              </tr>
            ) : (
              filteredSubscribers.map((sub) => (
                <tr 
                  key={sub.id} 
                  className={`hover:bg-gray-50 ${
                    selectedSubscribers.includes(sub.id) ? 'bg-blue-50' : ''
                  }`}
                >
                  <td className="py-3 px-4">
                    <input
                      type="checkbox"
                      checked={selectedSubscribers.includes(sub.id)}
                      onChange={() => toggleSubscriberSelection(sub.id)}
                      className="h-4 w-4 text-blue-600 rounded border-gray-300 focus:ring-blue-500"
                    />
                  </td>
                  <td className="py-3 px-4">{sub.email}</td>
                  <td className="py-3 px-4">
                    {new Date(sub.createdAt).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </td>
                  <td className="py-3 px-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      sub.active 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {sub.active ? 'Active' : 'Inactive'}
                    </span>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}