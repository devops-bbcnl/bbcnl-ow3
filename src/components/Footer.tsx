'use client';

import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import Logo from '../components/assets/images/logo.png';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Brands', href: '/brands' },
    { name: 'Contact', href: '/contact' },
  ];

  const legalLinks = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Cookie Policy', href: '/cookies' },
  ];

  const socialLinks = [
    { name: 'Facebook', icon: <FaFacebook className="w-5 h-5" />, href: '#' },
    { name: 'Twitter', icon: <FaTwitter className="w-5 h-5" />, href: '#' },
    { name: 'Instagram', icon: <FaInstagram className="w-5 h-5" />, href: '#' },
    { name: 'LinkedIn', icon: <FaLinkedin className="w-5 h-5" />, href: '#' },
  ];

  const contactInfo = [
    { 
      icon: <FaMapMarkerAlt className="text-[#ffd700] w-5 h-5 flex-shrink-0" />, 
      text: '123 Business Avenue, Tech City, TC 10001, Netherlands' 
    },
    { 
      icon: <FaPhoneAlt className="text-[#ffd700] w-5 h-5 flex-shrink-0" />, 
      text: '+1 (234) 803-7674195' 
    },
    { 
      icon: <FaEnvelope className="text-[#ffd700] w-5 h-5 flex-shrink-0" />, 
      text: 'contact@bubblebarrel.dev' 
    },
    { 
      icon: <FaClock className="text-[#ffd700] w-5 h-5 flex-shrink-0" />, 
      text: 'Mon - Fri: 9:00 AM - 6:00 PM' 
    },
  ];

  return (
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white border-t border-[#ffd700]/20 px-16">
      <div className="container mx-auto px-6 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-48">
                <Image
                  src={Logo}
                  alt="Bubble Barrel Logo"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Empowering businesses through innovative solutions and cutting-edge technology. We build brands that make a difference.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-[#ffd700] transition-colors duration-300"
                  aria-label={item.name}
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#ffd700]">Quick Links</h3>
            <ul className="space-y-3">
              {navigation.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-gray-400 hover:text-[#ffd700] transition-colors duration-300 text-sm"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#ffd700]">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span>{item.icon}</span>
                  <span className="text-gray-400 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-[#ffd700]">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to our newsletter for the latest updates and news.
            </p>
            <form className="space-y-3">
              <div>
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#ffd700] focus:border-transparent text-sm"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#ffd700] to-[#ffd700] text-black font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-opacity text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Bubble Barrel. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            {legalLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-500 hover:text-[#ffd700] text-sm transition-colors duration-300"
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}