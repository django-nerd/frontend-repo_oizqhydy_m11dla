import { motion } from 'framer-motion';

const primary = '#ff5757';

export default function CTA() {
  return (
    <section id="enroll" className="relative bg-slate-950 border-t border-white/10">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 py-16 text-center">
        <motion.h3 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-3xl sm:text-4xl font-bold text-white">
          Start building an unforgettable brand now
        </motion.h3>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">
          Enroll today and get the playbooks, templates, and community support to own your local market with integrity and impact.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#" className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-[rgba(255,87,87,0.35)] hover:shadow-[rgba(255,87,87,0.5)] transition"
             style={{ backgroundColor: primary }}>
            Enroll Now
          </a>
          <a href="#modules" className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold border border-white/20 text-white/90 hover:bg-white/10 transition">
            See Curriculum
          </a>
        </div>

        <div className="mt-8 text-xs text-white/50">
          14-day money-back guarantee • Lifetime access • Updates included
        </div>
      </div>
    </section>
  );
}
