import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowUpRight,
  Landmark,
  HeartPulse,
  Truck,
  ShoppingBag,
  Factory,
  Building2,
  Zap,
  Briefcase,
  type LucideIcon,
} from "lucide-react";

import ecosystemImg from "@/assets/ecosystem.jpg";
import dashboardImg from "@/assets/case-dashboard.jpg";
import infraImg from "@/assets/infrastructure.jpg";
import securityImg from "@/assets/security.jpg";
import softwareImg from "@/assets/software-engineering.jpg";
import { caseStudies, ecosystem, industries, whyVisionex } from "@/data/site";
import { Hero } from "@/components/home/Hero";
import { Methodology } from "@/components/home/Methodology";
import { ServicesInteractive } from "@/components/home/ServicesInteractive";
import { FinalCta } from "@/components/site/FinalCta";
import { Eyebrow } from "@/components/site/primitives";
import { Reveal, WordReveal } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/")({
  component: Index,
});

const caseImages = {
  dashboard: dashboardImg,
  infrastructure: infraImg,
  security: securityImg,
  software: softwareImg,
};

const industryIcons: LucideIcon[] = [
  Landmark,
  HeartPulse,
  Truck,
  ShoppingBag,
  Factory,
  Building2,
  Zap,
  Briefcase,
];

function Philosophy() {
  return (
    <section className="hairline-t relative py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <Eyebrow>Philosophy</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <p className="mt-8 max-w-4xl text-[clamp(1.75rem,4.2vw,3.25rem)] font-medium leading-[1.25] tracking-tight">
            We treat software as{" "}
            <span className="text-gradient-accent font-bold">infrastructure</span>, not output.
            Every system we build is judged by how it behaves five years in — under load, under
            change, and under the people who inherit it after us.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function Ecosystem() {
  return (
    <section className="hairline-t relative overflow-hidden py-24 md:py-32">
      <div className="container-x">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <Reveal className="lg:col-span-6">
            <Eyebrow>Technology Ecosystem</Eyebrow>
            <h2 className="mt-6 text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1]">
              One coherent stack, end to end.
            </h2>
          </Reveal>
          <Reveal delay={0.08} className="lg:col-span-5 lg:col-start-8">
            <p className="text-base leading-relaxed text-muted-foreground">
              Frontend to infrastructure, chosen for fit rather than fashion — and documented so
              your team can operate every layer.
            </p>
            <Link
              to="/technology"
              className="mt-5 inline-flex items-center gap-2 font-display text-sm font-semibold text-primary"
            >
              Explore the stack
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>

        {/* Layered "deck" — each row cascades right, echoing a physical stack of sheets. */}
        <div className="relative mt-16">
          {ecosystem.map((layer, i) => (
            <Reveal key={layer.layer} delay={Math.min(i * 0.05, 0.28)}>
              <div
                className="group relative -mt-px flex flex-col gap-4 border border-border bg-card/95 p-6 backdrop-blur-sm transition-all duration-300 hover:z-20 hover:-translate-y-0.5 hover:border-primary/50 hover:shadow-xl md:flex-row md:items-center md:gap-10 md:p-7"
                style={{
                  marginLeft: `clamp(0px, ${i * 3}vw, ${i * 34}px)`,
                  zIndex: ecosystem.length - i,
                }}
              >
                <div className="flex items-baseline gap-4 md:w-52 md:shrink-0">
                  <span className="font-mono text-[11px] tracking-widest text-primary/80">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="font-display text-lg font-bold tracking-tight transition-colors group-hover:text-primary md:text-xl">
                    {layer.layer}
                  </h3>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <li
                      key={item}
                      className="rounded-sm border border-border bg-surface px-2.5 py-1 font-mono text-[11px] tracking-wide text-muted-foreground"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="relative mt-16 aspect-21/9 overflow-hidden border border-border bg-surface">
            <img
              src={ecosystemImg}
              alt=""
              aria-hidden
              loading="lazy"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/5 to-transparent" />
            <div className="absolute inset-x-0 bottom-0 p-7">
              <p className="eyebrow text-white/70">Full stack, one system</p>
              <p className="mt-2 max-w-md text-sm leading-relaxed text-white/80">
                Every layer above is chosen to work together — not assembled from whatever's
                trending this quarter.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

function Industries() {
  return (
    <section className="hairline-t relative overflow-hidden py-24 md:py-32">
      <div
        className="pointer-events-none absolute -top-32 right-0 h-96 w-96 rounded-full bg-primary/10 blur-[130px]"
        aria-hidden
      />
      <div className="container-x relative">
        <Reveal>
          <Eyebrow>Industries</Eyebrow>
          <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1]">
            Domains where the constraints are real.
          </h2>
        </Reveal>
        <ol className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {industries.map((ind, i) => {
            const Icon = industryIcons[i % industryIcons.length] ?? Briefcase;
            return (
              <Reveal key={ind.name} as="li" delay={Math.min(i * 0.03, 0.24)}>
                <div className="group relative h-full border border-border bg-surface p-7 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card">
                  <div className="flex items-center justify-between">
                    <Icon className="size-6 text-primary transition-transform duration-300 group-hover:scale-110" />
                    <span className="font-mono text-[11px] tracking-widest text-muted-foreground">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-6 font-display text-lg font-bold leading-tight">{ind.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{ind.note}</p>
                  <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
                </div>
              </Reveal>
            );
          })}
        </ol>
      </div>
    </section>
  );
}

function FeaturedWork() {
  return (
    <section className="hairline-t relative py-24 md:py-32">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <Reveal>
            <Eyebrow>Featured Work</Eyebrow>
            <h2 className="mt-6 max-w-2xl text-[clamp(2rem,4.5vw,3.75rem)] font-extrabold leading-[1]">
              Engagement shapes, not slide decks.
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Link
              to="/work"
              className="group inline-flex items-center gap-2 font-display text-sm font-semibold text-primary"
            >
              All case studies
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {caseStudies.slice(0, 4).map((c, i) => (
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
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyVisionex() {
  return (
    <section className="hairline-t relative py-24 md:py-32">
      <div className="container-x">
        <Reveal>
          <Eyebrow>Why Visionex</Eyebrow>
          <h2 className="mt-6 max-w-3xl text-[clamp(2rem,4.5vw,3.5rem)] font-extrabold leading-[1]">
            <WordReveal text="Judgement, ownership and engineering discipline." delay={0.05} />
          </h2>
        </Reveal>
        <div className="mt-16 grid gap-x-10 gap-y-14 sm:grid-cols-2">
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
      </div>
    </section>
  );
}

function Index() {
  return (
    <>
      <Hero />
      <Philosophy />
      <ServicesInteractive />
      <Methodology />
      <Ecosystem />
      <Industries />
      <FeaturedWork />
      <WhyVisionex />
      <FinalCta />
    </>
  );
}
