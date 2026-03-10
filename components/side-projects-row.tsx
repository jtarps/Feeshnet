"use client";

import { sideProjects, type Project } from "@/lib/ventures";
import { ArrowUpRight } from "lucide-react";

function PlaygroundCard({ project, index, animateIn }: { project: Project; index: number; animateIn: boolean }) {
  const inner = (
    <>
      <div
        className="w-9 h-9 rounded-xl shrink-0 mt-0.5 flex items-center justify-center text-sm font-bold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3"
        style={{ backgroundColor: project.color + "18", color: project.color }}
      >
        {project.name.charAt(0)}
      </div>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold text-navy text-sm group-hover:text-orange transition-colors duration-200">
            {project.name}
          </h3>
          {project.url && (
            <ArrowUpRight
              size={14}
              className="text-navy/25 group-hover:text-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 shrink-0"
            />
          )}
        </div>
        <p className="text-xs text-navy/45 leading-relaxed mt-1">{project.tagline}</p>
      </div>
    </>
  );

  const className = `group flex items-start gap-4 p-5 rounded-xl border border-navy/8 bg-white/60 hover:bg-white hover:shadow-lg hover:shadow-navy/5 hover:-translate-y-1 transition-all duration-300 ${
    animateIn ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
  }`;
  const style = { transitionDelay: `${index * 80}ms` };

  if (project.url) {
    return (
      <a
        href={project.url}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        style={style}
      >
        {inner}
      </a>
    );
  }

  return (
    <div className={`${className} cursor-default`} style={style}>
      {inner}
    </div>
  );
}

export default function SideProjectsRow({ animateIn = true }: { animateIn?: boolean }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {sideProjects.map((project, i) => (
        <PlaygroundCard key={project.name} project={project} index={i} animateIn={animateIn} />
      ))}
    </div>
  );
}
