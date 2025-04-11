"use client";

import React from "react";

type SectionProps = {
  children: React.ReactNode;
  className?: string;
  bgColor?: "white" | "black" | "accent" | "light";
};

export default function Section({
  children,
  className = "",
  bgColor = "white",
}: SectionProps) {
  const bgClasses = {
    white: "bg-white text-black",
    black: "bg-black text-white",
    accent: "bg-[#446EEC] text-black",
    light: "bg-[#F5F5F5] text-black",
  };

  return (
    <section className={`section ${bgClasses[bgColor]} ${className}`}>
      <div className="container mx-auto px-4">{children}</div>
    </section>
  );
}
