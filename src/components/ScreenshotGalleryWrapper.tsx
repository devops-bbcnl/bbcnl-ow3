'use client';

import dynamic from 'next/dynamic';
import { Screenshot } from '@/types/brands';

// Dynamically import the ScreenshotGallery component with no SSR
const ScreenshotGallery = dynamic(
  () => import('@/components/ScreenshotGallery'),
  { ssr: false }
);

interface ScreenshotGalleryWrapperProps {
  screenshots: Screenshot[];
}

export default function ScreenshotGalleryWrapper({ screenshots }: ScreenshotGalleryWrapperProps) {
  return <ScreenshotGallery screenshots={screenshots} />;
}
