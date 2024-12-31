// src/app/visit/page.tsx
import PageHero from "@/components/ui/page-hero";
import VisitOptions from "@/components/sections/visit"; // Using the shared component
import PrepGuide from "./components/prep-guide";
import WhatToExpect from "./components/what-to-expect";
import Location from "@/components/ui/location";

export default function VisitPage() {
  return (
    <>
      <PageHero
        title="Plan Your Visit"
        subtitle="Choose your shopping experience"
      />
      <VisitOptions />
      <WhatToExpect />
      <PrepGuide />
      <Location />
    </>
  );
}
