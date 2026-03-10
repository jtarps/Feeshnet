"use client";

import AnimatedLogo from "@/components/animated-logo";
// import Navbar from "@/components/navbar";
// import SideProjectsRow from "@/components/side-projects-row";
// import VenturesGrid from "@/components/ventures-grid";
// import { ArrowDown, Sparkles } from "lucide-react";
import { useCallback, useEffect, useRef, useState } from "react";

/* ── Scroll-triggered entrance ─────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, inView };
}

/* ── Animated number counter ───────────────────────────── */
function AnimatedNumber({ value, inView }: { value: number; inView: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [inView, value]);

  return <>{display}</>;
}

/* ── Rotating taglines ─────────────────────────────────── */
const taglines = [
  { line1: "Building products that solve real problems.", highlight: "One venture at a time." },
  { line1: "Shipping ideas, not pitch decks.", highlight: "Building in public." },
  { line1: "If it should exist, we build it.", highlight: "Then we ship it." },
  { line1: "Side projects that grow into businesses.", highlight: "That's the playbook." },
];

/* ── Konami easter egg (↑↑↓↓←→←→BA) ──────────────────── */
function useKonami(callback: () => void) {
  const seq = useRef<string[]>([]);
  const code = ["ArrowUp","ArrowUp","ArrowDown","ArrowDown","ArrowLeft","ArrowRight","ArrowLeft","ArrowRight","b","a"];

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      seq.current.push(e.key);
      seq.current = seq.current.slice(-code.length);
      if (seq.current.join(",") === code.join(",")) callback();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [callback]);
}

/* ── Confetti burst ────────────────────────────────────── */
function Confetti({ active }: { active: boolean }) {
  if (!active) return null;

  const pieces = Array.from({ length: 60 }, (_, i) => {
    const colors = ["#f47216", "#0b355f", "#10B981", "#8B5CF6", "#EC4899", "#F59E0B"];
    const color = colors[i % colors.length];
    const left = Math.random() * 100;
    const delay = Math.random() * 0.5;
    const duration = 1.5 + Math.random() * 2;
    const rotation = Math.random() * 720 - 360;
    const size = 6 + Math.random() * 6;

    return (
      <div
        key={i}
        className="fixed pointer-events-none z-[9999]"
        style={{
          left: `${left}%`,
          top: "-10px",
          width: size,
          height: size * 0.6,
          backgroundColor: color,
          borderRadius: Math.random() > 0.5 ? "50%" : "2px",
          animation: `confetti-fall ${duration}s ease-in ${delay}s forwards`,
          transform: `rotate(${rotation}deg)`,
        }}
      />
    );
  });

  return <>{pieces}</>;
}

/* ═══════════════════════════════════════════════════════ */

export default function HomePage() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [confetti, setConfetti] = useState(false);
  // const portfolio = useInView();
  // const playground = useInView();
  // const approach = useInView(0.1);

  // Pick a random tagline on mount
  useEffect(() => {
    setTaglineIndex(Math.floor(Math.random() * taglines.length));
  }, []);

  // Easter egg
  useKonami(
    useCallback(() => {
      setConfetti(true);
      setTimeout(() => setConfetti(false), 4000);
    }, [])
  );

  const tagline = taglines[taglineIndex];

  return (
    <div className="min-h-screen bg-cream relative">
      {/* <Navbar /> */}
      <Confetti active={confetti} />

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Subtle floating bg shapes */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -left-20 w-64 h-64 rounded-full bg-orange/[0.03] animate-[drift_20s_ease-in-out_infinite]" />
          <div className="absolute bottom-1/3 -right-16 w-48 h-48 rounded-full bg-navy/[0.03] animate-[drift_25s_ease-in-out_infinite_reverse]" />
          <div className="absolute top-1/2 left-1/3 w-32 h-32 rounded-full bg-violet-500/[0.02] animate-[drift_18s_ease-in-out_2s_infinite]" />
        </div>

        <div className="text-center fade-in max-w-5xl mx-auto px-6 relative z-10">
          {/* Personal belief */}
          <div className="mb-6 opacity-0 animate-[fadeIn_1s_ease-in_0.3s_forwards]">
            <p className="text-xl md:text-2xl italic text-navy/60 tracking-wide">
              Creation is the highest form of worship.
            </p>
            <div className="mt-3 mx-auto w-12 h-0.5 bg-gradient-to-r from-transparent via-orange/40 to-transparent" />
          </div>

          <div className="mb-10">
            <AnimatedLogo />
          </div>
          <p className="text-xl md:text-2xl text-navy/70 font-light tracking-wide max-w-2xl mx-auto">
            {tagline.line1}
            <br />
            <span className="text-orange font-medium">{tagline.highlight}</span>
          </p>
        </div>
      </section>

      {/* TODO: Uncomment sections below when ready to show full site */}
      {/*
      <section id="ventures" className="py-24 md:py-32 bg-white relative">
        ...Portfolio Section...
      </section>

      <section className="py-16 md:py-20 bg-cream/50 overflow-hidden">
        ...Playground Section...
      </section>

      <section className="py-24 md:py-32 bg-cream relative overflow-hidden">
        ...Philosophy Section...
      </section>

      <footer className="py-12 bg-navy text-white/60">
        ...Footer...
      </footer>
      */}
    </div>
  );
}
