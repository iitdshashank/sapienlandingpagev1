import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Hand-drawn annotation */}
        <svg className="absolute top-24 right-12 opacity-20" width="200" height="150" viewBox="0 0 200 150" fill="none">
          <path d="M20 20 Q50 10, 80 25 T140 30" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round" fill="none" strokeDasharray="3 3"/>
          <text x="10" y="15" className="text-xs" fill="#1a1a1a" style={{fontSize: '10px', fontFamily: 'monospace'}}>breakthrough</text>
        </svg>

        <div className="max-w-4xl mx-auto text-center relative">
          {/* Main tagline */}
          <div className="mb-6">
            <div className="inline-block relative">
              <h1 className="text-6xl md:text-7xl tracking-tight text-neutral-900 mb-4">
                World's First<br/>
                <span className="relative inline-block">
                  'Human-Less'
                  <svg className="absolute -bottom-2 left-0 w-full" height="8" viewBox="0 0 400 8" preserveAspectRatio="none">
                    <path d="M0 4 Q100 6, 200 4 T400 4" stroke="#1a1a1a" strokeWidth="2" fill="none" opacity="0.3"/>
                  </svg>
                </span>
                <br/>
                Clinical Trial Engine
              </h1>
            </div>
          </div>

          <p className="text-xl text-neutral-600 max-w-2xl mx-auto mb-12 leading-relaxed">
            Hospital-grade EMR data processed through proprietary ML.<br/>
            Regulatory-ready documentation in 6 weeks.<br/>
            Cut trial costs 40%. Cut timelines in half.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="bg-neutral-900 hover:bg-neutral-800 text-white px-8" asChild>
              <a href="https://calendly.com/shashank-8028/quick30" target="_blank" rel="noopener noreferrer">
                Schedule Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button size="lg" variant="outline" className="border-neutral-300" asChild>
              <a href="https://cooperative-freedom-f3c.notion.site/Sapien-Labs-29ed18ac63ce8055b0ecf117bf02d539?pvs=74" target="_blank" rel="noopener noreferrer">
                View Technical Documentation
              </a>
            </Button>
          </div>

          {/* Hand-drawn diagram element */}
          <div className="mt-20 relative">
            <svg className="w-full h-32 opacity-40" viewBox="0 0 800 120" fill="none">
              {/* Hospital node */}
              <rect x="50" y="40" width="80" height="60" stroke="#1a1a1a" strokeWidth="2" fill="none" rx="4"/>
              <text x="90" y="75" textAnchor="middle" className="text-xs" fill="#1a1a1a" style={{fontSize: '12px', fontFamily: 'monospace'}}>EMR</text>
              
              {/* Arrow */}
              <path d="M140 70 L280 70" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="5 5"/>
              <path d="M280 70 L270 65 M280 70 L270 75" stroke="#1a1a1a" strokeWidth="2"/>
              <text x="210" y="60" className="text-xs" fill="#1a1a1a" style={{fontSize: '10px', fontFamily: 'monospace'}}>ML processing</text>
              
              {/* Engine node */}
              <circle cx="350" cy="70" r="40" stroke="#1a1a1a" strokeWidth="2" fill="none"/>
              <text x="350" y="75" textAnchor="middle" className="text-xs" fill="#1a1a1a" style={{fontSize: '12px', fontFamily: 'monospace'}}>Engine</text>
              
              {/* Arrow */}
              <path d="M400 70 L540 70" stroke="#1a1a1a" strokeWidth="2" strokeDasharray="5 5"/>
              <path d="M540 70 L530 65 M540 70 L530 75" stroke="#1a1a1a" strokeWidth="2"/>
              <text x="430" y="60" className="text-xs" fill="#1a1a1a" style={{fontSize: '10px', fontFamily: 'monospace'}}>synthetic controls</text>
              
              {/* Output node */}
              <rect x="560" y="40" width="80" height="60" stroke="#1a1a1a" strokeWidth="2" fill="none" rx="4"/>
              <text x="600" y="75" textAnchor="middle" className="text-xs" fill="#1a1a1a" style={{fontSize: '12px', fontFamily: 'monospace'}}>FDA</text>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}