import React from 'react';

export default function LogoMark(){
  return <svg className="misha-logo-mark" viewBox="0 0 96 96" role="img" aria-label="MISHA Systems logo">
    <defs><linearGradient id="mishaLogo" x1="10" y1="86" x2="86" y2="10"><stop offset="0"/><stop offset="1" stopColor="#35adff"/></linearGradient></defs>
    <circle cx="48" cy="48" r="42" fill="none" stroke="url(#mishaLogo)" strokeWidth="2" opacity=".85"/>
    <path d="M17 67V29l31-15 31 15v38L48 82 17 67Z" fill="none" stroke="url(#mishaLogo)" strokeWidth="2.5"/>
    <path d="M29 62V39l19-13 19 13v23M38 62V45h20v17" fill="none" stroke="#eaf4ff" strokeWidth="3" strokeLinejoin="round"/>
    <path d="M38 62 48 52l10 10" fill="none" stroke="#35adff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M48 26v26" stroke="#35adff" strokeWidth="2" opacity=".8"/>
  </svg>
}
