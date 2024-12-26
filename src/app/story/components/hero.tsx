// src/app/story/components/hero.tsx
"use client";

import { motion } from "framer-motion";

export default function StoryHero() {
  return (
    <section className="relative min-h-[50vh] bg-surface-primary flex items-center">
      <div className="container mx-auto px-4 py-36 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl"
        >
          <h1 className="display-heading text-display-lg lg:text-display-2xl mb-6">
            Our Story
          </h1>
          <p className="text-content-secondary text-body-lg">
            Personal service for life&lsquo;s special moments
          </p>
        </motion.div>
      </div>
    </section>
  );
}