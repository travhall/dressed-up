// src/app/visit/components/what-to-expect.tsx
"use client";

import { motion } from "framer-motion";
import { Sparkles, Users, Calculator, Check } from "lucide-react";

const STEPS = [
  {
    icon: Sparkles,
    title: "Style Consultation",
    description:
      "Your appointment begins with a detailed conversation about your event, style preferences, and specific needs. We'll discuss your vision, any dress code requirements, and budget considerations.",
  },
  {
    icon: Users,
    title: "Personalized Selection",
    description:
      "Based on our consultation, your dedicated stylist will curate a selection of dresses. You'll have our full attention and a private fitting room to try on each option at your own pace.",
  },
  {
    icon: Calculator,
    title: "Expert Fitting",
    description:
      "We'll help with sizing, suggest alterations if needed, and ensure you feel comfortable and confident. We can provide recommendations for undergarments and accessories to complete your look.",
  },
  {
    icon: Check,
    title: "Final Details",
    description:
      "Once you've found your perfect dress, we'll discuss next steps including alterations timeline, pickup or delivery, and any special care instructions to ensure you're ready for your event.",
  },
];

export default function WhatToExpect() {
  return (
    <section className="py-20 bg-surface-primary">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="display-heading text-display-lg mb-4">
            What to Expect: Your Appointment
          </h2>
          <p className="text-content-secondary max-w-2xl mx-auto">
            Your 60-minute private styling session is designed to be relaxed,
            personalized, and focused entirely on finding your perfect dress.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {STEPS.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="card-base bg-surface-secondary p-6"
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
