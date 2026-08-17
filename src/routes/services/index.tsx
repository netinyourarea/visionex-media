import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/data/site";
import { PageHeader } from "@/components/site/PageHeader";
import { FinalCta } from "@/components/site/FinalCta";
import { Eyebrow, TechTag } from "@/components/site/primitives";
import { Reveal } from "@/components/site/motion-primitives";

const engagementModels = [
  {
    name: "Scoped engagement",
    body: "A defined outcome, architecture and timeline, delivered and handed over. Best when the problem is well understood.",
  },
  {
    name: "Embedded team",
    body: "Visionex engineers work inside your delivery process on an ongoing basis, as a direct extension of your team.",
  },
  {
    name: "Advisory retainer",
    body: "Architecture review, technical due diligence and decision support — without taking the build itself.",
  },
];

export const Route = createFileRoute("/services/")({
  head: () => ({
    meta: [
      { title: "Services — Visionex Media Services" },
      {
        name: "description",
        content:
          "Ten engineering disciplines — software, web, mobile, cloud, AI, security, infrastructure, integration and product engineering.",
      },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Ten disciplines, one engineering standard."
        lead="Every engagement draws on the same delivery model — discovery, architecture, engineering, deployment and evolution — applied to the discipline your problem actually needs."
      />

      <div className="container-x pb-28">
        <ol className="border-t border-border">
          {services.map((s, i) => (
            <Reveal key={s.slug} as="li" delay={Math.min(i * 0.03, 0.2)}>
              <Link
                to="/services/$slug"
                params={{ slug: s.slug }}
                className="group grid gap-4 border-b border-border py-10 transition-colors hover:border-primary/40 md:grid-cols-12 md:items-start md:gap-8"
              >
                <div className="md:col-span-1">
                  <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-5">
                  <h2 className="font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                    {s.title}
                  </h2>
                  <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {s.short}
                  </p>
                </div>
                <div className="md:col-span-5">
                  <div className="flex flex-wrap gap-2">
                    {s.stack.map((t) => (
                      <TechTag key={t}>{t}</TechTag>
                    ))}
                  </div>
                </div>
                <div className="md:col-span-1 md:text-right">
                  <ArrowUpRight className="size-5 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
                </div>
              </Link>
            </Reveal>
          ))}
        </ol>
      </div>

      <section className="theme-dark relative overflow-hidden bg-background py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" aria-hidden />
        <div className="container-x relative">
          <Reveal>
            <Eyebrow className="text-white">How we engage</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-[1.05] text-white">
              Three shapes an engagement can take.
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-10 border-t border-border pt-14 md:grid-cols-3">
            {engagementModels.map((m, i) => (
              <Reveal key={m.name} delay={Math.min(i * 0.06, 0.24)}>
                <span className="font-mono text-[11px] tracking-widest text-primary/80">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-white">{m.name}</h3>
                <p className="mt-3 max-w-sm text-base leading-relaxed text-white">
                  {m.body}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <FinalCta />
    </>
  );
}
