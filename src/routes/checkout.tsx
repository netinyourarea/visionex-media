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

  // Pre-select service safely (one service per checkout)
  useEffect(() => {
    if (serviceSlug) {
      const primarySlug = serviceSlug.includes(",")
        ? serviceSlug.split(",")[0].trim()
        : serviceSlug.trim();
      selectServiceBySlug(primarySlug);
    }
  }, [serviceSlug]);

  return (
    <>
      <PageHeader
        eyebrow="Secure Booking"
        title="Book your engineering service."
        lead="Select your engineering service, enter your billing details, and confirm your booking with instant corporate invoicing. (One service per checkout booking)."
      />

      <div className="container-x pb-28">
        <CheckoutForm />
      </div>

      <CheckoutSuccessModal />

      <FinalCta />
    </>
  );
}
