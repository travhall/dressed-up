// src/components/sections/contact.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CalendarDialog } from "@/components/ui/calendar-dialog";

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  eventDate: Date | null;
  message: string;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ContactForm>();

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    // Handle form submission
    console.log(data);
    setIsSubmitting(false);
  };

  return (
    <section className="py-20 bg-surface-secondary">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="card-base"
          >
            <h2 className="display-heading text-display-lg mb-6">
              Start a Conversation
            </h2>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="space-y-4"
              suppressHydrationWarning
            >
              <div>
                <label
                  htmlFor="name"
                  className="block text-content-secondary mb-2"
                >
                  Name
                </label>
                <input
                  {...register("name", { required: "Name is required" })}
                  id="name"
                  type="text"
                  className="input-base w-full"
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p className="text-state-error-surface text-sm mt-1">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-content-secondary mb-2"
                >
                  Email
                </label>
                <input
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "Invalid email address",
                    },
                  })}
                  id="email"
                  type="email"
                  className="input-base w-full"
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p className="text-state-error-surface text-sm mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="phone"
                  className="block text-content-secondary mb-2"
                >
                  Phone
                </label>
                <input
                  {...register("phone", {
                    required: "Phone number is required",
                    pattern: {
                      value: /^[\d\s-+()]*$/,
                      message: "Invalid phone number",
                    },
                  })}
                  id="phone"
                  type="tel"
                  className="input-base w-full"
                  aria-invalid={errors.phone ? "true" : "false"}
                />
                {errors.phone && (
                  <p className="text-state-error-surface text-sm mt-1">
                    {errors.phone.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-content-secondary mb-2">
                  Event Date
                </label>
                <CalendarDialog
                  onSelect={(date) => setValue("eventDate", date)}
                  aria-invalid={errors.eventDate ? "true" : "false"}
                />
                {errors.eventDate && (
                  <p className="text-state-error-surface text-sm mt-1">
                    {errors.eventDate.message}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-content-secondary mb-2"
                >
                  Message
                </label>
                <textarea
                  {...register("message", { required: "Message is required" })}
                  id="message"
                  className="input-base w-full h-32"
                  aria-invalid={errors.message ? "true" : "false"}
                />
                {errors.message && (
                  <p className="text-state-error-surface text-sm mt-1">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            <div className="card-base">
              <h3 className="display-heading text-display-base mb-6">
                Quick Contact
              </h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="h-5 w-5 text-ui-button" />
                  <span>555-555-5555</span>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="h-5 w-5 text-ui-button" />
                  <span>contact@dressedup.com</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="h-5 w-5 text-ui-button" />
                  <div>
                    <p>Tuesday-Thursday: 10am-5pm</p>
                    <p className="text-content-secondary">
                      Private appointments available
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
