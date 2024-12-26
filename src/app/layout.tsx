// src/app/layout.tsx
import type { Metadata } from "next";
import { Nav } from "@/components/layout/nav";
import { Footer } from "@/components/layout/footer";
import "@fontsource-variable/playfair-display";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "./globals.css";
import { ThemeProvider } from "@/components/providers/theme-provider";

export const metadata: Metadata = {
  title: "Dressed Up | Special Occasion Dress Boutique",
  description:
    "Personal shopping experience for mothers of the bride, military balls, and formal events",
};

export const viewport = {
  colorScheme: "light dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-surface-primary text-content-primary antialiased">
        <ThemeProvider>
          <Nav />
          <main className="min-h-screen">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
