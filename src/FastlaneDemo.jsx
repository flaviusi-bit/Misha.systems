import React from 'react';

const steps = [
  {
    key: 'application',
    label: 'eTA APPLICATION',
    title: 'Application submitted',
    text: 'The traveller submits an eTA application with passport, identity and travel information.',
    meta: ['Passport & traveller data', 'Travel details', 'Destination & purpose'],
  },
  {
    key: 'validation',
    label: 'VALIDATION',
    title: 'Application validated',
    text: 'MISHA validates the submitted identity and travel document data before the application moves forward.',
    meta: ['Identity data', 'Document validity', 'Required data checks'],
  },
  {
    key: 'payment',
    label: 'PAYMENT',
    title: 'Payment completed',
    text: 'The traveller completes the required eTA application payment and the journey continues.',
    meta: ['Application fee', 'Payment confirmation', 'Transaction status'],
  },
  {
    key: 'screening',
    label: 'PARALLEL SCREENING',
    title: 'Screening runs in parallel',
    text: 'Configured watchlist providers are queried in parallel and their results are consolidated into one decision path.',
    meta: ['Multiple watchlists', 'Parallel execution', 'Consolidated result'],
  },
  {
    key: 'decision',
    label: 'eTA DECISION',
    title: 'eTA decision issued',
    text: 'Validation and screening outcomes are evaluated together to support the eTA decision.',
    meta: ['Decision rules', 'Screening outcome', 'eTA status'],
  },
  {
    key: 'biometric',
    label: 'BIOMETRIC FASTLANE',
    title: 'Traveller identity confirmed',
    text: 'At the border, biometric verification matches the traveller to the identity established through the approved eTA journey.',
    meta: ['Biometric capture', 'Identity match', 'Approved eTA'],
  },
  {
    key: 'clearance',
    label: 'IMMIGRATION CLEARANCE',
    title: 'Passport-free passage',
    text: 'The verified traveller proceeds through the dedicated biometric immigration clearance flow.',
    meta: ['Identity confirmed', 'Clearance granted', 'Passage enabled'],
  },
];

function StageVisual({ step }) {
  return (
    <div className={`journey-visual visual-${step.key}`}>
      <div className="visual-frame">
        <span className="visual-line line-one" />
        <span className="visual-line line-two" />
        <div className="visual-core">
          <span>{String(steps.indexOf(step) + 1).padStart(2, '0')}</span>
        </div>
      </div>
      <div className="visual-caption">{step.label}</div>
    </div>
  );
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
          <p className="demo-intro">
            One continuous journey from eTA application through validation, payment,
            parallel screening, decision and biometric immigration clearance.
          </p>
        </div>
      </div>

      <div className="interactive-shell">
        <div className="interactive-progress" aria-label="eTA journey progress">
          {steps.map((item, index) => (
            <button
              key={item.key}
              type="button"
              className={index === active ? 'active' : index < active ? 'complete' : ''}
              onClick={() => setActive(index)}
              aria-label={`Go to ${item.label}`}
              aria-current={index === active ? 'step' : undefined}
            >
              <span>{String(index + 1).padStart(2, '0')}</span>
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
            <div className="step-details">
              {step.meta.map((item) => <span key={item}>✓ {item}</span>)}
            </div>
          </div>
        </div>

        <div className="interactive-controls">
          <span>STEP {String(active + 1).padStart(2, '0')} / {String(steps.length).padStart(2, '0')}</span>
          <div>
            <button type="button" className="button secondary" onClick={back} disabled={active === 0}>Back</button>
            <button type="button" className="button primary" onClick={next} disabled={isLast}>
              {isLast ? 'Journey complete' : 'Next'} <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>

      <p className="demo-disclaimer">
        Demonstration flow · no live watchlist, biometric or immigration data is processed.
      </p>
    </section>
  );
}
