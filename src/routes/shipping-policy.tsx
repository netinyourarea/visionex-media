import { createFileRoute } from "@tanstack/react-router";

import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/shipping-policy")({
  head: () => ({
    meta: [
      { title: "Shipping & Delivery Policy — Visionex Media Private Limited" },
      {
        name: "description",
        content:
          "How Visionex Media Private Limited delivers digital services and project deliverables to clients.",
      },
    ],
  }),
  component: ShippingPolicyPage,
});

function ShippingPolicyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Shipping & Delivery Policy"
      intro="Visionex Media Private Limited provides IT and technology services. No physical goods are shipped; all deliverables are provided digitally."
      sections={[
        {
          id: "nature-of-delivery",
          heading: "Nature of delivery",
          body: [
            "All services are delivered electronically, including source code repositories, deployed applications, documentation, reports and access credentials. We do not ship physical products.",
          ],
        },
        {
          id: "delivery-timelines",
          heading: "Delivery timelines",
          body: [
            "The expected timeline for each service is shown on its service page and confirmed in your order or invoice. Timelines begin once payment is received and the required inputs, access and approvals have been provided by you.",
          ],
        },
        {
          id: "delivery-method",
          heading: "Method of delivery",
          body: [
            "Deliverables are shared by email, secure file transfer, repository hand-over or deployment to your environment, as agreed for the engagement.",
          ],
        },
        {
          id: "delays",
          heading: "Delays",
          body: [
            "Delays caused by late client feedback, missing access or changes in scope may extend the timeline. We will notify you promptly by email if a delivery date is expected to move.",
          ],
        },
        {
          id: "contact",
          heading: "Questions",
          body: [
            "For questions about delivery, contact us at ind.visionmedia@gmail.com or call +91 7304854196.",
          ],
        },
      ]}
    />
  );
}
