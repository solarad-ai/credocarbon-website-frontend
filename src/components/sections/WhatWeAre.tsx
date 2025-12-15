// src/components/sections/WhatWeAre.tsx

// Illustration: Centralized Workspace - Hub with connected nodes
const WorkspaceIllustration = () => (
  <svg viewBox="0 0 180 140" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="hubGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#10b981" stopOpacity="0.3" />
        <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.1" />
      </linearGradient>
    </defs>

    {/* Connection lines */}
    <g stroke="#10b981" strokeWidth="1.5" strokeDasharray="4 3" opacity="0.5">
      <line x1="90" y1="70" x2="30" y2="30" />
      <line x1="90" y1="70" x2="150" y2="30" />
      <line x1="90" y1="70" x2="30" y2="110" />
      <line x1="90" y1="70" x2="150" y2="110" />
    </g>

    {/* Outer nodes */}
    <g>
      <circle cx="30" cy="30" r="16" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
      <rect x="22" y="26" width="16" height="10" rx="2" fill="#10b981" opacity="0.6" />

      <circle cx="150" cy="30" r="16" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
      <path d="M143 28h14M150 25v10" stroke="#10b981" strokeWidth="2" strokeLinecap="round" />

      <circle cx="30" cy="110" r="16" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
      <circle cx="30" cy="110" r="6" fill="#14b8a6" opacity="0.6" />

      <circle cx="150" cy="110" r="16" fill="#1e293b" stroke="#14b8a6" strokeWidth="2" />
      <path d="M144 106l4 4 8-8" stroke="#14b8a6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Central hub */}
    <circle cx="90" cy="70" r="32" fill="url(#hubGrad)" stroke="#10b981" strokeWidth="2.5" />
    <circle cx="90" cy="70" r="22" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" opacity="0.8" />
    <circle cx="90" cy="70" r="10" fill="#10b981" />

    {/* Orbital ring */}
    <ellipse cx="90" cy="70" rx="45" ry="18" fill="none" stroke="#10b981" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
  </svg>
);

// Illustration: Automated MRV - Gears with checkmarks
const AutomatedIllustration = () => (
  <svg viewBox="0 0 180 140" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="gearGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#14b8a6" />
        <stop offset="100%" stopColor="#0d9488" />
      </linearGradient>
    </defs>

    {/* Large gear */}
    <g transform="translate(45, 25)">
      <circle cx="45" cy="45" r="38" fill="#1e293b" stroke="url(#gearGrad)" strokeWidth="2" />
      <circle cx="45" cy="45" r="28" fill="none" stroke="#14b8a6" strokeWidth="1" opacity="0.4" />
      <circle cx="45" cy="45" r="12" fill="#14b8a6" opacity="0.3" />

      {/* Gear teeth */}
      <g fill="#14b8a6">
        <rect x="42" y="2" width="6" height="12" rx="2" />
        <rect x="42" y="76" width="6" height="12" rx="2" />
        <rect x="2" y="42" width="12" height="6" rx="2" />
        <rect x="76" y="42" width="12" height="6" rx="2" />
        <rect x="12" y="12" width="10" height="6" rx="2" transform="rotate(45 12 12)" />
        <rect x="68" y="12" width="10" height="6" rx="2" transform="rotate(-45 73 15)" />
        <rect x="12" y="72" width="10" height="6" rx="2" transform="rotate(-45 12 72)" />
        <rect x="72" y="72" width="10" height="6" rx="2" transform="rotate(45 72 72)" />
      </g>

      {/* Checkmark inside */}
      <path d="M35 45l7 7 14-14" stroke="#10b981" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </g>

    {/* Small gear */}
    <g transform="translate(115, 75)">
      <circle cx="22" cy="22" r="18" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
      <circle cx="22" cy="22" r="8" fill="#10b981" opacity="0.4" />
      <g fill="#10b981">
        <rect x="20" y="0" width="4" height="8" rx="1" />
        <rect x="20" y="36" width="4" height="8" rx="1" />
        <rect x="0" y="20" width="8" height="4" rx="1" />
        <rect x="36" y="20" width="8" height="4" rx="1" />
      </g>
    </g>

    {/* Flow arrows */}
    <g stroke="#14b8a6" strokeWidth="1.5" fill="none" opacity="0.6">
      <path d="M30 70 Q20 90 35 105" />
      <path d="M150 50 Q165 65 155 85" />
    </g>
  </svg>
);

// Illustration: Trading Platform - Globe with price chart
const TradingIllustration = () => (
  <svg viewBox="0 0 180 140" fill="none" className="w-full h-full">
    <defs>
      <linearGradient id="globeGrad2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#0891b2" stopOpacity="0.2" />
        <stop offset="100%" stopColor="#14b8a6" stopOpacity="0.1" />
      </linearGradient>
    </defs>

    {/* Globe */}
    <g transform="translate(20, 20)">
      <circle cx="50" cy="50" r="45" fill="url(#globeGrad2)" stroke="#0891b2" strokeWidth="2" />
      <ellipse cx="50" cy="50" rx="45" ry="18" fill="none" stroke="#0891b2" strokeWidth="1" opacity="0.4" />
      <ellipse cx="50" cy="50" rx="30" ry="45" fill="none" stroke="#0891b2" strokeWidth="1" opacity="0.4" />
      <line x1="5" y1="50" x2="95" y2="50" stroke="#0891b2" strokeWidth="1" opacity="0.3" />

      {/* Continents simplified */}
      <ellipse cx="40" cy="40" rx="12" ry="8" fill="#10b981" opacity="0.5" />
      <ellipse cx="60" cy="55" rx="10" ry="14" fill="#10b981" opacity="0.5" />
    </g>

    {/* Price chart */}
    <g transform="translate(95, 45)">
      <rect x="0" y="0" width="70" height="50" rx="4" fill="#1e293b" stroke="#0891b2" strokeWidth="1.5" />
      <path d="M10 40 L22 28 L34 35 L46 18 L58 25" stroke="#10b981" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="58" cy="25" r="4" fill="#10b981" />

      {/* Grid lines */}
      <g stroke="#475569" strokeWidth="0.5" opacity="0.4">
        <line x1="10" y1="15" x2="60" y2="15" />
        <line x1="10" y1="27" x2="60" y2="27" />
        <line x1="10" y1="39" x2="60" y2="39" />
      </g>
    </g>

    {/* Rising arrow */}
    <g transform="translate(135, 20)">
      <path d="M0 35 L0 8 L-6 16 M0 8 L6 16" stroke="#10b981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>

    {/* Credit coins */}
    <g transform="translate(100, 100)">
      <ellipse cx="15" cy="8" rx="14" ry="5" fill="#047857" />
      <ellipse cx="15" cy="5" rx="14" ry="5" fill="#10b981" />
      <text x="8" y="8" fill="#fff" fontSize="6" fontWeight="bold">CO₂</text>
    </g>
  </svg>
);

const pillars = [
  {
    title: "Centralized Workspace",
    desc: "Consolidated project management from documentation through verification to trading.",
    highlights: ["Single project file", "No spreadsheets", "Auditable events"],
    Illustration: WorkspaceIllustration,
  },
  {
    title: "Automated MRV",
    desc: "Methodology-specific validation rules and registry-aligned workflows.",
    highlights: ["Methodology logic", "Registry alignment", "Configurable rules"],
    Illustration: AutomatedIllustration,
  },
  {
    title: "Market & Portfolio Intelligence",
    desc: "Credit marketplace with pricing intelligence and portfolio management.",
    highlights: ["Deal rooms", "Portfolio optimization", "Provenance tracking"],
    Illustration: TradingIllustration,
  },
];

export default function WhatWeAre() {
  return (
    <section
      id="overview-deep"
      className="relative py-24 md:py-32 bg-[#0c0f1a]/90 backdrop-blur-sm overflow-hidden"
    >
      {/* Distinct background with blue/purple accent */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-violet-500/5 rounded-full blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-6xl px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-3 rounded-full border border-blue-400/30 bg-blue-500/10 px-5 py-2.5 mb-6 backdrop-blur-sm">
            <div className="relative">
              <div className="w-2.5 h-2.5 bg-blue-400 rounded-full animate-ping absolute" />
              <div className="w-2.5 h-2.5 bg-blue-400 rounded-full" />
            </div>
            <span className="text-sm font-medium uppercase tracking-[0.2em] text-blue-300">
              What We Are
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-slate-50 mb-5 leading-tight">
            The foundational{" "}
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              digital layer
            </span>
            <br />for carbon project lifecycles
          </h2>

          <p className="text-lg text-slate-300 leading-relaxed">
            CredoCarbon replaces fragmented spreadsheets and disconnected tools with
            a single infrastructure layer — where documents, data, workflows and credits
            maintain integrity across the entire project lifecycle.
          </p>
        </div>

        {/* Illustrated Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {pillars.map((pillar) => {
            const { Illustration } = pillar;
            return (
              <div
                key={pillar.title}
                className="group relative rounded-3xl bg-slate-900/50 border border-slate-700/40 backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-blue-400/30 hover:bg-slate-800/50"
              >
                {/* Illustration container */}
                <div className="relative h-44 bg-gradient-to-b from-slate-800/50 to-transparent p-4 flex items-center justify-center">
                  <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-500">
                    <Illustration />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 pt-2">
                  <h3 className="text-xl font-semibold text-slate-100 mb-2 text-center">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed text-center mb-4">
                    {pillar.desc}
                  </p>

                  {/* Highlight tags */}
                  <div className="flex flex-wrap justify-center gap-2">
                    {pillar.highlights.map((h) => (
                      <span
                        key={h}
                        className="text-xs px-3 py-1 rounded-full bg-blue-500/10 text-blue-300/80 border border-blue-400/20"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-blue-500/5 to-transparent pointer-events-none" />
              </div>
            );
          })}
        </div>

        {/* Visual flow connector */}
        <div className="flex justify-center items-center gap-4 mb-8">
          {pillars.map((pillar, index) => (
            <div key={pillar.title} className="flex items-center">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />
                <span className="text-sm font-medium text-slate-400">{pillar.title}</span>
              </div>
              {index < pillars.length - 1 && (
                <svg className="w-10 h-5 mx-4 text-slate-600" viewBox="0 0 40 20">
                  <path d="M0 10h30M24 5l8 5-8 5" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              )}
            </div>
          ))}
        </div>

        {/* Tagline */}
        <p className="text-center text-sm text-slate-500">
          Developers ship faster · VVBs trust what they review · Buyers trust what they buy
        </p>
      </div>
    </section>
  );
}
