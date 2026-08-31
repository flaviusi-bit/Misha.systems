import React from 'react';

const fields = [
 ['FULL NAME','Alex Morgan'],
 ['DATE OF BIRTH','14 MAY 1991'],
 ['NATIONALITY','UNITED KINGDOM'],
 ['SEX','F'],
 ['PASSPORT NUMBER','P•••••••42'],
 ['PASSPORT ISSUING COUNTRY','UNITED KINGDOM'],
 ['PASSPORT EXPIRY','22 NOV 2031'],
 ['EMAIL','alex.morgan@example.com'],
 ['PHONE','+44 7700 900123'],
 ['ARRIVAL DATE','18 SEP 2026'],
 ['DEPARTURE DATE','27 SEP 2026'],
 ['TRANSPORT','AIR'],
 ['FLIGHT / VESSEL','MS 742'],
 ['LAST PORT / COUNTRY OF DEPARTURE','LONDON · UNITED KINGDOM'],
 ['PURPOSE OF VISIT','TOURISM'],
 ['DESTINATION ADDRESS','HOTEL / ACCOMMODATION DETAILS'],
 ['TRAVEL COMPANIONS','1'],
 ['HEALTH DECLARATION','NO DECLARATION'],
];

export default function EdCardDemo(){
 return <section id="edcard-demo" className="ed-demo">
  <div className="demo-top"><div><p className="eyebrow">PRODUCT 02 · ED CARD PORTAL</p><h2>ED Card <span>Portal</span></h2><p className="demo-intro">A structured digital arrival declaration for collecting traveller, passport, journey and destination information before arrival.</p></div><div className="demo-chip">DEMO DATA · REPRESENTATIVE FIELDS</div></div>
  <div className="ed-workspace">
   <div className="ed-form">
    <div className="panel-head"><span>DIGITAL ARRIVAL DECLARATION</span><b>ED CARD</b></div>
    <div className="ed-field-grid">{fields.map(([label,value])=><label key={label}>{label}<div>{value}</div></label>)}</div>
    <div className="ed-actions"><button className="button primary" type="button">Review declaration <span>→</span></button><span className="ed-note">Fields vary by destination and authority requirements.</span></div>
   </div>
   <aside className="ed-status">
    <div className="status-icon">ED</div>
    <p className="eyebrow">PRE-ARRIVAL WORKFLOW</p>
    <h3>Structured before submission.</h3>
    <p>The portal captures the information required by the destination workflow, validates the declaration and prepares it for secure submission.</p>
    <div className="status-list"><span>✓ Traveller identity &amp; passport</span><span>✓ Contact &amp; accommodation</span><span>✓ Journey &amp; transport details</span><span>✓ Purpose &amp; declaration data</span></div>
   </aside>
  </div>
 </section>
}
