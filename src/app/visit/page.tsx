// src/app/visit/page.tsx
import PageHero from "@/components/ui/page-hero";
import { Button } from "@/components/ui/button";
import VisitOptions from "./components/options";
import PrepGuide from "./components/prep-guide";
import Location from "./components/location";

export default function VisitPage() {
  return (
    <>
      <PageHero
        title="Plan Your Visit"
        subtitle="Choose your shopping experience"
      >
        <Button size="lg">Book Private Appointment</Button>
      </PageHero>
      <VisitOptions />
      <PrepGuide />
      <Location />
    </>
  );
}
