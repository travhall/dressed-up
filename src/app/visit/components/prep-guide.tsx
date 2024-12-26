// src/app/visit/components/prep-guide.tsx
"use client";

import { motion } from "framer-motion";
import { Ruler, Image as ImageIcon, Calendar } from "lucide-react";

const PREP_STEPS = [
  {
    title: "Measurements",
    description: "Basic measurements helpful",
    icon: Ruler,
  },
  {
    title: "Inspiration",
    description: "Bring style preferences",
    icon: ImageIcon,
  },
  {
    title: "Timeline",
    description: "Event date information",
    icon: Calendar,
  },
];

export default function PrepGuide() {
  return (
    <section className="py-20 bg-surface-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="display-heading text-display-lg mb-12">
            Prepare for Your Visit
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {PREP_STEPS.map((step) => (
              <div key={step.title} className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-surface-secondary mb-4">
                  <step.icon className="h-8 w-8 text-ui-button" />
                </div>
                <h3 className="text-display-base mb-2">{step.title}</h3>
                <p className="text-content-secondary">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
