// src/components/ui/quick-contact.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Clock, MapPin } from "lucide-react";
import { businessInfo, formatPhoneNumber } from "@/lib/config/contact";

interface QuickContactProps {
  showBooking?: boolean;
}

export default function QuickContact({
  showBooking = true,
}: QuickContactProps) {
  const { phone, email } = businessInfo.contact;

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      <div className="card-base">
        <h3 className="display-heading text-display-base mb-6">Contact</h3>
        <div className="space-y-4">
          <a
            href={`tel:${phone}`}
            className="flex items-center gap-3 hover:text-ui-button transition-colors"
          >
            <Phone className="h-5 w-5 text-ui-button" />
            <span>{formatPhoneNumber(phone)}</span>
          </a>
          <a
            href={`mailto:${email}`}
            className="flex items-center gap-3 hover:text-ui-button transition-colors"
          >
            <Mail className="h-5 w-5 text-ui-button" />
            <span>{email}</span>
          </a>
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5 text-ui-button" />
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
          >
            <MapPin className="h-5 w-5 text-ui-button" />
            <address className="not-italic">
              {businessInfo.address.street}
              <br />
              {businessInfo.address.city}, {businessInfo.address.state}{" "}
              {businessInfo.address.zip}
            </address>
          </a>
        </div>
      </div>

      {showBooking && (
        <div className="card-base">
          <h3 className="display-heading text-display-base mb-4">
            Ready to Visit?
          </h3>
          <p className="text-content-secondary mb-4">
            Schedule your private appointment or visit during open hours
          </p>
          <div className="space-y-4">
            <Button
              className="w-full"
              onClick={() => (window.location.href = "/visit")}
            >
              Book Appointment
            </Button>
          </div>
        </div>
      )}
    </motion.div>
  );
}
