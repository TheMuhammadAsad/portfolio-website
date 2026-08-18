import { motion } from "framer-motion";
import { BarChart3, Brain, Code2, Wrench } from "lucide-react";

const SKILL_GROUPS = [
  {
    title: "Data & Visualization",
    icon: BarChart3,
    skills: ["Python (pandas, NumPy)", "R", "SQL", "Power BI", "DAX", "Streamlit", "Plotly", "Tableau"],
  },
  {
    title: "Machine Learning & Statistics",
    icon: Brain,
    skills: ["scikit-learn", "XGBoost", "TensorFlow/Keras", "Hypothesis testing", "SHAP", "Predictive modelling"],
  },
  {
    title: "Web Development",
    icon: Code2,
    skills: ["React", "Next.js", "TypeScript", "FastAPI", "HTML5/CSS3", "JavaScript"],
  },
  {
    title: "Engineering & Platforms",
    icon: Wrench,
    skills: ["Petroleum software (MBAL)", "Docker", "Kubernetes", "PostgreSQL", "Git/GitHub", "MS Project"],
  },
];

const GALLERY = [
  { src: "genoa-04.jpg", rotate: -7, x: -24, y: 14, border: "teal", z: 1 },
  { src: "genoa-03.jpg", rotate: 8, x: 28, y: 30, border: "amber", z: 2 },
  { src: "genoa-01.jpg", rotate: -2, x: 0, y: 0, border: "amber", z: 3 },
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="grid gap-16 md:grid-cols-[1.1fr_0.9fr] md:items-center"
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
              I'm now pursuing a Master's in Energy Engineering at the University of Genoa,
              building a portfolio that spans statistically rigorous analysis, production-shaped ML
              pipelines, and full-stack products — while designing and shipping real client websites
              on the side as a freelance web developer.
            </p>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative mx-auto h-[26rem] w-full max-w-md sm:h-[30rem]"
        >
          {GALLERY.map((photo, i) => (
            <motion.img
              key={photo.src}
              src={`${import.meta.env.BASE_URL}images/gallery/${photo.src}`}
              alt="Muhammad Asad in Genoa, Italy"
              loading="lazy"
              decoding="async"
              initial={{ opacity: 0, rotate: photo.rotate, x: photo.x, y: photo.y + 20 }}
              whileInView={{ opacity: 1, rotate: photo.rotate, x: photo.x, y: photo.y }}
              viewport={{ once: true, margin: "-60px" }}
              whileHover={{ rotate: 0, scale: 1.08, zIndex: 10 }}
              transition={{ duration: 0.5, delay: 0.3 + i * 0.12 }}
              className="absolute top-1/2 left-1/2 h-80 w-64 -translate-x-1/2 -translate-y-1/2 rounded-2xl border-2 object-cover shadow-2xl sm:h-[26rem] sm:w-80"
              style={{
                borderColor:
                  photo.border === "amber" ? "var(--color-amber)" : "var(--color-teal)",
                zIndex: photo.z,
              }}
            />
          ))}
        </motion.div>
      </motion.div>

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SKILL_GROUPS.map((group, i) => {
          const accent = i % 2 === 0 ? "var(--color-teal)" : "var(--color-amber)";
          return (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-2xl border border-[var(--color-line)] bg-[var(--color-surface)] p-5 transition-colors"
            >
              <div
                className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100"
                style={{ background: accent }}
              />
              <div
                className="absolute -top-10 -right-10 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-20"
                style={{ background: accent }}
              />

              <div
                className="relative flex h-10 w-10 items-center justify-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                style={{ background: `color-mix(in srgb, ${accent} 16%, transparent)`, color: accent }}
              >
                <group.icon size={20} />
              </div>

              <h3 className="relative mt-4 font-display text-base font-medium text-[var(--color-text)]">
                {group.title}
              </h3>
              <div className="relative mt-4 flex flex-wrap gap-2">
                {group.skills.map((skill, si) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, y: 6 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{ duration: 0.3, delay: i * 0.08 + si * 0.04 }}
                    className="rounded-full border border-[var(--color-line)] px-3 py-1 font-mono text-xs text-[var(--color-muted)] transition-colors group-hover:border-[var(--color-line)]"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
