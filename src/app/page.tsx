// src/app/page.tsx
import PageHero from "@/components/ui/page-hero";
import Collections from "@/components/sections/collections";
import Visit from "@/components/sections/visit";
import { ContactForm } from "@/components/ui/contact-form";
import QuickContact from "@/components/ui/quick-contact";
import { Button } from "@/components/ui/button";
import { SITE_IMAGES } from "@/lib/media/images";

export default function Home() {
  return (
    <>
      <PageHero
        title="Dress Confidently for Life's Most Memorable Moments"
        subtitle="Discover your perfect dress with our personalized styling experience. From military balls to mother of the bride, we help you shine on your special day."
        image={SITE_IMAGES.hero}
        layout="split"
      >
        <div className="flex flex-col sm:flex-row gap-4">
          <Button size="lg">Book Private Styling</Button>
          <Button variant="outline" size="lg">
            View Collections
          </Button>
        </div>
      </PageHero>
      <Collections />
      <Visit />
      <section className="py-20 bg-surface-secondary">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <ContactForm />
            <QuickContact />
          </div>
        </div>
      </section>
    </>
  );
}
