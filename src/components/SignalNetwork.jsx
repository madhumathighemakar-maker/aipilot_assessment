import { useLayoutEffect } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const lines = [
  'M370 0 C370 72 348 102 370 144 C392 186 450 179 452 228 C454 279 390 285 381 331 C370 382 421 409 407 459 C397 497 365 526 370 606',
  'M231 203 C287 191 316 215 309 257 C302 301 251 317 266 365 C282 414 346 403 350 451 C354 493 323 526 370 606',
  'M521 205 C468 185 430 211 439 257 C448 302 505 309 494 360 C483 407 420 405 420 454 C420 501 397 546 370 606',
  'M185 328 C221 286 286 287 315 326 C344 366 318 407 279 421 C238 436 238 487 292 503 C332 515 351 550 370 606',
  'M563 326 C528 286 464 287 434 326 C404 365 430 406 470 421 C511 436 510 486 456 503 C414 516 392 551 370 606',
  'M284 235 C350 207 424 232 419 292 C414 351 337 347 329 396 C321 447 391 459 390 511 C389 548 373 572 370 606',
  'M469 239 C405 204 333 229 337 291 C340 349 414 353 423 398 C433 448 364 459 361 509 C358 548 367 574 370 606',
  'M252 376 C294 333 356 362 371 405 C388 453 337 475 344 521 C349 555 365 578 370 606',
  'M500 377 C458 333 397 361 381 404 C364 452 415 475 407 521 C401 555 380 579 370 606',
  'M321 173 C364 201 398 185 430 213 C466 245 444 278 405 300 C366 321 344 357 368 391 C394 427 449 425 458 469',
  'M432 174 C389 201 355 185 322 214 C287 246 309 279 348 300 C387 321 408 357 384 391 C358 427 303 424 294 469'
];
const labels = [{x:18,y:425,text:'Performance'}, {x:113,y:558,text:'Spend'}, {x:642,y:430,text:'Creative'}, {x:603,y:579,text:'Analytics'}];
function Source({ className, title, lines: copy, children, style }) {
  return <div className={'network-source ' + className} style={style}><span className="source-logo">{children}</span><span className="source-copy"><b>{title}</b><small>{copy.map((t,i)=><span key={i}>{t}</span>)}</small></span></div>;
}
function SignalChip({ className, title, icon, color }) { return <div className={'signal-chip ' + className}><span className="chip-icon" style={{'--chip':color}}>{icon}</span>{title}</div>; }
export default function SignalNetwork() {
  const reduceMotion = useReducedMotion();
  useLayoutEffect(()=>{
    const align=()=>{
      const svg=document.querySelector('.network-lines');
      const showcase=document.querySelector('.product-showcase');
      const dashboard=document.querySelector('.dashboard-destination');
      if(!svg||!showcase||!dashboard)return;
      const pr=showcase.getBoundingClientRect(),dr=dashboard.getBoundingClientRect();
      const matrix=svg.getScreenCTM();
      if(!matrix)return;
      const renderedPoint=new DOMPoint(370,606).matrixTransform(matrix);
      const x=renderedPoint.x;
      const y=renderedPoint.y;
      const top=y-pr.top;
      showcase.style.setProperty('--mesh-axis-x',(x-pr.left)+'px');
      showcase.style.setProperty('--mesh-axis-top',top+'px');
      showcase.style.setProperty('--connector-length',Math.max(2,-top+2)+'px');
      dashboard.style.setProperty('--dashboard-axis-x',(x-dr.left)+'px');
    };
    align();
    const observer=new ResizeObserver(align);
    observer.observe(document.documentElement);
    window.addEventListener('load',align);
    return()=>{observer.disconnect();window.removeEventListener('load',align)};
  },[]);
  return <div className="network" aria-label="AdPilot connects media and business signals">
    <div className="signal-label"><i/> <span>Signals</span></div>
    <svg className="network-lines" viewBox="0 0 760 850" role="img" aria-label="Fine lines connect Meta, TikTok, Google, DSP, campaign, creative, budget and market signals to AdPilot intelligence">
      <ellipse className="orbit" cx="378" cy="382" rx="292" ry="242"/><ellipse className="orbit orbit-inner" cx="378" cy="382" rx="232" ry="188"/>
      {lines.map((d,i)=><motion.path key={i} d={d} className={'network-path p'+i} initial={reduceMotion?false:{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:1}} transition={{duration:1.15,delay:i*.08,ease:'easeOut'}} />)}
      <path className="spine spine-input" d="M370 0V145"/>
      <path className="spine spine-output" d="M370 606V850"/>
      <motion.circle className="travelling-node" cx="370" r="5" initial={reduceMotion?false:{cy:606,opacity:0}} animate={reduceMotion?{cy:850,opacity:1}:{cy:[606,606,850],opacity:[0,1,1]}} transition={{duration:reduceMotion?0:5.8,times:[0,.08,1],repeat:reduceMotion?0:Infinity,ease:'easeInOut'}}/>
      {[['370','144','green'],['231','203','gray'],['521','205','green'],['309','257','gray'],['439','257','green'],['185','328','green'],['563','326','gray'],['315','326','green'],['434','326','green'],['266','365','gray'],['494','360','green'],['371','405','green'],['279','421','gray'],['470','421','green'],['350','451','green'],['420','454','gray'],['292','503','green'],['456','503','gray'],['370','606','green']].map(([cx,cy,color],i)=><circle key={i} className={'signal-point '+color} cx={cx} cy={cy} r={i===0||i===18?4.5:3.2}/>)}
      {Array.from({length:28},(_,i)=><circle key={'dust'+i} className="dust" cx={132+(i*71%486)} cy={180+(i*47%340)} r={i%4===0?2:1.3}/>) }
    </svg>
    <Source className="meta-source" title="Meta" lines={['Campaigns','Performance']}><svg viewBox="0 0 32 22" aria-hidden="true"><path d="M3 16c2-6 5-12 9-12 6 0 10 15 14 15 2 0 3-3 4-6M29 6c-2-3-4-3-6-1-3 3-8 15-12 15-3 0-7-6-9-11"/></svg></Source>
    <Source className="google-source" title="Google" lines={['Search','YouTube','Performance']}><span className="google-g">G</span></Source>
    <Source className="tiktok-source" title="TikTok" lines={['Trends','Engagement']}><span className="tiktok-note">♪</span></Source>
    <Source className="dsp-source" title="DSPs" lines={['Display','Programmatic']}><span className="dsp-dots">••<br/>••<br/>••</span></Source>
    <SignalChip className="campaign-chip" title="Campaigns" icon="▧" color="#87cc37"/><SignalChip className="creative-chip" title="Creative" icon="▣" color="#ff871c"/><SignalChip className="budget-chip" title="Budget" icon="▧" color="#3194ff"/><SignalChip className="market-chip" title="Analytics" icon="⌁" color="#8f56ff"/>
    <Source className="linkedin-source" title="LinkedIn Ads" lines={['B2B','Campaigns']}><span className="linkedin-logo">in</span></Source>
    <Source className="amazon-source" title="Amazon Ads" lines={['Retail','Media']}><span className="amazon-logo">a</span></Source>
    {labels.map(l=><div className="orbit-label" key={l.text} style={{left:(l.x/760*100)+'%',top:(l.y/850*100)+'%'}}>{l.text}<i/></div>)}
    <div className="intelligence-hub" role="img" aria-label="AdPilot Intelligence">
      <span className="hub-spark">✧</span><b>ADPILOT</b><small>INTELLIGENCE</small><span className="hub-orbit"/>
    </div>
    <aside className="hero-insight" aria-label="Illustrative AdPilot campaign intelligence preview">
      <div className="hero-product-bar"><span><i/> ADPILOT INTELLIGENCE</span><small>ILLUSTRATIVE DATA</small></div>
      <div className="hero-insight-top"><span><i/> HIGH PRIORITY</span><small>MONDAY REVIEW</small></div>
      <h2>Campaign performance is declining</h2>
      <div className="hero-trend" aria-label="Campaign efficiency declined over three days"><div><small>CAMPAIGN EFFICIENCY</small><b>Declining for 3 days</b></div><svg viewBox="0 0 118 38" aria-hidden="true"><path d="M3 8 C24 9 28 13 43 15 S68 20 78 24 S97 28 115 34"/><circle cx="3" cy="8" r="2.5"/><circle cx="43" cy="15" r="2.5"/><circle cx="78" cy="24" r="2.5"/><circle cx="115" cy="34" r="2.5"/></svg></div>
      <dl><div><dt>OBSERVED</dt><dd>Creative CTR is also decreasing</dd></div><div><dt>INTERPRETATION</dt><dd>Creative fatigue may be contributing</dd></div></dl>
      <div className="hero-recommendation"><small>RECOMMENDED NEXT</small><b>Review creative performance and investigate potential causes.</b></div>
      <p>Evidence suggests a relationship, not confirmed causation.</p>
      <a href="#understand">Review recommendation <span aria-hidden="true">→</span></a>
    </aside>
    <div className="spine-bottom"><span/></div>
  </div>;
}
