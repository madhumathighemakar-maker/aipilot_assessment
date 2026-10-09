import { useLayoutEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

function measureSpine() {
  const main = document.querySelector('main');
  const rail = document.querySelector('.feature-rail');
  const stages = [...document.querySelectorAll('.feature-stage')];
  if (!main || !stages.length) return null;
  const base = main.getBoundingClientRect();
  const point = (el, x = 'center', y = 'center') => {
    const r=el.getBoundingClientRect();
    return {x:(x==='left'?r.left:x==='right'?r.right:r.left+r.width/2)-base.left, y:(y==='top'?r.top:y==='bottom'?r.bottom:r.top+r.height/2)-base.top};
  };
  const railVisible=!!(rail&&rail.getClientRects().length);
  const gutterX=window.innerWidth<=900?10:24;
  const railPoint=railVisible?point(rail,'left','top'):{x:gutterX,y:0};
  const spineX=railVisible?railPoint.x:gutterX;
  const milestones=stages.map(stage=>{const tag=stage.querySelector('.feature-tag');const copy=stage.querySelector('.feature-copy');const p=point(tag||stage,'left','center');const copyX=copy?point(copy,'left','top').x:spineX+8;return {x:Math.max(spineX+6,copyX-12),y:p.y,railX:spineX};});
  const width=main.clientWidth,height=main.scrollHeight;
  const firstApproach=milestones[0].y-52;
  const end={x:spineX,y:milestones.at(-1).y+64};

  // Keep the shared path architectural and quiet: one straight trunk, short
  // horizontal connections to each stage, then a final hand-off to the CTA.
  let d='M '+spineX+' '+firstApproach+' L '+spineX+' '+end.y;
  milestones.forEach(p=>{d+=' M '+spineX+' '+p.y+' L '+p.x+' '+p.y;});
  return {width,height,d,nodes:milestones,end};
}
export default function JourneySpine(){
 const [shape,setShape]=useState(null); const reduceMotion=useReducedMotion();
 useLayoutEffect(()=>{
  let frame=0; const update=()=>{cancelAnimationFrame(frame);frame=requestAnimationFrame(()=>setShape(measureSpine()));};
  update(); const ro=new ResizeObserver(update); const main=document.querySelector('main'); if(main)ro.observe(main);
  window.addEventListener('resize',update); window.addEventListener('load',update);
  const timer=setTimeout(update,400);
  return()=>{cancelAnimationFrame(frame);clearTimeout(timer);ro.disconnect();window.removeEventListener('resize',update);window.removeEventListener('load',update);};
 },[]);
 if(!shape)return null;
 return <svg className="journey-spine" viewBox={'0 0 '+shape.width+' '+shape.height} preserveAspectRatio="none" aria-hidden="true">
  <motion.path d={shape.d} initial={reduceMotion?false:{pathLength:0,opacity:0}} animate={{pathLength:1,opacity:1}} transition={{duration:reduceMotion?0:4.5,ease:'easeInOut'}}/>
  {shape.nodes.map((p,i)=><circle className="spine-stage-node" key={i} cx={p.x} cy={p.y} r="3.5"/>)}
  <circle className="spine-end-node" cx={shape.end.x} cy={shape.end.y} r="4.5"/>
 </svg>;
}
