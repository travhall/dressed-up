// src/app/page.tsx
import Hero from "@/components/sections/hero";
import Collections from "@/components/sections/collections";
import Visit from "@/components/sections/visit";
import Contact from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <Collections />
      <Visit />
      <Contact />
    </>
  );
}
