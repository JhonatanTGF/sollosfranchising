"use client";

import React from "react";

type StatCounterProps = {
  value: string | number;
  label: string;
  prefix?: string;
  className?: string;
};

export default function StatCounter({
  value,
  label,
  prefix = "",
  className = "",
}: StatCounterProps) {
  return (
    <div className={`text-center ${className}`}>
      <div className="text-5xl font-black text-[#446EEC] mb-2">
        {prefix}
        {value}
      </div>
      <p className="uppercase text-sm tracking-wider">{label}</p>
    </div>
  );
}
