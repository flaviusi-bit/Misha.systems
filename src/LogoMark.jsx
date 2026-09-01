import React from 'react';

export default function LogoMark(){
  return (
    <svg className="misha-logo-mark" viewBox="0 0 180 56" role="img" aria-label="MISHA Systems">
      <g fill="none" stroke="currentColor" strokeWidth="1.6">
        <circle cx="28" cy="28" r="21" opacity=".9" />
        <path d="M7 28h42M28 7c-7 6-10 13-10 21s3 15 10 21M28 7c7 6 10 13 10 21s-3 15-10 21" opacity=".65" />
        <path d="M15 40V22l13-10 13 10v18" />
        <path d="M20 40V25l8-6 8 6v15" strokeWidth="2.4" />
        <path d="M22 40V30l6-5 6 5v10" strokeWidth="2.2" />
      </g>
      <path d="M18 41l10-9 10 9" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round" />
      <text x="58" y="25" fill="currentColor" fontFamily="Manrope,Arial,sans-serif" fontSize="16" fontWeight="800" letterSpacing="2.8">MISHA</text>
      <text x="58" y="42" fill="currentColor" fontFamily="Manrope,Arial,sans-serif" fontSize="9" fontWeight="700" letterSpacing="2.1">SYSTEMS</text>
    </svg>
  );
}
