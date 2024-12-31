// src/app/collections/page.tsx
import PageHero from "@/components/ui/page-hero";
import CollectionsGallery from "./components/gallery";
import ActionCTA from "@/components/ui/action-cta";

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        title="Our Curated Collections"
        subtitle="Expertly crafted dresses for every special moment, priced $50-$500"
      />
      <CollectionsGallery />
      <ActionCTA
        title="Ready to Try Something On?"
        primaryAction={{ label: "Plan Your Visit", href: "/visit" }}
        secondaryAction={{ label: "Contact Us", href: "/contact" }}
        className="mt-20"
      />
    </>
  );
}
