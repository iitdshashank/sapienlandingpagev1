import { GraduationCap, Code2 } from "lucide-react";

export function Team() {
  return (
    <section id="team" className="py-24 px-6 bg-white relative">
      {/* Background technical sketch */}
      <svg className="absolute top-12 right-12 w-48 h-48 opacity-5" viewBox="0 0 200 200">
        <rect x="20" y="20" width="160" height="160" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
        <path d="M20 100 L180 100 M100 20 L100 180" stroke="#1a1a1a" strokeWidth="1"/>
        <circle cx="100" cy="100" r="40" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
      </svg>

      <div className="max-w-5xl mx-auto relative">
        <div className="mb-16 text-center">
          <div className="inline-block relative mb-4">
            <span className="text-sm tracking-widest text-neutral-500 uppercase">Technical Team</span>
          </div>
          <h2 className="text-5xl tracking-tight text-neutral-900 mb-6">
            Deep expertise in biotech and ML
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Complementary technical founders building category-defining infrastructure. Not learning—executing.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Shashank */}
          <div className="relative group">
            <div className="bg-neutral-50 border-2 border-neutral-200 p-10 h-full relative group-hover:border-neutral-400 transition-colors">
              {/* Hand-drawn corner accent */}
              <svg className="absolute -top-4 -left-4 w-16 h-16 opacity-30" viewBox="0 0 60 60">
                <path d="M10 10 L50 10 M10 10 L10 50" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
              </svg>

              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white border border-neutral-300">
                    <GraduationCap className="h-6 w-6 text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-neutral-900">Shashank</h3>
                    <p className="text-neutral-600">CEO & Co-Founder</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm tracking-wider text-neutral-500 uppercase mb-2">Background</h4>
                  <p className="text-neutral-900">IIT Delhi, Biotech</p>
                </div>

                <div>
                  <h4 className="text-sm tracking-wider text-neutral-500 uppercase mb-2">Expertise</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    Deep domain knowledge in clinical trial design, regulatory pathways, and pharmaceutical development. Understands biotech fundamentals required to build regulatory-grade infrastructure.
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-300">
                  <p className="text-sm text-neutral-600 italic">
                    "Clinical trial infrastructure at pharma-grade rigor"
                  </p>
                </div>
              </div>

              {/* Sketch accent */}
              <svg className="absolute -bottom-3 -right-3 w-20 h-20 opacity-20" viewBox="0 0 80 80">
                <circle cx="40" cy="40" r="30" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
                <path d="M40 10 L40 70 M10 40 L70 40" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 3"/>
              </svg>
            </div>
          </div>

          {/* Aakash */}
          <div className="relative group">
            <div className="bg-neutral-50 border-2 border-neutral-200 p-10 h-full relative group-hover:border-neutral-400 transition-colors">
              {/* Hand-drawn corner accent */}
              <svg className="absolute -top-4 -left-4 w-16 h-16 opacity-30" viewBox="0 0 60 60">
                <path d="M10 10 L50 10 M10 10 L10 50" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
              </svg>

              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-white border border-neutral-300">
                    <Code2 className="h-6 w-6 text-neutral-900" />
                  </div>
                  <div>
                    <h3 className="text-2xl text-neutral-900">Aakash</h3>
                    <p className="text-neutral-600">CTO & Co-Founder</p>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm tracking-wider text-neutral-500 uppercase mb-2">Background</h4>
                  <p className="text-neutral-900">BITS Pilani, ML Research</p>
                </div>

                <div>
                  <h4 className="text-sm tracking-wider text-neutral-500 uppercase mb-2">Expertise</h4>
                  <p className="text-neutral-600 leading-relaxed">
                    Production-grade ML infrastructure design and deployment. Advanced research background applied to building robust, scalable systems for clinical data processing.
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-300">
                  <p className="text-sm text-neutral-600 italic">
                    "ML research expertise at production scale"
                  </p>
                </div>
              </div>

              {/* Sketch accent */}
              <svg className="absolute -bottom-3 -right-3 w-20 h-20 opacity-20" viewBox="0 0 80 80">
                <rect x="10" y="10" width="60" height="60" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
                <path d="M10 40 L70 40 M40 10 L40 70" stroke="#1a1a1a" strokeWidth="1" strokeDasharray="3 3"/>
              </svg>
            </div>
          </div>
        </div>

        {/* Team Philosophy */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-neutral-900 text-white px-8 py-6 relative">
            <svg className="absolute -top-2 -left-2 w-full h-full" viewBox="0 0 400 100">
              <rect x="0" y="0" width="400" height="100" stroke="#1a1a1a" strokeWidth="3" fill="none" strokeDasharray="8 4"/>
            </svg>
            <p className="text-lg relative z-10">
              Complementary expertise. First-principles thinking.<br/>
              Building what billion-dollar incumbents couldn't.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
