'use client';

import { Link } from '@/lib/i18n/routing';
import { useTranslations } from 'next-intl';

export function Footer() {
  const t = useTranslations('common');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="container py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center space-x-2">
            <span className="text-lg font-bold gradient-text">Portfolio</span>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <Link href="/about" className="hover:text-foreground transition-colors">
              {t('about')}
            </Link>
            <Link href="/blog" className="hover:text-foreground transition-colors">
              {t('blog')}
            </Link>
            <Link href="/gallery" className="hover:text-foreground transition-colors">
              {t('gallery')}
            </Link>
          </nav>

          <p className="text-sm text-muted-foreground">
            © {currentYear} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
