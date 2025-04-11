'use client';

import Link from 'next/link';

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'accent';
  onClick?: () => void;
  className?: string;
};

export default function Button({ 
  children, 
  href, 
  variant = 'primary', 
  onClick,
  className = ''
}: ButtonProps) {
  const baseClasses = 'px-6 py-3 rounded-none uppercase font-bold tracking-wider hover:bg-opacity-90 transition-all';
  const variantClasses = {
    primary: 'bg-black text-white',
    accent: 'bg-[#D4AF37] text-black'
  };
  
  const buttonClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  
  if (href) {
    return (
      <Link href={href} className={buttonClasses}>
        {children}
      </Link>
    );
  }
  
  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}
