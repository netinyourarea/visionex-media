import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import { services } from "@/data/site";
import { formatINR } from "@/data/checkout";
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
      { title: "Services & Disciplines — Visionex Media Private Limited" },
      {
        name: "description",
        content:
          "Ten engineering disciplines — software, web, mobile, cloud, AI, security, infrastructure, integration and product engineering — priced under ₹25k.",
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
        lead="Every engagement draws on the same delivery model — discovery, architecture, engineering, deployment and evolution — applied to the discipline your problem actually needs. Transparent sprint rates under ₹25,000."
      />

      <div className="container-x pb-28">
        <ol className="border-t border-border">
          {services.map((s, i) => (
            <Reveal key={s.slug} as="li" delay={Math.min(i * 0.03, 0.2)}>
              <div className="group grid gap-4 border-b border-border py-10 transition-colors hover:border-primary/40 md:grid-cols-12 md:items-start md:gap-8">
                <div className="md:col-span-1">
                  <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-4">
                  <div className="flex items-center gap-2 flex-wrap mb-1">
                    <Link to="/services/$slug" params={{ slug: s.slug }}>
                      <h2 className="font-display text-2xl font-bold tracking-tight transition-colors group-hover:text-primary md:text-3xl">
                        {s.title}
                      </h2>
                    </Link>
                    {s.badge && (
                      <span className="rounded bg-primary/10 px-2 py-0.5 font-mono text-[10px] font-semibold text-primary">
                        {s.badge}
                      </span>
                    )}
                  </div>
                  <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
                    {s.short}
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="inline-flex items-center gap-1 font-mono text-xs font-semibold text-primary hover:underline"
                    >
                      Explore service details
                      <ArrowUpRight className="size-3.5" />
                    </Link>
                  </div>
                </div>
                <div className="md:col-span-4">
                  <div className="flex flex-wrap gap-2">
                    {s.stack.map((t) => (
                      <TechTag key={t}>{t}</TechTag>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-2.5 md:col-span-3 md:items-end md:justify-start">
                  <div className="text-right">
                    <div className="font-mono text-base font-bold text-foreground">
                      {formatINR(s.price)}
                    </div>
                    <div className="font-mono text-[11px] text-muted-foreground">
                      {s.timeline}
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <Link
                      to="/checkout"
                      search={{ service: s.slug }}
                      className="inline-flex items-center gap-1 rounded-sm border border-primary/40 bg-primary/10 px-3.5 py-2 font-mono text-xs font-semibold text-primary hover:bg-primary hover:text-primary-foreground transition-all shadow-sm"
                    >
                      Book ({formatINR(s.price)}) →
                    </Link>
                    <Link
                      to="/services/$slug"
                      params={{ slug: s.slug }}
                      className="rounded-sm border border-border p-2 text-muted-foreground hover:border-primary/40 hover:text-primary transition-colors"
                      aria-label={`View ${s.title} details`}
                    >
                      <ArrowUpRight className="size-4 shrink-0" />
                    </Link>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>

      <section className="theme-dark relative overflow-hidden bg-background py-24 md:py-32">
        <div className="pointer-events-none absolute inset-0 grid-lines opacity-20" aria-hidden />
        <div className="container-x relative">
          <Reveal>
            <Eyebrow className="text-white">How we engage</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-[1.1] text-white">
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
