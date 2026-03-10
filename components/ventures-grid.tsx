"use client";

import { ventures, labs, type Project } from "@/lib/ventures";
import { ArrowUpRight, FlaskConical } from "lucide-react";
import { useState } from "react";

function StatusBadge({ project }: { project: Project }) {
  const tierStyles: Record<string, string> = {
    venture: "bg-emerald-100 text-emerald-800",
    lab: "bg-violet-100 text-violet-800",
    side: "bg-amber-100 text-amber-800",
  };

  return (
    <span
      className={`inline-block px-2.5 py-1 text-[11px] font-semibold tracking-wider uppercase rounded-full ${
        tierStyles[project.tier]
      }`}
    >
      {project.status}
    </span>
  );
}

function VentureCard({ project }: { project: Project }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="group relative bg-white rounded-2xl border border-gray-100 p-8 transition-all duration-300 hover:shadow-xl hover:shadow-navy/5 hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Color accent bar */}
      <div
        className="absolute top-0 left-8 right-8 h-1 rounded-b-full transition-all duration-500"
        style={{
          backgroundColor: project.color,
          opacity: isHovered ? 1 : 0.3,
          transform: isHovered ? "scaleX(1)" : "scaleX(0.6)",
        }}
      />

      <div className="flex items-start justify-between mb-4 mt-2">
        <div>
          <span className="text-[11px] font-medium tracking-widest uppercase text-navy/40">
            {project.category}
          </span>
          <h3 className="text-xl font-semibold text-navy mt-1 group-hover:text-orange transition-colors duration-200">
            {project.name}
          </h3>
        </div>
        {project.url && (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full bg-gray-50 text-navy/30 hover:bg-orange hover:text-white hover:rotate-12 transition-all duration-200"
          >
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>

      <p className="text-sm text-navy/60 font-medium mb-3">{project.tagline}</p>
      <p className="text-sm text-navy/45 leading-relaxed mb-5">{project.description}</p>

      <StatusBadge project={project} />
    </div>
  );
}

function LabCard({ project }: { project: Project }) {
  return (
    <div className="group relative bg-white/80 rounded-xl border border-violet-100 p-6 transition-all duration-300 hover:shadow-lg hover:shadow-violet-500/5 hover:-translate-y-1 hover:border-violet-200">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-2">
          <FlaskConical size={16} className="text-violet-400 group-hover:animate-bounce" />
          <span className="text-[11px] font-medium tracking-widest uppercase text-navy/40">
            {project.category}
          </span>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-navy mb-2 group-hover:text-violet-600 transition-colors duration-200">
        {project.name}
      </h3>
      <p className="text-sm text-navy/50 leading-relaxed mb-4">{project.description}</p>

      <StatusBadge project={project} />
    </div>
  );
}

export default function VenturesGrid() {
  return (
    <div className="space-y-12">
      {/* Ventures */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {ventures.map((project) => (
          <VentureCard key={project.name} project={project} />
        ))}
      </div>

      {/* Labs */}
      {labs.length > 0 && (
        <div>
          <div className="mb-6">
            <div className="flex items-center gap-2">
              <h3 className="text-sm font-semibold tracking-[0.3em] uppercase text-violet-500/70 mb-2">
                Labs
              </h3>
            </div>
            <p className="text-sm text-navy/40">
              Built and functional — being validated before going to market.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {labs.map((project) => (
              <LabCard key={project.name} project={project} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
