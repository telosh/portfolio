'use client';

import { useState } from 'react';
import Image from 'next/image';
import { GalleryImage } from '@/lib/gallery/types';
import { Lightbox } from './lightbox';

interface GalleryGridProps {
  images: GalleryImage[];
}

export function GalleryGrid({ images }: GalleryGridProps) {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(image)}
            className="group relative aspect-square overflow-hidden rounded-lg"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover transition-transform group-hover:scale-105"
              sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            />
            {image.title && (
              <div className="absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/40">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 transition-opacity group-hover:opacity-100">
                  <h3 className="font-semibold">{image.title}</h3>
                </div>
              </div>
            )}
          </button>
        ))}
      </div>
      <Lightbox
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
      />
    </>
  );
}
