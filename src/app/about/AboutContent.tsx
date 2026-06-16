'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Target, Leaf, Lightbulb, CheckCircle2, Factory, Globe } from 'lucide-react';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { FinalCTASection } from '@/components/FinalCTASection';

const values = [
  {
    icon: Target,
    title: "Precision Engineering",
    description: "Every millimeter matters. We fabricate systems to exacting international tolerances, ensuring perfect fit and flawless performance on site.",
    color: "#2A6DB5",
    bg: "#E8F2FC",
  },
  {
    icon: Leaf,
    title: "Sustainable Innovation",
    description: "Committed to circular economy principles, maximizing thermal efficiency, and utilizing high-recycled-content aluminum alloys.",
    color: "#5BAD3E",
    bg: "#EEF8EA",
  },
  {
    icon: Lightbulb,
    title: "Local Expertise",
    description: "Deep understanding of Abidjan's climate and architectural nuances, delivering global standards with localized insights and rapid support.",
    color: "#4DADD8",
    bg: "#EBF8FD",
  }
];

const stats = [
  { value: "10+", label: "Years Experience" },
  { value: "250+", label: "Projects Completed" },
  { value: "50+", label: "Expert Technicians" },
  { value: "ISO", label: "Quality Certified" },
];

export function AboutContent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: heroScroll } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(heroScroll, [0, 1], ["0%", "40%"]);
  const opacityText = useTransform(heroScroll, [0, 0.8], [1, 0]);
  const yText = useTransform(heroScroll, [0, 1], ["0%", "50%"]);

  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <div className="min-h-screen bg-white text-ink font-sans selection:bg-blue-pale selection:text-blue-dark">
      <Navbar />

      <main>
        {/* ── 1. CINEMATIC HERO ────────────────────────────────────────── */}
        <section ref={heroRef} className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-ink">
          <motion.div style={{ y: yBg }} className="absolute inset-0 z-0">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2800&auto=format&fit=crop"
              alt="Modern corporate glass architecture"
              className="h-full w-full object-cover opacity-60"
            />
            {/* Gradient overlay to blend into the next section */}
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-100 h-full" style={{ background: 'linear-gradient(to top, white 0%, transparent 25%)' }}/>
          </motion.div>

          <motion.div 
            style={{ opacity: opacityText, y: yText }}
            className="relative z-10 flex h-full flex-col items-center justify-center text-center px-6"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease }}
              className="mb-6 flex items-center gap-3"
            >
              <div className="h-px w-10 bg-white/40" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-white/80 uppercase">
                Our Story
              </span>
              <div className="h-px w-10 bg-white/40" />
            </motion.div>

            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1, delay: 0.1, ease }}
                className="font-display font-bold text-white text-[clamp(3rem,8vw,8rem)] leading-[0.9] tracking-[-0.03em]"
              >
                Crafting Light.
              </motion.h1>
            </div>
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: '100%' }}
                animate={{ y: '0%' }}
                transition={{ duration: 1, delay: 0.2, ease }}
                className="font-display font-bold text-[clamp(3rem,8vw,8rem)] leading-[0.9] tracking-[-0.03em] gradient-text"
                style={{
                  background: 'linear-gradient(135deg, #ffffff 0%, #4DADD8 50%, #2A6DB5 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Defining Space.
              </motion.h1>
            </div>
          </motion.div>
        </section>

        {/* ── 2. HERITAGE & VISION (Split Layout) ─────────────────────── */}
        <section className="relative z-20 -mt-10 bg-white pt-20 pb-20 lg:pb-32 lg:pt-32 rounded-t-[3rem] shadow-[0_-20px_40px_rgba(0,0,0,0.05)]">
          {/* Decorative Arch Grid */}
          <div className="absolute inset-0 arch-grid opacity-30 pointer-events-none" />

          <div className="mx-auto max-w-[1600px] px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
              
              {/* Left: Typography */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-blue" />
                  <span className="text-[10px] font-bold tracking-[0.3em] text-blue uppercase">The Glass Ivoire Legacy</span>
                </div>

                <h2 className="font-display text-4xl lg:text-6xl font-bold text-ink leading-[1.05] tracking-tight mb-8">
                  Elevating Abidjan's <br />
                  <span className="text-ink-muted italic font-light">Architectural Horizon.</span>
                </h2>

                <div className="space-y-6 text-lg font-light leading-relaxed text-ink-muted max-w-xl">
                  <p>
                    Glass Ivoire is a premier manufacturer and distributor of high-quality architectural glass and aluminum systems. We serve as the vital link between visionary architectural design and flawless physical execution in Côte d'Ivoire.
                  </p>
                  <p>
                    Our mission is simple yet ambitious: to deliver durable, elegant glazing solutions accompanied by unmatched local service. We blend technical rigor with premium materials, ensuring every facade, partition, and structural enclosure we produce enhances modern design, maximizes safety, and optimizes energy efficiency.
                  </p>
                </div>
              </motion.div>

              {/* Right: Asymmetrical Image Grid */}
              <div className="relative h-[600px] w-full">
                {/* Image 1 - Large */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, ease }}
                  className="absolute top-0 right-0 w-[80%] h-[70%] rounded-3xl overflow-hidden shadow-card-hover"
                >
                  <img src="https://images.unsplash.com/photo-1574958269340-fa927503f3dd?q=80&w=1200&auto=format&fit=crop" alt="Precision glass manufacturing" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-blue/10 mix-blend-multiply" />
                </motion.div>
                
                {/* Image 2 - Small overlapping */}
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.2, ease }}
                  className="absolute bottom-10 left-0 w-[55%] h-[45%] rounded-3xl overflow-hidden shadow-card border-4 border-white"
                >
                  <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=800&auto=format&fit=crop" alt="Finished architectural installation" className="w-full h-full object-cover" />
                </motion.div>

                {/* Floating color accent */}
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, ease }}
                  className="absolute top-1/2 left-[15%] w-24 h-24 bg-blue-light/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-glow-blue animate-float"
                >
                  <span className="text-white font-bold tracking-widest text-[10px] uppercase text-center leading-tight">Since<br/>2014</span>
                </motion.div>
              </div>

            </div>
          </div>
        </section>

        {/* ── 3. CORE VALUES (Glassmorphism Cards) ────────────────────── */}
        <section className="bg-surface-1 py-24 lg:py-32 relative">
          <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-blue-pale to-transparent" />
          
          <div className="mx-auto max-w-[1600px] px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease }}
              className="text-center mb-16"
            >
              <h2 className="font-display text-3xl lg:text-5xl font-bold text-ink mb-4">The Pillars of Our Process</h2>
              <p className="text-ink-muted text-lg max-w-2xl mx-auto font-light">
                What drives our engineering and manufacturing excellence daily.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {values.map((val, i) => {
                const Icon = val.icon;
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: i * 0.15, ease }}
                    className="group relative overflow-hidden rounded-[2rem] bg-white border border-blue-pale p-10 shadow-card hover:shadow-card-hover transition-all duration-500 hover:-translate-y-2"
                  >
                    {/* Hover Glow */}
                    <div 
                      className="absolute top-0 right-0 w-48 h-48 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-[40px] -translate-y-1/2 translate-x-1/4"
                      style={{ backgroundColor: val.color }}
                    />
                    
                    <div 
                      className="h-16 w-16 rounded-2xl flex items-center justify-center mb-8 transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundColor: val.bg }}
                    >
                      <Icon className="h-8 w-8" style={{ color: val.color }} strokeWidth={1.5} />
                    </div>
                    
                    <h3 className="font-display text-2xl font-bold text-ink mb-4 tracking-tight group-hover:text-blue transition-colors">
                      {val.title}
                    </h3>
                    <p className="text-ink-muted leading-relaxed font-light">
                      {val.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── 4. THE MANUFACTURING EDGE (Dark Blue Section) ───────────── */}
        <section className="relative py-24 lg:py-32 overflow-hidden" style={{ background: "linear-gradient(135deg, #1B4F8A 0%, #2A6DB5 100%)" }}>
          {/* Background Elements */}
          <div className="absolute inset-0 arch-grid opacity-20 pointer-events-none" />
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan/20 rounded-full blur-[100px]" />
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-dark/40 rounded-full blur-[100px]" />

          <div className="mx-auto max-w-[1600px] px-6 lg:px-12 relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease }}
                className="text-white"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-8 bg-white/40" />
                  <span className="text-[10px] font-bold tracking-[0.3em] text-white/80 uppercase">Global Standards, Local Facility</span>
                </div>
                <h2 className="font-display text-4xl lg:text-5xl font-bold leading-[1.1] mb-8">
                  State-of-the-Art <br />
                  <span className="text-cyan">Fabrication in Abidjan.</span>
                </h2>
                <p className="text-white/70 text-lg font-light leading-relaxed mb-10 max-w-lg">
                  By maintaining a cutting-edge local workshop, we eliminate long import delays for fabricated components while ensuring every cut, join, and seal meets strict European ISO standards. We don't just assemble; we engineer.
                </p>

                <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                  {stats.map((stat, i) => (
                    <div key={i}>
                      <p className="font-display text-4xl font-bold text-white mb-1">{stat.value}</p>
                      <p className="text-[10px] font-bold tracking-[0.2em] text-white/50 uppercase">{stat.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease }}
                className="relative"
              >
                <div className="relative rounded-[2rem] overflow-hidden border border-white/10 shadow-2xl">
                  <div className="absolute inset-0 bg-blue/20 mix-blend-overlay z-10" />
                  <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop" alt="Factory machinery and glass" className="w-full h-auto object-cover grayscale opacity-90" />
                </div>
                {/* Floating tags */}
                <div className="absolute -bottom-6 -left-6 bg-white text-blue px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 font-bold text-[11px] tracking-widest uppercase">
                  <Factory className="h-4 w-4" /> Local Workshop
                </div>
                <div className="absolute -top-6 -right-6 bg-cyan text-blue-dark px-6 py-4 rounded-2xl shadow-xl flex items-center gap-3 font-bold text-[11px] tracking-widest uppercase">
                  <Globe className="h-4 w-4" /> Global Tech
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* ── 5. FINAL CTA ────────────────────────────────────────────── */}
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
}
