import { createFileRoute } from "@tanstack/react-router";

import { methodology, whyVisionex } from "@/data/site";
import { PageHeader } from "@/components/site/PageHeader";
import { FinalCta } from "@/components/site/FinalCta";
import { Eyebrow } from "@/components/site/primitives";
import { Reveal, WordReveal } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Visionex Media Services" },
      {
        name: "description",
        content:
          "Visionex Media Services is an IT and technology solutions company — our philosophy, delivery model and standards.",
      },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Engineers first, everything else second."
        lead="Visionex is an IT and technology solutions company. We design, build and operate the systems organisations run on — not a marketing or media agency, and not a template shop."
      />

      <section className="container-x pb-24">
        <Reveal delay={0.08}>
          <p className="mt-10 max-w-4xl text-[clamp(1.5rem,3.6vw,2.5rem)] font-medium leading-[1.3] tracking-tight">
            We treat software as{" "}
            <span className="text-gradient-accent font-bold">infrastructure</span> — judged by how
            it behaves years after launch, not how it demos on day one. Every engagement is owned
            end-to-end by the engineers who write it.
          </p>
        </Reveal>
      </section>

      <section className="hairline-t container-x py-24 md:py-32">
        <Reveal>
          <Eyebrow>Our delivery model</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.1]">
            <WordReveal text="Five stages, applied consistently." delay={0.05} />
          </h2>
        </Reveal>
        <ol className="mt-14 border-t border-border">
          {methodology.map((m, i) => (
            <Reveal key={m.step} as="li" delay={Math.min(i * 0.04, 0.24)}>
              <div className="flex flex-col gap-3 border-b border-border py-8 md:flex-row md:items-baseline md:gap-8">
                <span className="w-16 shrink-0 font-mono text-[11px] tracking-widest text-primary/80">
                  {m.step}
                </span>
                <h3 className="w-full shrink-0 font-display text-xl font-bold md:w-48">{m.name}</h3>
                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
                  {m.body}
                </p>
              </div>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="hairline-t container-x py-24 md:py-32">
        <Eyebrow>Standards</Eyebrow>
        <div className="mt-14 grid gap-x-10 gap-y-14 sm:grid-cols-2">
          {whyVisionex.map((item, i) => (
            <Reveal key={item.title} delay={Math.min(i * 0.05, 0.24)}>
              <span className="font-mono text-[11px] tracking-widest text-primary/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 font-display text-xl font-bold">{item.title}</h3>
              <p className="mt-3 max-w-md text-base leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="theme-dark relative overflow-hidden bg-background py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" aria-hidden />
        <div
          className="pointer-events-none absolute top-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-primary/10 blur-[140px]"
          aria-hidden
        />
        <div className="container-x relative">
          <Reveal>
            <Eyebrow className="text-white">By the numbers</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1.1] text-white">
              Engineering, measured.
            </h2>
          </Reveal>
          <div className="mt-16 grid divide-y divide-border border-t border-border sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
            {/* PLACEHOLDER — illustrative figures only, replace with confirmed operating metrics before publishing. */}
            {[
              { value: "10+", label: "Engineering disciplines" },
              { value: "05", label: "Stage delivery model" },
              { value: "37+", label: "Engagements delivered" },
              { value: "6+", label: "Years operating" },
            ].map((stat, i) => (
              <Reveal key={stat.label} delay={Math.min(i * 0.05, 0.2)}>
                <div className="flex flex-col gap-4 px-2 py-10 sm:px-8">
                  <p className="font-display text-[clamp(2.75rem,5.5vw,4.5rem)] font-extrabold leading-none text-gradient-accent-light">
                    {stat.value}
                  </p>
                  <p className="font-mono text-[11px] tracking-[0.16em] text-muted-foreground">
                    {stat.label.toUpperCase()}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
          <p className="mt-10 max-w-lg font-mono text-[11px] leading-relaxed tracking-wide text-muted-foreground">
            These figures represent our operating scope and delivery track record across multiple engineering disciplines.
          </p>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
