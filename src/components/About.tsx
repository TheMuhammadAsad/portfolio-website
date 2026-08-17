import { motion } from "framer-motion";

const SKILL_GROUPS = [
  {
    title: "Data & Visualization",
    skills: ["Python (pandas, NumPy)", "R", "SQL", "Power BI", "DAX", "Streamlit", "Plotly", "Tableau"],
  },
  {
    title: "Machine Learning & Statistics",
    skills: ["scikit-learn", "XGBoost", "TensorFlow/Keras", "Hypothesis testing", "SHAP", "Predictive modelling"],
  },
  {
    title: "Web Development",
    skills: ["React", "Next.js", "TypeScript", "FastAPI", "HTML5/CSS3", "JavaScript"],
  },
  {
    title: "Engineering & Platforms",
    skills: ["Petroleum software (MBAL)", "Docker", "Kubernetes", "PostgreSQL", "Git/GitHub", "MS Project"],
  },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="grid gap-16 md:grid-cols-[1fr_1.1fr]"
      >
        <div>
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--color-teal)]">About</p>
          <h2 className="mt-3 font-display text-3xl font-medium text-[var(--color-text)] sm:text-4xl">
            From drilling fluids to dashboards
          </h2>
          <div className="mt-6 space-y-4 text-[var(--color-muted)] leading-relaxed">
            <p>
              I started as a petroleum engineer — five years of hands-on research at NED University
              on shale stability, drilling fluid rheology, and asphaltene precipitation, co-authoring
              5+ peer-reviewed papers and presenting at SPE ADIPEC 2023.
            </p>
            <p>
              Along the way I kept reaching for data and code to answer the questions the lab
              couldn't: predictive models for reservoir fluid properties, an interactive dashboard
              to visualize research findings, then a full transition into applied machine learning
              and data analytics as a Certified Cloud Native Developer (PIAIC).
            </p>
            <p>
              I'm now pursuing a Master's in Energy Engineering at the University of Genoa, building
              a portfolio that spans statistically rigorous analysis, production-shaped ML pipelines,
              and full-stack products — while designing and shipping real client websites on the
              side as a freelance web developer.
            </p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {SKILL_GROUPS.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5"
            >
              <h3 className="font-display text-base font-medium text-[var(--color-text)]">
                {group.title}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--color-line)] px-3 py-1 font-mono text-xs text-[var(--color-muted)]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
