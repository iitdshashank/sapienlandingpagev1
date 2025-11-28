import { Button } from "./ui/button";
import { ArrowRight, Calendar } from "lucide-react";

export function CTA() {
  return (
    <section className="py-32 px-6 bg-neutral-900 text-white relative overflow-hidden">
      {/* Background sketch elements - inverted for dark bg */}
      <svg className="absolute top-0 left-0 w-full h-full opacity-5" viewBox="0 0 1000 400">
        <path d="M0 200 Q250 100, 500 200 T1000 200" stroke="white" strokeWidth="2" fill="none"/>
        <path d="M0 250 Q250 150, 500 250 T1000 250" stroke="white" strokeWidth="2" fill="none"/>
        <circle cx="200" cy="200" r="80" stroke="white" strokeWidth="2" fill="none"/>
        <circle cx="800" cy="200" r="80" stroke="white" strokeWidth="2" fill="none"/>
      </svg>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-8">
          <div className="inline-block relative">
            <h2 className="text-5xl md:text-6xl tracking-tight mb-6">
              Ready for technical<br/>consultation?
            </h2>
            {/* Hand-drawn underline */}
            <svg className="absolute -bottom-2 left-0 w-full" height="12" viewBox="0 0 500 12" preserveAspectRatio="none">
              <path d="M0 6 Q125 3, 250 6 T500 6" stroke="white" strokeWidth="2" fill="none" opacity="0.4"/>
            </svg>
          </div>
        </div>

        <p className="text-xl text-neutral-300 mb-12 max-w-2xl mx-auto leading-relaxed">
          Discuss your clinical trial requirements. Review technical architecture.<br/>
          Explore how synthetic control arms can accelerate your programs.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="lg" className="bg-white text-neutral-900 hover:bg-neutral-100 px-8" asChild>
            <a href="https://calendly.com/shashank-8028/quick30" target="_blank" rel="noopener noreferrer">
              <Calendar className="mr-2 h-5 w-5" />
              Schedule Pilot Discussion
            </a>
          </Button>
          <Button size="lg" variant="outline" className="border-white text-neutral-900 bg-white hover:bg-neutral-100 px-8" asChild>
            <a href="https://cooperative-freedom-f3c.notion.site/Sapien-Labs-29ed18ac63ce8055b0ecf117bf02d539?pvs=74" target="_blank" rel="noopener noreferrer">
              Download Technical Brief
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>

        {/* Contact info */}
        <div className="pt-12 border-t border-white/20">
          <p className="text-neutral-400 mb-4">For enterprise partnerships</p>
          <a href="mailto:shashank.8028@gmail.com" className="text-white hover:text-neutral-300 transition-colors text-lg">
            shashank.8028@gmail.com
          </a>
        </div>

        {/* Hand-drawn annotation */}
        <svg className="absolute bottom-12 right-12 opacity-20" width="150" height="100" viewBox="0 0 150 100">
          <path d="M10 50 Q50 10, 140 40" stroke="white" strokeWidth="2" fill="none"/>
          <path d="M140 40 L130 35 M140 40 L135 45" stroke="white" strokeWidth="2"/>
          <text x="20" y="70" style={{fontSize: '12px', fontFamily: 'monospace'}} fill="white">let's talk</text>
        </svg>
      </div>

      {/* Footer */}
      <div className="max-w-7xl mx-auto mt-24 pt-12 border-t border-white/10 relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              {/* Chimp face outline */}
              <ellipse cx="16" cy="10" rx="10" ry="8" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
              {/* Eyes */}
              <circle cx="12" cy="12" r="2.5" fill="white"/>
              <circle cx="20" cy="12" r="2.5" fill="white"/>
              {/* Nose area */}
              <circle cx="10" cy="16" r="1.5" fill="white"/>
              <circle cx="22" cy="16" r="1.5" fill="white"/>
              {/* Mouth */}
              <path d="M12 18 Q16 21, 20 18" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
              {/* Ears */}
              <path d="M8 20 Q10 22, 12 20" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
              <path d="M20 20 Q22 22, 24 20" stroke="white" strokeWidth="1.2" fill="none" strokeLinecap="round"/>
            </svg>
            <span className="text-neutral-400">Sapien Labs</span>
          </div>
          
          <div className="flex gap-8 text-sm text-neutral-400">
            <a href="#solution" className="hover:text-white transition-colors">Technology</a>
            <a href="#proof" className="hover:text-white transition-colors">Validation</a>
            <a href="#team" className="hover:text-white transition-colors">Team</a>
            <a href="#" className="hover:text-white transition-colors">Documentation</a>
          </div>

          <div className="text-sm text-neutral-500">
            © 2025 Sapien Labs. Deep tech infrastructure.
          </div>
        </div>
      </div>
    </section>
  );
}