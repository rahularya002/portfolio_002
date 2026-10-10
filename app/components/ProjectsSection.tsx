"use client";

import { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  id: string;
  category: "all" | "ai" | "fullstack" | "tools";
  badge: string;
  badgeType: "gold" | "standard";
  title: string;
  description: string;
  terminalHeader: string;
  terminalHeaderStatus: string;
  metrics: { label: string; value: string }[];
  tags: string[];
  liveUrl: string;
  githubUrl: string;
}

const PROJECTS: Project[] = [
  {
    id: "recruit-ai",
    category: "ai",
    badge: "Full-Stack / AI System",
    badgeType: "gold",
    title: "RecruitAI / TalentFlow",
    description:
      "Recruitment platform connecting agencies, clients, and candidates with automated pipelines, AI candidate matching, and structured interview workflows.",
    terminalHeader: "pipeline: screening → matching",
    terminalHeaderStatus: "active",
    metrics: [
      { label: "Model latency", value: "142ms" },
      { label: "ATS parsed count", value: "12,450+" },
    ],
    tags: ["Next.js", "TypeScript", "PostgreSQL", "Python", "AI / LLM"],
    liveUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: "100x-canvas",
    category: "fullstack",
    badge: "Real-Time Collaboration",
    badgeType: "standard",
    title: "100XCanvas",
    description:
      "Infinite collaborative whiteboard application inspired by Excalidraw, built with real-time multi-peer sync, canvas rendering, and containerized deployment.",
    terminalHeader: "websocket: room_204_live",
    terminalHeaderStatus: "ws:active",
    metrics: [
      { label: "Frame sync rate", value: "60 FPS" },
      { label: "Concurrent cursors", value: "< 30ms jitter" },
    ],
    tags: ["Next.js", "WebSockets", "Canvas API", "Docker", "MongoDB"],
    liveUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: "certificate-engine",
    category: "tools",
    badge: "Document Tooling",
    badgeType: "standard",
    title: "Certificate Engine",
    description:
      "Automated high-throughput pipeline for batch generating verified certificates using spreadsheet imports, customizable layers, dynamic QR codes, and PDF streaming.",
    terminalHeader: "batch: csv_import_chunk",
    terminalHeaderStatus: "verified",
    metrics: [
      { label: "Export throughput", value: "1,000 / 4.2s" },
      { label: "Verification", value: "SHA-256 + QR" },
    ],
    tags: ["React", "Node.js", "Express", "PDFKit", "Canvas API"],
    liveUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: "task-suite",
    category: "fullstack",
    badge: "Internal SaaS",
    badgeType: "standard",
    title: "Task Management Suite",
    description:
      "Workflow orchestration platform featuring role-based team permissions, real-time message boards, deadline escalation alerts, and sprint velocity analytics.",
    terminalHeader: "sprint: cycle_14",
    terminalHeaderStatus: "RBAC strict",
    metrics: [
      { label: "Active listeners", value: "Socket.io rooms" },
      { label: "Database query", value: "Indexed / <10ms" },
    ],
    tags: ["React", "PostgreSQL", "Socket.io", "Express", "Tailwind"],
    liveUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: "rag-assistant",
    category: "ai",
    badge: "Generative AI / Vector",
    badgeType: "gold",
    title: "Product RAG Assistant",
    description:
      "Retrieval-augmented generation interface enabling contextual search and question answering over product catalogs and documentation with local LLMs.",
    terminalHeader: "embed: text-embedding-3",
    terminalHeaderStatus: "ChromaDB",
    metrics: [
      { label: "Similarity metric", value: "Cosine / k=4" },
      { label: "Inference provider", value: "Ollama local" },
    ],
    tags: ["Next.js", "FastAPI", "Ollama", "ChromaDB", "LangChain"],
    liveUrl: "#",
    githubUrl: "https://github.com",
  },
  {
    id: "vito-x",
    category: "tools",
    badge: "Audio Web App",
    badgeType: "standard",
    title: "Vito-X",
    description:
      "Interactive audio workspace and management suite for composing custom musical soundscapes and managing structured media asset stores in the cloud.",
    terminalHeader: "stream: web_audio_graph",
    terminalHeaderStatus: "Supabase",
    metrics: [
      { label: "Asset codec", value: "Opus / 192kbps" },
      { label: "Cloud bucket", value: "Signed CDN URLs" },
    ],
    tags: ["React", "Node.js", "MongoDB", "Supabase", "Web Audio"],
    liveUrl: "#",
    githubUrl: "https://github.com",
  },
];

export default function ProjectsSection() {
  const [filter, setFilter] = useState<"all" | "ai" | "fullstack" | "tools">(
    "all"
  );
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    filter === "all"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === filter);

  return (
    <section
      className="min-h-screen lg:h-screen w-full snap-start snap-always relative overflow-hidden flex flex-col justify-between p-4 sm:p-6 md:p-8 bg-[#facc15] text-black border-b border-black/20"
      id="projects"
    >
      {/* TOP SUB-BAR */}
      <div className="w-full flex items-center justify-between border-b-2 border-black/20 pb-2.5 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="w-2.5 h-2.5 rounded-full bg-black animate-pulse"></span>
          <span className="text-black font-extrabold tracking-ultra uppercase text-[10px] sm:text-xs">
            EPISODE 02 // ENGINEERING OUTPUT
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span className="bg-black text-[#facc15] px-2 py-0.5 font-bold font-mono text-xs">
            #02
          </span>
          <span className="text-black/90 font-bold hidden sm:inline">PRODUCTION ARCHIVE</span>
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
            SELECTED PROJECTS
          </span>
        </motion.div>

        {/* 2. CENTER CONTENT CONTAINER - SLIDES UP SECOND */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-8 xl:col-span-8 bg-black text-white border-2 border-black p-4 sm:p-6 flex flex-col justify-between shadow-[0_20px_50px_rgba(0,0,0,0.4)] overflow-y-auto"
        >
          {/* Small screen title */}
          <h2 className="xl:hidden font-garganta text-4xl sm:text-6xl font-black text-white uppercase tracking-wider mb-3">
            SELECTED PROJECTS
          </h2>

          {/* Filter Navigation Tabs */}
          <div className="flex flex-wrap items-center gap-2 mb-4 border-b border-white/15 pb-3 font-mono text-[11px]">
            <button
              type="button"
              onClick={() => setFilter("all")}
              className={`px-3 py-1.5 font-bold transition-all duration-200 cursor-pointer ${
                filter === "all"
                  ? "bg-[#facc15] text-black scale-105"
                  : "bg-white/10 text-zinc-300 hover:text-white"
              }`}
            >
              ALL WORKS ({PROJECTS.length})
            </button>
            <button
              type="button"
              onClick={() => setFilter("ai")}
              className={`px-3 py-1.5 font-bold transition-all duration-200 cursor-pointer ${
                filter === "ai"
                  ? "bg-[#facc15] text-black scale-105"
                  : "bg-white/10 text-zinc-300 hover:text-white"
              }`}
            >
              AI & RAG
            </button>
            <button
              type="button"
              onClick={() => setFilter("fullstack")}
              className={`px-3 py-1.5 font-bold transition-all duration-200 cursor-pointer ${
                filter === "fullstack"
                  ? "bg-[#facc15] text-black scale-105"
                  : "bg-white/10 text-zinc-300 hover:text-white"
              }`}
            >
              FULL-STACK & SAAS
            </button>
            <button
              type="button"
              onClick={() => setFilter("tools")}
              className={`px-3 py-1.5 font-bold transition-all duration-200 cursor-pointer ${
                filter === "tools"
                  ? "bg-[#facc15] text-black scale-105"
                  : "bg-white/10 text-zinc-300 hover:text-white"
              }`}
            >
              TOOLS & MEDIA
            </button>
          </div>

          {/* Project Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-y-auto pr-1">
            {filteredProjects.map((project) => (
              <article
                key={project.id}
                className="group relative flex flex-col justify-between bg-zinc-950 border border-white/15 hover:border-[#facc15] p-4 transition-all duration-300 hover:-translate-y-1 shadow-hollow"
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`font-mono text-[9px] tracking-widest uppercase px-1.5 py-0.5 border font-semibold ${
                      project.badgeType === "gold"
                        ? "border-[#facc15]/60 bg-[#facc15]/10 text-[#facc15]"
                        : "border-white/20 bg-white/5 text-zinc-300"
                    }`}
                  >
                    {project.badge}
                  </span>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="p-1 text-zinc-400 hover:text-[#facc15] transition-colors cursor-pointer"
                    title="Inspect Specs"
                  >
                    <span className="material-symbols-outlined text-[15px]">
                      info
                    </span>
                  </button>
                </div>

                <div>
                  <h3 className="font-garganta text-xl font-bold text-white group-hover:text-[#facc15] transition-colors tracking-wide">
                    {project.title}
                  </h3>
                  <p className="font-sans text-[11px] text-zinc-400 mt-1 leading-normal line-clamp-2">
                    {project.description}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between font-mono text-[10px]">
                  <span className="text-zinc-400">{project.tags[0]} • {project.tags[1]}</span>
                  <button
                    type="button"
                    onClick={() => setSelectedProject(project)}
                    className="text-[#facc15] hover:underline font-bold cursor-pointer"
                  >
                    Inspect Dossier →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </motion.div>

        {/* 3. RIGHT SIDE SOLID BLACK KANJI PANEL - SLIDES IN THIRD */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-4 xl:col-span-3 bg-black text-[#facc15] p-5 sm:p-7 flex flex-col justify-between relative overflow-hidden shadow-2xl border-2 border-black"
        >
          <div className="flex justify-between items-start font-mono text-xs font-bold uppercase tracking-widest text-[#facc15]">
            <span>VOL. 02 // CODE</span>
            <span className="text-white">開発</span>
          </div>

          {/* HUGE VERTICAL KANJI TEXT */}
          <div className="my-auto flex items-center justify-center py-4">
            <div className="flex items-center gap-4">
              <span className="vertical-text font-kanji text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none tracking-tighter">
                開発
              </span>
              <span className="vertical-text font-kanji text-sm font-bold text-[#facc15] tracking-widest">
                (カイハツ)
              </span>
            </div>
          </div>

          <p className="font-mono text-xs text-zinc-300 font-semibold uppercase leading-tight border-t border-white/20 pt-3">
            "High-throughput software architectures built for performance & operational clarity."
          </p>
        </motion.div>
      </div>

      {/* Modal for Project Inspection */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md">
          <div className="bg-zinc-950 border-2 border-[#facc15] p-6 sm:p-8 max-w-xl w-full relative shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-zinc-400 hover:text-white cursor-pointer"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
            <span className="font-mono text-xs text-[#facc15] uppercase tracking-ultra font-bold">
              PROJECT DOSSIER // {selectedProject.id}
            </span>
            <h3 className="font-garganta text-4xl font-bold text-white mt-1">
              {selectedProject.title}
            </h3>
            <p className="font-sans text-sm text-zinc-300 mt-3 leading-relaxed">
              {selectedProject.description}
            </p>

            <div className="mt-6 p-4 bg-black border border-white/10 font-mono text-xs space-y-2">
              <div className="text-[#facc15] font-bold">SYSTEM METRICS & RUNTIME STATUS</div>
              {selectedProject.metrics.map((m) => (
                <div key={m.label} className="flex justify-between border-b border-white/10 pb-1">
                  <span className="text-zinc-400">{m.label}:</span>
                  <span className="text-white font-medium">{m.value}</span>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {selectedProject.tags.map((tag) => (
                <span key={tag} className="font-mono text-xs px-2.5 py-1 bg-white/10 text-white border border-white/10">
                  {tag}
                </span>
              ))}
            </div>

            <div className="mt-8 flex justify-end gap-3 font-mono text-xs">
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 border border-white/20 text-zinc-400 hover:text-white cursor-pointer"
              >
                CLOSE
              </button>
              <a
                href={selectedProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 bg-[#facc15] text-black font-bold hover:bg-white transition-colors"
              >
                VIEW SOURCE CODE
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
