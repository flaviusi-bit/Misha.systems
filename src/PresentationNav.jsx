import React from 'react';
const items=[['top','Overview'],['fastlane-demo','eTA & Fastlane'],['screening-demo','Parallel Screening'],['edcard-demo','ED Card Portal']];
export default function PresentationNav(){return <nav className="presentation-nav" aria-label="Presentation navigation">{items.map(([id,label],i)=><a key={id} href={'#'+id}><span>0{i+1}</span>{label}</a>)}</nav>}
