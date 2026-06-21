import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import { projects, getProjectBySlug } from "@/data/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return { title: `${project.title} — Francisco Montenegro` };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <article className="mx-auto max-w-3xl px-6 py-12">
      <Link
        href="/#projects"
        className="inline-flex items-center gap-1.5 text-sm text-[var(--text-muted)] hover:text-[var(--text)] mb-8 transition-colors"
      >
        <ArrowLeft size={15} /> Back to projects
      </Link>

      <div className="mb-6">
        <span className="text-xs font-medium px-2 py-0.5 rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border)]">
          {project.category}
        </span>
      </div>

      <h1 className="text-3xl sm:text-4xl font-bold mb-3">{project.title}</h1>
      <p className="text-lg text-[var(--text-muted)] mb-6">{project.tagline}</p>

      <div className="flex flex-wrap gap-3 mb-8">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
          >
            <Github size={15} /> View on GitHub
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm px-4 py-2 rounded-lg border border-[var(--border)] hover:border-[var(--accent)] transition-colors"
          >
            <ExternalLink size={15} /> Live demo
          </a>
        )}
      </div>

      <div className="flex flex-wrap gap-1.5 mb-10">
        {project.tags.map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-0.5 rounded bg-[var(--bg-secondary)] text-[var(--text-muted)]"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="space-y-10">
        <section>
          <h2 className="text-xl font-semibold mb-3">Problem</h2>
          <p className="text-[var(--text-muted)] leading-relaxed">{project.problem}</p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Challenges</h2>
          <ul className="space-y-3">
            {project.challenges.map((c, i) => (
              <li key={i} className="flex gap-3 text-[var(--text-muted)] leading-relaxed">
                <span className="mt-1 shrink-0 w-5 h-5 rounded-full bg-[var(--accent)]/10 text-[var(--accent)] text-xs flex items-center justify-center font-semibold">
                  {i + 1}
                </span>
                {c}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Learnings</h2>
          <ul className="space-y-3">
            {project.learnings.map((l, i) => (
              <li key={i} className="flex gap-3 text-[var(--text-muted)] leading-relaxed">
                <span className="shrink-0 text-[var(--accent)] mt-1">✦</span>
                {l}
              </li>
            ))}
          </ul>
        </section>
      </div>
    </article>
  );
}
