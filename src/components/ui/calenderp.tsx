// src/components/ui/calendar.tsx
"use client";

import * as React from "react";
import { DayPicker } from "react-day-picker";
import { cn } from "@/lib/utils";

export type CalendarProps = React.ComponentProps<typeof DayPicker>;

export function Calendar({
  className,
  classNames,
  showOutsideDays = true,
  ...props
}: CalendarProps) {
  return (
    <DayPicker
      showOutsideDays={showOutsideDays}
      className={cn("p-3 bg-ui-card-surface", className)}
      classNames={{
        months: "flex flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0",
        month: "space-y-4",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label: "text-body-base font-medium text-content-primary",
        nav: "space-x-1 flex items-center",
        nav_button: cn(
          "h-7 w-7 bg-transparent p-0 text-content-secondary hover:text-content-primary transition-colors",
          "[&.rdp-button_previous>.rdp-chevron]:fill-current [&.rdp-button_next>.rdp-chevron]:fill-current",
          "[&>.rdp-chevron]:w-4 [&>.rdp-chevron]:h-4"
        ),
        nav_button_previous: "absolute left-1",
        nav_button_next: "absolute right-1",
        table: "w-full border-collapse space-y-1",
        head_row: "flex",
        head_cell:
          "text-content-secondary rounded-md w-8 font-normal text-body-sm",
        row: "flex w-full mt-2",
        cell: cn(
          "relative p-0 text-center text-body-sm focus-within:relative focus-within:z-20",
          "[&:has([aria-selected])]:bg-ui-button/20"
        ),
        day: cn(
          "h-8 w-8 p-0 font-normal aria-selected:opacity-100",
          "hover:bg-surface-secondary rounded-md transition-colors",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ui-button"
        ),
        day_selected: cn(
          "bg-ui-button text-ui-button-text",
          "hover:bg-ui-button-hover hover:text-ui-button-text",
          "focus:bg-ui-button focus:text-ui-button-text rounded-md"
        ),
        day_today: "bg-surface-secondary text-content-primary",
        day_outside: "text-content-tertiary opacity-50",
        day_disabled: "text-content-tertiary opacity-50",
        day_hidden: "invisible",
        ...classNames,
      }}
      {...props}
    />
  );
}
