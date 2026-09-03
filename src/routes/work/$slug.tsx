import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import dashboardImg from "@/assets/case-dashboard.jpg";
import infraImg from "@/assets/infrastructure.jpg";
import securityImg from "@/assets/security.jpg";
import softwareImg from "@/assets/software-engineering.jpg";
import { caseStudies, type CaseStudy } from "@/data/site";
import { PageHeader } from "@/components/site/PageHeader";
import { FinalCta } from "@/components/site/FinalCta";
import { Eyebrow, TechTag } from "@/components/site/primitives";
import { Reveal } from "@/components/site/motion-primitives";

const caseImages = {
  dashboard: dashboardImg,
  infrastructure: infraImg,
  security: securityImg,
  software: softwareImg,
};

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const study = caseStudies.find((c) => c.slug === params.slug);
    if (!study) throw notFound();
    return study;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Visionex Media Private Limited` },
          { name: "description", content: loaderData.summary },
        ]
      : [],
  }),
  component: CaseStudyDetail,
});

function CaseStudyDetail() {
  const study: CaseStudy = Route.useLoaderData();
  const others = caseStudies.filter((c) => c.slug !== study.slug).slice(0, 3);

  return (
    <>
      <PageHeader eyebrow={study.discipline} title={study.title} lead={study.summary} />

      <section className="container-x pb-16">
        <Reveal delay={0.06}>
          <div className="relative mt-10 aspect-21/9 overflow-hidden border border-border bg-surface">
            <img
              src={caseImages[study.image]}
              alt=""
              aria-hidden
              loading="lazy"
              className="size-full object-cover"
            />
          </div>
        </Reveal>
      </section>

      <div className="container-x grid gap-16 pb-28 lg:grid-cols-12 lg:gap-20">
        <div className="space-y-14 lg:col-span-7">
          <Reveal>
            <Eyebrow>Challenge</Eyebrow>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {study.challenge}
            </p>
          </Reveal>
          <Reveal delay={0.06}>
            <Eyebrow>Approach</Eyebrow>
            <ul className="mt-6 space-y-5">
              {study.approach.map((step, i) => (
                <li key={step} className="flex gap-5 border-t border-border pt-5">
                  <span className="font-mono text-[11px] tracking-widest text-primary/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-relaxed text-foreground">{step}</p>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.12}>
            <Eyebrow>Outcome</Eyebrow>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">{study.outcome}</p>
          </Reveal>
        </div>

        <aside className="space-y-12 lg:col-span-4 lg:col-start-9">
          <Reveal delay={0.1}>
            <p className="eyebrow mb-5">Sector</p>
            <p className="text-sm text-muted-foreground">{study.sector}</p>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="eyebrow mb-5">Stack</p>
            <div className="flex flex-wrap gap-2">
              {study.stack.map((t) => (
                <TechTag key={t}>{t}</TechTag>
              ))}
            </div>
          </Reveal>
        </aside>
      </div>

      <section className="hairline-t container-x py-20">
        <Eyebrow>More work</Eyebrow>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {others.map((c) => (
            <Link
              key={c.slug}
              to="/work/$slug"
              params={{ slug: c.slug }}
              className="group border border-border p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex items-center justify-between">
                <span className="font-display text-lg font-bold group-hover:text-primary">
                  {c.title}
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
              </span>
              <span className="mt-2 block text-sm text-muted-foreground">{c.discipline}</span>
            </Link>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
