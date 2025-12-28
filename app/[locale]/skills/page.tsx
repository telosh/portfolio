import { getTranslations } from 'next-intl/server';

export async function generateMetadata() {
  const t = await getTranslations('skills');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function SkillsPage() {
  const t = await getTranslations('skills');

  return (
    <div className="container py-10">
      <h1 className="text-4xl font-bold">{t('title')}</h1>
      <div className="mt-8">
        <p className="text-lg text-muted-foreground">{t('description')}</p>
      </div>
    </div>
  );
}
