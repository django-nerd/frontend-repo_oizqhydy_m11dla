import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

const primary = '#ff5757';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[88vh] overflow-hidden">
      {/* 3D Cover */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Vignette + gradient tint using brand color */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0.25)_60%,rgba(0,0,0,0.65)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-[rgba(0,0,0,0.15)] to-[rgba(0,0,0,0.65)]" />
      <div className="pointer-events-none absolute inset-0" style={{ background:
        `linear-gradient(120deg, rgba(255,87,87,0.18), rgba(0,0,0,0) 30%, rgba(255,87,87,0.12) 60%, rgba(0,0,0,0))` }} />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 pt-28 pb-24 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 text-white">
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, ease: 'easeOut' }}>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs uppercase tracking-widest text-white/90 backdrop-blur">
              <span className="inline-block h-2 w-2 rounded-full" style={{ backgroundColor: primary }} />
              6-module online course
            </span>
            <h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight">
              Chiropractic Marketing Manifesto
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-gray-200/90 max-w-xl">
              Dominate your market with a disruptive, modern playbook that blends unconventional moves with proven fundamentals to generate endless new patients and unmistakable brand presence.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <a href="#modules" className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold text-slate-900 shadow-lg shadow-[rgba(255,87,87,0.35)] hover:shadow-[rgba(255,87,87,0.5)] transition"
                 style={{ backgroundColor: primary }}>
                Explore the Modules
              </a>
              <a href="#enroll" className="inline-flex items-center justify-center rounded-xl px-6 py-3 font-semibold border border-white/20 text-white/90 hover:bg-white/10 transition">
                Get a Preview Lesson
              </a>
            </div>

            <div className="mt-8 grid grid-cols-3 gap-6 max-w-lg text-center text-white/80">
              <div>
                <div className="text-3xl font-black" style={{ color: primary }}>6</div>
                <div className="text-xs tracking-widest uppercase text-white/70">Modules</div>
              </div>
              <div>
                <div className="text-3xl font-black" style={{ color: primary }}>∞</div>
                <div className="text-xs tracking-widest uppercase text-white/70">Patient Flow</div>
              </div>
              <div>
                <div className="text-3xl font-black" style={{ color: primary }}>90d</div>
                <div className="text-xs tracking-widest uppercase text-white/70">Brand Lift</div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2" />
      </div>
    </section>
  );
}
