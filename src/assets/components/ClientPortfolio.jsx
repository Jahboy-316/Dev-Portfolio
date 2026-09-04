import { useState } from "react";
import { portfolioData } from "../../data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

export default function ClientPortfolio() {
  const { workedWith } = portfolioData;
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredClients =
    selectedCategory === "All"
      ? workedWith.clients
      : workedWith.clients.filter(
          (c) => c.category.toLowerCase() === selectedCategory.toLowerCase()
        );

  return (
    <section
      id="worked-with"
      className="relative py-20 md:py-28 border-b border-[#16140E]/10 bg-[#FFFCF0] ruled-bg"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#16140E]/10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#854D0E] font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F3B44A]"></span>
            {workedWith.badge}
          </span>
          <span className="font-mono text-[11px] text-[#8B8577] uppercase tracking-wider">
            {workedWith.clients.length} SELECTED COLLABORATIONS
          </span>
        </div>

        {/* Section Heading & Subheading */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-8">
            <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#16140E] leading-[1.12]">
              {workedWith.heading}
            </h2>
            <p className="mt-4 text-base sm:text-lg text-[#57534A] max-w-2xl">
              {workedWith.subheading}
            </p>
          </div>

          {/* Filter Pills */}
          <div className="lg:col-span-4 flex flex-wrap gap-1.5 justify-start lg:justify-end">
            {workedWith.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium font-mono transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#F3B44A] text-[#16140E] border border-[#C77E0A]/40 font-semibold shadow-2xs"
                    : "bg-white/80 text-[#57534A] border border-[#16140E]/10 hover:border-[#F3B44A] hover:bg-[#FBF7E6]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* The Editorial Ledger Board (Modeled directly after Pleurat's sv-board / sv-card) */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredClients.map((client, index) => (
              <motion.article
                key={client.id}
                layout
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.45, delay: index * 0.05 }}
                className="group relative bg-white rounded-2xl border border-[#16140E]/10 p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 hover:border-[#F3B44A] hover:shadow-lg hover:shadow-amber-500/10 hover:-translate-y-1 caliper-box"
              >
                {/* Card Top: Index, Category Badge, and Year */}
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-[#16140E]/5">
                    <span className="font-mono text-xs font-bold px-2 py-0.5 rounded bg-[#FBF7E6] text-[#854D0E] border border-[#F3B44A]/40">
                      {client.id}
                    </span>
                    <span className="font-mono text-[11px] text-[#8B8577] uppercase tracking-wider">
                      {client.year}
                    </span>
                  </div>

                  {/* Brand Name & Role */}
                  <div className="mb-3">
                    <h3 className="text-2xl font-medium tracking-tight text-[#16140E] group-hover:text-[#B45309] transition-colors flex items-center justify-between">
                      <span>{client.name}</span>
                      <ArrowUpRight className="w-5 h-5 text-[#F3B44A] opacity-0 group-hover:opacity-100 transition-all -translate-x-1 group-hover:translate-x-0" />
                    </h3>
                    <div className="inline-block mt-1.5 px-2.5 py-0.5 rounded-full bg-[#FEF3C7] text-[#854D0E] font-mono text-[11px] font-medium border border-[#FDE68A]/60">
                      {client.role}
                    </div>
                  </div>

                  {/* Narrative Impact Note */}
                  <p className="text-sm text-[#57534A] leading-relaxed mt-4">
                    {client.note}
                  </p>
                </div>

                {/* Card Footer: Tags & Key Metric */}
                <div className="pt-6 mt-6 border-t border-[#16140E]/5">
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {client.tags.map((tag, tIdx) => (
                      <span
                        key={tIdx}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#FBF7E6] text-[#57534A] border border-[#16140E]/10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {client.metric && (
                    <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-emerald-700 pt-1">
                      <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
                      <span>{client.metric}</span>
                    </div>
                  )}
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Subtle Technical Footer Legend */}
        <div className="mt-12 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-[#8B8577] pt-4 border-t border-[#16140E]/10">
          <span>ALL WORK UNDER NDA OR PRODUCTION LAUNCH</span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#F3B44A]"></span>
            ALL RIGHTS RESERVED
          </span>
        </div>

      </div>
    </section>
  );
}