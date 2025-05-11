import { FacebookIcon, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 bg-[#012F30]/80 backdrop-blur-sm">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <h3 className="text-2xl font-heading font-bold mb-4">
              <span className="text-accent">Slither</span>X
            </h3>
            <p className="mb-4 text-accent-foreground/80">
              A Web3 PvP survival game with evolving snake NFTs, token burning mechanics, and DAO governance.
            </p>
            <div className="mt-4">
              <p>Developer: DevPros</p>
              <p className="flex items-center">
                <Mail className="h-4 w-4 mr-2" /> 
                <a href="mailto:work.devpros@gmail.com" className="text-accent hover:text-accent-foreground transition-colors">
                  work.devpros@gmail.com
                </a>
              </p>
              <p className="flex items-center">
                <FacebookIcon className="h-4 w-4 mr-2" />
                <a href="https://facebook.com/blog.devpros" className="text-accent hover:text-accent-foreground transition-colors">
                  facebook.com/blog.devpros
                </a>
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-accent-foreground/80 hover:text-accent transition-colors">About</a></li>
              <li><a href="#gameplay" className="text-accent-foreground/80 hover:text-accent transition-colors">Gameplay</a></li>
              <li><a href="#tokenomics" className="text-accent-foreground/80 hover:text-accent transition-colors">Tokenomics</a></li>
              <li><a href="#roadmap" className="text-accent-foreground/80 hover:text-accent transition-colors">Roadmap</a></li>
              <li><a href="#whitepaper" className="text-accent-foreground/80 hover:text-accent transition-colors">Whitepaper</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-heading font-semibold mb-4">Newsletter</h3>
            <p className="mb-4 text-accent-foreground/80">
              Subscribe to our newsletter for the latest updates and announcements.
            </p>
            <form className="mt-4">
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  className="bg-[#012F30]/80 border border-[#0A6D6E]/30 rounded-l-lg p-3 w-full focus:outline-none focus:border-accent text-accent-foreground"
                />
                <button 
                  type="submit" 
                  className="bg-accent hover:bg-accent/80 text-white px-4 rounded-r-lg transition-colors"
                  aria-label="Subscribe"
                >
                  <Mail className="h-5 w-5" />
                </button>
              </div>
            </form>
          </div>
        </div>
        
        <div className="mt-10 pt-6 border-t border-[#0A6D6E]/20 text-center text-accent-foreground/60">
          <p>&copy; {new Date().getFullYear()} SlitherX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
