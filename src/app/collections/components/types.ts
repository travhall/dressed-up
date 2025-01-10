// types.ts
export interface GalleryImage {
  id: string; // Unique identifier
  src: string; // Path to full-size image
  thumbnailSrc?: string; // Optional path to thumbnail
  alt: string; // Alt text for accessibility
  category: string; // Image category
  title?: string; // Optional title
  metadata?: {
    // Flexible metadata object for future use
    width?: number;
    height?: number;
    size?: string;
    dateAdded?: string;
    [key: string]: string | number | undefined;
  };
}

export interface GalleryCategory {
  id: string;
  label: string;
}
