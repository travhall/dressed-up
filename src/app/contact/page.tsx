// src/app/contact/page.tsx
import PageHero from "@/components/ui/page-hero";
import ContactForm from "./components/form";
import QuickContact from "./components/quick-contact";

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Start a Conversation"
        subtitle="We're here to help with your special occasion"
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
