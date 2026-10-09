import { useState } from 'react';
import { Activity, ArrowRight, BarChart3, CalendarDays, CheckCircle2, CircleDollarSign, Plus, Search, Sparkles, TrendingDown } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import DashboardBody from './DashboardBody.jsx';

const insights = {
  decline: {
    label: 'Campaign decline',
    status: 'INVESTIGATE',
    tone: 'decline',
    title: 'Northstar Prospecting is losing efficiency',
    changed: 'ROAS declined from 3.8× to 3.1× over three days while spend remained stable.',
    evidence: 'Creative CTR decreased from 1.9% to 1.4% during the same period.',
    interpretation: 'Creative fatigue may be contributing, but the available evidence does not confirm causation.',
    action: 'Review creative age, frequency, and placement performance before changing delivery.'
  },
  scale: {
    label: 'Scaling opportunity',
    status: 'REVIEW',
    tone: 'scale',
    title: 'Summer Acquisition may have room to scale',
    changed: 'ROAS is 4.8× against a 3.5× target while budget utilisation has reached 98%.',
    evidence: 'Conversion volume remains stable and the campaign is repeatedly reaching its daily budget.',
    interpretation: 'Current efficiency and constrained delivery suggest a potential opportunity, with marginal efficiency still to verify.',
    action: 'Evaluate a controlled budget increase with an approval checkpoint and efficiency guardrail.'
  }
};

export default function ProductShowcase() {
  const [selected, setSelected] = useState('decline');
  const [reasoningOpen, setReasoningOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const active = insights[selected];
  const choose = id => { setSelected(id); setReasoningOpen(false); };

  return <section className="product-showcase" id="product-preview" aria-labelledby="product-showcase-title">
    <div className="showcase-heading">
      <div><div className="section-kicker"><span className="section-dot"/> ADPILOT INTELLIGENCE</div><h2 id="product-showcase-title">Your campaigns.<br/>One clear picture.</h2></div>
      <p>See what changed, understand what matters, and review the next best action without manually connecting signals across platforms.</p>
    </div>
    <div className="showcase-connector" aria-hidden="true"><span/></div>
    <motion.div className="workspace-shell dashboard-destination" initial={reduceMotion?false:{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true,amount:.15}} transition={{duration:reduceMotion?0:.55}}>
      <header className="workspace-bar dashboard-toolbar"><div className="workspace-brand"><span><Sparkles size={15}/></span><div><b>AdPilot</b><small>Intelligence workspace</small></div></div><label className="dashboard-search"><Search size={14}/><span className="sr-only">Search demonstration workspace</span><input aria-label="Search demonstration workspace" placeholder="Search campaigns, creatives, insights..."/></label><button type="button" className="dashboard-period"><CalendarDays size={14}/> May 12 – May 18, 2026</button><button type="button" className="dashboard-new"><Plus size={14}/> New campaign</button></header>
      <DashboardBody active={active} selected={selected} choose={choose} reasoningOpen={reasoningOpen} setReasoningOpen={setReasoningOpen}/>
      <div className="dashboard-kpis">{[['Total spend','₹12.4L','↑ 12%'],['ROAS (avg)','4.2×','↓ 18%'],['Conversions','18.6K','↑ 24%'],['Avg. CPA','₹86.20','↓ 14%']].map(([label,value,change],i)=><div key={label}><small>{label}</small><b>{value}</b><span className={i===1?'is-negative':''}>{change} vs last 7 days</span></div>)}</div>
      <div className="workspace-body">
        <aside className="workspace-overview" aria-label="Performance signal overview">
          <span className="workspace-label">SIGNAL OVERVIEW</span>
          <div className="overview-summary"><div><small>CONNECTED SIGNALS</small><b>12</b></div><span>Campaign, creative and budget activity</span></div>
          <div className="overview-list">
            <div><span className="overview-icon"><Activity size={15}/></span><p><b>Campaign performance</b><small>2 items need attention</small></p><em className="is-alert">2</em></div>
            <div><span className="overview-icon"><BarChart3 size={15}/></span><p><b>Creative response</b><small>CTR movement detected</small></p><em>1</em></div>
            <div><span className="overview-icon"><CircleDollarSign size={15}/></span><p><b>Budget status</b><small>1 campaign constrained</small></p><em>1</em></div>
          </div>
          <div className="workspace-platforms"><small>INPUTS</small><span>Meta</span><span>TikTok</span><span>Google</span></div>
        </aside>

        <div className="workspace-priorities">
          <div className="workspace-column-head"><div><span className="workspace-label">PRIORITY INSIGHTS</span><b>What deserves attention</b></div><small>2 OPEN</small></div>
          <div className="priority-list" role="tablist" aria-label="Select an AdPilot insight">
            {Object.entries(insights).map(([id,item])=><button type="button" role="tab" aria-selected={selected===id} aria-controls="workspace-detail" id={'workspace-tab-'+id} className={'priority-item '+(selected===id?'is-active ':'')+item.tone} key={id} onClick={()=>choose(id)}><span className="priority-symbol">{id==='decline'?<TrendingDown size={17}/>:<CircleDollarSign size={17}/>}</span><span><small>{item.status}</small><b>{item.label}</b><em>{id==='decline'?'3-day efficiency decline':'Above target · budget constrained'}</em></span><ArrowRight size={15}/></button>)}
          </div>
          <div className="showcase-chart" aria-label="Illustrative campaign performance chart"><div><b>Campaign performance</b><span><i/> Conversions</span></div><svg viewBox="0 0 520 190" role="img" aria-label="Conversions declined around May 15 before recovering"><g><path d="M24 28H500M24 70H500M24 112H500M24 154H500"/></g><path className="chart-secondary" d="M30 128 L106 85 L182 111 L258 104 L334 124 L410 122 L490 92"/><path className="chart-primary" d="M30 148 L106 105 L182 131 L258 116 L334 137 L410 106 L490 66"/><path className="chart-marker" d="M258 22V164"/><circle cx="258" cy="116" r="6"/><g className="chart-dots">{[[30,148],[106,105],[182,131],[334,137],[410,106],[490,66]].map(([x,y])=><circle key={x} cx={x} cy={y} r="3.5"/>)}</g></svg><span className="showcase-chart-alert"><b>Performance dropped</b><small>↓ 32% conversions</small><small>↓ 28% creative CTR</small></span></div>
          <div className="workspace-context"><CheckCircle2 size={14}/><span>Observed facts, interpretations, and proposed actions are labeled separately.</span></div>
        </div>

        <div className="workspace-detail" id="workspace-detail" role="tabpanel" aria-labelledby={'workspace-tab-'+selected} key={selected}>
          <div className="detail-status"><span className={active.tone}><i/>{active.status}</span><small>HUMAN REVIEW REQUIRED</small></div>
          <h3>{active.title}</h3>
          <dl><div><dt>WHAT CHANGED</dt><dd>{active.changed}</dd></div><div><dt>SUPPORTING EVIDENCE</dt><dd>{active.evidence}</dd></div><div><dt>WHAT THE EVIDENCE SUGGESTS</dt><dd>{active.interpretation}</dd></div><div className="detail-action"><dt>RECOMMENDED NEXT</dt><dd>{active.action}</dd></div></dl>
          <button type="button" className="workspace-review" aria-expanded={reasoningOpen} aria-controls="workspace-reasoning" onClick={()=>setReasoningOpen(value=>!value)}>{reasoningOpen?'Hide reasoning':'Review recommendation'} <ArrowRight size={15}/></button>
          {reasoningOpen&&<div className="workspace-reasoning" id="workspace-reasoning"><small>BEFORE ACTING</small><p>{selected==='decline'?'Verify audience saturation, placement mix, tracking quality, and recent creative rotation.':'Review marginal ROAS, pacing, conversion capacity, and the account spend guardrail.'}</p><span>No live advertising account is connected. No campaign changes will be made.</span></div>}
        </div>
      </div>
      <div className="showcase-opportunities"><span>OTHER OPPORTUNITIES</span><button type="button" onClick={()=>choose('scale')}><CircleDollarSign size={17}/><p><small>SCALE OPPORTUNITY</small><b>Room to increase budget</b><em>ROAS is above target and delivery may be budget limited.</em></p><ArrowRight size={15}/></button><button type="button" onClick={()=>choose('decline')}><BarChart3 size={17}/><p><small>CREATIVE REVIEW</small><b>Investigate creative fatigue</b><em>CTR is declining alongside campaign performance.</em></p><ArrowRight size={15}/></button></div>
    </motion.div>
  </section>;
}
