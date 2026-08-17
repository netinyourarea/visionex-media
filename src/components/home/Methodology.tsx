import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

import { methodology } from "@/data/site";
import { Eyebrow } from "@/components/site/primitives";
import { Reveal } from "@/components/site/motion-primitives";

export function Methodology() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 0.75", "end 0.4"] });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section className="hairline-t relative overflow-hidden py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <Eyebrow>Methodology</Eyebrow>
              <h2 className="mt-6 max-w-xl text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1]">
                The Visionex delivery model.
              </h2>
            </div>
            <p className="max-w-sm text-base leading-relaxed text-muted-foreground">
              Five stages, applied consistently across every engagement. Each one produces an
              artefact you own — not a slide deck.
            </p>
          </div>
        </Reveal>

        <div ref={ref} className="relative mt-20">
          {/* Center spine on desktop, left rail on mobile */}
          <div
            className="absolute inset-y-0 left-5 w-px bg-border md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />
          <motion.div
            className="absolute left-5 top-0 w-px bg-primary md:left-1/2 md:-translate-x-1/2"
            style={{ height: lineHeight }}
            aria-hidden
          />

          <ol className="space-y-16 md:space-y-0">
            {methodology.map((m, i) => {
              const onRight = i % 2 === 1;
              return (
                <Reveal key={m.step} as="li" delay={Math.min(i * 0.05, 0.24)}>
                  <div
                    className={`relative flex flex-col gap-6 pl-16 md:min-h-56 md:flex-row md:items-center md:gap-0 md:pl-0 md:py-10 ${
                      onRight ? "md:justify-start" : "md:justify-end"
                    }`}
                  >
                    {/* Node on the spine */}
                    <span
                      className="absolute left-5 top-0 flex size-10 -translate-x-1/2 items-center justify-center rounded-full border border-primary/50 bg-background font-mono text-[11px] font-semibold text-primary md:left-1/2 md:top-1/2 md:-translate-y-1/2"
                      aria-hidden
                    >
                      {m.step}
                    </span>

                    <div
                      className={`w-full md:w-[calc(50%-3.5rem)] ${
                        onRight ? "md:pl-14 md:text-left" : "md:pr-14 md:text-right"
                      }`}
                    >
                      <div className="group border border-border bg-surface/60 p-7 transition-colors hover:border-primary/40 md:p-9">
                        <h3 className="font-display text-2xl font-bold leading-tight text-foreground md:text-3xl">
                          {m.name}
                        </h3>
                        <p className="mt-4 text-base leading-relaxed text-foreground/85">
                          {m.body}
                        </p>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
