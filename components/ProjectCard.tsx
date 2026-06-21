import Link from "next/link";
import { ExternalLink, Github } from "lucide-react";
import type { Project } from "@/data/projects";

export default function ProjectCard({ project }: { project: Project }) {
  const categoryColors: Record<string, string> = {
    fullstack: "bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300",
    frontend: "bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300",
    desktop: "bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300",
    ml: "bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300",
  };

  return (
    <div className="rounded-xl border border-[var(--border)] bg-[var(--card-bg)] p-6 flex flex-col gap-4 hover:border-[var(--accent)] transition-colors">
      <div className="flex items-start justify-between gap-2">
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full ${categoryColors[project.category] ?? ""}`}
        >
          {project.category}
        </span>
        <div className="flex gap-2">
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
            >
              <Github size={16} />
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Live demo"
              className="text-[var(--text-muted)] hover:text-[var(--accent)] transition-colors"
            >
              <ExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <div>
        <h3 className="font-semibold text-lg leading-snug">{project.title}</h3>
        <p className="mt-1 text-sm text-[var(--text-muted)] line-clamp-2">{project.tagline}</p>
      </div>

      <div className="flex flex-wrap gap-1.5 mt-auto">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-muted)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <Link
        href={`/projects/${project.slug}`}
        className="mt-1 text-sm font-medium text-[var(--accent)] hover:underline"
      >
        View case study →
      </Link>
    </div>
  );
}
