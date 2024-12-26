// src/app/story/page.tsx
import type { Metadata } from "next";
import StoryHero from "./components/hero";
import StoryContent from "./components/content";
import StoryCTA from "./components/cta";

export const metadata: Metadata = {
  title: "Our Story | Dressed Up",
  description:
    "Discover how Dressed Up provides personalized service for life's special moments through our curated collections and expert styling.",
};

export default function StoryPage() {
  return (
    <>
      <StoryHero />
      <StoryContent />
      <StoryCTA />
    </>
  );
}
