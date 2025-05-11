import { ReactNode, useRef } from 'react';
import { useSectionInView } from '@/hooks/useSectionInView';
import MascotBubble from './MascotBubble';

interface SectionProps {
  id: string;
  title: string;
  accentWord?: string;
  children: ReactNode;
  bubbleMessage: string;
  mascotPosition?: 'left' | 'right';
}

const Section = ({ 
  id, 
  title, 
  accentWord, 
  children, 
  bubbleMessage,
  mascotPosition = 'left'
}: SectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useSectionInView(sectionRef, 0.3);
  
  const formattedTitle = accentWord 
    ? title.replace(accentWord, `<span class="text-accent">${accentWord}</span>`) 
    : title;

  return (
    <section id={id} ref={sectionRef} className="py-16 md:py-24 relative">
      <div className="container mx-auto px-4">
        <div className="section-bg p-6 md:p-10">
          <h2 
            className="text-3xl md:text-4xl font-heading font-bold mb-8 text-white"
            dangerouslySetInnerHTML={{ __html: formattedTitle }}
          />
          
          {children}
        </div>
      </div>
      
      <MascotBubble 
        message={bubbleMessage} 
        position={mascotPosition} 
        isVisible={isInView} 
      />
    </section>
  );
};

export default Section;
