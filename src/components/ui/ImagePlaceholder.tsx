import React from "react";
import Image from "next/image";
import { cn } from "@/lib/cn";

export type PlaceholderShape = "pill" | "arch" | "circle" | "rounded";
export type ColorTokenType =
  | "teal"
  | "primary"
  | "purple"
  | "navy"
  | "surface"
  | "accent";

export interface ImagePlaceholderProps {
  width?: number | string;
  height?: number | string;
  shape?: PlaceholderShape;
  colorToken?: ColorTokenType;
  src?: string;
  alt?: string;
  className?: string;
  style?: React.CSSProperties;
  priority?: boolean;
}

const colorTokenMap: Record<ColorTokenType, string> = {
  teal: "var(--color-teal)",
  primary: "var(--color-primary)",
  purple: "var(--color-purple)",
  navy: "var(--color-navy)",
  surface: "var(--color-surface)",
  accent: "var(--color-accent)",
};

const shapeClassMap: Record<PlaceholderShape, string> = {
  pill: "rounded-[var(--radius-pill)]",
  arch: "rounded-t-[999px] rounded-b-[999px]",
  circle: "rounded-full aspect-square",
  rounded: "rounded-[var(--radius-lg)]",
};

export function ImagePlaceholder({
  width,
  height,
  shape = "pill",
  colorToken = "primary",
  src,
  alt = "Placeholder image",
  className,
  style,
  priority = false,
}: ImagePlaceholderProps) {
  const shapeClass = shapeClassMap[shape];
  const bgColor = colorTokenMap[colorToken] || "var(--color-primary)";

  const inlineStyles: React.CSSProperties = {
    width: typeof width === "number" ? `${width}px` : width,
    height: typeof height === "number" ? `${height}px` : height,
    backgroundColor: bgColor,
    ...style,
  };

  if (src) {
    return (
      <div
        className={cn("relative overflow-hidden", shapeClass, className)}
        style={inlineStyles}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, 350px"
          className="object-cover"
          priority={priority}
        />
      </div>
    );
  }

  return (
    <div
      role="img"
      aria-label={alt}
      className={cn("relative overflow-hidden", shapeClass, className)}
      style={inlineStyles}
    />
  );
}
