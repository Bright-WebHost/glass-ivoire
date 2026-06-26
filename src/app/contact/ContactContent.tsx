'use client';

// import { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ContactForm } from "@/components/ContactForm";
import { siteConfig } from "@/lib/siteConfig";
import { useTranslation } from "@/lib/i18n";

/* export const metadata: Metadata = {
  title: "Contact | Glass Ivoire",
  description: "Contact Glass Ivoire in Abidjan for glass manufacturing and distribution projects.",
}; */


export function ContactContent() {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-neutral-bg text-slate-900 flex flex-col">
      <Navbar />
      <main className="flex-1 relative overflow-hidden">
        {/* Abstract background shapes for glass effect */}
        <div className="absolute top-0 right-0 -mr-40 -mt-40 h-[600px] w-[600px] rounded-full bg-glass-magenta/20 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-40 -mb-40 h-[600px] w-[600px] rounded-full bg-accent-teal/20 blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <p className="text-sm font-semibold uppercase tracking-[0.32em] text-accent-slate mb-4">{t('contactPage.hero.tag')}</p>
            <h1 className="text-4xl font-semibold tracking-tight text-primary-dark sm:text-6xl mb-6">
              {t('contactPage.hero.title')}
            </h1>
            <p className="text-lg leading-8 text-slate-700">
              {t('contactPage.hero.description')}
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
            {/* Contact Details Side */}
            <div className="lg:col-span-5 space-y-8">
              
              <div className="rounded-[2rem] bg-white/70 backdrop-blur-md border border-white p-8 shadow-soft relative overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                <div className="absolute top-0 right-0 p-6 opacity-10">
                  <svg className="w-16 h-16 text-primary" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zM7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 2.88-2.88 7.19-5 9.88C9.92 16.21 7 11.85 7 9z"/><circle cx="12" cy="9" r="2.5"/></svg>
                </div>
                <h3 className="text-xl font-semibold text-primary-dark mb-4">{t('contactPage.details.headquarters')}</h3>
                <p className="text-slate-700 leading-relaxed mb-6">{siteConfig.address}</p>
                <div className="h-48 rounded-[1.25rem] overflow-hidden">
                  <iframe
                    src={siteConfig.googleMapSrc}
                    className="h-full w-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Glass Ivoire Location"
                  />
                </div>
              </div>

              <div className="grid gap-8 sm:grid-cols-2">
                <div className="rounded-[2rem] bg-white/70 backdrop-blur-md border border-white p-8 shadow-soft hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-primary-dark mb-5">{t('contactPage.details.contact')}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-accent-teal mb-1">{t('contactPage.details.phone')}</p>
                      <a href={`tel:${siteConfig.phone}`} className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">{siteConfig.phone}</a>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-accent-teal mb-1">{t('contactPage.details.general')}</p>
                      <a href={`mailto:${siteConfig.email}`} className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">{siteConfig.email}</a>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-accent-teal mb-1">{t('contactPage.details.sales')}</p>
                      <a href={`mailto:${siteConfig.salesEmail}`} className="text-sm font-medium text-slate-700 hover:text-primary transition-colors">{siteConfig.salesEmail}</a>
                    </div>
                    <div className="pt-2">
                      <a href={siteConfig.whatsapp} className="inline-flex items-center text-sm font-semibold text-[#25D366] hover:text-[#128C7E] transition-colors">
                        <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                        {t('contactPage.details.whatsapp')}
                      </a>
                    </div>
                  </div>
                </div>

                <div className="rounded-[2rem] bg-white/70 backdrop-blur-md border border-white p-8 shadow-soft hover:shadow-lg transition-shadow duration-300">
                  <h3 className="text-lg font-semibold text-primary-dark mb-5">{t('contactPage.hours.title')}</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-accent-slate mb-1">{t('contactPage.hours.weekdays')}</p>
                      <p className="text-sm font-medium text-slate-700">{siteConfig.businessHours.weekdays}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-accent-slate mb-1">{t('contactPage.hours.saturday')}</p>
                      <p className="text-sm font-medium text-slate-700">{siteConfig.businessHours.saturday}</p>
                    </div>
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-widest text-accent-slate mb-1">{t('contactPage.hours.sunday')}</p>
                      <p className="text-sm font-medium text-slate-700">{siteConfig.businessHours.sunday}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Form Side */}
            <div className="lg:col-span-7">
              <div className="relative h-full">
                {/* Decorative element behind form */}
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent-teal/10 rounded-[2rem] transform translate-x-3 translate-y-3 -z-10" />
                <ContactForm />
              </div>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
