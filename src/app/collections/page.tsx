// src/app/collections/page.tsx
import PageHero from "@/components/ui/page-hero";
import Gallery from "./components/gallery";
import ActionCTA from "@/components/ui/action-cta";
import { GalleryImage } from "./components/types";

// Generate image data from your actual directory structure
const generateImages = (category: string, count: number): GalleryImage[] => {
  return Array(count)
    .fill(null)
    .map((_, i) => ({
      id: `${category}-${i + 1}`,
      src: `/gallery/${category}/image${i + 1}.jpg`,
      alt: `${category
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")} Dress ${i + 1}`,
      category,
      title: `${category
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")} Style ${i + 1}`,
    }));
};

const sampleImages: GalleryImage[] = [
  ...generateImages("mother-bride", 9),
  ...generateImages("military-ball", 9),
  ...generateImages("special-occasion", 9),
];

export default function CollectionsPage() {
  return (
    <>
      <PageHero
        title="Our Curated Collections"
        subtitle="Expertly crafted dresses for every special moment, priced $50-$500"
      />
      <Gallery images={sampleImages} />
      <ActionCTA
        title="Ready to Try Something On?"
        primaryAction={{ label: "Plan Your Visit", href: "/visit" }}
        secondaryAction={{ label: "Contact Us", href: "/contact" }}
        className="mt-20"
      />
    </>
  );
}
