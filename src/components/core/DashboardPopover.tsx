"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { FaYoutube, FaNewspaper } from "react-icons/fa6";
import { File } from "lucide-react";

interface Option {
  label: string;
  icon: React.ElementType;
  type: 'youtube' | 'article' | 'text';
}

interface DashboardPopoverProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (option: Option) => void;
}

export function DashboardPopover({ isOpen, onClose, onSelect }: DashboardPopoverProps) {
  const [focusedIndex, setFocusedIndex] = useState<number>(-1);
  const popoverRef = useRef<HTMLDivElement>(null);

  const options: Option[] = [
    { label: "Generate notes from YouTube video", icon: FaYoutube, type: 'youtube' },
    { label: "Generate notes from an article", icon: FaNewspaper, type: 'article' },
    { label: "Generate notes from Text", icon: File, type: 'text' },
  ];

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isOpen) return;

      switch (event.key) {
        case "ArrowDown":
          setFocusedIndex((prev) => (prev + 1) % options.length);
          break;
        case "ArrowUp":
          setFocusedIndex((prev) => (prev - 1 + options.length) % options.length);
          break;
        case "Enter":
          if (focusedIndex >= 0) {
            onSelect(options[focusedIndex]);
            onClose();
          }
          break;
        case "Escape":
          onClose();
          break;
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, focusedIndex, onSelect, onClose, options]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [onClose]);

  if (!isOpen) return null;

  return (
    <div
      ref={popoverRef}
      className="absolute z-10 top-0 left-0 mt-16 w-80 bg-white dark:bg-[#1A1A1A] border border-gray-200 dark:border-gray-700 rounded-lg shadow-lg transform -translate-x-4"
    >
      <div className="p-2">
        {options.map((option, index) => (
          <Button
            key={index}
            className={`flex items-center justify-start space-x-2 w-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors ${
              focusedIndex === index ? "bg-gray-100 dark:bg-gray-800" : ""
            }`}
            variant="ghost"
            onClick={() => {
              onSelect(option);
              onClose();
            }}
            onMouseEnter={() => setFocusedIndex(index)}
          >
            <option.icon className="h-5 w-5" />
            <span>{option.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
}
