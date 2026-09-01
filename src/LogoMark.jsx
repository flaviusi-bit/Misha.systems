import React from 'react';

export default function LogoMark(){
  return (
    <svg className="misha-logo-mark" viewBox="0 0 220 72" role="img" aria-label="MISHA Systems">
      <defs>
        <radialGradient id="mishaGlobe" cx="50%" cy="35%" r="65%">
          <stop offset="0" stopColor="#3f9cff" />
          <stop offset=".65" stopColor="#0b55c8" />
          <stop offset="1" stopColor="#061a4b" />
        </radialGradient>
        <linearGradient id="mishaMetal" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset=".42" stopColor="#a9b5c5" />
          <stop offset="1" stopColor="#647286" />
        </linearGradient>
      </defs>
      <g transform="translate(2 2)">
        <circle cx="34" cy="23" r="19" fill="url(#mishaGlobe)" />
        <path d="M18 16c10-7 22-7 32 0M15 23h38M18 31c10 7 22 7 32 0M27 5c-5 6-7 12-7 18s2 12 7 18M41 5c5 6 7 12 7 18s-2 12-7 18" fill="none" stroke="#62aaff" strokeWidth=".9" opacity=".7"/>
        <path d="M5 25 23 43 34 31 45 43 63 25 57 52 34 68 11 52Z" fill="#07152a" stroke="url(#mishaMetal)" strokeWidth="2.7" strokeLinejoin="round"/>
        <path d="M5 25 23 43 34 31 45 43 63 25" fill="none" stroke="url(#mishaMetal)" strokeWidth="3.4" strokeLinejoin="round"/>
        <path d="M25 43v17h18V43" fill="#07152a" stroke="url(#mishaMetal)" strokeWidth="2.3"/>
        <path d="M29 60V49l5-5 5 5v11" fill="none" stroke="#1685ff" strokeWidth="2"/>
        <path d="M34 60v8" stroke="#1685ff" strokeWidth="2"/>
      </g>
      <g fill="currentColor">
        <text x="76" y="31" fontFamily="Manrope,Arial,sans-serif" fontSize="20" fontWeight="800" letterSpacing="3.1">MISHA</text>
        <text x="77" y="48" fontFamily="Manrope,Arial,sans-serif" fontSize="9" fontWeight="700" letterSpacing="3">SYSTEMS</text>
      </g>
    </svg>
  );
}
