import React from "react";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { FooterGrid } from "./FooterGrid";
import { FooterBottomBar } from "./FooterBottomBar";
import { footerConfig } from "@/config/footer";
import { siteConfig } from "@/config/site";
import { cn } from "@/lib/cn";

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      id="footer"
      aria-label="Site Footer"
      className={cn(
        "w-full bg-[var(--color-footer-bg)] mt-[var(--footer-margin-top)]",
        "rounded-t-[28px] md:rounded-tl-none md:rounded-tr-[var(--radius-xl)]",
        "pt-[36px] md:pt-[var(--footer-padding-y)]",
        "pb-[calc(24px+env(safe-area-inset-bottom))] md:pb-[20px]",
        "transition-colors duration-200",
        className
      )}
    >
      <Container className="flex flex-col">
        {/* Tablet / Mobile Logo placement (above columns) */}
        <div className="block xl:hidden mb-7 md:mb-9">
          <Logo className="max-w-[120px] md:max-w-none" />
        </div>

        {/* Main Grid: Desktop 4-column (Logo col 1 + 3 column list), Tablet 3-column, Mobile Accordion */}
        <FooterGrid columns={footerConfig.columns} />

        {/* Horizontal Divider (1px border-strong, inset ~4px from each side) */}
        <div
          className="w-[calc(100%-8px)] mx-auto mt-[30px] mb-4 md:mb-[15px] border-t border-[var(--color-border-strong)]"
          aria-hidden="true"
        />

        {/* Bottom Bar: Copyright notice & Legal navigation */}
        <FooterBottomBar
          brand={siteConfig.brandName}
          year={currentYear}
          copyrightTemplate={footerConfig.copyright}
          legalLinks={footerConfig.legalLinks}
        />
      </Container>
    </footer>
  );
}
