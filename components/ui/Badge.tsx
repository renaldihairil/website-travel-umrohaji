import type { ReactNode } from "react";

type BadgeProps = {
  children: ReactNode;
  variant?: "gold" | "green";
  className?: string;
};

export function Badge({ children, variant = "green", className = "" }: BadgeProps) {
  const styles =
    variant === "gold"
      ? "bg-gold text-white"
      : "bg-primary text-white";

  return (
    <span
      className={`pkg-badge ${styles} ${className}`}
    >
      {children}
    </span>
  );
}
