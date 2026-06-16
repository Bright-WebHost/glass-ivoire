'use client';

import Link from 'next/link';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { ArrowUpRight, Phone } from 'lucide-react';
import { siteConfig } from '@/lib/siteConfig';
import { useRef, useState } from 'react';

// Magnetic button
function MagneticButton({ href, children, className }: { href: string; children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLAnchorElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 200, damping: 15 });
  const sy = useSpring(y, { stiffness: 200, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };

  return (
    <motion.a
      ref={ref}
      href={href}
      style={{ x: sx, y: sy }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      className={className}
    >
      {children}
    </motion.a>
  );
}

export function FinalCTASection() {
  const ease = [0.16, 1, 0.3, 1] as const;

  // Glass panel colors from logo for decorative elements
  const panels = [
    { color: "#2A6DB5", opacity: 0.12, size: 200, top: "-60px", right: "5%", rotate: -20 },
    { color: "#4DADD8", opacity: 0.08, size: 140, top: "30%",  right: "-30px", rotate: 15 },
    { color: "#5BAD3E", opacity: 0.10, size: 100, bottom: "10%", right: "15%", rotate: -8 },
    { color: "#A8C93A", opacity: 0.07, size: 80,  bottom: "-20px", right: "30%", rotate: 25 },
    { color: "#8B3A8F", opacity: 0.06, size: 70,  top: "10%",  right: "25%", rotate: 35 },
  ];

  return (
    <section className="relative overflow-hidden py-28 lg:py-40" id="cta">
      {/* BLUE GRADIENT BACKGROUND — not black! */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #1B4F8A 0%, #2A6DB5 40%, #3B88D0 70%, #4DADD8 100%)",
        }}
      />

      {/* Arch grid overlay */}
      <div className="absolute inset-0 arch-grid opacity-20 pointer-events-none" />

      {/* Floating glass panel decorations */}
      {panels.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: p.opacity, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 + i * 0.15, ease }}
          animate={{ y: [0, -10, 0] }}
          className="absolute rounded-2xl pointer-events-none"
          style={{
            backgroundColor: p.color,
            width: p.size,
            height: p.size,
            top: (p as { top?: string }).top,
            bottom: (p as { bottom?: string }).bottom,
            right: p.right,
            rotate: p.rotate,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Subtle white glow in center */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-white/8 blur-[80px] rounded-full pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1400px] px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-16">

          {/* Left: Giant headline */}
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="flex items-center gap-4 mb-10"
            >
              <div className="h-px w-8 bg-white/50" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-white/70 uppercase">Start Your Vision</span>
            </motion.div>

            <div className="overflow-hidden mb-3">
              <motion.h2
                initial={{ y: '110%', rotate: 2 }}
                whileInView={{ y: '0%', rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease }}
                className="font-display text-6xl font-bold leading-[0.9] tracking-[-0.03em] text-white md:text-8xl"
              >
                Let&apos;s build
              </motion.h2>
            </div>
            <div className="overflow-hidden mb-10">
              <motion.h2
                initial={{ y: '110%', rotate: 2 }}
                whileInView={{ y: '0%', rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, delay: 0.1, ease }}
                className="font-display text-6xl font-bold leading-[0.9] tracking-[-0.03em] text-white/30 italic md:text-8xl"
              >
                the future.
              </motion.h2>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease }}
              className="text-lg font-light leading-relaxed text-white/65 max-w-md"
            >
              Precision glass engineering for landmark projects. Our technical team is ready to review your specifications and supply your site with excellence.
            </motion.p>
          </div>

          {/* Right: CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.35, ease }}
            className="flex flex-col gap-4"
          >
            {/* Magnetic primary button */}
            <MagneticButton
              href="/contact"
              className="group relative inline-flex items-center justify-between gap-4 bg-white text-blue px-10 py-5 text-sm font-bold tracking-[0.12em] uppercase rounded-2xl transition-all duration-300 hover:bg-blue-pale hover:shadow-xl w-full lg:w-80 overflow-hidden"
            >
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">Get In Touch</span>
              <ArrowUpRight className="relative z-10 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </MagneticButton>

            {/* WhatsApp button */}
            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 border border-white/25 bg-white/10 backdrop-blur-sm rounded-2xl px-8 py-4 text-[11px] font-bold tracking-[0.12em] text-white/80 uppercase transition-all duration-300 hover:bg-white/20 hover:text-white w-full lg:w-80"
            >
              <Phone className="h-4 w-4" />
              {siteConfig.phone}
            </a>

            {/* Trust badges */}
            <div className="flex items-center gap-4 mt-2">
              {["ISO Certified", "10+ Years", "200+ Projects"].map((badge, i) => (
                <div key={i} className="flex items-center gap-1.5">
                  <div className="h-1.5 w-1.5 rounded-full bg-white/40" />
                  <span className="text-[9px] font-bold tracking-widest text-white/50 uppercase">{badge}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Animated gradient divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          style={{ originX: 0 }}
          className="mt-24 h-px w-full bg-gradient-to-r from-white/30 via-white/10 to-transparent"
        />
      </div>
    </section>
  );
}