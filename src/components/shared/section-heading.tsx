"use client";

import { ScrollReveal } from "./scroll-reveal";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = "center",
  className,
}: SectionHeadingProps) {
  return (
    <ScrollReveal
      className={`${className ?? "mb-16 md:mb-24"} ${align === "center" ? "text-center" : "text-left"}`}
    >
      {label && (
        <div className={`flex items-center gap-3 mb-5 ${align === "center" ? "justify-center" : ""}`}>
          <span className="w-8 h-[2px] bg-usbiot-red" />
          <span className="text-label text-usbiot-red">
            {label}
          </span>
          <span className="w-8 h-[2px] bg-usbiot-red" />
        </div>
      )}
      <h2 className="font-heading text-balance">{title}</h2>
      {description && (
        <p className={`mt-5 max-w-xl text-body-lg text-muted-foreground ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
