import React from 'react';

const fields=[['FULL NAME','Alex Morgan'],['PASSPORT NUMBER','P•••••••42'],['DATE OF BIRTH','14 MAY 1991'],['ARRIVAL DATE','18 SEP 2026'],['FLIGHT','MS 742'],['PURPOSE','TOURISM']];

export default function EdCardDemo(){
 const [phase,setPhase]=React.useState(0);
 const [running,setRunning]=React.useState(false);
 const timerRef=React.useRef(null);
 React.useEffect(()=>()=>{if(timerRef.current)clearInterval(timerRef.current)},[]);
 const startDemo=()=>{
  if(timerRef.current)clearInterval(timerRef.current);
  setPhase(0);setRunning(true);
  let next=0;
  timerRef.current=setInterval(()=>{
   next+=1;
   if(next>=2){clearInterval(timerRef.current);timerRef.current=null;setPhase(2);setRunning(false);return}
   setPhase(next);
  },1800);
 };
 const submitted=phase===2;
 return <section id="edcard-demo" className="ed-demo">
  <div className="demo-top"><div><p className="eyebrow">INTERACTIVE EXPERIENCE · 02</p><h2>ED Card <span>Portal</span></h2><p className="demo-intro">A simple digital arrival declaration that collects structured traveller information before arrival and securely prepares it for the relevant authority.</p></div><div className="demo-chip">DEMO DATA · NOT A REAL TRAVEL RECORD</div></div>
  <div className="ed-workspace">
   <div className="ed-progress"><span className={phase>=0?'active':''}>01 <b>TRAVELLER</b></span><span className={phase>=1?'active':''}>02 <b>REVIEW</b></span><span className={phase>=2?'active':''}>03 <b>SUBMITTED</b></span></div>
   <div className="ed-card-panel">
    <div className="ed-form">
     <div className="panel-head"><span>ARRIVAL DECLARATION</span><b>ED CARD</b></div>
     {fields.map(([label,value])=><label key={label}>{label}<div>{value}</div></label>)}
     <button className="button primary" onClick={startDemo} disabled={running}>{running?'Processing…':submitted?'Run demo again':'Start demo'} <span>→</span></button>
    </div>
    <div className="ed-status">
     <div className="status-icon">{submitted?'✓':phase===1?'02':'ED'}</div>
     <p className="eyebrow">{submitted?'SUBMISSION CONFIRMED':phase===1?'REVIEW &amp; VALIDATION':'DIGITAL ARRIVAL'}</p>
     <h3>{submitted?'Ready for authority processing':phase===1?'Declaration reviewed':'Before you arrive.'}</h3>
     <p>{submitted?'The declaration has been securely prepared for the relevant authority workflow.':phase===1?'Traveller data is structured and checked before submission.':'Complete the declaration before arrival and reduce friction at the border.'}</p>
     <div className="status-list"><span>✓ Structured data</span><span>✓ Pre-arrival submission</span><span>✓ Authority-ready workflow</span></div>
    </div>
   </div>
  </div>
 </section>
}
