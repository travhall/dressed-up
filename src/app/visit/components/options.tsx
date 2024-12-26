// src/app/visit/components/options.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Clock, Calendar } from "lucide-react";

const OPTIONS = [
  {
    title: "Open Shopping Hours",
    description: "Browse our collection during regular hours",
    icon: Clock,
    details: [
      { text: "Tuesday-Thursday", emphasis: true },
      { text: "10am-5pm", emphasis: true },
      { text: "No appointment needed" },
      { text: "First come, first served" },
    ],
    cta: "Get Directions",
  },
  {
    title: "Private Appointments",
    description: "One-on-one personalized shopping experience",
    icon: Calendar,
    details: [
      { text: "60-minute sessions" },
      { text: "Dedicated stylist" },
      { text: "One dressing room" },
      { text: "Flexible scheduling" },
    ],
    cta: "Book Now",
  },
];

export default function VisitOptions() {
  return (
    <section className="py-20 bg-surface-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {OPTIONS.map((option) => (
            <motion.div
              key={option.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-base"
            >
              <option.icon className="h-8 w-8 mb-6 text-ui-button" />
              <h3 className="text-display-base mb-4">{option.title}</h3>
              <p className="text-content-secondary mb-6">
                {option.description}
              </p>
              <ul className="space-y-2 mb-8">
                {option.details.map((detail) => (
                  <li
                    key={detail.text}
                    className={detail.emphasis ? "font-bold" : ""}
                  >
                    {detail.text}
                  </li>
                ))}
              </ul>
              <Button>{option.cta}</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
