import Section from '@/components/Section';
import { Check, Trophy, Skull, Award } from 'lucide-react';
import { motion } from 'framer-motion';

const Gameplay = () => {
  const features = [
    {
      icon: <Trophy className="h-10 w-10" />,
      title: "Tail NFTs",
      description: "Collect unique tail NFTs with special abilities. Some tails can evolve as you progress, unlocking new powers and visual effects."
    },
    {
      icon: <Skull className="h-10 w-10" />,
      title: "PvP Combat",
      description: "Battle against other players in intense PvP combat. Outmaneuver your opponents, trap them, and claim their resources when they fall."
    },
    {
      icon: <Award className="h-10 w-10" />,
      title: "Seasonal Rankings",
      description: "Compete in seasonal tournaments to earn rewards and climb the global leaderboards. Each season brings new challenges and prizes."
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <Section 
      id="gameplay" 
      title="Gameplay" 
      accentWord="play"
      bubbleMessage="Master your snake controls and defeat enemies! Collect NFT tails to gain special powers!"
      mascotPosition="left"
    >
      <motion.div 
        className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            variants={item}
            className="bg-[#0A6D6E]/20 rounded-xl p-6 hover:bg-[#0A6D6E]/30 transition-all hover:transform hover:scale-105"
          >
            <div className="mb-4 text-accent">
              {feature.icon}
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">{feature.title}</h3>
            <p>{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.div 
        className="mt-10 bg-[#045E54]/30 rounded-xl overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-6 md:p-8">
            <h3 className="text-2xl font-heading font-semibold mb-4">How To Play</h3>
            <ul className="space-y-3">
              {[
                "Control your snake with intuitive movements",
                "Collect resources to grow longer and stronger",
                "Defeat other players to steal their energy",
                "Upgrade your tail NFTs to unlock special abilities",
                "Stake tokens to earn passive rewards through bot farming"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="text-accent mr-2 mt-1 h-4 w-4 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <a href="#whitepaper" className="inline-flex items-center text-accent hover:text-white transition-colors">
                <span>View Full Game Guide</span>
                <i className="fas fa-arrow-right ml-2"></i>
              </a>
            </div>
          </div>
          <div className="bg-[#012F30] flex items-center justify-center h-64 md:h-auto">
            <div className="text-center p-6">
              <img src="/src/assets/snake.svg" alt="SlitherX gameplay" className="w-32 h-32 mx-auto" />
              <p className="mt-4 text-accent-foreground/80 italic">Experience dynamic gameplay with evolving snakes</p>
            </div>
          </div>
        </div>
      </motion.div>
    </Section>
  );
};

export default Gameplay;
