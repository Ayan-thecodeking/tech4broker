import React from "react";
import Image from "next/image";
import { MessagesSquare, HeartHandshake, Globe } from "lucide-react";
import { IconBlob } from "@/components/ui/IconBlob";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/cn";
import type { SupportFeatureItem } from "@/types/content";

export interface SupportFeatureProps {
  feature: SupportFeatureItem;
  className?: string;
}

const iconComponentMap: Record<
  string,
  React.ComponentType<{ size?: number | string; strokeWidth?: number | string; className?: string }>
> = {
  MessagesSquare,
  HeartHandshake,
  Globe,
};

export function SupportFeature({
  feature,
  className,
}: SupportFeatureProps) {
  const IconComponent = feature.icon.name
    ? iconComponentMap[feature.icon.name] || MessagesSquare
    : MessagesSquare;

  return (
    <article
      className={cn(
        "group flex flex-col items-center text-center select-none w-full max-w-[340px] mx-auto",
        className
      )}
    >
      {/* 1. Icon Area ~180px tall */}
      <div className="h-[180px] flex items-center justify-center shrink-0">
        <IconBlob tone={feature.tone}>
          <div className="flex items-center justify-center">
            {feature.icon.type === "image" ? (
              feature.icon.src ? (
                <Image
                  src={feature.icon.src}
                  alt={feature.icon.alt || feature.title}
                  width={110}
                  height={110}
                  loading="eager"
                  priority
                  unoptimized
                  className="support-feature-img select-none"
                  style={{
                    width: "var(--feature-icon-size, 110px)",
                    height: "var(--feature-icon-size, 110px)",
                    objectFit: "contain",
                  }}
                />
              ) : (
                <ImagePlaceholder
                  width={90}
                  height={90}
                  shape="rounded"
                  colorToken="surface"
                  alt={feature.icon.alt || feature.title}
                />
              )
            ) : (
              <IconComponent
                size={88}
                strokeWidth={1.5}
                className="w-[var(--feature-icon-size)] h-[var(--feature-icon-size)]"
              />
            )}
          </div>
        </IconBlob>
      </div>

      {/* 2. Feature Title (fixed min-height so descriptions align horizontally across columns) */}
      <div className="mt-10 sm:mt-12 lg:mt-14 min-h-[58px] sm:min-h-[62px] flex items-center justify-center">
        <h3 className="text-[length:var(--fs-feature-title)] font-[number:var(--fw-semibold)] text-[var(--color-text)] leading-[1.18] tracking-tight max-w-[270px]">
          {feature.title}
        </h3>
      </div>

      {/* 3. Description (aligned across columns) */}
      <div className="mt-3 sm:mt-4">
        <p className="text-[15px] sm:text-[length:var(--fs-feature-body)] font-[number:var(--fw-regular)] text-[var(--color-text)]/90 leading-[1.35] tracking-normal max-w-[30ch] sm:max-w-[270px]">
          {feature.description}
        </p>
      </div>
    </article>
  );
}
