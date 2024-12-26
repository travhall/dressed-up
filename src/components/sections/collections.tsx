"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SITE_IMAGES } from "@/lib/media/images";

const COLLECTIONS = [
  {
    title: "Mother of Bride/Groom",
    description: "Timeless elegance for the most important family moments",
    image: SITE_IMAGES.collections.motherOfBride,
    details: ["Sophisticated designs", "Sizes 0-24", "Personalized styling"],
  },
  {
    title: "Military Ball",
    description: "Stunning gowns that honor your service and style",
    image: SITE_IMAGES.collections.militaryBall,
    details: [
      "Formal military attire",
      "Dress blues compatible",
      "Tailored fit options",
    ],
  },
  {
    title: "Special Occasion",
    description: "Unforgettable looks for galas, weddings, and formal events",
    image: SITE_IMAGES.collections.specialOccasion,
    details: [
      "Cocktail & evening wear",
      "Designer collaborations",
      "Unique statement pieces",
    ],
  },
];

export default function Collections() {
  return (
    <section className="py-20 bg-surface-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="display-heading text-display-xl mb-4">
            Our Curated Collections
          </h2>
          <p className="text-content-secondary text-body-lg">
            Expertly crafted dresses for every special moment, priced $50-$500
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {COLLECTIONS.map((collection) => (
            <motion.div
              key={collection.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="group card-base overflow-hidden"
            >
              <div className="relative aspect-[4/5] bg-surface-tertiary overflow-hidden">
                <Image
                  src={collection.image.src}
                  alt={collection.image.alt}
                  width={collection.image.width}
                  height={collection.image.height}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="py-6">
                <h3 className="text-display-base font-bold mb-2">
                  {collection.title}
                </h3>
                <p className="text-content-secondary mb-4">
                  {collection.description}
                </p>
                <ul className="space-y-2">
                  {collection.details.map((detail) => (
                    <li
                      key={detail}
                      className="flex items-center text-content-secondary"
                    >
                      <svg
                        className="w-4 h-4 mr-2 text-ui-button"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
                      </svg>
                      {detail}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
