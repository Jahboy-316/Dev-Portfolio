import { useState } from "react";
import { portfolioData } from "../../data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, Boxes } from "lucide-react";
import { 
  SiFigma, 
  SiReact, 
  SiTailwindcss, 
  SiFramer, 
  SiTypescript, 
  SiNextdotjs, 
  SiAnthropic, 
  SiSupabase, 
  SiGithub 
} from "react-icons/si";

export default function Works() {
  const { tools } = portfolioData;
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredTools =
    activeCategory === "All"
      ? tools.items
      : tools.items.filter((t) => t.category === activeCategory);

  // Icon mapping helper
  const getToolIcon = (name) => {
    switch (name.toLowerCase()) {
      case "figma":
        return <SiFigma className="w-5 h-5 text-[#F24E1E]" />;
      case "react 19":
        return <SiReact className="w-5 h-5 text-[#61DAFB]" />;
      case "tailwind css":
        return <SiTailwindcss className="w-5 h-5 text-[#06B6D4]" />;
      case "framer motion":
        return <SiFramer className="w-5 h-5 text-[#0055FF]" />;
      case "typescript":
        return <SiTypescript className="w-5 h-5 text-[#3178C6]" />;
      case "next.js":
        return <SiNextdotjs className="w-5 h-5 text-[#16140E]" />;
      case "claude ai":
        return <SiAnthropic className="w-5 h-5 text-[#D97706]" />;
      case "cursor":
        return <Terminal className="w-5 h-5 text-[#854D0E]" />;
      case "supabase":
        return <SiSupabase className="w-5 h-5 text-[#3ECF8E]" />;
      case "git & github":
        return <SiGithub className="w-5 h-5 text-[#16140E]" />;
      default:
        return <Boxes className="w-5 h-5 text-[#854D0E]" />;
    }
  };

  return (
    <section
      id="tools"
      className="relative py-20 md:py-28 border-b border-[#16140E]/10 bg-white/70 backdrop-blur-xs ruled-bg"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#16140E]/10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#854D0E] font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F3B44A]"></span>
            {tools.badge}
          </span>
          <span className="font-mono text-[11px] text-[#8B8577] uppercase tracking-wider">
            PRODUCTION READY ECOSYSTEM
          </span>
        </div>

        {/* Section Heading & Category Filters */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#16140E] leading-[1.12]">
              {tools.heading}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#57534A] max-w-2xl">
              {tools.subheading}
            </p>
          </div>

          {/* Filter pills */}
          <div className="lg:col-span-4 flex flex-wrap gap-1.5 justify-start lg:justify-end">
            {tools.categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium font-mono transition-all cursor-pointer ${
                  activeCategory === category
                    ? "bg-[#F3B44A] text-[#16140E] border border-[#C77E0A]/40 font-semibold shadow-2xs"
                    : "bg-white text-[#57534A] border border-[#16140E]/10 hover:border-[#F3B44A] hover:bg-[#FBF7E6]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Tools Grid (Modeled directly on Pleurat's Console / Tools System) */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence>
            {filteredTools.map((tool, idx) => (
              <motion.div
                key={tool.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, delay: idx * 0.04 }}
                className="group relative bg-white border border-[#16140E]/10 rounded-2xl p-6 transition-all duration-300 hover:border-[#F3B44A] hover:shadow-md hover:shadow-amber-500/10 hover:-translate-y-0.5 caliper-box"
              >
                {/* Header: Icon, Name, and Proficiency Pill */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#FBF7E6] border border-[#F3B44A]/40 flex items-center justify-center group-hover:scale-105 transition-transform">
                      {getToolIcon(tool.name)}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-[#16140E] group-hover:text-[#B45309] transition-colors">
                        {tool.name}
                      </h3>
                      <span className="font-mono text-[11px] text-[#854D0E] block font-medium">
                        {tool.role}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-[#FEF3C7] text-[#854D0E] border border-[#FDE68A]">
                    {tool.experience}
                  </span>
                </div>

                {/* Description Note */}
                <p className="text-xs text-[#57534A] leading-relaxed mt-2 pt-3 border-t border-[#16140E]/5">
                  {tool.note}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* System Health / Philosophy Bar */}
        <div className="mt-12 bg-[#FBF7E6] border border-[#F3B44A]/40 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="w-3 h-3 rounded-full bg-[#F3B44A] animate-pulse"></span>
            <span className="font-mono text-xs uppercase tracking-wider text-[#854D0E] font-bold">
              PIPELINE INTEGRITY: 100% SYNCHRONIZED
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-6 font-mono text-xs text-[#57534A]">
            <span>• FIGMA VARIABLES</span>
            <span>• TYPE-SAFE TOKENS</span>
            <span>• 60FPS RAF MOTION</span>
            <span>• WCAG AA CONTRAST</span>
          </div>
        </div>

      </div>
    </section>
  );
}