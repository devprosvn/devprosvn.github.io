import { useState, useEffect } from 'react';
import { Beer, XIcon } from "lucide-react";
import { SectionData } from '@/lib/types';

const sections: SectionData[] = [
  { id: "about", title: "About", description: "" },
  { id: "gameplay", title: "Gameplay", description: "" },
  { id: "tokenomics", title: "Tokenomics", description: "" },
  { id: "roadmap", title: "Roadmap", description: "" },
  { id: "whitepaper", title: "Whitepaper", description: "" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 bg-[#012F30]/90' : 'py-3 bg-[#012F30]/80'
      } backdrop-blur-sm`}
    >
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-heading font-bold text-white">
            <span className="text-accent">Slither</span>X
          </h1>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex space-x-6">
          {sections.map((section) => (
            <a 
              key={section.id}
              href={`#${section.id}`} 
              className="text-accent-foreground hover:text-accent transition-colors duration-200"
            >
              {section.title}
            </a>
          ))}
        </div>
        
        {/* Mobile Navigation Toggle */}
        <div className="md:hidden">
          <button 
            onClick={toggleMenu}
            className="text-accent-foreground hover:text-accent transition-colors duration-200"
            aria-label="Toggle menu"
          >
            {isOpen ? <XIcon className="h-6 w-6" /> : <Beer className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <div className={`md:hidden bg-[#012F30]/95 backdrop-blur-md transition-all duration-300 ${
        isOpen ? 'max-h-screen py-3' : 'max-h-0 overflow-hidden py-0'
      }`}>
        <div className="container mx-auto px-4 flex flex-col space-y-4">
          {sections.map((section) => (
            <a 
              key={section.id}
              href={`#${section.id}`} 
              className="text-accent-foreground hover:text-accent transition-colors duration-200"
              onClick={closeMenu}
            >
              {section.title}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
