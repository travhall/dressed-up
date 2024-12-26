// src/app/contact/page.tsx
import type { Metadata } from "next";
import ContactHero from "./components/hero";
import ContactForm from "./components/form";
import QuickContact from "./components/quick-contact";

export const metadata: Metadata = {
  title: "Get In Touch | Dressed Up",
  description:
    "Contact us about your special occasion dress needs. Book appointments or ask questions about our collections.",
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
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
