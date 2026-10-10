"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section
      className="min-h-screen lg:h-screen w-full snap-start snap-always relative overflow-hidden flex flex-col justify-between p-4 sm:p-6 md:p-8 bg-[#10b981] text-black border-b border-black/20"
      id="about"
    >
      {/* TOP SUB-BAR */}
      <div className="w-full flex items-center justify-between border-b-2 border-black/20 pb-2.5 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse"></span>
          <span className="text-black font-extrabold tracking-ultra uppercase text-[10px] sm:text-xs">
            EPISODE 03 // ARCHITECTURAL DOCTRINE
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-black text-[#10b981] px-2 py-0.5 font-bold font-mono text-xs">
            #03
          </span>
          <span className="text-black/90 font-bold hidden sm:inline">ORIGIN & PHILOSOPHY</span>
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
            ORIGIN & PHILOSOPHY
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
          {/* 1. EDITORIAL HEADLINE */}
          <div>
            <div className="flex items-center gap-2 text-[#059669] font-mono text-xs mb-2">
              <span className="w-4 h-[3px] bg-[#059669]"></span>
              <span className="tracking-ultra uppercase font-extrabold text-[10px] sm:text-xs">
                ENGINEERING PHILOSOPHY & CRAFT
              </span>
            </div>

            <h2 className="font-garganta text-3xl sm:text-5xl lg:text-6xl font-black text-black leading-none uppercase mb-3">
              ENGINEERING WITH <span className="text-[#059669]">MINIMALIST DISCIPLINE</span> & UNCOMPROMISING CRAFT.
            </h2>
          </div>

          {/* 2. 3-COLUMN STRUCTURED DOSSIER CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            <div className="p-3.5 bg-zinc-950 text-white border-2 border-black flex flex-col justify-between shadow-md transition-transform hover:-translate-y-0.5">
              <div>
                <div className="flex justify-between items-center font-mono text-[10px] text-[#10b981] font-extrabold uppercase mb-1.5">
                  <span>01 // THE CRAFT</span>
                  <span className="material-symbols-outlined text-[15px]">terminal</span>
                </div>
                <h3 className="font-garganta text-lg text-white font-bold mb-1.5">
                  END-TO-END SYSTEMS
                </h3>
                <p className="font-sans text-xs text-zinc-300 leading-relaxed font-normal">
                  Architecting resilient client-side interfaces with modern React & Next.js ecosystems, coupled with high-performance APIs and microservices.
                </p>
              </div>
              <span className="font-mono text-[9px] text-zinc-500 mt-2.5 pt-1.5 border-t border-white/10 block">
                React • Next.js • TypeScript
              </span>
            </div>

            <div className="p-3.5 bg-zinc-950 text-white border-2 border-black flex flex-col justify-between shadow-md transition-transform hover:-translate-y-0.5">
              <div>
                <div className="flex justify-between items-center font-mono text-[10px] text-[#10b981] font-extrabold uppercase mb-1.5">
                  <span>02 // THE DOCTRINE</span>
                  <span className="material-symbols-outlined text-[15px]">speed</span>
                </div>
                <h3 className="font-garganta text-lg text-white font-bold mb-1.5">
                  ZERO BLOAT UTILITY
                </h3>
                <p className="font-sans text-xs text-zinc-300 leading-relaxed font-normal">
                  Prioritizing standard web APIs, predictable state machines, strict type safety, and software that delivers immediate, tangible value.
                </p>
              </div>
              <span className="font-mono text-[9px] text-zinc-500 mt-2.5 pt-1.5 border-t border-white/10 block">
                Node.js • PostgreSQL • Redis
              </span>
            </div>

            <div className="p-3.5 bg-zinc-950 text-white border-2 border-black flex flex-col justify-between shadow-md transition-transform hover:-translate-y-0.5">
              <div>
                <div className="flex justify-between items-center font-mono text-[10px] text-[#10b981] font-extrabold uppercase mb-1.5">
                  <span>03 // EXPLORATION</span>
                  <span className="material-symbols-outlined text-[15px]">psychology</span>
                </div>
                <h3 className="font-garganta text-lg text-white font-bold mb-1.5">
                  APPLIED AI & RAG
                </h3>
                <p className="font-sans text-xs text-zinc-300 leading-relaxed font-normal">
                  Integrating pragmatic AI retrieval pipelines, local LLMs via Ollama, and vector similarity search with ChromaDB & LangChain.
                </p>
              </div>
              <span className="font-mono text-[9px] text-zinc-500 mt-2.5 pt-1.5 border-t border-white/10 block">
                Ollama • Vector RAG • Python
              </span>
            </div>
          </div>

          {/* 3. HIGH-IMPACT BLEACH DOCTRINE BANNER */}
          <div className="p-4 bg-black text-white border-2 border-black relative overflow-hidden my-1 shadow-lg">
            <div className="absolute -right-4 -bottom-6 font-kanji text-7xl text-[#10b981]/20 select-none font-black pointer-events-none">
              道
            </div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-2 h-2 rounded-full bg-[#10b981] animate-ping"></span>
              <span className="font-mono text-xs text-[#10b981] uppercase tracking-ultra font-extrabold text-[10px] sm:text-xs">
                ARCHITECTURAL DOCTRINE
              </span>
            </div>
            <p className="font-bleach text-xs sm:text-sm text-zinc-200 italic leading-relaxed max-w-3xl">
              "A BLADE ONLY CUTS WHAT YOU WILL IT TO CUT. WRITE CODE THAT EXECUTES THE EXACT INTENT WITH NEITHER HESITATION NOR EXCESS."
            </p>
          </div>

          {/* 4. PERFORMANCE STANDARDS STRIP */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 font-mono text-xs text-center border-t-2 border-black/10 pt-2.5">
            <div className="p-2 bg-zinc-100 border-2 border-black">
              <span className="text-[#059669] font-extrabold text-sm block">100%</span>
              <span className="text-zinc-800 text-[9px] uppercase font-bold">TYPE SAFETY</span>
            </div>
            <div className="p-2 bg-zinc-100 border-2 border-black">
              <span className="text-[#059669] font-extrabold text-sm block">&lt; 100MS</span>
              <span className="text-zinc-800 text-[9px] uppercase font-bold">API LATENCY</span>
            </div>
            <div className="p-2 bg-zinc-100 border-2 border-black">
              <span className="text-[#059669] font-extrabold text-sm block">ZERO</span>
              <span className="text-zinc-800 text-[9px] uppercase font-bold">ARTIFICIAL BLOAT</span>
            </div>
            <div className="p-2 bg-zinc-100 border-2 border-black">
              <span className="text-[#059669] font-extrabold text-sm block">24/7</span>
              <span className="text-zinc-800 text-[9px] uppercase font-bold">RELIABILITY FOCUS</span>
            </div>
          </div>
        </motion.div>

        {/* 3. RIGHT SIDE SOLID BLACK KANJI PANEL - SLIDES IN THIRD */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 xl:col-span-3 bg-black text-[#10b981] p-5 sm:p-7 flex flex-col justify-between relative overflow-hidden shadow-2xl border-2 border-black"
        >
          <div className="flex justify-between items-start font-mono text-xs font-bold uppercase tracking-widest text-[#10b981]">
            <span>VOL. 03 // PHILOSOPHY</span>
            <span className="text-white">精神</span>
          </div>

          {/* HUGE VERTICAL KANJI TEXT */}
          <div className="my-auto flex items-center justify-center py-4">
            <div className="flex items-center gap-4">
              <span className="vertical-text font-kanji text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter">
                精神
              </span>
              <span className="vertical-text font-kanji text-sm font-bold text-[#10b981] tracking-widest">
                (セイシン)
              </span>
            </div>
          </div>

          <p className="font-mono text-xs text-zinc-300 font-semibold uppercase leading-tight border-t border-white/20 pt-3">
            "The spirit of minimal craft: execute clear intent without hesitation."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
