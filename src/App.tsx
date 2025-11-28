import { Hero } from "./components/Hero";
import { Problem } from "./components/Problem";
import { Solution } from "./components/Solution";
import { Proof } from "./components/Proof";
import { Team } from "./components/Team";
import { CTA } from "./components/CTA";
import { Navigation } from "./components/Navigation";
import { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Update page title
    document.title = "Sapien Labs - World's First 'Human-Less' Clinical Trial Engine";
    
    // Update favicon
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><circle cx="12" cy="12" r="2.5" fill="%231a1a1a"/><circle cx="20" cy="12" r="2.5" fill="%231a1a1a"/><ellipse cx="16" cy="10" rx="10" ry="8" stroke="%231a1a1a" stroke-width="1.5" fill="none"/><path d="M12 18 Q16 21, 20 18" stroke="%231a1a1a" stroke-width="1.5" fill="none" stroke-linecap="round"/><circle cx="10" cy="16" r="1.5" fill="%231a1a1a"/><circle cx="22" cy="16" r="1.5" fill="%231a1a1a"/><path d="M8 20 Q10 22, 12 20" stroke="%231a1a1a" stroke-width="1.2" fill="none" stroke-linecap="round"/><path d="M20 20 Q22 22, 24 20" stroke="%231a1a1a" stroke-width="1.2" fill="none" stroke-linecap="round"/></svg>';
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <Problem />
      <Solution />
      <Proof />
      <Team />
      <CTA />
    </div>
  );
}