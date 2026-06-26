'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useRef, useState } from 'react';
import { useTranslation } from '@/lib/i18n';

const products = [
  {
    id: "01",
    title: "Structural Glazing",
    category: "Facades",
    description: "Full curtain-wall systems engineered for wind-load compliance across Abidjan's skyline.",
    image: "/Facades.jpg",
    accent: "#2A6DB5",
    accentBg: "#E8F2FC",
  },
  {
    id: "02",
    title: "Thermal Breaks",
    category: "Insulation",
    description: "Polyamide-reinforced profiles achieving Uf values below 1.0 W/m²K.",
    image: "/thermal.jpg",
    accent: "#4DADD8",
    accentBg: "#EBF8FD",
  },
  {
    id: "03",
    title: "Jumbo Formats",
    category: "Dimensions",
    description: "Floor-to-ceiling spans up to 6m with structural interlayer bonding.",
    image: "/jumboformat.jpg",
    accent: "#5BAD3E",
    accentBg: "#EEF8EA",
  },
  {
    id: "04",
    title: "Acoustic Units",
    category: "Performance",
    description: "Triple-laminate assemblies rated up to Rw 52 dB for urban environments.",
    image: "/Acoustic-units.jpg",
    accent: "#8B3A8F",
    accentBg: "#F5ECF6",
  },
];

function ProductCard({ product, index, content, viewDetailsText }: { product: typeof products[0]; index: number, content: any, viewDetailsText: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    setGlowPos({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link href="/products">
        <div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="group relative overflow-hidden rounded-2xl bg-white border border-blue-pale shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 cursor-pointer"
        >
          {/* Cursor glow */}
          <div
            className="absolute inset-0 z-10 rounded-2xl pointer-events-none transition-opacity duration-300"
            style={{
              opacity: isHovered ? 1 : 0,
              background: `radial-gradient(circle 160px at ${glowPos.x}% ${glowPos.y}%, ${product.accent}18, transparent 70%)`,
            }}
          />

          {/* Image */}
          <div className="relative h-56 overflow-hidden">
            <img
              src={product.image}
              alt={content?.title || ''}
              className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-white/30 via-transparent to-transparent" />

            <div
              className="absolute top-3 left-3 px-3 py-1 rounded-full text-[9px] font-bold tracking-[0.2em] uppercase"
              style={{ backgroundColor: product.accentBg, color: product.accent }}
            >
              {content?.category}
            </div>

            {/* ID */}
            <div className="absolute top-3 right-3 bg-white/80 backdrop-blur-sm rounded-lg px-2 py-1">
              <span className="text-[9px] font-mono text-ink-muted">{product.id}</span>
            </div>
          </div>

          <div className="relative z-20 p-5">
            <h3 className="font-display text-lg font-bold text-ink tracking-tight mb-2 group-hover:text-blue transition-colors duration-300">
              {content?.title}
            </h3>
            <p className="text-xs font-light leading-relaxed text-ink-muted mb-5">
              {content?.description}
            </p>

            <div
              className="flex items-center justify-between pt-4 border-t"
              style={{ borderColor: `${product.accent}20` }}
            >
              <div className="flex items-center gap-2 text-[10px] font-bold tracking-[0.15em] text-ink-dim uppercase group-hover:text-blue transition-colors duration-300">
                {viewDetailsText}
                <ArrowRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1" />
              </div>
              <div
                className="h-7 w-7 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ backgroundColor: product.accentBg }}
              >
                <ArrowUpRight className="h-3.5 w-3.5" style={{ color: product.accent }} />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export function FeaturedProducts() {
  const { t } = useTranslation();
  const ease = [0.16, 1, 0.3, 1] as const;
  const productsContent = t('featured.products');

  return (
    <section className="bg-white py-10 lg:py-16" id="featured-products">
      <div className="mx-auto max-w-[1600px] px-6 lg:px-12">

        {/* Header */}
        <div className="mb-14 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-blue" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-blue uppercase">{t('featured.tag')}</span>
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink lg:text-5xl">
              {t('featured.heading1')}<br />
              <span className="gradient-text">{t('featured.heading2')}</span>
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 bg-blue-ice border border-blue-pale rounded-full px-6 py-3 text-[11px] font-bold tracking-[0.15em] text-blue uppercase transition-all duration-300 hover:bg-blue hover:text-white hover:shadow-glow-blue-sm"
            >
              {t('featured.allProducts')}
              <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} content={productsContent[index]} viewDetailsText={t('featured.viewDetails')} />
          ))}
        </div>
      </div>
    </section>
  );
}