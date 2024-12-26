// src/components/ui/page-hero.tsx
"use client";

import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
}

export default function PageHero({ title, subtitle, children }: PageHeroProps) {
  return (
    <section className="relative min-h-[50vh] bg-surface-primary flex items-center">
      <div className="container mx-auto px-4 py-36 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-2xl"
        >
          <h1 className="display-heading text-display-lg lg:text-display-2xl mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-content-secondary text-body-lg mb-8">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>
      </div>
    </section>
  );
}
