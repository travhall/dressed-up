// src/app/story/components/experience.tsx
"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { SITE_IMAGES } from "@/lib/media/images";

const EXPERIENCE_POINTS = [
  {
    title: "Personal Service",
    heading: "One-on-one attention from expert stylists",
    description: [
      "Your journey with us is entirely personalized. Our experienced stylists take the time to understand your event's specific requirements, style preferences, and comfort level. During your visit, you'll have our undivided attention in a comfortable, private setting where you can try on dresses at your own pace.",
    ],
    image: SITE_IMAGES.experience.personalService,
  },
  {
    title: "Quality Selection",
    heading: "Carefully curated collections for every occasion",
    description: [
      "Our collection offers a range of styles from classic to contemporary, with high-quality construction and materials. Our collection evolves throughout the year, offering options for every budget ($50-$500) and varied sizes to suit different body types. We can also assist with special orders for specific colors or styles not currently in stock.",
    ],
    image: SITE_IMAGES.experience.qualitySelection,
  },
  {
    title: "Perfect Fit",
    heading: "Expert sizing and alterations guidance",
    description: [
      "We provide professional measurements, sizing guidance, and recommendations for undergarments and accessories. Our expertise ensures you'll not only look beautiful in your dress but feel comfortable and confident throughout your special occasion. We can also provide trusted alterations referrals when needed.",
    ],
    image: SITE_IMAGES.experience.perfectFit,
  },
];

export default function ExperienceSection() {
  return (
    <section className="py-20 bg-surface-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="display-heading text-display-lg mb-6">
            The Dressed Up Experience
          </h2>
          <p className="text-content-secondary max-w-2xl mx-auto">
            We&lsquo;ve crafted a unique shopping experience that combines
            personalized attention, carefully selected collections, and expert
            styling guidance. Every visit is tailored to your needs, whether
            you&lsquo;re shopping for a once-in-a-lifetime moment or a special
            celebration.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4">
          {EXPERIENCE_POINTS.map((point, index) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="card-base bg-surface-primary p-6"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-6">
                <Image
                  src={point.image.src}
                  alt={point.image.alt}
                  width={point.image.width}
                  height={point.image.height}
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <h3 className="text-display-md font-display mb-2">
                {point.title}
              </h3>
              <p className="text-content-primary font-medium italic mb-4">
                {point.heading}
              </p>
              <div className="space-y-4 text-content-secondary">
                {point.description.map((paragraph, i) => (
                  <p key={i} className="text-pretty">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
