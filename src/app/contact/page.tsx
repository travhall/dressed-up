// src/app/contact/page.tsx
import PageHero from "@/components/ui/page-hero";
import { ContactForm } from "@/components/ui/contact-form";
import QuickContact from "@/components/ui/quick-contact";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Start a Conversation"
        subtitle="We're here to help you look your best for your special occasion"
      />
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
