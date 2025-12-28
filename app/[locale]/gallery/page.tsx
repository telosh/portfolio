import { getTranslations } from 'next-intl/server';
import { GalleryGrid } from '@/components/features/gallery/gallery-grid';
import { GalleryImage } from '@/lib/gallery/types';

export async function generateMetadata() {
  const t = await getTranslations('gallery');

  return {
    title: t('title'),
    description: t('description'),
  };
}

// TODO: Replace with actual image loading logic
const mockImages: GalleryImage[] = [
  {
    src: '/images/placeholder.jpg',
    alt: 'Placeholder image 1',
    title: 'Sample Image 1',
    date: '2024-01-01',
  },
  {
    src: '/images/placeholder.jpg',
    alt: 'Placeholder image 2',
    title: 'Sample Image 2',
    date: '2024-01-02',
  },
];

export default async function GalleryPage() {
  const t = await getTranslations('gallery');

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <p className="mt-4 text-lg text-muted-foreground">{t('description')}</p>
      <div className="mt-8">
        <GalleryGrid images={mockImages} />
      </div>
    </div>
  );
}
