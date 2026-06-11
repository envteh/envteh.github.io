import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "../../utils/utils";

interface ContainerProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode;
  className?: string;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn("container mx-auto grid px-6", className)} {...props}>
      {children}
    </div>
  );
}
