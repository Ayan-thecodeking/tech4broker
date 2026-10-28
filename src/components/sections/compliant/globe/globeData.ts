export interface GlobeJurisdiction {
  id: string;
  label: string;
  countryCode: string;
  countryName: string;
  authority: string;
  lat: number;
  lon: number;
  details: string;
}

export const GLOBE_JURISDICTIONS: GlobeJurisdiction[] = [
  {
    id: "gb",
    label: "UK – FCA",
    countryCode: "GB",
    countryName: "United Kingdom",
    authority: "Financial Conduct Authority (FCA)",
    lat: 51.5074,
    lon: -0.1278,
    details: "Tier-1 Broker Capital & Client Asset Protection",
  },
  {
    id: "eu",
    label: "MiFID/ GDPR – Europe",
    countryCode: "EU",
    countryName: "European Union",
    authority: "ESMA / MiFID II & GDPR",
    lat: 50.1109,
    lon: 8.6821,
    details: "Cross-Border Passporting & Best Execution",
  },
  {
    id: "cy",
    label: "Cyprus – CySec",
    countryCode: "CY",
    countryName: "Cyprus",
    authority: "Cyprus Securities & Exchange Commission (CySEC)",
    lat: 34.6841,
    lon: 33.0379,
    details: "CIF Licensing & Investor Compensation Fund",
  },
  {
    id: "ae",
    label: "UAE – SCA",
    countryCode: "AE",
    countryName: "United Arab Emirates",
    authority: "Securities & Commodities Authority (SCA)",
    lat: 25.2048,
    lon: 55.2708,
    details: "Category 1 & Category 2 License Readiness",
  },
  {
    id: "za",
    label: "South Africa – FSCA",
    countryCode: "ZA",
    countryName: "South Africa",
    authority: "Financial Sector Conduct Authority (FSCA)",
    lat: -26.2041,
    lon: 28.0473,
    details: "ODP & Authorized FSP Reporting Architecture",
  },
  {
    id: "sc",
    label: "Seychelles – FSA",
    countryCode: "SC",
    countryName: "Seychelles",
    authority: "Financial Services Authority (FSA)",
    lat: -4.6796,
    lon: 55.492,
    details: "Securities Dealer Regulatory Framework",
  },
  {
    id: "mu",
    label: "Mauritius – FSC",
    countryCode: "MU",
    countryName: "Mauritius",
    authority: "Financial Services Commission (FSC)",
    lat: -20.1609,
    lon: 57.5012,
    details: "Global Business (GBC) & Investment Dealer Alignment",
  },
  {
    id: "my",
    label: "Malaysia – FSA",
    countryCode: "MY",
    countryName: "Malaysia (Labuan)",
    authority: "Labuan Financial Services Authority (Labuan FSA)",
    lat: 3.139,
    lon: 101.6869,
    details: "Money Broking & Cross-Asian Regulatory Support",
  },
  {
    id: "au",
    label: "Australia – ASIC",
    countryCode: "AU",
    countryName: "Australia",
    authority: "Australian Securities & Investments Commission (ASIC)",
    lat: -33.8688,
    lon: 151.2093,
    details: "AFSL Compliant Client Money Segregation",
  },
];

export interface GlobeArc {
  from: string; // jurisdiction id
  to: string; // jurisdiction id
}

export const GLOBE_ARCS: GlobeArc[] = [
  { from: "gb", to: "eu" },
  { from: "eu", to: "cy" },
  { from: "cy", to: "ae" },
  { from: "gb", to: "ae" },
  { from: "gb", to: "za" },
  { from: "ae", to: "sc" },
  { from: "sc", to: "mu" },
  { from: "ae", to: "my" },
  { from: "my", to: "au" },
];
