import React from "react";
import { Container } from "@/components/ui/Container";
import { SectionCard } from "@/components/ui/SectionCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { PaymentLogoRow } from "./PaymentLogoRow";
import { cn } from "@/lib/cn";
import type { PaymentsData } from "@/types/content";

export interface PaymentsSectionProps {
  payments: PaymentsData;
  className?: string;
}

export function PaymentsSection({ payments, className }: PaymentsSectionProps) {
  return (
    <section
      id="payments"
      aria-labelledby="payments-heading"
      className={cn(
        "relative w-full py-16 sm:py-20 lg:py-[80px] overflow-hidden",
        className
      )}
    >
      {/* Background ambient glow: light blue to purple on right */}
      <div className="payments-section-ambient-glow" aria-hidden="true" />

      <Container className="relative z-10">
        {/* Centered Narrow Floating Rounded Card (width: min(1210px, 100% - 2rem)) */}
        <SectionCard
          maxWidth="medium"
          glow="payments"
          className="pt-10 sm:pt-12 pb-9 sm:pb-11 px-[var(--card-padding-x)]"
        >
          {/* Eyebrow 'PAYMENTS' + Section Title */}
          <SectionHeading
            id="payments-heading"
            eyebrow={payments.eyebrow}
            title={payments.title}
            align="center"
            titleAs="h2"
            className="w-full max-w-4xl"
          />

          {/* 5-Logo Horizontal Strip */}
          <div className="w-full mt-12 sm:mt-16 lg:mt-20">
            <PaymentLogoRow
              providers={payments.providers}
              animated={payments.animated}
            />
          </div>

        </SectionCard>
      </Container>
    </section>
  );
}
