import { getTranslations } from 'next-intl/server';
import { Link } from '@/lib/i18n/routing';
import { Button } from '@/components/ui/button';

export default async function NotFound() {
  const t = await getTranslations('notFound');

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center">
      <h1 className="text-6xl font-bold">404</h1>
      <p className="mt-4 text-xl text-muted-foreground">
        {t('message')}
      </p>
      <Button asChild className="mt-8">
        <Link href="/">{t('goHome')}</Link>
      </Button>
    </div>
  );
}
