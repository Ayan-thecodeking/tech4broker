export type NavItemIconType = "handshake" | "network" | "checkCircle";

export interface NavDropdownProduct {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  icon: "barChart" | "users" | "network" | "smartphone" | "mic";
}

export interface NavLinkItem {
  label: string;
  href: string;
  icon?: NavItemIconType;
  iconColor?: string;
  isActive?: boolean;
  isDropdown?: boolean;
  dropdownProducts?: NavDropdownProduct[];
}

export interface SiteConfig {
  brandName: string;
  brandSub: string;
  foundedYear: number;
  announcement: {
    guideName: string;
    text: string;
    buttonLabel: string;
    downloadUrl: string;
  };
  navLinks: NavLinkItem[];
  cta: {
    bookDemo: string;
    bookDemoUrl: string;
  };
}

export interface CandlestickPoint {
  open: number;
  close: number;
  high: number;
  low: number;
}

export interface CandlestickCardContent {
  startDate: string;
  endDate: string;
  candles: CandlestickPoint[];
}

export interface BalanceCardContent {
  label: string;
  amount: string;
  buttonLabel: string;
  depositUrl: string;
}

export interface ChatMessage {
  id: string;
  sender: "client" | "agent";
  text: string;
  avatarColorToken: "teal" | "purple" | "primary" | "navy";
  avatarSrc?: string;
  avatarAlt: string;
}

export interface ChatCardContent {
  title: string;
  messages: ChatMessage[];
}

export interface HeroPlaceholdersContent {
  tealPill: {
    src?: string;
    alt: string;
  };
  bluePill: {
    src?: string;
    alt: string;
  };
  purplePill: {
    src?: string;
    alt: string;
  };
}

export interface HeroContentData {
  eyebrow: string;
  headingLines: string[];
  sincePrefix: string;
  paragraph: string;
  tagline: string;
  ctaButtonText: string;
  ctaButtonUrl: string;
  candlestick: CandlestickCardContent;
  balance: BalanceCardContent;
  chat: ChatCardContent;
  placeholders: HeroPlaceholdersContent;
}

export interface AwardData {
  enabled: boolean;
  badgeImage?: string;
  badgeAlt?: string;
  text: string;
}

export interface StatItemData {
  value: number;
  suffix: string;
  label: string;
}

export interface StatsSectionData {
  award: AwardData;
  stats: StatItemData[];
}

export interface TrustedLogo {
  name: string;
  src: string;
  alt: string;
  href?: string;
}

export interface TrustedData {
  eyebrow: string;
  title: string;
  count: number;
  logos: TrustedLogo[];
}

export interface TradingPlatform {
  name: string;
  logo: string;
  alt: string;
  href?: string;
}

export interface IntegratedData {
  eyebrow: string;
  title: string;
  platforms: TradingPlatform[];
  moreCount: number;
  moreHref?: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface JurisdictionItem {
  label: string;
  countryCode: string;
}

export interface CompliantData {
  eyebrow: string;
  kicker: string;
  showRankBadge?: boolean;
  title: string;
  description: string;
  jurisdictions: JurisdictionItem[];
  moreLabel: string;
  cta: {
    label: string;
    href: string;
  };
}

export interface PaymentProvider {
  name: string;
  logo: string;
  alt: string;
  href?: string;
}

export interface PaymentsData {
  eyebrow: string;
  title: string;
  animated: boolean;
  providers: PaymentProvider[];
  moreCount: number;
  moreHref: string;
}

export type FeatureTone = "pink" | "blue" | "teal";

export interface FeatureIconData {
  type: "lucide" | "image";
  name?: string;
  src?: string;
  alt?: string;
}

export interface SupportFeatureItem {
  title: string;
  description: string;
  tone: FeatureTone;
  icon: FeatureIconData;
}

export interface SupportData {
  eyebrow: string;
  title: string;
  features: SupportFeatureItem[];
  cta: {
    label: string;
    href: string;
  };
}

export type TabVisual =
  | { type: "dashboard" }
  | { type: "image"; src: string; alt?: string }
  | { type: "placeholder"; src?: string; alt?: string };

export interface CustomizedTabItem {
  id: string;
  label: string;
  heading: string;
  subheading?: string;
  bullets: string[];
  visual: TabVisual;
}

export interface MockupStatItem {
  label: string;
  value: string;
  delta: string;
  trend: "up" | "down";
}

export interface MockupChartItem {
  title: string;
  bars: number[];
  legend?: string[];
}

export interface MockupFlowItem {
  label: string;
  icon: string;
}

export interface CustomizedMockupData {
  profile: {
    name: string;
    avatar: string;
  };
  stats: MockupStatItem[];
  charts: MockupChartItem[];
  flow: MockupFlowItem[];
}

export interface CustomizedData {
  eyebrow: string;
  title: string;
  tabs: CustomizedTabItem[];
  mockup: CustomizedMockupData;
  cta: {
    label: string;
    href: string;
  };
  autoRotate?: boolean;
}

export type EcosystemPillPosition =
  | "top"
  | "left-top"
  | "left-middle"
  | "left-bottom"
  | "right-top"
  | "right-middle"
  | "right-bottom"
  | "bottom";

export interface EcosystemItem {
  name: string;
  logo: string;
  alt: string;
  href?: string;
}

export interface EcosystemCategory {
  id: string;
  label: string;
  position: EcosystemPillPosition;
  items: EcosystemItem[];
  more?: number;
}

export interface EcosystemData {
  eyebrow: string;
  title: string;
  subtitle: string;
  hub: {
    label: string;
  };
  image?: {
    src: string;
    alt?: string;
  };
  categories: EcosystemCategory[];
  cta: {
    label: string;
    href: string;
  };
}

export interface KeyFeaturesTabItem {
  id: string;
  label: string;
  step: number;
  kicker: string;
  heading: string;
  description: string;
  visual: {
    type: "acquisition" | "placeholder" | "image";
    src?: string;
    alt?: string;
  };
}

export interface KeyFeaturesSourceItem {
  name: string;
  icon?: string;
}

export interface KeyFeaturesLeadItem {
  initials: string;
  name: string;
  status: string;
}

export interface KeyFeaturesStatColumn {
  label: string;
  value: string;
  sub: string;
  tone?: "up" | "down";
}

export interface KeyFeaturesStatCardData {
  title: string;
  columns: KeyFeaturesStatColumn[];
}

export interface KeyFeaturesReferralNode {
  label: string;
  icon: string;
}

export interface KeyFeaturesMockupData {
  sources: KeyFeaturesSourceItem[];
  leads: KeyFeaturesLeadItem[];
  firstDeposits: KeyFeaturesStatCardData;
  deposits: KeyFeaturesStatCardData;
  referrals: KeyFeaturesReferralNode[];
}

export interface KeyFeaturesData {
  eyebrow: string;
  title: string;
  subtitle: string;
  tabs: KeyFeaturesTabItem[];
  mockup: KeyFeaturesMockupData;
  cta: {
    label: string;
    href: string;
  };
  autoRotate?: boolean;
}

export interface FooterColumnItem {
  id: string;
  title: string;
  items: string[];
}

export interface FooterLegalLink {
  label: string;
  href: string;
}

export interface FooterConfig {
  columns: FooterColumnItem[];
  legalLinks: FooterLegalLink[];
  copyright: string;
}


