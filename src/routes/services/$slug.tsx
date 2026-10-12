import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  Code2,
  FileText,
  HelpCircle,
  Layers,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

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
import { formatINR } from "@/data/checkout";
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
          { title: `${loaderData.title} (${formatINR(loaderData.price)}) — Visionex Media Private Limited` },
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
      {/* ── 1. Hero Section ── */}
      <section className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24 border-b border-border/60">
        <div className="container-x">
          <div className="max-w-4xl">
            <Reveal>
              <div className="flex items-center gap-3 flex-wrap">
                <Eyebrow>Discipline Track</Eyebrow>
                {service.badge && (
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-3 py-0.5 font-mono text-xs font-semibold text-primary">
                    {service.badge}
                  </span>
                )}
                <span className="rounded-full border border-border bg-surface px-3 py-0.5 font-mono text-xs text-muted-foreground">
                  Sprint Rate: {formatINR(service.price)}
                </span>
              </div>

              <h1 className="mt-6 text-[clamp(2.5rem,5.5vw,4.5rem)] font-extrabold tracking-tight text-foreground leading-[1.08]">
                {service.title}
              </h1>

              <p className="mt-6 text-lg sm:text-xl leading-relaxed text-muted-foreground max-w-3xl">
                {service.summary}
              </p>
            </Reveal>

            {/* Quick Metrics Bar */}
            <Reveal delay={0.1}>
              <div className="mt-10 grid grid-cols-2 gap-4 border-t border-border pt-8 sm:grid-cols-4">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    Fixed Price
                  </span>
                  <div className="mt-1 font-display text-2xl font-bold text-primary">
                    {formatINR(service.price)}
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground">excl. 18% GST</span>
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    Timeline
                  </span>
                  <div className="mt-1 font-display text-base font-bold text-foreground">
                    {service.timeline}
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground">Sprint Delivery</span>
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    IP Ownership
                  </span>
                  <div className="mt-1 font-display text-base font-bold text-foreground">
                    100% Client
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground">Full Code & Docs</span>
                </div>
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground">
                    Warranty
                  </span>
                  <div className="mt-1 font-display text-base font-bold text-foreground">
                    30-Day Support
                  </div>
                  <span className="font-mono text-[10px] text-muted-foreground">Post-deployment</span>
                </div>
              </div>
            </Reveal>

            {/* Action Buttons */}
            <Reveal delay={0.15}>
              <div className="mt-8 flex items-center gap-4 flex-wrap">
                <Link
                  to="/checkout"
                  search={{ service: service.slug }}
                  className="inline-flex items-center gap-2 rounded-sm bg-primary px-7 py-3.5 font-display text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  Book {service.title} ({formatINR(service.price)}) →
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center gap-2 rounded-sm border border-border bg-surface px-6 py-3.5 font-display text-sm font-semibold text-foreground hover:bg-accent transition-colors"
                >
                  Consult an Engineer
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 2. Visual Preview & Tech Stack ── */}
      <section className="container-x py-16">
        <Reveal>
          <div className="relative aspect-21/9 overflow-hidden rounded-xl border border-border bg-surface shadow-2xl">
            <img
              src={imageBySlug[service.slug]}
              alt={service.title}
              className="size-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex flex-wrap gap-2">
                {service.stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-background/80 px-3 py-1 font-mono text-xs font-medium text-foreground backdrop-blur-md border border-border/80"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <span className="font-mono text-xs text-muted-foreground bg-background/80 px-3 py-1 rounded-full border border-border/80 backdrop-blur-md">
                Discipline Code: {service.slug}
              </span>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── 3. Engineering Highlights / Features ── */}
      {service.features && service.features.length > 0 && (
        <section className="hairline-t container-x py-20">
          <Reveal>
            <Eyebrow>Architecture Standards</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
              What sets this engineering discipline apart.
            </h2>
            <p className="mt-3 max-w-2xl text-base text-muted-foreground">
              We design every deliverable around explicit maintainability, resilience, and business ownership.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.features.map((f, i) => (
              <Reveal key={f.title} delay={i * 0.06}>
                <div className="h-full rounded-xl border border-border bg-card/60 p-6 transition-all hover:border-primary/40 hover:bg-surface">
                  <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary mb-5">
                    {i === 0 && <Code2 className="size-5" />}
                    {i === 1 && <Zap className="size-5" />}
                    {i === 2 && <ShieldCheck className="size-5" />}
                    {i === 3 && <Layers className="size-5" />}
                  </div>
                  <h3 className="font-display text-base font-bold text-foreground">
                    {f.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {f.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ── 4. Capabilities & Deliverables Breakdown ── */}
      <section className="hairline-t container-x py-20">
        <div className="grid gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Capabilities */}
          <div className="lg:col-span-7">
            <Reveal>
              <Eyebrow>Capabilities Included</Eyebrow>
              <h2 className="mt-4 text-2xl font-bold text-foreground sm:text-3xl">
                Technical scope covered in this track
              </h2>
              <ul className="mt-8 space-y-6">
                {service.capabilities.map((c, i) => (
                  <li key={c} className="flex gap-5 border-t border-border pt-6">
                    <span className="font-mono text-[11px] tracking-widest text-primary font-bold">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <div>
                      <p className="text-base font-semibold leading-relaxed text-foreground">{c}</p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Implemented with automated tests, domain models, and complete architectural documentation.
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Deliverables & Booking Box */}
          <aside className="space-y-8 lg:col-span-5">
            <Reveal delay={0.1}>
              <div className="rounded-xl border border-border bg-card/80 p-7 shadow-lg">
                <div className="flex items-center justify-between border-b border-border/60 pb-4">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                      Service Package
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground">
                      {service.title}
                    </h3>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-xl font-bold text-primary">
                      {formatINR(service.price)}
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground">Fixed Sprint Rate</span>
                  </div>
                </div>

                <div className="mt-6">
                  <h4 className="font-mono text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                    Official Deliverables
                  </h4>
                  <ul className="mt-3 space-y-2.5">
                    {service.deliverables.map((d) => (
                      <li key={d} className="flex items-start gap-2.5 text-xs text-foreground">
                        <CheckCircle2 className="size-4 shrink-0 text-emerald-400 mt-0.5" />
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 border-t border-border/60 pt-6">
                  <div className="rounded-md bg-primary/5 border border-primary/20 p-3 text-xs text-muted-foreground">
                    <span className="font-semibold text-primary block">Single Service Booking:</span>
                    Visionex allows booking 1 discipline service per checkout with instant corporate invoicing and GST receipt.
                  </div>

                  <Link
                    to="/checkout"
                    search={{ service: service.slug }}
                    className="mt-5 flex w-full items-center justify-center gap-2 rounded-md bg-primary px-5 py-3.5 font-display text-sm font-bold text-primary-foreground hover:bg-primary/90 transition-all shadow-md shadow-primary/20"
                  >
                    Proceed to Booking ({formatINR(service.price)}) →
                  </Link>
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="rounded-xl border border-border/80 bg-surface/50 p-6 text-xs space-y-3">
                <div className="font-display font-semibold text-foreground flex items-center gap-2">
                  <Clock className="size-4 text-primary" /> Delivery Cadence
                </div>
                <p className="text-muted-foreground">
                  Our sprint model runs with weekly staging previews and open Slack/Teams sync. No black-box development.
                </p>
              </div>
            </Reveal>
          </aside>
        </div>
      </section>

      {/* ── 5. Delivery Process / Methodology ── */}
      {service.process && service.process.length > 0 && (
        <section className="hairline-t bg-card/40 py-20 border-y border-border">
          <div className="container-x">
            <Reveal>
              <Eyebrow>Delivery Methodology</Eyebrow>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
                How we engineer this service.
              </h2>
              <p className="mt-2 text-base text-muted-foreground max-w-2xl">
                A predictable four-stage execution lifecycle from initial scoping to production handover.
              </p>
            </Reveal>

            <div className="mt-14 grid gap-8 md:grid-cols-4">
              {service.process.map((step, i) => (
                <Reveal key={step.step} delay={i * 0.08}>
                  <div className="relative flex flex-col justify-between h-full rounded-xl border border-border bg-background p-6">
                    <div>
                      <span className="font-mono text-xs font-bold text-primary">
                        Phase {step.step}
                      </span>
                      <h3 className="mt-3 font-display text-base font-bold text-foreground">
                        {step.title}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── 6. Discipline FAQs ── */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="container-x py-20">
          <Reveal>
            <Eyebrow>Questions & Details</Eyebrow>
            <h2 className="mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl text-foreground">
              Frequently asked about {service.title}.
            </h2>
          </Reveal>

          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {service.faqs.map((faq, i) => (
              <Reveal key={faq.question} delay={i * 0.05}>
                <div className="h-full rounded-xl border border-border bg-card/60 p-6">
                  <div className="flex items-center gap-2 text-primary font-mono text-xs font-semibold mb-3">
                    <HelpCircle className="size-4" /> FAQ
                  </div>
                  <h3 className="font-display text-sm font-bold text-foreground">
                    {faq.question}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>
      )}

      {/* ── 7. Related Services ── */}
      <section className="hairline-t container-x py-20">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Eyebrow>Related disciplines</Eyebrow>
            <h3 className="mt-2 text-2xl font-bold text-foreground">Other engineering services</h3>
          </div>
          <Link
            to="/services"
            className="font-mono text-xs font-semibold text-primary hover:underline flex items-center gap-1"
          >
            All 10 services →
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-3">
          {others.map((s) => (
            <Link
              key={s.slug}
              to="/services/$slug"
              params={{ slug: s.slug }}
              className="group rounded-xl border border-border bg-card/40 p-6 transition-all hover:border-primary/50 hover:bg-surface flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className="font-display text-lg font-bold group-hover:text-primary transition-colors">
                    {s.title}
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-primary" />
                </div>
                <p className="mt-2 text-xs text-muted-foreground line-clamp-2">{s.short}</p>
              </div>

              <div className="mt-5 flex items-center justify-between border-t border-border/40 pt-3">
                <span className="font-mono text-xs font-bold text-primary">
                  {formatINR(s.price)}
                </span>
                <span className="font-mono text-[10px] text-muted-foreground">
                  {s.timeline}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <FinalCta />
    </>
  );
}
