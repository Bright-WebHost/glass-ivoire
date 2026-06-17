'use client';

import { useState, useRef } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Shield, Thermometer, Maximize, DoorOpen, LayoutGrid, Construction, ArrowRight, ArrowUpRight, CheckCircle2 } from 'lucide-react';

const products = [
  {
    id: "tempered-glass",
    title: "Tempered & Safety Glass",
    category: "Safety",
    description: "Heat-treated for maximum durability and impact resistance. Essential for balustrades, storefronts, and high-traffic areas.",
    image: "https://images.unsplash.com/photo-1541888078652-5ad26a312015?q=80&w=1600&auto=format&fit=crop",
    icon: Shield,
    accent: "#8B3A8F",
    accentBg: "#F5ECF6",
    features: ["5x stronger than standard", "Safe fragmentation", "High thermal resistance"]
  },
  {
    id: "double-glazing",
    title: "Double Glazing",
    category: "Energy Efficiency",
    description: "Advanced hermetically sealed insulated glass units (IGU). Reduces heat transfer, ensuring optimal indoor climates.",
    image: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=1600&auto=format&fit=crop",
    icon: Thermometer,
    accent: "#4DADD8",
    accentBg: "#EBF8FD",
    features: ["Thermal insulation", "Acoustic noise reduction", "Prevents condensation"]
  },
  {
    id: "facades",
    title: "Façade Glass Panels",
    category: "Exteriors",
    description: "High-performance structural glazing and curtain walls designed to withstand wind loads while creating stunning modern skylines.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1600&auto=format&fit=crop",
    icon: Construction,
    accent: "#A8C93A",
    accentBg: "#F6F9EA",
    features: ["Wind-load certified", "UV and solar control", "Large-format panels"]
  },
  {
    id: "glass-partitions",
    title: "Glass Partitions",
    category: "Interior Spaces",
    description: "Sleek, floor-to-ceiling interior glass walls that define workspaces without blocking natural light. Available in framed or frameless.",
    image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop",
    icon: LayoutGrid,
    accent: "#2A6DB5",
    accentBg: "#E8F2FC",
    features: ["Maximizes daylight", "Seamless integration", "Custom frosting"]
  },
  {
    id: "glass-doors",
    title: "Glass Doors",
    category: "Access",
    description: "Premium glass doors including pivot, sliding, and automated systems engineered for smooth operation and architectural elegance.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=1600&auto=format&fit=crop",
    icon: DoorOpen,
    accent: "#5BAD3E",
    accentBg: "#EEF8EA",
    features: ["Heavy-duty hardware", "Frameless profiles", "High-traffic durability"]
  },
  {
    id: "mirrors",
    title: "Architectural Mirrors",
    category: "Reflectivity",
    description: "Distortion-free, large format mirrors perfect for gyms, lobbies, and luxury residential projects to visually expand spaces.",
    image: "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?q=80&w=1600&auto=format&fit=crop",
    icon: Maximize,
    accent: "#E8D84A",
    accentBg: "#FDFBEA",
    features: ["Crystal clear reflection", "Corrosion-resistant", "Custom edge polishing"]
  }
];

function PremiumProductCard({ product, index }: { product: typeof products[0], index: number }) {
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
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
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
            alt={product.title}
            className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A1128]/80 via-transparent to-transparent" />
          
          <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-3 py-1.5 shadow-sm">
            <span className="h-2 w-2 rounded-full" style={{ backgroundColor: product.accent }} />
            <span className="text-[10px] font-bold tracking-[0.2em] text-ink uppercase">
              {product.category}
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
            {product.title}
          </h3>
          <p className="text-sm font-light leading-relaxed text-ink-muted mb-6 flex-grow">
            {product.description}
          </p>

          {/* Features list */}
          <ul className="mb-8 space-y-2">
            {product.features.map((feature, i) => (
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
            Get a Quote
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function ProductsContent() {
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <div className="min-h-screen bg-surface-1">
      {/* ── HERO SECTION ──────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-[#0D1F3C]">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=3200&auto=format&fit=crop"
            alt="Glass architecture"
            className="h-full w-full object-cover opacity-40 mix-blend-overlay"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0D1F3C]/80 via-[#0D1F3C]/60 to-surface-1" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="max-w-3xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-blue-light/50" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-blue-light uppercase">
                Technical Portfolio
              </span>
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-7xl mb-6">
              Glass categories for <span className="text-white/40">every build.</span>
            </h1>
            <p className="text-lg font-light leading-relaxed text-white/70 max-w-2xl mb-10">
              Choose from our extensive portfolio of glass systems, engineered for safety, thermal performance, and architectural elegance across Côte d'Ivoire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── GRID SECTION ──────────────────────── */}
      <section className="relative z-20 mx-auto max-w-[1600px] px-6 lg:px-12 -mt-10 lg:-mt-20 pb-24 lg:pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <PremiumProductCard key={product.id} product={product} index={index} />
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
              Ready to start your project?
            </h2>
            <p className="text-base font-light leading-relaxed text-ink-muted mb-10">
              Our technical team in Abidjan is ready to assist you with specifications, structural calculations, and custom glass fabrication for your next building.
            </p>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-3 bg-[#2A6DB5] text-white rounded-full px-8 py-4 text-[11px] font-bold tracking-[0.2em] uppercase transition-all duration-300 hover:bg-[#1B4F8A] hover:shadow-glow-blue hover:scale-[1.02]"
            >
              Request a Custom Quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
