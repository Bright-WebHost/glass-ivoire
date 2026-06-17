'use client';

import { motion } from 'framer-motion';
import { ArrowUpRight, MapPin } from 'lucide-react';
import Link from 'next/link';

const projects = [
  {
    id: "skyline-facade",
    title: "Skyline Corporate Tower",
    location: "Plateau, Abidjan",
    description: "A landmark 20-story structural glazing façade, engineered for high wind-load resistance and optimal thermal performance in tropical climates.",
    category: "Commercial Façade",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop",
    span: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
  },
  {
    id: "luxury-villa",
    title: "Villa Riviera",
    location: "Riviera Golf",
    description: "Premium frameless sliding doors and ultra-clear structural balustrades for seamless indoor-outdoor living.",
    category: "Luxury Residential",
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?q=80&w=1200&auto=format&fit=crop",
    span: "col-span-1 lg:col-span-1 row-span-1",
  },
  {
    id: "tech-hub",
    title: "Innovation Hub",
    location: "Cocody",
    description: "Interior floor-to-ceiling acoustic glass partitions maximizing natural light and privacy.",
    category: "Workspace",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=1200&auto=format&fit=crop",
    span: "col-span-1 lg:col-span-1 row-span-1",
  },
  {
    id: "boutique-hotel",
    title: "L'Océan Boutique",
    location: "Assinie",
    description: "Custom tempered glass enclosures and large format mirrors elevating the luxury hospitality experience.",
    category: "Hospitality",
    image: "https://images.unsplash.com/photo-1542314831-c6a4d14d8c85?q=80&w=1600&auto=format&fit=crop",
    span: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1",
  },
  {
    id: "retail-flagship",
    title: "Plateau Flagship",
    location: "Plateau",
    description: "A striking two-story retail glass storefront utilizing jumbo format clear structural glazing.",
    category: "Retail Storefront",
    image: "https://images.unsplash.com/photo-1541888078652-5ad26a312015?q=80&w=1200&auto=format&fit=crop",
    span: "col-span-1 lg:col-span-1 row-span-1",
  }
];

function ProjectBentoCard({ project, index }: { project: typeof projects[0], index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-3xl bg-slate-900 ${project.span}`}
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
      />
      {/* Dark gradient overlay that gets stronger on hover */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent transition-opacity duration-500 group-hover:opacity-95" />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-6 lg:p-8">
        <div className="translate-y-8 transition-transform duration-500 group-hover:translate-y-0">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 backdrop-blur-md px-3 py-1 text-[10px] font-bold tracking-[0.15em] text-white uppercase border border-white/20">
              {project.category}
            </span>
            <span className="inline-flex items-center gap-1.5 text-[10px] font-bold tracking-[0.15em] text-white/70 uppercase">
              <MapPin className="h-3 w-3" />
              {project.location}
            </span>
          </div>
          
          <h3 className="font-display text-2xl lg:text-3xl font-bold text-white tracking-tight mb-3">
            {project.title}
          </h3>
          
          <p className="text-sm font-light leading-relaxed text-white/70 opacity-0 transition-opacity duration-500 delay-100 group-hover:opacity-100 line-clamp-3 md:line-clamp-2">
            {project.description}
          </p>
        </div>

        {/* View Details CTA */}
        <div className="absolute bottom-6 right-6 lg:bottom-8 lg:right-8 opacity-0 translate-x-4 transition-all duration-500 delay-150 group-hover:opacity-100 group-hover:translate-x-0">
          <Link href={`/contact?project=${project.id}`} className="flex h-12 w-12 items-center justify-center rounded-full bg-[#2A6DB5] text-white hover:bg-white hover:text-[#2A6DB5] transition-colors shadow-glow-blue-sm">
            <ArrowUpRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsContent() {
  const ease = [0.16, 1, 0.3, 1] as const;

  return (
    <div className="min-h-screen bg-[#05060A]">
      {/* ── HERO SECTION ──────────────────────── */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=3200&auto=format&fit=crop"
            alt="Glass architecture background"
            className="h-full w-full object-cover opacity-20 mix-blend-overlay grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#05060A]/80 via-[#05060A]/60 to-[#05060A]" />
        </div>

        <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-10 bg-[#4DADD8]/50" />
              <span className="text-[10px] font-bold tracking-[0.3em] text-[#4DADD8] uppercase">
                Featured Work
              </span>
            </div>
            <h1 className="font-display text-5xl font-bold leading-[1.05] tracking-tight text-white lg:text-7xl mb-6">
              Engineering the<br />
              <span className="text-white/40">modern skyline.</span>
            </h1>
            <p className="text-lg font-light leading-relaxed text-white/60 max-w-2xl mb-10">
              Explore our curated portfolio of landmark architectural glazing projects, bespoke luxury housing, and high-performance structural systems across Abidjan and Côte d'Ivoire.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── BENTO GRID SECTION ──────────────────────── */}
      <section className="relative z-20 mx-auto max-w-[1600px] px-6 lg:px-12 pb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-[350px] gap-4 lg:gap-6">
          {projects.map((project, index) => (
            <ProjectBentoCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}
