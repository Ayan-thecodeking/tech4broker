"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  Handshake,
  Network,
  CheckCircle2,
  X,
  ChevronDown,
  BarChart3,
  Users,
  Smartphone,
  Mic,
  ArrowRight,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Logo } from "@/components/ui/Logo";
import type { NavLinkItem, NavItemIconType } from "@/types/content";

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavLinkItem[];
  ctaText: string;
  ctaUrl: string;
}

function NavItemIcon({ icon, color }: { icon?: NavItemIconType; color?: string }) {
  if (!icon) return null;
  const style = color ? { color } : undefined;

  switch (icon) {
    case "handshake":
      return <Handshake className="w-5 h-5 shrink-0" style={style} aria-hidden="true" />;
    case "network":
      return <Network className="w-5 h-5 shrink-0" style={style} aria-hidden="true" />;
    case "checkCircle":
      return <CheckCircle2 className="w-5 h-5 shrink-0" style={style} aria-hidden="true" />;
    default:
      return null;
  }
}

function ProductMobileIcon({ icon }: { icon: string }) {
  const iconClasses = "w-4 h-4 text-[#00B4E6] shrink-0";
  const strokeWidth = 1.85;

  switch (icon) {
    case "barChart":
      return <BarChart3 className={iconClasses} strokeWidth={strokeWidth} aria-hidden="true" />;
    case "users":
      return <Users className={iconClasses} strokeWidth={strokeWidth} aria-hidden="true" />;
    case "network":
      return <Network className={iconClasses} strokeWidth={strokeWidth} aria-hidden="true" />;
    case "smartphone":
      return <Smartphone className={iconClasses} strokeWidth={strokeWidth} aria-hidden="true" />;
    case "mic":
      return <Mic className={iconClasses} strokeWidth={strokeWidth} aria-hidden="true" />;
    default:
      return <BarChart3 className={iconClasses} strokeWidth={strokeWidth} aria-hidden="true" />;
  }
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
  const [productsExpanded, setProductsExpanded] = useState(true);

  // Body scroll lock & Escape key listener
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

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
        className="w-full max-w-[340px] sm:max-w-sm ml-auto h-full bg-white shadow-2xl flex flex-col p-6 overflow-y-auto transform transition-transform duration-250 ease-out animate-in slide-in-from-right"
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

        {/* Links Stack */}
        <nav className="flex flex-col gap-1.5 py-6">
          {navLinks.map((item) => {
            if (item.isDropdown && item.dropdownProducts) {
              return (
                <div key={item.label} className="flex flex-col">
                  <button
                    type="button"
                    onClick={() => setProductsExpanded((prev) => !prev)}
                    className="flex items-center justify-between px-4 min-h-[48px] rounded-[var(--radius-sm)] text-[18px] font-[number:var(--fw-medium)] text-[var(--color-text)] hover:bg-blue-50/70 hover:text-[var(--color-primary)] transition-colors"
                  >
                    <span>{item.label}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[var(--color-text-muted)] transition-transform duration-200 ${
                        productsExpanded ? "rotate-180 text-[var(--color-primary)]" : ""
                      }`}
                    />
                  </button>

                  {/* Submenu Accordion */}
                  {productsExpanded && (
                    <div className="flex flex-col gap-1 pl-4 pr-1 py-2 my-1 bg-slate-50 rounded-xl border border-slate-200/80">
                      {item.dropdownProducts.map((product) => (
                        <Link
                          key={product.id}
                          href={`/products/${product.slug}`}
                          onClick={onClose}
                          className="flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm font-medium text-[var(--color-text)] hover:text-[var(--color-primary)] hover:bg-white transition-colors"
                        >
                          <ProductMobileIcon icon={product.icon} />
                          <span className="truncate">{product.name}</span>
                        </Link>
                      ))}

                      <Link
                        href="/products"
                        onClick={onClose}
                        className="flex items-center justify-between px-3 py-2 mt-1 pt-2 border-t border-slate-200 text-xs font-semibold text-[var(--color-primary)]"
                      >
                        <span>All Products Overview</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                  )}
                </div>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="flex items-center gap-3.5 px-4 min-h-[48px] rounded-[var(--radius-sm)] text-[18px] font-[number:var(--fw-medium)] text-[var(--color-text)] hover:bg-blue-50/70 hover:text-[var(--color-primary)] active:bg-blue-100/60 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)]"
              >
                <NavItemIcon icon={item.icon} color={item.iconColor} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>

        {/* CTA in Drawer full width at bottom */}
        <div className="mt-auto pt-6 border-t border-[var(--color-border)]">
          <Button
            variant="gradient"
            size="lg"
            href={ctaUrl}
            className="w-full min-h-[48px] text-sm font-[number:var(--fw-bold)] tracking-[var(--ls-button)] uppercase shadow-[0_4px_18px_rgba(10,108,255,0.32)]"
            onClick={onClose}
          >
            {ctaText}
          </Button>
        </div>
      </div>
    </div>
  );
}
