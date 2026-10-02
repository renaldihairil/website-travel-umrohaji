import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "gold" | "outline" | "dark" | "ghost";

const variants: Record<Variant, string> = {
  gold: "bg-gold text-white hover:bg-[#c68a1e] shadow-[0_6px_20px_-8px_rgba(217,154,40,0.7)] hover:shadow-[0_10px_24px_-8px_rgba(217,154,40,0.5)]",
  outline:
    "border-2 border-primary/25 text-primary-dark hover:border-primary/60 hover:bg-primary/5",
  dark: "bg-primary text-white hover:bg-primary-dark",
  ghost: "text-primary hover:text-gold hover:bg-gold-soft",
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
      className={`inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 hover:-translate-y-0.5 ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Link>
  );
}
