import React from "react";
import { FileText, User, Mail } from "lucide-react";
import { cn } from "@/lib/cn";
import type { MockupFlowItem } from "@/types/content";

export interface FlowCardProps {
  flow?: MockupFlowItem[];
  className?: string;
}

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  FileText,
  User,
  Mail,
};

export function FlowCard({ flow, className }: FlowCardProps) {
  const steps = flow && flow.length === 3 ? flow : [
    { label: "Registration", icon: "FileText" },
    { label: "Account created", icon: "User" },
    { label: "Email sent", icon: "Mail" },
  ];

  return (
    <div
      aria-hidden="true"
      className={cn(
        "w-full max-w-[315px] h-[105px] px-3.5 py-3 rounded-[20px] bg-white border border-blue-50/80 shadow-[var(--shadow-card)] select-none flex items-center justify-between",
        className
      )}
    >
      {steps.map((step, idx) => {
        const IconComponent = iconMap[step.icon] || FileText;

        return (
          <React.Fragment key={step.label}>
            {/* Step Node */}
            <div className="flex flex-col items-center justify-center text-center">
              <div className="w-[38px] h-[38px] rounded-full bg-[var(--color-primary)] text-white flex items-center justify-center shadow-md shadow-blue-500/25">
                <IconComponent size={18} className="text-white" />
              </div>
              <span className="text-[10px] font-[number:var(--fw-medium)] text-gray-700 mt-1.5 whitespace-nowrap leading-tight">
                {step.label}
              </span>
            </div>

            {/* Dotted Arrow Connector between steps */}
            {idx < steps.length - 1 && (
              <div className="flex items-center justify-center w-[25px] -mt-4 text-[var(--color-primary)] opacity-70">
                <svg
                  width="26"
                  height="8"
                  viewBox="0 0 26 8"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <line
                    x1="0"
                    y1="4"
                    x2="20"
                    y2="4"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeDasharray="2 3"
                  />
                  <path
                    d="M19 1.5L24 4L19 6.5"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}
