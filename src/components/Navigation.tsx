import { Button } from "./ui/button";
import logoImage from "figma:asset/d3b7b65db4c17a595c9bbcb68ac2e9417abb488f.png";

export function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="relative">
            <img src={logoImage} alt="Sapien Labs Logo" width="32" height="32" className="object-contain" />
          </div>
          <span className="tracking-tight text-neutral-900">Sapien Labs</span>
        </div>
        
        <div className="hidden md:flex items-center gap-8">
          <a href="#solution" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm">Technology</a>
          <a href="#proof" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm">Validation</a>
          <a href="#team" className="text-neutral-600 hover:text-neutral-900 transition-colors text-sm">Team</a>
          <Button 
            variant="default" 
            size="sm" 
            className="bg-neutral-900 hover:bg-neutral-800"
            asChild
          >
            <a href="https://calendly.com/shashank-8028/quick30" target="_blank" rel="noopener noreferrer">
              Schedule Consultation
            </a>
          </Button>
        </div>
      </div>
    </nav>
  );
}