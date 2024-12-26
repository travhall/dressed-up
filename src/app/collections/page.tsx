// src/app/collections/page.tsx
import type { Metadata } from "next";
import CollectionsHero from "./components/hero";
import CollectionsGallery from "./components/gallery";

export const metadata: Metadata = {
  title: "Our Collections | Dressed Up",
  description:
    "Browse our curated collection of special occasion dresses, including mother of the bride, military ball, and formal wear.",
};

export default function CollectionsPage() {
  return (
    <>
      <CollectionsHero />
      <CollectionsGallery />
    </>
  );
}
