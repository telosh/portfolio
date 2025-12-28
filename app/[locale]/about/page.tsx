import { getTranslations } from 'next-intl/server';
import Link from 'next/link';

export async function generateMetadata() {
  const t = await getTranslations('about');

  return {
    title: t('title'),
    description: t('description'),
  };
}

// SNSリンク設定（追加しやすいように配列で管理）
const socialLinks = [
  {
    name: 'GitHub',
    url: 'https://github.com/telosh',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
      </svg>
    ),
  },
  {
    name: 'X',
    url: 'https://x.com/TellM1_',
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  // 追加したいSNSがあればここに追加
  // {
  //   name: 'LinkedIn',
  //   url: 'https://linkedin.com/in/...',
  //   icon: <svg>...</svg>,
  // },
];

// Google Cloud 資格一覧
const gcpCertifications = [
  {
    name: 'Cloud Digital Leader',
    level: 'Foundational',
    color: 'from-blue-400 to-blue-600',
  },
  {
    name: 'Associate Cloud Engineer',
    level: 'Associate',
    color: 'from-green-400 to-green-600',
  },
  {
    name: 'Professional Cloud Architect',
    level: 'Professional',
    color: 'from-purple-400 to-purple-600',
  },
  {
    name: 'Professional Cloud Developer',
    level: 'Professional',
    color: 'from-orange-400 to-orange-600',
  },
  {
    name: 'Professional Cloud Security Engineer',
    level: 'Professional',
    color: 'from-red-400 to-red-600',
  },
];

// 趣味・ゲーム
const hobbies = [
  {
    name: 'Monster Hunter',
    emoji: '🐉',
    description: 'モンスターハンターシリーズ',
  },
  {
    name: 'Escape From Tarkov',
    emoji: '🎯',
    description: 'ハードコアFPSサバイバル',
  },
];

export default async function AboutPage() {
  const t = await getTranslations('about');

  // 年齢計算
  const birthDate = new Date(2001, 4, 1); // 2001年5月1日
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }

  return (
    <div className="container py-16">
      {/* Hero Section */}
      <section className="mb-20">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Avatar */}
          <div className="relative">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-1">
              <div className="w-full h-full rounded-full bg-card flex items-center justify-center">
                <span className="text-6xl md:text-7xl">👨‍💻</span>
              </div>
            </div>
            {/* Google Cloud バッジ */}
            <div className="absolute -bottom-2 -right-2 w-14 h-14 bg-white dark:bg-gray-800 rounded-full flex items-center justify-center shadow-lg border-2 border-blue-500">
              <span className="text-2xl">☁️</span>
            </div>
          </div>

          {/* Info */}
          <div className="text-center md:text-left flex-1">
            <span className="inline-block px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary rounded-full mb-4">
              {t('role')}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
              <span className="gradient-text">telosh</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg mb-6">
              {t('bio')}
            </p>

            {/* Social Links */}
            <div className="flex gap-3 justify-center md:justify-start">
              {socialLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors"
                >
                  {link.icon}
                  <span className="text-sm font-medium">{link.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Profile Info */}
      <section className="mb-16">
        <h2 className="text-2xl font-bold mb-8">{t('profileTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { icon: '📍', label: t('location'), value: t('locationValue') },
            { icon: '🎂', label: t('birthday'), value: t('birthdayValue') },
            { icon: '🎈', label: t('age'), value: `${age}${t('ageUnit')}` },
            { icon: '🏢', label: t('work'), value: t('workValue') },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:bg-secondary/50 transition-colors"
            >
              <span className="text-2xl">{item.icon}</span>
              <div>
                <p className="text-xs text-muted-foreground">{item.label}</p>
                <p className="font-medium">{item.value}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Google Cloud Certifications */}
      <section className="mb-16">
        <div className="flex items-center gap-3 mb-8">
          <h2 className="text-2xl font-bold">{t('certificationsTitle')}</h2>
          <span className="px-3 py-1 text-xs font-bold bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-full">
            {gcpCertifications.length} {t('certificationsCount')}
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {gcpCertifications.map((cert, index) => (
            <div
              key={index}
              className="hover-card relative overflow-hidden p-5 rounded-xl border bg-card group"
            >
              <div
                className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${cert.color}`}
              />
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center flex-shrink-0">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                  </svg>
                </div>
                <div>
                  <span
                    className={`inline-block px-2 py-0.5 text-xs font-medium rounded mb-1 ${
                      cert.level === 'Professional'
                        ? 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400'
                        : cert.level === 'Associate'
                          ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                          : 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                    }`}
                  >
                    {cert.level}
                  </span>
                  <h3 className="font-semibold text-sm leading-tight">
                    {cert.name}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Hobbies */}
      <section>
        <h2 className="text-2xl font-bold mb-8">{t('hobbiesTitle')}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="hover-card p-6 rounded-xl border bg-card">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">🎮</span>
              <div>
                <h3 className="text-xl font-bold">{t('gaming')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('gamingDescription')}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {hobbies.map((hobby, index) => (
                <span
                  key={index}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary text-sm"
                >
                  <span>{hobby.emoji}</span>
                  <span>{hobby.name}</span>
                </span>
              ))}
            </div>
          </div>

          <div className="hover-card p-6 rounded-xl border bg-card">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-4xl">☁️</span>
              <div>
                <h3 className="text-xl font-bold">{t('cloudTech')}</h3>
                <p className="text-sm text-muted-foreground">
                  {t('cloudTechDescription')}
                </p>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
                <span>🔵</span>
                <span>Google Cloud</span>
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
