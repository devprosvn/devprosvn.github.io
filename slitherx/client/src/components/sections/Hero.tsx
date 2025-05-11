import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/hooks/useSectionInView';
import MascotBubble from '@/components/MascotBubble';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useSectionInView(heroRef, 0.5);

  return (
    <section id="hero" ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* A deep teal ocean gradient background with subtle wave patterns */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A6D6E]/30 to-[#012F30]/70 z-0"></div>
      
      <div className="container mx-auto px-4 z-10 text-center">
        <motion.h1 
          className="text-4xl md:text-6xl font-heading font-bold mb-6 text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-accent">Slither</span>X
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-accent-foreground"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          A Web3 PvP survival game where you control evolving snakes, defeat opponents, and grow stronger.
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <a 
            href="#gameplay" 
            className="px-6 py-3 bg-gradient-to-r from-accent to-accent/80 text-white font-bold rounded-full hover:from-accent/90 hover:to-accent/70 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            Discover Gameplay
          </a>
          <a 
            href="#whitepaper" 
            className="px-6 py-3 bg-transparent border-2 border-accent-foreground text-accent-foreground font-bold rounded-full hover:bg-accent-foreground/10 transition-all"
          >
            Read Whitepaper
          </a>
        </motion.div>
      </div>
      
      <MascotBubble 
        message="Welcome to SlitherX! Scroll down to begin your journey in the ocean depths!" 
        position="left" 
        isVisible={isInView} 
      />
    </section>
  );
};

export default Hero;
