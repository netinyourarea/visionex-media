import { createFileRoute } from "@tanstack/react-router";

import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer — Visionex Media Private Limited" },
      {
        name: "description",
        content:
          "Disclaimers covering the content, case studies and advice presented on the Visionex Media Private Limited website.",
      },
    ],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Disclaimer"
      intro="This page sets out disclaimers covering the content of this website, including case studies, technology descriptions and general guidance."
      sections={[
        {
          id: "general-information",
          heading: "General information only",
          body: [
            "Content on this website, including service and technology descriptions, is provided for general informational purposes and does not constitute professional or legal advice.",
          ],
        },
        {
          id: "case-studies",
          heading: "Case studies and results",
          body: [
            "Case studies presented on this website are illustrative of engagement shapes unless explicitly stated otherwise. Metrics, outcomes, client names and logos are not published without confirmed, permissioned data.",
          ],
        },
        {
          id: "no-warranty",
          heading: "No warranty",
          body: [
            "This website and all content provided are delivered on an 'as is' basis without warranties of any kind, express or implied. Visionex Media Private Limited disclaims all warranties including merchantability, fitness for a particular purpose, and non-infringement.",
          ],
        },
        {
          id: "third-party-links",
          heading: "Third-party links",
          body: [
            "This website may link to third-party sites. We are not responsible for the content or practices of external sites. Access to third-party sites is at your own risk.",
          ],
        },
        {
          id: "contact",
          heading: "Contact",
          body: ["Questions about this disclaimer can be directed to ind.visionmedia@gmail.com."],
        },
      ]}
    />
  );
}
