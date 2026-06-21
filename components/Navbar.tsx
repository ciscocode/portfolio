import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--bg)]/80 backdrop-blur">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-6 py-3">
        <Link href="/" className="font-semibold tracking-tight text-[var(--text)]">
          Francisco Montenegro
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/#projects"
            className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            Projects
          </Link>
          <a
            href="https://www.linkedin.com/in/francisco-montenegro-372a66b2/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-[var(--text-muted)] hover:text-[var(--text)] transition-colors"
          >
            LinkedIn
          </a>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
