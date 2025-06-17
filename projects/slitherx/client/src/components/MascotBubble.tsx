import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import snakeSvg from '@/assets/snake.svg';

interface MascotBubbleProps {
  message: string;
  position: 'left' | 'right';
  isVisible: boolean;
}

const MascotBubble = ({ message, position, isVisible }: MascotBubbleProps) => {
  const [showBubble, setShowBubble] = useState(false);
  const timerRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (isVisible) {
      setShowBubble(true);
      
      // Clear any existing timers
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
      
      // Set timer to hide the bubble after 8 seconds
      timerRef.current = window.setTimeout(() => {
        setShowBubble(false);
      }, 8000);
    } else {
      setShowBubble(false);
    }
    
    return () => {
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [isVisible]);

  return (
    <div className={`mascot-container absolute bottom-10 ${position === 'left' ? 'left-10' : 'right-10'} flex items-end z-10 transition-opacity duration-500 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {position === 'left' ? (
        <>
          <div className="mascot-image w-24 h-24 animate-float">
            <img src={snakeSvg} alt="Vietnamese flag snake mascot" className="w-full h-auto" />
          </div>
          <AnimatePresence>
            {showBubble && (
              <motion.div 
                className="speech-bubble ml-2 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm font-medium">{message}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </>
      ) : (
        <>
          <AnimatePresence>
            {showBubble && (
              <motion.div 
                className="speech-bubble mr-2 mb-8"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-sm font-medium">{message}</p>
              </motion.div>
            )}
          </AnimatePresence>
          <div className="mascot-image w-24 h-24 animate-float">
            <img src={snakeSvg} alt="Vietnamese flag snake mascot" className="w-full h-auto" />
          </div>
        </>
      )}
    </div>
  );
};

export default MascotBubble;
