import React from "react";
import { Headphones } from "lucide-react";
import { Card } from "@/components/ui/Card";
import { ImagePlaceholder } from "@/components/ui/ImagePlaceholder";
import { cn } from "@/lib/cn";
import type { ChatCardContent } from "@/types/content";

export interface ChatCardProps {
  content: ChatCardContent;
  className?: string;
}

export function ChatCard({ content, className }: ChatCardProps) {
  const { title, messages } = content;

  return (
    <Card
      variant="glass"
      className={cn(
        "w-[305px] min-h-[225px] p-3.5 sm:p-4 flex flex-col justify-between select-none z-20 text-[var(--color-text)]",
        className
      )}
    >
      {/* Header: Headset icon + Title */}
      <div className="flex items-center gap-2 pb-2.5 border-b border-[rgba(15,23,42,0.06)]">
        <div className="w-6 h-6 rounded-full bg-[var(--color-primary)]/10 flex items-center justify-center shrink-0">
          <Headphones className="w-3.5 h-3.5 text-[var(--color-primary)]" aria-hidden="true" />
        </div>
        <span className="text-xs font-bold tracking-tight text-[var(--color-text)]">
          {title}
        </span>
      </div>

      {/* Message bubbles */}
      <div className="flex flex-col gap-2 py-1 text-[10.5px] sm:text-[11px] leading-tight">
        {messages.map((msg, index) => {
          const isAgent = msg.sender === "agent";
          const hideOnSmall = index >= 2 ? "hidden min-[400px]:flex" : "flex";

          if (isAgent) {
            return (
              <div
                key={msg.id}
                className={cn(
                  hideOnSmall,
                  "items-end justify-end gap-1.5 self-end max-w-[88%]"
                )}
              >
                <div className="bg-[#EBF3FF] text-[var(--color-text)] p-2 rounded-2xl rounded-br-xs shadow-xs text-right">
                  <p>{msg.text}</p>
                </div>
                <div className="shrink-0 mb-0.5">
                  <ImagePlaceholder
                    shape="circle"
                    width={20}
                    height={20}
                    colorToken={msg.avatarColorToken}
                    src={msg.avatarSrc}
                    alt={msg.avatarAlt}
                  />
                </div>
              </div>
            );
          }

          return (
            <div
              key={msg.id}
              className={cn(
                hideOnSmall,
                "items-end gap-1.5 self-start max-w-[88%]"
              )}
            >
              <div className="shrink-0 mb-0.5">
                <ImagePlaceholder
                  shape="circle"
                  width={20}
                  height={20}
                  colorToken={msg.avatarColorToken}
                  src={msg.avatarSrc}
                  alt={msg.avatarAlt}
                />
              </div>
              <div className="bg-white text-[var(--color-text)] p-2 rounded-2xl rounded-bl-xs shadow-xs border border-[rgba(15,23,42,0.04)]">
                <p>{msg.text}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Card>
  );
}
