import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { FiArrowLeft, FiExternalLink } from 'react-icons/fi';
import { Brand, brands } from '@/types/brands';
import ScreenshotGalleryWrapper from '@/components/ScreenshotGalleryWrapper';

// Function to fetch a single brand by ID
const getBrandById = (id: string): Brand | undefined => {
  return brands.find((brand) => brand.id.toString() === id);
};

// This function runs at build time to generate static paths
export async function generateStaticParams() {
  return brands.map((brand) => ({
    id: brand.id.toString(),
  }));
}

export default function BrandDetailPage({ params }: { params: { id: string } }) {
  const brand = getBrandById(params.id);

  if (!brand) {
    notFound();
  }
  
  // Screenshots configuration for each brand
  const brandScreenshots: Record<string, Array<{id: number; title: string; url: string}>> = {
    '1': [ // GoBuyMe
      { id: 1, title: 'Dashboard', url: '/screenshots/gobuyme/dashboard.png' },
      { id: 2, title: 'Product Catalog', url: '/screenshots/gobuyme/catalog.png' },
      { id: 3, title: 'Shopping Cart', url: '/screenshots/gobuyme/restaurant.png' },
      { id: 4, title: 'Checkout', url: '/screenshots/gobuyme/splash.png' },
    ],
    '2': [ // U-Get Delivery
      { id: 1, title: 'Track Delivery', url: '/screenshots/uget/track.png' },
      { id: 2, title: 'Delivery Map', url: '/screenshots/uget/map.png' },
      { id: 3, title: 'History', url: '/screenshots/uget/history.png' },
    ],
    '3': [ // Usekwu
      { id: 1, title: 'Analytics Dashboard', url: '/screenshots/usekwu/analytics.png' },
      { id: 2, title: 'Dashboard', url: '/screenshots/usekwu/dashboard.png' },
    ],
    '4': [ // LoadRunner Logistics
      { id: 1, title: 'Shipment Tracking', url: '/screenshots/loadrunner/tracking.jpg' },
      { id: 2, title: 'Fleet Management', url: '/screenshots/loadrunner/fleet.jpg' },
      { id: 3, title: 'Analytics', url: '/screenshots/loadrunner/analytics.jpg' },
    ]
  };

  // Get screenshots for the current brand or use an empty array if none found
  const screenshots = brandScreenshots[params.id] || [
    // Fallback placeholder if no screenshots are configured for this brand
    { id: 1, title: 'Dashboard', url: '' },
    { id: 2, title: 'Features', url: '' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Back Button */}
      <div className="bg-gray-900 shadow-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <Link 
            href="/brands" 
            className="inline-flex items-center text-[#ffd700] hover:text-yellow-400 transition-colors"
          >
            <FiArrowLeft className="mr-2" /> Back to Brands
          </Link>
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center mb-8">
              <div className="w-32 h-32 md:w-48 md:h-48 relative rounded-full overflow-hidden bg-white p-2">
                <Image
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-[#ffd700] mb-2">{brand.name}</h1>
            <p className="text-xl text-gray-300 mb-6">{brand.tagline}</p>
            <p className="text-gray-400 max-w-3xl mx-auto mb-8">{brand.description}</p>
            <a
              href={brand.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-black bg-[#ffd700] hover:bg-yellow-500 transition-colors"
            >
              Visit Website <FiExternalLink className="ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-12 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#ffd700] mb-4">Why Choose {brand.name}?</h2>
            <div className="h-1 w-20 bg-[#ffd700] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brand.features.map((feature, index) => (
              <div key={index} className="bg-gray-900 p-6 rounded-lg shadow-lg">
                <div className="text-[#ffd700] text-3xl mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.text}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Screenshots Section */}
      <div className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#ffd700] mb-4">App Screenshots</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">Explore our intuitive interface and powerful features through these screenshots</p>
          </div>
          
          <ScreenshotGalleryWrapper screenshots={screenshots} />
          
          <div className="mt-12 text-center">
            <a 
              href={brand.website} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center text-[#ffd700] hover:text-yellow-400 font-medium"
            >
              Download the app to experience all features
              <FiExternalLink className="ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}