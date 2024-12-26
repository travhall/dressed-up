// src/app/story/components/content.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const ABOUT_IMAGE = {
  src: "/images/about-boutique.jpg",
  alt: "Inside our boutique",
  width: 800,
  height: 600,
};

const EXPERIENCE_POINTS = [
  {
    title: "Personal Service",
    description: "One-on-one attention from expert stylists",
  },
  {
    title: "Quality Selection",
    description: "Carefully curated collections for every occasion",
  },
  {
    title: "Perfect Fit",
    description: "Expert sizing and alterations guidance",
  },
];

export default function StoryContent() {
  return (
    <section className="py-20 bg-surface-secondary">
      <div className="container mx-auto px-4">
        <div className="card-base mb-16">
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="display-heading text-display-lg mb-6">
                Welcome to Dressed Up
              </h2>
              <div className="space-y-4 text-content-secondary">
                <p>
                  At Dressed Up, we believe every special occasion deserves the
                  perfect dress. Our boutique was founded with a simple mission:
                  to provide personalized service and stunning collections for
                  life&lsquo;s most memorable moments.
                </p>
                <p>
                  Whether you&lsquo;re celebrating as the mother of the bride,
                  attending a military ball, or preparing for any formal
                  occasion, our expert stylists are here to help you find the
                  perfect dress that makes you feel confident and beautiful.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-[4/3] rounded-lg overflow-hidden"
            >
              <Image
                src={ABOUT_IMAGE.src}
                alt={ABOUT_IMAGE.alt}
                width={ABOUT_IMAGE.width}
                height={ABOUT_IMAGE.height}
                className="object-cover"
              />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="display-heading text-display-lg mb-12">
              The Dressed Up Experience
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {EXPERIENCE_POINTS.map((point, index) => (
                <motion.div
                  key={point.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                >
                  <h3 className="text-display-base mb-2">{point.title}</h3>
                  <p className="text-content-secondary">{point.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
