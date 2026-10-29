import type { SiteConfig } from "@/types/content";
import { productsList } from "@/content/products";

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
      label: "Product",
      href: "/products",
      isDropdown: true,
      dropdownProducts: productsList.map((p) => ({
        id: p.id,
        slug: p.slug,
        name: p.name,
        shortDescription: p.shortDescription,
        icon: p.icon,
      })),
    },
    {
      label: "Prop CRM",
      href: "/#prop-crm",
    },
    {
      label: "Integrated",
      href: "/#integrated",
    },
    {
      label: "Compliant",
      href: "/#compliant",
    },
    {
      label: "Blog",
      href: "/#blog",
    },
    {
      label: "Contact",
      href: "/#contact",
    },
  ],
  cta: {
    bookDemo: "Book a demo",
    bookDemoUrl: "#demo",
  },
};
