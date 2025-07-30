'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { FiArrowRight, FiGlobe, FiCode, FiSmartphone, FiTrendingUp } from 'react-icons/fi';
import LogoCarousel from '../../components/LogoCarousel';
import Footer from '../../components/Footer';

export default function HomePage() {
  const features = [
    {
      icon: <FiCode className="w-8 h-8 text-gold-500" />,
      title: 'Custom Development',
      description: 'Tailored software solutions designed to meet your specific business needs and challenges.'
    },
    {
      icon: <FiSmartphone className="w-8 h-8 text-gold-500" />,
      title: 'Mobile Apps',
      description: 'Engaging and intuitive mobile applications for both iOS and Android platforms.'
    },
    {
      icon: <FiGlobe className="w-8 h-8 text-gold-500" />,
      title: 'Web Solutions',
      description: 'Responsive and scalable web applications that deliver exceptional user experiences.'
    },
    {
      icon: <FiTrendingUp className="w-8 h-8 text-gold-500" />,
      title: 'Digital Growth',
      description: 'Strategies to help your business grow and thrive in the digital landscape.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden px-16">
        <div className="absolute inset-0 z-0">
          {/* Background Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url(https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80)',
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              filter: 'brightness(0.4)'
            }}
          ></div>
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80"></div>
          {/* Subtle Grid */}
          <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-5"></div>
        </div>
        
        <div className="container mx-auto px-6 z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-3xl md:text-5xl text-[#ffd700] font-bold mb-6">
              Transforming Ideas Into Digital Reality
            </h1>
            <p className="text-3xl text-gray-300 mb-12 max-w-6xl mx-auto">
              We create innovative digital solutions that drive growth and deliver exceptional user experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="bg-gold-500 hover:bg-gold-600 text-[#ffd700] text-xl font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
              >
                Get Started <FiArrowRight className="w-5 h-5" />
              </Link>
              <Link 
                href="#services" 
                className="border border-gold-500 text-gold-400 hover:bg-gold-500/10 font-medium px-8 py-4 rounded-lg transition-all duration-300"
              >
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>
        
        {/* Animated scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <div className="animate-bounce w-10 h-16 rounded-full border-2 border-gold-500 flex justify-center p-2">
            <div className="w-1 h-4 bg-gold-500 rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="py-20 bg-gradient-to-b from-gray-900 to-black px-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-gold-500 font-semibold">OUR SERVICES</span>
            <h2 className="text-4xl font-bold mt-2 mb-4">What We Offer</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-transparent mx-auto"></div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-gold-500/30 transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-black/50 rounded-lg flex items-center justify-center mb-6 mx-auto">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Brands */}
      <section className="py-16 bg-black px-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Trusted by Leading Brands</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-gold-500 to-transparent mx-auto"></div>
          </div>
          <LogoCarousel />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-black to-gray-900 px-16">
        <div className="container mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-gold-500/10 to-gold-600/10 p-12 rounded-2xl border border-gold-500/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Let&apos;s work together to bring your ideas to life with our expert development services.
            </p>
            <Link 
              href="/contact" 
              className="inline-block bg-gold-500 hover:bg-gold-600 text-[#ffd700] font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
            >
              Get In Touch
            </Link>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  );
}