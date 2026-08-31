import React from 'react';

const steps = [
  { key:'eta', label:'eTA AUTHORIZATION', title:'Travel authorization verified', text:'The traveller presents a valid electronic travel authorization.', icon:'01' },
  { key:'identity', label:'IDENTITY', title:'Identity matched', text:'Identity data is securely associated with the travel document.', icon:'02' },
  { key:'biometric', label:'BIOMETRIC', title:'Biometric verification', text:'The live biometric is compared with the enrolled document identity.', icon:'03' },
  { key:'screening', label:'SCREENING', title:'Risk screening completed', text:'Configured screening services return a clear decision.', icon:'04' },
  { key:'decision', label:'DECISION', title:'Fastlane access granted', text:'All required checks pass and the traveller proceeds.', icon:'05' },
];

export default function FastlaneDemo(){
  const [active,setActive]=React.useState(0);
  const [running,setRunning]=React.useState(false);
  const [complete,setComplete]=React.useState(false);
  const run=()=>{setActive(0);setComplete(false);setRunning(true);let i=0;const t=setInterval(()=>{i+=1;if(i>=steps.length){clearInterval(t);setComplete(true);setRunning(false);return}setActive(i)},850)};
  const step=steps[active];
  return <section className="fastlane-demo" id="fastlane-demo">
    <div className="demo-top"><div><p className="eyebrow">INTERACTIVE EXPERIENCE · 01</p><h2>eTA &amp; Biometric <span>Fastlane</span></h2><p className="demo-intro">Walk through a simulated passenger journey from travel authorization to accelerated border access.</p></div><button className="button primary" onClick={run} disabled={running}>{running?'Processing journey…':complete?'Run again':'Start journey'} <span>→</span></button></div>
    <div className="journey-shell">
      <aside className="journey-nav">{steps.map((s,i)=><button key={s.key} className={i===active?'active':''} onClick={()=>!running&&setActive(i)}><b>{s.icon}</b><span>{s.label}</span><i/></button>)}</aside>
      <div className="journey-stage"><div className="stage-glow"/><div className="scan-orb"><div className="orb-core">{complete?'✓':step.icon}</div><div className="ring r1"/><div className="ring r2"/></div><div className="stage-copy"><p className="eyebrow">{step.label}</p><h3>{step.title}</h3><p>{step.text}</p><div className="result"><span className="dot"/> {complete?'JOURNEY COMPLETE':'SIMULATION · CLEAR'}</div></div></div>
    </div>
  </section>
}
