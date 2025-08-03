import Link from 'next/link';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">Cookie Policy</h1>
          <p className="text-blue-100">Last Updated: August 3, 2024</p>
        </div>

        {/* Content */}
        <div className="p-8 prose max-w-none">
          <section className="mb-8">
            <p className="text-gray-600 mb-6">
              This Cookie Policy explains how Bubble Barrel (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) uses cookies and similar tracking technologies when you visit our website. By using our website, you consent to our use of cookies as described in this policy.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. What Are Cookies?</h2>
            <p>
              Cookies are small text files that are stored on your device when you visit a website. They are widely used to make websites work more efficiently and to provide information to the website owners.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. How We Use Cookies</h2>
            <p>We use cookies for the following purposes:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><strong>Essential Cookies:</strong> Necessary for the website to function properly</li>
              <li><strong>Performance Cookies:</strong> Help us understand how visitors interact with our website</li>
              <li><strong>Functionality Cookies:</strong> Enable enhanced functionality and personalization</li>
              <li><strong>Analytics Cookies:</strong> Help us analyze website usage and improve performance</li>
              <li><strong>Advertising Cookies:</strong> Used to deliver relevant advertisements</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. Types of Cookies We Use</h2>
            
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Cookie Name</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Purpose</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Duration</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">session_id</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Maintains your session on our website</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Session</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">_ga</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Google Analytics - Used to distinguish users</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">2 years</td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">_gid</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Google Analytics - Used to distinguish users</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">24 hours</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">cookie_consent</td>
                    <td className="px-6 py-4 text-sm text-gray-500">Stores your cookie preferences</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">1 year</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. Managing Cookies</h2>
            <p>You can control and manage cookies in various ways. Please note that removing or blocking cookies may impact your user experience.</p>
            
            <h3 className="text-xl font-semibold text-gray-700 mt-4 mb-2">Browser Controls</h3>
            <p>Most web browsers allow you to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>See what cookies are stored on your device</li>
              <li>Block all or some cookies</li>
              <li>Delete cookies when you close your browser</li>
              <li>Block third-party cookies</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-700 mt-6 mb-2">Opt-Out Tools</h3>
            <p>You can opt out of certain types of tracking:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li><a href="https://tools.google.com/dlpage/gaoptout" className="text-blue-600 hover:underline">Google Analytics Opt-out</a></li>
              <li><a href="http://www.youronlinechoices.com/" className="text-blue-600 hover:underline">Your Online Choices</a> (for targeted advertising)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Changes to This Policy</h2>
            <p>
              We may update this Cookie Policy from time to time. We will notify you of any changes by updating the &quot;Last Updated&quot; date at the top of this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Contact Us</h2>
            <p>
              If you have any questions about this Cookie Policy, please contact us at:
            </p>
            <address className="not-italic mt-2">
              Bubble Barrel<br />
              Email: privacy@bubblebarrel.com<br />
              Phone: (123) 456-7890
            </address>
          </section>

          <div className="border-t pt-6 mt-8">
            <Link 
              href="/" 
              className="inline-flex items-center text-blue-600 hover:text-blue-800"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}