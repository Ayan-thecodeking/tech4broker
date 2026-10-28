"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  Handshake,
  Network,
  CheckCircle2,
  Menu,
  ChevronDown,
  BarChart3,
  Users,
  Smartphone,
  Mic,
} from "lucide-react";
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

function ProductCardIcon({ icon }: { icon: string }) {
  const iconClasses = "w-6 h-6 text-[#00B4E6] group-hover:text-[#0A6CFF] shrink-0 transition-colors";
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

export function Navbar({ navLinks, ctaText, ctaUrl }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const productDropdownItem = navLinks.find(
    (item) => item.isDropdown && item.dropdownProducts && item.dropdownProducts.length > 0
  );

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setDropdownOpen(false);
    }, 250);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("mousedown", handleClickOutside);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  return (
    <>
      <header className="fixed top-2.5 sm:top-4 inset-x-0 z-50 w-full px-3 sm:px-4 pointer-events-none">
        <div
          ref={containerRef}
          className="mx-auto max-w-[var(--container-max)] relative pointer-events-auto"
          onMouseLeave={handleMouseLeave}
        >
          {/* Main Floating Pill Navigation Bar */}
          <nav
            aria-label="Main Navigation"
            className="w-full h-[var(--navbar-height)] rounded-[var(--radius-pill)] bg-[rgba(255,255,255,0.85)] backdrop-blur-xl border border-[var(--color-border)] shadow-[var(--shadow-nav)] px-3 sm:px-6 lg:px-8 flex items-center justify-between transition-shadow duration-[var(--transition-base)]"
          >
            {/* Brand Logo */}
            <div className="shrink-0 flex items-center">
              <Logo />
            </div>

            {/* Desktop Center Links */}
            <div className="hidden lg:flex items-center justify-center gap-5 xl:gap-8">
              {navLinks.map((item) => {
                if (item.isDropdown && item.dropdownProducts) {
                  return (
                    <div
                      key={item.label}
                      onMouseEnter={handleMouseEnter}
                      className="py-2"
                    >
                      <button
                        type="button"
                        onClick={() => setDropdownOpen((prev) => !prev)}
                        className={`group flex items-center gap-1.5 text-sm font-medium transition-colors duration-[var(--transition-base)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--color-primary)] rounded-full px-3 py-1.5 ${
                          dropdownOpen || item.isActive
                            ? "text-[var(--color-primary)] font-semibold"
                            : "text-[var(--color-text)] hover:text-[var(--color-primary)]"
                        }`}
                        aria-expanded={dropdownOpen}
                        aria-haspopup="true"
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            dropdownOpen
                              ? "rotate-180 text-[var(--color-primary)]"
                              : "text-[var(--color-text-muted)] group-hover:text-[var(--color-primary)]"
                          }`}
                          aria-hidden="true"
                        />
                      </button>
                    </div>
                  );
                }

                return (
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
                );
              })}
            </div>

            {/* Right Action / Mobile Toggle */}
            <div className="flex items-center gap-2 sm:gap-3">
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

          {/* Centered Product Dropdown Mega-Menu directly below the navbar */}
          {dropdownOpen && productDropdownItem?.dropdownProducts && (
            <div
              className="absolute top-[calc(100%+12px)] left-0 right-0 mx-auto w-full max-w-[1140px] rounded-3xl bg-[rgba(255,255,255,0.95)] backdrop-blur-2xl border border-[var(--color-border)] shadow-[0_24px_50px_rgba(15,23,42,0.12)] p-6 sm:p-8 z-50 animate-in fade-in-0 slide-in-from-top-2 duration-200 before:content-[''] before:absolute before:-top-3 before:inset-x-0 before:h-4"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Product Cards Grid: 3 columns (Row 1: 3 cards, Row 2: 2 cards) */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {productDropdownItem.dropdownProducts.map((product) => (
                  <Link
                    key={product.id}
                    href={`/products/${product.slug}`}
                    onClick={() => setDropdownOpen(false)}
                    className="group rounded-2xl border border-slate-200/90 hover:border-[#0A6CFF] bg-[#F8FAFC]/80 hover:bg-white transition-all duration-200 p-6 flex flex-col justify-start shadow-[0_2px_8px_rgba(15,23,42,0.02)] hover:shadow-[0_12px_28px_rgba(10,108,255,0.1)] hover:-translate-y-0.5 cursor-pointer"
                  >
                    {/* Top Row: Icon on left, Title on right */}
                    <div className="flex items-center gap-3">
                      <ProductCardIcon icon={product.icon} />
                      <h3 className="text-base sm:text-[17px] font-semibold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                        {product.name}
                      </h3>
                    </div>

                    {/* Description Text */}
                    <p className="mt-3 text-[13px] sm:text-[13.5px] text-[var(--color-text-muted)] leading-relaxed">
                      {product.shortDescription}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
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
