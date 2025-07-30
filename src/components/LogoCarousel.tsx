'use client';

import Image from 'next/image';
import type { StaticImageData } from 'next/image';
import GBMlogo from './assets/images/GBMlogo.png';
import UGETlogo from './assets/images/UGET-logo.png';
import UsekwuLogo from './assets/images/usekwu-logo.png';
import LRLLogo from './assets/images/LRL-Logo.png';

interface Brand {
  id: number;
  name: string;
  logo: StaticImageData;
}

const brands: Brand[] = [
  { id: 1, name: 'GoBuyMe', logo: GBMlogo },
  { id: 2, name: 'U-Get Delivery', logo: UGETlogo },
  { id: 3, name: 'Usekwu', logo: UsekwuLogo },
  { id: 4, name: 'LoadRunner Logistics', logo: LRLLogo },
];

export default function LogoCarousel() {
  return (
    <div className="relative w-full py-12 bg-white">
      <div className="absolute inset-0 bg-gradient-to-b from-black/80 to-black/60 z-0"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {brands.map((brand) => (
            <div key={brand.id} className="flex-shrink-0">
              <div className="relative h-16 w-32 md:h-20 md:w-40">
                <Image
                  src={brand.logo}
                  alt={brand.name}
                  fill
                  className="object-contain grayscale hover:grayscale-0 transition-all duration-300"
                  sizes="(max-width: 768px) 150px, 200px"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}