import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 p-8 text-white">
          <h1 className="text-4xl font-bold mb-2">Terms of Service</h1>
          <p className="text-blue-100">Last Updated: August 3, 2024</p>
        </div>

        {/* Content */}
        <div className="p-8 prose max-w-none">
          <section className="mb-8">
            <p className="text-gray-600 mb-6">
              Welcome to Bubble Barrel! These Terms of Service (&quot;Terms&quot;) govern your access to and use of our website and services. 
              Please read these Terms carefully before using our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">1. Acceptance of Terms</h2>
            <p>
              By accessing or using our services, you agree to be bound by these Terms. If you do not agree to these Terms, 
              please do not use our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">2. Description of Service</h2>
            <p>
              Bubble Barrel provides [brief description of your services]. We reserve the right to modify or discontinue our 
              services at any time without notice.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">3. User Accounts</h2>
            <p>When you create an account with us, you must provide accurate and complete information.</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>You are responsible for maintaining the confidentiality of your account credentials</li>
              <li>You are responsible for all activities that occur under your account</li>
              <li>You must notify us immediately of any unauthorized use of your account</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">4. User Conduct</h2>
            <p>You agree not to use our services to:</p>
            <ul className="list-disc pl-6 space-y-2 mt-2">
              <li>Violate any laws or regulations</li>
              <li>Infringe on intellectual property rights</li>
              <li>Distribute viruses or other harmful code</li>
              <li>Collect information about other users without their consent</li>
              <li>Interfere with or disrupt our services</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">5. Intellectual Property</h2>
            <p>
              All content included on our website, including text, graphics, logos, and software, is the property of 
              Bubble Barrel or its content suppliers and protected by intellectual property laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">6. Limitation of Liability</h2>
            <p>
              In no event shall Bubble Barrel be liable for any indirect, incidental, special, consequential, or punitive 
              damages resulting from your access to or use of our services.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">7. Termination</h2>
            <p>
              We may terminate or suspend your account and bar access to our services immediately, without prior notice or 
              liability, for any reason whatsoever, including without limitation if you breach these Terms.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">8. Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of [Your Country/State], without 
              regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">9. Changes to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. We will provide notice of any changes by updating 
              the &quot;Last Updated&quot; date at the top of this page.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">10. Contact Us</h2>
            <p>
              If you have any questions about these Terms, please contact us at:
            </p>
            <address className="not-italic mt-2">
              Bubble Barrel<br />
              Email: legal@bubblebarrel.com<br />
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