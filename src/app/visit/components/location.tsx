// src/app/visit/components/location.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { businessInfo } from "@/lib/config/contact";

export default function Location() {
  return (
    <section className="py-20 bg-surface-secondary" id="location">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          <div className="bg-surface-tertiary rounded-lg h-64" />
          <div>
            <h3 className="text-display-base mb-4">Location</h3>
            <address className="text-content-secondary not-italic mb-8">
              {businessInfo.address.street}
              <br />
              {businessInfo.address.city}, {businessInfo.address.state}{" "}
              {businessInfo.address.zip}
            </address>
            <Button
              onClick={() =>
                window.open(businessInfo.address.googleMapsUrl, "_blank")
              }
            >
              Get Directions
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
