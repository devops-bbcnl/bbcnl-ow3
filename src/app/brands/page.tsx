'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiExternalLink, FiShoppingBag, FiTruck, FiPackage, FiGlobe } from 'react-icons/fi';
import Footer from '../../components/Footer';
import Logo1 from '../../components/assets/images/GBMlogo.png'
import Logo2 from '../../components/assets/images/UGET-logo.png'
import Logo3 from '../../components/assets/images/usekwu-logo.png'
import Logo4 from '../../components/assets/images/LRL-Logo.png'

// Brand data
const brands = [
  {
    id: 1,
    name: 'GoBuyMe',
    tagline: 'Your One-Stop Shopping Destination',
    description: 'GoBuyMe is a leading e-commerce platform that brings together thousands of sellers and millions of products in one convenient location. With fast delivery, secure payments, and 24/7 customer support, we make online shopping simple and enjoyable.',
    logo: Logo1,
    website: 'https://gobuy.me',
    features: [
      { icon: <FiShoppingBag className="w-5 h-5" />, text: 'Wide product selection' },
      { icon: <FiTruck className="w-5 h-5" />, text: 'Fast & reliable delivery' },
      { icon: <FiPackage className="w-5 h-5" />, text: 'Easy returns' }
    ]
  },
  {
    id: 2,
    name: 'U-Get Delivery',
    tagline: 'Same-Day Delivery Solutions',
    description: 'U-Get Delivery provides lightning-fast same-day delivery services for businesses and individuals. Our network of professional couriers ensures your packages reach their destination safely and on time, every time.',
    logo: Logo2,
    website: 'https://uget.delivery',
    features: [
      { icon: <FiTruck className="w-5 h-5" />, text: 'Same-day delivery' },
      { icon: <FiPackage className="w-5 h-5" />, text: 'Real-time tracking' },
      { icon: <FiGlobe className="w-5 h-5" />, text: 'Nationwide coverage' }
    ]
  },
  {
    id: 3,
    name: 'Usekwu',
    tagline: 'Empowering African Languages',
    description: 'Usekwu is dedicated to preserving and promoting African languages through innovative technology. Our platform offers language learning tools, translation services, and cultural resources to connect people through language.',
    logo: Logo3,
    website: 'https://usekwu.com',
    features: [
      { icon: <FiGlobe className="w-5 h-5" />, text: 'Multiple African languages' },
      { icon: <FiPackage className="w-5 h-5" />, text: 'Interactive learning' },
      { icon: <FiShoppingBag className="w-5 h-5" />, text: 'Cultural resources' }
    ]
  },
  {
    id: 4,
    name: 'LoadRunner Logistics',
    tagline: 'Smart Freight Solutions',
    description: 'LoadRunner Logistics provides end-to-end logistics and supply chain solutions. We connect shippers with carriers through our advanced platform, optimizing routes and reducing costs for businesses of all sizes.',
    logo: Logo4,
    website: 'https://loadrunnerlogistics.com',
    features: [
      { icon: <FiTruck className="w-5 h-5" />, text: 'Efficient routing' },
      { icon: <FiPackage className="w-5 h-5" />, text: 'Cargo tracking' },
      { icon: <FiGlobe className="w-5 h-5" />, text: 'Global network' }
    ]
  }
];

export default function BrandsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden px-16">
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-[#ffd700]">
              Our Brands
            </h1>
            <p className="text-xl text-gray-300">
              Discover the innovative companies that make up the BBCNL family. Each brand is built with excellence and customer satisfaction at its core.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="pb-20 px-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-12">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 shadow-2xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
                  {/* Brand Logo and Basic Info */}
                  <div className="lg:col-span-1 flex flex-col items-center lg:items-start">
                    <div className="relative w-40 h-40 mb-6">
                      <Image
                        src={brand.logo}
                        alt={brand.name}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <h2 className="text-2xl font-bold mb-2">{brand.name}</h2>
                    <p className="text-gold-400 mb-4 font-medium">{brand.tagline}</p>
                    <a
                      href={brand.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-gold-400 hover:text-gold-300 transition-colors"
                    >
                      Visit Website <FiExternalLink className="ml-1" />
                    </a>
                  </div>

                  {/* Brand Description */}
                  <div className="lg:col-span-2">
                    <p className="text-gray-300 mb-6">{brand.description}</p>
                    
                    {/* Features */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
                      {brand.features.map((feature, i) => (
                        <div key={i} className="flex items-start space-x-2 p-3 bg-gray-800/50 rounded-lg">
                          <span className="text-gold-400 mt-0.5">{feature.icon}</span>
                          <span className="text-gray-300">{feature.text}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/brands/${brand.id}`}
                      className="inline-flex items-center text-gold-400 hover:text-gold-300 font-medium transition-colors group"
                    >
                      Learn more about {brand.name}
                      <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-6">Ready to experience our brands?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Join thousands of satisfied customers who trust our brands for quality and innovation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-[#ffd700] font-semibold py-3 px-8 rounded-lg hover:opacity-90 transition-all"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}