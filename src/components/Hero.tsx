"use client";

import React from "react";

type HeroProps = {
  title: string;
  subtitle?: string;
  accentWord?: string;
  ctaText?: string;
  ctaLink?: string;
  className?: string;
};

export default function Hero({
  title,
  subtitle,
  accentWord,
  ctaText,
  ctaLink,
  className = "",
}: HeroProps) {
  // Substitui a palavra de destaque com a versão estilizada
  const formattedTitle = accentWord
    ? title.replace(
        accentWord,
        `<span class="text-[#446EEC]">${accentWord}</span>`
      )
    : title;

  return (
    <section
      className={`bg-black text-white py-20 md:py-32 ${className}`}
    >
      <div className="container mx-auto px-4">
        <div className="max-w-3xl">
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-black mb-6"
            dangerouslySetInnerHTML={{ __html: formattedTitle }}
          />

          {subtitle && <p className="text-xl mb-8">{subtitle}</p>}

          {ctaText && ctaLink && (
            <a href={ctaLink} className="btn-accent">
              {ctaText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
