import React from "react";
import { Container } from "@/components/ui/Container";
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
      <Container className="relative z-10 flex flex-col items-center">
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
      </Container>
    </section>
  );
}
