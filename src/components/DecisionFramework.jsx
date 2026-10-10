import { useState } from 'react';
import { ArrowRight, CheckCircle2, CircleDollarSign, FlaskConical, Gauge, Lightbulb, LockKeyhole, ShieldCheck, TrendingDown } from 'lucide-react';

const framework = [
  ['01', 'Connected intelligence', 'Bring campaign, creative, budget, and cross-channel information into one workspace.'],
  ['02', 'Context and evidence', 'Distinguish observed metrics, related signals, and possible explanations.'],
  ['03', 'Prioritised opportunities', 'Surface the risks and opportunities that deserve attention.'],
  ['04', 'Human-controlled action', 'Review recommendations and control execution with clear guardrails.'],
  ['05', 'Outcomes and learning', 'Measure results against a baseline and inform the next decision.'],
];

const scenarios = {
  decline: {
    label: 'Campaign decline',
    status: 'Investigate',
    title: 'Northstar Prospecting is losing efficiency',
    changed: 'ROAS fell from 3.8x to 3.1x over three days while spend held steady.',
    evidence: 'Creative CTR fell from 1.9% to 1.4% in the same period.',
    interpretation: 'Creative fatigue is worth testing. The evidence does not prove causation.',
    action: 'Review creative age, frequency, and placement before changing delivery.',
  },
  scale: {
    label: 'Budget opportunity',
    status: 'Review',
    title: 'Summer Acquisition may have room to scale',
    changed: 'ROAS is 4.8x against a 3.5x target and budget use is 98%.',
    evidence: 'Conversions are stable while the campaign repeatedly reaches its daily budget.',
    interpretation: 'There may be room to scale; marginal efficiency still needs verification.',
    action: 'Evaluate a controlled increase with an approval checkpoint and ROAS guardrail.',
  },
  creative: {
    label: 'Creative signal',
    status: 'Inspect',
    title: 'Creative response is declining',
    changed: 'The primary creative set has lost click-through rate for three consecutive days.',
    evidence: 'The timing aligns with the campaign decline, across its highest-spend placements.',
    interpretation: 'The relationship is relevant to investigate, not a confirmed cause.',
    action: 'Compare creative age, frequency, placement, and audience response.',
  },
  crossChannel: {
    label: 'Cross-channel test',
    status: 'Test',
    title: 'A TikTok concept is a candidate for Meta',
    changed: 'A short-form TikTok concept is outperforming the account creative average.',
    evidence: 'The concept has not been tested on Meta, where its audience and placement context differ.',
    interpretation: 'It is a test candidate, not a prediction of performance on another platform.',
    action: 'Prepare a controlled Meta test with defined budget and efficiency limits.',
  },
};

function DecisionMoment() {
  const [selected, setSelected] = useState('decline');
  const [reviewOpen, setReviewOpen] = useState(false);
  const active = scenarios[selected];

  return <section className="decision-moment" id="decision-moment" aria-labelledby="decision-moment-title">
    <header className="concise-section-header">
      <span>INTERACTIVE PRODUCT DEMO</span>
      <h2 id="decision-moment-title">The decision moment.</h2>
      <p>Inspect the signal, the evidence, and the next controlled action.</p>
    </header>
    <div className="decision-moment__workspace">
      <div className="decision-moment__signals" role="tablist" aria-label="Illustrative performance scenarios">
        {Object.entries(scenarios).map(([id, item]) => <button type="button" key={id} role="tab" aria-selected={selected === id} className={selected === id ? 'is-active' : ''} onClick={() => { setSelected(id); setReviewOpen(false); }}>
          <span>{id === 'decline' ? <TrendingDown size={16} /> : id === 'scale' ? <CircleDollarSign size={16} /> : id === 'creative' ? <Lightbulb size={16} /> : <FlaskConical size={16} />}</span>
          <div><small>{item.status}</small><b>{item.label}</b></div><ArrowRight size={14} />
        </button>)}
      </div>
      <article className="decision-moment__detail" role="tabpanel" aria-live="polite">
        <div className="decision-moment__status"><span>{active.status}</span><small>ILLUSTRATIVE DATA</small></div>
        <h3>{active.title}</h3>
        <dl>
          <div><dt>What changed</dt><dd>{active.changed}</dd></div>
          <div><dt>Evidence</dt><dd>{active.evidence}</dd></div>
          <div><dt>Why it matters</dt><dd>{active.interpretation}</dd></div>
        </dl>
        <div className="decision-moment__recommendation"><small>Recommended next</small><b>{active.action}</b></div>
        <button type="button" className="decision-moment__button" onClick={() => setReviewOpen(value => !value)} aria-expanded={reviewOpen}>{reviewOpen ? 'Close review' : 'Review recommendation'} <ArrowRight size={15} /></button>
        {reviewOpen && <p className="decision-moment__review"><CheckCircle2 size={15} /> Verify account guardrails and ownership before acting. This demonstration does not change a live campaign.</p>}
      </article>
    </div>
  </section>;
}

function TrustControl() {
  return <section className="trust-control" id="trust" aria-labelledby="trust-title">
    <div><span>TRUST AND CONTROL</span><h2 id="trust-title">AI can act. You stay in control.</h2><p>Recommendations are transparent. Consequential changes require approval. Automation follows defined guardrails.</p></div>
    <div className="trust-control__rules" aria-label="Example automation controls"><div><ShieldCheck size={18} /><span><b>Recommend</b><small>Evidence and proposed action</small></span></div><div><LockKeyhole size={18} /><span><b>Approve</b><small>Human review for budget changes</small></span></div><div><Gauge size={18} /><span><b>Guardrail</b><small>Monitor efficiency limits</small></span></div></div>
  </section>;
}

function FinalCta() {
  const [open, setOpen] = useState(false);
  return <section className="concise-cta" id="demo" aria-labelledby="concise-cta-title"><div><span>MAKE YOUR NEXT MOVE</span><h2 id="concise-cta-title">Less time connecting the dots.<br />More time <em>growing what works.</em></h2><p>Bring your advertising intelligence together and make better-informed decisions.</p><div><button type="button" className="button button--primary" onClick={() => setOpen(value => !value)}>{open ? 'Close demo form' : 'Book a demo'} <ArrowRight size={16} /></button><a href="#product-preview">Explore the platform</a></div>{open && <form className="concise-cta__form" onSubmit={event => event.preventDefault()}><label>Work email<input type="email" placeholder="you@company.com" required /></label><button type="submit">Request demo</button></form>}</div></section>;
}

export default function DecisionFramework() {
  return <>
    <section className="decision-framework" id="how-it-works" aria-labelledby="framework-title"><div className="framework-scroll"><header className="concise-section-header framework-scroll__intro"><span>THE ADPILOT INTELLIGENCE FRAMEWORK</span><h2 id="framework-title">From signal to strategy.</h2><p>A clear path from fragmented advertising activity to a controlled decision.</p><span className="framework-scroll__caption">SCROLL THE LIFECYCLE</span></header><ol>{framework.map(([number, title, description]) => <li key={title}><small>{number}</small><b>{title}</b><p>{description}</p><span>{number === '01' ? 'Signals connected' : number === '02' ? 'Evidence clarified' : number === '03' ? 'Action prioritised' : number === '04' ? 'Approval and guardrails' : 'Outcomes measured'}</span></li>)}</ol></div></section>
    <DecisionMoment />
    <TrustControl />
    <FinalCta />
  </>;
}
