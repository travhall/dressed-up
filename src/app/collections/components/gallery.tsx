"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SITE_IMAGES } from "@/lib/media/images";
import Image from "next/image";

type Category = "all" | "mother-bride" | "military-ball" | "special-occasion";

const FILTERS = [
  { id: "all", label: "All Collections" },
  { id: "mother-bride", label: "Mother of Bride/Groom" },
  { id: "military-ball", label: "Military Ball" },
  { id: "special-occasion", label: "Special Occasion" },
] as const;

const PHOTOS = [
  {
    ...SITE_IMAGES.collections.motherOfBride,
    category: "mother-bride",
  },
  {
    ...SITE_IMAGES.collections.militaryBall,
    category: "military-ball",
  },
  {
    ...SITE_IMAGES.collections.specialOccasion,
    category: "special-occasion",
  },
];

export default function CollectionsGallery() {
  const [activeFilter, setActiveFilter] = useState<Category>("all");

  const filteredPhotos =
    activeFilter === "all"
      ? PHOTOS
      : PHOTOS.filter((photo) => photo.category === activeFilter);

  return (
    <section className="py-20 bg-surface-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {FILTERS.map((filter) => (
              <Button
                key={filter.id}
                variant={activeFilter === filter.id ? "primary" : "secondary"}
                onClick={() => setActiveFilter(filter.id as Category)}
              >
                {filter.label}
              </Button>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhotos.map((photo) => (
              <div
                key={photo.src}
                className="aspect-[4/5] relative overflow-hidden rounded-lg"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
