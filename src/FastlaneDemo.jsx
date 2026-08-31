import React from 'react';

const steps = [
 {key:'application',label:'eTA APPLICATION',title:'Application submitted',text:'The traveller submits an eTA application with passport and required travel information.'},
 {key:'validation',label:'VALIDATION',title:'Travel document validated',text:'The passport and submitted information are validated as part of the eTA application process.'},
 {key:'payment',label:'PAYMENT',title:'Application fee paid',text:'The traveller completes the required eTA application payment before screening proceeds.'},
 {key:'screening',label:'PARALLEL SCREENING',title:'Multiple watchlists screened',text:'Configured watchlists are screened in parallel and the results are consolidated into the eTA decision path.'},
 {key:'approval',label:'eTA DECISION',title:'eTA approved',text:'Completed eTA checks and consolidated screening results support the approval decision.'},
 {key:'fastlane',label:'BIOMETRIC FASTLANE',title:'Identity confirmed',text:'At immigration, facial recognition matches the traveller to the identity already validated through the approved eTA.'},
 {key:'clearance',label:'IMMIGRATION CLEARANCE',title:'Passport-free passage',text:'The identity match is confirmed and the approved traveller proceeds through the dedicated biometric fastlane.'},
];

export default function FastlaneDemo(){
 const [active,setActive]=React.useState(0);
 const step=steps[active];
 return <section className="fastlane-demo" id="fastlane-demo">
  <div className="demo-top"><div><p className="eyebrow">PRODUCT 01 · eTA &amp; BIOMETRIC FASTLANE</p><h2>eTA &amp; Biometric <span>Fastlane</span></h2><p className="demo-intro">A single governed journey from eTA application to biometric, passport-free immigration passage. <strong>Parallel screening is an integrated step in this journey.</strong></p></div></div>
  <div className="journey-shell static-journey">
   <nav className="journey-nav" aria-label="Fastlane journey steps">{steps.map((s,i)=><button key={s.key} className={i===active?'active':''} onClick={()=>setActive(i)}><b>{String(i+1).padStart(2,'0')}</b><span>{s.label}</span><i/></button>)}</nav>
   <div className="journey-stage static-stage">
    <div className="stage-number">{String(active+1).padStart(2,'0')}</div>
    <div className="stage-copy"><p className="eyebrow">{step.label}</p><h3>{step.title}</h3><p>{step.text}</p><div className="result"><span className="dot"/> JOURNEY STEP</div></div>
   </div>
  </div>
  <p className="demo-disclaimer">Demonstration flow · no live watchlist, biometric or immigration data is processed.</p>
 </section>
}
