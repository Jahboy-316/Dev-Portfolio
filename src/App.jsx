import NavBar from "./assets/components/NavBar";
import HeroSection from "./assets/components/HeroSection";
import ClientPortfolio from "./assets/components/ClientPortfolio";
import Works from "./assets/components/Works";
import PersonalInsight from "./assets/components/PersonalInsight";
import OutroContact from "./assets/components/OutroContact";

function App() {
  return (
    <div className="min-h-screen bg-[#FFFCF0] text-[#16140E] selection:bg-[#F3B44A] selection:text-[#16140E]">
      {/* Sticky Top Navigation */}
      <NavBar />

      {/* Main Content Sections */}
      <main>
        {/* FIG. 001 — Hero Section with Pleurat 2-column layout & Interactive Marquee */}
        <HeroSection />

        {/* FIG. 002 — Brands Worked With (Maison Éclat, Fit Me, etc.) in Ledger Cards */}
        <ClientPortfolio />

        {/* FIG. 003 — Tools Used (Figma, React 19, Tailwind, Motion, Claude, Cursor) */}
        <Works />

        {/* FIG. 004 — Personal Insight (Portrait frame, education, location, 3-pillar approach) */}
        <PersonalInsight />
      </main>

      {/* FIG. 005 — Outro & Contact */}
      <OutroContact />
    </div>
  );
}

export default App;
