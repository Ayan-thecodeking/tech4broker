import type { ProductItem } from "@/types/product";

export const productsList: ProductItem[] = [
  {
    id: "forex-crm",
    slug: "forex-crm",
    name: "Forex CRM and Back Office",
    shortDescription:
      "Deposits, payouts, desks, brands and jurisdictions on one operational record.",
    fullDescription:
      "Unify all your operational workflows into a single centralized record. tech4broker's Forex CRM and Back Office enables multi-brand brokerages to monitor deposits, automated payouts, dealing desks, sales teams, and multi-jurisdictional compliance with complete auditability.",
    icon: "barChart",
    badge: "Core Platform",
    highlights: [
      "Unified multi-brand & multi-desk operational records",
      "Automated deposits, withdrawals & payout workflows",
      "Real-time liquidity and account balance tracking",
      "Multi-jurisdictional regulatory compliance logs",
    ],
    features: [
      {
        title: "Comprehensive Back Office",
        description:
          "Granular role-based access control for compliance officers, sales reps, support agents, and dealing desk operators.",
      },
      {
        title: "Multi-Brand & Multi-Jurisdiction",
        description:
          "Manage segregated legal entities and regional licenses from one unified administrative console.",
      },
      {
        title: "Automated Financial Workflows",
        description:
          "Direct integration with 50+ PSPs, crypto gateways, and manual ledger reconciliations.",
      },
      {
        title: "Audit & Risk Control",
        description:
          "Full immutable action logs, session tracking, and IP risk scoring for every administrative event.",
      },
    ],
  },
  {
    id: "traders-room",
    slug: "traders-room",
    name: "Trader's Room",
    shortDescription:
      "A single branded portal for onboarding, funding and platform access.",
    fullDescription:
      "A fast, modern client portal tailored to your brand identity. Trader's Room gives retail and institutional clients a friction-free experience to verify identity, manage multi-currency accounts, execute deposits, and launch trading platforms in one click.",
    icon: "users",
    badge: "Client Portal",
    highlights: [
      "Single sign-on across all trading terminals",
      "Instant KYC document upload & live status",
      "Multi-currency wallets with instant currency conversion",
      "Integrated ticket support & live chat assistance",
    ],
    features: [
      {
        title: "Seamless Onboarding",
        description:
          "Dynamic registration funnels with customizable compliance questionnaires and instant verification.",
      },
      {
        title: "Multi-Account Management",
        description:
          "Create and toggle demo, live, swap-free Islamic accounts across MT4, MT5, cTrader, and DXtrade.",
      },
      {
        title: "Frictionless Funding",
        description:
          "Deposit and withdraw with localized payment gateways, credit cards, bank wire, and crypto rails.",
      },
      {
        title: "White-Label Personalization",
        description:
          "Fully branded with your corporate colors, custom subdomains, logos, and localized translations.",
      },
    ],
  },
  {
    id: "ib-affiliate-system",
    slug: "ib-affiliate-system",
    name: "IB/Affiliate System",
    shortDescription:
      "Multi-tier structures with real-time commission calculation and payouts.",
    fullDescription:
      "Scale your brokerage's distribution network with our powerful Introducing Broker and Partner portal. Configure unlimited multi-tier hierarchy structures, calculate commissions in real time per lot or revenue share, and automate partner disbursements.",
    icon: "network",
    badge: "Growth & Growth",
    highlights: [
      "Unlimited multi-tier master and sub-IB hierarchies",
      "Real-time volume and revenue-share commission engine",
      "Dedicated partner portal with live tracking links",
      "Instant rebate payouts directly to partner wallets",
    ],
    features: [
      {
        title: "Flexible Commission Models",
        description:
          "Set up rebates by lot volume, fixed spread markups, pip percentage, or CPA milestones per instrument.",
      },
      {
        title: "Multi-Level Network Architecture",
        description:
          "Support Master IBs, sub-affiliates, country managers, and localized regional partners with transparent override tiers.",
      },
      {
        title: "Partner Marketing Hub",
        description:
          "Equip your affiliates with trackable referral links, branded banners, landing pages, and campaign analytics.",
      },
      {
        title: "Automated Payout Engine",
        description:
          "Schedule scheduled or on-demand commission payouts directly to trading wallets or bank accounts.",
      },
    ],
  },
  {
    id: "mobile-app-kyc",
    slug: "mobile-app-kyc",
    name: "Mobile App with online-KYC",
    shortDescription:
      "Onboard clients instantly with white-label mobile app. Perform KYC with OCR and NFC ID verification, enabling secure deposits, trading, and withdrawals in one branded solution.",
    fullDescription:
      "Deliver an exceptional on-the-go experience with our native white-label mobile app. Featuring built-in automated online-KYC with OCR camera scanning and biometric NFC chip verification, clients can register, get verified in under 60 seconds, fund their accounts, and trade from anywhere.",
    icon: "smartphone",
    badge: "Mobile & Identity",
    highlights: [
      "Native iOS and Android white-label builds",
      "Instant KYC with OCR scanning and NFC chip reading",
      "Integrated mobile wallet for deposits & withdrawals",
      "Biometric FaceID / fingerprint authentication",
    ],
    features: [
      {
        title: "AI-Powered Instant KYC",
        description:
          "Automatic document classification, optical character recognition (OCR), and biometric liveness checks in seconds.",
      },
      {
        title: "NFC Passport Verification",
        description:
          "Cryptographically read and verify biometric passports directly using the smartphone's built-in NFC reader.",
      },
      {
        title: "Complete In-App Wallet",
        description:
          "Traders deposit, transfer between accounts, and request withdrawals without leaving the mobile app.",
      },
      {
        title: "Push Notification Alerts",
        description:
          "Send instant alerts for margin warnings, deposit confirmations, economic calendar events, and price movements.",
      },
    ],
  },
  {
    id: "ai-voice-intelligence",
    slug: "ai-voice-intelligence",
    name: "AI Voice Intelligence Engine",
    shortDescription:
      "AudioSense uses AI to analyze customer calls, detect sentiment, evaluate performance, and flag compliance risks, helping businesses enhance service and productivity.",
    fullDescription:
      "Transform your brokerage sales and retention call center with AI voice intelligence. AudioSense continuously monitors VoIP and PBX calls, delivers real-time sentiment analysis, verifies mandatory regulatory disclosure scripts, and highlights high-value customer opportunities.",
    icon: "mic",
    badge: "AI Powered",
    highlights: [
      "Real-time voice-to-text transcription in 30+ languages",
      "Automated sentiment detection & conversational mood scoring",
      "Instant regulatory disclosure compliance verification",
      "Sales agent performance evaluation & conversion signals",
    ],
    features: [
      {
        title: "Call Sentiment & Intent Analysis",
        description:
          "Automatically flag frustrated callers, potential chargeback threats, or high-intent deposit leads during active calls.",
      },
      {
        title: "Automated Compliance Auditing",
        description:
          "Ensure sales representatives deliver required risk disclosures, avoiding costly regulatory fines and licensing penalties.",
      },
      {
        title: "Agent Coaching & Scoring",
        description:
          "Identify top-performing objection handling patterns and train junior account managers with AI-generated feedback.",
      },
      {
        title: "CRM Integration & Timeline Sync",
        description:
          "Full call transcripts, summaries, action items, and sentiment scores automatically attached to the client's CRM timeline.",
      },
    ],
  },
];

export function getProductBySlug(slug: string): ProductItem | undefined {
  return productsList.find((p) => p.slug === slug);
}
