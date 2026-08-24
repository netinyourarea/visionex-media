import { Link } from "@tanstack/react-router";
import { AnimatePresence, motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { useState } from "react";

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
import { services } from "@/data/site";
import { Eyebrow } from "@/components/site/primitives";
import { Reveal } from "@/components/site/motion-primitives";

const previewBySlug: Record<string, string> = {
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

export function ServicesInteractive() {
  const [active, setActive] = useState(0);

  return (
    <section className="hairline-t relative py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Eyebrow>Capabilities</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4.5vw,3.75rem)] font-extrabold leading-[1.1]">
              Ten disciplines, one engineering standard.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/services"
              className="group inline-flex items-center gap-2 font-display text-sm font-semibold text-primary"
            >
              All services
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 lg:grid-cols-12">
          <ul className="lg:col-span-7" onMouseLeave={() => setActive(0)}>
            {services.map((s, i) => (
              <Reveal key={s.slug} as="li" delay={Math.min(i * 0.04, 0.24)}>
                <Link
                  to="/services/$slug"
                  params={{ slug: s.slug }}
                  onMouseEnter={() => setActive(i)}
                  onFocus={() => setActive(i)}
                  className="group flex items-center gap-6 border-b border-border py-6 transition-colors hover:border-primary/50"
                >
                  <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1">
                    <span className="block font-display text-xl font-bold tracking-tight transition-colors group-hover:text-primary md:text-2xl">
                      {s.title}
                    </span>
                    <span className="mt-1 block text-sm text-muted-foreground">{s.short}</span>
                  </span>
                  <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
                </Link>
              </Reveal>
            ))}
          </ul>

          <div className="hidden lg:col-span-5 lg:block">
            <div className="sticky top-32">
              <div className="relative aspect-4/5 overflow-hidden border border-border bg-surface">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={active}
                    src={previewBySlug[services[active]?.slug ?? ""] ?? softwareDevelopmentImg}
                    alt=""
                    aria-hidden
                    loading="lazy"
                    initial={{ opacity: 0, scale: 1.06 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute inset-0 size-full object-cover"
                  />
                </AnimatePresence>
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7">
                  <p className="eyebrow text-white/70">
                    {String(active + 1).padStart(2, "0")} / Discipline
                  </p>
                  <p className="mt-3 font-display text-2xl font-bold leading-tight text-white">
                    {services[active]?.title}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-white/70">
                    {services[active]?.summary.slice(0, 150)}…
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
