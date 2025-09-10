'use client';

import React, { useEffect } from 'react';
import { setPageTitle } from '@/utils/pageTitle';
import { motion } from 'framer-motion';
import { FiCode, FiShoppingCart, FiSmartphone, FiTrendingUp, FiGlobe, FiServer } from 'react-icons/fi';
import Footer from '../../components/Footer';

const services = [
  {
    icon: <FiCode className="w-8 h-8 text-gold-500" />,
    title: 'Web Development',
    description: 'Custom, responsive websites built with the latest technologies to ensure fast loading and optimal performance across all devices.',
    features: ['Responsive Design', 'E-commerce Solutions', 'CMS Integration', 'SEO Optimization']
  },
  {
    icon: <FiShoppingCart className="w-8 h-8 text-gold-500" />,
    title: 'E-commerce Solutions',
    description: 'Complete online store setups with secure payment gateways, inventory management, and seamless user experiences.',
    features: ['Shopify & WooCommerce', 'Payment Integration', 'Product Management', 'Order Tracking']
  },
  {
    icon: <FiSmartphone className="w-8 h-8 text-gold-500" />,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications designed to engage users and deliver exceptional experiences.',
    features: ['iOS & Android', 'React Native', 'UI/UX Design', 'App Store Optimization']
  },
  {
    icon: <FiTrendingUp className="w-8 h-8 text-gold-500" />,
    title: 'Digital Marketing',
    description: 'Data-driven marketing strategies to increase your online visibility and drive targeted traffic to your business.',
    features: ['SEO & SEM', 'Social Media Marketing', 'Content Strategy', 'Analytics & Reporting']
  },
  {
    icon: <FiGlobe className="w-8 h-8 text-gold-500" />,
    title: 'Branding & Design',
    description: 'Comprehensive branding solutions that tell your unique story and create lasting impressions.',
    features: ['Logo Design', 'Brand Identity', 'Print Materials', 'Brand Guidelines']
  },
  {
    icon: <FiServer className="w-8 h-8 text-gold-500" />,
    title: 'Cloud Solutions',
    description: 'Scalable cloud infrastructure and services to optimize your business operations and reduce costs.',
    features: ['Cloud Migration', 'AWS & Azure', 'DevOps', 'Cloud Security']
  }
];

const processSteps = [
  {
    number: '01',
    title: 'Discovery',
    description: 'We start by understanding your business goals and requirements.'
  },
  {
    number: '02',
    title: 'Planning',
    description: 'Creating a detailed project roadmap and strategy.'
  },
  {
    number: '03',
    title: 'Design',
    description: 'Crafting beautiful, user-centric designs.'
  },
  {
    number: '04',
    title: 'Development',
    description: 'Building robust, scalable solutions.'
  },
  {
    number: '05',
    title: 'Testing',
    description: 'Ensuring quality and performance.'
  },
  {
    number: '06',
    title: 'Launch',
    description: 'Deploying your solution to the world.'
  }
];

export default function ServicesPage() {
  useEffect(() => {
    setPageTitle('Our Services');
    // Update meta description for better SEO
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Explore our comprehensive digital services at Bubble Barrel Nigeria - Web development, mobile apps, e-commerce solutions, and digital marketing to grow your business online.');
    }
  }, []);
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative py-12 sm:py-16 lg:py-20 overflow-hidden px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <span className="inline-block px-3 py-1 text-sm sm:text-base md:text-lg font-medium bg-gold-500/10 text-gold-400 rounded-full mb-3 sm:mb-4">
              Our Services
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-clip-text text-[#ffd700] leading-tight">
              Comprehensive Digital Solutions
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
              We deliver cutting-edge digital solutions tailored to your business needs, helping you thrive in the digital landscape.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-800 hover:border-gold-500/30 transition-all duration-300 h-full flex flex-col"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center rounded-lg bg-gold-500/10 mb-4 sm:mb-6">
                  {React.cloneElement(service.icon, { className: 'w-6 h-6 sm:w-7 sm:h-7 text-gold-500' })}
                </div>
                <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">{service.title}</h3>
                <p className="text-sm sm:text-base text-gray-400 mb-4 sm:mb-6 flex-grow">{service.description}</p>
                <ul className="space-y-1.5 sm:space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start sm:items-center space-x-2 text-gray-400">
                      <span className="text-gold-500 mt-0.5 sm:mt-0">✓</span>
                      <span className="text-sm sm:text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-r from-black via-gray-900 to-black px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Our Process</h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-300">
              We follow a proven methodology to ensure the success of every project we undertake.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {processSteps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm p-6 sm:p-8 rounded-xl border border-gray-800 hover:border-gold-500/30 transition-colors duration-300"
              >
                <div className="w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full bg-gold-500/10 text-gold-400 text-xl sm:text-2xl font-bold mb-4 sm:mb-6">
                  {step.number}
                </div>
                <h3 className="text-lg sm:text-xl font-bold mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-sm sm:text-base text-gray-400">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto bg-gradient-to-r from-gold-500/10 to-gold-500/5 p-6 sm:p-8 md:p-10 lg:p-12 rounded-2xl border border-gold-500/20"
          >
            <h2 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Ready to Transform Your Business?</h2>
            <p className="text-base sm:text-lg text-gray-300 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how we can help you achieve your goals with our expert services.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
              <a
                href="/contact"
                className="inline-block bg-gradient-to-r from-gold-500 to-gold-600 text-[#ffd700] font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg hover:opacity-90 transition-opacity text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Get Started
              </a>
              <a
                href="/contact"
                className="inline-block bg-transparent border-2 border-gold-500 text-gold-400 font-semibold py-2.5 sm:py-3 px-6 sm:px-8 rounded-lg hover:bg-gold-500/10 transition-colors text-sm sm:text-base w-full sm:w-auto text-center"
              >
                Contact Us
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}