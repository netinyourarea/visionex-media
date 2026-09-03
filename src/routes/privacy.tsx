import { createFileRoute } from "@tanstack/react-router";

import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — Visionex Media Private Limited" },
      {
        name: "description",
        content: "How Visionex Media Private Limited collects, uses and protects personal data.",
      },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Privacy Policy"
      intro="This policy explains what personal data Visionex Media Private Limited collects, why, and how it is handled."
      sections={[
        {
          id: "information-we-collect",
          heading: "Information we collect",
          body: [
            "We collect information you provide directly, such as through our contact and inquiry forms — name, company, email, phone number, project details and budget range.",
            "We automatically collect certain technical information about your visit, including IP address, browser type, pages visited, and time spent on our site.",
          ],
        },
        {
          id: "how-we-use-information",
          heading: "How we use information",
          body: [
            "Information submitted through our forms is used to respond to inquiries, scope potential engagements and communicate about services.",
            "Technical information helps us improve our website performance and user experience.",
          ],
        },
        {
          id: "data-sharing",
          heading: "Data sharing and disclosure",
          body: [
            "We do not share personal data with third parties except as required by law or to provide services on your behalf, such as through hosting or email providers.",
          ],
        },
        {
          id: "data-retention",
          heading: "Data retention",
          body: [
            "We retain personal data for as long as necessary to fulfill the purposes for which it was collected or as required by law. Contact information is retained until you request deletion.",
          ],
        },
        {
          id: "your-rights",
          heading: "Your rights",
          body: [
            "Under applicable data protection laws, you have the right to access, correct, or delete your personal data. You may also have the right to data portability. To exercise these rights, please contact us at ind.visionmedia@gmail.com.",
          ],
        },
        {
          id: "contact",
          heading: "Contact",
          body: ["Questions about this policy can be directed to ind.visionmedia@gmail.com or call +91 7304854196."],
        },
      ]}
    />
  );
}
