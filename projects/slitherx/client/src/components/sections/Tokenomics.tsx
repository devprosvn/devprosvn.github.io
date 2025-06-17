import Section from '@/components/Section';
import { Check, Flame, Lock, Scale } from 'lucide-react';
import { motion } from 'framer-motion';

const Tokenomics = () => {
  const tokenDistribution = [
    { name: "Community Rewards", percentage: 40, color: "bg-accent" },
    { name: "Development", percentage: 20, color: "bg-[#0A6D6E]" },
    { name: "Liquidity Pool", percentage: 15, color: "bg-blue-400" },
    { name: "Marketing", percentage: 10, color: "bg-purple-400" },
    { name: "Team", percentage: 10, color: "bg-green-400" },
    { name: "DAO Treasury", percentage: 5, color: "bg-yellow-400" }
  ];

  return (
    <Section 
      id="tokenomics" 
      title="Tokenomics" 
      accentWord="omics"
      bubbleMessage="Our token model ensures sustainable gameplay with token burning and staking rewards!"
      mascotPosition="right"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div>
          <motion.div 
            className="bg-[#045E54]/30 rounded-xl p-6 mb-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-heading font-semibold mb-4">Token Utility</h3>
            <ul className="space-y-3">
              {[
                "Purchase and upgrade NFT tails",
                "Enter premium tournaments with higher rewards",
                "Stake for passive income through bot farming",
                "Participate in DAO governance decisions",
                "Trade on decentralized exchanges"
              ].map((item, i) => (
                <li key={i} className="flex items-start">
                  <Check className="text-accent mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div 
            className="bg-[#045E54]/30 rounded-xl p-6"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-heading font-semibold mb-4">Economic Model</h3>
            <p className="mb-4">
              SlitherX implements a sustainable economic model through:
            </p>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Flame className="text-accent mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <span>Token burning upon player defeat (deflationary mechanism)</span>
              </li>
              <li className="flex items-start">
                <Lock className="text-accent mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <span>Staking rewards from transaction fees</span>
              </li>
              <li className="flex items-start">
                <Scale className="text-accent mr-3 mt-1 h-5 w-5 flex-shrink-0" />
                <span>Balanced reward distribution for various activities</span>
              </li>
            </ul>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-[#012F30]/50 rounded-xl p-6 h-full">
            <h3 className="text-xl font-heading font-semibold mb-6">Token Distribution</h3>
            
            <div className="relative h-64 mb-8 flex items-center justify-center">
              <div className="w-48 h-48 rounded-full border-8 border-[#045E54]/30 relative">
                {tokenDistribution.map((item, i) => {
                  const rotation = i * (360 / tokenDistribution.length);
                  const skew = 360 / tokenDistribution.length;
                  
                  return (
                    <div 
                      key={i}
                      className={`absolute inset-0 ${item.color}`}
                      style={{ 
                        clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((rotation + skew) * Math.PI / 180)}% ${50 + 50 * Math.sin((rotation + skew) * Math.PI / 180)}%)`,
                        transform: `rotate(${rotation}deg)`
                      }}
                    />
                  );
                })}
                <div className="absolute inset-[15%] rounded-full bg-[#012F30]" />
              </div>
            </div>
            
            <div className="space-y-4">
              {tokenDistribution.map((item, i) => (
                <div key={i} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className={`w-3 h-3 rounded-full ${item.color} mr-2`}></div>
                    <span>{item.name}</span>
                  </div>
                  <span className="font-semibold">{item.percentage}%</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Tokenomics;
