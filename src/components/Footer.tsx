import Link from 'next/link';
import Image from 'next/image';
import { siteConfig } from '@/lib/siteConfig';
import { ArrowUpRight, MapPin, Phone } from 'lucide-react';

const navLinks = [
  { href: '/about', label: 'About Us' },
  { href: '/products', label: 'Products' },
  { href: '/projects', label: 'Projects' },
  { href: '/contact', label: 'Contact' },
];

const productLinks = [
  { href: '/products/windows', label: 'Aluminum Windows' },
  { href: '/products/doors', label: 'Aluminum Doors' },
  { href: '/products/facades', label: 'Facades' },
  { href: '/products/fire-resistant', label: 'Fire-Resistant Systems' },
  { href: '/products/interior-walls', label: 'Interior Walls' },
];

// Glass accent colors from logo
const glassColors = ["#2A6DB5","#4DADD8","#5BAD3E","#A8C93A","#8B3A8F","#E8D84A"];

export function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-16 pb-10"
      style={{ background: "linear-gradient(160deg, #1B4F8A 0%, #2A6DB5 60%, #1E5FA0 100%)" }}
    >
      {/* Floating glass panel decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {glassColors.map((color, i) => (
          <div
            key={i}
            className="absolute rounded-xl opacity-10 animate-float-slow"
            style={{
              backgroundColor: color,
              width: 40 + i * 12,
              height: 40 + i * 12,
              top: `${10 + i * 12}%`,
              right: `${2 + i * 8}%`,
              rotate: `${-20 + i * 10}deg`,
              animationDelay: `${i * 0.4}s`,
            }}
          />
        ))}
      </div>

      {/* Arch grid */}
      <div className="absolute inset-0 arch-grid opacity-15 pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-[1600px] px-6 lg:px-12">

        {/* Main grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 mb-16">

          {/* Brand column */}
          <div className="lg:col-span-5">
            <Link href="/" className="inline-block mb-6 group">
              <Image
                src="/logo.png"
                alt="Glass Ivoire"
                width={160}
                height={60}
                className="h-12 w-auto object-contain brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity"
              />
            </Link>
            <p className="text-sm font-light leading-relaxed text-white/60 max-w-sm mb-6">
              Manufacturer and distributor of premium glass & aluminum systems for Abidjan&apos;s construction, housing, and architectural sectors.
            </p>

            {/* Contact info */}
            <div className="flex flex-col gap-3 mb-6">
              <div className="flex items-start gap-2 text-sm text-white/60">
                <MapPin className="h-4 w-4 mt-0.5 text-white/40 flex-shrink-0" />
                <span>{siteConfig.address}</span>
              </div>
              <a href={siteConfig.whatsapp} className="flex items-center gap-2 text-sm text-white/70 hover:text-white transition-colors">
                <Phone className="h-4 w-4 text-white/40" />
                {siteConfig.phone}
              </a>
            </div>

            <a
              href={siteConfig.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-5 py-2.5 text-[11px] font-bold tracking-[0.12em] text-white/80 uppercase transition-all duration-300 hover:bg-white/25 hover:text-white"
            >
              WhatsApp Us
              <ArrowUpRight className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>

          {/* Navigate */}
          <div className="lg:col-span-3">
            <h4 className="text-[9px] font-bold tracking-[0.3em] text-white/40 uppercase mb-5">Navigate</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-light text-white/60 hover:text-white transition-colors duration-200 hover:pl-1 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="lg:col-span-4">
            <h4 className="text-[9px] font-bold tracking-[0.3em] text-white/40 uppercase mb-5">Products</h4>
            <ul className="flex flex-col gap-3">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm font-light text-white/60 hover:text-white transition-colors duration-200">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Color bar — logo glass panel colors */}
        <div className="flex h-1 w-full rounded-full overflow-hidden mb-8">
          {glassColors.map((color, i) => (
            <div key={i} className="flex-1" style={{ backgroundColor: color, opacity: 0.6 }} />
          ))}
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-[10px] uppercase tracking-[0.1em] text-white/35">
          <p>© {new Date().getFullYear()} Glass Ivoire. All rights reserved.</p>
          <div className="flex gap-8">
            <Link href="/privacy" className="hover:text-white/70 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white/70 transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}