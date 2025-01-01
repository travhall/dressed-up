// calendar.tsx
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
        month: "w-full",
        caption: "flex justify-center pt-1 relative items-center",
        caption_label:
          "text-body-base font-medium text-content-primary block mb-2",
        table: "w-full border-collapse",
        head_row: "flex w-full",
        head_cell: "text-content-secondary w-9 font-normal text-[0.8rem]",
        row: "flex w-full mt-2",
        cell: cn(
          "relative w-9 h-9 p-0",
          "flex items-center justify-center",
          "[&:has([aria-selected].rdp-day_button)]:bg-ui-button",
          "[&:has([aria-selected].rdp-day_button)]:rounded-md"
        ),
        day: cn(
          "h-9 w-9 p-0",
          "relative text-center",
          "rounded-md",
          "text-content-primary transition-colors",
          "hover:bg-surface-secondary",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ui-button",
          "disabled:text-content-tertiary disabled:hover:bg-transparent",
          "aria-selected:bg-ui-button-hover aria-selected:text-ui-button-text",
          "[&[aria-selected]]:hover:bg-ui-button-hover [&[aria-selected]]:hover:text-ui-button-text"
        ),
        day_today: "font-bold",
        day_outside: "text-content-tertiary opacity-50",
        ...classNames,
      }}
      {...props}
    />
  );
}
