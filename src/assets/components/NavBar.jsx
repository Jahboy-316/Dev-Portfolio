import { useState, useEffect } from "react";
import { portfolioData } from "../../data/portfolioData";
import { Menu, X, Check, Copy } from "lucide-react";

export default function NavBar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState("");

  const { personal } = portfolioData;

  // Track scroll position for subtle shadow/border change
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Live clock in user's timezone
  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeString = now.toLocaleTimeString("en-US", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true
        });
        setCurrentTime(timeString);
      } catch {
        setCurrentTime("12:00 PM");
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText(personal.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FFFCF0]/90 backdrop-blur-md border-b border-[#16140E]/10 shadow-xs py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        
        {/* Brand / Name & Tag */}
        <a href="#top" className="flex items-center gap-3 group">
          <span className="w-8 h-8 rounded-lg bg-[#F3B44A] border border-[#C77E0A]/40 text-[#16140E] flex items-center justify-center font-mono font-bold text-sm shadow-xs group-hover:scale-105 transition-transform">
            J
          </span>
          <div className="flex flex-col">
            <span className="font-semibold text-base tracking-tight text-[#16140E]">
              {personal.name}
            </span>
            <span className="font-mono text-[10px] text-[#854D0E] uppercase tracking-wider font-medium">
              {currentTime ? `JOS ${currentTime}` : personal.location}
            </span>
          </div>
        </a>

        {/* Center Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-white/80 backdrop-blur-sm border border-[#16140E]/10 rounded-full px-4 py-1.5 shadow-2xs">
          <a
            href="#worked-with"
            className="px-3.5 py-1 text-xs font-medium text-[#57534A] hover:text-[#16140E] hover:bg-[#FEF3C7] rounded-full transition-colors"
          >
            Worked With
          </a>
          <a
            href="#tools"
            className="px-3.5 py-1 text-xs font-medium text-[#57534A] hover:text-[#16140E] hover:bg-[#FEF3C7] rounded-full transition-colors"
          >
            Tools & Stack
          </a>
          <a
            href="#insight"
            className="px-3.5 py-1 text-xs font-medium text-[#57534A] hover:text-[#16140E] hover:bg-[#FEF3C7] rounded-full transition-colors"
          >
            Personal Insight
          </a>
          <a
            href="#contact"
            className="px-3.5 py-1 text-xs font-medium text-[#57534A] hover:text-[#16140E] hover:bg-[#FEF3C7] rounded-full transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right Action & Status */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Availability Pill */}
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FBF7E6] border border-[#F3B44A]/50 text-[11px] font-mono text-[#854D0E] font-medium">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>{personal.availability}</span>
          </div>

          {/* Quick Copy Email Button */}
          <button
            onClick={copyEmail}
            className="relative flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#16140E] text-[#FFFCF0] hover:bg-[#F3B44A] hover:text-[#16140E] transition-all text-xs font-medium shadow-xs active:scale-95 cursor-pointer"
            title="Click to copy email address"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-400" />
                <span className="text-emerald-300">Email Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5 text-[#F3B44A] group-hover:text-[#16140E]" />
                <span>Get in touch</span>
              </>
            )}
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-[#16140E] hover:bg-[#FEF3C7] transition-colors"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FFFCF0] border-b border-[#16140E]/10 px-6 py-6 flex flex-col gap-4 shadow-xl">
          <div className="flex items-center gap-2 pb-3 border-b border-[#16140E]/10 text-xs font-mono text-[#854D0E]">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            {personal.availability}
          </div>
          <a
            href="#worked-with"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#16140E] py-1 hover:text-[#C77E0A]"
          >
            Worked With
          </a>
          <a
            href="#tools"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#16140E] py-1 hover:text-[#C77E0A]"
          >
            Tools & Stack
          </a>
          <a
            href="#insight"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#16140E] py-1 hover:text-[#C77E0A]"
          >
            Personal Insight
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-base font-medium text-[#16140E] py-1 hover:text-[#C77E0A]"
          >
            Contact
          </a>
          <div className="pt-2">
            <button
              onClick={copyEmail}
              className="w-full py-2.5 rounded-full bg-[#F3B44A] text-[#16140E] font-medium text-sm flex items-center justify-center gap-2 border border-[#C77E0A]/40"
            >
              {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              {copied ? "Email Copied to Clipboard!" : "Copy Email"}
            </button>
          </div>
        </div>
      )}
    </header>
  );
}