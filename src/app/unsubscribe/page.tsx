'use client';

import { useState, useEffect, useCallback, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

// Wrapper component to handle search params with Suspense
function UnsubscribeForm() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  
  return <UnsubscribePageInner email={email} />;
}

function UnsubscribePageInner({ email }: { email: string | null }) {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

  const handleUnsubscribe = useCallback(async () => {
    if (!email) return;

    setStatus('loading');
    setMessage('Processing your request...');

    try {
      const response = await fetch(`/api/unsubscribe?email=${encodeURIComponent(email)}`);
      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setMessage(data.message || 'You have been successfully unsubscribed.');
      } else {
        throw new Error(data.error || 'Failed to unsubscribe');
      }
    } catch (error) {
      console.error('Unsubscribe error:', error);
      setStatus('error');
      setMessage(
        error instanceof Error 
          ? error.message 
          : 'An error occurred while processing your request.'
      );
    }
  }, [email]);

  useEffect(() => {
    if (email) {
      handleUnsubscribe();
    }
  }, [email, handleUnsubscribe]);



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      handleUnsubscribe();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl p-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-6">
            {status === 'success' ? 'Unsubscribed Successfully' : 'Unsubscribe'}
          </h1>
          
          {status === 'idle' && !email && (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email address
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <button
                type="submit"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
              >
                Unsubscribe
              </button>
            </form>
          )}

          {(status === 'loading' || status === 'success' || status === 'error') && (
            <div className={`p-4 rounded-md ${status === 'success' ? 'bg-green-50' : status === 'error' ? 'bg-red-50' : 'bg-blue-50'}`}>
              <p className={`text-sm ${status === 'success' ? 'text-green-800' : status === 'error' ? 'text-red-800' : 'text-blue-800'}`}>
                {message}
              </p>
              {status === 'success' && (
                <p className="mt-2 text-sm text-gray-600">
                  <p>We&apos;re sorry to see you go. You can always resubscribe anytime.</p>
                </p>
              )}
            </div>
          )}

          <div className="mt-6">
            <Link
              href="/"
              className="text-sm font-medium text-blue-600 hover:text-blue-500"
            >
              &larr; Back to home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function UnsubscribePage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="animate-pulse text-gray-600">Loading...</div>
      </div>
    }>
      <UnsubscribeForm />
    </Suspense>
  );
}
