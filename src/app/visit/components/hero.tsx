// src/app/visit/components/hero.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function VisitHero() {
  return (
    <section className="relative min-h-[50vh] bg-surface-primary flex items-center">
      <div className="container mx-auto px-4 py-36 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
        >
          <h1 className="display-heading text-display-lg lg:text-display-2xl mb-6">
            Plan Your Visit
          </h1>
          <p className="text-content-secondary text-body-lg mb-8">
            Choose your shopping experience
          </p>
          <Button size="lg">Book Private Appointment</Button>
        </motion.div>
      </div>
    </section>
  );
}
