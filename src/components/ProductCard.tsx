'use client';

import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

interface ProductCardProps {
  title: string;
  label: string;
  accentClass: string;
}

export function ProductCard({ title, label, accentClass }: ProductCardProps) {
  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={cardVariants}
      className="group overflow-hidden rounded-[1.75rem] border border-slate-200 bg-slate-50 p-6 transition hover:-translate-y-1 hover:shadow-soft"
    >
      <div className="mb-5 inline-flex items-center gap-3">
        <span className={`inline-flex h-3 w-3 rounded-full ${accentClass}`} />
        <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-600 ring-1 ring-slate-200">
          {label}
        </span>
      </div>
      <h3 className="text-xl font-semibold text-primary-dark">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-600">
        Placeholder content for this glass system. TODO: replace with product specifications and real imagery.
      </p>
      <div className="mt-6 text-sm font-semibold text-primary transition group-hover:text-primary-dark">
        Discover the range
      </div>
    </motion.article>
  );
}
