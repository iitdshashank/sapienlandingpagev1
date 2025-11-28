import { Building2, FlaskConical, TrendingUp } from "lucide-react";

export function Proof() {
  return (
    <section id="proof" className="py-24 px-6 bg-neutral-50 relative overflow-hidden">
      {/* Background sketch elements */}
      <svg className="absolute bottom-0 left-0 w-64 h-64 opacity-5" viewBox="0 0 200 200">
        <circle cx="100" cy="100" r="80" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
        <circle cx="100" cy="100" r="60" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
        <circle cx="100" cy="100" r="40" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
      </svg>

      <div className="max-w-6xl mx-auto relative">
        <div className="mb-16 text-center">
          <div className="inline-block relative mb-4">
            <span className="text-sm tracking-widest text-neutral-500 uppercase">Validation</span>
            <svg className="absolute -top-4 -right-20" width="80" height="40" viewBox="0 0 80 40">
              <path d="M5 35 Q20 5, 40 30 T75 25" stroke="#1a1a1a" strokeWidth="1.5" fill="none" opacity="0.3"/>
            </svg>
          </div>
          <h2 className="text-5xl tracking-tight text-neutral-900 mb-6">
            Real partnerships.<br/>Real pilots.<br/>Real results.
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl mx-auto">
            Not vaporware. Not promises. Production deployments with hospital and pharma partners.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white border-2 border-neutral-200 p-8 relative group hover:border-neutral-400 transition-colors">
            <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <path d="M5 20 L35 20 M20 5 L20 35" stroke="#1a1a1a" strokeWidth="2" opacity="0.2"/>
              </svg>
            </div>
            <div className="p-4 bg-neutral-50 inline-block mb-4">
              <Building2 className="h-8 w-8 text-neutral-900" />
            </div>
            <h3 className="text-2xl text-neutral-900 mb-3">Hospital Partnerships</h3>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Direct partnerships secured with hospitals in Bengaluru & Boston. Access to complete EMR systems.
            </p>
            <div className="pt-4 border-t border-neutral-200">
              <span className="text-sm text-neutral-500">Status: <span className="text-neutral-900">Active</span></span>
            </div>
          </div>

          <div className="bg-white border-2 border-neutral-200 p-8 relative group hover:border-neutral-400 transition-colors">
            <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <circle cx="20" cy="20" r="15" stroke="#1a1a1a" strokeWidth="2" fill="none" opacity="0.2"/>
              </svg>
            </div>
            <div className="p-4 bg-neutral-50 inline-block mb-4">
              <FlaskConical className="h-8 w-8 text-neutral-900" />
            </div>
            <h3 className="text-2xl text-neutral-900 mb-3">Pharma Pilots</h3>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Running production pilots with pharmaceutical companies. Synthetic control arms for active clinical trials.
            </p>
            <div className="pt-4 border-t border-neutral-200">
              <span className="text-sm text-neutral-500">Status: <span className="text-neutral-900">In Progress</span></span>
            </div>
          </div>

          <div className="bg-white border-2 border-neutral-200 p-8 relative group hover:border-neutral-400 transition-colors">
            <div className="absolute -top-3 -right-3 opacity-0 group-hover:opacity-100 transition-opacity">
              <svg width="40" height="40" viewBox="0 0 40 40">
                <rect x="5" y="5" width="30" height="30" stroke="#1a1a1a" strokeWidth="2" fill="none" opacity="0.2"/>
              </svg>
            </div>
            <div className="p-4 bg-neutral-50 inline-block mb-4">
              <TrendingUp className="h-8 w-8 text-neutral-900" />
            </div>
            <h3 className="text-2xl text-neutral-900 mb-3">Valley Backed</h3>
            <p className="text-neutral-600 leading-relaxed mb-4">
              Backed by leading Silicon Valley investors who recognize category-defining deep tech infrastructure.
            </p>
            <div className="pt-4 border-t border-neutral-200">
              <span className="text-sm text-neutral-500">Status: <span className="text-neutral-900">Funded</span></span>
            </div>
          </div>
        </div>

        {/* Technical Validation */}
        <div className="bg-white border-2 border-neutral-200 p-12 relative">
          <svg className="absolute top-4 right-4 opacity-20" width="100" height="100" viewBox="0 0 100 100">
            <path d="M20 80 L20 20 L80 20" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
            <circle cx="30" cy="70" r="3" fill="#1a1a1a"/>
            <circle cx="50" cy="45" r="3" fill="#1a1a1a"/>
            <circle cx="70" cy="30" r="3" fill="#1a1a1a"/>
            <path d="M30 70 Q40 60, 50 45 T70 30" stroke="#1a1a1a" strokeWidth="1.5" fill="none" strokeDasharray="3 3"/>
          </svg>

          <h3 className="text-2xl text-neutral-900 mb-8">What Makes This Breakthrough</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg text-neutral-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">→</span> First-Principles Engineering
              </h4>
              <p className="text-neutral-600 leading-relaxed pl-8">
                Built from ground up with deep biotech and ML expertise. Not incremental improvement—fundamental rethink of synthetic control architecture.
              </p>
            </div>

            <div>
              <h4 className="text-lg text-neutral-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">→</span> Production-Grade ML
              </h4>
              <p className="text-neutral-600 leading-relaxed pl-8">
                ML research background applied to clinical domain. Robust pipelines, validated methodologies, regulatory-aware design from day one.
              </p>
            </div>

            <div>
              <h4 className="text-lg text-neutral-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">→</span> Hospital-Direct Data
              </h4>
              <p className="text-neutral-600 leading-relaxed pl-8">
                Real partnerships unlock hospital-grade EMR data. Complete clinical depth that claims data can't match. What incumbents couldn't build.
              </p>
            </div>

            <div>
              <h4 className="text-lg text-neutral-900 mb-4 flex items-center gap-2">
                <span className="text-2xl">→</span> Regulatory Rigor
              </h4>
              <p className="text-neutral-600 leading-relaxed pl-8">
                Designed for FDA/EMA submission from inception. Complete audit trails, statistical validation, documentation quality that passes regulatory review.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
