"use client";

export default function Footer() {
  return (
    <footer className="w-full border-t border-white/10 bg-void py-10 relative z-20">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex flex-col items-center sm:items-start">
          <p className="font-bleach text-xs tracking-wider text-zinc-400 uppercase">
            © 2026 Ritik Saini. Built with precision & minimalist discipline.
          </p>
          <p className="font-mono text-[10px] text-zinc-600 mt-1">
            Next.js • Tailwind CSS • Clean Architecture • Editorial Edition
          </p>
        </div>
        <div className="flex items-center gap-5 font-mono text-xs">
          <a
            href="https://github.com/rahularya002"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Code Repository
          </a>
          <a
            href="https://www.linkedin.com/in/ritik-saini-615904235/"
            target="_blank"
            rel="noreferrer"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="mailto:ritiksaini852@gmail.com"
            className="text-zinc-400 hover:text-white transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
