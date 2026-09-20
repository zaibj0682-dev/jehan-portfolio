"use client";
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

function AccordionRow({ item, open, onToggle }: { item: AccordionItem; open: boolean; onToggle: () => void }) {
  const bodyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!bodyRef.current) return;
    if (open) {
      bodyRef.current.style.height = bodyRef.current.scrollHeight + "px";
    } else {
      bodyRef.current.style.height = "0px";
    }
  }, [open]);

  return (
    <div className="border-b border-white/10">
      <button
        type="button"
        onClick={onToggle}
        className={cn(
          "w-full flex items-center justify-between",
          "py-5 text-left text-[16px] text-[rgba(255,255,255,0.8)] tracking-[-0.01em] leading-[1.5]",
          "transition-colors duration-300 hover:text-white"
        )}
        aria-expanded={open}
      >
        <span>{item.question}</span>
        <ChevronDown
          size={20}
          strokeWidth={1.5}
          className={cn(
            "shrink-0 ml-4 text-[rgba(255,255,255,0.65)] transition-transform duration-[425ms]",
            open && "rotate-180"
          )}
          style={{ transitionTimingFunction: "cubic-bezier(0.2,0,0.2,1)" }}
        />
      </button>
      <div
        ref={bodyRef}
        className="overflow-hidden"
        style={{
          height: 0,
          transition: "height 425ms cubic-bezier(0.2,0,0.2,1)",
        }}
      >
        <p className="pb-5 text-[15px] text-[rgba(255,255,255,0.65)] leading-[1.6] tracking-[-0.01em]">
          {item.answer}
        </p>
      </div>
    </div>
  );
}

export default function Accordion({ items }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="w-full">
      {items.map((item, i) => (
        <AccordionRow
          key={i}
          item={item}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}
