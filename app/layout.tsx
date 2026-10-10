import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ritik Saini // Full-Stack Architect & Engineer",
  description:
    "Full-stack engineer with hands-on experience architecting scalable web applications, real-time collaborative workspaces, recruitment automation platforms, and generative AI systems.",
  keywords: [
    "Ritik Saini",
    "Full-Stack Engineer",
    "Next.js",
    "TypeScript",
    "React",
    "AI Systems",
    "Developer Portfolio",
    "Software Architect",
  ],
  authors: [{ name: "Ritik Saini" }],
  openGraph: {
    title: "Ritik Saini // Full-Stack Architect",
    description:
      "Minimalist, high-craft developer portfolio built with Next.js, TypeScript & Bleach Garganta intermission card aesthetic.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800;900&family=Poppins:wght@700;800;900&family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@300;400;500;600&family=Noto+Serif+JP:wght@400;700;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-[#040406] text-[#e4e4e7] font-sans antialiased selection:bg-[#e11d48] selection:text-white relative overflow-x-hidden min-h-screen">
        {children}
      </body>
    </html>
  );
}
