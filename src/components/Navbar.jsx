import { ArrowRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return <header className={'nav ' + (open ? 'nav--open' : '')}>
    <a className="brand" href="#" aria-label="AdPilot home"><span className="brand-mark" aria-hidden="true" /><span>AdPilot</span></a>
    <nav className="nav-links" id="main-navigation" aria-label="Main navigation">
      <a onClick={()=>setOpen(false)} href="#product">Product</a><a onClick={()=>setOpen(false)} href="#how-it-works">How it works</a><a onClick={()=>setOpen(false)} href="#understand">Intelligence</a><a onClick={()=>setOpen(false)} href="#trust">Trust</a>
    </nav>
    <div className="nav-actions"><a className="demo-link" href="#demo">Book a demo <ArrowRight size={16} /></a></div>
    <button className="menu-button" aria-label={open ? 'Close navigation' : 'Open navigation'} aria-controls="main-navigation" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X size={21} /> : <Menu size={21} />}</button>
  </header>;
}
