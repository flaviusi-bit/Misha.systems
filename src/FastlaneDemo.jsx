import React from 'react';

const steps = [
  { key:'application', label:'eTA APPLICATION', title:'eTA application approved', text:'The traveller has completed the eTA process and received an approved travel authorization.', icon:'01' },
  { key:'screening', label:'PARALLEL SCREENING', title:'Multiple watchlists screened', text:'The approved eTA application is screened against configured watchlists in parallel and a consolidated clearance decision is produced.', icon:'02' },
  { key:'identity', label:'VALIDATED IDENTITY', title:'Passport identity already validated', text:'The passport and traveller identity were validated during the eTA application journey.', icon:'03' },
  { key:'fastlane', label:'BIOMETRIC FASTLANE', title:'Face recognition identifies the traveller', text:'At the immigration fastlane, facial recognition matches the traveller to the identity already validated through the approved eTA.', icon:'04' },
  { key:'access', label:'IMMIGRATION CLEARANCE', title:'Passport-free passage', text:'An eligible, approved eTA traveller proceeds through the dedicated biometric fastlane without presenting the passport at the immigration lane.', icon:'05' },
];

export default function FastlaneDemo(){
  const [active,setActive]=React.useState(0);
  const [running,setRunning]=React.useState(false);
  const [complete,setComplete]=React.useState(false);
  const run=()=>{setActive(0);setComplete(false);setRunning(true);let i=0;const t=setInterval(()=>{i+=1;if(i>=steps.length){clearInterval(t);setComplete(true);setRunning(false);return}setActive(i)},900)};
  const step=steps[active];
  return <section className="fastlane-demo" id="fastlane-demo">
    <div className="demo-top"><div><p className="eyebrow">INTERACTIVE EXPERIENCE · 01</p><h2>eTA &amp; Biometric <span>Fastlane</span></h2><p className="demo-intro">Follow the journey of an approved eTA applicant — from authorization and parallel screening to passport-free immigration passage through the biometric fastlane.</p></div><button className="button primary" onClick={run} disabled={running}>{running?'Processing journey…':complete?'Run again':'Start journey'} <span>→</span></button></div>
    <div className="journey-shell">
      <aside className="journey-nav">{steps.map((s,i)=><button key={s.key} className={i===active?'active':''} onClick={()=>!running&&setActive(i)}><b>{s.icon}</b><span>{s.label}</span><i/></button>)}</aside>
      <div className="journey-stage"><div className="stage-glow"/><div className="scan-orb"><div className="orb-core">{complete?'✓':step.icon}</div><div className="ring r1"/><div className="ring r2"/></div><div className="stage-copy"><p className="eyebrow">{step.label}</p><h3>{step.title}</h3><p>{step.text}</p><div className="result"><span className="dot"/> {complete?'JOURNEY COMPLETE':'SIMULATION · CLEAR'}</div></div></div>
    </div>
  </section>
}
