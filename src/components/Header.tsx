'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FiMenu, FiX, FiChevronRight } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import Logo from '../components/assets/images/logo.png'

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'About', href: '/about' },
  { name: 'Brands', href: '/brands' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside or on a link
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.mobile-menu-button')) {
        setIsMenuOpen(false);
      }
    };

    // Prevent scrolling when menu is open
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-black via-gray-900 to-black shadow-lg border-b border-gold-500/20 px-2 sm:px-16 py-0 sm:py-4">
      <div className="container py-3 flex items-center justify-between w-full">
        {/* Logo */}
        <Link href="/" className="flex items-center hover:opacity-90 transition-opacity">
          <Image 
            src={Logo} 
            alt="Bubble Barrel" 
            width={80} 
            height={80}
            className="mr-2"
          />
          <span className="text-2xl font-bold text-[#ffd700]">Bubble Barrel</span>
        </Link>

                {/* Navigation */}
        <nav className="hidden lg:flex items-center space-x-8">
          <Link href="/" className="text-gray-300 hover:text-gold-400 transition-colors font-medium">
            Home
          </Link>
          <Link href="/services" className="text-gray-300 hover:text-gold-400 transition-colors font-medium">
            Services
          </Link>
          <Link href="/about" className="text-gray-300 hover:text-gold-400 transition-colors font-medium">
            About
          </Link>
          <Link href="/brands" className="text-gray-300 hover:text-gold-400 transition-colors font-medium">
            Brands
          </Link>
          <Link href="/contact" className="text-gray-300 hover:text-gold-400 transition-colors font-medium">
            Contact
          </Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link 
            href="/contact" 
            className="bg-[#D4AF37] hover:bg-[#FFD700] text-black font-semibold px-5 py-2 rounded-md transition-colors hover:shadow-glow"
          >
            Get Started
          </Link>
        </div>

        {/* Mobile menu button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-gray-300 hover:text-gold-400 focus:outline-none mobile-menu-button"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? (
            <FiX className="w-8 h-8" />
          ) : (
            <FiMenu className="w-8 h-8" />
          )}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'tween', ease: 'easeInOut' }}
            className="fixed inset-0 z-40 bg-gradient-to-b from-black to-gray-900 lg:hidden mobile-menu"
          >
            <div className="h-full flex flex-col pt-24 pb-12 px-6 overflow-y-auto">
              <nav className="flex-1 space-y-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="group flex items-center justify-between px-4 py-3 text-2xl font-medium text-gray-300 hover:text-gold-400 rounded-lg transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span>{item.name}</span>
                    <FiChevronRight className="w-6 h-6 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                ))}
              </nav>
              
              <div className="mt-8 pt-6 border-t border-gold-500/20">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-gold-500 hover:bg-gold-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
