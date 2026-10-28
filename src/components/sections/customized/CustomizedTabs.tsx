"use client";

import React, { useState, useEffect, useTransition } from "react";
import { CustomizedPanel } from "./CustomizedPanel";
import { cn } from "@/lib/cn";
import type { CustomizedData } from "@/types/content";

export interface CustomizedTabsProps {
  data: CustomizedData;
  className?: string;
}

export function CustomizedTabs({ data, className }: CustomizedTabsProps) {
  const { tabs, mockup, autoRotate = false } = data;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPending, startTransition] = useTransition();

  const handlePrev = () => {
    startTransition(() => {
      setCurrentIndex((prev) => (prev === 0 ? tabs.length - 1 : prev - 1));
    });
  };

  const handleNext = () => {
    startTransition(() => {
      setCurrentIndex((prev) => (prev === tabs.length - 1 ? 0 : prev + 1));
    });
  };

  const handleSelectIndex = (index: number) => {
    startTransition(() => {
      setCurrentIndex(index);
    });
  };

  // Optional auto-rotate if enabled
  useEffect(() => {
    if (!autoRotate || tabs.length <= 1) return;
    const interval = setInterval(() => {
      handleNext();
    }, 6000);

    return () => clearInterval(interval);
  }, [autoRotate, tabs.length]);

  const activeTabItem = tabs[currentIndex] || tabs[0];

  return (
    <div className={cn("w-full flex flex-col items-center", className)}>
      <div className="w-full overflow-hidden">
        {activeTabItem && (
          <div
            key={activeTabItem.id}
            className={cn(
              "w-full transition-all duration-300 ease-out",
              isPending
                ? "opacity-60 scale-[0.99] translate-y-1"
                : "opacity-100 scale-100 translate-y-0"
            )}
          >
            <CustomizedPanel
              tab={activeTabItem}
              mockup={mockup}
              currentIndex={currentIndex}
              totalItems={tabs.length}
              items={tabs}
              onPrev={handlePrev}
              onNext={handleNext}
              onSelectIndex={handleSelectIndex}
            />
          </div>
        )}
      </div>
    </div>
  );
}

