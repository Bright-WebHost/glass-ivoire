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
      className="space-y-5 rounded-[1.75rem] border border-slate-200/50 bg-white/60 backdrop-blur-xl p-8 shadow-soft"
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Name
          <input
            type="text"
            placeholder="Your name"
            className="w-full rounded-3xl border border-white/40 bg-white/50 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none backdrop-blur-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            placeholder="name@example.com"
            className="w-full rounded-3xl border border-white/40 bg-white/50 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none backdrop-blur-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Company Name <span className="text-slate-400 font-normal">(Optional)</span>
          <input
            type="text"
            placeholder="Your company"
            className="w-full rounded-3xl border border-white/40 bg-white/50 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none backdrop-blur-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20"
          />
        </label>
        <label className="space-y-2 text-sm font-medium text-slate-700">
          Project Type
          <select className="w-full rounded-3xl border border-white/40 bg-white/50 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none backdrop-blur-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20 appearance-none">
            <option value="">Select project type...</option>
            <option value="residential">Residential</option>
            <option value="commercial">Commercial</option>
            <option value="industrial">Industrial</option>
            <option value="other">Other</option>
          </select>
        </label>
      </div>

      <label className="space-y-2 text-sm font-medium text-slate-700 block">
        Message
        <textarea
          rows={5}
          placeholder="Tell us about your project requirements..."
          className="w-full rounded-[1.5rem] border border-white/40 bg-white/50 px-4 py-3 text-sm text-slate-900 shadow-sm outline-none backdrop-blur-sm transition focus:border-primary focus:ring-2 focus:ring-primary/20"
        />
      </label>
      <button
        type="submit"
        className="w-full sm:w-auto inline-flex items-center justify-center rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-white shadow-md transition hover:bg-primary-dark hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:ring-offset-2"
      >
        Send Inquiry
      </button>
    </motion.form>
  );
}
