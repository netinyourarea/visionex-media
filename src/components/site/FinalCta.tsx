import { CtaLink, Eyebrow } from "@/components/site/primitives";
import { Reveal } from "@/components/site/motion-primitives";

export function FinalCta({
  eyebrow = "Next step",
  heading = "Let's build what comes next.",
  body = "Bring us the constraint that's hardest to solve. We'll tell you how we'd architect it, what it takes, and whether we're the right team for it.",
}: {
  eyebrow?: string;
  heading?: string;
  body?: string;
}) {
  return (
    <section className="hairline-t relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.5]" aria-hidden />
      <div
        className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[70rem] -translate-x-1/2 rounded-[100%] bg-primary/12 blur-[120px]"
        aria-hidden
      />
      <div className="container-x relative py-28 md:py-40">
        <Reveal>
          <Eyebrow>{eyebrow}</Eyebrow>
        </Reveal>
        <Reveal delay={0.08}>
          <h2 className="mt-8 max-w-4xl text-[clamp(2.5rem,7vw,5.5rem)] font-extrabold leading-[0.95]">
            {heading}
          </h2>
        </Reveal>
        <div className="mt-10 flex flex-col gap-10 border-t border-border pt-10 md:flex-row md:items-end md:justify-between">
          <Reveal delay={0.12}>
            <p className="max-w-xl text-base leading-relaxed text-muted-foreground">{body}</p>
          </Reveal>
          <Reveal delay={0.18}>
            <div className="flex flex-wrap gap-3">
              <CtaLink to="/contact">Talk to Visionex</CtaLink>
              <CtaLink to="/services" variant="ghost">
                Explore Solutions
              </CtaLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
