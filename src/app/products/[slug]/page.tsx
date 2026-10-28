import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar } from "@/components/layout/Navbar";
import { siteConfig } from "@/config/site";
import { productsList, getProductBySlug } from "@/content/products";
import {
  BarChart3,
  Users,
  Network,
  Smartphone,
  Mic,
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Sparkles,
  Layers,
} from "lucide-react";
import { Button } from "@/components/ui/Button";

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return productsList.map((product) => ({
    slug: product.slug,
  }));
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    return {
      title: "Product Not Found | tech4broker",
    };
  }

  return {
    title: `${product.name} | tech4broker Products`,
    description: product.shortDescription,
  };
}

function ProductIcon({ icon }: { icon: string }) {
  const iconClasses = "w-7 h-7 text-[#00B4E6] shrink-0";
  const strokeWidth = 1.85;

  switch (icon) {
    case "barChart":
      return <BarChart3 className={iconClasses} strokeWidth={strokeWidth} />;
    case "users":
      return <Users className={iconClasses} strokeWidth={strokeWidth} />;
    case "network":
      return <Network className={iconClasses} strokeWidth={strokeWidth} />;
    case "smartphone":
      return <Smartphone className={iconClasses} strokeWidth={strokeWidth} />;
    case "mic":
      return <Mic className={iconClasses} strokeWidth={strokeWidth} />;
    default:
      return <BarChart3 className={iconClasses} strokeWidth={strokeWidth} />;
  }
}

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const otherProducts = productsList.filter((p) => p.slug !== product.slug);

  return (
    <div className="min-h-screen flex flex-col bg-[var(--color-bg)] text-[var(--color-text)]">
      {/* Floating Navbar */}
      <Navbar
        navLinks={siteConfig.navLinks}
        ctaText={siteConfig.cta.bookDemo}
        ctaUrl={siteConfig.cta.bookDemoUrl}
      />

      <main className="flex-1 pt-28 sm:pt-36 pb-20">
        <div className="max-w-[var(--container-max)] mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumbs */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-xs text-[var(--color-text-muted)] mb-8">
            <Link href="/" className="hover:text-[var(--color-primary)] transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-[var(--color-primary)] transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-[var(--color-text)] font-semibold">{product.name}</span>
          </nav>

          {/* Product Hero Section */}
          <div className="rounded-3xl border border-[var(--color-border)] bg-gradient-to-br from-white via-slate-50/70 to-blue-50/20 p-8 sm:p-12 lg:p-16 mb-16 shadow-xs">
            <div className="max-w-4xl">
              <div className="flex flex-wrap items-center gap-3.5 mb-6">
                <ProductIcon icon={product.icon} />
                {product.badge && (
                  <span className="text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-blue-50 text-[var(--color-primary)] border border-blue-200">
                    {product.badge}
                  </span>
                )}
              </div>

              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[var(--color-text)] tracking-tight mb-6">
                {product.name}
              </h1>

              <p className="text-lg sm:text-xl font-medium text-[var(--color-primary)] mb-4 leading-relaxed">
                {product.shortDescription}
              </p>

              <p className="text-base text-[var(--color-text-muted)] leading-relaxed mb-8 max-w-3xl">
                {product.fullDescription}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Button
                  variant="gradient"
                  size="lg"
                  href={siteConfig.cta.bookDemoUrl}
                  className="px-8"
                >
                  Schedule Demo
                </Button>
                <Link
                  href="/products"
                  className="inline-flex items-center gap-2 px-6 h-[48px] rounded-[var(--radius-pill)] border border-[var(--color-border)] bg-[var(--color-surface)] hover:bg-slate-50 text-sm font-semibold transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>All Products</span>
                </Link>
              </div>
            </div>
          </div>

          {/* Key Capabilities / Features */}
          <div className="mb-20">
            <div className="flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-[var(--color-primary)]" />
              <h2 className="text-xs font-bold uppercase tracking-wider text-[var(--color-primary)]">
                Core Capabilities
              </h2>
            </div>
            <h3 className="text-2xl sm:text-4xl font-extrabold text-[var(--color-text)] mb-8">
              Engineered for Enterprise Performance
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {product.features.map((feature, idx) => (
                <div
                  key={idx}
                  className="p-6 sm:p-8 rounded-2xl border border-slate-200/90 bg-white hover:border-[#0A6CFF] transition-all duration-200 shadow-xs hover:shadow-md"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="w-7 h-7 rounded-lg bg-blue-50 text-[var(--color-primary)] text-xs font-bold flex items-center justify-center shrink-0">
                      0{idx + 1}
                    </span>
                    <h4 className="text-base sm:text-lg font-bold text-[var(--color-text)]">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-sm text-[var(--color-text-muted)] leading-relaxed pl-10">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Highlights Checklist */}
          <div className="rounded-3xl border border-[var(--color-border)] bg-slate-50/80 p-8 sm:p-12 mb-20 shadow-xs">
            <h3 className="text-xl sm:text-2xl font-bold text-[var(--color-text)] mb-6">
              Operational Advantages
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {product.highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-xl bg-white border border-slate-200/80 shadow-xs"
                >
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-sm font-medium text-[var(--color-text)]">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modular Design Customization Slot (Ready for user's upcoming design) */}
          <div
            id="product-custom-design-slot"
            className="rounded-3xl border-2 border-dashed border-slate-300 p-8 sm:p-12 text-center mb-20 bg-slate-50/50"
          >
            <div className="max-w-md mx-auto">
              <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center mx-auto mb-4">
                <Layers className="w-6 h-6" />
              </div>
              <h4 className="text-base font-bold text-[var(--color-text)] mb-2">
                Custom Product Design Module
              </h4>
              <p className="text-xs text-[var(--color-text-muted)] leading-relaxed">
                This dedicated section is structured and ready to receive your bespoke product UI design, mockups, and interactive feature presentations.
              </p>
            </div>
          </div>

          {/* Other Products Switcher */}
          <div className="pt-8 border-t border-[var(--color-border)]">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-[var(--color-text)]">
                Explore Other Products
              </h3>
              <Link
                href="/products"
                className="text-xs font-semibold text-[var(--color-primary)] hover:underline inline-flex items-center gap-1"
              >
                <span>All Products</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {otherProducts.map((other) => (
                <Link
                  key={other.id}
                  href={`/products/${other.slug}`}
                  className="group p-5 rounded-2xl border border-slate-200/80 bg-[#F8FAFC]/80 hover:bg-white hover:border-[#0A6CFF] transition-all flex flex-col justify-between hover:shadow-md cursor-pointer"
                >
                  <div>
                    <div className="flex items-center gap-2.5 mb-2.5">
                      <ProductIcon icon={other.icon} />
                      <h4 className="text-sm font-bold text-[var(--color-text)] group-hover:text-[var(--color-primary)] transition-colors leading-snug">
                        {other.name}
                      </h4>
                    </div>
                    <p className="text-xs text-[var(--color-text-muted)] line-clamp-2 leading-relaxed">
                      {other.shortDescription}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1 text-xs font-medium text-[var(--color-primary)]">
                    <span>View module</span>
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
