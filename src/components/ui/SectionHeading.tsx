import React from "react";
import { cn } from "@/lib/cn";

export interface SectionHeadingProps {
  id?: string;
  eyebrow?: string;
  title: string | React.ReactNode;
  align?: "left" | "center" | "right";
  titleAs?: "h1" | "h2" | "h3" | "h4";
  className?: string;
  titleClassName?: string;
  eyebrowClassName?: string;
}

export function SectionHeading({
  id,
  eyebrow,
  title,
  align = "center",
  titleAs: TitleTag = "h2",
  className,
  titleClassName,
  eyebrowClassName,
}: SectionHeadingProps) {
  const alignmentClass =
    align === "center"
      ? "items-center text-center mx-auto"
      : align === "right"
      ? "items-end text-right ml-auto"
      : "items-start text-left";

  return (
    <div className={cn("flex flex-col max-w-4xl", alignmentClass, className)}>
      {eyebrow && (
        <span
          className={cn(
            "text-[length:var(--fs-eyebrow-label)] tracking-[var(--ls-eyebrow)] uppercase font-[number:var(--fw-medium)] text-[var(--color-text)] select-none mb-3 sm:mb-4",
            eyebrowClassName
          )}
        >
          {eyebrow}
        </span>
      )}
      <TitleTag
        id={id}
        className={cn(
          "text-[length:var(--fs-section-title)] font-[number:var(--fw-bold)] leading-[1.15] text-[var(--color-text)] tracking-tight",
          titleClassName
        )}
        style={{ textWrap: "balance" }}
      >
        {title}
      </TitleTag>
    </div>
  );
}
