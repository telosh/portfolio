'use client';

import { useLocale, useTranslations } from 'next-intl';
import { useRouter, usePathname } from '@/lib/i18n/routing';
import { Dropdown } from '@/components/ui/dropdown';

// Define supported locales - easily extensible for more languages
const SUPPORTED_LOCALES = [
  { value: 'ja', label: '日本語', icon: '🇯🇵' },
  { value: 'en', label: 'English', icon: '🇺🇸' },
  // Future languages can be added here:
  // { value: 'zh', label: '中文', icon: '🇨🇳' },
  // { value: 'ko', label: '한국어', icon: '🇰🇷' },
  // { value: 'es', label: 'Español', icon: '🇪🇸' },
  // { value: 'fr', label: 'Français', icon: '🇫🇷' },
] as const;

type LocaleValue = (typeof SUPPORTED_LOCALES)[number]['value'];

export function LanguageSelector() {
  const locale = useLocale() as LocaleValue;
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations('common');

  const handleChange = (newLocale: LocaleValue) => {
    router.replace(pathname, { locale: newLocale });
  };

  const options = SUPPORTED_LOCALES.map((loc) => ({
    value: loc.value,
    label: loc.label,
    icon: <span>{loc.icon}</span>,
  }));

  return (
    <Dropdown
      options={options}
      value={locale}
      onChange={handleChange}
      aria-label={t('languageSelect')}
    />
  );
}
