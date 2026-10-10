import { ArrowRight, BarChart3, CircleDollarSign, Image, Play } from 'lucide-react';
import { motion, useReducedMotion, useTransform } from 'framer-motion';
import { useHeroReveal } from './HeroReveal.jsx';

const inputs = [
  { name: 'Meta', detail: 'Campaign performance', mark: 'M', tone: 'meta' },
  { name: 'Google', detail: 'Search and conversion data', mark: 'G', tone: 'google' },
  { name: 'TikTok', detail: 'Creative response', mark: 'T', tone: 'tiktok' },
];

const outputs = [
  { name: 'Campaign Intelligence', detail: 'Prioritise what needs review', Icon: BarChart3 },
  { name: 'Budget Optimisation', detail: 'Set controlled scaling', Icon: CircleDollarSign },
  { name: 'Creative Intelligence', detail: 'Surface the next test', Icon: Image },
];

function SignalCard({ item, index, direction, progress }) {
  const driftY = useTransform(progress, [0, 0.58, 1], [0, (index - 1) * 7, (index - 1) * 22]);
  const driftRotate = useTransform(progress, [0, 0.7, 1], [0, direction * (index - 1) * 0.35, direction * (index - 1) * 0.7]);
  const { name, detail, mark, tone, Icon } = item;

  return <motion.div className="reveal-card" style={{ y: driftY, rotate: driftRotate }}>
    <div className="connected-card" key={name}><span className={'connected-icon ' + (tone || '')}>{Icon ? <Icon size={21} /> : mark}</span><div><b>{name}</b><small>{detail}</small></div></div>
  </motion.div>;
}

export default function Hero() {
  const reduceMotion = useReducedMotion();
  const progress = useHeroReveal();
  const inputX = useTransform(progress, [0, 0.58, 1], [0, 145, 255]);
  const inputY = useTransform(progress, [0, 0.58, 1], [0, 4, 38]);
  const outputX = useTransform(progress, [0, 0.58, 1], [0, -145, -255]);
  const outputY = useTransform(progress, [0, 0.58, 1], [0, -4, 38]);
  const cardOpacity = useTransform(progress, [0, 0.7, 1], [1, 0.86, 0.18]);
  const coreY = useTransform(progress, [0, 0.62, 1], [0, 62, 150]);
  const coreScale = useTransform(progress, [0, 0.72, 1], [1, 0.92, 0.73]);
  const linesScale = useTransform(progress, [0, 0.7, 1], [1, 0.88, 0.68]);
  const linesOpacity = useTransform(progress, [0, 0.72, 1], [1, 0.8, 0.34]);

  return (
    <section className="hero hero--connected" id="product" aria-labelledby="hero-title">
      <div className="connected-hero-copy">
        <div className="connected-eyebrow">AI-NATIVE PERFORMANCE MARKETING</div>
        <h1 id="hero-title">Every signal connected.<br />Every <span>decision clearer.</span></h1>
        <p>For performance marketing teams, AdPilot connects campaign, creative, budget, competitive, and market signals to explain what changed and which evidence-based action deserves review.</p>
        <ul className="hero-decision-points" aria-label="What AdPilot helps marketing teams do">
          <li>Connect cross-channel performance signals</li>
          <li>Explain the evidence behind a change</li>
          <li>Review a controlled next action</li>
        </ul>
        <div className="connected-actions">
          <a className="button button--primary" href="#product-preview">Explore AdPilot <ArrowRight size={17} /></a>
          <a className="connected-demo" href="#demo"><span><Play size={14} fill="currentColor" /></span>Book a demo</a>
        </div>
        <p className="hero-operating-model" aria-label="AdPilot intelligence framework">Connect <i /> Diagnose <i /> Prioritise <i /> Activate <i /> Optimise</p>
      </div>

      <div className="connected-system" aria-label="Advertising signals are connected through AdPilot into actionable intelligence">
        <motion.svg className="reveal-signal-lines" style={{ scaleX: linesScale, opacity: linesOpacity }} viewBox="0 0 1440 510" preserveAspectRatio="none" aria-hidden="true">
          <g className="connected-lines">
            {[125, 255, 385].map((y, index) => <motion.path key={'input-' + y} d={`M115 ${y} C300 ${y} 410 ${250 + (index - 1) * 13} 650 255`} initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: reduceMotion ? 0 : 1.3, delay: index * .08 }} />)}
            {[145, 255, 365].map((y, index) => <motion.path key={'output-' + y} d={`M790 255 C1035 ${250 + (index - 1) * 14} 1120 ${y} 1325 ${y}`} initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: reduceMotion ? 0 : 1.3, delay: .25 + index * .08 }} />)}
            <path className="connected-beam" d="M650 255H790" />
          </g>
          {[[310, 150], [380, 222], [450, 300], [520, 238], [580, 330], [860, 220], [940, 280], [1030, 185], [1120, 325]].map(([x, y], index) => <circle key={index} cx={x} cy={y} r={index % 3 === 0 ? 4 : 2.5} />)}
        </motion.svg>
        <motion.div className="input-stack reveal-input-stack" style={{ x: inputX, y: inputY, opacity: cardOpacity }}>{inputs.map((item, index) => <SignalCard item={item} index={index} direction={1} progress={progress} key={item.name} />)}</motion.div>
        <motion.div className="adpilot-core reveal-core" style={{ y: coreY, scale: coreScale }}><span className="core-orbit" /><span className="core-mark">A</span><small>ADPILOT INTELLIGENCE</small></motion.div>
        <motion.div className="output-stack reveal-output-stack" style={{ x: outputX, y: outputY, opacity: cardOpacity }}>{outputs.map((item, index) => <SignalCard item={item} index={index} direction={-1} progress={progress} key={item.name} />)}</motion.div>
      </div>
    </section>
  );
}
