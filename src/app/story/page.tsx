// src/app/story/page.tsx
import PageHero from "@/components/ui/page-hero";
import StoryContent from "./components/content";
import ExperienceSection from "./components/experience";
import ActionCTA from "@/components/ui/action-cta";

export default function StoryPage() {
  return (
    <>
      <PageHero
        title="The Dressed Up Story"
        subtitle="Personal service for life's special moments"
      />
      <StoryContent />
      <ExperienceSection />
      <ActionCTA
        title="Ready to Find Your Perfect Dress?"
        primaryAction={{ label: "View Collections", href: "/collections" }}
        secondaryAction={{ label: "Plan Your Visit", href: "/visit" }}
      />
    </>
  );
}
