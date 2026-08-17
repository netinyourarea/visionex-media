import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";

import softwareDevelopmentImg from "@/assets/software.png";
import webApplicationsImg from "@/assets/web-application.png";
import mobileAppsImg from "@/assets/mobile-apps.png";
import cloudSolutionsImg from "@/assets/cloud-solution.png";
import aiAutomationImg from "@/assets/ai-automations.png";
import cybersecurityImg from "@/assets/cybersecurity.png";
import itConsultingImg from "@/assets/it-consulting.png";
import itInfrastructureImg from "@/assets/it-infrastructure.png";
import systemIntegrationImg from "@/assets/api.png";
import productEngineeringImg from "@/assets/prodduct-engeenearing.png";
import { services, type Service } from "@/data/site";
import { PageHeader } from "@/components/site/PageHeader";
import { FinalCta } from "@/components/site/FinalCta";
import { Eyebrow, TechTag } from "@/components/site/primitives";
import { Reveal } from "@/components/site/motion-primitives";

const imageBySlug: Record<string, string> = {
  "software-development": softwareDevelopmentImg,
  "web-applications": webApplicationsImg,
  "mobile-apps": mobileAppsImg,
  "product-engineering": productEngineeringImg,
  "cloud-solutions": cloudSolutionsImg,
  "it-infrastructure": itInfrastructureImg,
  cybersecurity: cybersecurityImg,
  "ai-automation": aiAutomationImg,
  "it-consulting": itConsultingImg,
  "system-integration": systemIntegrationImg,
};

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = services.find((s) => s.slug === params.slug);
    if (!service) throw notFound();
    return service;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} — Visionex Media Services` },
          { name: "description", content: loaderData.summary },
        ]
      : [],
  }),
  component: ServiceDetail,
});

function ServiceDetail() {
  const service: Service = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug).slice(0, 3);

  return (
    <>
      <PageHeader eyebrow="Service" title={service.title} lead={service.summary} />

      <div className="container-x pb-16">
        <Reveal>
          <div className="aspect-21/9 overflow-hidden border border-border bg-surface">
            <img
              src={imageBySlug[service.slug]}
              alt={service.title}
              className="size-full object-cover"
              loading="lazy"
            />
          </div>
        </Reveal>
      </div>

      <div className="container-x grid gap-16 pb-28 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <Reveal>
            <Eyebrow>Capabilities</Eyebrow>
            <ul className="mt-8 space-y-6">
              {service.capabilities.map((c, i) => (
                <li key={c} className="flex gap-5 border-t border-border pt-6">
                  <span className="font-mono text-[11px] tracking-widest text-primary/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-base leading-relaxed text-foreground">{c}</p>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <aside className="space-y-12 lg:col-span-4 lg:col-start-9">
          <Reveal delay={0.1}>
            <p className="eyebrow mb-5">Deliverables</p>
            <ul className="space-y-2.5">
              {service.deliverables.map((d) => (
                <li key={d} className="text-sm leading-relaxed text-muted-foreground">
                  — {d}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="eyebrow mb-5">Stack</p>
            <div className="flex flex-wrap gap-2">
              {service.stack.map((t) => (
                <TechTag key={t}>{t}</TechTag>
              ))}
            </div>
          </Reveal>
        </aside>
      </div>

      <section className="hairline-t container-x py-20">
        <Eyebrow>Related services</Eyebrow>
        <div className="mt-10 grid gap-6 sm:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group border border-border p-6 transition-colors hover:border-primary/40"
            >
              <span className="flex items-center justify-between">
                <span className="font-display text-lg font-bold group-hover:text-primary">
                  {s.title}
                </span>
                <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
              </span>
              <span className="mt-2 block text-sm text-muted-foreground">{s.short}</span>
            </Link>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
