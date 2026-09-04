import { useState, useEffect } from "react";
import { portfolioData } from "../../data/portfolioData";
import { motion } from "framer-motion";
import { 
  GraduationCap, 
  MapPin, 
  Compass, 
  CheckCircle2, 
  Camera 
} from "lucide-react";

export default function PersonalInsight() {
  const { personalInsight } = portfolioData;
  const [localTime, setLocalTime] = useState("");
  const [activePillar, setActivePillar] = useState(0);

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const timeStr = now.toLocaleTimeString("en-US", {
          timeZone: "Africa/Lagos",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: true
        });
        setLocalTime(timeStr);
      } catch {
        setLocalTime("12:00:00 PM");
      }
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section
      id="insight"
      className="relative py-20 md:py-28 border-b border-[#16140E]/10 bg-[#FFFCF0] ruled-bg"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#16140E]/10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#854D0E] font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F3B44A]"></span>
            {personalInsight.badge}
          </span>
          <span className="font-mono text-[11px] text-[#8B8577] uppercase tracking-wider">
            CONTEXT · EDUCATION · PHILOSOPHY
          </span>
        </div>

        {/* Section Heading & Subheading */}
        <div className="max-w-3xl mb-14">
          <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-[#16140E] leading-[1.12]">
            {personalInsight.heading}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#57534A]">
            {personalInsight.subheading}
          </p>
        </div>

        {/* Main Grid: Left Column (Portrait & Metadata) & Right Column (Approach & Philosophy) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          
          {/* ============================================================= */}
          {/* LEFT: Technical Viewfinder Frame + Education & Location Specs */}
          {/* ============================================================= */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-6"
          >
            {/* Viewfinder Image Frame */}
            <div className="relative rounded-2xl overflow-hidden border-2 border-[#F3B44A] bg-[#FBF7E6] shadow-sm caliper-box group">
              
              {/* Technical Viewfinder Overlays */}
              <div className="absolute top-3 left-3 z-20 flex items-center gap-2 font-mono text-[10px] text-white/95 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded-md">
                <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                <span>REC ● 60FPS</span>
              </div>

              <div className="absolute top-3 right-3 z-20 font-mono text-[10px] text-[#16140E] font-bold bg-[#F3B44A] px-2.5 py-1 rounded-md border border-[#C77E0A]/40">
                {personalInsight.image.tag}
              </div>

              {/* Designer Image */}
              <div className="aspect-[4/4.5] w-full overflow-hidden bg-gradient-to-b from-[#FBF7E6] to-[#EFE9D2] relative">
                <img
                  src={personalInsight.image.src}
                  alt={personalInsight.image.alt}
                  onError={(e) => {
                    // Graceful fallback if image is not present
                    e.target.style.display = "none";
                  }}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-102"
                />

                {/* Fallback art if image is missing */}
                <div className="absolute inset-0 -z-10 flex flex-col items-center justify-center p-6 text-center text-[#16140E] bg-[#FBF7E6]">
                  <Camera className="w-12 h-12 text-[#C77E0A] mb-3" />
                  <span className="font-mono text-xs font-semibold">
                    PORTRAIT PLACEHOLDER
                  </span>
                  <span className="text-[11px] text-[#57534A] mt-1 max-w-xs">
                    Place your photo at /public/images/profile.png or update in portfolioData.js
                  </span>
                </div>
              </div>

              {/* Bottom Frame Caption */}
              <div className="p-4 bg-white/95 backdrop-blur-xs border-t border-[#16140E]/10 flex items-center justify-between font-mono text-xs text-[#16140E]">
                <span className="font-medium">{personalInsight.image.caption}</span>
                <span className="text-[#854D0E] font-semibold">{personalInsight.location.coordinates}</span>
              </div>
            </div>

            {/* Quick Technical Specs: Location & Education */}
            <div className="bg-white border border-[#16140E]/10 rounded-2xl p-6 shadow-xs flex flex-col gap-5 caliper-box">
              
              {/* Physical Location Card */}
              <div className="flex items-start gap-4 pb-5 border-b border-[#16140E]/5">
                <div className="w-10 h-10 rounded-xl bg-[#FBF7E6] border border-[#F3B44A]/50 flex items-center justify-center shrink-0 text-[#854D0E]">
                  <MapPin className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#854D0E] font-bold">
                      CURRENT LOCATION
                    </span>
                    <span className="font-mono text-[11px] text-emerald-700 flex items-center gap-1 font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping"></span>
                      {localTime || "LOCAL TIME"}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-[#16140E] mt-0.5">
                    {personalInsight.location.city}, {personalInsight.location.country}
                  </h4>
                  <p className="text-xs text-[#57534A] mt-1 leading-relaxed">
                    {personalInsight.location.note}
                  </p>
                </div>
              </div>

              {/* Formal Education Card */}
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#FBF7E6] border border-[#F3B44A]/50 flex items-center justify-center shrink-0 text-[#854D0E]">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[11px] uppercase tracking-wider text-[#854D0E] font-bold">
                      ACADEMIC FOUNDATION
                    </span>
                    <span className="font-mono text-[11px] text-[#8B8577] font-medium">
                      {personalInsight.education.year}
                    </span>
                  </div>
                  <h4 className="text-base font-semibold text-[#16140E] mt-0.5">
                    {personalInsight.education.degree}
                  </h4>
                  <span className="font-mono text-xs text-[#854D0E] font-semibold block mt-0.5">
                    {personalInsight.education.institution} · {personalInsight.education.honors}
                  </span>
                  <p className="text-xs text-[#57534A] mt-1.5 leading-relaxed">
                    {personalInsight.education.summary}
                  </p>
                </div>
              </div>

            </div>
          </motion.div>

          {/* ============================================================= */}
          {/* RIGHT: How I Approach My Work (3 Core Pillars & Mental Models) */}
          {/* ============================================================= */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            <div className="bg-white border border-[#16140E]/10 rounded-2xl p-6 sm:p-8 shadow-xs caliper-box">
              
              {/* Header */}
              <div className="flex items-center gap-2.5 pb-4 mb-6 border-b border-[#16140E]/5">
                <Compass className="w-5 h-5 text-[#C77E0A]" />
                <h3 className="font-mono text-xs uppercase tracking-widest text-[#854D0E] font-bold">
                  METHODOLOGY — HOW I APPROACH MY WORK
                </h3>
              </div>

              <p className="text-base sm:text-lg text-[#16140E] font-medium leading-relaxed mb-8">
                Great products are not born from haphazard styling. They are engineered through rigorous architectural foundations, deliberate kinetic feedback, and obsessive attention to real human friction.
              </p>

              {/* The 3 Pillars */}
              <div className="space-y-4">
                {personalInsight.approach.map((pillar, idx) => (
                  <div
                    key={pillar.number}
                    onClick={() => setActivePillar(idx)}
                    className={`p-5 sm:p-6 rounded-xl border transition-all cursor-pointer ${
                      activePillar === idx
                        ? "bg-[#FBF7E6] border-[#F3B44A] shadow-xs"
                        : "bg-white border-[#16140E]/10 hover:border-[#F3B44A] hover:bg-[#FBF7E6]/40"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span className="font-mono text-xs font-bold px-2.5 py-1 rounded bg-[#FEF3C7] text-[#854D0E] border border-[#FDE68A] shrink-0">
                        {pillar.number}
                      </span>
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                          <h4 className="text-lg font-semibold text-[#16140E]">
                            {pillar.title}
                          </h4>
                          <span className="font-mono text-[11px] text-[#854D0E] font-semibold">
                            {pillar.tagline}
                          </span>
                        </div>
                        <p className="text-sm text-[#57534A] leading-relaxed mt-2">
                          {pillar.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Bottom Assurance Note */}
              <div className="mt-8 pt-6 border-t border-[#16140E]/5 flex items-center justify-between text-xs font-mono text-[#854D0E]">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>MODULAR DESIGN TOKENS</span>
                </span>
                <span className="font-bold">ZERO DRIFT FROM FIGMA TO CODE</span>
              </div>

            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
