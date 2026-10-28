export interface MobileFeatureCardItem {
  id: string;
  icon: "onboarding" | "store" | "biometric" | "payments" | "wallet" | "trading";
  title: string;
  description: string;
}

export const mobileAppKycContent = {
  hero: {
    title: "Mobile App with online-KYC",
  },
  overview: {
    heading: "Traders' Room Mobile App: Your Brand on the App Store",
    description:
      "The Syntellicore Mobile App redefines client engagement by becoming the first white-labelled mobile app in the Capital Markets sector, to feature native online KYC with built-in OCR and NFC ID verification. Fully branded and secure, it empowers clients to onboard, verify, deposit, trade, withdraw, and manage their accounts directly from their smartphones - delivering a seamless, all-in-one experience that accelerates conversions and boosts satisfaction.",
  },
  mainFeatures: {
    title: "Main Features",
    ctaButton: "Request a Demo",
    cards: [
      {
        id: "quick-onboarding",
        icon: "onboarding",
        title: "Enhance Client Onboarding with Quick Mobile Sign-Up",
        description:
          "Elevate client engagement using your branded mobile app. Simplify the user journey with seamless app download, swift pre-registration, and efficient KYC uploads. Enable instant deposits and streamlined withdrawals, alongside secure mobile trading, all through one integrated platform - accessible on iOS and Android.",
      },
      {
        id: "app-store",
        icon: "store",
        title: "White Label Mobile App, available on your App Store & Google Play",
        description:
          "Experience a native iOS/Android mobile app, custom-branded for your firm and accessible to your clients through your own App Store. Seamlessly connected to your Syntellicore CRM and trading platforms, this app empowers your clients with comprehensive trading and account management tools directly on their mobile devices.",
      },
      {
        id: "biometric",
        icon: "biometric",
        title: "MFA & Biometric Authentication",
        description:
          "Ensure your clients' account information remains secure with our advanced biometric authentication methods. Our mobile app supports multiple security layers, including FaceID, TouchID, PIN, pattern, and password verification, providing robust protection for your brokerage clients' data.",
      },
      {
        id: "payments",
        icon: "payments",
        title: "Mobile Payments: Easy Deposits & Withdrawals",
        description:
          "Expand your mobile app's payment capabilities with over 100 integrations from top Payment Service Providers (PSPs). Offer your clients the convenience of making effortless deposits via PSPs or wire transfers. Cater to a wide range of financial needs by providing multiple withdrawal options, both automated and manual, directly through your branded mobile application.",
      },
      {
        id: "wallet",
        icon: "wallet",
        title: "Centralized Mobile Wallet for Multi-Platform Trading",
        description:
          "Experience seamless fund management with the Syntellicore centralized wallet, integrated into your mobile app. Designed to support multiple trading platforms under a single customer profile, it allows clients to easily transfer funds between their wallet and trading accounts, in both same and cross-currency transactions. Optimize your trading efficiency and currency management with this robust mobile feature.",
      },
      {
        id: "trading",
        icon: "trading",
        title: "Mobile Trading for your Clients: Trade Anywhere, Anytime",
        description:
          "Empower your brokerage clients to invest on the go with our mobile app, designed to put trading at their fingertips. Featuring an embedded mobile web trader, it allows clients to open and close trades, monitor account balances, and assess trading account performance directly from their mobile devices - ensuring seamless investment management wherever they are.",
      },
    ] as MobileFeatureCardItem[],
  },
};
