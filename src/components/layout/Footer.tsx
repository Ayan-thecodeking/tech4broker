import React from "react";
import Link from "next/link";
import Image from "next/image";
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
        "bg-[#0b0f19] pt-20 pb-12 text-slate-400 text-[14px] border-t border-white/5 relative w-full",
        className
      )}
    >
      <div className="w-[min(1180px,92%)] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-10 lg:gap-12 mb-16">
        {/* Brand Column */}
        <div className="md:col-span-5">
          <Link
            href="/"
            className="inline-block mb-6"
            aria-label="Tech4Broker homepage"
          >
            <Image
              src="/svg/logo-light.svg"
              alt="Tech4Broker"
              width={144}
              height={36}
              className="w-36 h-auto"
            />
          </Link>

          <p className="max-w-[380px] leading-[1.65] text-slate-400 text-[14px]">
            The technology and infrastructure behind your trading business. From company setup and liquidity to MT4/MT5
            connectivity and prop-firm platforms.
          </p>
        </div>

        {/* Solutions Links */}
        <div className="md:col-span-4">
          <h4 className="text-white font-bold mb-6 text-[15px] tracking-tight">Solutions</h4>
          <ul className="space-y-3.5">
            <li>
              <Link href="/#company" className="hover:text-[#38bdf8] transition-colors">
                Tech4Broker Launch (Company Setup)
              </Link>
            </li>
            <li>
              <Link href="/#products" className="hover:text-[#38bdf8] transition-colors">
                Tech4Broker Core (Turnkey Brokerage)
              </Link>
            </li>
            <li>
              <Link href="/#products" className="hover:text-[#38bdf8] transition-colors">
                Tech4Broker Social (Copy Trading)
              </Link>
            </li>
            <li>
              <Link href="/#products" className="hover:text-[#38bdf8] transition-colors">
                Tech4Broker Liquidity (Bridge &amp; Feeds)
              </Link>
            </li>
            <li>
              <Link href="/#prediction" className="hover:text-[#38bdf8] transition-colors">
                Prop-Firm &amp; Funded Accounts
              </Link>
            </li>
          </ul>
        </div>

        {/* Platform Links */}
        <div className="md:col-span-3">
          <h4 className="text-white font-bold mb-6 text-[15px] tracking-tight">Platform</h4>
          <ul className="space-y-3.5">
            <li>
              <Link href="/#ecosystem" className="hover:text-[#38bdf8] transition-colors">
                Ecosystem Overview
              </Link>
            </li>
            <li>
              <Link href="/#why-tech4broker" className="hover:text-[#38bdf8] transition-colors">
                Why Tech4Broker
              </Link>
            </li>
            <li>
              <Link href="/#company" className="hover:text-[#38bdf8] transition-colors">
                How It Works
              </Link>
            </li>
            <li>
              <Link href="/#testimonials" className="hover:text-[#38bdf8] transition-colors">
                Client Testimonials
              </Link>
            </li>
            <li>
              <Link href="/#blog" className="hover:text-[#38bdf8] transition-colors">
                Blog &amp; Insights
              </Link>
            </li>
            <li>
              <Link href="/#faq" className="hover:text-[#38bdf8] transition-colors">
                FAQ
              </Link>
            </li>
            <li>
              <Link href="/#contact" className="hover:text-[#38bdf8] transition-colors">
                Contact &amp; Support
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-[min(1180px,92%)] mx-auto border-t border-white/10 pt-8 flex items-center justify-between text-[13px] text-slate-500">
        <div>© {currentYear} Tech4Broker. All rights reserved.</div>
      </div>
    </footer>
  );
}
