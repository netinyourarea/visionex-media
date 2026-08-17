import { createFileRoute } from "@tanstack/react-router";

import ecosystemImg from "@/assets/ecosystem.jpg";
import { ecosystem } from "@/data/site";
import { PageHeader } from "@/components/site/PageHeader";
import { FinalCta } from "@/components/site/FinalCta";
import { Eyebrow } from "@/components/site/primitives";
import { Reveal } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/technology")({
  head: () => ({
    meta: [
      { title: "Technology — Visionex Media Services" },
      {
        name: "description",
        content:
          "The Visionex technology ecosystem — frontend, backend, cloud, databases, DevOps, AI, security and APIs.",
      },
    ],
  }),
  component: TechnologyPage,
});

function TechnologyPage() {
  return (
    <>
      <PageHeader
        eyebrow="Technology"
        title="An interconnected engineering ecosystem."
        lead="We choose technology for fit, not fashion — a coherent stack across every layer, documented so your team can operate it after handover."
      />

      <section className="container-x pb-16">
        <Reveal>
          <div className="relative aspect-21/9 overflow-hidden border border-border bg-surface">
            <img
              src={ecosystemImg}
              alt=""
              aria-hidden
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      <section className="hairline-t container-x py-24 md:py-32">
        <Eyebrow>The Stack</Eyebrow>
        <div className="mt-14 grid gap-x-10 gap-y-16 border-t border-border pt-14 sm:grid-cols-2 lg:grid-cols-4">
          {ecosystem.map((layer, i) => (
            <Reveal key={layer.layer} delay={Math.min(i * 0.04, 0.28)}>
              <span className="font-mono text-[11px] tracking-widest text-primary/80">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h2 className="mt-3 font-display text-xl font-bold">{layer.layer}</h2>
              <ul className="mt-5 space-y-2.5">
                {layer.items.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-muted-foreground">
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCta
        eyebrow="Talk technology"
        heading="Bring us the stack you're weighing up."
        body="Migration, greenfield or a legacy system that needs modernising — we'll give you an honest read on the trade-offs before you commit."
      />
    </>
  );
}
