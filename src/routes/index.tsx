import { createFileRoute } from "@tanstack/react-router";
import { HomePage } from "@/components/adorini/home-page";
import { business } from "@/lib/adorini-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Adorini Homes | Custom Homes, Renovations and Carpentry" },
      { name: "description", content: "Personalised custom home builds, renovations, extensions and quality carpentry in Port Macquarie and surrounding areas. Start your project with Adorini Homes." },
      { property: "og:title", content: "Adorini Homes | Your Vision. Our Foundation." },
      { property: "og:description", content: "Custom homes, renovations and quality carpentry. Built with care from concept to completion. Talk to Adorini Homes about your project." },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [{ type: "application/ld+json", children: JSON.stringify({ "@context": "https://schema.org", "@type": "GeneralContractor", name: business.name, telephone: "+61403256710", email: business.email, openingHours: "Mo-Fr 08:00-18:00", areaServed: "Port Macquarie and surrounding areas", sameAs: [business.instagram, business.facebook] }) }],
  }),
  component: HomePage,
});
