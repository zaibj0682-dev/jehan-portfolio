import { cn } from "@/lib/utils";
import Magnetic from "./Magnetic";

interface GhostButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  className?: string;
  small?: boolean;
}

export default function GhostButton({ children, href, onClick, className, small }: GhostButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center",
    small ? "h-[32px] px-[24px]" : "h-[36px] px-[24px]",
    "rounded-pill text-[14px] leading-none tracking-[-0.02em]",
    "bg-[rgba(255,255,255,0.1)] text-[rgba(255,255,255,0.8)]",
    "transition-colors duration-300 ease-standard",
    "hover:bg-[rgba(255,255,255,0.25)]",
    "whitespace-nowrap",
    className
  );

  if (href) return <Magnetic><a href={href} className={base}>{children}</a></Magnetic>;
  return <Magnetic><button type="button" onClick={onClick} className={base}>{children}</button></Magnetic>;
}
