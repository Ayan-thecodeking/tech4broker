"use client";

import React, { useState, useSyncExternalStore } from "react";
import { Download, X } from "lucide-react";
import type { SiteConfig } from "@/types/content";

export interface AnnouncementBarProps {
  announcement: SiteConfig["announcement"];
}

const STORAGE_KEY = "tech4broker_announcement_dismissed";

function getSessionSnapshot(): boolean {
  if (typeof window === "undefined") return false;
  try {
    return sessionStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

function getServerSnapshot(): boolean {
  return false;
}

function subscribeSession(callback: () => void): () => void {
  window.addEventListener("storage", callback);
  return () => window.removeEventListener("storage", callback);
}

export function AnnouncementBar({ announcement }: AnnouncementBarProps) {
  const isStoredDismissed = useSyncExternalStore(
    subscribeSession,
    getSessionSnapshot,
    getServerSnapshot
  );
  const [localDismissed, setLocalDismissed] = useState(false);

  const handleDismiss = () => {
    setLocalDismissed(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // sessionStorage unavailable (e.g. private browsing restriction)
    }
  };

  const isDismissed = localDismissed || isStoredDismissed;

  React.useEffect(() => {
    if (typeof document !== "undefined") {
      if (isDismissed) {
        document.documentElement.style.setProperty("--announcement-height", "0px");
      } else {
        document.documentElement.style.removeProperty("--announcement-height");
      }
    }
  }, [isDismissed]);

  if (isDismissed) {
    return null;
  }

  return (
    <aside
      aria-label="Announcement"
      className="w-full min-h-[var(--announcement-height)] bg-[var(--color-navy)] text-[var(--color-text-inverse)] flex items-center justify-center px-4 sm:px-6 relative z-30 transition-all duration-300 py-2 sm:py-0"
    >
      <div className="flex items-center justify-center gap-2 sm:gap-4 flex-wrap text-center max-w-4xl pr-8 sm:pr-0">
        <p className="text-[12px] sm:text-xs md:text-sm font-[number:var(--fw-medium)] tracking-normal leading-snug line-clamp-2 max-w-[580px]">
          {announcement.text}
        </p>

        <a
          href={announcement.downloadUrl}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 min-h-[40px] rounded-[var(--radius-pill)] bg-[rgba(0,0,0,0.35)] hover:bg-[rgba(0,0,0,0.55)] text-xs font-[number:var(--fw-semibold)] tracking-wide transition-[background,transform] duration-[var(--transition-base)] active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-accent)] shrink-0"
        >
          <span className="w-5 h-5 rounded-full bg-[var(--color-primary)] flex items-center justify-center text-white shrink-0">
            <Download className="w-3 h-3" aria-hidden="true" />
          </span>
          <span>{announcement.buttonLabel}</span>
        </a>
      </div>

      {/* Dismiss Button */}
      <button
        type="button"
        onClick={handleDismiss}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-11 h-11 flex items-center justify-center rounded-full text-white/70 hover:text-white hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
        aria-label="Dismiss announcement"
      >
        <X className="w-4 h-4" />
      </button>
    </aside>
  );
}
