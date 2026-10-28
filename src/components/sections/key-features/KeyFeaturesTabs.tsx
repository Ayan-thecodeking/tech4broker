"use client";

import React, {
  useState,
  useEffect,
  useRef,
  useTransition,
} from "react";
import { TabsRoot, TabsList, TabTrigger } from "@/components/ui/Tabs";
import { FeaturePanel } from "./FeaturePanel";
import { cn } from "@/lib/cn";
import type { KeyFeaturesData } from "@/types/content";

export interface KeyFeaturesTabsProps {
  data: KeyFeaturesData;
  className?: string;
}

export function KeyFeaturesTabs({ data, className }: KeyFeaturesTabsProps) {
  const { tabs, mockup, cta, autoRotate = false } = data;
  const firstTabId = tabs[0]?.id || "acquisition";

  const [activeTab, setActiveTab] = useState<string>(firstTabId);
  const [isPending, startTransition] = useTransition();
  const tabsListRef = useRef<HTMLDivElement | null>(null);
  const isFirstRender = useRef(true);

  // Smoothly centers active tab pill inside the horizontal container ONLY (never scrolls window)
  const scrollActiveTabIntoView = (tabId: string) => {
    const container = tabsListRef.current;
    if (!container) return;
    const activeBtn = container.querySelector<HTMLElement>(
      `[data-tab-id="${tabId}"]`
    );
    if (!activeBtn) return;

    const containerRect = container.getBoundingClientRect();
    const btnRect = activeBtn.getBoundingClientRect();
    const scrollOffset =
      btnRect.left -
      containerRect.left +
      container.scrollLeft -
      containerRect.width / 2 +
      btnRect.width / 2;

    container.scrollTo({
      left: Math.max(0, scrollOffset),
      behavior: "smooth",
    });
  };

  // 1. Initial Hash Deep-linking on mount and hash changes
  useEffect(() => {
    const onHashChange = () => {
      const hash = window.location.hash.replace("#", "");
      if (hash && tabs.some((t) => t.id === hash)) {
        setActiveTab(hash);
      }
    };

    window.addEventListener("hashchange", onHashChange);

    const timer = setTimeout(() => {
      if (window.location.hash) {
        onHashChange();
      }
    }, 0);

    return () => {
      clearTimeout(timer);
      window.removeEventListener("hashchange", onHashChange);
    };
  }, [tabs]);

  // 2. Handle user tab selection
  const handleTabChange = (newTabId: string) => {
    startTransition(() => {
      setActiveTab(newTabId);
    });
    if (typeof window !== "undefined" && window.history.replaceState) {
      window.history.replaceState(null, "", `#${newTabId}`);
    }
    scrollActiveTabIntoView(newTabId);
  };

  // 3. Auto-scroll active tab into view when activeTab changes (skipped on mount)
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    scrollActiveTabIntoView(activeTab);
  }, [activeTab]);

  // 4. Optional auto-rotate
  useEffect(() => {
    if (!autoRotate || tabs.length <= 1) return;
    const interval = setInterval(() => {
      setActiveTab((prev) => {
        const currentIndex = tabs.findIndex((t) => t.id === prev);
        const nextIndex = (currentIndex + 1) % tabs.length;
        const nextTabId = tabs[nextIndex]?.id || firstTabId;
        if (typeof window !== "undefined" && window.history.replaceState) {
          window.history.replaceState(null, "", `#${nextTabId}`);
        }
        return nextTabId;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [autoRotate, tabs, firstTabId]);

  const activeTabItem = tabs.find((t) => t.id === activeTab) || tabs[0];

  return (
    <div className={cn("w-full flex flex-col items-center", className)}>
      <TabsRoot value={activeTab} onValueChange={handleTabChange} className="w-full">
        {/* =========================================================================
            TABS ROW: Centered, pills ~36px height, gap ~20px, scroll-snap with edge fade
            ========================================================================= */}
        <div className="w-full relative py-1 [mask-image:linear-gradient(to_right,transparent,black_20px,black_calc(100%-20px),transparent)] md:[mask-image:none]">
          <div
            ref={tabsListRef}
            className="w-full overflow-x-auto no-scrollbar scroll-smooth snap-x snap-mandatory flex justify-start md:justify-center px-4"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            <TabsList
              aria-label="Key features tabs"
              className="flex items-center gap-3 sm:gap-4 md:gap-5 shrink-0"
            >
              {tabs.map((tab) => (
                <div key={tab.id} data-tab-id={tab.id} className="snap-center shrink-0">
                  <TabTrigger
                    value={tab.id}
                    className="h-[36px] px-4 rounded-[var(--radius-pill)] text-[13.5px] sm:text-[14.5px] transition-all duration-200 cursor-pointer flex items-center justify-center whitespace-nowrap shadow-2xs"
                    activeClassName="tab-pill-active"
                    inactiveClassName="tab-pill-inactive"
                  >
                    {tab.label}
                  </TabTrigger>
                </div>
              ))}
            </TabsList>
          </div>
        </div>

        {/* =========================================================================
            ACTIVE PANEL CONTENT: Transitioning between tabs
            ========================================================================= */}
        <div className="w-full mt-8 sm:mt-10 lg:mt-[40px] overflow-hidden">
          {activeTabItem && (
            <div
              key={activeTabItem.id}
              role="tabpanel"
              id={`panel-${activeTabItem.id}`}
              aria-labelledby={`tab-${activeTabItem.id}`}
              className={cn(
                "w-full transition-all duration-300 ease-out",
                isPending
                  ? "opacity-60 scale-[0.99] translate-y-1"
                  : "opacity-100 scale-100 translate-y-0"
              )}
            >
              <FeaturePanel
                tab={activeTabItem}
                mockup={mockup}
                cta={cta}
              />
            </div>
          )}
        </div>
      </TabsRoot>
    </div>
  );
}
