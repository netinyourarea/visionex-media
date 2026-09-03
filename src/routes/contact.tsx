import { createFileRoute } from "@tanstack/react-router";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { ArrowUpRight, Facebook, Instagram } from "lucide-react";
import { toast } from "sonner";

import { budgetRanges, company, projectTypes, social } from "@/data/site";
import { PageHeader } from "@/components/site/PageHeader";
import { Eyebrow } from "@/components/site/primitives";
import { Reveal } from "@/components/site/motion-primitives";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Visionex Media Private Limited" },
      {
        name: "description",
        content:
          "Start a technical conversation with Visionex — software, cloud, security and infrastructure engineering.",
      },
    ],
  }),
  component: ContactPage,
});

const inquirySchema = z.object({
  name: z.string().min(2, "Enter your full name."),
  company: z.string().min(2, "Enter your company name."),
  email: z.string().email("Enter a valid email address."),
  phone: z.string().optional(),
  projectType: z.string().min(1, "Select a project type."),
  budget: z.string().min(1, "Select a budget range."),
  message: z.string().min(20, "Tell us a bit more — at least 20 characters."),
});

type InquiryValues = z.infer<typeof inquirySchema>;

function InquiryForm() {
  const [submitted, setSubmitted] = useState(false);
  const form = useForm<InquiryValues>({
    resolver: zodResolver(inquirySchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      projectType: "",
      budget: "",
      message: "",
    },
  });

  function onSubmit(values: InquiryValues) {
    // PLACEHOLDER: wire to a real inquiry endpoint before publishing.
    console.info("Inquiry submitted", values);
    toast.success("Inquiry sent — we'll be in touch shortly.");
    setSubmitted(true);
    form.reset();
  }

  if (submitted) {
    return (
      <div className="border border-border p-10 text-center">
        <p className="eyebrow justify-center">Received</p>
        <h2 className="mt-5 font-display text-2xl font-bold">Thanks — we'll be in touch.</h2>
        <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
          A member of the Visionex team will respond within one business day.
        </p>
        <Button variant="outline" className="mt-8" onClick={() => setSubmitted(false)}>
          Send another inquiry
        </Button>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-8 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Jane Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company</FormLabel>
                <FormControl>
                  <Input placeholder="Acme Inc." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="jane@acme.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone (optional)</FormLabel>
                <FormControl>
                  <Input type="tel" placeholder="+1 (___) ___-____" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="projectType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Project type</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a project type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {projectTypes.map((t) => (
                      <SelectItem key={t} value={t}>
                        {t}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="budget"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budget range</FormLabel>
                <Select onValueChange={field.onChange} value={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a budget range" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    {budgetRanges.map((b) => (
                      <SelectItem key={b} value={b}>
                        {b}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project details</FormLabel>
              <FormControl>
                <Textarea
                  rows={6}
                  placeholder="Tell us about the system, the constraints, and what success looks like."
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          disabled={form.formState.isSubmitting}
          className="group inline-flex items-center gap-2.5 rounded-sm bg-primary px-6 py-6 font-display text-sm font-semibold tracking-tight text-primary-foreground hover:brightness-110"
        >
          Send inquiry
          <ArrowUpRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Button>
      </form>
    </Form>
  );
}

function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about the constraint that's hardest to solve."
        lead="Tell us about the system, the timeline and the budget you're working with — we'll respond with an honest read on scope before anything else."
      />

      <div className="container-x grid gap-16 pb-28 lg:grid-cols-12 lg:gap-20">
        <div className="lg:col-span-7">
          <Reveal>
            <InquiryForm />
          </Reveal>
        </div>

        <aside className="space-y-12 lg:col-span-4 lg:col-start-9">
          <Reveal delay={0.1}>
            <Eyebrow>Direct</Eyebrow>
            <dl className="mt-6 space-y-4 font-mono text-[13px] tracking-wide text-muted-foreground">
              <div>
                <dt className="text-foreground/60">Email</dt>
                <dd className="mt-1">{company.email}</dd>
              </div>
              <div>
                <dt className="text-foreground/60">Phone</dt>
                <dd className="mt-1">{company.phone}</dd>
              </div>
              <div>
                <dt className="text-foreground/60">Office</dt>
                <dd className="mt-1">{company.address}</dd>
              </div>
            </dl>
          </Reveal>
          <Reveal delay={0.16}>
            <div className="mt-6 flex items-center gap-4">
              <a
                href={social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visionex on Facebook"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Facebook className="h-5 w-5" strokeWidth={1.5} />
              </a>
              <a
                href={social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visionex on Instagram"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Instagram className="h-5 w-5" strokeWidth={1.5} />
              </a>
            </div>
          </Reveal>
        </aside>
      </div>

      <section className="hairline-t container-x py-24 md:py-32">
        <Eyebrow>What happens next</Eyebrow>
        <h2 className="mt-6 max-w-xl text-[clamp(1.75rem,4vw,3rem)] font-extrabold leading-[1.1]">
          From inquiry to first conversation.
        </h2>
        <div className="mt-14 grid gap-x-8 gap-y-12 border-t border-border pt-12 sm:grid-cols-3">
          {[
            {
              step: "01",
              title: "We review",
              body: "Your inquiry reaches an engineer, not a sales queue — reviewed against the discipline it needs.",
            },
            {
              step: "02",
              title: "We respond",
              body: "A direct reply within one business day, with clarifying questions if scope needs sharpening.",
            },
            {
              step: "03",
              title: "We scope",
              body: "A short call to confirm constraints, followed by a written direction on architecture and approach.",
            },
          ].map((s, i) => (
            <Reveal key={s.step} delay={Math.min(i * 0.06, 0.24)}>
              <span className="font-mono text-[11px] tracking-widest text-primary/80">
                {s.step}
              </span>
              <h3 className="mt-4 font-display text-lg font-bold">{s.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.body}</p>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
