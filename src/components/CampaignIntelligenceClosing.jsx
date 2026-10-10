import { useState } from 'react';
import {
  ArrowRight,
  Check,
  CircleDot,
  Gauge,
  Lightbulb,
  TrendingDown,
} from 'lucide-react';

const intelligencePoints = [
  { icon: TrendingDown, label: 'Surface material performance changes' },
  { icon: Gauge, label: 'Review the evidence behind them' },
  { icon: CircleDot, label: 'Choose a controlled next step' },
];

function CampaignIntelligenceProof() {
  const [testCreated, setTestCreated] = useState(false);

  return (
    <section className="campaign-proof" aria-labelledby="campaign-proof-title">
      <div className="campaign-proof__copy">
        <span className="campaign-proof__eyebrow">CAMPAIGN INTELLIGENCE</span>
        <h2 id="campaign-proof-title">
          Go beyond the numbers<br />
          to uncover <em>whatâ€™s next.</em>
        </h2>
        <p>
          Identify the change, review the evidence, and decide what to test.
        </p>
        <ul>
          {intelligencePoints.map(({ icon: Icon, label }) => (
            <li key={label}>
              <span><Icon size={16} /></span>
              {label}
            </li>
          ))}
        </ul>
        <a className="campaign-proof__action" href="#observe">
          Explore campaign intelligence <ArrowRight size={16} />
        </a>
      </div>

      <div className="campaign-proof__visual" aria-label="Illustrative campaign intelligence preview">
        <svg className="campaign-proof__network" viewBox="0 0 720 500" preserveAspectRatio="none" aria-hidden="true">
          <path d="M16 72 C148 71 174 105 270 143 C374 184 447 98 701 116" />
          <path d="M4 410 C162 382 214 324 296 265 C398 192 500 281 716 236" />
          <path d="M67 14 C93 145 180 168 261 214 C376 279 430 407 652 473" />
          <circle cx="42" cy="72" r="4" /><circle cx="270" cy="143" r="4" />
          <circle cx="701" cy="116" r="4" /><circle cx="296" cy="265" r="4" />
          <circle cx="652" cy="473" r="4" />
        </svg>

        <div className="attention-card">
          <span><TrendingDown size={17} /></span>
          <div>
            <b>Northstar Prospecting needs review</b>
            <small>Conversions fell 32% over three days alongside lower creative CTR.</small>
          </div>
        </div>

        <div className="conversion-card">
          <div><span>Conversions</span><b>â†“ 32%</b></div>
          <svg viewBox="0 0 310 122" preserveAspectRatio="none" aria-hidden="true">
            <path className="conversion-grid" d="M8 22 H302 M8 61 H302 M8 100 H302" />
            <path className="conversion-line conversion-line--soft" d="M10 74 L59 49 L108 79 L157 92 L206 77 L255 70 L301 32" />
            <path className="conversion-line" d="M10 84 L59 66 L108 87 L157 98 L206 84 L255 70 L301 39" />
            <path className="conversion-marker" d="M157 18 V108" />
            {[['10','84'],['59','66'],['108','87'],['157','98'],['206','84'],['255','70'],['301','39']].map(([x,y]) => <circle key={x} cx={x} cy={y} r="4" />)}
          </svg>
        </div>

        <div className="cause-card">
          <span>Signals to verify</span>
          <dl>
            <div><dt>Creative fatigue</dt><dd>Check</dd></div>
            <div><dt>Audience saturation</dt><dd>Review</dd></div>
            <div><dt>CPC pressure</dt><dd>Monitor</dd></div>
          </dl>
          <small>Illustrative evidence, not confirmed causation.</small>
        </div>

        <div className="next-step-card">
          <span className="next-step-card__icon"><Lightbulb size={18} /></span>
          <div><small>RECOMMENDED NEXT STEP</small><b>Prepare a controlled creative test</b></div>
          <button type="button" onClick={() => setTestCreated(true)} disabled={testCreated}>
            {testCreated ? <><Check size={15} /> Test prepared</> : <>Create test <ArrowRight size={15} /></>}
          </button>
        </div>
        <span className="campaign-proof__note">ILLUSTRATIVE PRODUCT EXPERIENCE</span>
      </div>
    </section>
  );
}

function ClosingCta() {
  const [demoOpen, setDemoOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="closing-section closing-section--refresh" id="demo" aria-labelledby="closing-cta-title">
      <svg className="closing-waves" viewBox="0 0 1600 520" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 88 C250 205 286 422 612 388 C774 371 824 298 1010 337 C1224 382 1317 241 1600 89" />
        <path d="M0 158 C259 257 304 453 620 413 C792 391 829 329 1013 365 C1240 410 1344 294 1600 163" />
        <path d="M0 240 C273 310 349 487 650 438 C814 411 853 368 1029 398 C1241 435 1391 365 1600 247" />
        <path d="M0 327 C289 367 407 513 705 458 C835 434 906 416 1064 437 C1268 464 1435 426 1600 341" />
      </svg>
      <div className="closing-cta__content">
        <span className="campaign-proof__eyebrow">MAKE YOUR NEXT MOVE</span>
        <h2 id="closing-cta-title">
          Less time connecting the dots.<br />
          More time <em>growing what works.</em>
        </h2>
        <p>
          Bring your campaign, creative, and budget intelligence together<br className="desktop-break" />
          and make every next move with greater clarity.
        </p>
        <div className="closing-cta__actions">
          <button type="button" className="button button--primary" onClick={() => setDemoOpen(value => !value)} aria-expanded={demoOpen} aria-controls="closing-demo-form">
            {demoOpen ? 'Close form' : 'Book a demo'} <ArrowRight size={16} />
          </button>
          <a className="closing-cta__secondary" href="#product-preview">Explore the platform</a>
        </div>
        {demoOpen && (
          <div className="closing-demo" id="closing-demo-form">
            {submitted ? (
              <div className="closing-demo__success" role="status"><Check size={17} /><span><b>Demo request prepared</b><small>Prototype only. No information was sent or stored.</small></span></div>
            ) : (
              <form onSubmit={(event) => { event.preventDefault(); setSubmitted(true); }}>
                <label>Work email<input type="email" name="email" autoComplete="email" placeholder="you@company.com" required /></label>
                <button type="submit">Continue <ArrowRight size={14} /></button>
              </form>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default function CampaignIntelligenceClosing() {
  return <><CampaignIntelligenceProof /><ClosingCta /></>;
}
