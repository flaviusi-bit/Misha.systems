import React from 'react';

export default function LogoMark(){
  return (
    <svg className="misha-logo-mark" viewBox="0 0 300 90" role="img" aria-label="MISHA Systems">
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
      <g transform="translate(4 4)">
        <circle cx="38" cy="27" r="23" fill="url(#mishaGlobe)" />
        <path d="M20 20c11-8 25-8 36 0M16 27h44M20 36c11 8 25 8 36 0M29 4c-6 7-8 15-8 23s2 16 8 23M47 4c6 7 8 15 8 23s-2 16-8 23" fill="none" stroke="#62aaff" strokeWidth="1" opacity=".72"/>
        <path d="M7 30 26 49 38 36 50 49 69 30 63 59 38 77 13 59Z" fill="#07152a" stroke="url(#mishaMetal)" strokeWidth="3" strokeLinejoin="round"/>
        <path d="M7 30 26 49 38 36 50 49 69 30" fill="none" stroke="url(#mishaMetal)" strokeWidth="3.8" strokeLinejoin="round"/>
        <path d="M28 49v20h20V49" fill="#07152a" stroke="url(#mishaMetal)" strokeWidth="2.6"/>
        <path d="M32 69V55l6-6 6 6v14" fill="none" stroke="#1685ff" strokeWidth="2.4"/>
        <path d="M38 69v8" stroke="#1685ff" strokeWidth="2.4"/>
      </g>
      <g fill="currentColor" fontFamily="Arial,Helvetica,sans-serif">
        <text x="91" y="38" fontSize="27" fontWeight="700" letterSpacing="4.2">MISHA</text>
        <text x="94" y="59" fontSize="11" fontWeight="700" letterSpacing="3.8">SYSTEMS</text>
        <line x1="94" y1="66" x2="130" y2="66" stroke="currentColor" strokeWidth="1.2"/>
        <line x1="188" y1="66" x2="224" y2="66" stroke="currentColor" strokeWidth="1.2"/>
      </g>
    </svg>
  );
}
