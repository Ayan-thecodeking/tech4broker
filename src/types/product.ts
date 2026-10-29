export type ProductIconType =
  | "barChart"
  | "users"
  | "network"
  | "smartphone"
  | "mic";

export interface ProductFeatureItem {
  title: string;
  description: string;
}

export interface ProductItem {
  id: string;
  slug: string;
  name: string;
  shortDescription: string;
  fullDescription: string;
  icon: ProductIconType;
  badge?: string;
  features: ProductFeatureItem[];
  highlights: string[];
}
