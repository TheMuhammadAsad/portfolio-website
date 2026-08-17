export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-line)] px-6 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 sm:flex-row">
        <p className="font-mono text-xs text-[var(--color-muted)]">
          © {new Date().getFullYear()} Muhammad Asad. Built with React, TypeScript & Tailwind.
        </p>
        <a
          href="https://github.com/MuhammadAsadTech/portfolio-website"
          target="_blank"
          rel="noopener noreferrer"
          className="font-mono text-xs text-[var(--color-muted)] transition-colors hover:text-[var(--color-teal)]"
        >
          View source
        </a>
      </div>
    </footer>
  );
}
