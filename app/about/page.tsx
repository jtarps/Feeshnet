"use client";

import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-cream">
      <Navbar />

      <main className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6">
          {/* Back link */}
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-navy/40 hover:text-orange transition-colors mb-12 tracking-wider uppercase"
          >
            <ArrowLeft size={16} />
            Back
          </Link>

          {/* Header */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-navy mb-6">
              One person. Many problems.
              <br />
              <span className="text-orange">Many solutions.</span>
            </h1>
          </div>

          {/* Photo + intro */}
          <div className="grid md:grid-cols-[300px_1fr] gap-12 mb-20">
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden bg-navy/5">
              <Image
                src="/jaydee_mini.jpg"
                alt="Jaydee"
                fill
                className="object-cover"
              />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="text-2xl font-semibold text-navy mb-4">Jaydee Tarpeh</h2>
              <p className="text-sm text-orange font-medium tracking-wider uppercase mb-6">
                Founder & Product Manager
              </p>
              <div className="space-y-4 text-navy/60 leading-relaxed">
                <p>
                  Feeshnet is the holding company for everything I build. Each venture starts
                  with a problem I&apos;ve personally experienced or observed — and each one is
                  designed to run with minimal human overhead.
                </p>
                <p>
                  I&apos;m the product manager across all ventures. I set the vision, define what
                  gets built, and make the critical decisions. But the day-to-day operations?
                  That&apos;s handled by AI agents and automated systems — with humans in the loop
                  only where it matters.
                </p>
                <p>
                  The goal isn&apos;t to build a dozen companies for the sake of it. It&apos;s to
                  solve real problems with products that can sustain themselves — from healthcare
                  operations in Ontario to visa processing in West Africa to education access
                  in developing countries.
                </p>
              </div>
            </div>
          </div>

          {/* Philosophy blocks */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {[
              {
                title: "AI-Native Operations",
                body: "Every venture is designed from day one to be operated by AI agents. The human (me) is the product manager, not the operator. Agents handle scheduling, reminders, document drafting, billing, and coordination.",
              },
              {
                title: "Human-Assisted AI",
                body: "AI doesn't replace human judgment — it eliminates busywork. Humans stay in the loop for approvals, sign-offs, and decisions that require context only a person can provide.",
              },
              {
                title: "Problem-First Building",
                body: "No venture exists because the technology is cool. Each one starts with a specific, painful problem — usually one I've lived through myself. The tech is just how we solve it.",
              },
              {
                title: "One PM, Many Products",
                body: "Traditional companies need teams of managers. With AI-native operations, one product manager can oversee multiple ventures simultaneously — as long as the systems are built right.",
              },
            ].map((block) => (
              <div
                key={block.title}
                className="bg-white rounded-2xl p-8 border border-gray-100"
              >
                <h3 className="text-lg font-semibold text-navy mb-3">{block.title}</h3>
                <p className="text-sm text-navy/50 leading-relaxed">{block.body}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center py-12 border-t border-navy/10">
            <p className="text-navy/40 text-sm tracking-wider uppercase mb-4">Get in touch</p>
            <a
              href="mailto:hello@feeshnet.com"
              className="inline-block px-8 py-3 bg-navy text-white rounded-full text-sm font-medium hover:bg-navy/90 transition-colors"
            >
              hello@feeshnet.com
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
