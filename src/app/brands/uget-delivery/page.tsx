"use client";

import Image from 'next/image';
import Link from 'next/link';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import { brands } from '@/types/brands';
import ScreenshotGalleryWrapper from '@/components/ScreenshotGalleryWrapper';

// Get the U-Get Delivery brand data
const brand = brands.find(brand => brand.id === 2);

// Screenshots configuration for U-Get Delivery
const brandScreenshots = [
  { id: 1, title: 'Track Delivery', url: '/screenshots/uget/track.png' },
  { id: 2, title: 'Delivery Map', url: '/screenshots/uget/map.png' },
  { id: 3, title: 'History', url: '/screenshots/uget/history.png' },
];

export default function UGetDeliveryPage() {
  if (!brand) {
    return <div>Brand not found</div>;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center justify-between w-full sm:w-auto">
              <Link href="/brands" className="flex items-center text-gray-600 hover:text-gray-900 transition-colors">
                <FiArrowLeft className="mr-2 w-5 h-5" /> 
                <span className="text-sm sm:text-base">Back to Brands</span>
              </Link>
              
              <a
                href={brand.website}
                target="_blank"
                rel="noopener noreferrer"
                className="sm:hidden inline-flex items-center px-3 py-1.5 border border-transparent text-xs font-medium rounded shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
              >
                Visit <FiExternalLink className="ml-1 w-3 h-3" />
              </a>
            </div>
            
            <div className="flex items-center justify-center sm:justify-start">
              <div className="h-10 sm:h-12 w-10 sm:w-12 relative">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 640px) 2.5rem, 3rem"
                />
              </div>
              <h1 className="ml-2 sm:ml-3 text-xl sm:text-2xl font-bold text-gray-900">{brand.name}</h1>
            </div>
            
            <a
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors"
            >
              Visit Website <FiExternalLink className="ml-1.5 w-4 h-4" />
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {/* Tagline */}
        <p className="text-lg sm:text-xl text-gray-600 mb-6 sm:mb-8 text-center sm:text-left">
          {brand.tagline}
        </p>

        {/* Description */}
        <div className="bg-white shadow overflow-hidden rounded-lg mb-8 sm:mb-12">
          <div className="px-4 py-5 sm:p-6">
            <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 sm:mb-3">
              About {brand.name}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
              {brand.description}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-6">
            Key Features
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 lg:grid-cols-3">
            {brand.features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-white overflow-hidden shadow rounded-lg p-4 sm:p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start">
                  <span className="text-2xl sm:text-3xl text-blue-600 mr-3 sm:mr-4 mt-0.5">
                    {feature.icon}
                  </span>
                  <h3 className="text-base sm:text-lg font-medium text-gray-900 leading-snug">
                    {feature.text}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Screenshots */}
        <div className="mb-10 sm:mb-14">
          <h2 className="text-lg sm:text-xl font-medium text-gray-900 mb-4 sm:mb-6">
            Screenshots
          </h2>
          <div className="-mx-2 sm:mx-0">
            <ScreenshotGalleryWrapper screenshots={brandScreenshots} />
          </div>
        </div>

        {/* CTA */}
        <div className="bg-blue-50 rounded-lg p-6 sm:p-8 text-center">
          <h3 className="text-lg sm:text-xl font-medium text-gray-900 mb-2 sm:mb-3">
            Ready to get started with {brand.name}?
          </h3>
          <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
            Visit our website to learn more and sign up today.
          </p>
          <a
            href={brand.website}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-5 sm:px-6 py-2.5 sm:py-3 border border-transparent text-sm sm:text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors w-full sm:w-auto"
          >
            Visit {brand.name} <FiExternalLink className="ml-2 w-4 h-4" />
          </a>
        </div>
      </main>
    </div>
  );
}
