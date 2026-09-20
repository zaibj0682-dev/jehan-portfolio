import { cn } from "@/lib/utils";
import Magnetic from "./Magnetic";

interface PrimaryButtonProps {
  children: React.ReactNode;
  href?: string;
  target?: string;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit";
  disabled?: boolean;
}

export default function PrimaryButton({
  children,
  href,
  target,
  onClick,
  className,
  type = "button",
  disabled,
}: PrimaryButtonProps) {
  const base = cn(
    "inline-flex items-center justify-center",
    "h-[48px] px-[36px]",
    "rounded-pill text-[14px] font-medium leading-none tracking-[-0.02em]",
    "bg-[rgba(255,255,255,0.8)] text-black",
    "transition-colors duration-300 ease-standard",
    "hover:bg-[#fff3f0]",
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-white/60",
    "disabled:opacity-50 disabled:cursor-not-allowed",
    "whitespace-nowrap",
    className
  );

  if (href) {
    return (
      <Magnetic>
        <a href={href} target={target} rel={target === "_blank" ? "noopener noreferrer" : undefined} className={base}>
          {children}
        </a>
      </Magnetic>
    );
  }
  return (
    <Magnetic>
      <button type={type} onClick={onClick} className={base} disabled={disabled}>
        {children}
      </button>
    </Magnetic>
  );
}
