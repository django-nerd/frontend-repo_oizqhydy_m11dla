import Hero from './components/Hero';
import Features from './components/Features';
import Modules from './components/Modules';
import CTA from './components/CTA';

function App() {
  return (
    <div className="min-h-screen bg-slate-950">
      {/* Top nav */}
      <header className="fixed top-0 inset-x-0 z-50">
        <div className="mx-auto max-w-7xl px-6 sm:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded-lg" style={{ background: '#ff5757' }} />
            <span className="text-white font-semibold tracking-tight">Chiropractic Marketing Manifesto</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-white/80">
            <a href="#modules" className="hover:text-white">Modules</a>
            <a href="#enroll" className="hover:text-white">Enroll</a>
          </nav>
        </div>
      </header>

      <main className="pt-16">
        <Hero />
        <Features />
        <Modules />
        <CTA />
      </main>

      <footer className="border-t border-white/10 bg-slate-950">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 py-10 text-white/60 text-sm flex flex-col sm:flex-row gap-2 items-center justify-between">
          <div>© {new Date().getFullYear()} Chiropractic Marketing Manifesto</div>
          <div className="flex items-center gap-4">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
