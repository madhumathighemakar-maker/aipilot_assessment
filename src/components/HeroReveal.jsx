import { createContext, useContext, useRef } from 'react';
import { useScroll } from 'framer-motion';

const HeroRevealContext = createContext(null);

export function useHeroReveal() {
  return useContext(HeroRevealContext);
}

export default function HeroReveal({ children }) {
  const sceneRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ['start start', 'end start'],
  });

  return (
    <div className="hero-reveal-scene" ref={sceneRef}>
      <HeroRevealContext.Provider value={scrollYProgress}>
        {children}
      </HeroRevealContext.Provider>
    </div>
  );
}
