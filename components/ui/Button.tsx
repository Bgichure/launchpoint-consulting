import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export default function Button({
  href,
  children,
  variant = "primary",
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition-all duration-300";

  const styles = {
    primary:
      "bg-[#0F172A] text-white hover:bg-[#1E293B] hover:-translate-y-1 shadow-lg",

    secondary:
      "border border-[#0F172A] text-[#0F172A] hover:bg-[#0F172A] hover:text-white",
  };

  return (
    <Link href={href} className={`${base} ${styles[variant]}`}>
      {children}
    </Link>
  );
}