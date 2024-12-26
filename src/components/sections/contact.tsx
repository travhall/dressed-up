// src/components/sections/contact.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { CalendarDialog } from "@/components/ui/calendar-dialog";
import { businessInfo, formatPhoneNumber } from "@/lib/config/contact";

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

  const { phone, email } = businessInfo.contact;
  const formattedPhone = formatPhoneNumber(phone);

  return (
    <section
      className="py-20 bg-surface-secondary"
      aria-labelledby="contact-heading"
    >
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="card-base"
          >
            <h2
              id="contact-heading"
              className="display-heading text-display-lg mb-6"
            >
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
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="text-state-error-surface text-sm mt-1"
                  >
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
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="text-state-error-surface text-sm mt-1"
                  >
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
                  aria-describedby={errors.phone ? "phone-error" : undefined}
                />
                {errors.phone && (
                  <p
                    id="phone-error"
                    className="text-state-error-surface text-sm mt-1"
                  >
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
                  aria-describedby={errors.eventDate ? "date-error" : undefined}
                />
                {errors.eventDate && (
                  <p
                    id="date-error"
                    className="text-state-error-surface text-sm mt-1"
                  >
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
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="text-state-error-surface text-sm mt-1"
                  >
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
                <a
                  href={`tel:${phone}`}
                  className="flex items-center gap-3 hover:text-ui-button transition-colors"
                  aria-label="Call our store"
                >
                  <Phone
                    className="h-5 w-5 text-ui-button"
                    aria-hidden="true"
                  />
                  <span>{formattedPhone}</span>
                </a>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 hover:text-ui-button transition-colors"
                  aria-label="Email us"
                >
                  <Mail className="h-5 w-5 text-ui-button" aria-hidden="true" />
                  <span>{email}</span>
                </a>
                <div className="flex items-center gap-3">
                  <Clock
                    className="h-5 w-5 text-ui-button"
                    aria-hidden="true"
                  />
                  <div>
                    {businessInfo.hours.regular.map(({ days, hours }) => (
                      <p key={days}>{`${days}: ${hours}`}</p>
                    ))}
                    <p className="text-content-secondary mt-1">
                      {businessInfo.hours.notes}
                    </p>
                  </div>
                </div>
                <a
                  href={businessInfo.address.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-ui-button transition-colors"
                  aria-label="Get directions to our store"
                >
                  <MapPin
                    className="h-5 w-5 text-ui-button"
                    aria-hidden="true"
                  />
                  <address className="not-italic">
                    {businessInfo.address.street}
                    <br />
                    {businessInfo.address.city}, {businessInfo.address.state}{" "}
                    {businessInfo.address.zip}
                  </address>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
