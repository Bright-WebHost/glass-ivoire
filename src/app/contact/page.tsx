import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Contact | Glass Ivoire",
  description: "Contact Glass Ivoire in Abidjan for glass manufacturing and distribution projects.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-neutral-bg text-slate-900">
      <Navbar />
      <main className="mx-auto max-w-7xl px-5 py-16 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.95fr_0.85fr] lg:items-start">
          <div className="space-y-6">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-accent-slate">Get in touch</p>
            <h1 className="text-4xl font-semibold tracking-tight text-primary-dark sm:text-5xl">
              Contact our team in Abidjan.
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-700">
              Reach out for consultations, technical support, and glass solutions tailored to construction, housing, and architectural projects across Côte d&apos;Ivoire.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-[1.5rem] bg-white p-6 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-teal">Address</p>
                <p className="mt-3 text-slate-700">{siteConfig.address}</p>
              </div>
              <div className="rounded-[1.5rem] bg-white p-6 shadow-soft">
                <p className="text-sm font-semibold uppercase tracking-[0.28em] text-accent-teal">Phone</p>
                <a href={`tel:${siteConfig.phone}`} className="mt-3 block text-slate-700 hover:text-primary">
                  {siteConfig.phone}
                </a>
                <a href={siteConfig.whatsapp} className="mt-3 block text-primary hover:underline">
                  Message on WhatsApp
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="overflow-hidden rounded-[1.75rem] border border-slate-200 bg-white shadow-soft">
              <iframe
                src={siteConfig.googleMapSrc}
                className="h-80 w-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                aria-label="Glass Ivoire location map"
              />
            </div>
            <ContactForm />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
