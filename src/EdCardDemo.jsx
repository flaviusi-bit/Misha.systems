import React from 'react';

const slides = [
  {
    key: 'arrival',
    label: 'ARRIVAL',
    title: 'Arrival information',
    text: 'The traveller starts the ED Card by identifying their residence status and arrival mode.',
    fields: [
      ['RESIDENTIAL STATUS', 'Non-Resident / Visitor'],
      ['ENTRY METHOD', 'Air'],
      ['AIRLINE', 'Representative airline'],
      ['FLIGHT NUMBER', 'Flight reference'],
      ['COUNTRY OF EMBARKATION', 'Country'],
      ['PORT OF EMBARKATION', 'Airport / port'],
      ['INTENDED ARRIVAL', '18 SEP 2026'],
      ['INTENDED DEPARTURE', '27 SEP 2026'],
    ],
  },
  {
    key: 'personal',
    label: 'PERSONAL',
    title: 'Personal & contact information',
    text: 'The portal captures the traveller identity, residence and contact information required for the declaration.',
    fields: [
      ['FIRST NAME', 'Alex'],
      ['LAST NAME', 'Morgan'],
      ['GENDER', 'Female'],
      ['COUNTRY OF BIRTH', 'United Kingdom'],
      ['DATE OF BIRTH', '14 MAY 1991'],
      ['NATIONALITY', 'United Kingdom'],
      ['MARITAL STATUS', 'Representative value'],
      ['OCCUPATION', 'Representative value'],
      ['COUNTRY OF RESIDENCE', 'United Kingdom'],
      ['ADDRESS', 'Residential address'],
      ['CITY / REGION', 'City · Region'],
      ['EMAIL / PHONE', 'Traveller contact'],
    ],
  },
  {
    key: 'travel',
    label: 'TRAVEL',
    title: 'Travel document information',
    text: 'Travel-document data is captured for the arriving traveller and can include a document image and recent travel history.',
    fields: [
      ['DOCUMENT TYPE', 'Passport'],
      ['DOCUMENT NUMBER', 'P•••••••42'],
      ['ISSUE COUNTRY', 'United Kingdom'],
      ['ISSUE DATE', '12 JUN 2021'],
      ['EXPIRY DATE', '22 NOV 2031'],
      ['DOCUMENT PHOTO', 'Upload travel document'],
      ['COUNTRIES VISITED', 'Last 21 days'],
    ],
  },
  {
    key: 'destination',
    label: 'DESTINATION',
    title: 'Destination information',
    text: 'The destination step records the reason for travel and where the traveller will stay during the visit.',
    fields: [
      ['PURPOSE OF VISIT', 'Vacation'],
      ['ACCOMMODATION TYPE', 'Hotel'],
      ['ACCOMMODATION NAME', 'Representative hotel'],
      ['ACCOMMODATION ADDRESS', 'Destination address'],
      ['PARISH', 'St. George'],
      ['LENGTH OF STAY', '9 nights'],
    ],
  },
  {
    key: 'customs',
    label: 'CUSTOMS',
    title: 'Customs declaration',
    text: 'The final step captures luggage and customs declarations before the traveller submits the completed ED Card.',
    fields: [
      ['TOTAL LUGGAGE', '2 pieces'],
      ['AIR / SEA FREIGHT', '0 pieces'],
      ['PLANTS / ANIMALS / BIOLOGICAL MATERIAL', 'No'],
      ['PHARMACEUTICALS / ILLICIT DRUGS', 'No'],
      ['ARMS / AMMUNITION / EXPLOSIVES', 'No'],
      ['COMMERCIAL MERCHANDISE', 'No'],
      ['CURRENCY OVER USD 10,000', 'No'],
      ['ITEMS TO DECLARE', 'No'],
      ['DECLARATION', 'Traveller attestation'],
    ],
  },
];

export default function EdCardDemo() {
  const [active, setActive] = React.useState(0);
  const slide = slides[active];
  const isLast = active === slides.length - 1;

  const next = () => setActive((value) => Math.min(value + 1, slides.length - 1));
  const back = () => setActive((value) => Math.max(value - 1, 0));

  return (
    <section id="edcard-demo" className="ed-demo">
      <div className="demo-top">
        <div>
          <p className="eyebrow">PRODUCT 02 · ED CARD PORTAL</p>
          <h2>ED Card <span>Portal</span></h2>
          <p className="demo-intro">
            A purpose-built digital arrival declaration covering arrival, personal,
            travel, destination and customs information.
          </p>
        </div>
        <div className="demo-chip">REPRESENTATIVE DEMONSTRATION DATA</div>
      </div>

      <div className="interactive-shell ed-interactive-shell">
        <div className="interactive-progress" aria-label="ED Card journey progress">
          {slides.map((item, index) => (
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

        <div className="ed-slide-stage">
          <div className="ed-form-preview">
            <div className="ed-preview-head">
              <span>ED CARD PORTAL</span>
              <b>{slide.label}</b>
            </div>
            <div className="ed-preview-fields">
              {slide.fields.map(([label, value]) => (
                <div className="ed-preview-field" key={label}>
                  <span>{label}</span>
                  <strong>{value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="interactive-copy ed-slide-copy">
            <p className="eyebrow">STEP {String(active + 1).padStart(2, '0')} · {slide.label}</p>
            <h3>{slide.title}</h3>
            <p>{slide.text}</p>
            {active === 0 && (
              <div className="choice-preview">
                <span>Resident / Returning National</span>
                <span className="selected">Non-Resident / Visitor</span>
              </div>
            )}
            <div className="step-details">
              <span>✓ Structured field capture</span>
              <span>✓ Guided next step</span>
              <span>✓ Ready for secure submission</span>
            </div>
          </div>
        </div>

        <div className="interactive-controls">
          <span>STEP {String(active + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}</span>
          <div>
            <button type="button" className="button secondary" onClick={back} disabled={active === 0}>Back</button>
            <button type="button" className="button primary" onClick={next} disabled={isLast}>
              {isLast ? 'Declaration complete' : 'Next'} <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
