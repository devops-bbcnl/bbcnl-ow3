import { StaticImageData } from 'next/image';
import GBMlogo from '@/components/assets/images/GBMlogo.png';
import UGETlogo from '@/components/assets/images/UGET-logo.png';
import UsekwuLogo from '@/components/assets/images/usekwu-logo.png';
import LRLLogo from '@/components/assets/images/LRL-Logo.png';

export interface Screenshot {
  id: number;
  title: string;
  url: string;
}

export interface Brand {
  id: number;
  name: string;
  tagline: string;
  description: string;
  logo: StaticImageData;
  website: string;
  features: {
    icon: string;
    text: string;
  }[];
}

export const brands: Brand[] = [
  {
    id: 1,
    name: 'GoBuyMe',
    tagline: 'Your One-Stop Shopping Destination',
    description: 'GoBuyMe is a leading e-commerce platform that brings together thousands of sellers and millions of products in one convenient location. With fast delivery, secure payments, and 24/7 customer support, we make online shopping simple and enjoyable.',
    logo: GBMlogo,
    website: 'https://gobuyme.shop',
    features: [
      { icon: '🛍️', text: 'Wide product selection' },
      { icon: '🚚', text: 'Fast & reliable delivery' },
      { icon: '🔄', text: 'Easy returns' }
    ]
  },
  {
    id: 2,
    name: 'U-Get Delivery',
    tagline: 'Same-Day Delivery Solutions',
    description: 'U-Get Delivery provides lightning-fast same-day delivery services for businesses and individuals. Our network of professional couriers ensures your packages reach their destination safely and on time, every time.',
    logo: UGETlogo,
    website: 'https://uget.delivery',
    features: [
      { icon: '🚚', text: 'Same-day delivery' },
      { icon: '📱', text: 'Real-time tracking' },
      { icon: '🌐', text: 'Nationwide coverage' }
    ]
  },
  {
    id: 3,
    name: 'Usekwu',
    tagline: 'Empowering African Languages',
    description: 'Usekwu is dedicated to preserving and promoting African languages through innovative technology. Our platform offers language learning tools, translation services, and cultural resources to connect people through language.',
    logo: UsekwuLogo,
    website: 'https://usekwu.com',
    features: [
      { icon: '🌍', text: 'Multiple African languages' },
      { icon: '📱', text: 'Interactive learning' },
      { icon: '📚', text: 'Cultural resources' }
    ]
  },
  {
    id: 4,
    name: 'LoadRunner Logistics',
    tagline: 'Smart Freight Solutions',
    description: 'LoadRunner Logistics provides end-to-end logistics and supply chain solutions. We connect shippers with carriers through our advanced platform, optimizing routes and reducing costs for businesses of all sizes.',
    logo: LRLLogo,
    website: 'https://loadrunnerlogistics.api',
    features: [
      { icon: '🚛', text: 'Efficient routing' },
      { icon: '📦', text: 'Cargo tracking' },
      { icon: '🌐', text: 'Global network' }
    ]
  }
];
