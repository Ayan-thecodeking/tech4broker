import type { Metadata, Viewport } from "next";
import { Poppins } from "next/font/google";
import { AppProviders } from "@/providers/app-providers";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: "tech4broker — #1 Forex & Prop CRM for Brokers",
  description:
    "tech4broker gives brokers one platform to onboard, fund, manage and retain traders, with the integrations and compliance coverage you need. Built for FX Brokers & Prop Firms.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${poppins.variable} h-full antialiased overflow-x-hidden`}
      suppressHydrationWarning
    >
      <body
        className="min-h-full flex flex-col bg-[var(--color-bg)] text-[var(--color-text)] font-sans selection:bg-[var(--color-primary)] selection:text-white overflow-x-hidden max-w-full"
        suppressHydrationWarning
      >
        <AppProviders>
          {children}
          <Footer />
        </AppProviders>
      </body>
    </html>
  );
}
