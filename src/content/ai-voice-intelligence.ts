export interface IntelligenceLoopStep {
  step: string;
  icon: "understand" | "learn" | "interpret" | "act";
  title: string;
  description: string;
}

export interface LeadScoreMetric {
  label: string;
  score: number;
}

export interface ConversionStepItem {
  step: string;
  icon: "sales" | "routing" | "triggers";
  title: string;
  description: string;
  highlighted?: boolean;
}

export interface VoiceTeamItem {
  icon: "phone" | "retention" | "support" | "compliance" | "market";
  title: string;
  description: string;
  highlighted?: boolean;
}

export const aiVoiceIntelligenceContent = {
  hero: {
    title: "Voice Analytics",
  },
  overview: {
    kicker: "AI VOICE INTELLIGENCE ANALYTICS",
    headingPart1: "The intelligence layer ",
    headingHighlight: "powering modern",
    headingPart2: " AI Voice Intelligence Engine",
    description:
      "AudioSense uses AI to analyze customer calls, detect sentiment, evaluate performance, and flag compliance risks, helping businesses enhance service and productivity.",
    pills: [
      "Lead Scoring",
      "Customer Scoring",
      "AI Voice Intelligence",
      "Real-Time Decisioning",
      "Behavioral Signals",
      "Sentiment Analysis",
      "Churn Prediction",
      "Lifecycle Automation",
    ],
    valueCards: [
      {
        icon: "target",
        title: "Acquisition",
        subtitle: "Smarter leads",
      },
      {
        icon: "pulse",
        title: "Conversion",
        subtitle: "Faster decisions",
      },
      {
        icon: "mic",
        title: "Retention",
        subtitle: "Voice signals",
      },
    ],
    meta: {
      author: "By Dynamic Works",
      locations: "Cyprus · UAE · Worldwide",
      tagline: "Self-improving intelligence loop",
    },
    form: {
      title: "See Voice Intelligence live",
      subtitle: "Tell us a bit about you. Replies in about 2 minutes.",
      buttonText: "Book my demo",
      gdprText:
        "I have read the GDPR Clause and I acknowledge and agree that my personal data will be processed in accordance with GDPR.*",
    },
  },
  intelligenceLoop: {
    kicker: "THE INTELLIGENCE LOOP",
    headingNormal: "A fully connected ",
    headingHighlight: "intelligence ecosystem.",
    description:
      "Every touchpoint becomes part of a self-improving intelligence loop. This is not a feature. It is the engine behind smarter acquisition, faster conversion and stronger retention.",
    steps: [
      {
        step: "01",
        icon: "understand",
        title: "Understand",
        description: "who your customers are",
      },
      {
        step: "02",
        icon: "learn",
        title: "Learn",
        description: "from how they behave.",
      },
      {
        step: "03",
        icon: "interpret",
        title: "Interpret",
        description: "what they say and feel.",
      },
      {
        step: "04",
        icon: "act",
        title: "Act",
        description: "in real-time to optimize outcomes.",
      },
    ] as IntelligenceLoopStep[],
  },
  leadIntelligence: {
    kicker: "01 - LEAD INTELLIGENCE",
    headingNormal: "Move beyond volume. ",
    headingHighlight: "Focus on value.",
    description:
      "Precision Lead Scoring evaluates every lead against the signals that actually predict conversion, not gut feel and not vanity metrics.",
    outcomesTitle: "Outcome",
    outcomes: [
      "Higher quality pipelines",
      "Optimized marketing spend",
      "Clear attribution of high-performing channels",
    ],
    engine: {
      title: "LEAD SCORE ENGINE",
      badge: "LIVE",
      metrics: [
        { label: "Acquisition source quality", score: 920 },
        { label: "Behavioral signals", score: 870 },
        { label: "Engagement patterns", score: 780 },
        { label: "Demographic & regional factors", score: 650 },
      ] as LeadScoreMetric[],
      compositeLabel: "COMPOSITE SCORE",
      compositeScore: "805",
      compositeMax: "/1000",
      intentBadge: "HIGH INTENT",
    },
  },
  conversionAcceleration: {
    kicker: "02 - CONVERSION ACCELERATION",
    headingNormal: "Real-time decisioning, ",
    headingHighlight: "smarter prioritization.",
    description:
      "Lead scores power the operational layer. Faster response times, increased conversion rates and more efficient sales operations, the moment the data changes.",
    cards: [
      {
        step: "01",
        icon: "sales",
        title: "Sales prioritization",
        description:
          "High-intent leads surface to the top of the queue automatically.",
      },
      {
        step: "02",
        icon: "routing",
        title: "Automated routing",
        description:
          "Leads route to the right desk, region or specialist based on score.",
        highlighted: true,
      },
      {
        step: "03",
        icon: "triggers",
        title: "Personalized triggers",
        description:
          "Engagement sequences fire based on real behavior, not blasts.",
      },
    ] as ConversionStepItem[],
  },
  voiceIntelligence: {
    kicker: "03 - AI VOICE INTELLIGENCE",
    headingNormal: "Every call becomes a structured source of ",
    headingHighlight: "business intelligence.",
    description:
      "Audiosense transcribes and analyzes 100% of customer interactions, evaluates agent performance, and feeds insight directly into the Syntellicore scoring models.",
    widget: {
      statusLabel: "LIVE CALL ANALYSIS · 04:32",
      agentInfo: "Agent: Maria · Lead #SC-29841",
      filters: [
        "SENTIMENT",
        "INTENT",
        "CONVERSION SIGNALS",
        "OBJECTIONS",
        "HESITATION",
        "CHURN RISK",
      ],
      insights: [
        {
          title: "Positive sentiment",
          description:
            "Increases conversion probability and lifts lead priority.",
          icon: "trend",
        },
        {
          title: "Negative sentiment",
          description:
            "Triggers retention workflows before risk becomes churn.",
          icon: "alert",
        },
        {
          title: "High intent signals",
          description:
            "Elevate lead priority instantly across teams and queues.",
          icon: "sparkles",
        },
      ],
    },
    builtFor: {
      kicker: "BUILT FOR",
      headingNormal: "Every team that lives on the ",
      headingHighlight: "phone.",
      description:
        "From the first sales call to long-term retention, Audiosense gives every voice-driven team the same intelligence layer.",
      teams: [
        {
          icon: "phone",
          title: "Conversion call centers",
          description:
            "Score every conversation, surface the leads ready to buy and coach agents in real time.",
        },
        {
          icon: "retention",
          title: "Retention call centers",
          description:
            "Detect churn signals early and trigger save-the-customer workflows before it is too late.",
          highlighted: true,
        },
        {
          icon: "support",
          title: "Customer support",
          description:
            "Measure sentiment, resolution quality and agent performance across 100% of interactions.",
        },
        {
          icon: "compliance",
          title: "Compliance",
          description:
            "Automatically monitor every call for regulatory keywords, disclosures and risk language.",
        },
        {
          icon: "market",
          title: "Market research",
          description:
            "Turn unstructured voice data into structured insight on market needs, objections and emerging trends.",
        },
      ] as VoiceTeamItem[],
    },
  },
  customerIntelligence: {
    kicker: "04 · CUSTOMER INTELLIGENCE",
    headingNormal: "Dynamic scores that ",
    headingHighlight: "evolve over time.",
    description:
      "Customer scores continuously adapt to what your customers actually do.",
    evolutionWidget: {
      title: "CUSTOMER SCORE · EVOLUTION",
      badge: "ADAPTIVE",
      milestones: [
        { score: "420", label: "DAY 1" },
        { score: "680", label: "DAY 30" },
        { score: "910", label: "DAY 90" },
      ],
    },
    signals: [
      "Financial activity and transactions",
      "Platform engagement",
      "Communication behavior",
      "Trading patterns",
      "Voice interaction insights",
    ],
    outcomesTitle: "OUTCOME",
    outcomes: [
      "Real-time visibility of customer value and risk",
      "Intelligent segmentation",
      "Precision targeting across lifecycle stages",
    ],
  },
  aggregatedIntelligence: {
    kicker: "05 · AGGREGATED INTELLIGENCE",
    headingNormal: "A single ",
    headingHighlight: "source of truth.",
    description:
      "Syntellicore unifies the signals that have always lived in silos. The system continuously learns from historical outcomes, detects behavioral patterns and refines scoring logic dynamically, transforming scoring into an adaptive intelligence model that improves over time.",
    sources: [
      { id: "01", label: "SOURCE 01", title: "CRM & onboarding" },
      { id: "02", label: "SOURCE 02", title: "Wallet & financial systems" },
      { id: "03", label: "SOURCE 03", title: "Trading platforms" },
      { id: "04", label: "SOURCE 04", title: "Communication channels" },
      { id: "05", label: "SOURCE 05", title: "Affiliate & partner networks" },
      { id: "06", label: "SOURCE 06", title: "Voice & interaction analytics" },
    ],
  },
  lifecycleEmbedded: {
    kicker: "07 · LIFECYCLE EMBEDDED",
    headingNormal: "From first touch to ",
    headingHighlight: "long-term value.",
    description:
      "Scores don't sit in a dashboard. They are embedded across every stage of the customer lifecycle, triggering the right action at the right moment.",
    stages: [
      {
        number: "1",
        title: "Acquisition",
        bullets: ["Lead qualification", "Channel optimization"],
      },
      {
        number: "2",
        title: "Onboarding",
        bullets: ["Personalized flows", "Readiness & risk"],
      },
      {
        number: "3",
        title: "Engagement",
        bullets: ["Behavioral segmentation", "Targeted communication"],
      },
      {
        number: "4",
        title: "Growth",
        bullets: ["Upsell opportunities", "Loyalty optimization"],
      },
      {
        number: "5",
        title: "Retention",
        bullets: ["Churn prediction", "Proactive intervention"],
      },
    ],
  },
  whyItMatters: {
    kicker: "09 · WHY IT MATTERS",
    headingNormal: "A true ",
    headingHighlight: "competitive advantage.",
    description:
      "One platform. One intelligence engine. Audiosense, embedded in Syntellicore, does not just manage operations - it understands behavior, interprets intent, predicts outcomes and drives action automatically.",
    cards: [
      {
        step: "01",
        title: "Operational efficiency",
        description:
          "Automation across the workflows that used to consume time and people.",
      },
      {
        step: "02",
        title: "Higher conversions",
        description:
          "Focus your sales force on the leads that actually convert.",
      },
      {
        step: "03",
        title: "Stronger retention",
        description:
          "Spot churn signals early enough to intervene before the customer leaves.",
      },
      {
        step: "04",
        title: "Deeper understanding",
        description:
          "Unified intelligence across every interaction, every signal, every channel.",
      },
      {
        step: "05",
        title: "Continuous learning",
        description:
          "New data updates scores instantly. Outcomes refine the model.",
      },
      {
        step: "06",
        title: "Marketing that performs",
        description:
          "Trigger-based campaigns, targeted messaging and timing optimization.",
      },
    ],
  },
  finalThought: {
    kicker: "FINAL THOUGHT",
    headingPart1: "This is where ",
    headingHighlight1: "CRM",
    headingHighlight2: "evolves.",
    progression: [
      "From storing data",
      "To understanding customers",
      "To driving outcomes",
    ],
    tagline:
      "Audiosense, inside Syntellicore, turns every interaction, every signal and every insight into a measurable business advantage.",
  },
  faq: {
    kicker: "FAQ",
    headingNormal: "Frequently ",
    headingHighlight: "asked.",
    items: [
      {
        question: "What is Audiosense AI Voice Intelligence Analytics?",
        answer:
          "Audiosense is an enterprise AI layer embedded directly into Syntellicore that listens to, transcribes, and analyzes customer calls in real time. It evaluates sentiment, detects compliance risks, scores agent effectiveness, and converts unstructured audio into actionable operational intelligence.",
      },
      {
        question: "How is Lead Scoring calculated?",
        answer:
          "Precision Lead Scoring uses machine learning algorithms to evaluate multiple behavioral signals simultaneously—including acquisition channel quality, digital platform engagement, communication responsiveness, and geographic indicators—generating an objective composite score from 0 to 1,000.",
      },
      {
        question: "What does AI Voice Intelligence actually analyze?",
        answer:
          "It analyzes 100% of customer VoIP interactions across acoustic sentiment, vocal tone, speaking pace, customer hesitation, objection language, keyword mentions, mandatory regulatory disclosure compliance, and churn risk indicators.",
      },
      {
        question: "How does voice analysis influence scoring?",
        answer:
          "Acoustic and sentiment signals feed directly into real-time customer and lead score models. High-intent vocal signals elevate lead priority and prompt immediate sales outreach, while frustration or churn markers trigger automated retention workflows before accounts go dormant.",
      },
      {
        question: "Can Customer Scoring evolve over the customer lifecycle?",
        answer:
          "Yes. Customer scores are fully adaptive and continuously recalibrate over 30, 60, and 90-day horizons based on live deposit frequencies, trading lot volumes, platform login patterns, support tickets, and communication trends.",
      },
      {
        question: "Where is the intelligence engine embedded?",
        answer:
          "The intelligence engine is deeply integrated across the entire brokerage architecture: the back-office CRM, sales prioritization queues, trading platform bridges, automated marketing auto-responders, and compliance reporting logs.",
      },
    ],
  },
};

