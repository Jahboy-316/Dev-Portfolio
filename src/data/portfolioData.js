/**
 * =========================================================================
 * PORTFOLIO DATA CONFIGURATION
 * =========================================================================
 * This is the central source of truth for your portfolio.
 * You can edit your name, role, brands, tools, education, location, and bio
 * right here without touching JSX or styles.
 */

export const portfolioData = {
  // -----------------------------------------------------------------------
  // 1. PERSONAL INFORMATION
  // -----------------------------------------------------------------------
  personal: {
    name: "Jahdev",
    role: "Product Designer & Design Engineer",
    tagline: "Bridging systematic interface design with production-grade frontend engineering.",
    email: "jasonisthedev06@gmail.com",
    avatar: "/images/profile.png", // Placed in /public/images/profile.png
    location: "Jos, Nigeria",
    timezone: "WAT (UTC+1)",
    availability: "Available for Q2 / Q3 Projects",
    statusNote: "Open for contract, full-time & consulting roles",
    stats: [
      { value: "4+", label: "Years Crafting" },
      { value: "20+", label: "Products Shipped" },
      { value: "99.8%", label: "Client Satisfaction" },
      { value: "60fps", label: "Motion Standards" }
    ],
    socials: [
      { name: "GitHub", url: "https://github.com", handle: "github.com/jahdev" },
      { name: "LinkedIn", url: "https://linkedin.com", handle: "linkedin.com/in/jahdev" },
      { name: "X / Twitter", url: "https://x.com", handle: "@jahdev_ui" },
      { name: "Figma", url: "https://figma.com", handle: "@jahdev" },
      { name: "Email", url: "mailto:jahdev.design@gmail.com", handle: "jahdev.design@gmail.com" }
    ]
  },

  // -----------------------------------------------------------------------
  // 2. HERO SECTION
  // -----------------------------------------------------------------------
  hero: {
    badge: "FIG. 001 — DESIGN & INTERACTION",
    titleLead: "Web Developer &",
    titleHighlight: "Design Engineer",
    titleTail: "crafting tactile digital systems.",
    leadParagraph:
      "I partner with forward-thinking founders and ambitious product teams to turn complex ideas into refined, high-converting digital interfaces and scalable frontend architectures.",
    ctaPrimary: {
      label: "Start a project",
      href: "#contact"
    },
    ctaSecondary: {
      label: "Personal insight",
      href: "#insight"
    },
    // Interactive ticker marquee of teams & partners
    tickerItems: [
      { name: "Maison Éclat", role: "Luxury Fashion", status: "Active" },
      { name: "Fit Me", role: "Hospitality & Dining", status: "Shipped" },
      { name: "Aura Health", role: "Digital Wellness", status: "Active" },
      { name: "Nexus Studio", role: "Creative Tech", status: "Shipped" },
      { name: "Velox Mobility", role: "Transit & Telemetry", status: "Shipped" },
      { name: "Kanso Living", role: "Architecture & 3D", status: "Shipped" }
    ]
  },

  // -----------------------------------------------------------------------
  // 3. WORKED WITH SECTION (Modeled after Pleurat's Teams Ledger)
  // -----------------------------------------------------------------------
  workedWith: {
    badge: "FIG. 002 — CLIENT ROSTER",
    heading: "Brands & teams I've worked with",
    subheading:
      "Selected collaborations spanning high-end fashion e-commerce, modern culinary platforms, and venture-backed SaaS products.",
    categories: ["All", "Fashion", "Dining", "Wellness", "Tech", "Architecture"],
    clients: [
      {
        id: "A01",
        name: "Maison Éclat",
        category: "Fashion",
        role: "Brand & E-Commerce Interface",
        year: "2025",
        tags: ["Luxury E-Commerce", "Lookbook UI", "Micro-Interactions"],
        note: "A high-end Parisian fashion brand. Re-architected their digital flagship storefront, dynamic lookbook animations, and high-conversion checkout flows tailored for global fashion drops.",
        metric: "+42% Checkout Conversion"
      },
      {
        id: "A02",
        name: "Fit Me",
        category: "Dining",
        role: "Product Design & Web App",
        year: "2024 — 2025",
        tags: ["Table Reservation", "Interactive Menu", "Kitchen Telemetry"],
        note: "A contemporary culinary restaurant & nutritious meal subscription service. Designed an intuitive table booking system, digital interactive menu, and live pickup tracker.",
        metric: "12k+ Monthly Bookings"
      },
      {
        id: "A03",
        name: "Aura Health",
        category: "Wellness",
        role: "UX/UI & Design Systems",
        year: "2025",
        tags: ["Digital Health", "WCAG AA", "Design Tokens"],
        note: "AI-powered clinical mental wellness tracker. Developed accessible design tokens, calm user journeys, and compliant health data dashboards.",
        metric: "Zero-friction Onboarding"
      },
      {
        id: "A04",
        name: "Nexus Studio",
        category: "Tech",
        role: "Frontend & Motion Engineering",
        year: "2024",
        tags: ["Framer Motion", "Interactive Canvas", "Fluid UI"],
        note: "Interactive web showcase for a creative agency. Built silky 60fps page transitions, custom cursors, and responsive editorial layout systems.",
        metric: "Awwwards Site of the Day"
      },
      {
        id: "A05",
        name: "Velox Mobility",
        category: "Tech",
        role: "Mobile App & Telemetry UI",
        year: "2023 — 2024",
        tags: ["Smart Transit", "Fleet Management", "Realtime Maps"],
        note: "Urban electric micro-mobility platform. Designed rider navigation screens, battery health diagnostics, and enterprise fleet telemetry dashboards.",
        metric: "50k+ Active Riders"
      },
      {
        id: "A06",
        name: "Kanso Living",
        category: "Architecture",
        role: "Interface & 3D Showcase",
        year: "2023",
        tags: ["Minimalist Architecture", "3D Configurator", "Spatial UI"],
        note: "Scandinavian interior architecture brand. Designed minimal editorial lookbooks with interactive 3D spatial room configurators.",
        metric: "Featured in Minimalissimo"
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 4. TOOLS USED SECTION (Modeled after Pleurat's Console / Tools Grid)
  // -----------------------------------------------------------------------
  tools: {
    badge: "FIG. 003 — TOOLING & SYSTEM",
    heading: "The tools & stack I rely on",
    subheading:
      "A deliberate selection of modern design and development tools carefully configured for speed, precision, and uncompromised craft.",
    categories: ["All", "Design & Prototyping", "Frontend & Code", "AI & Workflow"],
    items: [
      {
        name: "Figma",
        category: "Design & Prototyping",
        role: "Design Systems & Prototyping",
        icon: "figma",
        experience: "Expert",
        note: "Variables, tokens, component variants, and interactive auto-layout specs for seamless dev handoffs."
      },
      {
        name: "React 19",
        category: "Frontend & Code",
        role: "Core Web Architecture",
        icon: "react",
        experience: "Advanced",
        note: "Modern component architecture, server actions, concurrent features, and modular state management."
      },
      {
        name: "Tailwind CSS",
        category: "Frontend & Code",
        role: "Utility-First Styling",
        icon: "tailwind",
        experience: "Expert",
        note: "Design token mapping, responsive layouts, custom utility layers, and fine-tuned CSS variables."
      },
      {
        name: "Framer Motion",
        category: "Frontend & Code",
        role: "Interactive Animation",
        icon: "motion",
        experience: "Advanced",
        note: "Fluid spring physics, gesture handling, layout transitions, and scroll-linked choreographies."
      },
      {
        name: "TypeScript",
        category: "Frontend & Code",
        role: "Type-Safe Development",
        icon: "typescript",
        experience: "Advanced",
        note: "Strict typing across component props, design system schemas, and API payload contracts."
      },
      {
        name: "Next.js",
        category: "Frontend & Code",
        role: "Production Framework",
        icon: "nextjs",
        experience: "Advanced",
        note: "SSR/SSG routing, performance budgets, edge rendering, and SEO-optimized web applications."
      },
      {
        name: "Claude AI",
        category: "AI & Workflow",
        role: "Thought Partner & Pair Programmer",
        icon: "claude",
        experience: "Daily Driver",
        note: "Prompt engineering, complex refactoring, algorithmic logic verification, and rapid ideation."
      },
      {
        name: "Cursor",
        category: "AI & Workflow",
        role: "AI-Augmented IDE",
        icon: "cursor",
        experience: "Daily Driver",
        note: "Context-aware coding, repository-wide transforms, and intelligent workflow automation."
      },
      {
        name: "Supabase",
        category: "Frontend & Code",
        role: "Backend & Database",
        icon: "supabase",
        experience: "Intermediate",
        note: "Postgres databases, authentication, real-time subscriptions, and serverless edge functions."
      },
      {
        name: "Git & GitHub",
        category: "AI & Workflow",
        role: "Version Control & CI/CD",
        icon: "github",
        experience: "Expert",
        note: "Branch workflows, automated linting, PR reviews, and automated deployment pipelines."
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 5. PERSONAL INSIGHT SECTION (Requested by User)
  // -----------------------------------------------------------------------
  personalInsight: {
    badge: "FIG. 004 — PERSONAL INSIGHT",
    heading: "Behind the screen: craft, context & philosophy",
    subheading:
      "A peek into my background, formal education, physical location, and the mental models guiding my design and code practice.",
    
    // Image placeholder - replace or point to your favorite portrait
    image: {
      src: "/images/profile.png",
      alt: "Jahdev - Product Designer & Design Engineer",
      caption: "PORTRAIT — STUDIO FILE REF #04",
      tag: "FIELD VERIFIED",
      note: "Place your own photo in /public/images/profile.png or update this URL."
    },

    // Education details
    education: {
      degree: "B.Sc. in Computer Engineering & Interactive Computing",
      institution: "Federal University of Technology, Minna",
      year: "2023 — Present",
      honors: "First Class Honors / Dean's List",
      summary:
        "Rigorous foundation in software engineering, algorithmic efficiency, data structures, and human-computer interaction (HCI). Grounded my belief that great design begins with understanding how the underlying machine operates."
    },

    // Current living location & time
    location: {
      city: "Jos",
      country: "Nigeria",
      region: "West Africa",
      timezone: "WAT (GMT+1)",
      coordinates: "6.5244° N, 3.3792° E",
      connectivity: "Ultra-fast Fiber (300Mbps+), Uninterrupted Backup Power",
      note: "Centrally positioned to collaborate across European, UK, and North American time zones."
    },

    // How I Approach My Work (3 Core Pillars)
    approach: [
      {
        number: "01",
        title: "Systems before individual screens",
        tagline: "Atomic cohesion from token to production.",
        description:
          "I view every product as an evolving ecosystem rather than disconnected screens. By defining typography, semantic colors, and component tokens upfront, teams can ship new features 3x faster without accruing UI debt."
      },
      {
        number: "02",
        title: "Motion as functional spatial clarity",
        tagline: "Physics-inspired, never gratuitous.",
        description:
          "Animations aren't cosmetic fluff—they convey causality, hierarchy, and physical presence. Every transition is tuned with deliberate spring dynamics, keeping 60fps smoothness while respecting user motion preferences."
      },
      {
        number: "03",
        title: "Empathy anchored in business impact",
        tagline: "Aesthetics must perform.",
        description:
          "Whether streamlining reservations for Fit Me or creating luxury lookbooks for Maison Éclat, my work pairs visual prestige with measurable conversion, speed, and accessibility (WCAG AA)."
      }
    ]
  },

  // -----------------------------------------------------------------------
  // 6. CONTACT & OUTRO SECTION
  // -----------------------------------------------------------------------
  contact: {
    badge: "FIG. 005 — GET IN TOUCH",
    title: "Let's build something remarkable.",
    description:
      "Whether you're looking to build a brand identity from scratch, reimagine an existing product, or construct an end-to-end design system, my inbox is open.",
    ctaEmail: "jasonisthedev06@gmail.com",
    responseTime: "Usually responds within 24 hours",
    availabilityText: "Currently booking new projects for Q2 & Q3"
  }
};
