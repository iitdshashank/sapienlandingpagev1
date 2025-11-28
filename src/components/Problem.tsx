export function Problem() {
  return (
    <section className="py-24 px-6 bg-neutral-50 relative">
      {/* Sketched corner annotation */}
      <svg className="absolute top-12 left-12 opacity-20" width="120" height="120" viewBox="0 0 120 120" fill="none">
        <path d="M10 10 L110 10 L110 110" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="60" cy="60" r="3" fill="#1a1a1a"/>
      </svg>

      <div className="max-w-5xl mx-auto">
        <div className="mb-16">
          <div className="inline-block relative mb-4">
            <span className="text-sm tracking-widest text-neutral-500 uppercase">The Problem</span>
            <svg className="absolute -right-16 top-0" width="50" height="20" viewBox="0 0 50 20">
              <path d="M0 10 L40 10" stroke="#1a1a1a" strokeWidth="1" opacity="0.3"/>
              <path d="M40 10 L35 7 M40 10 L35 13" stroke="#1a1a1a" strokeWidth="1" opacity="0.3"/>
            </svg>
          </div>
          <h2 className="text-5xl tracking-tight text-neutral-900 max-w-3xl">
            Current RWD platforms fail at the fundamentals
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative group">
            <div className="absolute -top-6 -left-6 opacity-0 group-hover:opacity-30 transition-opacity">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <path d="M10 50 Q30 10, 50 50" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="relative p-8 bg-white border-2 border-neutral-200 h-full">
              <div className="mb-4">
                <span className="text-5xl text-neutral-300">01</span>
              </div>
              <h3 className="text-xl text-neutral-900 mb-3">Inadequate Data</h3>
              <p className="text-neutral-600 leading-relaxed">
                Shallow claims data lacks clinical depth. Missing lab results, imaging, detailed diagnoses. FDA rejects weak external controls.
              </p>
              {/* Hand-drawn underline */}
              <svg className="w-24 h-2 mt-4 opacity-40" viewBox="0 0 100 8">
                <path d="M0 4 Q50 2, 100 4" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -top-6 -left-6 opacity-0 group-hover:opacity-30 transition-opacity">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <circle cx="30" cy="30" r="20" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="relative p-8 bg-white border-2 border-neutral-200 h-full">
              <div className="mb-4">
                <span className="text-5xl text-neutral-300">02</span>
              </div>
              <h3 className="text-xl text-neutral-900 mb-3">Massive Waste</h3>
              <p className="text-neutral-600 leading-relaxed">
                $3M+ per trial. 18+ months timeline. Resources drained on control arms that could fund breakthrough therapies.
              </p>
              <svg className="w-24 h-2 mt-4 opacity-40" viewBox="0 0 100 8">
                <path d="M0 4 Q50 2, 100 4" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -top-6 -left-6 opacity-0 group-hover:opacity-30 transition-opacity">
              <svg width="60" height="60" viewBox="0 0 60 60">
                <rect x="10" y="10" width="40" height="40" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
              </svg>
            </div>
            <div className="relative p-8 bg-white border-2 border-neutral-200 h-full">
              <div className="mb-4">
                <span className="text-5xl text-neutral-300">03</span>
              </div>
              <h3 className="text-xl text-neutral-900 mb-3">Regulatory Risk</h3>
              <p className="text-neutral-600 leading-relaxed">
                Billion-dollar incumbents can't build regulatory-grade synthetic controls. Documentation inadequate. Submissions rejected.
              </p>
              <svg className="w-24 h-2 mt-4 opacity-40" viewBox="0 0 100 8">
                <path d="M0 4 Q50 2, 100 4" stroke="#1a1a1a" strokeWidth="1.5" fill="none"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Hand-drawn annotation */}
        <div className="mt-12 text-center relative">
          <p className="text-neutral-500 italic inline-block relative">
            Industry needs first-principles rethink
            <svg className="absolute -bottom-3 left-0 w-full" height="8" viewBox="0 0 300 8">
              <path d="M0 4 L300 4" stroke="#1a1a1a" strokeWidth="1" opacity="0.2" strokeDasharray="2 2"/>
            </svg>
          </p>
        </div>
      </div>
    </section>
  );
}
