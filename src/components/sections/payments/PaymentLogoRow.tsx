"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/cn";
import type { PaymentProvider } from "@/types/content";

export interface PaymentLogoRowProps {
  providers: PaymentProvider[];
  animated?: boolean;
  className?: string;
}

/**
 * Every logo gets the SAME box. object-contain fits the artwork inside it,
 * so wide and tall logos both end up filling the box on their long side.
 * Sizes come from tokens so the theme controls them:
 *   --payment-logo-w: 168px;  --payment-logo-h: 52px;
 */
function PaymentLogoItem({
  provider,
  priority = false,
}: {
  provider: PaymentProvider & { scale?: number }; // optional per-logo tweak, e.g. 1.15
  priority?: boolean;
}) {
  const content = provider.logo ? (
    <div
      className="relative shrink-0"
      style={{
        width: "var(--payment-logo-w, 168px)",
        height: "var(--payment-logo-h, 52px)",
      }}
    >
      <Image
        src={provider.logo}
        alt={provider.alt || provider.name}
        fill
        sizes="168px"
        priority={priority}
        className="select-none object-contain"
        style={provider.scale ? { transform: `scale(${provider.scale})` } : undefined}
      />
    </div>
  ) : (
    <div
      className="flex shrink-0 select-none items-center justify-center rounded-[var(--radius-sm)] border border-dashed border-[var(--color-border)] bg-slate-50/70 px-3"
      style={{
        width: "var(--payment-logo-w, 168px)",
        height: "var(--payment-logo-h, 52px)",
      }}
      aria-label={`${provider.name} logo placeholder`}
    >
      <span className="truncate text-center text-xs font-semibold tracking-wide text-[var(--color-text)]/80 sm:text-sm">
        {provider.name}
      </span>
    </div>
  );

  return (
    <div className="group flex shrink-0 items-center justify-center">
      {provider.href ? (
        <Link
          href={provider.href}
          className="rounded-[var(--radius-sm)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
          aria-label={provider.name}
        >
          {content}
        </Link>
      ) : (
        content
      )}
    </div>
  );
}

export function PaymentLogoRow({ providers, animated = true, className }: PaymentLogoRowProps) {
  if (!providers?.length) return null;

  if (!animated) {
    return (
      <ul
        role="list"
        className={cn("m-0 flex w-full list-none items-center justify-between gap-4 p-0 sm:gap-8 sm:px-6 md:px-8", className)}
      >
        {providers.map((p, i) => (
          <li key={`${p.name}-${i}`}>
            <PaymentLogoItem provider={p} />
          </li>
        ))}
      </ul>
    );
  }

  const list = (hidden: boolean) => (
    <ul
      role="list"
      aria-hidden={hidden || undefined}
      className={cn("m-0 flex shrink-0 list-none items-center p-0", hidden && "pointer-events-none")}
      style={{ gap: "var(--marquee-gap, 3.5rem)", paddingRight: "var(--marquee-gap, 3.5rem)" }}
    >
      {providers.map((p, i) => (
        <li key={`${hidden ? "loop" : "main"}-${p.name}-${i}`} className="flex shrink-0 items-center justify-center">
          {/* inert keeps the duplicate out of the tab order */}
          <div {...(hidden ? { inert: true } : {})}>
            {/* only the first copy preloads; the duplicate reuses the cached images */}
            <PaymentLogoItem provider={p} priority={!hidden && i < 5} />
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div
      className={cn("relative w-full select-none overflow-hidden py-4 sm:py-5", className)}
      style={{
        maskImage: "linear-gradient(to right, transparent, #000 24px, #000 calc(100% - 24px), transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, #000 24px, #000 calc(100% - 24px), transparent)",
      }}
    >
      <div className="animate-marquee-track animate-marquee-left marquee-pause-hover">
        {list(false)}
        {list(true)}
      </div>
    </div>
  );
}