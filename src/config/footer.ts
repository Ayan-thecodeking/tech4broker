import type { FooterConfig } from "@/types/content";

export const footerConfig: FooterConfig = {
  columns: [
    {
      id: "core",
      title: "Core System",
      items: [
        "Built to handle high trading volumes",
        "Runs on scalable cloud infrastructure",
        "Easy-to-customize CRM and traders' area, no code needed",
        "Flexible visual interfaces with low-code options",
      ],
    },
    {
      id: "integrations",
      title: "Open Integrations",
      items: [
        "Connect with leading third-party providers",
        "Pre-integrated payment providers for global coverage",
        "Works smoothly with your existing broker tech stack",
        "API access",
      ],
    },
    {
      id: "bi",
      title: "BI & Reporting",
      items: [
        "Connects to your ERP and data warehouse",
        "Insights through leading BI tools",
        "Custom reports",
        "Reconciliations",
      ],
    },
    {
      id: "security",
      title: "Security",
      items: [
        "24/7 security monitoring",
        "Backups and multi-zone availability",
        "Professional-grade cybersecurity tooling and regular testing",
        "99.9% uptime target",
      ],
    },
    {
      id: "compliance",
      title: "Compliance",
      items: [
        "Multi-brand and multi-jurisdiction support",
        "Onboarding and compliance workflows built around your regulator",
        "Regulatory reporting",
      ],
    },
    {
      id: "automation",
      title: "Business Automation",
      items: [
        "Customizable onboarding flows",
        "Regulatory and risk management tools",
        "Automated assignment rules",
        "Customizable transactional messages to traders",
      ],
    },
  ],
  legalLinks: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms & Conditions", href: "/terms" },
  ],
  copyright: "Copyright {brand} © {year}",
};
