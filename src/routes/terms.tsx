import { createFileRoute } from "@tanstack/react-router";

import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions — Visionex Media Pvt Ltd" },
      {
        name: "description",
        content:
          "The terms and conditions governing use of the Visionex Media Pvt Ltd website and engagements.",
      },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Terms & Conditions"
      intro="These terms govern use of this website and, at a high level, the framework under which engagements with Visionex Media Pvt Ltd are conducted. Individual engagements are additionally governed by a signed statement of work."
      sections={[
        {
          id: "acceptance",
          heading: "Acceptance of terms",
          body: [
            "By accessing this website you agree to be bound by these terms and conditions. If you do not agree with any part of these terms, please do not use this website.",
          ],
        },
        {
          id: "services",
          heading: "Services",
          body: [
            "Descriptions of services on this website are illustrative of our capabilities. Specific deliverables, timelines and pricing for an engagement are defined in a separate, signed statement of work.",
          ],
        },
        {
          id: "intellectual-property",
          heading: "Intellectual property",
          body: [
            "All content on this website, including text, graphics, logos and software, is the property of Visionex Media Pvt Ltd and protected by copyright. Intellectual property ownership for work delivered during an engagement is defined in the associated statement of work.",
          ],
        },
        {
          id: "limitation-of-liability",
          heading: "Limitation of liability",
          body: [
            "To the maximum extent permitted by applicable law, Visionex Media Pvt Ltd shall not be liable for any indirect, incidental, special, consequential or punitive damages arising from your use of this website or services, even if advised of the possibility of such damages.",
          ],
        },
        {
          id: "governing-law",
          heading: "Governing law",
          body: ["These terms are governed by the laws of India and the courts of Mumbai shall have exclusive jurisdiction."],
        },
        {
          id: "changes",
          heading: "Changes to these terms",
          body: [
            "We may update these terms from time to time. Your continued use of this website following the posting of revised terms means that you accept and agree to the changes.",
          ],
        },
      ]}
    />
  );
}
