import type {
  HeroContentData,
  StatsSectionData,
  TrustedData,
  IntegratedData,
  CompliantData,
  PaymentsData,
  SupportData,
  CustomizedData,
} from "@/types/content";

export const heroContent: HeroContentData = {
  eyebrow: "#1 Forex & Prop CRM",
  headingLines: ["Built for", "FX Brokers &", "Prop Firms"],
  sincePrefix: "Since",
  paragraph:
    "tech4broker gives brokers one platform to onboard, fund, and manage traders with the integrations and compliance you need.",
  tagline: "Trusted. Integrated. Compliant.",
  ctaButtonText: "BOOK A DEMO",
  ctaButtonUrl: "#demo",
  candlestick: {
    startDate: "4 Apr.",
    endDate: "11 Apr.",
    candles: [
      { open: 38, close: 52, high: 62, low: 32 },
      { open: 52, close: 40, high: 58, low: 34 },
      { open: 42, close: 68, high: 74, low: 38 },
      { open: 66, close: 50, high: 70, low: 44 },
      { open: 48, close: 36, high: 54, low: 30 },
      { open: 39, close: 58, high: 64, low: 35 },
      { open: 56, close: 72, high: 82, low: 50 },
      { open: 70, close: 84, high: 90, low: 64 },
      { open: 82, close: 68, high: 88, low: 62 },
      { open: 69, close: 78, high: 85, low: 60 },
      { open: 76, close: 64, high: 80, low: 58 },
      { open: 65, close: 82, high: 92, low: 60 },
    ],
  },
  balance: {
    label: "Your Balance",
    amount: "$116,721.61",
    buttonLabel: "Make a Deposit",
    depositUrl: "#deposit",
  },
  chat: {
    title: "Help Agent",
    messages: [
      {
        id: "msg-1",
        sender: "client",
        text: "Hi, can you please help me with my KYC process?",
        avatarColorToken: "purple",
        avatarAlt: "Client avatar",
      },
      {
        id: "msg-2",
        sender: "agent",
        text: "Sure! Everything checks out, so you can start investing.",
        avatarColorToken: "primary",
        avatarAlt: "Help agent avatar",
      },
      {
        id: "msg-3",
        sender: "client",
        text: "Thanks so much! Such a quick response 😊",
        avatarColorToken: "purple",
        avatarAlt: "Client avatar",
      },
    ],
  },
  placeholders: {
    tealPill: {
      alt: "Compliance and operations team portrait",
    },
    bluePill: {
      alt: "Account executive portrait",
    },
    purplePill: {
      alt: "Client support specialist portrait",
    },
  },
};

export const statsContent: StatsSectionData = {
  award: {
    enabled: true,
    badgeImage: "",
    badgeAlt: "Global Forex Awards B2B 2024 Voted #1 CRM",
    text: "Voted #1 CRM",
  },
  stats: [
    { value: 350, suffix: "+", label: "Clients" },
    { value: 10, suffix: "+", label: "trading platforms" },
    { value: 250, suffix: "+", label: "payment processors" },
    { value: 16, suffix: "+", label: "years old" },
  ],
};

export const trustedContent: TrustedData = {
  eyebrow: "TRUSTED",
  title: "Proven to work with {count}+ brokers just like you",
  count: 350,
  logos: [
    { name: "BlackBull", src: "", alt: "BlackBull Markets logo", href: "" },
    { name: "FXPIG", src: "", alt: "FXPIG logo", href: "" },
    { name: "markets.com", src: "", alt: "markets.com logo", href: "" },
    {
      name: "CENTURY FINANCIAL",
      src: "",
      alt: "Century Financial logo",
      href: "",
    },
    { name: "GTC", src: "", alt: "GTC FX logo", href: "" },
    { name: "Equiti", src: "", alt: "Equiti Brokerage logo", href: "" },
    { name: "Vantage", src: "", alt: "Vantage Markets logo", href: "" },
    { name: "IC Markets", src: "", alt: "IC Markets logo", href: "" },
  ],
};

export const integratedContent: IntegratedData = {
  eyebrow: "INTEGRATED",
  title: "Working with your favorite trading platforms",
  platforms: [
    {
      name: "MetaTrader 4",
      logo: "/images/platforms/mt4.svg",
      alt: "MetaTrader 4 logo",
    },
    {
      name: "MetaTrader 5",
      logo: "/images/platforms/mt5.svg",
      alt: "MetaTrader 5 logo",
    },
    {
      name: "cTrader",
      logo: "/images/platforms/ctrader.svg",
      alt: "cTrader logo",
    },
    {
      name: "cTrader SSO",
      logo: "/images/platforms/ctrader-sso.svg",
      alt: "cTrader SSO logo",
    },
    {
      name: "Trade Locker",
      logo: "/images/platforms/tradelocker.svg",
      alt: "Trade Locker logo",
    },
    {
      name: "CMC Markets",
      logo: "/images/platforms/cmc-markets.svg",
      alt: "CMC Markets logo",
    },
    {
      name: "DX-Trade",
      logo: "/images/platforms/dx-trade.svg",
      alt: "DX-Trade logo",
    },
    {
      name: "X Open Hub",
      logo: "/images/platforms/x-open-hub.svg",
      alt: "X Open Hub logo",
    },
  ],
  moreCount: 7,
  moreHref: "/integrations",
  cta: {
    label: "BOOK A DEMO",
    href: "/book-a-demo",
  },
};

export const compliantContent: CompliantData = {
  eyebrow: "COMPLIANT",
  kicker: "Worldwide Compliance",
  showRankBadge: true,
  title: "Keeping You Compliant Wherever You Are Regulated",
  description:
    "Our system meets all standards and requirements relevant to your jurisdiction.",
  jurisdictions: [
    { label: "UK – FCA", countryCode: "GB" },
    { label: "South Africa – FSCA", countryCode: "ZA" },
    { label: "Australia – ASIC", countryCode: "AU" },
    { label: "Cyprus – CySec", countryCode: "CY" },
    { label: "UAE – SCA", countryCode: "AE" },
    { label: "Mauritius – FSC", countryCode: "MU" },
    { label: "MiFID/ GDPR – Europe", countryCode: "EU" },
    { label: "Malaysia – FSA", countryCode: "MY" },
    { label: "Seychelles – FSA", countryCode: "SC" },
  ],
  moreLabel: "+ more jurisdictions",
  cta: {
    label: "BOOK A DEMO",
    href: "/book-a-demo",
  },
};

export const paymentsContent: PaymentsData = {
  eyebrow: "PAYMENTS",
  title: "Working with your favorite Payment providers",
  animated: true,
  providers: [
    {
      name: "CoinPayments",
      logo: "/images/payments/coinpayments.webp",
      alt: "CoinPayments logo",
      href: "",
    },
    {
      name: "crypto chill",
      logo: "/images/payments/cryptochill.webp",
      alt: "crypto chill logo",
      href: "",
    },
    {
      name: "CoinsPaid",
      logo: "/images/payments/coinspaid.webp",
      alt: "CoinsPaid logo",
      href: "",
    },
    {
      name: "match2pay",
      logo: "/images/payments/match2pay.webp",
      alt: "match2pay logo",
      href: "",
    },
    {
      name: "myfatoorah",
      logo: "/images/payments/myfatoorah.webp",
      alt: "myfatoorah logo",
      href: "",
    },
    {
      name: "PayPal",
      logo: "/images/payments/paypal.webp",
      alt: "PayPal logo",
      href: "",
    },
    {
      name: "Stripe",
      logo: "/images/payments/stripe.webp",
      alt: "Stripe logo",
      href: "",
    },
    {
      name: "Rapyd",
      logo: "/images/payments/rapyd.webp",
      alt: "Rapyd logo",
      href: "",
    },
    {
      name: "Axcess",
      logo: "/images/payments/axcess.webp",
      alt: "Axcess logo",
      href: "",
    },
    {
      name: "Skrill",
      logo: "/images/payments/skrill.webp",
      alt: "Skrill logo",
      href: "",
    },
    {
      name: "Nuvei",
      logo: "/images/payments/nuvei.webp",
      alt: "Nuvei logo",
      href: "",
    },
    {
      name: "AstroPay",
      logo: "/images/payments/astropay.webp",
      alt: "AstroPay logo",
      href: "",
    },
    {
      name: "Paymid",
      logo: "/images/payments/paymid.webp",
      alt: "Paymid logo",
      href: "",
    },
    {
      name: "B2B Pay",
      logo: "/images/payments/b2bpay.webp",
      alt: "B2B Pay logo",
      href: "",
    },
    {
      name: "Praxis",
      logo: "/images/payments/praxis.webp",
      alt: "Praxis logo",
      href: "",
    },
  ],
  moreCount: 250,
  moreHref: "/integrations",
};

export const supportContent: SupportData = {
  eyebrow: "SUPPORT",
  title: "We're Part of Your Team",
  features: [
    {
      title: "24/7 Dedicated Channel",
      description:
        "A private channel with our team, available around the clock.",
      tone: "pink",
      icon: {
        type: "image",
        src: "/support/1.webp",
        alt: "24/7 Dedicated Channel - Slack / Communication",
      },
    },
    {
      title: "Customer Service and Support",
      description: "Dedicated, personal help for your team.",
      tone: "blue",
      icon: {
        type: "image",
        src: "/support/2.webp",
        alt: "Customer Service and Support - Personal Help",
      },
    },
    {
      title: "99.9% Uptime",
      description: "Backups and multi-zone infrastructure keep you online.",
      tone: "teal",
      icon: {
        type: "image",
        src: "/support/3.webp",
        alt: "99.9% Uptime - Global Infrastructure and Backups",
      },
    },
  ],
  cta: {
    label: "BOOK A DEMO",
    href: "/book-a-demo",
  },
};

export const customizedContent: CustomizedData = {
  eyebrow: "CUSTOMIZED",
  title: "Your design, your business flows, your way",
  autoRotate: false,
  tabs: [
    {
      id: "white-label",
      label: "White Label CRM",
      heading:
        "Empower your sales and retention team with easy to use trader management tools",
      bullets: [
        "Create automated business workflows",
        "Generate reports to manage and optimise your operations",
        "Get Business Intelligence insights",
      ],
      visual: {
        type: "image",
        src: "/images/1.webp",
        alt: "White Label CRM preview",
      },
    },
    {
      id: "back-office",
      label: "Fully Customizable Back Office",
      heading: "Run your operations from one flexible back office",
      bullets: [
        "Control users and field-level permissions",
        "Set up onboarding flows per jurisdiction",
        "Manage multi-level IB commission structures",
        "Review security status and detailed logs",
      ],
      visual: {
        type: "image",
        src: "/images/2.webp",
        alt: "Customizable Back Office preview",
      },
    },
    {
      id: "traders-area",
      label: "Traders' Area",
      heading: "Give traders a smooth portal that keeps them coming back",
      bullets: [
        "A fully brandable portal for sign-up and onboarding",
        "Easy deposits and account management",
        "Works on any device",
      ],
      visual: {
        type: "image",
        src: "/images/3.webp",
        alt: "Traders' Area portal preview",
      },
    },
  ],
  mockup: {
    profile: {
      name: "Jane Lee",
      avatar: "",
    },
    stats: [
      { label: "Balance", value: "$110.00", delta: "+12.5%", trend: "up" },
      { label: "Equity", value: "$160.00", delta: "+16.2%", trend: "up" },
      { label: "Credit", value: "$50.00", delta: "-12.5%", trend: "down" },
    ],
    charts: [
      {
        title: "Lead by Status",
        bars: [12, 4, 15, 8, 17, 18],
        legend: [
          "No answer",
          "Blank",
          "New",
          "Interested",
          "Call back",
          "Call back future",
        ],
      },
      {
        title: "Deposit by Day",
        bars: [140, 60, 195, 85],
      },
    ],
    flow: [
      { label: "Registration", icon: "FileText" },
      { label: "Account created", icon: "User" },
      { label: "Email sent", icon: "Mail" },
    ],
  },
  cta: {
    label: "BOOK A DEMO",
    href: "/book-a-demo",
  },
};

export const ecosystemContent = {
  eyebrow: "ECOSYSTEM",
  title: "Grow your business with no constraints",
  subtitle:
    "tech4broker connects with the tools you already use, so one platform covers your needs",
  hub: { label: "tech4broker" },
  image: {
    src: "/images/4.webp",
    alt: "Tech4Broker Ecosystem",
  },
  categories: [
    {
      id: "registration",
      label: "REGISTRATION",
      position: "top" as const,
      items: [
        { name: "Sumsub", logo: "", alt: "Sumsub KYC & Identity Verification" },
        {
          name: "Shufti Pro",
          logo: "",
          alt: "Shufti Pro Identity Verification",
        },
        { name: "Muinmos", logo: "", alt: "Muinmos Regulatory Onboarding" },
      ],
      more: 6,
    },
    {
      id: "traders-tools",
      label: "TRADERS TOOLS",
      position: "left-top" as const,
      items: [
        { name: "Brokeree", logo: "", alt: "Brokeree Solutions" },
        { name: "Tools for Brokers", logo: "", alt: "Tools for Brokers" },
      ],
      more: 8,
    },
    {
      id: "payments",
      label: "PAYMENTS",
      position: "left-middle" as const,
      items: [
        { name: "Praxis", logo: "", alt: "Praxis Payment Gateway" },
        { name: "Nuvei", logo: "", alt: "Nuvei Payment Processing" },
        { name: "Stripe", logo: "", alt: "Stripe Payments" },
      ],
      more: 250,
    },
    {
      id: "platforms",
      label: "PLATFORMS",
      position: "left-bottom" as const,
      items: [
        { name: "cTrader", logo: "", alt: "Spotware cTrader Trading Platform" },
        { name: "MT4", logo: "", alt: "MetaTrader 4" },
        { name: "MT5", logo: "", alt: "MetaTrader 5" },
      ],
      more: 10,
    },
    {
      id: "bi",
      label: "BI",
      position: "right-top" as const,
      items: [
        { name: "Power BI", logo: "", alt: "Microsoft Power BI" },
        { name: "Tableau", logo: "", alt: "Tableau Business Intelligence" },
        { name: "Google Data Studio", logo: "", alt: "Looker Studio" },
      ],
      more: 10,
    },
    {
      id: "voip",
      label: "VOIP",
      position: "right-middle" as const,
      items: [
        { name: "Voiso", logo: "", alt: "Voiso Contact Center AI" },
        { name: "SquareTalk", logo: "", alt: "SquareTalk Cloud PBX" },
        { name: "CommPeak", logo: "", alt: "CommPeak VoIP" },
      ],
      more: 12,
    },
    {
      id: "news",
      label: "NEWS",
      position: "right-bottom" as const,
      items: [
        {
          name: "Trading Central",
          logo: "",
          alt: "Trading Central Market Research",
        },
        {
          name: "Autochartist",
          logo: "",
          alt: "Autochartist Technical Analysis",
        },
      ],
      more: 7,
    },
    {
      id: "marketing",
      label: "MARKETING",
      position: "bottom" as const,
      items: [
        { name: "AppsFlyer", logo: "", alt: "AppsFlyer Attribution" },
        { name: "Optimove", logo: "", alt: "Optimove CRM Marketing" },
        { name: "Mailchimp", logo: "", alt: "Mailchimp Automation" },
      ],
      more: 5,
    },
  ],
  cta: {
    label: "BOOK A DEMO",
    href: "/book-a-demo",
  },
};

export const keyFeaturesContent = {
  eyebrow: "KEY FEATURES",
  title: "Unleashing Traders' Full Potential",
  subtitle:
    "A holistic start-to-end experience, designed to keep traders with you at every step",
  tabs: [
    {
      id: "acquisition",
      label: "1. Traders Acquisition",
      step: 1,
      kicker: "Multi-Channel Trader Acquisition",
      heading: "Empower Sales Teams to Accelerate Conversions",
      description:
        "Bring in prospects from all your preferred channels and equip your sales team to start calling and converting.",
      visual: {
        type: "image" as const,
        src: "/images/5.webp",
        alt: "Multi-Channel Trader Acquisition preview",
      },
    },
    {
      id: "flows",
      label: "2. Automated Flows",
      step: 2,
      kicker: "Onboarding Flows",
      heading: "Effortless onboarding, however complex",
      description:
        "Handle complex onboarding while meeting your KYC and compliance requirements with fully customizable, automated flows.",
      visual: {
        type: "image" as const,
        src: "/images/6.webp",
        alt: "Automated onboarding and KYC flows preview",
      },
    },
    {
      id: "retention",
      label: "3. Trader Retention",
      step: 3,
      kicker: "Payments & Trader Retention",
      heading: "Supercharge client retention",
      description:
        "Frictionless deposits, transaction reconciliation and back-office management, with a great self-service experience on any device.",
      visual: {
        type: "image" as const,
        src: "/images/7.webp",
        alt: "Trader retention and back-office management preview",
      },
    },
    {
      id: "reports",
      label: "4. Reports & BO",
      step: 4,
      kicker: "Reporting & Business Optimization",
      heading: "Find hidden growth opportunities",
      description:
        "Improve profitability and performance at both macro and granular level with BI, reporting, data warehousing and ERP integration.",
      visual: {
        type: "image" as const,
        src: "/images/8.webp",
        alt: "BI reporting and data warehousing preview",
      },
    },
  ],
  mockup: {
    sources: [
      { name: "Channel 1", icon: "" },
      { name: "Channel 2", icon: "" },
      { name: "Channel 3", icon: "" },
    ],
    leads: [
      { initials: "AF", name: "Andrew Franks", status: "New" },
      { initials: "ML", name: "Marcus Lee", status: "New" },
      { initials: "SK", name: "Sarah Klein", status: "New" },
      { initials: "DP", name: "David Patel", status: "New" },
      { initials: "EB", name: "Elena Rostova", status: "New" },
      { initials: "JT", name: "James Taylor", status: "New" },
      { initials: "CK", name: "Chloe Kim", status: "New" },
    ],
    firstDeposits: {
      title: "First time deposits (count)",
      columns: [
        { label: "Today", value: "182", sub: "($2,030.00)" },
        { label: "Month", value: "5918", sub: "($58,511.00)" },
        { label: "Last month", value: "6799", sub: "($92,414.00)" },
      ],
    },
    deposits: {
      title: "Deposits (count)",
      columns: [
        {
          label: "Today",
          value: "1551",
          sub: "($23,351.00)",
          tone: "up" as const,
        },
        {
          label: "Month",
          value: "42606",
          sub: "($624,904.00)",
          tone: "up" as const,
        },
        {
          label: "Last month",
          value: "49106",
          sub: "($729,079.00)",
          tone: "down" as const,
        },
      ],
    },
    referrals: [
      { label: "Affiliates", icon: "Network" },
      { label: "Introducing brokers", icon: "Users" },
    ],
  },
  cta: {
    label: "BOOK A DEMO",
    href: "/book-a-demo",
  },
};
