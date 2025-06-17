import Section from '@/components/Section';
import { motion } from 'framer-motion';
import { RoadmapItem } from '@/lib/types';

const Roadmap = () => {
  const roadmapItems: RoadmapItem[] = [
    {
      quarter: "Q1 2023",
      title: "Concept & Development",
      items: [
        "Game concept finalization",
        "Economic model development",
        "Initial artwork creation",
        "Technical architecture design"
      ]
    },
    {
      quarter: "Q2 2023",
      title: "Alpha Development",
      items: [
        "Core gameplay mechanics implementation",
        "Smart contract development",
        "NFT tail system integration",
        "Initial testing phase"
      ]
    },
    {
      quarter: "Q3 2023",
      title: "Beta Launch",
      items: [
        "Closed beta testing",
        "Token presale",
        "Community building",
        "Marketplace integration"
      ]
    },
    {
      quarter: "Q4 2023",
      title: "Official Launch",
      items: [
        "Public game launch",
        "First seasonal tournament",
        "DAO governance implementation",
        "Mobile version development begins"
      ]
    },
    {
      quarter: "Q1 2024",
      title: "Expansion",
      items: [
        "Mobile app release",
        "New game modes introduction",
        "Expanded NFT ecosystem",
        "Cross-chain integration"
      ]
    }
  ];

  return (
    <Section 
      id="roadmap" 
      title="Roadmap" 
      accentWord="map"
      bubbleMessage="We have big plans ahead! Check out our roadmap to see what's coming next!"
      mascotPosition="left"
    >
      <div className="relative">
        {/* Vertical line for desktop */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-[#0A6D6E]/30 transform -translate-x-1/2"></div>
        
        {/* Timeline Items */}
        {roadmapItems.map((item, index) => (
          <motion.div 
            key={index} 
            className="relative mb-12 last:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div className="md:grid md:grid-cols-2 md:gap-8 items-center">
              {index % 2 === 0 ? (
                <>
                  <div className="md:text-right mb-6 md:mb-0 md:pr-12">
                    <div className="bg-[#0A6D6E]/20 p-6 rounded-xl inline-block md:inline">
                      <h3 className="text-xl font-heading font-semibold text-accent mb-2">{item.quarter}</h3>
                      <h4 className="text-lg font-heading mb-3">{item.title}</h4>
                      <ul className="space-y-2 text-sm">
                        {item.items.map((listItem, i) => (
                          <li key={i}>• {listItem}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="hidden md:block"></div>
                </>
              ) : (
                <>
                  <div className="hidden md:block"></div>
                  <div className="md:pl-12 mb-6 md:mb-0">
                    <div className="bg-[#0A6D6E]/20 p-6 rounded-xl inline-block md:inline">
                      <h3 className="text-xl font-heading font-semibold text-accent mb-2">{item.quarter}</h3>
                      <h4 className="text-lg font-heading mb-3">{item.title}</h4>
                      <ul className="space-y-2 text-sm">
                        {item.items.map((listItem, i) => (
                          <li key={i}>• {listItem}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </>
              )}
              
              {/* Milestone dot for desktop */}
              <div className="hidden md:block absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <div className="w-6 h-6 rounded-full bg-accent border-4 border-[#012F30]"></div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};

export default Roadmap;
