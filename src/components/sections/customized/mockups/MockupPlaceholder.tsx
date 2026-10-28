import React from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

export interface MockupPlaceholderProps {
  src?: string;
  alt?: string;
  className?: string;
}

export function MockupPlaceholder({
  src,
  alt = "Dashboard preview",
  className,
}: MockupPlaceholderProps) {
  return (
    <div
      className={cn(
        "relative w-full max-w-[var(--mockup-width)] h-[var(--mockup-height)] rounded-[24px] overflow-hidden border border-[var(--color-border)] shadow-[var(--shadow-card-soft)] bg-gradient-to-br from-blue-50/70 via-indigo-50/40 to-purple-50/50 flex flex-col items-center justify-center p-6 select-none",
        className
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 560px"
        />
      ) : (
        <div className="flex flex-col items-center text-center p-6 border-2 border-dashed border-blue-200/80 rounded-[18px] w-full h-full justify-center">
          <div className="w-14 h-14 rounded-full bg-blue-100 text-[var(--color-primary)] flex items-center justify-center mb-3 shadow-sm">
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
              />
            </svg>
          </div>
          <span className="text-sm font-[number:var(--fw-semibold)] text-[var(--color-text)]">
            {alt}
          </span>
          <span className="text-xs text-[var(--color-text-muted)] mt-1 max-w-[280px]">
            Fully interactive interface customizable to your firm&apos;s operational workflow.
          </span>
        </div>
      )}
    </div>
  );
}
