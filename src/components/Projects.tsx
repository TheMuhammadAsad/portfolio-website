import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Sparkles } from "lucide-react";
import { GithubIcon } from "./BrandIcons";
import { projects, categoryOrder, type ProjectCategory } from "../data/projects";

const FILTERS: ("All" | ProjectCategory)[] = ["All", ...categoryOrder];

export default function Projects() {
  const [filter, setFilter] = useState<"All" | ProjectCategory>("All");

  const visible = useMemo(() => {
    if (filter === "All") return projects;
    return projects.filter((p) => p.categories.includes(filter));
  }, [filter]);

  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--color-teal)]">Projects</p>
        <h2 className="mt-3 font-display text-3xl font-medium text-[var(--color-text)] sm:text-4xl">
          13+ real, end-to-end analyses
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--color-muted)]">
          Every project uses real public or client data, ships real code and tests, and documents
          findings honestly — including the failures and their fixes.
        </p>

        <div className="mt-8 flex flex-wrap gap-2">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`rounded-full border px-4 py-1.5 font-mono text-xs transition-colors ${
                filter === f
                  ? "border-[var(--color-teal)] bg-[var(--color-teal)] text-[var(--color-ink)]"
                  : "border-[var(--color-line)] text-[var(--color-muted)] hover:border-[var(--color-teal)] hover:text-[var(--color-teal)]"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((project) => (
            <motion.article
              key={project.slug}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.25 }}
              whileHover={{ y: -5 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] transition-colors hover:border-[var(--color-teal)]/40"
            >
              {project.featured && (
                <span className="absolute top-3 right-3 z-10 inline-flex items-center gap-1 rounded-full bg-[var(--color-amber)] px-2.5 py-1 font-mono text-[10px] font-medium text-[var(--color-ink)] shadow-lg">
                  <Sparkles size={11} />
                  Featured
                </span>
              )}
              {project.image && (
                <div className="h-40 overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-surface-2)]">
                  <img
                    src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, "")}`}
                    alt={`${project.title} preview`}
                    className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              )}

              <div className="flex flex-1 flex-col p-5">
                <div className="flex flex-wrap gap-1.5">
                  {project.categories.map((c) => (
                    <span
                      key={c}
                      className="rounded-full bg-[var(--color-surface-2)] px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-wide text-[var(--color-teal)]"
                    >
                      {c}
                    </span>
                  ))}
                </div>

                <h3 className="mt-4 font-display text-lg font-medium text-[var(--color-text)]">
                  {project.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--color-muted)]">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-1.5">
                  {project.tech.map((t) => (
                    <span key={t} className="font-mono text-[11px] text-[var(--color-muted)]">
                      {t}
                      {t !== project.tech[project.tech.length - 1] ? " ·" : ""}
                    </span>
                  ))}
                </div>

                <div className="mt-5 flex items-center gap-4 border-t border-[var(--color-line)] pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-text)] transition-colors hover:text-[var(--color-teal)]"
                  >
                    <GithubIcon size={14} />
                    Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-teal)] transition-colors hover:text-[var(--color-amber)]"
                    >
                      <ExternalLink size={14} />
                      {project.liveLabel ?? "Live"}
                    </a>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
