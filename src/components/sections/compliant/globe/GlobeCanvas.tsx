"use client";

import React, { useSyncExternalStore } from "react";
import dynamic from "next/dynamic";
import { GlobeFallback } from "./GlobeFallback";
import { useGlobeTheme } from "@/hooks/useGlobeTheme";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { cn } from "@/lib/cn";

const GlobeSceneDynamic = dynamic(
  () => import("./GlobeScene").then((mod) => mod.GlobeScene),
  {
    ssr: false,
    loading: () => <GlobeFallback />,
  }
);

function emptySubscribe() {
  return () => {};
}

function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

function checkWebGL(): boolean {
  if (typeof window === "undefined") return true;
  try {
    const testCanvas = document.createElement("canvas");
    return !!(
      testCanvas.getContext("webgl") ||
      testCanvas.getContext("experimental-webgl")
    );
  } catch {
    return false;
  }
}

function checkSaveData(): boolean {
  if (typeof navigator === "undefined") return false;
  const nav = navigator as Navigator & { connection?: { saveData?: boolean } };
  return !!nav.connection?.saveData;
}

export interface GlobeCanvasProps {
  className?: string;
  activeJurisdictionId?: string | null;
  onSelectJurisdiction?: (id: string | null) => void;
  onHoverJurisdiction?: (id: string | null) => void;
}

export function GlobeCanvas({
  className,
  activeJurisdictionId = null,
  onSelectJurisdiction,
  onHoverJurisdiction,
}: GlobeCanvasProps) {
  const colors = useGlobeTheme();
  const prefersReducedMotion = usePrefersReducedMotion();
  const isMounted = useIsMounted();
  const isSaveData = isMounted ? checkSaveData() : false;
  const hasWebGL = isMounted ? checkWebGL() : true;
  const shouldFallback = !isMounted || !hasWebGL || prefersReducedMotion || isSaveData;

  return (
    <div
      className={cn(
        "relative flex items-center justify-center shrink-0 select-none",
        className
      )}
      style={{
        width: "var(--globe-size)",
        height: "var(--globe-size)",
        aspectRatio: "1 / 1",
      }}
    >
      {/* Subtle contact shadow beneath the floating globe */}
      <div
        className="absolute -bottom-2 w-[65%] h-6 rounded-[50%] pointer-events-none opacity-40 blur-lg bg-black"
        aria-hidden="true"
      />

      {shouldFallback ? (
        <GlobeFallback />
      ) : (
        <GlobeSceneDynamic
          colors={colors}
          prefersReducedMotion={prefersReducedMotion}
          activeJurisdictionId={activeJurisdictionId}
          onSelectJurisdiction={onSelectJurisdiction}
          onHoverJurisdiction={onHoverJurisdiction}
          className="w-full h-full"
        />
      )}
    </div>
  );
}
