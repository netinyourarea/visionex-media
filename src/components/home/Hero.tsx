import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import heroImage from "@/assets/hero-architecture.jpg";
import { CtaLink } from "@/components/site/primitives";
import { WordReveal } from "@/components/site/motion-primitives";

const markers = ["SOFTWARE", "CLOUD", "SECURITY", "AI", "INTEGRATION"];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "18%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.14]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -70]);
  const fade = useTransform(scrollYProgress, [0, 0.85], [1, reduce ? 1 : 0]);

  return (
    <div ref={ref} className="theme-dark relative h-[100svh] min-h-[680px] w-full overflow-hidden bg-background pt-20 text-foreground">
      <motion.div className="absolute inset-0" style={{ y: imageY, scale: imageScale }}>
        <img
          src={heroImage}
          alt="Abstract three-dimensional lattice of interconnected digital architecture"
          width={1920}
          height={1280}
          className="size-full object-cover opacity-70"
          fetchPriority="high"
        />
      </motion.div>

      <div
        className="absolute inset-0 bg-[radial-gradient(120%_90%_at_50%_10%,transparent_10%,var(--background)_85%)]"
        aria-hidden
      />
      <div className="absolute inset-0 grid-lines opacity-30" aria-hidden />
      <div
        className="absolute inset-x-0 bottom-0 h-52 bg-gradient-to-t from-background to-transparent"
        aria-hidden
      />

      <motion.div
        style={{ y: contentY, opacity: fade }}
        className="container-x relative flex h-full flex-col justify-start pt-28 pb-16 sm:pt-32 md:justify-start md:pt-0 md:pb-24"
      >
        <h1 className="mt-7 max-w-[16ch] text-[clamp(3.25rem,8vw,6.5rem)] font-extrabold leading-[1.3] text-white">
          <WordReveal
            text="Engineering the Digital Future."
            delay={0.15}
            highlightFrom={2}
            highlightClassName="text-gradient-accent-light"
          />
        </h1>

        <div className="mt-8 flex flex-col gap-10 border-t border-border/70 pt-8 lg:flex-row lg:items-end lg:justify-between">
          <motion.p
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.75, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-md text-base leading-relaxed text-muted-foreground"
          >
            Visionex designs, builds and operates the software, cloud and security systems that
            organisations run on — engineered for scale, resilience and the decade after launch.
          </motion.p>

          <motion.div
            initial={reduce ? { opacity: 1 } : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.88, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-3"
          >
            <CtaLink to="/services">Explore Solutions</CtaLink>
            <CtaLink to="/contact" variant="ghost">
              Talk to Visionex
            </CtaLink>
          </motion.div>
        </div>

        <motion.ul
          initial={reduce ? { opacity: 1 } : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.05 }}
          className="mt-10 hidden gap-8 font-mono text-[11px] tracking-[0.2em] text-muted-foreground md:flex"
        >
          {markers.map((m) => (
            <li key={m} className="flex items-center gap-2">
              <span className="size-1 bg-primary/70" aria-hidden />
              {m}
            </li>
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
}
