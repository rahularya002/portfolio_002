"use client";

import { motion } from "framer-motion";

interface TechPillar {
  number: string;
  icon: string;
  title: string;
  sub: string;
  skills: { name: string; highlight?: boolean }[];
  specs: string[];
}

const TECH_PILLARS: TechPillar[] = [
  {
    number: "01",
    icon: "desktop_windows",
    title: "Frontend Architecture",
    sub: "HIGH-CRAFT UI & STATE",
    skills: [
      { name: "React 19", highlight: true },
      { name: "Next.js 16", highlight: true },
      { name: "TypeScript", highlight: true },
      { name: "JavaScript (ES6+)", highlight: true },
      { name: "Tailwind CSS", highlight: true },
      { name: "shadcn/ui", highlight: true },
    ],
    specs: ["SSR / ISR rendering", "Component Systems", "Responsive Layouts"],
  },
  {
    number: "02",
    icon: "dns",
    title: "Backend & Microservices",
    sub: "HIGH-THROUGHPUT APIs",
    skills: [
      { name: "Node.js", highlight: true },
      { name: "Express", highlight: true },
      { name: "FastAPI", highlight: true },
      { name: "REST APIs", highlight: true },
      { name: "WebSockets", highlight: true },
    ],
    specs: ["Real-Time Sync", "Microservices", "Event Architecture"],
  },
  {
    number: "03",
    icon: "database",
    title: "Databases & Storage",
    sub: "PERSISTENCE & RETRIEVAL",
    skills: [
      { name: "PostgreSQL", highlight: true },
      { name: "MongoDB", highlight: true },
      { name: "Supabase", highlight: true },
      { name: "Redis", highlight: true },
    ],
    specs: ["Relational Schemas", "Vector Indexes", "In-Memory Caching"],
  },
  {
    number: "04",
    icon: "psychology",
    title: "AI Systems & DevOps",
    sub: "LOCAL LLMs & CLOUD",
    skills: [
      { name: "Ollama RAG", highlight: true },
      { name: "LangChain", highlight: true },
      { name: "ChromaDB", highlight: true },
      { name: "Docker", highlight: true },
      { name: "AWS • Vercel", highlight: true },
      { name: "Git CI/CD", highlight: true },
    ],
    specs: ["Local Inference", "Containerization", "Automated Pipelines"],
  },
];

export default function TechStackSection() {
  return (
    <section
      className="min-h-screen lg:h-screen w-full snap-start snap-always relative overflow-hidden flex flex-col justify-between p-4 sm:p-6 md:p-8 bg-[#8b5cf6] text-black border-b border-black/20"
      id="tech-stack"
    >
      {/* TOP SUB-BAR */}
      <div className="w-full flex items-center justify-between border-b-2 border-black/20 pb-2.5 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse"></span>
          <span className="text-black font-extrabold tracking-ultra uppercase text-[10px] sm:text-xs">
            EPISODE 04 // WEAPONRY & FRAMEWORKS
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-black text-[#8b5cf6] px-2 py-0.5 font-bold font-mono text-xs">
            #04
          </span>
          <span className="text-black/90 font-bold hidden sm:inline">TECHNICAL ARSENAL</span>
        </div>
      </div>

      {/* MAIN CARD BODY WITH STAGGERED SCROLL ANIMATION */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto items-stretch lg:h-[calc(100vh-140px)] py-4 lg:py-0">
        {/* 1. LEFT VERTICAL TITLE BAR - SLIDES IN FIRST */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="hidden xl:flex lg:col-span-1 items-center justify-center border-r-2 border-black/20 py-4"
        >
          <span className="vertical-text font-garganta text-5xl text-black font-black tracking-widest uppercase select-none">
            TECHNICAL ARSENAL
          </span>
        </motion.div>

        {/* 2. PITCH BLACK CENTER CONTENT CONTAINER - SLIDES UP SECOND */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 xl:col-span-8 bg-black text-white border-2 border-black p-4 sm:p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-y-auto gap-4"
        >
          {/* 1. HEADLINE */}
          <div>
            <div className="flex items-center gap-2 text-[#8b5cf6] font-mono text-xs mb-1">
              <span className="w-4 h-[3px] bg-[#8b5cf6]"></span>
              <span className="tracking-ultra uppercase font-extrabold text-[10px] sm:text-xs">
                PRODUCTION-TESTED STACK REGISTRY
              </span>
            </div>

            <h2 className="font-garganta text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-none uppercase mb-2">
              PRODUCTION-TESTED <span className="text-[#8b5cf6]">WEAPONRY</span> & MODERN FRAMEWORKS.
            </h2>
          </div>

          {/* 2. SYSTEM ARSENAL TERMINAL DASHBOARD */}
          <div className="bg-zinc-950 text-white p-3 sm:p-4 border border-white/15 font-mono text-xs space-y-1.5 shadow-md">
            <div className="flex items-center justify-between border-b border-white/15 pb-1 text-[#8b5cf6] font-bold">
              <span className="text-[11px] sm:text-xs">// SYSTEM ARSENAL & PROFICIENCY REGISTRY</span>
              <span className="text-zinc-400 text-[10px]">VERIFIED STACK</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
              <div>
                <span className="text-zinc-500">&gt; RUNTIME:</span>{" "}
                <span className="text-white">Next.js 16 • React 19 • TypeScript 5</span>
              </div>
              <div>
                <span className="text-zinc-500">&gt; SERVICES:</span>{" "}
                <span className="text-white">Node.js • Express • FastAPI • WebSockets</span>
              </div>
              <div>
                <span className="text-zinc-500">&gt; STORAGE:</span>{" "}
                <span className="text-white">PostgreSQL • MongoDB • Supabase • Redis</span>
              </div>
              <div>
                <span className="text-zinc-500">&gt; AI & INFRA:</span>{" "}
                <span className="text-white">Ollama RAG • ChromaDB • Docker • Vercel</span>
              </div>
            </div>
          </div>

          {/* 3. 4 PILLARS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {TECH_PILLARS.map((pillar) => (
              <div
                key={pillar.title}
                className="bg-zinc-950 border-2 border-white/15 hover:border-[#8b5cf6] p-3.5 sm:p-4 flex flex-col justify-between transition-all duration-300 hover:-translate-y-0.5"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-[#8b5cf6]">
                        {pillar.icon}
                      </span>
                      <h3 className="font-garganta text-base font-bold text-white tracking-wide uppercase">
                        {pillar.title}
                      </h3>
                    </div>
                    <span className="font-mono text-xs text-[#8b5cf6] font-bold">
                      {pillar.number}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {pillar.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="font-mono text-[10px] px-2 py-0.5 bg-black border border-white/15 text-zinc-200 flex items-center gap-1.5 hover:border-[#8b5cf6] transition-colors font-medium"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8b5cf6]"></span>
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-2 border-t border-white/10 flex flex-wrap gap-2 text-[9px] font-mono text-zinc-400">
                  {pillar.specs.map((spec) => (
                    <span key={spec} className="text-zinc-400">
                      ✓ {spec}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* 4. BOTTOM DOCTRINE STRIP */}
          <div className="p-3 bg-zinc-950 border border-white/15 font-mono text-xs flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-[#8b5cf6]"></span>
            <span className="text-zinc-300 text-[10px] sm:text-[11px] uppercase tracking-wide">
              "EVERY TOOL MUST HAVE A CLEAR PURPOSE. CHOOSE FRAMEWORKS FOR SPEED, PREDICTABILITY, AND LONG-TERM MAINTAINABILITY."
            </span>
          </div>
        </motion.div>

        {/* 3. RIGHT SIDE SOLID BLACK KANJI PANEL - SLIDES IN THIRD */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 xl:col-span-3 bg-black text-[#8b5cf6] p-5 sm:p-7 flex flex-col justify-between relative overflow-hidden shadow-2xl border-2 border-black"
        >
          <div className="flex justify-between items-start font-mono text-xs font-bold uppercase tracking-widest text-[#8b5cf6]">
            <span>VOL. 04 // WEAPONRY</span>
            <span className="text-white">武装</span>
          </div>

          {/* HUGE VERTICAL KANJI TEXT */}
          <div className="my-auto flex items-center justify-center py-4">
            <div className="flex items-center gap-4">
              <span className="vertical-text font-kanji text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter">
                武装
              </span>
              <span className="vertical-text font-kanji text-sm font-bold text-[#8b5cf6] tracking-widest">
                (ブソウ)
              </span>
            </div>
          </div>

          <p className="font-mono text-xs text-zinc-300 font-semibold uppercase leading-tight border-t border-white/20 pt-3">
            "Modern developer tooling, containerization, and backend infrastructure."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
