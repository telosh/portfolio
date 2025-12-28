import { getTranslations } from 'next-intl/server';
import { Link } from '@/lib/i18n/routing';
import { Button } from '@/components/ui/button';

export async function generateMetadata() {
  const t = await getTranslations('home');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function HomePage() {
  const t = await getTranslations('home');
  const tc = await getTranslations('common');

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background gradient blobs */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 dark:bg-purple-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob" />
          <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-300 dark:bg-pink-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-2000" />
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-300 dark:bg-cyan-900 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-xl opacity-70 animate-blob animation-delay-4000" />
        </div>

        <div className="container py-24 md:py-32">
          <div className="flex flex-col items-center text-center gap-6 max-w-3xl mx-auto">
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full">
              Frontend Engineer
            </span>
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
              <span className="gradient-text">{t('hero.title')}</span>
            </h1>
            <p className="text-lg text-muted-foreground sm:text-xl md:text-2xl leading-relaxed max-w-2xl">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <Button size="lg" className="rounded-full px-8 shadow-lg shadow-primary/25" asChild>
                <Link href="/about">{tc('about')}</Link>
              </Button>
              <Button variant="outline" size="lg" className="rounded-full px-8" asChild>
                <Link href="/blog">{tc('blog')}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="container py-16 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <Link
            href="/skills"
            className="hover-card group rounded-2xl border border-border bg-card p-8"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">{tc('skills')}</h3>
            <p className="mt-2 text-muted-foreground">
              {t('skillsDescription')}
            </p>
          </Link>

          <Link
            href="/timeline"
            className="hover-card group rounded-2xl border border-border bg-card p-8"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-cyan-500 to-blue-500 text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">{tc('timeline')}</h3>
            <p className="mt-2 text-muted-foreground">
              {t('timelineDescription')}
            </p>
          </Link>

          <Link
            href="/gallery"
            className="hover-card group rounded-2xl border border-border bg-card p-8 sm:col-span-2 lg:col-span-1"
          >
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-orange-500 to-red-500 text-white">
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold">{tc('gallery')}</h3>
            <p className="mt-2 text-muted-foreground">
              {t('galleryDescription')}
            </p>
          </Link>
        </div>
      </section>
    </div>
  );
}
