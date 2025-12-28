'use client';

import { motion, useInView, useReducedMotion } from 'framer-motion';
import { useRef } from 'react';

type TimelineEvent = {
  text: string;
  highlight?: boolean;
  tags?: string[];
};

type TimelineItemProps = {
  year: string;
  title: string;
  events: TimelineEvent[];
  index: number;
  category: 'education' | 'work' | 'certification' | 'personal';
};

const categoryConfig = {
  education: {
    light: 'text-cyan-600',
    dark: 'dark:text-cyan-400',
    hoverLight: 'group-hover:text-cyan-700',
    hoverDark: 'dark:group-hover:text-cyan-300',
  },
  work: {
    light: 'text-violet-600',
    dark: 'dark:text-violet-400',
    hoverLight: 'group-hover:text-violet-700',
    hoverDark: 'dark:group-hover:text-violet-300',
  },
  certification: {
    light: 'text-emerald-600',
    dark: 'dark:text-emerald-400',
    hoverLight: 'group-hover:text-emerald-700',
    hoverDark: 'dark:group-hover:text-emerald-300',
  },
  personal: {
    light: 'text-amber-600',
    dark: 'dark:text-amber-400',
    hoverLight: 'group-hover:text-amber-700',
    hoverDark: 'dark:group-hover:text-amber-300',
  },
};

export function TimelineItem({
  year,
  title,
  events,
  index,
  category,
}: TimelineItemProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-80px' });
  const prefersReducedMotion = useReducedMotion();
  const config = categoryConfig[category];

  // Vercel Guidelines: Honor prefers-reduced-motion
  const animationProps = prefersReducedMotion
    ? { initial: { opacity: 1 }, animate: { opacity: 1 } }
    : {
        initial: { opacity: 0, y: 24 },
        animate: isInView ? { opacity: 1, y: 0 } : {},
        transition: {
          opacity: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
          y: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] },
        },
      };

  return (
    <motion.article
      ref={ref}
      {...animationProps}
      className="group relative grid grid-cols-[4rem_1fr] md:grid-cols-[5rem_1fr] gap-4 md:gap-6"
    >
      {/* Year column */}
      <div className="relative">
        <span
          className={`
            text-[13px] font-mono font-medium tracking-tight tabular-nums
            ${config.light} ${config.dark}
            ${config.hoverLight} ${config.hoverDark}
            transition-colors duration-150
          `}
        >
          {year}
        </span>
      </div>

      {/* Content column */}
      <div className="pb-10 md:pb-12 border-l border-foreground/10 pl-4 md:pl-6 -ml-px">
        {/* Vertical line dot */}
        <div
          className="
            absolute left-[4rem] md:left-[5rem] top-[6px] -translate-x-1/2
            w-1.5 h-1.5 rounded-full
            bg-foreground/20 group-hover:bg-foreground/40
            transition-colors duration-150
          "
        />

        {/* Title */}
        <h3 className="text-[15px] md:text-base font-semibold text-foreground/90 group-hover:text-foreground mb-3 transition-colors duration-150 leading-snug">
          {title}
        </h3>

        {/* Events list */}
        <ul className="space-y-2">
          {events.map((event, eventIndex) => (
            <li key={eventIndex}>
              <p
                className={`
                  text-[13px] md:text-sm leading-relaxed transition-colors duration-150
                  ${
                    event.highlight
                      ? 'text-foreground/80 font-medium group-hover:text-foreground/90'
                      : 'text-muted-foreground group-hover:text-muted-foreground/80'
                  }
                `}
              >
                {event.text}
              </p>

              {event.tags && event.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mt-1.5">
                  {event.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="
                        px-1.5 py-0.5 
                        text-[10px] font-medium tracking-wide uppercase
                        rounded bg-foreground/[0.04] text-muted-foreground/70
                        group-hover:bg-foreground/[0.06] group-hover:text-muted-foreground
                        transition-colors duration-150
                      "
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.article>
  );
}
