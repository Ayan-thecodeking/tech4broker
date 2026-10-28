"use client";

import { useState, useEffect } from "react";

export interface GlobeThemeColors {
  base: string;
  rim: string;
  dot: string;
  primary: string;
  purple: string;
  accent: string;
  danger: string;
}

const defaultColors: GlobeThemeColors = {
  base: "#FFFFFF",
  rim: "#E2E8F0",
  dot: "#FFFFFF",
  primary: "#0A6CFF",
  purple: "#8B5CF6",
  accent: "#00B4E6",
  danger: "#EF4444",
};

export function useGlobeTheme(): GlobeThemeColors {
  const [colors, setColors] = useState<GlobeThemeColors>(defaultColors);

  useEffect(() => {
    function updateColors() {
      if (typeof window === "undefined") return;
      const computed = getComputedStyle(document.documentElement);

      const base = computed.getPropertyValue("--color-globe-base").trim() || defaultColors.base;
      const rim = computed.getPropertyValue("--color-globe-rim").trim() || defaultColors.rim;
      const dot = computed.getPropertyValue("--color-globe-dot").trim() || defaultColors.dot;
      const primary = computed.getPropertyValue("--color-primary").trim() || defaultColors.primary;
      const purple = computed.getPropertyValue("--color-purple").trim() || defaultColors.purple;
      const accent = computed.getPropertyValue("--color-accent").trim() || defaultColors.accent;
      const danger = computed.getPropertyValue("--color-danger").trim() || defaultColors.danger;

      setColors({
        base,
        rim,
        dot,
        primary,
        purple,
        accent,
        danger,
      });
    }

    updateColors();

    const observer = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        if (
          mutation.type === "attributes" &&
          (mutation.attributeName === "data-theme" || mutation.attributeName === "class")
        ) {
          updateColors();
        }
      }
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return colors;
}
