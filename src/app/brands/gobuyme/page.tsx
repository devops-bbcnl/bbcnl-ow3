import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import { brands } from '@/types/brands';
import ScreenshotGalleryWrapper from '@/components/ScreenshotGalleryWrapper';

// Get the GoBuyMe brand data
const brand = brands.find(brand => brand.id === 1);

// Screenshots configuration for GoBuyMe
const brandScreenshots = [
  { id: 1, title: 'Dashboard', url: '/screenshots/gobuyme/dashboard.png' },
  { id: 2, title: 'Product Catalog', url: '/screenshots/gobuyme/catalog.png' },
  { id: 3, title: 'Shopping Cart', url: '/screenshots/gobuyme/restaurant.png' },
  { id: 4, title: 'Checkout', url: '/screenshots/gobuyme/splash.png' },
];

export default function GoBuyMePage() {
  if (!brand) {
    return <div>Brand not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-6 sm:px-6 lg:px-8 flex justify-between items-center">
          <Link href="/brands" className="flex items-center text-gray-600 hover:text-gray-900">
            <FiArrowLeft className="mr-2" /> Back to Brands
          </Link>
          <div className="flex items-center">
            <div className="h-12 w-12 relative">
              <Image
                src={brand.logo}
                alt={`${brand.name} logo`}
                fill
                className="object-contain"
              />
            </div>
            <h1 className="ml-3 text-2xl font-bold text-gray-900">{brand.name}</h1>
          </div>
          <a
            href={brand.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Visit Website <FiExternalLink className="ml-2" />
          </a>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        {/* Tagline */}
        <p className="text-xl text-gray-600 mb-8">{brand.tagline}</p>

        {/* Description */}
        <div className="bg-white shadow overflow-hidden sm:rounded-lg mb-12">
          <div className="px-4 py-5 sm:px-6">
            <h2 className="text-lg leading-6 font-medium text-gray-900">About {brand.name}</h2>
            <p className="mt-1 max-w-2xl text-sm text-gray-500">
              {brand.description}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-12">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Key Features</h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {brand.features.map((feature, index) => (
              <div key={index} className="bg-white overflow-hidden shadow rounded-lg p-6">
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{feature.icon}</span>
                  <h3 className="text-base font-medium text-gray-900">{feature.text}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        <div className="mb-12">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Screenshots</h2>
          <ScreenshotGalleryWrapper screenshots={brandScreenshots} />
        </div>

        {/* CTA */}
        <div className="bg-blue-50 rounded-lg p-6 text-center">
          <h3 className="text-lg font-medium text-gray-900 mb-2">Ready to get started with {brand.name}?</h3>
          <p className="text-gray-600 mb-4">Visit our website to learn more and sign up today.</p>
          <a
            href={brand.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Visit {brand.name} <FiExternalLink className="ml-2" />
          </a>
        </div>
      </main>
    </div>
  );
}
