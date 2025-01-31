"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Logo from "@/components/ui/logo";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Our Story", href: "/story" },
  { label: "Our Collections", href: "/collections" },
  { label: "Your Visit", href: "/visit" },
  { label: "Get In Touch", href: "/contact" },
];

export function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <nav className="sticky w-full top-0 z-50">
      <div className="bg-surface-primary/90 backdrop-blur border-b-2 border-ui-card-border">
        <div className="container mx-auto">
          <div className="flex justify-between p-4">
            <div className="flex items-center">
              <Link onClick={() => setIsOpen(false)} href="/">
                <Logo />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              {NAV_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-content-primary"
                >
                  {item.label}
                </Link>
              ))}
              <div className="ps-2">
                <ThemeToggle />
              </div>
            </div>

            <Button
              variant="secondary"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden relative self-center z-[500]"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      <div
        className={cn(
          "fixed inset-0 top-16 bg-surface-primary/90 backdrop-blur md:hidden min-h-screen",
          "transition-all duration-500 ease-in-out",
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        )}
      >
        <div className="flex flex-col justify-between min-h-dvh p-6">
          <div>
            <div className="flex flex-col items-start space-y-16">
              {NAV_ITEMS.map((item, i) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    "text-4xl font-display text-content-primary transition-all duration-500",
                    isOpen
                      ? "translate-y-0 opacity-100"
                      : "translate-y-8 opacity-0"
                  )}
                  style={{
                    transitionDelay: isOpen
                      ? `${(i + 1) * 100}ms`
                      : `${(NAV_ITEMS.length - i) * 50}ms`,
                  }}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
