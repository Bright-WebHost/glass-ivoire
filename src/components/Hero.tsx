'use client';

import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';

// ── Fresh, high-quality glass/architecture images ──────────────────────────
const slides = [
  {
    src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?q=80&w=3200&auto=format&fit=crop",
    headline1: "Glass That",
    headline2: "Transforms",
    headline3: "Spaces.",
    sub: "Structural glazing & aluminum systems engineered for landmark architecture.",
    tag: "Structural Glazing",
  },
  {
    src: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=3200&auto=format&fit=crop",
    headline1: "Precision",
    headline2: "Crafted",
    headline3: "Facades.",
    sub: "Curtain-wall systems certified to international wind-load standards.",
    tag: "Aluminum Facades",
  },
  {
    src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=3200&auto=format&fit=crop",
    headline1: "Luxury",
    headline2: "Meets",
    headline3: "Clarity.",
    sub: "Floor-to-ceiling glazing for high-end residential and commercial projects.",
    tag: "Premium Enclosures",
  },
];

const DURATION = 6000;
const ease = [0.76, 0, 0.24, 1] as const;
const softEase = [0.16, 1, 0.3, 1] as const;

// Logo accent colors for the dot strip
const colors = ["#2A6DB5", "#4DADD8", "#5BAD3E", "#A8C93A", "#8B3A8F", "#E8D84A"];

export function Hero() {
  const [index, setIndex] = useState(0);
  const [prev, setPrev] = useState<number | null>(null);
  const [transitioning, setTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const prevIndexRef = useRef(index);

  const goTo = (next: number) => {
    if (transitioning || next === index) return;
    setPrev(index);
    setIndex(next);
  };

  useEffect(() => {
    if (prevIndexRef.current !== index) {
      setPrev(prevIndexRef.current);
      setTransitioning(true);
      const timer = setTimeout(() => { setPrev(null); setTransitioning(false); }, 1400);
      prevIndexRef.current = index;
      return () => clearTimeout(timer);
    }
  }, [index]);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setIndex(i => (i + 1) % slides.length);
    }, DURATION);
    return () => { if (timerRef.current) clearInterval(timerRef.current); };
  }, []);

  const slide = slides[index];

  return (
    <section className="relative h-screen min-h-[600px] w-full overflow-hidden bg-[#0D1F3C]" id="hero">

      {/* ── BACKGROUND IMAGES ──────────────────────────────────── */}
      <AnimatePresence>
        {prev !== null && (
          <motion.div
            key={`prev-${prev}`}
            className="absolute inset-0 z-10"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.4, ease }}
          >
            <img src={slides[prev].src} alt="" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0D1F3C]/30 via-transparent to-[#0D1F3C]/80" />
            <div className="absolute inset-0 bg-[#0D1F3C]/30" />
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        key={`bg-${index}`}
        className="absolute inset-0 z-0"
        initial={{ scale: 1.08, opacity: 0 }}
        animate={{ scale: 1.02, opacity: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
      >
        <img
          src={slide.src}
          alt={slide.headline1}
          className="h-full w-full object-cover"
        />
      </motion.div>

      {/* ── GRADIENT OVERLAYS ──────────────────────────────────── */}
      {/* Top vignette */}
      <div className="absolute inset-0 z-20 bg-gradient-to-b from-[#0D1F3C]/60 via-transparent via-30% to-[#0D1F3C]/85 pointer-events-none" />
      {/* Side vignettes for depth */}
      <div className="absolute inset-0 z-20 bg-gradient-to-r from-[#0D1F3C]/40 via-transparent to-[#0D1F3C]/40 pointer-events-none" />

      {/* ── FLOATING GLASS PANEL ACCENTS ──────────────────────── */}
      <div className="absolute inset-0 z-20 pointer-events-none hidden lg:block overflow-hidden">
        {/* Top-left corner accent stack */}
        {[
          { color: "#2A6DB5", w: 120, h: 80, top: "8%", left: "-20px", rot: -12, op: 0.2 },
          { color: "#4DADD8", w: 80, h: 60, top: "14%", left: "60px", rot: 5, op: 0.15 },
        ].map((p, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: p.op, x: 0 }}
            transition={{ duration: 1.2, delay: 0.5 + i * 0.2, ease: softEase }}
            className="absolute rounded-xl"
            style={{ backgroundColor: p.color, width: p.w, height: p.h, top: p.top, left: p.left, rotate: `${p.rot}deg`, backdropFilter: 'blur(2px)' }}
          />
        ))}
        {/* Bottom-right accent stack */}
        {[
          { color: "#5BAD3E", w: 100, h: 70, bottom: "12%", right: "-10px", rot: 15, op: 0.2 },
          { color: "#8B3A8F", w: 70, h: 50, bottom: "20%", right: "70px", rot: -8, op: 0.15 },
          { color: "#E8D84A", w: 60, h: 40, bottom: "8%", right: "50px", rot: 25, op: 0.12 },
        ].map((p, i) => (
          <motion.div key={i}
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: p.op, x: 0 }}
            transition={{ duration: 1.2, delay: 0.7 + i * 0.2, ease: softEase }}
            className="absolute rounded-xl animate-float-slow"
            style={{ backgroundColor: p.color, width: p.w, height: p.h, bottom: (p as { bottom?: string }).bottom, right: (p as { right?: string }).right, rotate: `${p.rot}deg` }}
          />
        ))}
      </div>

      {/* ── CENTERED CONTENT ───────────────────────────────────── */}
      <div className="relative z-30 flex h-full flex-col items-center justify-center px-6 text-center">

        {/* Slide tag badge */}
        <motion.div
          key={`tag-${index}`}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: softEase }}
          className="mb-8 flex items-center gap-3"
        >
          <div className="h-px w-10 bg-white/40" />
          <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-md px-4 py-1.5 text-[10px] font-bold tracking-[0.25em] text-white/90 uppercase">
            <span className="h-1.5 w-1.5 rounded-full bg-blue-light" />
            {slide.tag}
          </span>
          <div className="h-px w-10 bg-white/40" />
        </motion.div>

        {/* Main headline — 1 line */}
        <div className="mb-8 overflow-hidden px-4">
          <motion.h1
            key={`h-${index}`}
            initial={{ y: '100%' }}
            animate={{ y: '0%' }}
            transition={{ duration: 1, delay: 0.05, ease }}
            className="font-display font-bold text-[clamp(2rem,5vw,6.5rem)] leading-[1.1] tracking-[-0.04em] flex flex-wrap justify-center gap-x-3 md:gap-x-5"
          >
            <span className="text-white">{slide.headline1}</span>
            <span
              style={{
                background: 'linear-gradient(135deg, #4DADD8 0%, #ffffff 50%, #2A6DB5 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {slide.headline2}
            </span>
            <span className="text-white">{slide.headline3}</span>
          </motion.h1>
        </div>

        {/* Subtitle */}
        <motion.p
          key={`sub-${index}`}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.45, ease: softEase }}
          className="mb-10 max-w-lg text-base font-light leading-relaxed text-white/65"
        >
          {slide.sub}
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: softEase }}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <Link
            href="/projects"
            className="group flex items-center gap-3 bg-white text-blue px-9 py-4 text-[11px] font-bold tracking-[0.2em] uppercase rounded-full transition-all duration-300 hover:bg-blue hover:text-white hover:shadow-glow-blue hover:scale-[1.03]"
          >
            View Our Work
            <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
          <Link
            href="/contact"
            className="group flex items-center gap-3 border border-white/25 bg-white/10 backdrop-blur-sm text-white px-9 py-4 text-[11px] font-bold tracking-[0.2em] uppercase rounded-full transition-all duration-300 hover:bg-white/20"
          >
            Get a Quote
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>
      </div>

      {/* ── BOTTOM BAR ─────────────────────────────────────────── */}
      <div className="absolute bottom-0 left-0 right-0 z-30">
        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: softEase }}
          className="mx-auto max-w-[1600px] px-6 lg:px-12 pb-10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

            {/* Left: stats */}
            <div className="flex items-center gap-8">
              {[
                { value: "200+", label: "Projects" },
                { value: "10+", label: "Years" },
                { value: "12K+", label: "m² Glass" },
              ].map((s, i) => (
                <div key={i} className="text-center sm:text-left">
                  <p className="font-display text-2xl font-bold text-white leading-none">{s.value}</p>
                  <p className="text-[9px] font-bold tracking-[0.2em] text-white/45 uppercase">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Center: slide dots */}
            <div className="flex items-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  id={`hero-dot-${i}`}
                  onClick={() => goTo(i)}
                  aria-label={`Go to slide ${i + 1}`}
                  className="group relative flex items-center justify-center"
                >
                  <span
                    className={`block rounded-full transition-all duration-500 ${i === index
                        ? 'w-8 h-2 bg-white'
                        : 'w-2 h-2 bg-white/30 hover:bg-white/60'
                      }`}
                  />
                  {/* Progress fill on active dot */}
                  {i === index && (
                    <motion.span
                      key={`fill-${index}`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: DURATION / 1000, ease: 'linear' }}
                      style={{ originX: 0 }}
                      className="absolute inset-0 rounded-full bg-blue-light/60"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Right: location + color strip */}
            <div className="flex flex-col items-end gap-2 hidden sm:flex">
              <p className="text-[10px] font-bold tracking-[0.2em] text-white/40 uppercase">
                Abidjan · Côte d'Ivoire
              </p>
              {/* Logo color strip */}
              <div className="flex gap-1.5">
                {colors.map((c, i) => (
                  <div key={i} className="h-1.5 w-4 rounded-full opacity-60" style={{ backgroundColor: c }} />
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ── SCROLL INDICATOR ───────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute left-8 top-1/2 -translate-y-1/2 z-30 hidden lg:flex flex-col items-center gap-3"
      >
        <div className="h-16 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent" />
        <span className="text-[9px] font-bold tracking-[0.3em] text-white/30 uppercase [writing-mode:vertical-rl] rotate-180">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 5, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="h-4 w-px bg-white/40"
        />
      </motion.div>

      {/* ── SLIDE COUNTER (top right) ──────────────────────────── */}
      <div className="absolute top-24 right-8 z-30 hidden lg:flex items-center gap-3">
        <AnimatePresence mode="wait">
          <motion.span
            key={index}
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            className="font-mono text-4xl font-bold text-white/20 leading-none"
          >
            0{index + 1}
          </motion.span>
        </AnimatePresence>
        <div className="text-white/15 font-mono text-sm">/ 0{slides.length}</div>
      </div>

    </section>
  );
}