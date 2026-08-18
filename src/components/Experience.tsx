import { motion } from "framer-motion";

const ROLES = [
  {
    period: "Feb 2024 — Present",
    title: "Research Analyst",
    org: "Cloud Innovators Solution (CIS), Karachi",
    points: [
      "Apply data analytics and ML pipelines to support operational optimization across multi-disciplinary projects.",
      "Design dashboards and visualizations to communicate statistical findings to technical and business stakeholders.",
    ],
  },
  {
    period: "May 2021 — Aug 2023",
    title: "Research Assistant",
    org: "NED University of Engineering and Technology, Karachi",
    points: [
      "Conducted experimental testing and data analysis on shale swelling, drilling fluid rheology, and asphaltene precipitation.",
      "Implemented ML algorithms to predict fluid properties; co-authored 5+ peer-reviewed papers.",
    ],
  },
  {
    period: "Jun 2022 — Jul 2022",
    title: "Data Analyst Intern",
    org: "GlobalShala (Sponsored by Saint Louis University), Remote",
    points: ["Delivered audience-tailored data presentations and analysis for non-technical stakeholders."],
  },
  {
    period: "Oct 2022 — Nov 2022",
    title: "Engineering Intern",
    org: "Oil & Gas Development Company (OGDCL), Hyderabad",
    points: ["Observed field operations and jet pump equipment across surface and subsurface systems."],
  },
];

const EDUCATION = [
  {
    period: "Sept 2025 — Present",
    title: "Master's in Energy Engineering",
    org: "University of Genoa, Savona Campus, Italy",
  },
  {
    period: "Graduated 2023",
    title: "Bachelor in Petroleum Engineering",
    org: "NED University of Engineering and Technology, Karachi — CGPA 3.619/4.0",
  },
  {
    period: "Feb 2022 — Aug 2024",
    title: "Certified Cloud Native Developer",
    org: "Presidential Initiative for AI & Computing (PIAIC), Batch 36",
  },
];

const PUBLICATIONS = [
  "5+ peer-reviewed papers in Chemical Papers and Arabian Journal for Science & Engineering",
  "SPE ADIPEC 2023 — Investigating the Effect of Salt, Polymer and Magnetic Nanoparticles on Critical Drilling Parameters, Coupled with a Novel 3D Image Processing Technique",
  "ACS Acknowledged Work — Carbon Capture and Storage (CCS) in Oil and Gas",
  "Geothermal Rising Student Contest (Abstract Selected) — Enhanced Geothermal Systems: Global Challenges & Strategies",
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-24">
      <div className="grid gap-16 lg:grid-cols-2">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--color-teal)]"
          >
            Experience
          </motion.p>
          <h2 className="mt-3 font-display text-3xl font-medium text-[var(--color-text)]">Work history</h2>

          <ol className="mt-8 space-y-8 border-l border-[var(--color-line)] pl-6">
            {ROLES.map((role, i) => (
              <motion.li
                key={role.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--color-teal)]" />
                <p className="font-mono text-xs text-[var(--color-muted)]">{role.period}</p>
                <h3 className="mt-1 font-display text-lg text-[var(--color-text)]">{role.title}</h3>
                <p className="font-mono text-xs text-[var(--color-amber)]">{role.org}</p>
                <ul className="mt-2 space-y-1.5 text-sm leading-relaxed text-[var(--color-muted)]">
                  {role.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </motion.li>
            ))}
          </ol>
        </div>

        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--color-teal)]"
          >
            Education
          </motion.p>
          <h2 className="mt-3 font-display text-3xl font-medium text-[var(--color-text)]">Academic background</h2>

          <ol className="mt-8 space-y-6 border-l border-[var(--color-line)] pl-6">
            {EDUCATION.map((ed, i) => (
              <motion.li
                key={ed.title}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="relative"
              >
                <span className="absolute -left-[29px] top-1.5 h-2.5 w-2.5 rounded-full bg-[var(--color-amber)]" />
                <p className="font-mono text-xs text-[var(--color-muted)]">{ed.period}</p>
                <h3 className="mt-1 font-display text-lg text-[var(--color-text)]">{ed.title}</h3>
                <p className="font-mono text-xs text-[var(--color-amber)]">{ed.org}</p>
              </motion.li>
            ))}
          </ol>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="mt-10 rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5"
          >
            <h3 className="font-display text-base font-medium text-[var(--color-text)]">
              Publications & Conference Contributions
            </h3>
            <ul className="mt-3 space-y-2 text-sm leading-relaxed text-[var(--color-muted)]">
              {PUBLICATIONS.map((pub) => (
                <li key={pub} className="flex gap-2">
                  <span className="text-[var(--color-teal)]">·</span>
                  {pub}
                </li>
              ))}
            </ul>
            <a
              href="https://scholar.google.com.pk/citations?hl=en&pli=1&user=ksdPH4MAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-mono text-xs text-[var(--color-teal)] transition-colors hover:text-[var(--color-amber)]"
            >
              Full list on Google Scholar &rarr;
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
