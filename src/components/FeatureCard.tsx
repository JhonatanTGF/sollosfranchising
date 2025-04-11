'use client';

import React from 'react';
import Image from 'next/image';

type FeatureCardProps = {
  title: string;
  description: string;
  imagePlaceholder?: string;
  imageUrl?: string;
  className?: string;
};

export default function FeatureCard({ 
  title, 
  description,
  imagePlaceholder = 'Imagem',
  imageUrl,
  className = ''
}: FeatureCardProps) {
  return (
    <div className={`card ${className}`}>
      <div className="bg-gray-200 h-48 mb-4 flex items-center justify-center">
        {imageUrl ? (
          <Image 
            src={imageUrl} 
            alt={title}
            width={400}
            height={200}
            className="w-full h-full object-cover"
          />
        ) : (
          <p className="font-bold">{imagePlaceholder}</p>
        )}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p>{description}</p>
    </div>
  );
}
