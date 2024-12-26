// src/components/sections/visit.tsx
"use client";

import { motion } from "framer-motion";
import { Clock, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { businessInfo } from "@/lib/config/contact";
import type { LucideIcon } from "lucide-react";

interface VisitOption {
  title: string;
  description: string;
  icon: LucideIcon;
  details: {
    text: string;
    emphasis?: boolean;
  }[];
}

const regularHours = businessInfo.hours.regular[0];

const VISIT_OPTIONS: VisitOption[] = [
  {
    title: "Open Shopping Hours",
    description: "Browse our collection during regular hours",
    icon: Clock,
    details: [
      { text: regularHours.days, emphasis: true },
      { text: regularHours.hours, emphasis: true },
      { text: "Walk-ins welcome" },
    ],
  },
  {
    title: "Private Appointments",
    description: "One-on-one personalized shopping experience",
    icon: Calendar,
    details: [
      { text: "60-minute sessions" },
      { text: "Dedicated stylist" },
      { text: "Flexible scheduling" },
    ],
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, x: -20 },
  show: { opacity: 1, x: 0 },
};

export default function Visit() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="display-heading text-display-xl mb-4">
            Plan Your Visit
          </h2>
          <p className="text-content-secondary text-body-lg">
            Choose your shopping experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {VISIT_OPTIONS.map((option) => (
            <motion.div
              key={option.title}
              whileHover={{ y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-base transition-shadow hover:shadow-lg"
            >
              <option.icon className="h-8 w-8 mb-6 text-ui-button" />
              <h3 className="display-heading text-display-base mb-4">
                {option.title}
              </h3>
              <p className="text-content-secondary mb-6">
                {option.description}
              </p>
              <motion.ul
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
                className="space-y-2 mb-8"
              >
                {option.details.map((detail) => (
                  <motion.li
                    key={detail.text}
                    variants={item}
                    className={`text-content-secondary ${
                      detail.emphasis ? "font-bold" : ""
                    }`}
                  >
                    {detail.text}
                  </motion.li>
                ))}
              </motion.ul>
              <Button>
                {option.title === "Private Appointments"
                  ? "Book Now"
                  : "Learn More"}
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
