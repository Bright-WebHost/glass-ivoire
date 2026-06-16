'use client';

import { useState } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
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

const products = [
  {
    id: 1,
    title: 'Aluminum Windows',
    description: 'Thermally broken profiles for tropical climates. Engineered to ISO 9001 tolerances.',
    icon: LayoutGrid,
    image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop',
    link: '/products/windows',
    number: '01',
  },
  {
    id: 2,
    title: 'Aluminum Doors',
    description: 'High-security, aesthetically refined entrances for commercial and luxury residential.',
    icon: DoorClosed,
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop',
    link: '/products/doors',
    number: '02',
  },
  {
    id: 3,
    title: 'Sliding Doors',
    description: 'Ultra-slim rail systems with seamless indoor-outdoor spatial integration.',
    icon: PanelLeftClose,
    image: 'https://images.unsplash.com/photo-1541888078652-5ad26a312015?q=80&w=1600&auto=format&fit=crop',
    link: '/products/sliding-doors',
    number: '03',
  },
  {
    id: 4,
    title: 'Facades',
    description: 'Full curtain-wall and structural glazing systems defining modern skylines.',
    icon: Grid3X3,
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop',
    link: '/products/facades',
    number: '04',
  },
  {
    id: 5,
    title: 'Fire-Resistant Systems',
    description: 'Certified EI30–EI120 barriers integrating safety without compromise on aesthetics.',
    icon: Flame,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1600&auto=format&fit=crop',
    link: '/products/fire-resistant',
    number: '05',
  },
  {
    id: 6,
    title: 'Interior Walls',
    description: 'Floor-to-ceiling glass partitions shaping open, luminous workspace environments.',
    icon: GripVertical,
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop',
    link: '/products/interior-walls',
    number: '06',
  },
  {
    id: 7,
    title: 'Sun Visors',
    description: 'Precision-angled brise-soleil elements reducing solar gain without blocking daylight.',
    icon: SunDim,
    image: 'https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1600&auto=format&fit=crop',
    link: '/products/sun-visors',
    number: '07',
  },
];

export function OurSolutions() {
  const [activeIndex, setActiveIndex] = useState<number>(3);

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="bg-surface-1 py-20 lg:py-28" id="solutions">
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
              <span className="text-[10px] font-bold tracking-[0.3em] text-blue uppercase">Our Systems</span>
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink lg:text-5xl">
              Engineering for<br />
              <span className="text-ink-muted">every project.</span>
            </h2>
          </div>
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] text-ink-muted uppercase hover:text-blue transition-colors"
          >
            View All Products
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Product accordion */}
        <div className="flex h-[520px] w-full gap-1 lg:h-[560px]">
          {products.map((product, index) => {
            const isActive = activeIndex === index;
            const Icon = product.icon;

            return (
              <motion.div
                key={product.id}
                layout
                onMouseEnter={() => setActiveIndex(index)}
                onClick={() => setActiveIndex(index)}
                className="group relative overflow-hidden cursor-pointer rounded-2xl"
                style={{ flex: isActive ? 6 : 1 }}
                transition={{ duration: 0.6, ease }}
              >
                {/* Background image */}
                <div className="absolute inset-0">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  />
                  {/* Multi-layer overlay */}
                  <div
                    className={`absolute inset-0 transition-all duration-500 ${
                      isActive
                        ? 'bg-gradient-to-t from-[#05060a]/95 via-[#05060a]/30 to-transparent'
                        : 'bg-[#05060a]/70'
                    }`}
                  />
                </div>

                {/* Number label (collapsed state) */}
                <div
                  className={`absolute top-4 left-0 right-0 flex justify-center transition-opacity duration-300 ${
                    isActive ? 'opacity-0' : 'opacity-50'
                  }`}
                >
                  <span className="text-[9px] font-mono text-white/60">{product.number}</span>
                </div>

                {/* Active expanded content */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4, delay: 0.1 }}
                      className="absolute bottom-0 left-0 right-0 p-6 lg:p-8"
                    >
                      {/* Blueprint corner decoration */}
                      <div className="absolute top-4 right-4 w-8 h-8 border-t border-r border-blue/40" />
                      <div className="absolute top-4 left-4 w-4 h-4 border-t border-l border-white/10" />

                      <div className="flex items-center gap-3 mb-4">
                        <div className="glass rounded-lg p-2">
                          <Icon strokeWidth={1.5} className="h-4 w-4 text-blue" />
                        </div>
                        <span className="text-[9px] font-mono text-white/40">{product.number}</span>
                      </div>
                      <h3 className="font-display text-xl font-bold text-white tracking-tight mb-2">
                        {product.title}
                      </h3>
                      <p className="text-xs font-light leading-relaxed text-white/60 mb-6 max-w-xs">
                        {product.description}
                      </p>
                      <Link
                        href={product.link}
                        className="group/btn glass-blue inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-[10px] font-bold tracking-[0.15em] text-blue-light uppercase transition-all duration-300 hover:bg-blue/20"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Learn More
                        <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                      </Link>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Collapsed icon */}
                <div
                  className={`absolute bottom-6 left-0 right-0 flex flex-col items-center gap-2 transition-opacity duration-300 ${
                    isActive ? 'opacity-0' : 'opacity-60'
                  }`}
                >
                  <Icon strokeWidth={1.5} className="h-5 w-5 text-white" />
                  <span
                    className="text-[9px] font-bold tracking-widest text-white/70 uppercase [writing-mode:vertical-rl] rotate-180 hidden lg:block"
                    style={{ maxHeight: '80px', overflow: 'hidden' }}
                  >
                    {product.title}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}