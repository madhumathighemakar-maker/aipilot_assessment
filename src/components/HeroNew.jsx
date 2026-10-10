import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="hero hero--connected hero--product-led" id="product" aria-labelledby="hero-title">
      <div className="connected-hero-copy">
        <div className="connected-eyebrow">AI-NATIVE PERFORMANCE MARKETING</div>
        <h1 id="hero-title">Every signal connected.<br />Every <span>decision clearer.</span></h1>
        <p>Connect campaign, creative, and budget intelligence across platforms to understand what changed, why it matters, and what to do next.</p>
        <div className="connected-actions">
          <a className="button button--primary" href="#product-preview">Explore AdPilot <ArrowRight size={17} /></a>
          <a className="connected-demo" href="#demo"><span><Play size={14} fill="currentColor" /></span>Book a demo</a>
        </div>
      </div>
    </section>
  );
}

