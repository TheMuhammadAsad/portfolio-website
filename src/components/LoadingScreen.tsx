import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const LINES = [
  { prompt: "whoami", response: "Muhammad Asad" },
  { prompt: "role --list", response: "Data Analyst · Data Scientist · Web Developer" },
  { prompt: "status", response: "Loading portfolio..." },
];

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [lineCount, setLineCount] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) {
      setVisible(false);
      return;
    }

    document.body.style.overflow = "hidden";

    const lineTimers = LINES.map((_, i) =>
      setTimeout(() => setLineCount(i + 1), 260 + i * 380),
    );

    const progressStart = Date.now();
    const progressDuration = 1700;
    const progressTimer = setInterval(() => {
      const elapsed = Date.now() - progressStart;
      setProgress(Math.min(100, Math.round((elapsed / progressDuration) * 100)));
    }, 30);

    const hideTimer = setTimeout(() => {
      setVisible(false);
      document.body.style.overflow = "";
    }, 2000);

    return () => {
      lineTimers.forEach(clearTimeout);
      clearInterval(progressTimer);
      clearTimeout(hideTimer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: "-4%" }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-ink)]"
        >
          <div className="w-full max-w-md px-6">
            <div className="min-h-[132px] font-mono text-sm">
              {LINES.map((line, i) => (
                <div key={line.prompt} className="mb-2">
                  {i < lineCount && (
                    <motion.div
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <span className="text-[var(--color-teal)]">$</span>{" "}
                      <span className="text-[var(--color-muted)]">{line.prompt}</span>
                      <div className="mt-1 text-[var(--color-text)]">{line.response}</div>
                    </motion.div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-4 h-[2px] w-full overflow-hidden rounded-full bg-[var(--color-line)]">
              <div
                className="h-full rounded-full transition-[width] duration-75 ease-linear"
                style={{
                  width: `${progress}%`,
                  background: "linear-gradient(90deg, var(--color-teal), var(--color-amber))",
                }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
