'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  LayoutGrid,
  DoorClosed,
  PanelLeftClose,
  Grid3X3,
  Flame,
  GripVertical,
  SunDim,
  ArrowUpRight
} from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const solutions = [
  {
    id: 1,
    icon: LayoutGrid,
    image: '/glass-window.jpg',
    link: '/products',
    number: '01',
  },
  {
    id: 2,
    icon: DoorClosed,
    image: '/alum-door.jpg',
    link: '/products',
    number: '02',
  },
  {
    id: 3,
    icon: PanelLeftClose,
    image: '/glassdoor.jpg',
    link: '/products',
    number: '03',
  },
  {
    id: 4,
    icon: Grid3X3,
    image: '/Facades.jpg',
    link: '/products',
    number: '04',
  },
  {
    id: 5,
    icon: Flame,
    image: '/fire.jpg',
    link: '/products',
    number: '05',
  },
  {
    id: 6,
    icon: GripVertical,
    image: '/interiorwalls.jpg',
    link: '/products',
    number: '06',
  },
  {
    id: 7,
    icon: SunDim,
    image: '/sunvisitor.jpg',
    link: '/products',
    number: '07',
  },
];

export function OurSolutions() {
  const { t } = useTranslation();
  const ease = [0.16, 1, 0.3, 1] as const;
  const productsContent = t('solutions.products');

  return (
    <section className="bg-surface-1 py-10 lg:py-16" id="solutions">
      <div className="mx-auto w-full max-w-[1600px] px-6 lg:px-12">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-12 flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6"
        >
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-blue" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-blue uppercase">{t('solutions.tag')}</span>
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink lg:text-5xl">
              {t('solutions.heading1')} <span className="text-ink-muted">{t('solutions.heading2')}</span>
            </h2>
          </div>
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-ink-muted uppercase hover:text-blue transition-colors"
          >
            {t('solutions.viewAll')}
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Full-Image Glass Cards Grid (3 on top row, 4 on bottom row) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-8 mt-12">
          {solutions.map((solution, index) => {
            const Icon = solution.icon;
            
            // 3 items in the first row (span 4 cols each = 12), 4 items in the second row (span 3 cols each = 12)
            const colSpanClass = index < 3 ? "lg:col-span-4" : "lg:col-span-3";

            return (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease }}
                className={`group relative flex flex-col justify-end overflow-hidden rounded-[2rem] aspect-[4/5] shadow-card hover:shadow-card-hover transition-shadow duration-500 ${colSpanClass} md:col-span-1`}
              >
                {/* Full Background Image */}
                  <img 
                    src={solution.image} 
                    alt={productsContent[index]?.title || ''}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                
                {/* Dark gradient overlay to ensure text legibility always */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500" />
                
                {/* Floating Icon Top Right */}
                <div className="absolute top-6 right-6 h-12 w-12 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-6 z-20">
                  <Icon strokeWidth={1.5} className="h-6 w-6 text-white" />
                </div>

                {/* Frosted Glass Content Panel */}
                <div className="relative z-20 m-4 rounded-2xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 transition-all duration-500 group-hover:bg-white/20">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">
                      {solution.number}
                    </span>
                  </div>
                  
                  <h3 className="font-display text-xl lg:text-2xl font-bold text-white tracking-tight mb-3">
                    {productsContent[index]?.title}
                  </h3>
                  
                  {/* Expanding Description */}
                  <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-all duration-500 ease-in-out">
                    <div className="overflow-hidden">
                      <p className="text-sm font-light leading-relaxed text-white/90 mb-6 mt-1">
                        {productsContent[index]?.description}
                      </p>
                    </div>
                  </div>

                    {/* Action link */}
                    <Link 
                      href={solution.link}
                      className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-full bg-white/10 text-[11px] font-bold tracking-[0.2em] uppercase text-white backdrop-blur-md opacity-0 -translate-x-4 transition-all duration-500 delay-150 group-hover:opacity-100 group-hover:translate-x-0 hover:bg-white hover:text-ink whitespace-nowrap"
                    >
                      {t('solutions.viewDetails')}
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}