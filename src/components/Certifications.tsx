import { motion } from "framer-motion";
import { ExternalLink, Award } from "lucide-react";
import { certifications } from "../data/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
      >
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--color-teal)]">
          Certifications
        </p>
        <h2 className="mt-3 font-display text-3xl font-medium text-[var(--color-text)] sm:text-4xl">
          Credentials behind the projects
        </h2>
        <p className="mt-4 max-w-2xl text-[var(--color-muted)]">
          Google's Data Analytics, Advanced Data Analytics, and IT Automation tracks, plus
          business and domain credentials from earlier in the transition.
        </p>
      </motion.div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <motion.div
            key={cert.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: (i % 4) * 0.06 }}
            className="flex items-start gap-3 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5"
          >
            <Award size={18} className="mt-0.5 shrink-0 text-[var(--color-amber)]" />
            <div className="min-w-0 flex-1">
              <h3 className="font-display text-base font-medium text-[var(--color-text)]">
                {cert.title}
              </h3>
              <p className="mt-1 font-mono text-xs text-[var(--color-muted)]">
                {cert.issuer} &middot; {cert.date}
              </p>
              {cert.verify && (
                <a
                  href={cert.verify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-2 inline-flex items-center gap-1.5 font-mono text-xs text-[var(--color-teal)] transition-colors hover:text-[var(--color-amber)]"
                >
                  <ExternalLink size={12} />
                  Verify
                </a>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
