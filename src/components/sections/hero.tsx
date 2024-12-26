"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SITE_IMAGES } from "@/lib/media/images";

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-surface-primary flex items-center">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center py-36 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="display-heading text-display-lg lg:text-display-2xl mb-6">
            Dress Confidently for Life&rsquo;s Most Memorable Moments
          </h1>
          <p className="text-content-secondary text-body-lg mb-8">
            Discover your perfect dress with our personalized styling
            experience. From military balls to mother of the bride, we help you
            shine on your special day.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">Book Private Styling</Button>
            <Button variant="outline" size="lg">
              View Collections
            </Button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
            <Image
              src={SITE_IMAGES.hero.src}
              alt={SITE_IMAGES.hero.alt}
              width={SITE_IMAGES.hero.width}
              height={SITE_IMAGES.hero.height}
              priority
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
