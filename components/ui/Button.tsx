import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "gold" | "outline" | "dark" | "ghost";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-white hover:bg-[#c68a1e] shadow-[0_10px_24px_-14px_rgba(217,154,40,0.9)]",
  outline:
    "border border-primary/30 text-primary-dark hover:border-primary hover:bg-primary/5",
  dark: "bg-primary text-white hover:bg-primary-dark",
  ghost: "text-primary hover:text-gold",
};

type ButtonProps = Omit<ComponentProps<typeof Link>, "href"> & {
  href: string;
  variant?: Variant;
  children: ReactNode;
};

export function Button({
  href,
  variant = "gold",
  className = "",
  children,
  ...rest
}: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
