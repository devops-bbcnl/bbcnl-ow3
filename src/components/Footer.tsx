'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaClock, FaCheck, FaExclamationCircle } from 'react-icons/fa';
import Logo from '../components/assets/images/logo.png';
import { addSubscriber } from "../utils/subscribe";

const currentYear = new Date().getFullYear();

export default function Footer() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [message, setMessage] = useState('');

const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      setStatus("error");
      setMessage("Please enter your email address");
      return;
    }

    setStatus("loading");
    setMessage("");

    try {
      const success = await addSubscriber(email);

      if (!success) {
        throw new Error("Something went wrong. Please try again.");
      }

      setStatus("success");
      setMessage("Thank you for subscribing!");
      setEmail("");

      setTimeout(() => {
        setStatus("idle");
        setMessage("");
      }, 5000);
    } catch (error) {
      setStatus("error");
      setMessage(
        error instanceof Error
          ? error.message
          : "Failed to subscribe. Please try again later."
      );
    }
  };

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
    { name: 'Facebook', icon: <FaFacebook className="w-5 h-5" />, href: 'https://www.facebook.com/BubbleBarrelNG' },
    { name: 'Twitter', icon: <FaTwitter className="w-5 h-5" />, href: 'https://x.com/BubbleBarrelNG' },
    { name: 'Instagram', icon: <FaInstagram className="w-5 h-5" />, href: 'https://www.instagram.com/bubblebarrelng/' },
    { name: 'LinkedIn', icon: <FaLinkedin className="w-5 h-5" />, href: 'https://www.linkedin.com/company/bubblebarrel/' },
  ];

  const contactInfo = [
    { 
      icon: <FaMapMarkerAlt className="text-[#ffd700] w-5 h-5 flex-shrink-0" />, 
      text: '7th Avenue Federal Housing Estate, Egbeada, Owerri, Imo State, Nigeria' 
    },
    { 
      icon: <FaPhoneAlt className="text-[#ffd700] w-5 h-5 flex-shrink-0" />, 
      text: '+234 707 890 1075' 
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
    <footer className="bg-gradient-to-r from-black via-gray-900 to-black text-white border-t border-[#ffd700]/20 px-1 sm:px-16">
      <div className="container mx-auto px-6 py-6 md:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center justify-start">
              <div className="relative h-12 w-12">
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
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#ffd700] focus:border-transparent text-sm pr-10"
                  disabled={status === "loading" || status === "success"}
                  required
                />
                {status === "success" && (
                  <FaCheck className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-500" />
                )}
                {status === "error" && (
                  <FaExclamationCircle className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500" />
                )}
              </div>
              <button
                type="submit"
                disabled={status === "loading" || status === "success"}
                className="w-full bg-gradient-to-r from-[#ffd700] to-[#ffd700] text-black font-medium py-2 px-4 rounded-lg hover:opacity-90 transition-opacity text-sm disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {status === "loading" ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Subscribing...
                  </>
                ) : status === "success" ? (
                  "Subscribed!"
                ) : (
                  "Subscribe"
                )}
              </button>
              {message && (
                <div className={`text-sm mt-2 ${status === "error" ? "text-red-500" : "text-green-500"}`}>
                  {message}
                </div>
              )}
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

