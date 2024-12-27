// src/components/ui/action-cta.tsx
"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface ActionCTAProps {
  title: string;
  primaryAction: {
    label: string;
    href: string;
  };
  secondaryAction?: {
    label: string;
    href: string;
  };
  className?: string;
}

export default function ActionCTA({
  title,
  primaryAction,
  secondaryAction,
  className = "",
}: ActionCTAProps) {
  return (
    <section className={`py-20 bg-surface-primary ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="display-heading text-display-lg mb-6">{title}</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href={primaryAction.href}>
              <Button size="lg">{primaryAction.label}</Button>
            </Link>
            {secondaryAction && (
              <Link href={secondaryAction.href}>
                <Button variant="outline" size="lg">
                  {secondaryAction.label}
                </Button>
              </Link>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
