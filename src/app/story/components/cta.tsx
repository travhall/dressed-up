// src/app/story/components/cta.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function StoryCTA() {
  return (
    <section className="py-20 bg-surface-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="display-heading text-display-lg mb-6">
            Ready to Find Your Perfect Dress?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/collections">
              <Button size="lg">View Collections</Button>
            </Link>
            <Link href="/visit">
              <Button variant="outline" size="lg">
                Plan Your Visit
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
