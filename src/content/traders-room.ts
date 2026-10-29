export interface TradersStatItem {
  stat: string;
  label: string;
  subtext: string;
}

export interface TradersDepositCardItem {
  id: string;
  icon: "zap" | "scan" | "card" | "refresh" | "target";
  title: string;
  description: string;
}

export interface ComplianceCapabilityItem {
  title: string;
  description: string;
}

export const tradersRoomContent = {
  hero: {
    badge: "TRADERS ROOM KEY FEATURES AT A GLANCE",
    title: "Client Area",
    subtitle: "FOREX TRADER ROOM",
  },
  valueProp: {
    kicker: "BROKERAGE GROWTH & RETENTION INFRASTRUCTURE",
    headingNormal1: "Convert Faster. ",
    headingHighlight: "Stay Compliant.",
    headingNormal2: " Retain Longer.",
    description:
      "Accelerate first-time deposits and improve trader retention through intelligent onboarding, automated compliance workflows, frictionless wallet infrastructure, and AI-driven engagement tools - built for regulated Forex, CFD, multi-asset brokerages and exchanges.",
    checklistLeft: [
      "Faster onboarding journeys",
      "AI-powered retention intelligence",
      "Unified wallet & trading experience",
    ],
    checklistRight: [
      "Reduced Time-to-Deposit",
      "Multi-brand brokerage infrastructure",
    ],
    ctaButton: "Request a Demo",
    ctaLink: "See all Features",
    stats: [
      {
        stat: "3x",
        label: "FASTER TIME-TO-DEPOSIT",
        subtext: "vs legacy CRMs",
      },
      {
        stat: "+41%",
        label: "FTD CONVERSION",
        subtext: "with AI lead scoring",
      },
      {
        stat: "2x",
        label: "ONBOARDING COMPLETION",
        subtext: "with dynamic KYC",
      },
      {
        stat: "24/7",
        label: "OPERATIONAL UPTIME",
        subtext: "multi-region",
      },
    ] as TradersStatItem[],
  },
  theProblem: {
    kicker: "THE PROBLEM",
    headingNormal: "Brokerages need more than a ",
    headingHighlight: "basic client portal.",
    paragraph1:
      "Modern brokerages need faster onboarding, reduced friction, higher FTD conversion, stronger retention, compliance automation and operational scalability - all without sacrificing regulatory control.",
    paragraph2: "Syntellicore supports the full brokerage revenue lifecycle:",
    lifecycleSteps: [
      "Lead",
      "Verification",
      "Deposit",
      "Trading",
      "Retention",
    ],
  },
  firstTimeDeposits: {
    kicker: "ACCELERATE FIRST-TIME DEPOSITS",
    headingNormal: "Reduce friction. ",
    headingHighlight: "Increase deposits.",
    description:
      "Compress the path from registration to funded account - without exposing your brokerage to compliance risk.",
    cards: [
      {
        id: "onboarding",
        icon: "zap",
        title: "Fast Multi-Step Onboarding",
        description:
          "Progressive, mobile-first flows that eliminate form fatigue and adapt dynamically to client profiles.",
      },
      {
        id: "verification",
        icon: "scan",
        title: "Intelligent Verification",
        description:
          "OCR, biometric and NFC verification with automated KYC workflows - minutes, not days.",
      },
      {
        id: "deposits",
        icon: "card",
        title: "Frictionless Deposits",
        description:
          "Multi-currency wallet, localized PSPs and instant deposits engineered for global conversion.",
      },
      {
        id: "recovery",
        icon: "refresh",
        title: "Automated Lead Recovery",
        description:
          "CRM-triggered WhatsApp, email and SMS journeys that recover abandoned registrations.",
      },
      {
        id: "scoring",
        icon: "target",
        title: "AI Lead & Deposit Scoring",
        description:
          "Behavioral signals and deposit-probability indicators that focus your sales team where it matters.",
      },
    ] as TradersDepositCardItem[],
    directAnswer: {
      question: "How do brokers increase first-time deposits?",
      answer:
        "Brokerages improve first-time deposit conversion by reducing onboarding friction, automating compliance workflows, simplifying verification, optimizing payment experiences, and using intelligent engagement automation to recover incomplete registrations.",
    },
  },
  complianceDriven: {
    kicker: "COMPLIANCE-DRIVEN ONBOARDING",
    headingNormal: "High-speed onboarding built for ",
    headingHighlight: "regulated brokerages.",
    description:
      "Compliance should not slow growth. Syntellicore accelerates onboarding while maintaining strong operational and regulatory standards across every jurisdiction you serve.",
    capabilitiesLeft: [
      {
        title: "Risk-based onboarding",
        description: "Tiered KYC by client profile and exposure.",
      },
      {
        title: "Automated approvals",
        description: "Straight-through processing for low-risk profiles.",
      },
      {
        title: "Full audit trails",
        description: "Every action timestamped and exportable.",
      },
    ],
    capabilitiesRight: [
      {
        title: "Jurisdiction-aware workflows",
        description: "Per-license rules, documents and approved paths.",
      },
      {
        title: "AML-aware screening",
        description: "Live sanctions, PEP and adverse media checks.",
      },
      {
        title: "Configurable workflows",
        description: "Compliance teams own the rules - no engineering tickets.",
      },
    ],
    directAnswer: {
      question:
        "How can brokers onboard clients faster while remaining compliant?",
      answer:
        "Brokerages accelerate onboarding through automated KYC workflows, biometric verification, dynamic onboarding logic, OCR technologies and risk-based approval systems - reducing manual processing without compromising compliance standards.",
    },
  },
  retentionIntelligence: {
    kicker: "RETENTION INTELLIGENCE",
    headingNormal: "Predict retention risks ",
    headingHighlight: "before revenue is lost.",
    paragraph1:
      "Instead of reacting after traders disappear, proactively identify and engage clients at risk of churn through behavioral analytics, deposit intelligence, lifecycle scoring and intelligent engagement automation.",
    paragraph2:
      "Syntellicore helps retention and sales teams monitor activity patterns, surface inactivity trends, analyze deposit behavior, and trigger automated engagement designed to improve long-term trader activity, recurring deposits and client lifetime value.",
    widget: {
      title: "Retention Intelligence",
      windowBadge: "live • 30d window",
      metrics: [
        {
          id: "churnRisk",
          value: "12 clients",
          label: "CHURN RISK",
          icon: "alert",
          tone: "red",
        },
        {
          id: "highValue",
          value: "284",
          label: "HIGH-VALUE ACTIVE",
          icon: "users",
          tone: "blue",
        },
        {
          id: "timeToDeposit",
          value: "8m 42s",
          label: "AVG. TIME-TO-DEPOSIT",
          icon: "clock",
          tone: "teal",
        },
        {
          id: "depositProbability",
          value: "73%",
          label: "DEPOSIT PROBABILITY",
          icon: "chart",
          tone: "cyan",
        },
      ],
      chartTitle: "CHURN PROBABILITY - LAST 30 DAYS",
      chartLeftLabel: "30 days ago",
      chartRightLabel: "Today",
    },
    cards: [
      {
        id: "churnPrediction",
        title: "Churn Prediction & Risk Scoring",
        description:
          "Identify traders showing signs of inactivity through predictive analytics, behavioral trends and lifecycle risk indicators.",
      },
      {
        id: "inactivityAnalysis",
        title: "Inactivity & Engagement Analysis",
        description:
          "Monitor trading frequency, platform interactions and engagement to uncover retention opportunities before activity declines.",
      },
      {
        id: "depositSignals",
        title: "Deposit Behavior Signals",
        description:
          "Analyze deposit frequency, funding patterns and transaction behavior to prioritize clients needing attention.",
      },
      {
        id: "lifecycleAlerts",
        title: "Lifecycle Monitoring & Alerts",
        description:
          "Track the journey from onboarding to long-term activity with retention alerts, engagement scoring and automated triggers.",
      },
    ],
    autoResponder: {
      kicker: "AUTO RESPONDER MODULE",
      headingNormal: "Intelligent marketing ",
      headingHighlight: "automation, at scale.",
      description:
        "Trigger personalized email and SMS workflows automatically - recover inactive traders, encourage recurring deposits, reactivate dormant accounts and deliver timely market opportunities.",
      triggers: [
        "Inactivity patterns",
        "Deposit behavior",
        "Lifecycle stage",
        "Engagement signals",
        "Market conditions",
        "Trading activity",
        "Retention scenarios",
      ],
      outcomes: [
        "Recover inactive traders",
        "Encourage recurring deposits",
        "Reactivate dormant accounts",
        "Deliver market opportunities",
        "Strengthen long-term engagement",
      ],
      pillars: [
        {
          title: "Personalized at Scale",
          description:
            "Highly targeted messages tuned to behavior, activity and lifecycle intelligence.",
        },
        {
          title: "Intelligent Automation",
          description:
            "Set-and-optimize workflows that deliver the right message at the optimal moment.",
        },
        {
          title: "Scalable Retention",
          description:
            "Run targeted campaigns and mass communication while keeping personalization intact.",
        },
        {
          title: "Dynamic Engagement",
          description:
            "Behavioral analytics + market signals + lifecycle data for relevant, timely outreach.",
        },
      ],
    },
    strategicShift: {
      kicker: "STRATEGIC SHIFT",
      quoteBefore: "Enable retention teams to ",
      quoteHighlight: "proactively engage",
      quoteAfter:
        " traders based on behavioral trends, market conditions, deposit activity and lifecycle intelligence.",
    },
    directAnswer: {
      question: "How can brokers improve trader retention and reduce churn?",
      answer:
        "Brokerages can improve trader retention and reduce churn by combining predictive analytics, behavioral monitoring, deposit intelligence, lifecycle scoring and automated engagement workflows that proactively identify and engage traders before inactivity leads to revenue loss.",
    },
  },
  engagementAndDeposits: {
    kicker: "ENGAGEMENT & DEPOSITS",
    headingNormal: "Keep traders ",
    headingHighlight: "engaged longer.",
    paragraph1:
      "Increase client activity, strengthen retention, and encourage recurring deposits through intelligent engagement tools, behavioral analytics, market signals and predictive insights.",
    paragraph2:
      "Modern brokerages need more than notifications and promotional campaigns. Syntellicore combines intelligent communication workflows, behavioral monitoring, personalized interactions, market-driven engagement and predictive analytics to support long-term client activity.",
    strategicShift: {
      kicker: "STRATEGIC SHIFT",
      quoteBefore: "Move from reactive retention to ",
      quoteHighlight: "proactive engagement",
      quoteAfter:
        " - powered by behavioral trends, market conditions and activity signals.",
    },
    cards: [
      {
        id: "personalizedEngagement",
        icon: "bell",
        title: "Personalized Engagement Automation",
        subtitle:
          "Help retention teams communicate with the right traders at the right time.",
        checklistLeft: [
          "Segmented campaigns",
          "Personalized notifications",
          "Deposit activity triggers",
        ],
        checklistRight: [
          "Intelligent reminders",
          "Lifecycle-based communication",
          "WhatsApp / Email / SMS automation",
        ],
      },
      {
        id: "loyaltyRewards",
        icon: "gift",
        title: "Loyalty, Rewards & Retention",
        subtitle:
          "Encourage recurring deposits and long-term trading activity through configurable retention incentives.",
        checklistLeft: [
          "Cashback systems",
          "VIP structures",
          "Gamified engagement",
        ],
        checklistRight: ["Loyalty programs", "Rebate systems"],
      },
      {
        id: "marketSignals",
        icon: "pulse",
        title: "Market Signals & Trading Intelligence",
        subtitle:
          "Keep traders informed and active through relevant market signals and intelligent, market-driven engagement.",
        checklistLeft: [
          "Market movement alerts",
          "Trading activity signals",
          "Personalized market insights",
        ],
        checklistRight: [
          "Volatility-based opportunities",
          "Market trend notifications",
          "Interest-based engagement",
        ],
      },
      {
        id: "predictiveRetention",
        icon: "users",
        title: "Predictive Retention & Deposit Intelligence",
        subtitle:
          "Identify traders at risk of inactivity before revenue is lost and re-engage them proactively.",
        checklistLeft: [
          "Inactivity prediction",
          "Deposit behavior analysis",
          "Client lifecycle analytics",
        ],
        checklistRight: [
          "Churn-risk indicators",
          "Engagement scoring",
          "Retention opportunity alerts",
        ],
      },
    ],
    directAnswer: {
      question:
        "How can brokers increase recurring deposits and improve trader retention?",
      answer:
        "Brokerages can improve recurring deposits and trader retention by combining personalized engagement, loyalty systems, behavioral analytics, predictive retention intelligence, market-driven engagement opportunities and automated communication workflows that encourage ongoing trader activity.",
    },
  },
  aiInfrastructure: {
    kicker: "AI-POWERED INFRASTRUCTURE",
    headingNormal: "Built for the next generation of ",
    headingHighlight: "brokerage operations.",
    description:
      "From AI lead scoring to predictive analytics and conversational automation - Syntellicore embeds intelligence into every step of the brokerage lifecycle.",
    chips: [
      "AI lead scoring",
      "Predictive churn analytics",
      "Behavioral analytics",
      "Conversational AI",
      "Sentiment analysis",
      "AI workflow automation",
    ],
  },
  unifiedEcosystem: {
    kicker: "UNIFIED ECOSYSTEM",
    headingNormal: "One unified ecosystem for ",
    headingHighlight: "modern brokerages.",
    components: [
      { name: "CRM", icon: "crm" },
      { name: "Wallet System", icon: "wallet" },
      { name: "KYC / AML", icon: "kyc" },
      { name: "PSP Layer", icon: "psp" },
      { name: "Trading Platforms", icon: "platforms" },
      { name: "RebateCore", icon: "rebate" },
      { name: "Comms Hub", icon: "comms" },
      { name: "AI Layer", icon: "ai" },
    ],
    platformCoreBadge: "SYNTELLICORE PLATFORM CORE",
    platformCoreSubtext:
      "Onboarding • Payments • Retention • Intelligence • Communication",
  },
  deviceAndSecurity: {
    mobileFirst: {
      badge: "MOBILE-FIRST",
      title:
        "A trading experience designed for the device traders actually use.",
      checklistLeft: [
        "Mobile onboarding",
        "Biometric login",
        "Wallet management",
      ],
      checklistRight: [
        "NFC verification",
        "Push notifications",
        "Deposits & withdrawals",
      ],
    },
    enterpriseSecurity: {
      badge: "BUILT FOR OPERATIONAL CONFIDENCE",
      title: "Enterprise-grade security and operational control.",
      badges: [
        { label: "ISO 27001 aligned", icon: "shield" },
        { label: "MFA & SSO", icon: "lock" },
        { label: "Audit trails & monitoring", icon: "pulse" },
        { label: "Role-based permissions", icon: "userShield" },
        { label: "DORA-ready architecture", icon: "server" },
        { label: "Multi-region deployment", icon: "globe" },
      ],
    },
  },
  growthOperatingSystem: {
    kicker: "THE REVENUE OPERATING SYSTEM FOR BROKERAGES",
    headingNormal: "Build a brokerage experience designed for ",
    headingHighlight: "growth.",
    description:
      "Onboarding, compliance automation, wallet infrastructure, retention intelligence, partner ecosystems, engagement automation and AI-driven analytics - one unified platform engineered to help brokerages grow faster while maintaining operational control.",
    ctaButton: "Request a Demo",
    secondaryButton: "Talk to a brokerage specialist",
  },
  faqSection: {
    kicker: "FREQUENTLY ASKED",
    headingNormal: "Answers brokerages are ",
    headingHighlight: "searching for.",
    items: [
      {
        question: "What is a Trader's Room?",
        answer:
          "A modern Trader's Room is a unified client environment that combines onboarding, wallet management, compliance workflows, trading account management, communication tools, and retention capabilities into one brokerage ecosystem.",
      },
      {
        question: "How do brokers increase first-time deposits?",
        answer:
          "Brokerages improve first-time deposit conversion by reducing onboarding friction, automating compliance workflows, simplifying verification, optimizing payment experiences, and using intelligent engagement automation to recover incomplete registrations.",
      },
      {
        question:
          "How can brokers onboard clients faster while remaining compliant?",
        answer:
          "Brokerages accelerate onboarding through automated KYC workflows, biometric verification, dynamic onboarding logic, OCR technologies and risk-based approval systems - reducing manual processing without compromising compliance standards.",
      },
      {
        question: "How can AI improve brokerage retention?",
        answer:
          "AI improves brokerage retention by analyzing trader behavior, predicting churn risks before clients become inactive, scoring deposit probability, and triggering automated personalized retention journeys across WhatsApp, email, and SMS.",
      },
      {
        question: "What is the best CRM for Forex brokers?",
        answer:
          "The best Forex CRM provides a unified operational record integrating back-office administration, a high-converting multi-asset Trader's Room, multi-tier IB affiliate tracking, automated regulatory compliance, and seamless MT4/MT5 bridge connections.",
      },
      {
        question: "How do brokerages reduce time-to-deposit?",
        answer:
          "Brokerages reduce time-to-deposit by implementing progressive mobile-first onboarding, instant biometric and OCR verification, localized multi-currency payment gateways, and CRM-triggered automated lead recovery flows.",
      },
    ],
  },
};

