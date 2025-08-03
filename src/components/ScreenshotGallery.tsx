'use client';

import { useState } from 'react';
import Image from 'next/image';
import { FiX, FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import { Screenshot } from '@/types/brands';

interface ScreenshotGalleryProps {
  screenshots: Screenshot[];
}

export default function ScreenshotGallery({ screenshots }: ScreenshotGalleryProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const navigate = (direction: 'prev' | 'next') => {
    if (selectedImage === null) return;
    
    if (direction === 'prev') {
      setSelectedImage(prev => (prev === 0 ? screenshots.length - 1 : prev! - 1));
    } else {
      setSelectedImage(prev => (prev === screenshots.length - 1 ? 0 : prev! + 1));
    }
  };

  // Generate placeholder data if no screenshots are provided
  const displayScreenshots = screenshots.length > 0 
    ? screenshots 
    : Array(4).fill(0).map((_, i) => ({
        id: i + 1,
        title: `Screenshot ${i + 1}`,
        url: ''
      }));

  return (
    <div className="py-8">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-4">
        {displayScreenshots.map((screenshot, index) => (
          <div 
            key={screenshot.id}
            className="group relative overflow-hidden rounded-xl shadow-2xl transform transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <div className="aspect-w-9 aspect-h-16 w-full bg-gray-700 rounded-xl flex items-center justify-center">
              {screenshot.url ? (
                <Image 
                  src={screenshot.url} 
                  alt={screenshot.title}
                  fill
                  className="object-cover"
                />
              ) : (
                <div className="text-gray-400 text-sm text-center p-4">
                  <div className="text-4xl mb-2">📱</div>
                  <p>{screenshot.title}</p>
                </div>
              )}
            </div>
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
              <span className="bg-[#ffd700] text-black px-4 py-2 rounded-full font-medium">
                View
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4">
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-[#ffd700] transition-colors"
            aria-label="Close"
          >
            <FiX size={32} />
          </button>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              navigate('prev');
            }}
            className="absolute left-4 text-white hover:text-[#ffd700] transition-colors"
            aria-label="Previous"
          >
            <FiChevronLeft size={48} />
          </button>

          <div className="relative w-full max-w-4xl h-[80vh] mx-16">
            <Image
              src={displayScreenshots[selectedImage]?.url || ''}
              alt={displayScreenshots[selectedImage]?.title || 'Screenshot'}
              fill
              className="object-contain"
              unoptimized
              priority
            />
          </div>

          <button 
            onClick={(e) => {
              e.stopPropagation();
              navigate('next');
            }}
            className="absolute right-4 text-white hover:text-[#ffd700] transition-colors"
            aria-label="Next"
          >
            <FiChevronRight size={48} />
          </button>
        </div>
      )}
    </div>
  );
}
