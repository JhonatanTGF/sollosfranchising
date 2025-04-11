'use client';

import React from 'react';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  shadow?: boolean;
};

export default function Card({ 
  children, 
  className = '',
  shadow = true
}: CardProps) {
  return (
    <div className={`bg-white p-6 ${shadow ? 'shadow-md' : ''} ${className}`}>
      {children}
    </div>
  );
}
