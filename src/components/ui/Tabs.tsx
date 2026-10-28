"use client";

import React, { createContext, useContext, useRef, useId } from "react";
import { cn } from "@/lib/cn";

interface TabsContextValue {
  value: string;
  onValueChange: (val: string) => void;
  baseId: string;
}

const TabsContext = createContext<TabsContextValue | null>(null);

export function useTabsContext() {
  const context = useContext(TabsContext);
  if (!context) {
    throw new Error("Tabs components must be used within a TabsRoot provider");
  }
  return context;
}

export interface TabsRootProps {
  value: string;
  onValueChange: (val: string) => void;
  className?: string;
  children: React.ReactNode;
}

export function TabsRoot({
  value,
  onValueChange,
  className,
  children,
}: TabsRootProps) {
  const generatedId = useId();

  return (
    <TabsContext.Provider
      value={{
        value,
        onValueChange,
        baseId: generatedId,
      }}
    >
      <div className={cn("w-full flex flex-col items-center", className)}>
        {children}
      </div>
    </TabsContext.Provider>
  );
}

export interface TabsListProps {
  "aria-label"?: string;
  className?: string;
  children: React.ReactNode;
}

export function TabsList({
  "aria-label": ariaLabel = "Tabs",
  className,
  children,
}: TabsListProps) {
  const listRef = useRef<HTMLDivElement | null>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (!listRef.current) return;
    const buttons = Array.from(
      listRef.current.querySelectorAll<HTMLButtonElement>('[role="tab"]')
    );
    if (!buttons.length) return;

    const currentIndex = buttons.findIndex(
      (btn) => btn.getAttribute("aria-selected") === "true"
    );
    if (currentIndex === -1) return;

    let targetIndex = currentIndex;

    if (e.key === "ArrowRight" || e.key === "ArrowDown") {
      e.preventDefault();
      targetIndex = (currentIndex + 1) % buttons.length;
    } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
      e.preventDefault();
      targetIndex = (currentIndex - 1 + buttons.length) % buttons.length;
    } else if (e.key === "Home") {
      e.preventDefault();
      targetIndex = 0;
    } else if (e.key === "End") {
      e.preventDefault();
      targetIndex = buttons.length - 1;
    } else {
      return;
    }

    const targetButton = buttons[targetIndex];
    if (targetButton) {
      targetButton.click();
      targetButton.focus();
    }
  };

  return (
    <div
      ref={listRef}
      role="tablist"
      aria-label={ariaLabel}
      onKeyDown={handleKeyDown}
      className={cn("flex items-center justify-center", className)}
    >
      {children}
    </div>
  );
}

export interface TabTriggerProps {
  value: string;
  className?: string;
  activeClassName?: string;
  inactiveClassName?: string;
  children: React.ReactNode;
}

export function TabTrigger({
  value: tabValue,
  className,
  activeClassName,
  inactiveClassName,
  children,
}: TabTriggerProps) {
  const { value, onValueChange, baseId } = useTabsContext();

  const isSelected = value === tabValue;
  const tabId = `${baseId}-tab-${tabValue}`;
  const panelId = `${baseId}-panel-${tabValue}`;

  return (
    <button
      type="button"
      role="tab"
      id={tabId}
      aria-selected={isSelected}
      aria-controls={panelId}
      tabIndex={isSelected ? 0 : -1}
      onClick={() => onValueChange(tabValue)}
      className={cn(
        "transition-all duration-200 select-none",
        isSelected ? activeClassName : inactiveClassName,
        className
      )}
    >
      {children}
    </button>
  );
}

export interface TabPanelProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

export function TabPanel({ value: panelValue, className, children }: TabPanelProps) {
  const { value, baseId } = useTabsContext();
  const isSelected = value === panelValue;
  const tabId = `${baseId}-tab-${panelValue}`;
  const panelId = `${baseId}-panel-${panelValue}`;

  if (!isSelected) {
    return null;
  }

  return (
    <div
      role="tabpanel"
      id={panelId}
      aria-labelledby={tabId}
      tabIndex={0}
      className={cn("w-full outline-none", className)}
    >
      {children}
    </div>
  );
}
