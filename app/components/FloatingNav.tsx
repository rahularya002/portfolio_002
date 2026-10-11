"use client";

export default function FloatingNav() {
  const scrollTo = (id: string) => (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed bottom-6 right-6 z-40 hidden lg:flex items-center gap-1 bg-black/90 backdrop-blur-md border border-white/10 p-1 font-mono text-[11px] text-zinc-400">
      <a
        href="#hero"
        onClick={scrollTo("hero")}
        className="px-2.5 py-1 hover:text-white hover:bg-white/10 transition-colors"
      >
        TOP
      </a>
      <span className="text-zinc-700">/</span>
      <a
        href="#projects"
        onClick={scrollTo("projects")}
        className="px-2.5 py-1 hover:text-white hover:bg-white/10 transition-colors"
      >
        PROJECTS
      </a>
      <span className="text-zinc-700">/</span>
      <a
        href="#about"
        onClick={scrollTo("about")}
        className="px-2.5 py-1 hover:text-white hover:bg-white/10 transition-colors"
      >
        ORIGIN
      </a>
      <span className="text-zinc-700">/</span>
      <a
        href="#tech-stack"
        onClick={scrollTo("tech-stack")}
        className="px-2.5 py-1 hover:text-white hover:bg-white/10 transition-colors"
      >
        ARSENAL
      </a>
      <span className="text-zinc-700">/</span>
      <a
        href="#contact"
        onClick={scrollTo("contact")}
        className="px-2.5 py-1 hover:text-white hover:bg-white/10 transition-colors"
      >
        CONTACT
      </a>
    </nav>
  );
}
