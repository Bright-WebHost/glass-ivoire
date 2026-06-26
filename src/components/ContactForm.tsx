'use client';

import { motion } from "framer-motion";
import { useTranslation } from "@/lib/i18n";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export function ContactForm() {
  const { t } = useTranslation();
  
  return (
    <motion.form
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="space-y-5 rounded-[1.75rem] border border-slate-200/50 bg-white/60 backdrop-blur-xl p-8 shadow-soft"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          {t('contactForm.name')}
          <input
            type="text"
            placeholder={t('contactForm.namePlaceholder')}
            className="w-full rounded-3xl border border-white/40 bg-white/50 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none backdrop-blur-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          {t('contactForm.email')}
          <input
            type="email"
            placeholder={t('contactForm.emailPlaceholder')}
            className="w-full rounded-3xl border border-white/40 bg-white/50 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none backdrop-blur-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          {t('contactForm.company')} <span className="text-slate-400 font-normal">{t('contactForm.optional')}</span>
          <input
            type="text"
            placeholder={t('contactForm.companyPlaceholder')}
            className="w-full rounded-3xl border border-white/40 bg-white/50 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none backdrop-blur-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          {t('contactForm.projectType')}
          <select className="w-full rounded-3xl border border-white/40 bg-white/50 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none backdrop-blur-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20 appearance-none">
            <option value="">{t('contactForm.projectTypePlaceholder')}</option>
            <option value="residential">{t('contactForm.types.residential')}</option>
            <option value="commercial">{t('contactForm.types.commercial')}</option>
            <option value="industrial">{t('contactForm.types.industrial')}</option>
            <option value="other">{t('contactForm.types.other')}</option>
          </select>
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-slate-700 block">
        {t('contactForm.message')}
        <textarea
          rows={5}
          placeholder={t('contactForm.messagePlaceholder')}
          className="w-full rounded-[1.5rem] border border-white/40 bg-white/50 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none backdrop-blur-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </label>
      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-primary-dark hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
      >
        {t('contactForm.submit')}
      </button>
    </motion.form>
  );
}
