import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Globe, ArrowRight } from "lucide-react";
import { cn } from "@/lib/cn";

export interface FooterProps {
  className?: string;
}

export function Footer({ className }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const platformLinks = [
    { label: "CRM", href: "/#customized" },
    { label: "Compliance", href: "/#compliant" },
    { label: "Trading Integration", href: "/#integrated" },
    { label: "Payments", href: "/#payments" },
    { label: "Automations & AI", href: "/#key-features" },
    { label: "Marketing", href: "/#key-features" },
    { label: "IB Suite", href: "/#key-features" },
    { label: "SupportIQ", href: "/#support" },
    { label: "Prop Trading", href: "/#prop-crm" },
    { label: "Mobile App", href: "/#mobile-app" },
    { label: "Integrations", href: "/#ecosystem" },
  ];

  const companyLinks = [
    { label: "About Us", href: "/#why-tech4broker" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Contact", href: "/#contact" },
    { label: "Blog", href: "/#blog" },
  ];

  return (
    <footer
      id="footer"
      aria-label="Site Footer"
      className={cn(
        "bg-[#0b0f19] pt-20 pb-12 text-slate-400 text-[14px] border-t border-white/5 relative w-full",
        className
      )}
    >
      <div className="w-[min(1240px,92%)] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 xl:gap-12 mb-16">
        {/* Brand Column */}
        <div className="sm:col-span-2 lg:col-span-4">
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

          <p className="max-w-[360px] leading-[1.65] text-slate-400 text-[14px]">
            The technology and infrastructure behind your trading business. From company setup and liquidity to MT4/MT5
            connectivity and prop-firm platforms.
          </p>
        </div>

        {/* Platform Links */}
        <div className="sm:col-span-1 lg:col-span-3">
          <h4 className="text-white font-bold mb-6 text-[14px] sm:text-[15px] tracking-wider uppercase">
            Platform
          </h4>
          <ul className="space-y-3">
            {platformLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-[#00B4E6] transition-colors inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Links */}
        <div className="sm:col-span-1 lg:col-span-2">
          <h4 className="text-white font-bold mb-6 text-[14px] sm:text-[15px] tracking-wider uppercase">
            Company
          </h4>
          <ul className="space-y-3">
            {companyLinks.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="hover:text-[#00B4E6] transition-colors inline-block"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information & Action */}
        <div className="sm:col-span-2 lg:col-span-3">
          <h4 className="text-white font-bold mb-6 text-[14px] sm:text-[15px] tracking-wider uppercase">
            Contact
          </h4>
          <ul className="space-y-4 text-[14px]">
            <li>
              <a
                href="mailto:sales@tech4broker.com"
                className="flex items-center gap-3 text-slate-300 hover:text-white transition-colors group"
              >
                <Mail className="w-4 h-4 text-[#00B4E6] shrink-0 group-hover:scale-110 transition-transform" />
                <span>sales@tech4broker.com</span>
              </a>
            </li>
            <li className="flex items-start gap-3 text-slate-300">
              <MapPin className="w-4 h-4 text-[#00B4E6] shrink-0 mt-1" />
              <span className="leading-relaxed">
                201 Haverstock Hill, Second Floor, London, NW3 4QG, UK
              </span>
            </li>
            <li className="flex items-center gap-3 text-slate-300">
              <Globe className="w-4 h-4 text-[#00B4E6] shrink-0" />
              <span>Global Operations</span>
            </li>
          </ul>

          {/* Theme Gradient CTA Button */}
          <div className="mt-7">
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#0A6CFF] to-[#00B4E6] text-white font-semibold text-[14px] shadow-[0_4px_20px_rgba(10,108,255,0.35)] hover:shadow-[0_8px_25px_rgba(10,108,255,0.5)] hover:brightness-105 active:scale-95 transition-all w-full sm:w-auto"
            >
              <span>Get in Touch</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-[min(1240px,92%)] mx-auto border-t border-white/10 pt-8 flex items-center justify-between text-[13px] text-slate-500">
        <div>© {currentYear} Tech4Broker. All rights reserved.</div>
      </div>
    </footer>
  );
}
