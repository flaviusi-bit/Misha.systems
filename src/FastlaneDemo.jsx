import React from 'react';

const steps = [
  { key:'application', label:'eTA APPLICATION', title:'Application submitted', text:'The traveller submits an eTA application with passport and required travel information.', icon:'01' },
  { key:'validation', label:'VALIDATION', title:'Travel document validated', text:'The passport and submitted information are validated as part of the eTA application process.', icon:'02' },
  { key:'payment', label:'PAYMENT', title:'Application fee paid', text:'The traveller completes the required eTA application payment before screening proceeds.', icon:'03' },
  { key:'screening', label:'PARALLEL SCREENING', title:'Multiple watchlists screened', text:'The application is screened against configured watchlists in parallel and the results are consolidated into the eTA decision path.', icon:'04' },
  { key:'approval', label:'eTA DECISION', title:'eTA approved', text:'The consolidated screening result and completed eTA checks support an approval decision. The biometric fastlane is now available to the approved applicant.', icon:'05' },
  { key:'fastlane', label:'BIOMETRIC FASTLANE', title:'Facial recognition confirms identity', text:'At immigration, facial recognition matches the traveller to the identity already validated through the approved eTA. No passport presentation is required at the biometric fastlane.', icon:'06' },
  { key:'clearance', label:'IMMIGRATION CLEARANCE', title:'Passport-free passage', text:'The identity match is confirmed and the approved eTA traveller proceeds through the dedicated biometric fastlane without presenting the passport.', icon:'07' },
];

export default function FastlaneDemo(){
 const [active,setActive]=React.useState(0); const [running,setRunning]=React.useState(false); const [complete,setComplete]=React.useState(false);
 const timerRef=React.useRef(null);
 React.useEffect(()=>()=>{if(timerRef.current)clearInterval(timerRef.current)},[]);
 const run=()=>{if(timerRef.current)clearInterval(timerRef.current);setActive(0);setComplete(false);setRunning(true);let i=0;timerRef.current=setInterval(()=>{i+=1;if(i>=steps.length){clearInterval(timerRef.current);timerRef.current=null;setActive(steps.length-1);setComplete(true);setRunning(false);return}setActive(i)},1800)};
 const step=steps[active];
 const biometric=step.key==='fastlane'||step.key==='clearance';
 const journeyFinished=complete && step.key==='clearance';
 const status=journeyFinished?'JOURNEY COMPLETE':biometric?'IDENTITY MATCH · SIMULATION':'STEP COMPLETE · SIMULATION';
 return <section className="fastlane-demo" id="fastlane-demo"><div className="demo-top"><div><p className="eyebrow">INTERACTIVE EXPERIENCE · 01</p><h2>eTA &amp; Biometric <span>Fastlane</span></h2><p className="demo-intro">Follow an eTA applicant from application through validation, payment, parallel screening and approval to biometric, passport-free immigration passage.</p></div><button className="button primary" onClick={run} disabled={running}>{running?'Processing journey…':complete?'Run again':'Start journey'} <span>→</span></button></div><div className="journey-shell"><aside className="journey-nav">{steps.map((s,i)=><button key={s.key} className={i===active?'active':''} onClick={()=>!running&&setActive(i)}><b>{s.icon}</b><span>{s.label}</span><i/></button>)}</aside><div className={'journey-stage '+(biometric?'biometric-stage':'')}><div className="stage-glow"/>{biometric?<div className="face-scan"><div className="face-grid"><span/><span/><span/><span/></div><div className="face-outline">◯</div><div className="scan-line"/></div>:<div className="scan-orb"><div className="orb-core">{step.icon}</div><div className="ring r1"/><div className="ring r2"/></div>}<div className="stage-copy"><p className="eyebrow">{step.label}</p><h3>{step.title}</h3><p>{step.text}</p><div className="result"><span className="dot"/> {status}</div></div></div></div></section>
}
