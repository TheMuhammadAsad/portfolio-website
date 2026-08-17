import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { clientSites } from "../data/websites";

export default function Websites() {
  return (
    <section id="websites" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--color-amber)]">
          Web Design & Development
        </p>
        <h2 className="mt-3 font-display text-3xl font-medium text-[var(--color-text)] sm:text-4xl">
          7+ websites, designed and built
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--color-muted)]">
          All freelance client work — including SmartPath AI's corporate and healthcare platforms, a
          set of pages built for ProLayers, an e-commerce catalog for a Karachi-based fashion brand,
          and a recruitment consultancy landing page.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {clientSites.map((site, i) => (
          <motion.article
            key={site.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (i % 3) * 0.08 }}
            className="group overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)]"
          >
            <div className="relative h-44 overflow-hidden border-b border-[var(--color-line)] bg-[var(--color-surface-2)]">
              <img
                src={`${import.meta.env.BASE_URL}${site.screenshot.replace(/^\//, "")}`}
                alt={`${site.name} homepage`}
                className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
              <span
                className={`absolute top-3 right-3 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide ${
                  site.status === "Live"
                    ? "bg-[var(--color-teal)] text-[var(--color-ink)]"
                    : "bg-[var(--color-surface)] text-[var(--color-muted)] border border-[var(--color-line)]"
                }`}
              >
                {site.status}
              </span>
            </div>

            <div className="p-5">
              <h3 className="font-display text-lg font-medium text-[var(--color-text)]">{site.name}</h3>
              <p className="mt-1 font-mono text-xs text-[var(--color-amber)]">{site.tagline}</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--color-muted)]">{site.description}</p>
              <p className="mt-3 font-mono text-[11px] text-[var(--color-muted)]">{site.role}</p>

              {site.live && (
                <a
                  href={site.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-teal)] transition-colors hover:text-[var(--color-amber)]"
                >
                  <ExternalLink size={14} />
                  Visit site
                </a>
              )}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
