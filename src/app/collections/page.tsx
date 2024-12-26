// src/app/collections/page.tsx
import PageHero from "@/components/ui/page-hero";
import CollectionsGallery from "./components/gallery";

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        title="Our Collections"
        subtitle="Special occasion dresses from $50-$500"
      />
      <CollectionsGallery />
    </>
  );
}
