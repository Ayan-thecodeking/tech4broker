import type { SiteConfig } from "@/types/content";

export const FOUNDED_YEAR = 2008;

export const siteConfig: SiteConfig = {
  brandName: "tech4broker",
  brandSub: "CRM",
  foundedYear: FOUNDED_YEAR,
  announcement: {
    guideName: "tech4broker",
    text: "Get your tech4broker guide and unlock better tech & better pricing",
    buttonLabel: "Download now",
    downloadUrl: "#download-guide",
  },
  navLinks: [
    {
      label: "Forex CRM",
      href: "#forex-crm",
    },
    {
      label: "Prop CRM",
      href: "#prop-crm",
    },
    {
      label: "Integrated",
      href: "#integrated",
      icon: "network",
      iconColor: "var(--color-purple)",
    },
    {
      label: "Compliant",
      href: "#compliant",
      icon: "checkCircle",
      iconColor: "var(--color-teal)",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  cta: {
    bookDemo: "BOOK A DEMO",
    bookDemoUrl: "#demo",
  },
};
