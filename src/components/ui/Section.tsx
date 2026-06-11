import type { ComponentPropsWithoutRef } from "react";
import { cn } from "../../utils/utils";

interface SectionProps extends ComponentPropsWithoutRef<"section"> {
  children: React.ReactNode;
  className?: string;
}

export function Section({ children, className, ...props }: SectionProps) {
  return (
    <section
      className={cn(
        "relative flex h-auto items-center overflow-hidden py-16 lg:py-28",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}
