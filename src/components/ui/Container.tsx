import React from "react";
import { cn } from "@/lib/cn";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  as?: React.ElementType;
}

export function Container({
  as: Component = "div",
  className,
  children,
  ...props
}: ContainerProps) {
  return (
    <Component
      className={cn(
        "w-full mx-auto max-w-[var(--container-max)] px-[var(--container-padding-x)]",
        className
      )}
      {...props}
    >
      {children}
    </Component>
  );
}
