import { getTranslations } from 'next-intl/server';
import { TimelineItem } from '@/components/features/timeline';

export async function generateMetadata() {
  const t = await getTranslations('timeline');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function TimelinePage() {
  const t = await getTranslations('timeline');

  // タイムラインデータ
  const timelineData = [
    {
      year: '~2019',
      title: t('studentTitle'),
      events: [
        { text: t('studentLife') },
        { text: t('tennisMid') },
        { text: t('soccerHigh') },
      ],
      category: 'education' as const,
    },
    {
      year: '2020',
      title: t('hal2020Title'),
      events: [
        { text: t('halEnroll'), highlight: true },
        { text: t('hormonJob') },
        { text: t('feStudy') },
        { text: t('apexAddiction'), tags: ['APEX Legends'] },
      ],
      category: 'education' as const,
    },
    {
      year: '2021',
      title: t('fe2021Title'),
      events: [
        { text: t('quitHormon') },
        { text: t('selfStudy') },
        { text: t('fePass'), highlight: true },
      ],
      category: 'certification' as const,
    },
    {
      year: '2022',
      title: t('it2022Title'),
      events: [
        { text: t('dataJob'), tags: ['GAS', 'Python'] },
        { text: t('shibuyaCrowds') },
      ],
      category: 'work' as const,
    },
    {
      year: '2023',
      title: t('freelance2023Title'),
      events: [
        { text: t('eccube') },
        { text: t('freelanceStart'), highlight: true },
        { text: t('slackBot'), tags: ['Slack Bot', 'Next.js'] },
        { text: t('jobHunting') },
      ],
      category: 'work' as const,
    },
    {
      year: '2024',
      title: t('sier2024Title'),
      events: [
        { text: t('sierJoin'), highlight: true },
        { text: t('gcpStudy'), tags: ['Google Cloud'] },
        { text: t('aiDev'), tags: ['Vercel AI SDK', 'RAG'] },
      ],
      category: 'work' as const,
    },
    {
      year: '2025',
      title: t('security2025Title'),
      events: [
        {
          text: t('securityCert'),
          highlight: true,
          tags: ['GCP Security Engineer'],
        },
      ],
      category: 'certification' as const,
    },
  ];

  return (
    <div className="relative min-h-screen">
      {/* Subtle ambient background - adapts to theme */}
      <div className="fixed inset-0 -z-10 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-[40rem] h-[40rem] bg-primary/[0.03] rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[30rem] h-[30rem] bg-accent/[0.03] rounded-full blur-[100px]" />
      </div>

      <div className="w-full max-w-xl mx-auto px-5 py-16 md:py-24">
        {/* Header */}
        <header className="mb-12 md:mb-16">
          <p className="text-[11px] font-mono text-muted-foreground/50 uppercase tracking-[0.2em] mb-3">
            Timeline
          </p>
          <h1 className="text-2xl md:text-3xl font-bold text-foreground tracking-tight mb-3">
            {t('title')}
          </h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {t('subtitle')}
          </p>
        </header>

        {/* Timeline */}
        <section role="feed" aria-label="Career timeline">
          {timelineData.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              events={item.events}
              index={index}
              category={item.category}
            />
          ))}

          {/* End marker */}
          <div className="grid grid-cols-[4rem_1fr] md:grid-cols-[5rem_1fr] gap-4 md:gap-6">
            <span className="text-[13px] font-mono font-medium text-muted-foreground/50 tabular-nums">
              Now
            </span>
            <div className="border-l border-foreground/10 pl-4 md:pl-6 -ml-px pb-4 relative">
              <div className="absolute left-0 top-[6px] -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-foreground/10" />
              <p className="text-[13px] text-muted-foreground/60">
                {t('ongoing')}
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
