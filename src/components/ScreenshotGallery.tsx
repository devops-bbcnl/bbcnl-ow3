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
    <div className="py-4 w-full">
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 px-4 max-w-7xl mx-auto">
        {displayScreenshots.map((screenshot, index) => (
          <div 
            key={screenshot.id}
            className="group relative overflow-hidden rounded-lg shadow-lg transform transition-all duration-300 hover:scale-105 cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <div className="relative w-full pt-[100%] bg-gray-800 rounded-lg">
              {screenshot.url ? (
                <div className="absolute inset-0">
                  <Image 
                    src={screenshot.url} 
                    alt={screenshot.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                    priority={index < 4} // Only load first 4 images eagerly
                  />
                </div>
              ) : (
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <div className="text-4xl mb-2 text-gray-400">📱</div>
                  <p className="text-gray-400 text-sm">{screenshot.title}</p>
                </div>
              )}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
                <span className="bg-[#ffd700] text-black px-2 py-1 rounded-full font-medium text-xs">
                  View
                </span>
              </div>
            </div>
            <div className="p-1.5 bg-gray-900">
              <p className="text-xs text-gray-300 text-center truncate">{screenshot.title}</p>
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
