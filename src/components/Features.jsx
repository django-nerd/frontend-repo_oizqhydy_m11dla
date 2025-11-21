import { motion } from 'framer-motion';

const primary = '#ff5757';
const gray = '#2b2f36';

const features = [
  {
    title: 'Demand Generation Flywheel',
    desc: 'Turn attention into appointments with content engines, retargeting, and referral loops that compound week over week.',
  },
  {
    title: 'Category Design for Clinics',
    desc: 'Position your practice as the only choice by shaping a unique category and narrative patients rally behind.',
  },
  {
    title: 'Omni-Channel Mastery',
    desc: 'Own local search, social, email, and community activations with a holistic, measurable strategy.',
  },
  {
    title: 'Creative That Converts',
    desc: 'Frameworks for short-form video, UGC, and offers that balance ethics with effective persuasion.',
  },
];

export default function Features() {
  return (
    <section className="relative bg-slate-950 border-t border-white/10">
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-black/20 via-transparent to-black/40" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="max-w-2xl">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white">
            What you will master
          </motion.h2>
          <p className="mt-3 text-white/70">A disruptive-yet-practical system for predictable growth.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((f, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.05 }}
              className="group relative rounded-2xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6 overflow-hidden">
              <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full blur-3xl opacity-20" style={{ background: primary }} />
              <h3 className="text-xl font-semibold text-white">{f.title}</h3>
              <p className="mt-2 text-white/70">{f.desc}</p>
              <div className="mt-4 inline-flex items-center text-sm font-semibold" style={{ color: primary }}>
                Learn more →
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
