"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Handshake, Network, CheckCircle2, Menu } from "lucide-react";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { MobileMenu } from "./MobileMenu";
import type { NavLinkItem, NavItemIconType } from "@/types/content";

export interface NavbarProps {
  navLinks: NavLinkItem[];
  ctaText: string;
  ctaUrl: string;
}

function NavItemIcon({ icon, color }: { icon?: NavItemIconType; color?: string }) {
  if (!icon) return null;
  const style = color ? { color } : undefined;

  switch (icon) {
    case "handshake":
      return <Handshake className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" style={style} aria-hidden="true" />;
    case "network":
      return <Network className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" style={style} aria-hidden="true" />;
    case "checkCircle":
      return <CheckCircle2 className="w-4 h-4 shrink-0 transition-transform group-hover:scale-110" style={style} aria-hidden="true" />;
    default:
      return null;
  }
}

export function Navbar({ navLinks, ctaText, ctaUrl }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-2.5 sm:top-4 inset-x-0 z-50 w-full px-3 sm:px-4 pointer-events-none">
        <nav
          aria-label="Main Navigation"
          className="mx-auto max-w-[var(--container-max)] h-[var(--navbar-height)] rounded-[var(--radius-pill)] bg-[rgba(255,255,255,0.75)] backdrop-blur-xl border border-[var(--color-border)] shadow-[var(--shadow-nav)] px-3 sm:px-6 lg:px-8 flex items-center justify-between transition-shadow duration-[var(--transition-base)] pointer-events-auto"
        >
          {/* Brand Logo */}
          <div className="shrink-0 flex items-center">
            <Logo />
          </div>

          {/* Desktop Center Links (hidden below lg) */}
          <div className="hidden lg:flex items-center justify-center gap-5 xl:gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className={`group flex items-center gap-1.5 text-sm font-medium transition-colors duration-[var(--transition-base)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded-full px-2 py-1 ${
                  item.isActive
                    ? "text-[var(--color-primary)] font-semibold"
                    : "text-[var(--color-text)] hover:text-[var(--color-primary)]"
                }`}
                aria-current={item.isActive ? "page" : undefined}
              >
                <NavItemIcon icon={item.icon} color={item.iconColor} />
                <span>{item.label}</span>
              </Link>
            ))}
          </div>

          {/* Right Action / Mobile Toggle */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Desktop CTA Button (shown only on desktop >=1024px) */}
            <div className="hidden lg:block">
              <Button
                variant="gradient"
                size="md"
                href={ctaUrl}
                className="text-xs px-6 h-[40px]"
              >
                {ctaText}
              </Button>
            </div>

            {/* Mobile Hamburger Button (44x44 tap target) */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full text-[var(--color-text)] hover:bg-black/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] shrink-0"
              aria-label="Open mobile navigation menu"
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-navigation-drawer"
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        navLinks={navLinks}
        ctaText={ctaText}
        ctaUrl={ctaUrl}
      />
    </>
  );
}
