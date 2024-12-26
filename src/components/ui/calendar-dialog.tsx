// src/components/ui/calendar-dialog.tsx
"use client";

import * as React from "react";
import { Calendar as LucideCalendar } from "lucide-react";
import { format } from "date-fns";
import { Calendar } from "./calendar";
import { Popover, PopoverContent, PopoverTrigger } from "./popover";
import { Button } from "./button";

export interface CalendarDialogProps {
  onSelect: (date: Date) => void;
}

export function CalendarDialog({ onSelect }: CalendarDialogProps) {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className="w-full justify-start text-left font-normal border-none"
        >
          <LucideCalendar className="mr-2 h-4 w-4" />
          {date ? format(date, "PPP") : <span>Pick a date</span>}
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <Calendar
          mode="single"
          selected={date}
          onSelect={(newDate) => {
            if (newDate && newDate >= new Date()) {
              setDate(newDate);
              onSelect(newDate);
            }
          }}
          autoFocus
          disabled={(date) => date < new Date()}
        />
      </PopoverContent>
    </Popover>
  );
}
