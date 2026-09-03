import { createFileRoute } from "@tanstack/react-router";

import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund & Cancellation Policy — Visionex Media Private Limited" },
      {
        name: "description",
        content:
          "Refund and cancellation policy for domestic and international engagements with Visionex Media Private Limited.",
      },
    ],
  }),
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Refund & Cancellation Policy"
      intro="This policy explains how cancellations and refunds are handled for engagements with Visionex Media Private Limited, for both domestic (India) and international clients."
      sections={[
        {
          id: "scope",
          heading: "Scope",
          body: [
            "This policy applies to all services booked through this website's checkout, including one-time project packages and custom-quoted engagements, for clients located in India (domestic) and outside India (international).",
          ],
        },
        {
          id: "cancellation-before-start",
          heading: "Cancellation before work begins",
          body: [
            "You may cancel an order at no charge any time before we begin work on the engagement (i.e. before discovery, design or development activity has started). Cancellation requests must be sent in writing to our support email using the order or invoice reference.",
            "Where payment has already been made, a full refund of the amount paid, less any payment-gateway or currency-conversion charges actually incurred, will be issued to the original payment method.",
          ],
        },
        {
          id: "cancellation-after-start",
          heading: "Cancellation after work has begun",
          body: [
            "Once work has commenced, cancellation requests are assessed against the effort and resources already committed to the engagement. Amounts corresponding to work already completed, and any non-recoverable third-party costs incurred on your behalf, are non-refundable.",
            "Any remaining, unearned portion of the amount paid will be refunded within 14 business days of the cancellation being confirmed in writing.",
          ],
        },
        {
          id: "domestic-refunds",
          heading: "Domestic refunds (India)",
          body: [
            "Approved refunds for domestic clients are processed to the original payment method (card, UPI or net banking) and typically reflect within 7–10 business days, depending on the issuing bank or payment provider.",
          ],
        },
        {
          id: "international-refunds",
          heading: "International refunds",
          body: [
            "Approved refunds for international clients are processed via the original payment method or wire transfer. International refunds may take 10–21 business days depending on the receiving bank, and any bank transfer fees, intermediary charges or currency-conversion losses are borne by the client.",
          ],
        },
        {
          id: "non-refundable-items",
          heading: "Non-refundable items",
          body: [
            "Third-party costs already incurred on your behalf (domain names, licences, hosting, API credits, subscriptions or similar), GST or other statutory charges already remitted, and work already delivered and accepted are non-refundable.",
          ],
        },
        {
          id: "how-to-request",
          heading: "How to request a cancellation or refund",
          body: [
            "Email us at ind.visionmedia@gmail.com with your order reference, the reason for the request, and your preferred refund method. We aim to acknowledge every request within 2 business days and resolve it within 14 business days.",
          ],
        },
        {
          id: "contact",
          heading: "Questions",
          body: [
            "For questions about this policy, contact us at ind.visionmedia@gmail.com or call +91 7304854196.",
          ],
        },
      ]}
    />
  );
}
