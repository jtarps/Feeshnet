"use client";

import AnimatedLogo from "@/components/animated-logo";
import Navbar from "@/components/navbar";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar hideLogo={true} alwaysHamburger={true} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center">
        <div className="text-center fade-in max-w-4xl mx-auto px-6">
          <div className="mb-16">
            <AnimatedLogo />
          </div>
        </div>
      </section>

      {/* Simple scroll indicator */}
      {/* <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400 text-sm">Scroll to explore</div> */}
    </div>
  );
}
