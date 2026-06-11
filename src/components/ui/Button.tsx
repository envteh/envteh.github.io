import clsx from "clsx";

import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  href?: string;
  className?: string;
  target?: string;
}

export function Button({
  children,
  href,
  className,
  target,
  ...props
}: ButtonProps) {
  const classes = clsx(
    "inline-flex items-center justify-center",
    "rounded-xl",
    "transition-all duration-300 ease-out",
    "active:scale-95",
    "hover:scale-105 hover:-translate-y-1",
    className,
  );

  if (href) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={classes}
        {...(props as AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <button className={className} {...props}>
      {children}
    </button>
  );
}
