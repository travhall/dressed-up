// src/components/ui/contact-form.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { CalendarDialog } from "@/components/ui/calendar-dialog";
import { useForm } from "react-hook-form";

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  eventDate: Date | null;
  message: string;
}

export function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<ContactFormData>();

  const onSubmit = async (data: ContactFormData) => {
    console.log("Form submitted:", data);
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="card-base"
    >
      <h2 className="display-heading text-display-lg mb-6">Send a Message</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-content-secondary mb-2">
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
          <label htmlFor="email" className="block text-content-secondary mb-2">
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
          <label htmlFor="phone" className="block text-content-secondary mb-2">
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
          <CalendarDialog onSelect={(date) => setValue("eventDate", date)} />
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

        <Button type="submit" className="w-full">
          Send Message
        </Button>
      </form>
    </motion.div>
  );
}
