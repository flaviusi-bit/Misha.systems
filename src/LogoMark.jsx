import React from 'react';

export default function LogoMark(){
  return <svg className="misha-logo-mark" viewBox="0 0 96 96" role="img" aria-label="MISHA Systems logo">
    <defs>
      <linearGradient id="mishaLogo" x1="12" y1="84" x2="84" y2="12">
        <stop offset="0" stopColor="#35adff"/>
        <stop offset="1" stopColor="#eaf4ff"/>
      </linearGradient>
    </defs>
    {/* Globe / sovereign boundary */}
    <circle cx="48" cy="48" r="42" fill="none" stroke="url(#mishaLogo)" strokeWidth="2" opacity=".9"/>
    <ellipse cx="48" cy="48" rx="25" ry="42" fill="none" stroke="#35adff" strokeWidth="1.2" opacity=".42"/>
    <path d="M7 48h82M13 31h70M13 65h70" fill="none" stroke="#35adff" strokeWidth="1" opacity=".25"/>
    {/* Shield / gateway silhouette */}
    <path d="M48 12 75 24v25c0 17-10 28-27 35C31 77 21 66 21 49V24Z" fill="#031020" stroke="url(#mishaLogo)" strokeWidth="2.6"/>
    {/* Gateway */}
    <path d="M31 62V39l17-14 17 14v23" fill="none" stroke="#eaf4ff" strokeWidth="2.8" strokeLinejoin="round"/>
    <path d="M38 62V44h20v18" fill="none" stroke="#35adff" strokeWidth="2.6"/>
    {/* M + road/path: mobility through the gateway */}
    <path d="M31 62 39 50l9 10 9-10 8 12" fill="none" stroke="#35adff" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M48 25v24" stroke="#eaf4ff" strokeWidth="1.8" opacity=".75"/>
    <path d="M48 60v12" stroke="#35adff" strokeWidth="2.4" strokeLinecap="round"/>
  </svg>
}
