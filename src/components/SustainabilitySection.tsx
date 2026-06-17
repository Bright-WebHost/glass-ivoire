'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowUpRight, Wind, Recycle, Leaf } from 'lucide-react';

const stats = [
  { icon: Wind, value: "0.6", unit: "Uf", label: "Thermal Efficiency", color: "#2A6DB5", bg: "#E8F2FC" },
  { icon: Recycle, value: "75", unit: "%", label: "Recycled Alloys", color: "#5BAD3E", bg: "#EEF8EA" },
  { icon: Leaf, value: "−40", unit: "%", label: "Carbon vs Standard", color: "#4DADD8", bg: "#EBF8FD" },
];

export function SustainabilitySection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const ease = [0.16, 1, 0.3, 1] as const;

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const bgY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0px", "-30px"]);

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-surface-2 py-10 lg:py-16"
      id="sustainability"
    >
      {/* Decorative circles */}
      <div className="absolute -top-32 -right-32 w-96 h-96 rounded-full bg-blue/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-96 h-96 rounded-full bg-cyan/5 blur-3xl pointer-events-none" />

      {/* Animated arch grid background */}
      <div className="absolute inset-0 arch-grid opacity-60 pointer-events-none" />

      <div className="relative z-10 mx-auto w-full max-w-[1600px] px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* LEFT: Image with glass overlay card */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative rounded-3xl overflow-hidden shadow-card-hover">
              <motion.div style={{ y: bgY }}>
                <img
                  src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?q=80&w=1600&auto=format&fit=crop"
                  alt="Sustainable glass architecture"
                  className="h-[520px] w-full object-cover"
                />
              </motion.div>
              {/* Blue tint overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-blue-dark/40 via-transparent to-transparent" />
            </div>

            {/* Floating glass panel stat */}
            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3, ease }}
              className="absolute -bottom-6 -right-6 lg:-right-10 glass-white rounded-2xl p-5 shadow-card-hover min-w-[160px]"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="h-8 w-8 rounded-lg bg-blue-ice flex items-center justify-center">
                  <Leaf className="h-4 w-4 text-blue" strokeWidth={1.5} />
                </div>
                <span className="text-[9px] font-bold tracking-[0.15em] text-ink-muted uppercase">Certified</span>
              </div>
              <p className="text-sm font-bold text-ink">ISO 14001</p>
              <p className="text-[10px] text-ink-muted">Environmental Standard</p>
            </motion.div>

            {/* Floating colored glass panel decorations */}
            {[
              { color: "#2A6DB5", top: "-16px", left: "-16px", size: 40, rotate: -15 },
              { color: "#A8C93A", top: "40%", left: "-24px", size: 28, rotate: 20 },
              { color: "#8B3A8F", top: "-20px", right: "20%", size: 32, rotate: 10 },
            ].map((p, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.35, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.15, ease }}
                className="absolute rounded-lg animate-float-slow"
                style={{
                  backgroundColor: p.color,
                  width: p.size,
                  height: p.size,
                  top: p.top,
                  left: (p as { left?: string }).left,
                  right: (p as { right?: string }).right,
                  rotate: p.rotate,
                }}
              />
            ))}
          </motion.div>

          {/* RIGHT: Text & Stats */}
          <motion.div style={{ y: textY }}>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="h-px w-8 bg-blue" />
                <span className="text-[10px] font-bold tracking-[0.3em] text-blue uppercase">Environmental Impact</span>
              </div>

              <h2 className="font-display text-4xl font-bold leading-[1.0] tracking-tight text-ink mb-5 lg:text-5xl">
                Decarbonizing<br />
                <span className="gradient-text">Architecture.</span>
              </h2>

              <p className="text-base font-light leading-relaxed text-ink-muted mb-8 max-w-lg">
                Our structural systems go beyond standard compliance — engineered to integrate circular economy principles, maximize thermal efficiency, and utilize up to 75% recycled aluminum.
              </p>

              <Link
                href="/sustainability"
                className="group inline-flex items-center gap-3 bg-blue text-white rounded-full px-7 py-3.5 text-[11px] font-bold tracking-[0.15em] uppercase transition-all duration-300 hover:bg-blue-dark hover:shadow-glow-blue hover:scale-[1.02] mb-10"
              >
                Our Eco-Approach
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-3">
              {stats.map((stat, i) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.15 + i * 0.1, ease }}
                    className="rounded-2xl bg-white border border-blue-pale p-5 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1 group"
                  >
                    <div
                      className="inline-flex h-9 w-9 items-center justify-center rounded-xl mb-3 transition-all duration-300 group-hover:scale-110"
                      style={{ backgroundColor: stat.bg }}
                    >
                      <Icon strokeWidth={1.5} className="h-4 w-4" style={{ color: stat.color }} />
                    </div>
                    <p className="font-display text-2xl font-bold text-ink" style={{ color: stat.color }}>
                      {stat.value}<span className="text-sm">{stat.unit}</span>
                    </p>
                    <p className="text-[9px] font-bold tracking-[0.15em] text-ink-muted uppercase mt-1">
                      {stat.label}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}