export interface ForexFeatureItem {
  id: string;
  title: string;
  description: string;
  icon:
    | "barChart"
    | "refresh"
    | "trendingUp"
    | "contact"
    | "clipboardCheck"
    | "rocket"
    | "shieldCheck"
    | "scanFace"
    | "server"
    | "store"
    | "fileText"
    | "share"
    | "messages"
    | "bell"
    | "megaphone"
    | "code"
    | "banknote"
    | "gift";
}

export const forexCrmContent = {
  header: {
    title: "Operations & Back office",
    subtitle: "Back Office System",
  },
  breadcrumbs: [
    { label: "Home", href: "/" },
    { label: "Every operational function, one platform.", href: "/products" },
    { label: "Operations & Back office", href: "/products/forex-crm" },
  ],
  overview: {
    kicker: "Forex CRM | Back Office System",
    description:
      "Syntellicore is a leading Forex CRM provider and complete Back Office System solution built for Forex Brokerages and Financial Organizations. It empowers brokers with an intuitive Traders' Room, a customizable mobile application, and seamless integration with trading platforms like MT4 and MT5. This CRM for Forex brokers simplifies complex operations, enhances customer experience, and ensures brokers have a secure, scalable, and user-friendly software.",
  },
  featuresSectionTitle: "Main Features",
  features: [
    {
      id: "business-intelligence",
      title: "Business Intelligence & Operational Reporting",
      description:
        "Create dashboards and reports across CRM activity, sales, customer management, compliance and brokerage operations. Syntellicore brings operational data together in one place, helping teams monitor workflows and day-to-day business activity.",
      icon: "barChart",
    },
    {
      id: "platform-integration",
      title: "Integration with MT4 / MT5 and Other Leading Trading Platforms",
      description:
        'Syntellicore seamlessly integrates with leading online trading platforms, including the MT4 trading platform, MT5 brokers, Vertex, cTrader, and MatchTrader. Supporting the "single wallet" concept, this Forex CRM system allows unified account management across platforms, ensuring efficiency and consistency for both brokers and traders.',
      icon: "refresh",
    },
    {
      id: "lead-management",
      title: "Lead Management and Automation",
      description:
        "Maximize efficiency with Syntellicore's advanced CRM lead management software. Automated lead attribution and assignment to sales pools streamline operations, reduce response times, and increase conversions. This feature helps Forex brokers improve customer service while building stronger relationships with traders.",
      icon: "trendingUp",
    },
    {
      id: "account-management",
      title: "Lead / Customer / Account Management",
      description:
        "Syntellicore's Customer and Account Management module is built for Forex brokers to simplify and automate client interactions. With customizable client information, fast response tools, and integrated automation, this Forex CRM provider helps enhance customer satisfaction, build loyalty, and streamline daily brokerage operations.",
      icon: "contact",
    },
    {
      id: "compliance-management",
      title: "Advanced Compliance Management",
      description:
        "Syntellicore's compliance management enhances efficiency with dynamic and managed questionnaires, intelligent risk detection, and precise KYC scoring. This robust system simplifies the regulated onboarding process, ensuring compliance and data security while adapting seamlessly to each customer's specific needs.",
      icon: "clipboardCheck",
    },
    {
      id: "marketing-automation",
      title: "Enhance Your Marketing Efforts with Precision and Ease",
      description:
        "Boost engagement with Syntellicore's marketing automation tools. Personalized email and SMS campaigns can be set up with ease, empowering brokers to reach clients at the right time. This CRM solution for Forex brokers helps automate communication, improve client engagement, and increase conversion rates.",
      icon: "rocket",
    },
    {
      id: "data-security",
      title: "Safeguard Your Customer Data with Syntellicore",
      description:
        "Your customer information is your most valuable asset. Syntellicore allows Forex brokerages to keep critical customer data secure, whether hosted on-premises or in a high-security cloud environment. As a trusted Forex CRM provider, Syntellicore prioritizes data protection and compliance.",
      icon: "shieldCheck",
    },
    {
      id: "auto-kyc-aml",
      title: "Auto KYC & AML",
      description:
        "Syntellicore automates compliance with AI-powered KYC and AML verification services. With support for documents, ID, address, date of birth, facial recognition, and AML checks, brokers can complete verifications within 30–60 seconds. This compliance management software streamlines onboarding and reduces fraud risks.",
      icon: "scanFace",
    },
    {
      id: "group-management",
      title: "Streamline Platform Operations with Group Management",
      description:
        "Syntellicore's Group Management feature makes it easy to configure MT4 and MT5 account groups while enhancing account opening processes. Combined with the multi-tier rebate module, this FX back office tool centralizes brokerage operations in a single backend portal for maximum efficiency.",
      icon: "server",
    },
    {
      id: "app-store",
      title: "Enhance Your CRM with Syntellicore's Versatile App Store",
      description:
        "Discover the flexibility of Syntellicore's App Store, a unique marketplace designed to expand Forex CRM capabilities. With hundreds of apps for customization, most at no extra cost, brokers can tailor their CRM system to meet evolving needs. This ensures a modern, cost-effective CRM solution for Forex brokers of all sizes.",
      icon: "store",
    },
    {
      id: "mifid-reporting",
      title: "Prepare for MiFID II/MiFIR Reporting with Syntellicore",
      description:
        "Syntellicore simplifies regulatory compliance by offering full MiFID II and MiFIR reporting capabilities. This Forex CRM system helps brokers meet transaction reporting requirements and other obligations, reducing risk while ensuring full compliance with European financial regulations.",
      icon: "fileText",
    },
    {
      id: "lead-distribution",
      title: "Automated Distribution of Leads and Customers",
      description:
        "With Syntellicore's Sales Pool Module, customers and leads are automatically assigned to the right sales teams. This automation streamlines the sales cycle, improves retention, and ensures Forex brokers have a scalable CRM lead management solution.",
      icon: "share",
    },
    {
      id: "zendesk-integration",
      title: "Syntellicore is Integrated with Zendesk chat and Support",
      description:
        "Syntellicore integrates with Zendesk for seamless customer support. All communication from chat, to phone, email, and tickets, is consolidated into each client's record. This Forex CRM provider enables brokers to deliver superior customer service and track client interactions more effectively.",
      icon: "messages",
    },
    {
      id: "notification-system",
      title: "Stay Proactive with Syntellicore's Notification System",
      description:
        "Syntellicore's proactive notification system ensures brokers never miss important client tasks. Even when not logged into the dashboard, backend users receive alerts for time-sensitive client needs, making this CRM system a reliable tool for customer relationship management.",
      icon: "bell",
    },
    {
      id: "campaign-module",
      title: "Enhance Your Marketing with Syntellicore's Campaign Module",
      description:
        "Syntellicore's Campaign Module offers comprehensive monitoring of leads, conversions, and other key metrics to maximize the effectiveness of your marketing efforts. This tool empowers your team to track the entire marketing funnel in real-time, from initial engagement to final conversion, enhancing both strategy and execution.",
      icon: "megaphone",
    },
    {
      id: "restful-api",
      title: "Elevate Your Business with Syntellicore's RESTful API",
      description:
        "Syntellicore's RESTful API connects your websites, apps, and trading portals with your in-house Traders' Room or mobile app. This makes it a versatile CRM solution developer tool, compatible with MT4, MT5, and other platforms, ensuring seamless brokerage integration.",
      icon: "code",
    },
    {
      id: "local-depositors",
      title: "Local Depositors (Payment Agents) feature",
      description:
        "The Local Depositors (Payment Agents) feature in Syntellicore CRM allows brokers to manage regional representatives who handle client deposits and withdrawals in local markets. This feature is especially useful for brokers operating in regions where conventional payment methods may be limited, offering a secure and trusted way for brokers to reach their clients via local intermediaries.",
      icon: "banknote",
    },
    {
      id: "loyalty-program",
      title: "Loyalty Program",
      description:
        "Syntellicore's Loyalty Program empowers brokers to increase engagement and strengthen long-term loyalty through structured rewards, VIP tiers, and performance-based progression. Integrated directly within Syntellicore's ecosystem, it delivers a streamlined way to recognize activity, drive trading volume, and enhance the client experience with high-value, redeemable rewards.",
      icon: "gift",
    },
  ] as ForexFeatureItem[],
};
