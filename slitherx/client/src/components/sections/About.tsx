import Section from '@/components/Section';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <Section 
      id="about" 
      title="About SlitherX" 
      accentWord="SlitherX"
      bubbleMessage="SlitherX combines strategy, survival, and blockchain rewards. Evolve your snake to dominate!"
      mascotPosition="right"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <motion.p 
            className="text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            SlitherX is a revolutionary Web3 PvP survival game where players control evolving snakes in a deep teal ocean environment. Defeat your opponents, collect resources, and grow stronger through strategic gameplay.
          </motion.p>
          
          <motion.p 
            className="text-lg mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Our game features unique NFT tails that can evolve, a token-burning mechanism upon death, seasonal PvP rankings, and a DAO-based governance system.
          </motion.p>
          
          <motion.div 
            className="grid grid-cols-2 gap-4 mt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {[
              { icon: "trophy", title: "PvP Rankings", desc: "Compete in seasonal battles" },
              { icon: "fire", title: "Token Burning", desc: "Economic balance through gameplay" },
              { icon: "chart-line", title: "Bot Farming", desc: "Stake to earn while offline" },
              { icon: "users", title: "DAO Governance", desc: "Community-led decisions" }
            ].map((feature, index) => (
              <div key={index} className="bg-[#0A6D6E]/30 p-4 rounded-lg text-center">
                <i className={`fas fa-${feature.icon} text-accent text-2xl mb-2`}></i>
                <h3 className="font-heading font-semibold">{feature.title}</h3>
                <p className="text-sm">{feature.desc}</p>
              </div>
            ))}
          </motion.div>
        </div>
        
        <motion.div 
          className="order-first md:order-last mb-8 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-full h-80 md:h-96 bg-[#012F30] rounded-xl flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-[#0A6D6E]/10 to-[#012F30]/60"></div>
            <div className="relative z-10 text-center p-6">
              <img src="/src/assets/snake.svg" alt="SlitherX mascot" className="w-40 h-40 mx-auto" />
              <h3 className="text-xl font-heading font-semibold mt-4">Dive into the SlitherX universe</h3>
              <p className="mt-2 text-accent-foreground/80">Control your unique snake in a vast oceanic arena</p>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default About;
