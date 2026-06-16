import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { siteConfig } from "@/lib/siteConfig";
import { ProductCard } from "@/components/ProductCard";

export const metadata: Metadata = {
  title: "Products | Glass Ivoire",
  description: "Explore glass categories for tempered glass, partitions, doors, mirrors, façades and more.",
};

const accentMap: Record<string, string> = {
  "glass-magenta": "bg-glass-magenta/90",
  "accent-teal": "bg-accent-teal/90",
  "accent-slate": "bg-accent-slate/90",
  "glass-green": "bg-glass-green/90",
  "glass-yellow": "bg-glass-yellow/90",
  "primary-light": "bg-primary-light/90",
  "primary-dark": "bg-primary-dark/90",
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-neutral-bg text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <section className="space-y-8">
          <div className="max-w-3xl space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-accent-slate">Products</p>
            <h1 className="text-4xl font-semibold tracking-tight text-primary-dark sm:text-5xl">
              Glass categories for every build.
            </h1>
            <p className="text-lg leading-8 text-slate-700">
              Choose from our extensive portfolio of glass systems, designed for safety, thermal performance, privacy, and architectural elegance.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {siteConfig.categories.map((category) => (
              <ProductCard
                key={category.title}
                title={category.title}
                label={category.label}
                accentClass={accentMap[category.accent] ?? "bg-primary"}
              />
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
