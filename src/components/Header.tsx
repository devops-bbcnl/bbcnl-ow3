import Link from 'next/link';
import Image from 'next/image';
import Logo from '../components/assets/images/logo.png'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-gradient-to-r from-black via-gray-900 to-black shadow-lg border-b border-gold-500/20 px-2 sm:px-16 py-4">
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
        <button className="md:hidden text-gray-700">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
}
