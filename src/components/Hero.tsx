import { motion } from "framer-motion";
import { ArrowDownRight, MapPin } from "lucide-react";
import AnimatedNumber from "./AnimatedNumber";

const STATS = [
  { value: "13+", label: "Data & ML projects" },
  { value: "7+", label: "Websites designed & built" },
  { value: "5+", label: "Peer-reviewed publications" },
  { value: "2", label: "Engineering disciplines" },
];

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden px-6 pt-40 pb-24">
      <div
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full opacity-20 blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-teal), transparent 70%)" }}
      />
      <motion.div
        className="pointer-events-none absolute bottom-0 -left-24 h-80 w-80 rounded-full opacity-[0.12] blur-3xl"
        style={{ background: "radial-gradient(circle, var(--color-amber), transparent 70%)" }}
        animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="mx-auto grid max-w-6xl items-center gap-16 md:grid-cols-[1.2fr_0.8fr]">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--color-teal)]">
            Data Analyst · Data Scientist · Web Developer
          </p>
          <h1 className="mt-4 font-display text-5xl leading-[1.05] font-medium text-[var(--color-text)] sm:text-6xl">
            Turning messy data and{" "}
            <span className="italic text-[var(--color-teal)]">energy-domain expertise</span> into
            products people use.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
            Petroleum engineer turned data scientist, currently pursuing a Master's in Energy
            Engineering at the University of Genoa. I build statistically rigorous analysis,
            production-shaped ML pipelines, and full-stack web products — and I design and ship
            client websites on the side.
          </p>

          <div className="mt-4 flex items-center gap-2 font-mono text-sm text-[var(--color-muted)]">
            <MapPin size={16} className="text-[var(--color-amber)]" />
            Savona, Italy
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--color-teal)] px-6 py-3 font-mono text-sm font-medium text-[var(--color-ink)]"
            >
              View projects
              <ArrowDownRight size={16} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full border border-[var(--color-line)] px-6 py-3 font-mono text-sm text-[var(--color-text)] transition-colors hover:border-[var(--color-amber)] hover:text-[var(--color-amber)]"
            >
              Get in touch
            </motion.a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1, y: [0, -10, 0] }}
          transition={{
            opacity: { duration: 0.6, ease: "easeOut", delay: 0.15 },
            scale: { duration: 0.6, ease: "easeOut", delay: 0.15 },
            y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 },
          }}
          whileHover={{ scale: 1.02 }}
          className="relative mx-auto w-full max-w-xs"
        >
          <div className="absolute inset-0 -rotate-3 rounded-3xl bg-[var(--color-teal)]/15" />
          <div className="absolute inset-0 rotate-2 rounded-3xl bg-[var(--color-amber)]/10" />
          <img
            src={`${import.meta.env.BASE_URL}images/profile.jpg`}
            alt="Muhammad Asad"
            className="relative aspect-[4/5] w-full rounded-3xl border border-[var(--color-line)] object-cover shadow-2xl"
          />
        </motion.div>
      </div>

      <motion.dl
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="mx-auto mt-20 grid max-w-6xl grid-cols-2 gap-6 border-t border-[var(--color-line)] pt-10 sm:grid-cols-4"
      >
        {STATS.map((stat) => (
          <div key={stat.label}>
            <dt className="font-display text-3xl text-[var(--color-teal)]">
              <AnimatedNumber value={stat.value} />
            </dt>
            <dd className="mt-1 font-mono text-xs uppercase tracking-wide text-[var(--color-muted)]">
              {stat.label}
            </dd>
          </div>
        ))}
      </motion.dl>
    </section>
  );
}
