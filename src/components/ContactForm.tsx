'use client';

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const } },
};

export function ContactForm() {
  return (
    <motion.form
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={fadeUp}
      className="space-y-5 rounded-[1.75rem] border border-slate-200 bg-white/90 p-6 shadow-soft"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="space-y-2 text-sm text-slate-700">
          Name
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </label>
        <label className="space-y-2 text-sm text-slate-700">
          Email
          <input
            type="email"
            placeholder="name@example.com"
            className="w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
          />
        </label>
      </div>
      <label className="space-y-2 text-sm text-slate-700 block">
        Message
        <textarea
          rows={5}
          placeholder="Tell us about your project"
          className="w-full rounded-[1.5rem] border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
        />
      </label>
      <button
        type="submit"
        className="inline-flex items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white transition hover:bg-primary-dark"
      >
        Send Message
      </button>
    </motion.form>
  );
}
