'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Logo from '../components/assets/images/logo.png';

export default function Home() {
  const router = useRouter();
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    // Start the animation sequence after a short delay
    const timer = setTimeout(() => {
      setIsVisible(false);
      // Redirect to /home after animation completes
      setTimeout(() => {
        router.push('/home');
      }, 1000); // Match this with the animation duration
    }, 3000); // Time before starting the roll-out animation

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <AnimatePresence>
        {isVisible && (
          <motion.div
            className="relative w-64 h-64 md:w-[24rem] md:h-[24rem]" // Increased size
            initial={{ 
              x: '-100vw',
              rotate: -360,
              scale: 0.5
            }}
            animate={{ 
              x: 0,
              rotate: 0,
              scale: 1.5, // Increased final scale
              transition: {
                x: { 
                  duration: 1.5,
                  ease: [0.16, 1, 0.3, 1],
                },
                rotate: { 
                  duration: 1.5,
                  ease: "linear",
                },
                scale: {
                  duration: 0.5,
                  delay: 1,
                  ease: "easeOut"
                }
              }
            }}
            exit={{
              x: '100vw',
              rotate: 360,
              scale: 1.5, // Match the final scale
              transition: { 
                x: { 
                  duration: 1,
                  ease: [0.4, 0, 0.6, 1],
                },
                rotate: { 
                  duration: 1,
                  ease: "linear",
                }
              }
            }}
          >
            <Image 
              src={Logo} 
              alt="Bubble Barrel Logo" 
              fill
              className="object-contain"
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}