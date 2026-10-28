"use client";

import React, { useEffect } from "react";
import Lenis from "lenis";
import { gsap, ScrollTrigger } from "@/lib/gsap";
import "lenis/dist/lenis.css";

interface AppProvidersProps {
  children: React.ReactNode;
}

export function AppProviders({ children }: AppProvidersProps) {
  useEffect(() => {
    // Configure ScrollTrigger for mobile devices:
    // Prevents mobile browser address bar hide/expand resize events from disrupting scrubbed animations
    ScrollTrigger.config({
      ignoreMobileResize: true,
      autoRefreshEvents: "visibilitychange,DOMContentLoaded,load,resize",
    });

    // Detect mobile touch devices (phones and tablets)
    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches);

    // On touch devices, native 120Hz GPU compositor scrolling is fastest & most reliable.
    // Lenis running on touch devices prevents ScrollTrigger from receiving touch scroll updates.
    if (isTouchDevice) {
      const handleNativeScroll = () => {
        ScrollTrigger.update();
      };
      window.addEventListener("scroll", handleNativeScroll, { passive: true });
      ScrollTrigger.refresh();

      return () => {
        window.removeEventListener("scroll", handleNativeScroll);
      };
    }

    // Initialize Lenis on desktop (mouse wheel navigation)
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.0,
      syncTouch: false,
    });

    // 1. Sync Lenis on scroll with ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    // 2. Drive Lenis updates directly from GSAP's internal ticker
    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);

    // 3. Disable lagSmoothing for tight sync with ScrollTrigger
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
