import React from 'react';

export default function LogoMark(){
  return (
    <svg className="misha-logo-mark" viewBox="0 0 320 100" role="img" aria-label="MISHA Systems" preserveAspectRatio="xMinYMid meet">
      <defs>
        <radialGradient id="mishaGlobe" cx="50%" cy="38%" r="65%"><stop offset="0" stopColor="#60a5fa"/><stop offset="0.58" stopColor="#1879e8"/><stop offset="1" stopColor="#06306f"/></radialGradient>
        <linearGradient id="mishaSilver" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#f7f9fc"/><stop offset="0.42" stopColor="#c4ccd8"/><stop offset="1" stopColor="#718097"/></linearGradient>
        <linearGradient id="mishaBlue" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#60a5fa"/><stop offset="1" stopColor="#1685ff"/></linearGradient>
      </defs>
      <g transform="translate(4 5)"><circle cx="43" cy="31" r="29" fill="url(#mishaGlobe)"/><path d="M18 25c14-10 36-10 50 0M14 31h58M18 39c14 10 36 10 50 0M32 3c-8 9-11 19-11 28s3 19 11 28M54 3c8 9 11 19 11 28s-3 19-11 28" fill="none" stroke="#72b6ff" strokeWidth="1.25" opacity=".78"/><path d="M7 33 29 55 43 41 57 55 79 33 72 67 43 91 14 67Z" fill="#07152a" stroke="url(#mishaSilver)" strokeWidth="4" strokeLinejoin="round"/><path d="M7 33 29 55 43 41 57 55 79 33" fill="none" stroke="url(#mishaSilver)" strokeWidth="4.8" strokeLinejoin="round"/><path d="M31 55v24h24V55" fill="#07152a" stroke="url(#mishaSilver)" strokeWidth="3.4"/><path d="M36 79V62l7-7 7 7v17" fill="none" stroke="url(#mishaBlue)" strokeWidth="3.2"/><path d="M43 79v12" stroke="#1685ff" strokeWidth="3.2"/></g>
      <g fontFamily="Manrope, Arial, sans-serif" fill="url(#mishaBlue)"><text x="103" y="43" fontSize="31" fontWeight="800" letterSpacing="4.5">MISHA</text><path d="M104 53h33" stroke="#c4ccd8" strokeWidth="1.4"/><text x="171" y="67" textAnchor="middle" fontSize="13" fontWeight="700" letterSpacing="4.2">SYSTEMS</text><path d="M104 72h33M205 72h34" stroke="#c4ccd8" strokeWidth="1.4"/></g>
    </svg>
  );
}
