// src/components/ui/page-hero.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  image?: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  backgroundImage?: string;
  layout?: "default" | "split";
}

export default function PageHero({
  title,
  subtitle,
  children,
  image,
  backgroundImage,
  layout = "default",
}: PageHeroProps) {
  const containerStyles = backgroundImage
    ? {
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }
    : {};

  return (
    <section
      className="relative min-h-[50vh] bg-surface-primary flex items-center after:block after:absolute after:h-full after:w-full after:bg-surface-primary/70 after:backdrop-blur-sm after:-z-0 after:top-0 after:left-0"
      style={containerStyles}
    >
      <div
        className={`container mx-auto px-4 py-36 lg:py-24 relative z-20 ${
          layout === "split" ? "grid md:grid-cols-2 gap-8 items-center" : ""
        }`}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className={layout === "default" ? "max-w-3xl" : ""}
        >
          <h1 className="display-heading text-display-lg lg:text-display-2xl mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-content-secondary text-body-lg mb-8 text-balance">
              {subtitle}
            </p>
          )}
          {children}
        </motion.div>

        {layout === "split" && image && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                priority
                className="object-cover"
              />
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
