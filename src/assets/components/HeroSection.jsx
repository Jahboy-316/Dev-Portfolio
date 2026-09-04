import { useState } from "react";
import { portfolioData } from "../../data/portfolioData";
import { ArrowUpRight, MoveRight } from "lucide-react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const { hero, personal } = portfolioData;
  const [activeTickerIndex, setActiveTickerIndex] = useState(0);
  const [tickerGreeting, setTickerGreeting] = useState(false);

  const handleTickerClick = (index) => {
    setActiveTickerIndex(index);
    setTickerGreeting(true);
    setTimeout(() => setTickerGreeting(false), 2000);
  };

  return (
    <section
      id="top"
      className="relative pt-32 pb-16 md:pt-40 md:pb-24 border-b border-[#16140E]/10 overflow-hidden ruled-bg"
    >
      {/* Background radial accent glow in warm amber / gold */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-180 h-112.5 bg-linear-to-tr from-amber-200/40 via-yellow-100/30 to-amber-50/10 blur-[130px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Top Technical Badge */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#16140E]/10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#854D0E] font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F3B44A]"></span>
            {hero.badge}
          </span>
          <span className="font-mono text-[11px] text-[#8B8577] hidden sm:inline-block uppercase tracking-wider">
            VERSION 4.2 · REACT 19 · AMBER EDITION
          </span>
        </div>

        {/* Hero Main Grid Layout (Pleurat 2-column editorial structure) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          
          {/* Left Large Display Headline */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 flex flex-col"
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-medium tracking-tight text-[#16140E] leading-[1.06]">
              {hero.titleLead}{" "}
              <span className="italic font-serif font-light text-[#C77E0A] ">
                {hero.titleHighlight}
              </span>{" "}
              {hero.titleTail}
            </h1>
          </motion.div>

          {/* Right Column: Lead Summary & Dual CTA */}
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 flex flex-col justify-between pt-2"
          >
            <p className="text-lg sm:text-xl text-[#57534A] leading-relaxed mb-8">
              {hero.leadParagraph}
            </p>

            {/* Action Buttons (Styled after Pleurat's .sv-btn--amber) */}
            <div className="flex flex-wrap items-center gap-4">
              <a
                href={hero.ctaPrimary.href}
                className="group inline-flex items-center gap-2.5 px-6 py-3.5 bg-[#F3B44A] hover:bg-[#F9CB80] text-[#16140E] font-semibold text-sm transition-all shadow-xs border border-[#C77E0A]/30 active:scale-95 cursor-pointer"
              >
                <span>{hero.ctaPrimary.label}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#16140E]" />
              </a>

              <a
                href={hero.ctaSecondary.href}
                className="group inline-flex items-center gap-2 px-6 py-3.5 bg-white/80 hover:bg-white text-[#16140E] border border-[#16140E]/15 font-medium text-sm transition-all hover:border-[#16140E] active:scale-95 shadow-2xs"
              >
                <span>{hero.ctaSecondary.label}</span>
                <MoveRight className="w-4 h-4 text-[#C77E0A] transition-transform group-hover:translate-x-1" />
              </a>
            </div>

            {/* Quick Stats Pill Row */}
            <div className="grid grid-cols-3 gap-4 pt-10 mt-10 border-t border-[#16140E]/10">
              {personal.stats.slice(0, 3).map((stat, idx) => (
                <div key={idx} className="flex flex-col">
                  <span className="font-mono text-2xl font-semibold text-[#16140E]">
                    {stat.value}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider text-[#8B8577]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* ================================================================= */}
        {/* INTERACTIVE TEAMS & BRANDS TICKER (Pleurat Street/Track Inspired) */}
        {/* ================================================================= */}
        <div className="mt-16 md:mt-20 pt-8 border-t border-[#16140E]/10">
          
          {/* Ticker Header Metadata */}
          <div className="flex items-center justify-between mb-4 text-xs font-mono text-[#57534A]">
            <div className="flex items-center gap-3">
              <span className="px-2 py-0.5 rounded-md bg-[#FBF7E6] text-[#854D0E] font-semibold border border-[#F3B44A]/40">
                INDEX 0{activeTickerIndex + 1}
              </span>
              <span className="font-semibold text-[#16140E]">
                {hero.tickerItems[activeTickerIndex].name}
              </span>
              <span className="text-[#8B8577] hidden sm:inline">
                — {hero.tickerItems[activeTickerIndex].role}
              </span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-[#854D0E]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#F3B44A]"></span>
              </span>
              <span>CLICK CARD TO INSPECT</span>
            </div>
          </div>

          {/* Interactive Marquee Carousel */}
          <div className="relative overflow-hidden bg-white/80 backdrop-blur-xs border border-[#16140E]/15 rounded-2xl p-4 sm:p-6 shadow-xs caliper-box">
            
            {/* Popover notification when clicking */}
            {tickerGreeting && (
              <div className="absolute top-2 right-4 z-20 bg-[#F3B44A] text-[#16140E] font-mono text-xs px-3 py-1.5 rounded-full shadow-md border border-[#C77E0A]/40 font-medium animate-bounce">
                Hi 👋 Viewing {hero.tickerItems[activeTickerIndex].name}
              </div>
            )}

            {/* Seamless continuous scrolling row */}
            <div className="flex w-max animate-marquee hover:[animation-play-state:paused]">
              
              {/* First loop of items */}
              <div className="flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
                {hero.tickerItems.map((brand, idx) => (
                  <button
                    key={`brand-1-${idx}`}
                    onClick={() => handleTickerClick(idx)}
                    className={`flex items-center gap-3.5 px-5 py-3 rounded-xl border transition-all cursor-pointer text-left ${
                      activeTickerIndex === idx
                        ? "bg-[#FBF7E6] border-[#F3B44A] shadow-xs scale-102"
                        : "bg-white/90 border-[#16140E]/10 hover:border-[#F3B44A] hover:bg-[#FBF7E6]/40"
                    }`}
                  >
                    <span className="w-8 h-8 rounded-lg bg-[#FAF7EE] border border-[#F3B44A]/40 flex items-center justify-center font-mono text-xs font-bold text-[#854D0E]">
                      0{idx + 1}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-semibold text-sm text-[#16140E]">
                        {brand.name}
                      </span>
                      <span className="font-mono text-[11px] text-[#854D0E]">
                        {brand.role}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

              {/* Duplicate loop for seamless infinite marquee */}
              <div className="flex items-center gap-4 sm:gap-6 pr-4 sm:pr-6">
                {hero.tickerItems.map((brand, idx) => (
                  <button
                    key={`brand-2-${idx}`}
                    onClick={() => handleTickerClick(idx)}
                    className={`flex items-center gap-3.5 px-5 py-3 rounded-xl border transition-all cursor-pointer text-left ${
                      activeTickerIndex === idx
                        ? "bg-[#FBF7E6] border-[#F3B44A] shadow-xs scale-102"
                        : "bg-white/90 border-[#16140E]/10 hover:border-[#F3B44A] hover:bg-[#FBF7E6]/40"
                    }`}
                  >
                    <span className="w-8 h-8 rounded-lg bg-[#FAF7EE] border border-[#F3B44A]/40 flex items-center justify-center font-mono text-xs font-bold text-[#854D0E]">
                      0{idx + 1}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-semibold text-sm text-[#16140E]">
                        {brand.name}
                      </span>
                      <span className="font-mono text-[11px] text-[#854D0E]">
                        {brand.role}
                      </span>
                    </div>
                  </button>
                ))}
              </div>

            </div>

            {/* Subtle gradient edges for fading out sides */}
            <div className="absolute top-0 bottom-0 left-0 w-12 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none" />
            <div className="absolute top-0 bottom-0 right-0 w-12 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none" />
          </div>

        </div>

      </div>
    </section>
  );
}