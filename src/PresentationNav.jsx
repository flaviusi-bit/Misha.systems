import React from 'react';
const items=[['top','Overview'],['solutions','Products'],['fastlane-demo','eTA & Fastlane'],['edcard-demo','ED Card Portal'],['architecture','Architecture']];
export default function PresentationNav(){return <nav className="presentation-nav" aria-label="Presentation navigation">{items.map(([id,label],i)=><a key={id} href={'#'+id}><span>{String(i+1).padStart(2,'0')}</span>{label}</a>)}</nav>}
