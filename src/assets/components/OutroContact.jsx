import { useState } from "react";
import { portfolioData } from "../../data/portfolioData";
import { Copy, Check, ArrowUpRight, Mail } from "lucide-react";

export default function OutroContact() {
  const { contact, personal } = portfolioData;
  const [copied, setCopied] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contact.ctaEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <footer
      id="contact"
      className="relative pt-20 pb-16 md:pt-28 md:pb-20 border-t border-[#16140E]/10 bg-[#FFFCF0] ruled-bg"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        
        {/* Editorial Section Header */}
        <div className="flex items-center justify-between mb-8 pb-3 border-b border-[#16140E]/10">
          <span className="font-mono text-xs uppercase tracking-widest text-[#854D0E] font-semibold flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#F3B44A]"></span>
            {contact.badge}
          </span>
          <span className="font-mono text-[11px] text-[#8B8577] uppercase tracking-wider">
            {contact.availabilityText}
          </span>
        </div>

        {/* Large Editorial Sign-off Box */}
        <div className="bg-white border-2 border-[#16140E]/15 rounded-3xl p-8 sm:p-12 lg:p-16 mb-16 shadow-xs caliper-box relative overflow-hidden">
          
          {/* Subtle warm amber background highlight */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-amber-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <div className="lg:col-span-8">
              <span className="font-mono text-xs text-[#854D0E] font-bold uppercase tracking-wider block mb-3">
                OPEN FOR COLLABORATION
              </span>
              <h2 className="text-4xl sm:text-6xl font-medium tracking-tight text-[#16140E] leading-[1.08]">
                Let’s build{" "}
                <span className="italic font-serif font-light text-[#C77E0A]">
                  something
                </span>{" "}
                remarkable.
              </h2>
              <p className="mt-5 text-base sm:text-lg text-[#57534A] max-w-xl leading-relaxed">
                {contact.description}
              </p>
            </div>

            {/* CTAs */}
            <div className="lg:col-span-4 flex flex-col gap-4">
              <button
                onClick={handleCopyEmail}
                className="group w-full py-4 px-6 rounded-full bg-[#F3B44A] hover:bg-[#F9CB80] text-[#16140E] font-bold text-sm transition-all shadow-xs border border-[#C77E0A]/40 flex items-center justify-center gap-3 cursor-pointer active:scale-98"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5 text-emerald-800" />
                    <span>Email Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5 text-[#854D0E] transition-transform group-hover:scale-110" />
                    <span>Copy: {contact.ctaEmail}</span>
                  </>
                )}
              </button>

              <a
                href={`mailto:${contact.ctaEmail}`}
                className="w-full py-4 px-6 rounded-full bg-white hover:bg-[#FBF7E6] text-[#16140E] border border-[#16140E]/15 font-medium text-sm transition-all flex items-center justify-center gap-2 hover:border-[#F3B44A] shadow-2xs active:scale-98"
              >
                <Mail className="w-4 h-4 text-[#854D0E]" />
                <span>Open Mail Client</span>
                <ArrowUpRight className="w-4 h-4 text-[#C77E0A]" />
              </a>

              <div className="text-center font-mono text-[11px] text-[#8B8577] pt-1">
                {contact.responseTime}
              </div>
            </div>

          </div>

        </div>

        {/* Footer Navigation & Social Links */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 border-t border-[#16140E]/10">
          
          <div className="flex flex-col sm:flex-row items-center gap-3 text-xs font-mono text-[#57534A]">
            <span className="font-bold text-[#16140E]">{personal.name}</span>
            <span className="hidden sm:inline">•</span>
            <span>{personal.role}</span>
            <span className="hidden sm:inline">•</span>
            <span>{personal.location}</span>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-mono">
            {personal.socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#57534A] hover:text-[#C77E0A] font-medium transition-colors flex items-center gap-1"
              >
                <span>{social.name}</span>
                <ArrowUpRight className="w-3 h-3 opacity-60" />
              </a>
            ))}
          </div>

        </div>

        {/* Bottom Colophon */}
        <div className="mt-8 text-center md:text-left text-[11px] font-mono text-[#8B8577]">
          © {new Date().getFullYear()} {personal.name}
          <span className="text-[#854D0E] font-bold"></span>. Built with React 19, Tailwind CSS & Framer Motion.
        </div>

      </div>
    </footer>
  );
}
