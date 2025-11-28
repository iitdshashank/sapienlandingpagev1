import { Database, Cpu, FileCheck, Zap } from "lucide-react";

export function Solution() {
  return (
    <section id="solution" className="py-24 px-6 bg-white relative">
      {/* Technical sketch background */}
      <svg className="absolute top-0 right-0 w-1/3 h-full opacity-5" viewBox="0 0 400 800">
        <path d="M50 50 L350 50 L350 750 L50 750 Z" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
        <circle cx="200" cy="200" r="80" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
        <path d="M100 400 L300 400 M100 450 L280 450 M100 500 L250 500" stroke="#1a1a1a" strokeWidth="1.5"/>
      </svg>

      <div className="max-w-6xl mx-auto relative">
        <div className="mb-16">
          <div className="inline-block relative mb-4">
            <span className="text-sm tracking-widest text-neutral-500 uppercase">The Solution</span>
          </div>
          <h2 className="text-5xl tracking-tight text-neutral-900 max-w-3xl mb-6">
            Human-less clinical trial engine
          </h2>
          <p className="text-xl text-neutral-600 max-w-2xl">
            We solved what billion-dollar incumbents couldn't: regulatory-grade synthetic control arms from hospital EMRs.
          </p>
        </div>

        {/* Technical Architecture */}
        <div className="mb-20">
          <div className="bg-neutral-50 border-2 border-neutral-200 p-12 relative">
            {/* Annotations */}
            <svg className="absolute -top-8 -right-8 w-32 h-32 opacity-30" viewBox="0 0 120 120">
              <path d="M10 60 Q60 10, 110 60" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
              <text x="60" y="50" textAnchor="middle" style={{fontSize: '10px', fontFamily: 'monospace'}} fill="#1a1a1a">proprietary</text>
            </svg>

            <h3 className="text-2xl text-neutral-900 mb-8">Technical Stack</h3>
            
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-white border border-neutral-300 rounded">
                    <Database className="h-6 w-6 text-neutral-900" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg text-neutral-900 mb-2">Hospital-Grade EMR Data</h4>
                    <p className="text-neutral-600 leading-relaxed text-sm">
                      Direct partnerships with hospitals in Bengaluru & Boston. Complete clinical records: labs, imaging, medications, longitudinal outcomes. Not shallow claims data.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white border border-neutral-300 rounded">
                    <Cpu className="h-6 w-6 text-neutral-900" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg text-neutral-900 mb-2">Proprietary ML Processing</h4>
                    <p className="text-neutral-600 leading-relaxed text-sm">
                      Advanced ML infrastructure for cohort matching, confounding adjustment, bias mitigation. Production-grade pipeline built by ML research experts.
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-3 bg-white border border-neutral-300 rounded">
                    <FileCheck className="h-6 w-6 text-neutral-900" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg text-neutral-900 mb-2">Regulatory-Ready Output</h4>
                    <p className="text-neutral-600 leading-relaxed text-sm">
                      Query-able platform outputs FDA/EMA-grade documentation. Complete audit trails, statistical validation, regulatory submission packages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="p-3 bg-white border border-neutral-300 rounded">
                    <Zap className="h-6 w-6 text-neutral-900" />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg text-neutral-900 mb-2">Rapid Deployment</h4>
                    <p className="text-neutral-600 leading-relaxed text-sm">
                      6-week turnaround from query to regulatory documentation. 40% cost reduction. 50% timeline reduction. Actually works.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Hand-drawn flow diagram */}
            <div className="mt-12 pt-8 border-t-2 border-dashed border-neutral-300">
              <svg className="w-full h-24" viewBox="0 0 1000 100" fill="none">
                {/* Step 1 */}
                <rect x="20" y="30" width="180" height="50" stroke="#1a1a1a" strokeWidth="2" fill="white" rx="4"/>
                <text x="110" y="60" textAnchor="middle" style={{fontSize: '14px', fontFamily: 'monospace'}} fill="#1a1a1a">Hospital EMR Data</text>
                
                {/* Arrow */}
                <path d="M210 55 L270 55" stroke="#1a1a1a" strokeWidth="2"/>
                <path d="M270 55 L265 50 M270 55 L265 60" stroke="#1a1a1a" strokeWidth="2"/>
                
                {/* Step 2 */}
                <rect x="280" y="30" width="180" height="50" stroke="#1a1a1a" strokeWidth="2" fill="white" rx="4"/>
                <text x="370" y="60" textAnchor="middle" style={{fontSize: '14px', fontFamily: 'monospace'}} fill="#1a1a1a">ML Engine</text>
                
                {/* Arrow */}
                <path d="M470 55 L530 55" stroke="#1a1a1a" strokeWidth="2"/>
                <path d="M530 55 L525 50 M530 55 L525 60" stroke="#1a1a1a" strokeWidth="2"/>
                
                {/* Step 3 */}
                <rect x="540" y="30" width="180" height="50" stroke="#1a1a1a" strokeWidth="2" fill="white" rx="4"/>
                <text x="630" y="60" textAnchor="middle" style={{fontSize: '14px', fontFamily: 'monospace'}} fill="#1a1a1a">Synthetic Controls</text>
                
                {/* Arrow */}
                <path d="M730 55 L790 55" stroke="#1a1a1a" strokeWidth="2"/>
                <path d="M790 55 L785 50 M790 55 L785 60" stroke="#1a1a1a" strokeWidth="2"/>
                
                {/* Step 4 */}
                <rect x="800" y="30" width="180" height="50" stroke="#1a1a1a" strokeWidth="2" fill="white" rx="4"/>
                <text x="890" y="60" textAnchor="middle" style={{fontSize: '14px', fontFamily: 'monospace'}} fill="#1a1a1a">FDA Documentation</text>
              </svg>
            </div>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-3 gap-8">
          <div className="relative text-center p-8 border-2 border-dashed border-neutral-300">
            <div className="text-6xl text-neutral-900 mb-2">40%</div>
            <div className="text-neutral-600">Cost Reduction</div>
            <svg className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-8 opacity-30" viewBox="0 0 60 30">
              <path d="M0 15 Q30 5, 60 15" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          
          <div className="relative text-center p-8 border-2 border-dashed border-neutral-300">
            <div className="text-6xl text-neutral-900 mb-2">50%</div>
            <div className="text-neutral-600">Timeline Reduction</div>
            <svg className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-8 opacity-30" viewBox="0 0 60 30">
              <path d="M0 15 Q30 5, 60 15" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
            </svg>
          </div>
          
          <div className="relative text-center p-8 border-2 border-dashed border-neutral-300">
            <div className="text-6xl text-neutral-900 mb-2">6wk</div>
            <div className="text-neutral-600">Deployment Time</div>
            <svg className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-16 h-8 opacity-30" viewBox="0 0 60 30">
              <path d="M0 15 Q30 5, 60 15" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}
