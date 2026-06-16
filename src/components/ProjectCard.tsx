'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface ProductCardProps {
  product: {
    id: number;
    name: string;
    image: string;
    description: string;
    accent: string;
  };
  index: number;
}

const accentClasses: Record<string, string> = {
  'glass-magenta': 'bg-glass-magenta',
  'accent-teal': 'bg-accent-teal',
  'glass-green': 'bg-glass-green',
};

const accentTextClasses: Record<string, string> = {
  'glass-magenta': 'text-glass-magenta',
  'accent-teal': 'text-accent-teal',
  'glass-green': 'text-glass-green',
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

export function ProductCard({ product, index }: ProductCardProps) {
  const accentBg = accentClasses[product.accent] || 'bg-primary';
  const accentText = accentTextClasses[product.accent] || 'text-primary';

  return (
    <motion.div
      variants={cardVariants}
      className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:shadow-xl h-full flex flex-col"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden bg-slate-100">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/60 via-transparent to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        {/* Accent Badge */}
        <div className="absolute top-4 right-4 flex items-center gap-2">
          <div className={`h-3 w-3 rounded-full ${accentBg}`} />
        </div>
      </div>

      {/* Content Container */}
      <div className="flex flex-col grow p-6 space-y-4">
        {/* Label */}
        <p className="text-xs font-semibold uppercase tracking-widest text-slate-500">Product Line</p>

        {/* Title */}
        <h3 className="text-xl font-bold text-primary-dark">{product.name}</h3>

        {/* Description */}
        <p className="text-sm leading-6 text-slate-600 grow">{product.description}</p>

        {/* Spacer to push CTA to bottom */}
        <div className="grow" />

        {/* CTA Link */}
        <Link
          href={`/products#${product.id}`}
          className={`inline-flex items-center gap-2 text-sm font-semibold ${accentText} opacity-0 transition group-hover:opacity-100 mt-4`}
        >
          Discover <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  );
}