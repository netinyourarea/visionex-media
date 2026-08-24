import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from "motion/react";
import { useRef, type ReactNode } from "react";

import { cn } from "@/lib/utils";

/** Fade + rise reveal, triggered once as the element scrolls into view. */
export function Reveal({
  children,
  delay = 0,
  y = 28,
  className,
  as = "div",
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
  as?: "div" | "span" | "li";
}) {
  const reduce = useReducedMotion();
  const Comp = motion[as];

  return (
    <Comp
      className={className}
      initial={reduce ? { opacity: 1 } : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-12% 0px -8% 0px" }}
      transition={{ duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </Comp>
  );
}

/** Word-by-word typographic reveal for large editorial headings. */
export function WordReveal({
  text,
  className,
  delay = 0,
  highlightFrom,
  highlightClassName = "text-gradient-accent",
}: {
  text: string;
  className?: string;
  delay?: number;
  /** Index of the first word rendered in the accent gradient. */
  highlightFrom?: number;
  /** Gradient utility class applied to highlighted words. */
  highlightClassName?: string;
}) {
  const reduce = useReducedMotion();
  const words = text.split(" ");

  return (
    <span className={cn("inline-block", className)}>
      {words.map((word, i) => (
        <span
          key={`${word}-${i}`}
          className="inline-block overflow-hidden pb-[0.2em] align-bottom"
        >
          <motion.span
            className={cn(
              "inline-block",
              highlightFrom !== undefined && i >= highlightFrom && highlightClassName,
            )}
            initial={reduce ? { y: 0, opacity: 1 } : { y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 0.95,
              delay: delay + i * 0.06,
              ease: [0.16, 1, 0.3, 1],
            }}
          >
            {word}
            {i < words.length - 1 ? "\u00A0" : ""}
          </motion.span>
        </span>
      ))}
    </span>
  );
}

/** Scroll-linked parallax wrapper. */
export function Parallax({
  children,
  distance = 60,
  className,
}: {
  children: ReactNode;
  distance?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const d = reduce ? 0 : distance;
  const y = useTransform(scrollYProgress, [0, 1], [d, -d]);

  return (
    <div ref={ref} className={className}>
      <motion.div style={{ y }}>{children}</motion.div>
    </div>
  );
}

export function useSectionProgress(): [
  React.RefObject<HTMLDivElement | null>,
  MotionValue<number>,
] {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  return [ref, scrollYProgress];
}
