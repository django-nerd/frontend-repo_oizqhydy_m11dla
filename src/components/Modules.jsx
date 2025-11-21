import { motion } from 'framer-motion';

const primary = '#ff5757';

const modules = [
  {
    n: '01',
    title: 'Foundations & Mindset',
    points: ['Offer architecture', 'Category design basics', 'KPIs that matter'],
  },
  {
    n: '02',
    title: 'Local Dominance Engine',
    points: ['Google Business Profile + SEO', 'Reviews flywheel', 'Referral partnerships'],
  },
  {
    n: '03',
    title: 'Paid Media With Principles',
    points: ['Meta + YouTube ads', 'Creative sprints', 'Budget rules'],
  },
  {
    n: '04',
    title: 'Content That Compounds',
    points: ['Short-form system', 'Community hooks', 'Distribution'],
  },
  {
    n: '05',
    title: 'Conversion & Operations',
    points: ['Funnels that serve', 'Front-desk scripting', 'Show-up rate boosters'],
  },
  {
    n: '06',
    title: 'Brand Moat & Scaling',
    points: ['PR moments', 'Ambassador program', 'Owning a story'],
  },
];

export default function Modules() {
  return (
    <section id="modules" className="relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 py-20">
        <div className="max-w-2xl mb-10">
          <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
            className="text-3xl sm:text-4xl font-bold text-white">
            The 6-module blueprint
          </motion.h2>
          <p className="mt-3 text-white/70">Every lesson is actionable, ethical, and built for busy clinic owners.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {modules.map((m, i) => (
            <motion.div key={m.n} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.04 }}
              className="relative rounded-2xl border border-white/10 bg-slate-900 p-6 hover:border-white/20 transition">
              <div className="absolute inset-0 rounded-2xl pointer-events-none" style={{ boxShadow: `inset 0 1px 0 rgba(255,255,255,0.06)` }} />
              <div className="text-sm font-mono tracking-widest text-white/60">Module {m.n}</div>
              <h3 className="mt-2 text-xl font-semibold text-white">{m.title}</h3>
              <ul className="mt-4 space-y-2 text-white/70">
                {m.points.map((p) => (
                  <li key={p} className="flex items-start gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full" style={{ background: primary }} />
                    <span>{p}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
