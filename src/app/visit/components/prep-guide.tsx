// src/app/visit/components/prep-guide.tsx
"use client";

import { motion } from "framer-motion";
import { Ruler, MessageCircle, CalendarCheck, ShoppingBag } from "lucide-react";

const PREP_STEPS = [
  {
    title: "Know Your Measurements",
    description:
      "Current dress size, bust, waist, and hip measurements. Don't worry if you're not sure - we can help measure during your visit.",
    icon: Ruler,
  },
  {
    title: "Gather Inspiration",
    description:
      "Save photos of styles you like, note preferred colors and any specific coverage needs. Consider your event's dress code requirements.",
    icon: MessageCircle,
  },
  {
    title: "Event Details",
    description:
      "Your event date, any dress code requirements, and timeline for alterations. This helps us ensure everything is perfect for your special day.",
    icon: CalendarCheck,
  },
  {
    title: "Come Prepared",
    description:
      "Wear neutral undergarments and bring shoes similar to what you'll wear. Feel free to bring 1-2 guests to help you decide.",
    icon: ShoppingBag,
  },
];

export default function PrepGuide() {
  return (
    <section className="py-20 bg-surface-secondary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="display-heading text-display-lg mb-4">
            Prepare for Your Visit
          </h2>
          <p className="text-content-secondary max-w-2xl mx-auto">
            Make the most of your shopping experience with these helpful tips
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-8">
          {PREP_STEPS.map((step) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="card-base bg-surface-primary p-6"
            >
              <step.icon className="h-8 w-8 mb-4 text-ui-button" />
              <h3 className="text-display-base mb-2">{step.title}</h3>
              <p className="text-content-secondary">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
