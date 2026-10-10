"use client";

export default function SideKanjiDecor() {
  return (
    <div className="fixed left-6 top-1/2 -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 pointer-events-none opacity-20 select-none z-10">
      <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white to-transparent"></div>
      <span className="vertical-text font-kanji text-xs text-white tracking-[0.5em]">
        全方位開発者・霊圧限界突破
      </span>
      <div className="w-[1px] h-20 bg-gradient-to-b from-transparent via-white to-transparent"></div>
    </div>
  );
}
