import { Navbar } from "@/components/navbar";
import { ProjectCard, Project } from "@/components/project-card";
import { ProjectsList } from "./projects-list";

const projects: Project[] = [
  {
    title: "Zeno Bank",
    date: "2026",
    description:
      "A production-grade full-stack banking ledger built with Next.js, PostgreSQL, and Drizzle ORM. Implements real double-entry bookkeeping principles with atomic transactions, idempotency, and a full audit trail complete with a Neobrutalist frontend UI",
    tags: ["TypeScript", "Next.js", "PostgreSQL", "Drizzle ORM"],
    liveUrl: "https://banking-ledger.vercel.app",
    githubUrl: "https://github.com/yashraj639/Banking-Ledger",
  },
  {
    title: "Agentforce Marketing",
    date: "2025",
    description:
      "A modern, animated marketing landing page built with Next.js 16, Tailwind CSS v4, and Framer Motion.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://agentforce-rho.vercel.app/",
    githubUrl: "https://github.com/yashraj639/Agentforce-Marketing",
  },
   {
    title: "Second Brain",
    date: "2025",
    description:
      "Second Brain is a full-stack personal knowledge management app inspired by the idea of an external memory system. Capture tweets, YouTube videos, articles, documents, and links, then organise them with tags and instantly share your entire collection with anyone via a unique public link.",
    tags: ["React", "Node.js", "TypeScript", "MongoDB", "Express"],
    liveUrl: "https://secondbrain.yashrj.xyz",
    githubUrl: "https://github.com/yashraj639/Second-Brain-App",
  },
  {
    title: "Prompt-Jacker",
    date: "2026",
    description:
      "Prompt-Jacker is a sophisticated reverse-engineering tool that deconstructs images into optimized prompts for AI generation. Whether you're stealing the lighting from a cinematic shot or the layout from a top-tier SaaS dashboard, Prompt-Jacker extracts the DNA of any visual and turns it into a reusable prompt.",
    tags: ["TypeScript", "Next.js", "Gemini API", "Tailwind CSS"],
    liveUrl: "#",
    githubUrl: "https://github.com/yashraj639/Prompt-Jacker",
  },
  {
    title: "Simplify",
    date: "2025",
    description:
      "A powerful Chrome extension that transforms complex web content into easy-to-understand explanations using Google's Gemini AI. Whether you're reading technical articles, research papers, or dense blog posts, Simplify makes comprehension effortless.",
    tags: ["Chrome Extension", "TypeScript", "Gemini API"],
    githubUrl: "https://github.com/yashraj639/Simplify",
  },
];

const headerItem = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export default function ProjectsPage() {
  return (
    <div className="site-shell min-h-screen">
      <Navbar />
      <div className="px-3 pb-20 pt-28 sm:px-8 sm:pt-32">
        <div className="mx-auto max-w-[700px]">
          <ProjectsList projects={projects} />
        </div>
      </div>
    </div>
  );
}
