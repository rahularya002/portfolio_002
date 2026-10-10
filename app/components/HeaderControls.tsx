"use client";

interface HeaderControlsProps {
  onReplayIntro: () => void;
}

export default function HeaderControls({
  onReplayIntro,
}: HeaderControlsProps) {
  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-6 py-5 md:px-10 md:py-6 flex items-center justify-between pointer-events-auto bg-gradient-to-b from-black/80 via-black/40 to-transparent backdrop-blur-[2px]">
      {/* Top Left: Clean, Unboxed Brand & Live Status */}
      <div className="flex items-center gap-4">
        <a
          href="#"
          className="group flex items-center gap-3 transition-all duration-300"
        >
          {/* Monogram Badge */}
          <div className="w-8 h-8 bg-white text-black font-garganta font-bold text-base flex items-center justify-center group-hover:bg-reiatsu group-hover:text-white transition-colors shadow-md">
            RS
          </div>

          <div className="flex flex-col">
            <span className="font-garganta text-lg tracking-wider text-white font-bold leading-none group-hover:text-reiatsu transition-colors">
              RITIK SAINI
            </span>
            <span className="font-mono text-[10px] text-zinc-400 tracking-widest uppercase">
              FULL-STACK ARCHITECT
            </span>
          </div>
        </a>

        {/* Clean Live Status Indicator - No Outlined Box */}
        <div className="hidden sm:flex items-center gap-2 pl-4 border-l border-white/15">
          <span className="w-2 h-2 rounded-full bg-reiatsu animate-pulse shadow-[0_0_8px_#e11d48]"></span>
          <span className="font-mono text-[11px] text-zinc-300 tracking-wider">
            AVAILABLE FOR WORK
          </span>
        </div>
      </div>

      {/* Top Right: Integrated Controls & CTA */}
      <div className="flex items-center gap-3">
        <a
          href="https://github.com"
          target="_blank"
          rel="noreferrer"
          className="w-9 h-9 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
          title="GitHub Profile"
        >
          <span className="material-symbols-outlined text-[20px]">code</span>
        </a>
        <a
          href="https://linkedin.com"
          target="_blank"
          rel="noreferrer"
          className="w-9 h-9 text-zinc-400 hover:text-white flex items-center justify-center transition-colors"
          title="LinkedIn Network"
        >
          <span className="material-symbols-outlined text-[20px]">share</span>
        </a>

        {/* Replay Opening Card Trigger */}
        <button
          type="button"
          onClick={onReplayIntro}
          className="w-9 h-9 text-zinc-400 hover:text-reiatsu flex items-center justify-center transition-colors cursor-pointer"
          title="Replay Opening Card"
        >
          <span className="material-symbols-outlined text-[18px]">replay</span>
        </button>

        {/* High-Contrast Bold Crimson CTA */}
        <a
          href="#contact"
          className="h-10 px-5 bg-reiatsu hover:bg-white text-white hover:text-black font-garganta text-sm tracking-wider flex items-center gap-1.5 transition-all duration-300 shadow-blade font-bold uppercase ml-1"
        >
          <span>LET'S TALK</span>
          <span className="material-symbols-outlined text-[16px]">
            arrow_outward
          </span>
        </a>
      </div>
    </header>
  );
}
