// src/app/contact/components/form.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDialog } from "@/components/ui/calendar-dialog";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventDate: Date | null;
  message: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<ContactFormData>({
    name: "",
    email: "",
    phone: "",
    eventDate: null,
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", form);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="card-base"
    >
      <h2 className="display-heading text-display-lg mb-6">Send a Message</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-content-secondary mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="input-base w-full"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-content-secondary mb-2">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="input-base w-full"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-content-secondary mb-2">
            Phone
          </label>
          <input
            id="phone"
            type="tel"
            className="input-base w-full"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
          />
        </div>
        <div>
          <label className="block text-content-secondary mb-2">
            Event Date
          </label>
          <CalendarDialog
            onSelect={(date) => setForm({ ...form, eventDate: date })}
          />
        </div>
        <div>
          <label
            htmlFor="message"
            className="block text-content-secondary mb-2"
          >
            Message
          </label>
          <textarea
            id="message"
            className="input-base w-full h-32"
            required
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
        </div>
        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </motion.div>
  );
}
