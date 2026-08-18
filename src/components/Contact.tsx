import { motion } from "framer-motion";
import { Mail, MapPin, GraduationCap } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";

const CHANNELS = [
  {
    icon: Mail,
    label: "Email",
    value: "asadishaq06@gmail.com",
    href: "mailto:asadishaq06@gmail.com",
  },
  {
    icon: LinkedinIcon,
    label: "LinkedIn",
    value: "LinkedIn",
    href: "https://linkedin.com/in/themuhammadasad",
  },
  {
    icon: GithubIcon,
    label: "GitHub",
    value: "GitHub",
    href: "https://github.com/TheMuhammadAsad",
  },
  {
    icon: GraduationCap,
    label: "Google Scholar",
    value: "Google Scholar",
    href: "https://scholar.google.com.pk/citations?hl=en&pli=1&user=ksdPH4MAAAAJ",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.5 }}
        className="rounded-3xl border border-[var(--color-line)] bg-[var(--color-surface)] px-8 py-14 text-center sm:px-16"
      >
        <p className="font-mono text-sm uppercase tracking-[0.2em] text-[var(--color-teal)]">Contact</p>
        <h2 className="mt-3 font-display text-3xl font-medium text-[var(--color-text)] sm:text-4xl">
          Let's build something worth measuring.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[var(--color-muted)]">
          Open to data analyst / data scientist, web developer, and automation roles, plus
          energy-domain data work and freelance web projects. Based in Savona, Italy — happy to
          work remotely.
        </p>

        <div className="mt-6 flex items-center justify-center gap-2 font-mono text-sm text-[var(--color-muted)]">
          <MapPin size={16} className="text-[var(--color-teal)]" />
          Savona, Italy
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {CHANNELS.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={channel.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="group flex min-w-0 flex-col items-center gap-2 rounded-2xl border border-[var(--color-line)] px-4 py-5 transition-colors hover:border-[var(--color-teal)]"
            >
              <channel.icon size={20} className="text-[var(--color-teal)]" />
              <span className="break-words text-center font-mono text-xs text-[var(--color-muted)] group-hover:text-[var(--color-text)]">
                {channel.value}
              </span>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
