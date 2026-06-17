'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, History, Wrench, Leaf } from 'lucide-react';

const features = [
  {
    icon: History,
    title: "10+ Years",
    subtitle: "of Fabrication",
    description: "A decade of mastering aluminum extrusion, precision glass cutting, and site-specific project delivery in Abidjan.",
    color: "#2A6DB5",
    bg: "#E8F2FC",
    number: "01",
  },
  {
    icon: Wrench,
    title: "In-House",
    subtitle: "Quality Control",
    description: "Our dedicated workshop ensures local fabrication meets rigorous international tolerances before site deployment.",
    color: "#4DADD8",
    bg: "#EBF8FD",
    number: "02",
  },
  {
    icon: ShieldCheck,
    title: "ISO-Certified",
    subtitle: "Systems",
    description: "All our glazing and aluminum assemblies adhere to global safety standards for wind-load and impact resistance.",
    color: "#5BAD3E",
    bg: "#EEF8EA",
    number: "03",
  },
  {
    icon: Leaf,
    title: "Eco-Conscious",
    subtitle: "Supply Chain",
    description: "We prioritize low-carbon aluminum alloys and high-thermal-efficiency glass to support sustainable building certifications.",
    color: "#8B3A8F",
    bg: "#F5ECF6",
    number: "04",
  }
];

function FeatureCard({ feature, index }: { feature: typeof features[0]; index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [glowPos, setGlowPos] = useState({ x: 50, y: 50 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = feature.icon;

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
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="relative overflow-hidden rounded-2xl bg-white border border-blue-pale p-8 lg:p-9 shadow-card transition-all duration-500 hover:shadow-card-hover hover:-translate-y-1 group"
    >
      {/* Cursor-tracking glow */}
      <div
        className="absolute inset-0 z-0 rounded-2xl pointer-events-none transition-opacity duration-500"
        style={{
          opacity: isHovered ? 1 : 0,
          background: `radial-gradient(circle 180px at ${glowPos.x}% ${glowPos.y}%, ${feature.color}12, transparent 70%)`,
        }}
      />

      {/* Top accent line */}
      <div
        className="absolute top-0 left-6 right-6 h-px transition-all duration-500"
        style={{
          background: `linear-gradient(90deg, transparent, ${feature.color}${isHovered ? 'ff' : '40'}, transparent)`,
        }}
      />

      <div className="relative z-10">
        {/* Number */}
        <span className="text-[9px] font-mono tracking-widest mb-5 block" style={{ color: `${feature.color}60` }}>
          {feature.number}
        </span>

        {/* Icon */}
        <div
          className="mb-7 inline-flex h-14 w-14 items-center justify-center rounded-2xl transition-all duration-500 group-hover:scale-110"
          style={{
            backgroundColor: isHovered ? feature.color : feature.bg,
            color: isHovered ? 'white' : feature.color,
          }}
        >
          <Icon className="h-6 w-6" strokeWidth={1.5} />
        </div>

        {/* Text */}
        <h3 className="font-display text-2xl font-bold text-ink tracking-tight leading-none mb-0.5 group-hover:text-blue transition-colors duration-300" style={isHovered ? { color: feature.color } : {}}>
          {feature.title}
        </h3>
        <h4 className="font-display text-2xl font-light text-ink-muted tracking-tight mb-4">
          {feature.subtitle}
        </h4>
        <p className="text-sm font-light leading-relaxed text-ink-muted">
          {feature.description}
        </p>
      </div>
    </motion.div>
  );
}

export function TrustSection() {
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <section className="bg-surface-1 py-10 lg:py-16" id="trust">
      {/* Top wavy divider */}
      <div className="divider-blue mb-0" />

      <div className="mx-auto max-w-[1600px] px-6 lg:px-12 pt-10">

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
              <span className="text-[10px] font-bold tracking-[0.3em] text-blue uppercase">Quality Assurance</span>
            </div>
            <h2 className="font-display text-4xl font-bold leading-[1.05] tracking-tight text-ink lg:text-5xl">
              We take care of<br />
              <span className="gradient-text-multi">our customers.</span>
            </h2>
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="flex gap-8"
          >
            {[
              { num: "200+", label: "Projects" },
              { num: "10+", label: "Years" },
              { num: "ISO", label: "Certified" },
            ].map((s, i) => (
              <div key={i} className="text-center">
                <p className="font-display text-3xl font-bold text-blue">{s.num}</p>
                <p className="text-[10px] font-bold tracking-[0.15em] text-ink-muted uppercase">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <FeatureCard key={i} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}