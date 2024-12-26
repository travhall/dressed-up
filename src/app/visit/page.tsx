// src/app/visit/page.tsx
import type { Metadata } from "next";
import VisitHero from "./components/hero";
import VisitOptions from "./components/options";
import PrepGuide from "./components/prep-guide";
import Location from "./components/location";

export const metadata: Metadata = {
  title: "Plan Your Visit | Dressed Up",
  description:
    "Schedule a private appointment or visit during open hours. One-on-one service for your special occasion dress shopping.",
};

export default function VisitPage() {
  return (
    <>
      <VisitHero />
      <VisitOptions />
      <PrepGuide />
      <Location />
    </>
  );
}
