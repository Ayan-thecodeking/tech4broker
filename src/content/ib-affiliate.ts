export interface IbMainFeatureCard {
  id: string;
  icon: "network" | "ad" | "list";
  title: string;
  description: string;
}

export interface Ib360FeatureItem {
  id: string;
  icon: "builder" | "cpa" | "portal" | "api" | "branding" | "growth" | "apps" | "help";
  title: string;
  description: string;
}

export const ibAffiliateContent = {
  hero: {
    title: "Partner & IB management",
  },
  overview: {
    brandName: "RebateCore",
    brandSubtext: "Dynamic Works",
    description:
      "Multi-tier structures with real-time commission calculation and payouts.",
  },
  mainFeatures: {
    title: "Main Features",
    ctaButton: "Request a Demo",
    cards: [
      {
        id: "multi-tier",
        icon: "network",
        title: "Multi-Tier",
        description:
          "Unlike other systems, Syntellicore RebateCore empowers your Partners (both IBs & Affiliates) to build extensive referral networks of unlimited tiers. Embrace the potential for boundless expansion and elevate your business with our cutting-edge solution. Why placing limits when your multi-tier networks can have unlimited depth?",
      },
      {
        id: "multi-campaign",
        icon: "ad",
        title: "Multi-campaign",
        description:
          "Multi-campaign functionality enables each partner to run multiple campaigns in parallel. This includes campaigns to onboard CPA clients, campaigns based on Per-Lot, Commission, P&L, or even hybrid models. This flexibility allows for tailored strategies to maximize performance and results. No need to onboard your Partners multiple times in order to offer them multiple campaigns anymore.",
      },
      {
        id: "multi-schemed",
        icon: "list",
        title: "Multi-schemed",
        description:
          "Syntellicore RebateCore offers a powerful yet easy-to-use, template-driven rebate structure builder. Our extensive library of algorithms includes Per Lot, Per Deal, Spread per Lot, Per Volume, on P&L, and on Commission, all of which can be combined into a single, cohesive rebate structure. If these options don't meet your business requirements, custom algorithms can be coded into our system.",
      },
    ] as IbMainFeatureCard[],
  },
  features360: {
    title: "Get a 360° View of the RebateCore Features",
    items: [
      {
        id: "rebate-builder",
        icon: "builder",
        title: "Cutting-Edge Rebate Structure Builder",
        description:
          "Syntellicore RebateCore offers a powerful yet easy-to-use, template-driven rebate structure builder. Combine complex rebate rules, multi-tiered payout schedules, pip markups, and volume thresholds without complex coding.",
      },
      {
        id: "cpa",
        icon: "cpa",
        title: "CPA",
        description:
          "Comprehensive Cost Per Acquisition tracking with configurable qualification rules, deposit thresholds, minimum trading lot criteria, and automated validation for fast partner payouts.",
      },
      {
        id: "hybrid-portal",
        icon: "portal",
        title: "Hybrid Portal",
        description:
          "Give partners a unified, intuitive dashboard combining real-time performance analytics, sub-IB network trees, direct wallet withdrawals, and customizable marketing links.",
      },
      {
        id: "rest-api",
        icon: "api",
        title: "RESTful API for Partners",
        description:
          "Seamlessly connect partner websites, third-party lead generation tools, custom CRMs, and internal systems with secure, high-speed RESTful API endpoints.",
      },
      {
        id: "co-branding",
        icon: "branding",
        title: "Co-Branding",
        description:
          "Empower institutional and master partners to deliver custom-branded registration flows, dedicated landing pages, and localized client-facing touchpoints under their brand.",
      },
      {
        id: "performance-growth",
        icon: "growth",
        title: "Performance-based Revenue Growth",
        description:
          "Incentivize partner performance with automated tier promotions, dynamic volume bonuses, and multi-tier override payouts that scale as trading activity expands.",
      },
      {
        id: "apps-potential",
        icon: "apps",
        title: "Unleash Potential: Extend Functionality with Apps",
        description:
          "Enrich partner workflows by integrating directly with tech4broker's ecosystem of communication hubs, wallet infrastructure, auto-responders, and trading platforms.",
      },
      {
        id: "not-convinced",
        icon: "help",
        title: "Still not convinced?",
        description:
          "Contact our institutional specialists to arrange a guided walkthrough of RebateCore's multi-tier calculation engine and see how it automates complex partner disbursements.",
      },
    ] as Ib360FeatureItem[],
  },
};
