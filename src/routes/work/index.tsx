import { createFileRoute, Link } from "@tanstack/react-router";

import dashboardImg from "@/assets/case-dashboard.jpg";
import infraImg from "@/assets/infrastructure.jpg";
import securityImg from "@/assets/security.jpg";
import softwareImg from "@/assets/software-engineering.jpg";
import { caseStudies } from "@/data/site";
import { PageHeader } from "@/components/site/PageHeader";
import { FinalCta } from "@/components/site/FinalCta";
import { Eyebrow } from "@/components/site/primitives";
import { Reveal } from "@/components/site/motion-primitives";

const disciplineSpread = [
  { label: "Product Engineering", note: "Zero-to-one builds and platform consolidation." },
  { label: "Cloud Solutions", note: "Migration, IaC foundations and cost control." },
  { label: "Cybersecurity", note: "Threat modelling and identity architecture." },
  { label: "System Integration", note: "Event-driven layers across legacy estates." },
];

const caseImages = {
  dashboard: dashboardImg,
  infrastructure: infraImg,
  security: securityImg,
  software: softwareImg,
};

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Visionex Media Services" },
      {
        name: "description",
        content:
          "Case studies from Visionex engineering engagements — product platforms, cloud migration, security programmes and integration layers.",
      },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <PageHeader
        eyebrow="Work"
        title="Engagement shapes, not slide decks."
        lead="A representative view of how we work with our clients across product engineering, cloud solutions, cybersecurity, and system integration."
      />

      <div className="container-x pb-28">
        <div className="mt-14 grid gap-10 border-t border-border pt-14 lg:grid-cols-2">
          {caseStudies.map((c, i) => (
            <Reveal key={c.slug} delay={Math.min(i * 0.05, 0.24)}>
              <Link to="/work/$slug" params={{ slug: c.slug }} className="group block">
                <div className="relative aspect-4/3 overflow-hidden border border-border bg-surface">
                  <img
                    src={caseImages[c.image]}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <p className="eyebrow text-white/70">{c.discipline}</p>
                    <p className="mt-2 font-display text-2xl font-bold leading-tight text-white group-hover:text-primary">
                      {c.title}
                    </p>
                    <p className="mt-2 text-sm text-white/70">{c.sector}</p>
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>

      <section className="theme-dark relative overflow-hidden bg-background py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" aria-hidden />
        <div className="container-x relative">
          <Eyebrow className="text-white">Spread of work</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-[1.05] text-white">
            Across disciplines, the same standard.
          </h2>
          <ol className="mt-14 grid gap-x-10 gap-y-10 border-t border-border pt-10 sm:grid-cols-2 lg:grid-cols-4">
            {disciplineSpread.map((d, i) => (
              <Reveal key={d.label} as="li" delay={Math.min(i * 0.05, 0.2)}>
                <span className="font-mono text-[11px] tracking-widest text-primary/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold leading-tight text-white">{d.label}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white">{d.note}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
