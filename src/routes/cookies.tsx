import { createFileRoute } from "@tanstack/react-router";

import { LegalLayout } from "@/components/site/LegalLayout";

export const Route = createFileRoute("/cookies")({
  head: () => ({
    meta: [
      { title: "Cookie Policy — Visionex Media Pvt Ltd" },
      {
        name: "description",
        content:
          "How Visionex Media Pvt Ltd uses cookies and similar technologies on this website.",
      },
    ],
  }),
  component: CookiesPage,
});

function CookiesPage() {
  return (
    <LegalLayout
      eyebrow="Legal"
      title="Cookie Policy"
      intro="This policy explains how cookies and similar technologies are used on this website."
      sections={[
        {
          id: "what-are-cookies",
          heading: "What are cookies",
          body: [
            "Cookies are small text files stored on your device that help websites function and, where used, measure performance.",
          ],
        },
        {
          id: "cookies-we-use",
          heading: "Cookies we use",
          body: [
            "We currently use essential cookies required for website functionality. As our analytics and tooling infrastructure develops, we will update this list with a complete inventory of cookies, their purposes, and retention periods.",
          ],
        },
        {
          id: "managing-cookies",
          heading: "Managing cookies",
          body: [
            "You can control or disable cookies through your browser settings. Disabling essential cookies may affect site functionality and user experience.",
          ],
        },
        {
          id: "changes",
          heading: "Changes to this policy",
          body: [
            "We may update this policy as our use of cookies and tracking technologies changes. Continued use of this website constitutes acceptance of the updated policy.",
          ],
        },
      ]}
    />
  );
}
