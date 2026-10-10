"use client";

import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="min-h-screen lg:h-screen w-full snap-start snap-always relative overflow-hidden flex flex-col justify-between p-4 sm:p-6 md:p-8 bg-[#ff0055] text-black border-b border-black/20"
      id="hero"
    >
      {/* TOP SUB-BAR */}
      <div className="w-full flex items-center justify-between border-b-2 border-black/20 pb-2.5 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse"></span>
          <span className="text-black font-extrabold tracking-ultra uppercase text-[10px] sm:text-xs">
            EPISODE 01 // RITIK SAINI
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-black text-white px-2 py-0.5 font-bold font-mono text-xs">
            #01
          </span>
          <span className="text-black/90 font-bold hidden sm:inline">FULL-STACK ARCHITECT</span>
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
          <span className="vertical-text font-garganta text-6xl text-black font-black tracking-widest uppercase select-none">
            RITIK SAINI
          </span>
        </motion.div>

        {/* 2. STARK WHITE CENTER CONTENT CONTAINER - SLIDES UP SECOND */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 xl:col-span-8 bg-white text-black border-2 border-black p-5 sm:p-7 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-y-auto gap-4"
        >
          {/* 1. HEADLINE & SUBTITLE */}
          <div>
            <div className="flex items-center gap-2 text-[#ff0055] font-mono text-xs mb-2">
              <span className="w-4 h-[3px] bg-[#ff0055]"></span>
              <span className="tracking-ultra uppercase font-extrabold text-[10px] sm:text-xs">
                SCALABLE WEB & APPLIED AI
              </span>
            </div>

            <h1 className="font-garganta text-4xl sm:text-6xl lg:text-7xl font-black text-black leading-none uppercase mb-3">
              I BUILD WEB <span className="text-[#ff0055]">APPLICATIONS</span> THAT SOLVE REAL PROBLEMS.
            </h1>

            <p className="font-sans text-sm sm:text-base text-zinc-800 leading-relaxed border-l-4 border-black pl-3 font-medium max-w-3xl">
              Full-stack engineer with hands-on experience architecting scalable
              web applications, real-time collaborative workspaces, recruitment
              automation platforms, and generative AI systems.
            </p>
          </div>

          {/* 2. MIDDLE SYSTEM TERMINAL WIREFRAME */}
          <div className="bg-black text-white p-4 border-2 border-black font-mono text-xs space-y-2 my-1 shadow-md transition-all hover:border-[#ff0055]">
            <div className="flex items-center justify-between border-b border-white/20 pb-1.5">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span className="text-emerald-400 font-bold text-[11px] sm:text-xs">SYSTEM RUNTIME REGISTRY</span>
              </div>
              <span className="text-zinc-400 text-[10px]">v16.4.0 • ONLINE</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] pt-1">
              <div>
                <span className="text-zinc-500">&gt; PRIMARY ENGINE:</span>{" "}
                <span className="text-white font-semibold">Next.js • React • TypeScript</span>
              </div>
              <div>
                <span className="text-zinc-500">&gt; BACKEND & STATE:</span>{" "}
                <span className="text-white font-semibold">Node.js • PostgreSQL • Redis</span>
              </div>
              <div>
                <span className="text-zinc-500">&gt; AI SUBSYSTEMS:</span>{" "}
                <span className="text-white font-semibold">Local Ollama RAG • ChromaDB</span>
              </div>
              <div>
                <span className="text-zinc-500">&gt; DEPLOYMENT:</span>{" "}
                <span className="text-white font-semibold">Docker • Vercel • AWS</span>
              </div>
            </div>
          </div>

          {/* 3. KEY CAPABILITIES METRICS STRIP */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 border-t-2 border-black/10 pt-3">
            <div className="p-2.5 bg-zinc-100 border border-black/20 font-mono transition-transform hover:-translate-y-0.5">
              <span className="text-[10px] text-[#ff0055] font-extrabold uppercase block">01 // FRONTEND</span>
              <span className="font-garganta text-base text-black font-extrabold block">Next.js & React</span>
              <span className="text-[11px] text-zinc-600 block mt-0.5">High-craft responsive UI</span>
            </div>
            <div className="p-2.5 bg-zinc-100 border border-black/20 font-mono transition-transform hover:-translate-y-0.5">
              <span className="text-[10px] text-[#ff0055] font-extrabold uppercase block">02 // BACKEND</span>
              <span className="font-garganta text-base text-black font-extrabold block">Node & APIs</span>
              <span className="text-[11px] text-zinc-600 block mt-0.5">REST, WebSockets & SQL</span>
            </div>
            <div className="p-2.5 bg-zinc-100 border border-black/20 font-mono transition-transform hover:-translate-y-0.5">
              <span className="text-[10px] text-[#ff0055] font-extrabold uppercase block">03 // AI SYSTEMS</span>
              <span className="font-garganta text-base text-black font-extrabold block">Vector RAG</span>
              <span className="text-[11px] text-zinc-600 block mt-0.5">Local LLM retrieval</span>
            </div>
          </div>

          {/* 4. ACTION BUTTONS */}
          <div className="pt-3 border-t-2 border-black/10 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="h-11 px-6 bg-black hover:bg-[#ff0055] text-white font-garganta text-base font-extrabold tracking-wider uppercase transition-all duration-300 shadow-xl flex items-center gap-2 hover:scale-[1.02]"
              >
                <span>EXAMINE WORKS</span>
                <span className="material-symbols-outlined text-[16px]">
                  arrow_downward
                </span>
              </a>
              <a
                href="#contact"
                className="h-11 px-6 bg-transparent hover:bg-black/10 border-2 border-black text-black font-garganta text-base font-extrabold tracking-wider uppercase transition-all duration-300 flex items-center gap-2 hover:scale-[1.02]"
              >
                <span>TRANSMIT MESSAGE</span>
                <span className="material-symbols-outlined text-[16px]">
                  mail
                </span>
              </a>
            </div>

            <div className="flex items-center gap-2 font-mono text-xs text-black font-extrabold">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-600 animate-pulse"></span>
              <span>India Base • Open for work</span>
            </div>
          </div>
        </motion.div>

        {/* 3. RIGHT SIDE SOLID BLACK KANJI PANEL - SLIDES IN THIRD */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 xl:col-span-3 bg-black text-[#ff0055] p-5 sm:p-7 flex flex-col justify-between relative overflow-hidden shadow-2xl border-2 border-black"
        >
          <div className="flex justify-between items-start font-mono text-xs font-bold uppercase tracking-widest text-[#ff0055]">
            <span>VOL. 01 // OVERVIEW</span>
            <span className="text-white">黒腔</span>
          </div>

          {/* HUGE VERTICAL KANJI TEXT */}
          <div className="my-auto flex items-center justify-center py-4">
            <div className="flex items-center gap-4">
              <span className="vertical-text font-kanji text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter">
                黒腔
              </span>
              <span className="vertical-text font-kanji text-sm font-bold text-[#ff0055] tracking-widest">
                (ガルガンタ)
              </span>
            </div>
          </div>

          <p className="font-mono text-xs text-zinc-300 font-semibold uppercase leading-tight border-t border-white/20 pt-3">
            "A corridor connecting standard web client interfaces with resilient distributed backend architecture."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
