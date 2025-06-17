import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Gameplay from '@/components/sections/Gameplay';
import Tokenomics from '@/components/sections/Tokenomics';
import Roadmap from '@/components/sections/Roadmap';
import Whitepaper from '@/components/sections/Whitepaper';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Home = () => {
  useEffect(() => {
    // Set page title and meta description
    document.title = 'SlitherX - Web3 PvP Survival Game';
    
    // Add meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'SlitherX is a Web3 PvP survival game featuring evolving snake NFTs, token burning mechanics, and DAO governance. Control your snake to defeat opponents and grow stronger.');
    
    // Add Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'SlitherX - Web3 PvP Survival Game' },
      { property: 'og:description', content: 'A Web3 PvP survival game where you control evolving snakes, defeat opponents, and grow stronger.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: window.location.href }
    ];
    
    ogTags.forEach(tag => {
      let ogTag = document.querySelector(`meta[property="${tag.property}"]`);
      if (!ogTag) {
        ogTag = document.createElement('meta');
        ogTag.setAttribute('property', tag.property);
        document.head.appendChild(ogTag);
      }
      ogTag.setAttribute('content', tag.content);
    });
    
    // Load Font Awesome
    const fontAwesome = document.createElement('link');
    fontAwesome.rel = 'stylesheet';
    fontAwesome.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
    document.head.appendChild(fontAwesome);
    
    return () => {
      // Clean up on unmount if needed
      document.head.removeChild(fontAwesome);
    };
  }, []);

  return (
    <div className="min-h-screen font-sans">
      <Navbar />
      <Hero />
      <About />
      <Gameplay />
      <Tokenomics />
      <Roadmap />
      <Whitepaper />
      <Footer />
      <ScrollToTop />
    </div>
  );
};

export default Home;
