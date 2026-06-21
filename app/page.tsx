import ProjectFilter from "@/components/ProjectFilter";
import { projects } from "@/data/projects";

const SKILLS = [
  "TypeScript", "React", "Next.js", "Node.js",
  "Java", "JavaFX", "Python", "PyTorch",
  "Firebase", "MySQL", "Docker", "GCP",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="mx-auto max-w-5xl px-6 py-20">
        <p className="text-sm font-medium text-[var(--accent)] mb-3 tracking-wide uppercase">
          Software Engineer
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tight mb-4">
          Francisco Montenegro
        </h1>
        <p className="text-lg text-[var(--text-muted)] max-w-xl mb-8">
          I build full-stack web apps, desktop software, and machine-learning models—always
          with an eye toward clean architecture and real-world usability.
        </p>
        <div className="flex gap-4 flex-wrap">
          <a
            href="#projects"
            className="px-5 py-2.5 rounded-lg bg-[var(--accent)] text-white font-medium hover:bg-[var(--accent-hover)] transition-colors text-sm"
          >
            See my work
          </a>
          <a
            href="https://www.linkedin.com/in/francisco-montenegro-372a66b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-lg border border-[var(--border)] text-[var(--text)] font-medium hover:border-[var(--accent)] transition-colors text-sm"
          >
            LinkedIn
          </a>
        </div>
      </section>

      {/* Skills strip */}
      <section className="border-y border-[var(--border)] bg-[var(--bg-secondary)] py-6">
        <div className="mx-auto max-w-5xl px-6">
          <div className="flex flex-wrap gap-3">
            {SKILLS.map((skill) => (
              <span
                key={skill}
                className="text-sm px-3 py-1 rounded-full border border-[var(--border)] text-[var(--text-muted)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="mx-auto max-w-5xl px-6 py-16">
        <h2 className="text-2xl font-bold mb-2">Projects</h2>
        <p className="text-[var(--text-muted)] mb-8">
          A selection of work spanning web, desktop, and machine learning.
        </p>
        <ProjectFilter projects={projects} />
      </section>
    </>
  );
}
