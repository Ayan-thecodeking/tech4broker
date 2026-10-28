"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import type { NavLinkItem } from "@/types/content";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLinkItem[];
  ctaText: string;
  ctaUrl: string;
}

export function MobileMenu({
  isOpen,
  onClose,
  navLinks,
  ctaText,
  ctaUrl,
}: MobileMenuProps) {
  const drawerRef = useRef<HTMLDivElement | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);

  // 1. Body scroll lock & Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // Focus the close button when opened
    const timer = setTimeout(() => {
      closeButtonRef.current?.focus();
    }, 50);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
      clearTimeout(timer);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 lg:hidden flex flex-col bg-black/50 backdrop-blur-sm transition-opacity duration-200"
      aria-modal="true"
      role="dialog"
      id="mobile-navigation-drawer"
      aria-label="Navigation Menu"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={drawerRef}
        className="w-full max-w-[340px] sm:max-w-sm ml-auto h-full bg-[var(--color-surface)] shadow-2xl flex flex-col p-6 overflow-y-auto transform transition-transform duration-250 ease-out animate-in slide-in-from-right"
      >
        {/* Top Header */}
        <div className="flex items-center justify-between pb-5 border-b border-[var(--color-border)]">
          <Logo />
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="w-11 h-11 flex items-center justify-center rounded-full text-[var(--color-text-muted)] hover:text-[var(--color-text)] hover:bg-slate-100 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
            aria-label="Close navigation menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Links Stack (min 48px height, 18px text, icons kept) */}
        <nav className="flex flex-col gap-1.5 py-6">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={onClose}
              className="flex items-center px-4 min-h-[48px] rounded-[var(--radius-sm)] text-[18px] font-[number:var(--fw-medium)] text-[var(--color-text)] hover:bg-blue-50/70 hover:text-[var(--color-primary)] active:bg-blue-100/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>

        {/* CTA in Drawer full width at bottom */}
        <div className="mt-auto pt-6 border-t border-[var(--color-border)]">
          <Button
            variant="gradient"
            size="md"
            href={ctaUrl}
            className="w-full h-[40px] text-sm font-semibold shadow-[0_4px_18px_rgba(10,108,255,0.32)]"
            onClick={onClose}
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
}
