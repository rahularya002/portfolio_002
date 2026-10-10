"use client";

import { useEffect, useState } from "react";

interface BleachLoaderProps {
  isVisible: boolean;
  onDismiss: () => void;
}

export default function BleachLoader({
  isVisible,
  onDismiss,
}: BleachLoaderProps) {
  const [slashScaled, setSlashScaled] = useState(false);

  useEffect(() => {
    if (isVisible) {
      setSlashScaled(false);
      const timer = setTimeout(() => {
        setSlashScaled(true);
      }, 100);

      const autoDismiss = setTimeout(() => {
        onDismiss();
      }, 2000);

      return () => {
        clearTimeout(timer);
        clearTimeout(autoDismiss);
      };
    }
  }, [isVisible, onDismiss]);

  if (!isVisible) return null;

  return (
    <div
      id="bleach-loader"
      className="fixed inset-0 z-[100] bg-[#040406] flex flex-col items-center justify-center transition-all duration-700 select-none"
    >
      {/* Background Japanese Watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.04] overflow-hidden">
        <span className="font-kanji text-[35vw] font-black text-white leading-none tracking-tighter select-none">
          黒腔
        </span>
      </div>

      {/* Center Chapter Title-card */}
      <div className="relative z-10 flex flex-col items-center max-w-2xl mx-auto px-6 text-center">
        {/* Sub-badge */}
        <div className="flex items-center gap-2 mb-4 tracking-ultra text-xs font-mono text-reiatsu uppercase">
          <span className="w-3 h-[2px] bg-reiatsu"></span>
          <span>SYSTEM INITIALIZATION // PORTFOLIO '25</span>
          <span className="w-3 h-[2px] bg-reiatsu"></span>
        </div>

        {/* Main Garganta-style Condensed Display Title */}
        <div className="relative py-2 overflow-hidden w-full">
          <h1 className="font-garganta text-6xl sm:text-8xl md:text-9xl font-bold text-white tracking-wide uppercase leading-none mb-2">
            RITIK SAINI
          </h1>
          {/* Diagonal Slash Bar Animation */}
          <div
            className={`h-[3px] w-full bg-gradient-to-r from-transparent via-reiatsu to-white transition-all duration-700 transform origin-left shadow-[0_0_20px_#e11d48] ${
              slashScaled ? "scale-x-100" : "scale-x-0"
            }`}
          ></div>
        </div>

        {/* Title Subtitle */}
        <p className="font-mono text-xs sm:text-sm tracking-widest text-zinc-400 mt-4 uppercase">
          FULL-STACK ARCHITECT // SCALABLE WEB & APPLIED AI
        </p>

        {/* Terminal Status Pill */}
        <div className="mt-8 flex items-center gap-3 px-4 py-2 bg-black/80 border border-white/10 font-mono text-xs text-zinc-300">
          <span className="inline-block w-2 h-2 rounded-full bg-reiatsu animate-ping"></span>
          <span className="tracking-widest">
            INITIALIZING SYSTEM REGISTRIES...
          </span>
        </div>
      </div>

      {/* Enter Button in Corner */}
      <button
        type="button"
        onClick={onDismiss}
        className="absolute bottom-8 right-8 font-mono text-xs text-zinc-400 hover:text-white uppercase tracking-widest transition-colors flex items-center gap-2 border border-white/20 hover:border-white px-4 py-2 bg-white/5 cursor-pointer"
      >
        <span>ENTER PORTFOLIO</span>
        <span className="material-symbols-outlined text-[16px]">
          arrow_forward
        </span>
      </button>
    </div>
  );
}
