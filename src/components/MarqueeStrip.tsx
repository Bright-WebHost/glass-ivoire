'use client';

import { useTranslation } from '@/lib/i18n';

// Logo accent colors for the separators
const separatorColors = ["#2A6DB5","#4DADD8","#5BAD3E","#A8C93A","#8B3A8F","#E8D84A"];

export function MarqueeStrip() {
  const { t } = useTranslation();
  const items = t('marquee') as string[];
  const content = [...items, ...items];

  return (
    <div className="relative z-10 overflow-hidden bg-[#2A6DB5] py-4 marquee-track">
      {/* Subtle texture overlay */}
      <div className="absolute inset-0 arch-grid opacity-20 pointer-events-none" />

      <div className="flex whitespace-nowrap animate-marquee gap-0 relative z-10">
        {content.map((item, i) => (
          <span key={i} className="inline-flex items-center gap-5 px-5">
            <span className="text-[11px] font-bold tracking-[0.22em] text-white/85 uppercase">
              {item}
            </span>
            <span
              className="h-1.5 w-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: separatorColors[i % separatorColors.length] }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
