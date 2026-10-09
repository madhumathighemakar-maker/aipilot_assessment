import { ArrowRight, Play } from 'lucide-react';
import { motion, useReducedMotion } from 'framer-motion';
import SignalNetwork from './SignalNetwork.jsx';

export default function Hero() {
  const reduceMotion = useReducedMotion();
  return <section className="hero" id="product"><motion.svg className="hero-root-connector" viewBox="0 0 1000 900" preserveAspectRatio="none" aria-hidden="true"><motion.path d="M252 137 C365 137 454 129 535 134 C585 138 615 140 655 140" initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }} animate={{ pathLength: 1, opacity: 1 }} transition={{ duration: reduceMotion ? 0 : 1.4, delay: reduceMotion ? 0 : .35, ease: 'easeInOut' }}/><circle cx="252" cy="137" r="3.2"/></motion.svg><div className="hero-content">
    <section className="hero-copy"><div className="eyebrow"><span /> AI-NATIVE PERFORMANCE MARKETING</div>
      <h1>From scattered<br />signals to<br /><span>confident action.</span></h1>
      <p className="hero-description">AdPilot connects campaign, creative, and budget signals across advertising platforms to help marketers identify what needs attention, understand why performance is changing, and decide what to do next.</p>
      <div className="hero-ctas"><a className="button button--primary" href="#demo">Book a demo <ArrowRight size={18} /></a><a className="how-link" href="#how-it-works"><span><Play size={15} fill="currentColor" /></span>See how it works</a></div>
      <div className="hero-footnote"><span className="footnote-rule" /> <span>Not another reporting dashboard.<br />A clearer path from insight to action.</span></div>
    </section>
    <section className="hero-visual" aria-label="Connected campaign signals flowing into AdPilot intelligence"><SignalNetwork /></section>
  </div><div className="visual-caption"><span>FROM SIGNALS<br />TO OPPORTUNITIES</span></div></section>;
}
