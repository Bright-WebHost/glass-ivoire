'use client';

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { siteConfig } from "@/lib/siteConfig";
import { useTranslation } from "@/lib/i18n";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { t, language, setLanguage } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === 'fr' ? 'en' : 'fr');
  };

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md border-blue-pale shadow-sm py-3" 
            : "bg-transparent border-white/20 py-5"
        }`}
      >
        <div className="mx-auto flex w-full max-w-[1600px] items-center justify-between px-6 lg:px-12">
          {/* Logo */}
          <Link href="/" className="relative z-50 flex items-center group" onClick={() => setIsOpen(false)}>
            <Image
              src="/logo.webp"
              alt="Glass Ivoire"
              width={64}
              height={64}
              className={`h-12 w-12 sm:h-14 sm:w-14 rounded-full object-cover transition-all duration-300 group-hover:scale-105`}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-2 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`relative px-4 py-2 text-[11px] font-bold tracking-[0.15em] uppercase transition-colors duration-300 group ${
                  isScrolled ? "text-ink-body hover:text-blue" : "text-white/90 hover:text-white"
                }`}
              >
                {t(`nav.${item.label.toLowerCase()}`)}
                <span className={`absolute bottom-0 left-0 right-0 h-0.5 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-center ${
                  isScrolled ? "bg-blue" : "bg-white"
                }`} />
              </Link>
            ))}
          </nav>

          {/* CTA + Phone + Toggle */}
          <div className="flex items-center gap-3">
            {/* Phone number (desktop only) */}
            <a
              href={siteConfig.whatsapp}
              className={`hidden xl:flex items-center gap-2 text-[11px] font-semibold transition-colors duration-200 ${
                isScrolled ? "text-ink-muted hover:text-blue" : "text-white/70 hover:text-white"
              }`}
            >
              <Phone className="h-3 w-3" />
              {siteConfig.phone}
            </a>

            <Link
              href="/contact"
              className={`hidden lg:inline-flex items-center gap-2 px-6 py-2.5 text-[11px] font-bold tracking-[0.15em] uppercase rounded-full transition-all duration-300 ${
                isScrolled
                  ? "bg-blue text-white hover:bg-blue-dark shadow-glow-blue-sm"
                  : "bg-white text-ink hover:bg-white/90"
              }`}
            >
              {t('nav.startProject')}
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>

            <div className="flex items-center gap-2 text-[12px] font-bold tracking-widest uppercase">
              <button
                onClick={() => setLanguage('en')}
                className={`transition-colors ${language === 'en' ? (isScrolled ? 'text-ink' : 'text-white') : (isScrolled ? 'text-slate-400 hover:text-ink' : 'text-white/50 hover:text-white')}`}
              >
                EN
              </button>
              <span className={`font-normal ${isScrolled ? 'text-slate-300' : 'text-white/30'}`}>|</span>
              <button
                onClick={() => setLanguage('fr')}
                className={`transition-colors ${language === 'fr' ? (isScrolled ? 'text-ink' : 'text-white') : (isScrolled ? 'text-slate-400 hover:text-ink' : 'text-white/50 hover:text-white')}`}
              >
                FR
              </button>
            </div>

            <button
              type="button"
              id="mobile-menu-toggle"
              onClick={() => setIsOpen(!isOpen)}
              className={`relative z-50 flex h-10 w-10 items-center justify-center rounded-xl transition-all duration-200 lg:hidden ${
                isScrolled || isOpen ? "bg-surface-2 text-ink hover:text-blue" : "bg-white/10 text-white backdrop-blur-md border border-white/20"
              }`}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div key="close" initial={{ opacity: 0, rotate: -90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                    <X size={20} strokeWidth={1.5} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ opacity: 0, rotate: 90 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }}>
                    <Menu size={20} strokeWidth={1.5} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            animate={{ opacity: 1, clipPath: "inset(0 0 0% 0)" }}
            exit={{ opacity: 0, clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 flex flex-col bg-white/98 backdrop-blur-2xl px-6 pt-28 pb-12 lg:hidden"
          >
            {/* Decorative colored dots from logo */}
            <div className="absolute top-32 right-8 flex gap-2 pointer-events-none">
              {["#2A6DB5","#4DADD8","#5BAD3E","#A8C93A","#8B3A8F","#E8D84A"].map((c, i) => (
                <div key={i} className="h-3 w-3 rounded-full opacity-30 animate-float-slow" style={{ backgroundColor: c, animationDelay: `${i * 0.3}s` }} />
              ))}
            </div>

            <nav className="relative flex flex-col gap-0">
              {navItems.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.08 + i * 0.06, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="border-b border-blue-pale"
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex w-full items-center justify-between py-5 text-2xl font-display font-bold tracking-tight text-ink hover:text-blue transition-colors"
                  >
                    <span>{t(`nav.${item.label.toLowerCase()}`)}</span>
                    <span className="text-xs font-sans font-normal text-ink-dim">0{i + 1}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
              className="relative mt-auto"
            >
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex w-full items-center justify-between bg-blue px-8 py-5 text-sm font-bold tracking-widest text-white uppercase rounded-2xl hover:bg-blue-dark transition-all duration-300 glow-blue"
              >
                {t('nav.startYourProject')}
                <ArrowUpRight className="h-5 w-5" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}