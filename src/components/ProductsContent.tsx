'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import Image from 'next/image';
import { Shield, Thermometer, Maximize, DoorOpen, LayoutGrid, Construction, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useTranslation } from '@/lib/i18n';

const products = [
  {
    id: "aluminium-windows",
    title: "Aluminium Windows (SOLEAL)",
    category: "Performance",
    description: "High-performance aluminium window systems engineered for architectural elegance, superior thermal insulation, and acoustic performance.",
    image: "/glass-window.jpg",
    icon: LayoutGrid,
    accent: "#2A6DB5",
    accentBg: "#E8F2FC",
    features: ["Hydro CIRCAL aluminium", "High thermal resistance", "Custom powder coating"]
  },
  {
    id: "sliding-systems",
    title: "Aluminium Sliding Systems",
    category: "Elegance",
    description: "Premium sliding systems (ARTLINE) designed for large openings, bringing maximum natural light with minimal visible frames.",
    image: "/glassdoor.jpg",
    icon: DoorOpen,
    accent: "#4DADD8",
    accentBg: "#EBF8FD",
    features: ["Floor-to-ceiling spans", "Smooth operation", "Maximized daylight"]
  },
  {
    id: "facades",
    title: "Façades (TENTAL)",
    category: "Architecture",
    description: "Innovative curtain wall and façade systems for low-carbon buildings. Designed to withstand wind loads while creating stunning modern skylines.",
    image: "/Facades.jpg",
    icon: Construction,
    accent: "#A8C93A",
    accentBg: "#F6F9EA",
    features: ["Wind-load certified", "UV and solar control", "Circular economy focused"]
  },
  {
    id: "bulletproof-glass",
    title: "Bulletproof Glass",
    category: "Security",
    description: "Advanced multi-laminated safety glass designed to withstand ballistic impacts, ensuring maximum security for banks, embassies, and luxury retail.",
    image: "/fire.jpg",
    icon: Shield,
    accent: "#8B3A8F",
    accentBg: "#F5ECF6",
    features: ["Ballistic resistance", "Multi-layered lamination", "Uncompromised clarity"]
  },
  {
    id: "shower-cabins",
    title: "Shower Enclosures",
    category: "Interiors",
    description: "Custom-cut tempered glass shower cabins and screens. Precision-engineered for watertight elegance in luxury residential and hotel projects.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1600&auto=format&fit=crop",
    icon: Maximize,
    accent: "#5BAD3E",
    accentBg: "#EEF8EA",
    features: ["Heavy-duty hardware", "Frameless profiles", "Easy-clean coating"]
  },
  {
    id: "stained-glass",
    title: "Stained Glass (Vitraux)",
    category: "Custom Design",
    description: "Bespoke stained glass and decorative glass art for religious, residential, and commercial projects, combining traditional craftsmanship with modern techniques.",
    image: "/stained-glass.jpg",
    icon: Thermometer,
    accent: "#E8D84A",
    accentBg: "#FDFBEA",
    features: ["Handcrafted designs", "Vibrant colors", "Historical restoration"]
  }
];

function PremiumProductCard({ product, index, content, getQuoteText }: { product: typeof products[0], index: number, content: any, getQuoteText: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = product.icon;

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
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="h-full"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="group relative h-full flex flex-col overflow-hidden rounded-3xl bg-white border border-blue-pale shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1"
      >
        {/* Glow effect */}
        <div
          className="absolute inset-0 z-10 pointer-events-none transition-opacity duration-300"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(circle 200px at ${glowPos.x}% ${glowPos.y}%, ${product.accent}12, transparent 70%)`,
          }}
        />

        {/* Image header */}
        <div className="relative h-64 overflow-hidden shrink-0">
          <img
            src={product.image}
            alt={content?.title || ''}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-transparent" />

          <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-3 py-1.5 shadow-sm">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: product.accent }} />
            <span className="text-[10px] font-bold tracking-[0.2em] text-ink uppercase">
              {content?.category}
            </span>
          </div>

          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-20">
            <div className="flex items-center gap-3">
              <div
                className="flex h-10 w-10 items-center justify-center rounded-xl backdrop-blur-md"
                style={{ backgroundColor: `${product.accent}90`, color: '#fff' }}
              >
                <Icon strokeWidth={1.5} className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        {/* Content body */}
        <div className="relative z-20 flex flex-col flex-grow p-6 lg:p-8">
          <h3 className="font-display text-2xl font-bold text-ink tracking-tight mb-3 group-hover:text-blue transition-colors duration-300">
            {content?.title}
          </h3>
          <p className="text-sm font-light leading-relaxed text-ink-muted mb-6 flex-grow">
            {content?.description}
          </p>

          {/* Features list */}
          <ul className="mb-8 space-y-2">
            {content?.features.map((feature: string, i: number) => (
              <li key={i} className="flex items-start gap-2 text-[11px] font-semibold text-ink-body uppercase tracking-wider">
                <CheckCircle2 className="h-3.5 w-3.5 shrink-0 mt-0.5" style={{ color: product.accent }} />
                {feature}
              </li>
            ))}
          </ul>

          <Link
            href={`/contact?product=${product.id}`}
            className="group/btn inline-flex items-center justify-center gap-2 w-full rounded-xl py-3.5 text-xs font-bold tracking-[0.15em] uppercase transition-all duration-300"
            style={{
              backgroundColor: isHovered ? product.accent : product.accentBg,
              color: isHovered ? '#fff' : product.accent
            }}
          >
            {getQuoteText}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function ProductsContent() {
  const { t } = useTranslation();
  const ease = [0.16, 1, 0.3, 1] as const;
const productsContent = t('productsPage.items');
const reduceMotion = useReducedMotion();
const Container = (reduceMotion ? 'div' : motion.div) as any;

  return (
    <div className="min-h-screen bg-surface-1">
      {/* ── HERO SECTION ──────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0D1F3C]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=1920&auto=format&fit=crop"
            alt="Glass architecture"
            className="h-full w-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1F3C]/80 via-[#0D1F3C]/60 to-surface-1" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-12">
          <Container
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-blue-light/50" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-blue-light uppercase">
                {t('productsPage.hero.tag')}
              </span>
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-7xl mb-6">
              {t('productsPage.hero.title1')} <span className="text-white/40">{t('productsPage.hero.title2')}</span>
            </h1>
            <p className="text-lg font-light leading-relaxed text-white/70 max-w-2xl mb-10">
              {t('productsPage.hero.description')}
            </p>
          </Container>
        </div>
      </section>

      {/* ── GRID SECTION ──────────────────────── */}
      <section className="relative z-20 mx-auto max-w-[1600px] px-6 lg:px-12 -mt-10 lg:-mt-20 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <PremiumProductCard key={product.id} product={product} index={index} content={productsContent[index]} getQuoteText={t('productsPage.card.getQuote')} />
          ))}
        </div>
      </section>

      {/* ── BOTTOM CTA ──────────────────────── */}
      <section className="bg-white py-24 border-t border-blue-pale relative overflow-hidden">
        <div className="absolute inset-0 arch-grid opacity-30 pointer-events-none" />
        <div className="mx-auto max-w-[1600px] px-6 lg:px-12 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="font-display text-4xl font-bold tracking-tight text-ink mb-6 lg:text-5xl">
              {t('productsPage.cta.title')}
            </h2>
            <p className="text-base font-light leading-relaxed text-ink-muted mb-10">
              {t('productsPage.cta.description')}
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-[#2A6DB5] text-white rounded-full px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#1B4F8A] hover:shadow-glow-blue hover:scale-[1.02]"
            >
              {t('productsPage.cta.button')}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
