import { createFileRoute, useSearch } from "@tanstack/react-router";
import { useEffect } from "react";
import { PageHeader } from "@/components/site/PageHeader";
import { CheckoutForm } from "@/components/checkout/CheckoutForm";
import { CheckoutSuccessModal } from "@/components/checkout/CheckoutSuccessModal";
import { useCheckout } from "@/context/CheckoutContext";
import { FinalCta } from "@/components/site/FinalCta";

type CheckoutSearchParams = {
  service?: string;
};

export const Route = createFileRoute("/checkout")({
  validateSearch: (search: Record<string, unknown>): CheckoutSearchParams => {
    return {
      service: typeof search.service === "string" ? search.service : undefined,
    };
  },
  head: () => ({
    meta: [
      { title: "Checkout & Booking — Visionex Media Private Limited" },
      {
        name: "description",
        content:
          "Secure engineering service booking and corporate invoicing for Visionex IT services.",
      },
    ],
  }),
  component: CheckoutPage,
});

function CheckoutPage() {
  const { service: serviceSlug } = useSearch({ from: "/checkout" });
  const { selectServiceBySlug, selectServices } = useCheckout();

  // Pre-select service or solution track services safely without duplicate toggling
  useEffect(() => {
    if (serviceSlug) {
      if (serviceSlug.includes(",")) {
        const slugs = serviceSlug.split(",").map((s) => s.trim());
        selectServices(slugs);
      } else {
        selectServiceBySlug(serviceSlug);
      }
    }
  }, [serviceSlug]);

  return (
    <>
      <PageHeader
        eyebrow="Secure Booking"
        title="Book your engineering services."
        lead="Select one or more services, enter your billing details, and confirm your booking with instant corporate invoicing."
      />

      <div className="container-x pb-28">
        <CheckoutForm />
      </div>

      <CheckoutSuccessModal />

      <FinalCta />
    </>
  );
}
