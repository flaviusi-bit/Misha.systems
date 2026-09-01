import React from 'react';

const steps = [
  {
    key: 'application',
    label: 'eTA APPLICATION',
    title: 'Start the journey before arrival.',
    text: 'The traveller submits a digital eTA application with identity, passport and journey details, creating a trusted record before travel begins.',
    meta: ['Identity', 'Passport', 'Journey details'],
  },
  {
    key: 'validation',
    label: 'VALIDATION',
    title: 'Verify the traveller. Verify the document.',
    text: 'Passport and traveller data are validated before the application moves forward, establishing a reliable identity foundation for subsequent checks.',
    meta: ['Identity verified', 'Document checked', 'Data validated'],
  },
  {
    key: 'payment',
    label: 'PAYMENT',
    title: 'Complete the application securely.',
    text: 'The required eTA fee is processed securely, allowing the application to proceed into the decision workflow.',
    meta: ['eTA fee', 'Secure payment', 'Payment confirmed'],
  },
  {
    key: 'screening',
    label: 'PARALLEL SCREENING',
    title: 'One application. Multiple checks. At the same time.',
    text: 'The traveller is screened simultaneously against configured watchlists and intelligence sources. Results are consolidated into a single decision path.',
    meta: ['Watchlist A', 'Watchlist B', 'Watchlist C', 'Watchlist D'],
  },
  {
    key: 'decision',
    label: 'eTA DECISION',
    title: 'Turn intelligence into a decision.',
    text: 'Validated identity, application data and screening results are brought together to support the eTA decision.',
    meta: ['Identity', 'Application', 'Screening'],
  },
  {
    key: 'biometric',
    label: 'BIOMETRIC FASTLANE',
    title: 'Recognize the traveller. Not the passport.',
    text: 'At the border, biometric verification confirms that the person presenting is the traveller associated with the approved eTA.',
    meta: ['Biometric capture', 'Identity match', 'Match confirmed'],
  },
  {
    key: 'clearance',
    label: 'IMMIGRATION CLEARANCE',
    title: 'From approval to seamless passage.',
    text: 'The verified traveller proceeds through the dedicated biometric clearance process without presenting the passport at the fastlane.',
    meta: ['Identity verified', 'Clearance granted', 'Passage enabled'],
  },
];

function MiniTag({ children }) {
  return <span className="visual-tag">{children}</span>;
}

function StageVisual({ step }) {
  switch (step.key) {
    case 'application':
      return (
        <div className="journey-visual visual-application">
          <div className="process-card document-card">
            <div className="card-top"><span>eTA</span><b>APPLICATION</b></div>
            <div className="document-row"><i /> <span>Traveller identity</span><strong>CAPTURED</strong></div>
            <div className="document-row"><i /> <span>Passport details</span><strong>CAPTURED</strong></div>
            <div className="document-row"><i /> <span>Journey details</span><strong>CAPTURED</strong></div>
          </div>
          <div className="visual-arrow">↓</div>
          <div className="record-pill"><span className="status-dot" /> TRUSTED TRAVELLER RECORD</div>
        </div>
      );
    case 'validation':
      return (
        <div className="journey-visual visual-validation">
          <div className="validation-flow">
            <div className="process-card compact-card"><span className="icon-box">ID</span><b>TRAVELLER DATA</b></div>
            <div className="flow-arrow">→</div>
            <div className="process-card compact-card"><span className="icon-box">PAS</span><b>DOCUMENT</b></div>
          </div>
          <div className="validated-banner"><span>✓</span> VALIDATED</div>
          <MiniTag>Reliable identity foundation</MiniTag>
        </div>
      );
    case 'payment':
      return (
        <div className="journey-visual visual-payment">
          <div className="payment-card process-card">
            <div className="card-top"><span>eTA</span><b>SECURE PAYMENT</b></div>
            <div className="payment-line"><span>Application fee</span><strong>PROCESSING</strong></div>
            <div className="payment-bar"><i /></div>
            <div className="payment-line"><span>Transaction</span><strong>AUTHORIZED</strong></div>
          </div>
          <div className="payment-confirmed"><span>✓</span> PAYMENT CONFIRMED</div>
        </div>
      );
    case 'screening':
      return (
        <div className="journey-visual visual-screening">
          <div className="screening-row"><div className="traveller-node">TRAVELLER</div><span className="screening-arrow">→</span></div>
          <div className="watchlist-grid">
            {['WATCHLIST A', 'WATCHLIST B', 'WATCHLIST C', 'WATCHLIST D'].map((item) => <div key={item} className="watchlist-card"><span className="status-dot" />{item}<b>CHECK</b></div>)}
          </div>
          <div className="consolidated"><span>✓</span><b>CONSOLIDATED RESULT</b><small>ONE DECISION PATH</small></div>
        </div>
      );
    case 'decision':
      return (
        <div className="journey-visual visual-decision">
          <div className="signal-row">
            <MiniTag>IDENTITY</MiniTag><MiniTag>APPLICATION</MiniTag><MiniTag>SCREENING</MiniTag>
          </div>
          <div className="decision-flow"><span>→</span><div className="decision-engine"><b>MISHA</b><small>DECISION ENGINE</small></div><span>→</span></div>
          <div className="approved-banner"><span>✓</span> eTA APPROVED</div>
        </div>
      );
    case 'biometric':
      return (
        <div className="journey-visual visual-biometric">
          <div className="biometric-flow">
            <div className="face-panel"><div className="face-mark">FACE</div><small>TRAVELLER</small></div>
            <span>→</span>
            <div className="scan-panel"><div className="scan-lines" /><small>BIOMETRIC CAPTURE</small></div>
          </div>
          <div className="match-banner"><span>✓</span> MATCH CONFIRMED</div>
        </div>
      );
    default:
      return (
        <div className="journey-visual visual-clearance">
          <div className="clearance-flow"><div className="clearance-status"><span>✓</span><b>IDENTITY VERIFIED</b></div><span>→</span><div className="clearance-gate"><i /><b>FASTLANE</b></div></div>
          <div className="cleared-banner"><span>✓</span> CLEARED FOR PASSAGE</div>
        </div>
      );
  }
}

export default function FastlaneDemo() {
  const [active, setActive] = React.useState(0);
  const step = steps[active];
  const isLast = active === steps.length - 1;

  const next = () => setActive((value) => Math.min(value + 1, steps.length - 1));
  const back = () => setActive((value) => Math.max(value - 1, 0));

  return (
    <section className="fastlane-demo" id="fastlane-demo">
      <div className="demo-top">
        <div>
          <p className="eyebrow">PRODUCT 01 · eTA &amp; BIOMETRIC FASTLANE</p>
          <h2>eTA &amp; Biometric <span>Fastlane</span></h2>
          <p className="demo-intro">One continuous journey from eTA application through validation, payment, parallel screening, decision and biometric immigration clearance.</p>
        </div>
      </div>

      <div className="interactive-shell">
        <div className="interactive-progress" aria-label="eTA journey progress">
          {steps.map((item, index) => (
            <button key={item.key} type="button" className={index === active ? 'active' : index < active ? 'complete' : ''} onClick={() => setActive(index)} aria-label={`Go to ${item.label}`} aria-current={index === active ? 'step' : undefined}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <em>{item.label}</em>
              <i />
            </button>
          ))}
        </div>

        <div className="interactive-stage">
          <StageVisual step={step} />
          <div className="interactive-copy">
            <p className="eyebrow">{step.label}</p>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
            <div className="step-details">{step.meta.map((item) => <span key={item}>✓ {item}</span>)}</div>
          </div>
        </div>

        <div className="interactive-controls">
          <span>STEP {String(active + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}</span>
          <div>
            <button type="button" className="button secondary" onClick={back} disabled={active === 0}>Back</button>
            <button type="button" className="button primary" onClick={next} disabled={isLast}>{isLast ? 'Journey complete' : 'Next'} <span aria-hidden="true">→</span></button>
          </div>
        </div>
      </div>

      <p className="demo-disclaimer">Demonstration flow · no live watchlist, biometric or immigration data is processed.</p>
    </section>
  );
}
