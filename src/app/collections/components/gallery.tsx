"use client";

import React, { useState, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import { GalleryImage, GalleryCategory } from "./types";
import { GALLERY_CATEGORIES } from "./gallery-data";

interface ImageGridProps {
  images: GalleryImage[];
  onImageClick: (image: GalleryImage) => void;
}

const ImageGridItem = ({
  image,
  index,
  onImageClick,
}: {
  image: GalleryImage;
  index: number;
  onImageClick: (image: GalleryImage) => void;
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: index * 0.1 }}
      className={`
        aspect-[4/5] relative overflow-hidden rounded-lg cursor-pointer group
        ${hasError ? "bg-gray-100" : ""}
      `}
      onClick={() => !hasError && onImageClick(image)}
    >
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity z-10" />

      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
          <div className="w-8 h-8 border-4 border-gray-300 border-t-black rounded-full animate-spin" />
        </div>
      )}

      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center text-gray-500">
          <span>Image not available</span>
        </div>
      ) : (
        <>
          <Image
            src={image.thumbnailSrc || image.src}
            alt={image.alt}
            fill
            className={`
              object-cover transition-transform duration-700 ease-out
              group-hover:scale-105
              ${isLoading ? "opacity-0" : "opacity-100"}
            `}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            onLoad={() => setIsLoading(false)}
            onError={() => {
              setIsLoading(false);
              setHasError(true);
            }}
          />

          {image.title && (
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-sm text-white p-4 transform translate-y-full group-hover:translate-y-0 transition-transform">
              <p className="text-sm">{image.title}</p>
            </div>
          )}
        </>
      )}
    </motion.div>
  );
};

const ImageGrid = ({ images, onImageClick }: ImageGridProps) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {images.map((image, index) => (
        <ImageGridItem
          key={image.id}
          image={image}
          index={index}
          onImageClick={onImageClick}
        />
      ))}
    </div>
  );
};

// const ImageGrid = ({ images, onImageClick }: ImageGridProps) => {
//   const [mounted, setMounted] = React.useState(false);
//   const shuffledImages = React.useMemo(
//     () => (mounted ? [...images].sort(() => Math.random() - 0.5) : images),
//     [images, mounted]
//   );

//   React.useEffect(() => {
//     setMounted(true);
//   }, []);

//   return (
//     <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//       {shuffledImages.map((image, index) => (
//         <ImageGridItem
//           key={image.id}
//           image={image}
//           index={index}
//           onImageClick={onImageClick}
//         />
//       ))}
//     </div>
//   );
// };

interface ModalProps {
  image: GalleryImage | null;
  onClose: () => void;
  onNext?: () => void;
  onPrevious?: () => void;
  hasNext?: boolean;
  hasPrevious?: boolean;
}

const Modal = ({
  image,
  onClose,
  onNext,
  onPrevious,
  hasNext,
  hasPrevious,
}: ModalProps) => {
  React.useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && hasNext && onNext) onNext();
      if (e.key === "ArrowLeft" && hasPrevious && onPrevious) onPrevious();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [onClose, onNext, onPrevious, hasNext, hasPrevious]);

  React.useEffect(() => {
    if (image) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [image]);

  if (!image) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 bg-surface-primary/80 backdrop-blur z-50 flex items-center justify-center"
        onClick={onClose}
      >
        <div
          className="relative w-full max-w-6xl max-h-[90vh] flex items-center justify-center"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-content-primary hover:text-content-primary/60 z-10"
            aria-label="Close modal"
          >
            <X size={24} />
          </button>

          {hasPrevious && (
            <button
              onClick={onPrevious}
              className="absolute left-4 text-content-primary hover:text-content-primary/60 z-10"
              aria-label="Previous image"
            >
              <ChevronLeft size={32} />
            </button>
          )}

          {hasNext && (
            <button
              onClick={onNext}
              className="absolute right-4 text-content-primary hover:text-content-primary/60 z-10"
              aria-label="Next image"
            >
              <ChevronRight size={32} />
            </button>
          )}

          <div className="relative w-full aspect-[3/4] max-h-[90vh]">
            <Image
              src={image.src}
              alt={image.alt}
              className="object-contain"
              fill
              sizes="80vw"
              priority
              quality={100}
            />
            {image.title && (
              <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-50 backdrop-blur-sm text-white p-4">
                <p className="text-center">{image.title}</p>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

interface GalleryProps {
  images: GalleryImage[];
  categories?: GalleryCategory[];
  className?: string;
}

export default function Gallery({
  images,
  categories = GALLERY_CATEGORIES,
  className = "",
}: GalleryProps) {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);

  const filteredImages =
    activeCategory === "all"
      ? images
      : images.filter((image) => image.category === activeCategory);

  const currentIndex = selectedImage
    ? filteredImages.findIndex((img) => img.id === selectedImage.id)
    : -1;

  const handleNext = useCallback(() => {
    if (currentIndex < filteredImages.length - 1) {
      setSelectedImage(filteredImages[currentIndex + 1]);
    }
  }, [currentIndex, filteredImages]);

  const handlePrevious = useCallback(() => {
    if (currentIndex > 0) {
      setSelectedImage(filteredImages[currentIndex - 1]);
    }
  }, [currentIndex, filteredImages]);

  return (
    <section className={`py-20 bg-surface-secondary ${className}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{
            once: true,
            amount: 0.3,
            margin: "50px",
          }}
          transition={{
            duration: 0.5,
          }}
          className="mb-12"
        >
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={
                  activeCategory === category.id ? "primary" : "secondary"
                }
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </Button>
            ))}
          </div>

          <ImageGrid images={filteredImages} onImageClick={setSelectedImage} />
        </motion.div>
      </div>

      <Modal
        image={selectedImage}
        onClose={() => setSelectedImage(null)}
        onNext={handleNext}
        onPrevious={handlePrevious}
        hasNext={currentIndex < filteredImages.length - 1}
        hasPrevious={currentIndex > 0}
      />
    </section>
  );
}
