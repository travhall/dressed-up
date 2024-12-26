// src/app/story/page.tsx
import PageHero from "@/components/ui/page-hero";
import StoryContent from "./components/content";
import StoryCTA from "./components/cta";

export default function StoryPage() {
  return (
    <>
      <PageHero
        title="Our Story"
        subtitle="Personal service for life's special moments"
      />
      <StoryContent />
      <StoryCTA />
    </>
  );
}
