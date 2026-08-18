import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#websites", label: "Web Development" },
  { href: "#experience", label: "Experience" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

const RESUME_URL = `${import.meta.env.BASE_URL}Muhammad-Asad-CV.pdf`;

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = LINKS.map((l) => document.getElementById(l.href.slice(1))).filter(
      (el): el is HTMLElement => el !== null,
    );
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b transition-colors ${
        scrolled
          ? "border-[var(--color-line)] bg-[var(--color-ink)]/90 backdrop-blur"
          : "border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-lg font-semibold tracking-tight text-[var(--color-text)]">
          Muhammad Asad
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative font-mono text-sm transition-colors"
                style={{
                  color: active === link.href ? "var(--color-teal)" : "var(--color-muted)",
                }}
              >
                {link.label}
                {active === link.href && (
                  <span className="absolute -bottom-1.5 left-0 h-px w-full bg-[var(--color-teal)]" />
                )}
              </a>
            </li>
          ))}
        </ul>

        <a
          href={RESUME_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full border border-[var(--color-teal-dim)] px-4 py-1.5 font-mono text-sm text-[var(--color-teal)] transition-colors hover:bg-[var(--color-teal)] hover:text-[var(--color-ink)] md:inline-block"
        >
          Resume
        </a>

        <button
          className="text-[var(--color-text)] md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="border-t border-[var(--color-line)] bg-[var(--color-ink)] px-6 py-4 md:hidden">
          <ul className="flex flex-col gap-4">
            {LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm text-[var(--color-muted)]"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono text-sm text-[var(--color-teal)]"
              >
                Resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
