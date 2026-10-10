import { BarChart3, CircleDollarSign, Image, Network, TrendingDown } from 'lucide-react';

import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform } from 'framer-motion';

const cards = [
  {
    id: 'campaign',
    Icon: BarChart3,
    title: 'Campaign Intelligence',
    description: 'Identify material changes and investigate potential drivers.',
    takeaway: 'Northstar Prospecting: CTR and conversion efficiency need review.',
  },
  {
    id: 'budget',
    Icon: CircleDollarSign,
    title: 'Budget Optimisation',
    description: 'Find scaling opportunities while managing efficiency.',
    takeaway: 'Summer Acquisition is above target but constrained by budget.',
  },
  {
    id: 'creative',
    Icon: Image,
    title: 'Creative Intelligence',
    description: 'Surface creative fatigue signals and testing opportunities.',
    takeaway: 'Test the strongest short-form concept in a new placement.',
  },
  {
    id: 'channel',
    Icon: Network,
    title: 'Cross-channel Analysis',
    description: 'Connect performance insights across advertising platforms.',
    takeaway: 'One view links campaign, creative, and budget context.',
  },
];

function CampaignVisual() {
  return <div className="feature-product-visual campaign-visual" aria-label="Illustrative campaign trend">
    <div className="feature-visual-heading"><span>3-DAY PERFORMANCE</span><b>Northstar Prospecting</b></div>
    <svg viewBox="0 0 280 118" role="img" aria-label="Campaign conversion trend declining over three days"><path className="feature-grid" d="M10 20H270M10 56H270M10 92H270" /><path className="feature-trend-muted" d="M12 43 L57 38 L102 42 L147 40 L192 43 L237 41 L268 44" /><path className="feature-trend" d="M12 28 L57 35 L102 48 L147 64 L192 72 L237 79 L268 83" /><circle cx="147" cy="64" r="4" /></svg>
    <p><TrendingDown size={13} /> Conversions down 32%; creative CTR down 28%.</p>
  </div>;
}

function BudgetVisual() {
  return <div className="feature-product-visual budget-visual" aria-label="Illustrative budget recommendation">
    <div className="feature-visual-heading"><span>SCALING OPPORTUNITY</span><b>Summer Acquisition</b></div>
    <div className="budget-metric-row"><div><small>Current ROAS</small><b>4.8x</b></div><div><small>Target ROAS</small><b>3.5x</b></div></div>
    <div className="budget-limit"><div><span>Budget utilisation</span><b>98%</b></div><i><u /></i><small>Reaches its daily budget limit</small></div>
  </div>;
}

function CreativeVisual() {
  return <div className="feature-product-visual creative-visual" aria-label="Illustrative creative comparison">
    <div className="feature-visual-heading"><span>CREATIVE COMPARISON</span><b>Short-form product concepts</b></div>
    <div className="creative-comparison"><span className="creative-tile creative-tile--lead"><i>01</i><b>Product demo</b></span><span className="creative-tile creative-tile--test"><i>02</i><b>Creator story</b></span><span className="creative-tile creative-tile--new"><i>+</i><b>Test next</b></span></div>
    <p>Highest-response concept is ready for a controlled test.</p>
  </div>;
}

function ChannelVisual() {
  return <div className="feature-product-visual channel-visual" aria-label="Illustrative cross-channel connection">
    <div className="feature-visual-heading"><span>CONNECTED CONTEXT</span><b>Shared performance view</b></div>
    <svg viewBox="0 0 280 118" aria-hidden="true"><path d="M44 76 C88 76 92 56 139 56 C186 56 191 76 236 76" /><path d="M44 33 C84 33 98 55 139 56 C180 57 197 33 236 33" /><circle cx="44" cy="76" r="14" /><circle cx="44" cy="33" r="14" /><circle cx="236" cy="33" r="14" /><circle cx="140" cy="56" r="20" /><text x="44" y="81">M</text><text x="44" y="38">G</text><text x="236" y="38">T</text><text x="140" y="61">A</text></svg>
    <p>Signals connect before a recommendation is prioritised.</p>
  </div>;
}

const visuals = { campaign: CampaignVisual, budget: BudgetVisual, creative: CreativeVisual, channel: ChannelVisual };

export default function FeatureShowcase() {
  const sectionRef = useRef(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start 90%', 'start 48%'] });
  const opacity = useTransform(scrollYProgress, [0, 0.36, 1], [0.08, 0.62, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [54, 0]);

  return <motion.section ref={sectionRef} className="feature-showcase feature-showcase--scroll-reveal" aria-labelledby="feature-showcase-title" style={{ opacity: reduceMotion ? 1 : opacity, y: reduceMotion ? 0 : y }}>
    <header><span>FEATURES</span><h2 id="feature-showcase-title">Built for <em>smarter advertising decisions.</em></h2><p>Turn connected advertising signals into clear, confident actions.</p></header>
    <div className="feature-card-grid">
      {cards.map(({ id, Icon, title, description, takeaway }) => { const Visual = visuals[id]; return <article className="capability-card" key={id}><div className="capability-head"><span><Icon size={20} /></span><div><h3>{title}</h3><p>{description}</p></div></div><Visual /><div className="capability-takeaway"><small>TAKEAWAY</small><b>{takeaway}</b></div></article>; })}
    </div>
  </motion.section>;
}
