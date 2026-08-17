import { createFileRoute } from "@tanstack/react-router";

import { faqs } from "@/data/site";
import { PageHeader } from "@/components/site/PageHeader";
import { FinalCta } from "@/components/site/FinalCta";
import { Reveal } from "@/components/site/motion-primitives";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/faq")({
  head: () => ({
    meta: [
      { title: "FAQ — Visionex Media Services" },
      {
        name: "description",
        content:
          "Answers to common questions about how Visionex scopes, delivers and hands over engineering engagements.",
      },
    ],
  }),
  component: FaqPage,
});

function FaqPage() {
  return (
    <>
      <PageHeader
        eyebrow="FAQ"
        title="Questions we hear before the first call."
        lead="If your question isn't answered here, the fastest path is a direct conversation — reach out and we'll respond within one business day."
      />

      <div className="container-x pb-28">
        <Reveal>
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map((f, i) => (
              <AccordionItem key={f.question} value={`item-${i}`} className="border-border py-2">
                <AccordionTrigger className="py-6 text-left font-display text-lg font-bold hover:no-underline md:text-xl">
                  {f.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-3xl pb-6 text-base leading-relaxed text-muted-foreground">
                  {f.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>

      <FinalCta />
    </>
  );
}
