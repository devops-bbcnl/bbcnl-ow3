'use client';

import { useState } from 'react';
import { unsubscribeUser } from '@/utils/firebase-subscriber';

export default function UnsubscribePage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setStatus('loading');
  setMessage('');

  try {
    const result = await unsubscribeUser(email);
    setStatus(result.success ? 'success' : 'error');
    setMessage(result.message);
    
    if (result.success) {
      setEmail('');
    }
  } catch {
    setStatus('error');
    setMessage('An unexpected error occurred. Please try again later.');
  }
};

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold text-gray-900">
            Unsubscribe from Our Newsletter
          </h1>
          <p className="mt-2 text-sm text-gray-600">
            We&apos;re sorry to see you go. Enter your email to unsubscribe.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <div>
            <label htmlFor="email" className="sr-only">
              Email address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-[#ffd700] focus:border-[#ffd700] focus:z-10 sm:text-sm"
              placeholder="Enter your email address"
              disabled={status === 'loading'}
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={status === 'loading' || status === 'success'}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-black bg-[#ffd700] hover:bg-[#e6c200] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#ffd700] disabled:opacity-50"
            >
              {status === 'loading' ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing...
                </>
              ) : (
                'Unsubscribe'
              )}
            </button>
          </div>

          {message && (
            <div className={`mt-4 text-sm text-center ${
              status === 'error' ? 'text-red-600' : 'text-green-600'
            }`}>
              {message}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}