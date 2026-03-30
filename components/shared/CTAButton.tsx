import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

type Variant = "primary" | "secondary" | "outline" | "phone" | "ghost";

interface CTAButtonProps {
  variant?: Variant;
  href?: string;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  external?: boolean;
}

const variantClasses: Record<Variant, string> = {
  primary:
    "bg-bwp-blue hover:bg-bwp-blue-hover text-white font-semibold shadow-md hover:shadow-lg",
  secondary:
    "bg-white hover:bg-gray-50 text-bwp-dark font-semibold border-2 border-white shadow-md",
  outline:
    "bg-transparent hover:bg-bwp-blue/10 text-bwp-blue font-semibold border-2 border-bwp-blue",
  phone:
    "bg-green-600 hover:bg-green-700 text-white font-semibold shadow-md hover:shadow-lg",
  ghost:
    "bg-transparent hover:bg-white/10 text-white font-semibold underline-offset-2 hover:underline",
};

export default function CTAButton({
  variant = "primary",
  href,
  children,
  className = "",
  onClick,
  type = "button",
  disabled = false,
  external = false,
}: CTAButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-base transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-bwp-blue focus:ring-offset-2";
  const classes = `${base} ${variantClasses[variant]} ${disabled ? "opacity-50 cursor-not-allowed" : ""} ${className}`;

  if (href === BUSINESS.phoneHref || variant === "phone") {
    return (
      <a href={href ?? BUSINESS.phoneHref} className={classes}>
        {children}
      </a>
    );
  }

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  );
}
