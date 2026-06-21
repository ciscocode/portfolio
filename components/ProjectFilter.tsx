"use client";

import { useState } from "react";
import ProjectCard from "./ProjectCard";
import type { Category, Project } from "@/data/projects";

const CATEGORIES: { label: string; value: Category | "all" }[] = [
  { label: "All", value: "all" },
  { label: "Full Stack", value: "fullstack" },
  { label: "Frontend", value: "frontend" },
  { label: "Desktop", value: "desktop" },
  { label: "ML / AI", value: "ml" },
];

export default function ProjectFilter({ projects }: { projects: Project[] }) {
  const [active, setActive] = useState<Category | "all">("all");

  const filtered =
    active === "all" ? projects : projects.filter((p) => p.category === active);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-8">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setActive(cat.value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors border ${
              active === cat.value
                ? "bg-[var(--accent)] text-white border-[var(--accent)]"
                : "border-[var(--border)] text-[var(--text-muted)] hover:border-[var(--accent)] hover:text-[var(--text)]"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
