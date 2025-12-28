'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { Dropdown } from '@/components/ui/dropdown';

type ThemeValue = 'light' | 'dark' | 'system';

const themeIcons: Record<ThemeValue, string> = {
  light: '☀️',
  dark: '🌙',
  system: '💻',
};

export function ThemeSelector() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const t = useTranslations('common');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-[120px]" />;
  }

  const options: { value: ThemeValue; label: string; icon: React.ReactNode }[] = [
    { value: 'light', label: t('themeLight'), icon: themeIcons.light },
    { value: 'dark', label: t('themeDark'), icon: themeIcons.dark },
    { value: 'system', label: t('themeSystem'), icon: themeIcons.system },
  ];

  return (
    <Dropdown
      options={options}
      value={(theme as ThemeValue) || 'system'}
      onChange={(value) => setTheme(value)}
      aria-label={t('themeSelect')}
    />
  );
}
