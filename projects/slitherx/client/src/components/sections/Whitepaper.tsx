import Section from '@/components/Section';
import { FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { FaDiscord, FaTelegram, FaTwitter, FaFacebook, FaMedium } from 'react-icons/fa';

const Whitepaper = () => {
  const socialLinks = [
    { icon: <FaDiscord className="text-2xl" />, href: "#", label: "Discord" },
    { icon: <FaTelegram className="text-2xl" />, href: "#", label: "Telegram" },
    { icon: <FaTwitter className="text-2xl" />, href: "#", label: "Twitter" },
    { icon: <FaFacebook className="text-2xl" />, href: "https://facebook.com/blog.devpros", label: "Facebook" },
    { icon: <FaMedium className="text-2xl" />, href: "#", label: "Medium" }
  ];

  return (
    <Section 
      id="whitepaper" 
      title="Whitepaper" 
      accentWord="paper"
      bubbleMessage="Read the full whitepaper now to understand how SlitherX will revolutionize gaming!"
      mascotPosition="right"
    >
      <div className="text-center max-w-3xl mx-auto">
        <motion.p 
          className="text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Our comprehensive whitepaper provides detailed information about the SlitherX ecosystem, tokenomics, gameplay mechanics, and future development plans. Available in both English and Vietnamese.
        </motion.p>
        
        <motion.div 
          className="flex flex-col md:flex-row gap-6 justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <a 
            href="https://docs.google.com/document/d/18oblAiShl5DBcObbR95GH4fusFbZQbUphFPlwXKWJcg/edit?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white py-4 px-8 rounded-xl flex items-center justify-center hover:from-blue-600 hover:to-blue-800 transition-all shadow-lg"
          >
            <FileText className="mr-3 h-5 w-5" />
            <span className="font-heading font-semibold">Read Whitepaper (EN)</span>
          </a>
          
          <a 
            href="https://docs.google.com/document/d/1WqV2YHwEGSXswWF_XfkdsdjBCL-xqWLaxAA2eI7216s/edit?usp=sharing" 
            target="_blank" 
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-red-500 to-red-700 text-white py-4 px-8 rounded-xl flex items-center justify-center hover:from-red-600 hover:to-red-800 transition-all shadow-lg"
          >
            <FileText className="mr-3 h-5 w-5" />
            <span className="font-heading font-semibold">Read Whitepaper (VI)</span>
          </a>
        </motion.div>
        
        <motion.div 
          className="mt-12 pt-12 border-t border-[#0A6D6E]/30"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-2xl font-heading font-semibold mb-6">Join Our Community</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a 
                key={index}
                href={social.href} 
                className="bg-[#0A6D6E]/20 hover:bg-[#0A6D6E]/40 transition-all p-4 rounded-full"
                aria-label={social.label}
                target="_blank" 
                rel="noopener noreferrer"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default Whitepaper;
