"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactSection() {
  const [copied, setCopied] = useState(false);
  const email = "ritik.saini.dev@example.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      className="min-h-screen lg:h-screen w-full snap-start snap-always relative overflow-hidden flex flex-col justify-between p-4 sm:p-6 md:p-8 bg-white text-black border-b border-black/20"
      id="contact"
    >
      {/* TOP SUB-BAR */}
      <div className="w-full flex items-center justify-between border-b-2 border-black/20 pb-2.5 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff0055] animate-pulse"></span>
          <span className="text-[#ff0055] font-extrabold tracking-ultra uppercase text-[10px] sm:text-xs">
            EPISODE 05 // SUMMON & INBOX
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-[#ff0055] text-white px-2 py-0.5 font-bold font-mono text-xs">
            #05
          </span>
          <span className="text-black font-bold hidden sm:inline">FINAL TRANSMISSION</span>
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
          <span className="vertical-text font-garganta text-5xl text-[#ff0055] font-black tracking-widest uppercase select-none">
            FINAL TRANSMISSION
          </span>
        </motion.div>

        {/* 2. PITCH BLACK CENTER CONTENT CONTAINER - SLIDES UP SECOND */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 xl:col-span-8 bg-black text-white border-2 border-black p-5 sm:p-7 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-y-auto gap-4"
        >
          <div>
            {/* Small screen title */}
            <h2 className="xl:hidden font-garganta text-4xl sm:text-6xl font-black text-white uppercase tracking-wider mb-3">
              FINAL TRANSMISSION
            </h2>

            <span className="font-mono text-xs text-[#ff0055] uppercase tracking-ultra font-extrabold text-[10px] sm:text-xs">
              OPEN INBOX // DIRECT COMMUNICATION
            </span>
            <h3 className="font-garganta text-3xl sm:text-5xl font-bold text-white uppercase tracking-wide mt-2">
              HAVE A PROJECT IN MIND?
            </h3>
            <p className="font-sans text-sm sm:text-base text-zinc-300 mt-3 leading-relaxed max-w-2xl">
              Whether you have an upcoming project, want to discuss a full-time
              role, or just want to chat about engineering and AI, my inbox is
              always open.
            </p>
          </div>

          {/* CONTACT BUTTONS */}
          <div className="flex flex-col sm:flex-row items-center gap-3 w-full pt-4 border-t border-white/10">
            <a
              href={`mailto:${email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 bg-[#ff0055] hover:bg-white text-white hover:text-black font-garganta text-base font-extrabold tracking-wider uppercase transition-all duration-300 shadow-blade hover:scale-[1.02]"
            >
              <span className="material-symbols-outlined text-[18px]">mail</span>
              <span>Send an Email</span>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 bg-white text-black border-2 border-white hover:bg-[#ff0055] hover:text-white font-garganta text-base font-extrabold tracking-wider uppercase transition-all duration-300 cursor-pointer hover:scale-[1.02]"
            >
              <span className="material-symbols-outlined text-[18px]">
                {copied ? "check" : "content_copy"}
              </span>
              <span>{copied ? "COPIED TO CLIPBOARD" : "COPY EMAIL"}</span>
            </button>

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 h-12 px-6 bg-zinc-900 border border-white/20 hover:border-white text-white font-garganta text-base font-extrabold tracking-wider uppercase transition-all duration-300 hover:scale-[1.02]"
            >
              <span className="material-symbols-outlined text-[18px]">code</span>
              <span>GitHub</span>
            </a>
          </div>

          {/* INTEGRATED FOOTER METADATA STRIP */}
          <div className="pt-4 border-t border-white/10 w-full flex flex-col sm:flex-row items-center justify-between text-zinc-400 font-mono text-[11px] gap-2">
            <div>
              <span className="text-white font-medium">© 2025 Ritik Saini.</span>
              <span className="text-zinc-500 ml-2 hidden sm:inline">Built with Bleach Intermission Discipline</span>
            </div>
            <span className="text-[#ff0055] font-bold">Response: &lt; 24h</span>
          </div>
        </motion.div>

        {/* 3. RIGHT SIDE SOLID MAGENTA KANJI PANEL - SLIDES IN THIRD */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 xl:col-span-3 bg-[#ff0055] text-black p-5 sm:p-7 flex flex-col justify-between relative overflow-hidden shadow-2xl border-2 border-black"
        >
          <div className="flex justify-between items-start font-mono text-xs font-bold uppercase tracking-widest text-black">
            <span>VOL. 05 // TRANSMISSION</span>
            <span>交信</span>
          </div>

          {/* HUGE VERTICAL KANJI TEXT */}
          <div className="my-auto flex items-center justify-center py-4">
            <div className="flex items-center gap-4">
              <span className="vertical-text font-kanji text-6xl sm:text-7xl lg:text-8xl font-black text-black leading-none tracking-tighter">
                交信
              </span>
              <span className="vertical-text font-kanji text-sm font-bold text-black/80 tracking-widest">
                (コウシン)
              </span>
            </div>
          </div>

          <p className="font-mono text-xs text-black font-extrabold uppercase leading-tight border-t border-black/20 pt-3">
            "Direct communication channel for engineering collaboration & consulting."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
