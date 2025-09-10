'use client';

import React, { useEffect } from 'react';
import { setPageTitle } from '@/utils/pageTitle';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FiArrowRight, FiExternalLink } from 'react-icons/fi';
import Footer from '../../components/Footer';
import { brands } from '@/types/brands';

// Map of brand IDs to their URL slugs
const brandSlugs: { [key: number]: string } = {
  1: 'gobuyme',
  2: 'uget-delivery',
  3: 'usekwu',
  4: 'loadrunner-logistics'
};

export default function BrandsPage() {
  useEffect(() => {
    setPageTitle('Our Brands');
    // Update meta description for better SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Discover our portfolio of innovative brands at Bubble Barrel Nigeria. Each brand is designed to solve unique business challenges and create exceptional digital experiences.');
    }
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 md:py-20 overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-12 sm:mb-16"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-gold-400">
              Our Brands
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              Discover the innovative companies that make up the BBCNL family. Each brand is built with excellence and customer satisfaction at its core.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Brands Grid */}
      <section className="pb-12 sm:pb-16 md:pb-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 sm:gap-10 md:gap-12">
            {brands.map((brand, index) => (
              <motion.div
                key={brand.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -5, transition: { duration: 0.2 } }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 shadow-xl sm:shadow-2xl hover:border-blue-500/50 transition-all duration-300 cursor-pointer"
              >
                <Link href={`/brands/${brandSlugs[brand.id]}`} className="block h-full">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 p-4 sm:p-6 md:p-8">
                    {/* Brand Logo and Basic Info */}
                    <div className="md:col-span-1 flex flex-col items-center text-center md:text-left">
                      <div className="relative w-32 h-32 sm:w-36 sm:h-36 md:w-40 md:h-40 mb-4 sm:mb-6">
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
                    <div className="md:col-span-2">
                      <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">{brand.description}</p>
                      
                      {/* Features */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 mb-4 sm:mb-6">
                        {brand.features.map((feature, i) => (
                          <div key={i} className="flex items-start space-x-2 p-2 sm:p-3 bg-gray-800/50 rounded-lg text-sm sm:text-base">
                            <span className="text-gold-400 mt-0.5 flex-shrink-0">{feature.icon}</span>
                            <span className="text-gray-300">{feature.text}</span>
                          </div>
                        ))}
                      </div>

                      <Link
                        href={`/brands/${brandSlugs[brand.id]}`}
                        className="inline-flex items-center text-gold-400 hover:text-gold-300 font-medium transition-colors group"
                      >
                        Learn more about {brand.name}
                        <FiArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-black via-gray-900 to-black">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to experience our brands?</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8">
              Join thousands of satisfied customers who trust our brands for quality and innovation.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold py-2 sm:py-3 px-6 sm:px-8 rounded-lg hover:opacity-90 transition-all text-sm sm:text-base"
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