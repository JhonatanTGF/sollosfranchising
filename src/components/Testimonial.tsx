'use client';

import React from 'react';

type TestimonialProps = {
  quote: string;
  author: string;
  position?: string;
  avatarUrl?: string;
  className?: string;
};

export default function Testimonial({ 
  quote, 
  author,
  position,
  avatarUrl,
  className = ''
}: TestimonialProps) {
  return (
    <div className={`card ${className}`}>
      <p className="italic mb-4">"{quote}"</p>
      <div className="flex items-center">
        <div className="w-12 h-12 bg-gray-300 rounded-full mr-4">
          {avatarUrl && (
            <img 
              src={avatarUrl} 
              alt={author} 
              className="w-full h-full object-cover rounded-full"
            />
          )}
        </div>
        <div>
          <p className="font-bold">{author}</p>
          {position && <p className="text-sm">{position}</p>}
        </div>
      </div>
    </div>
  );
}
