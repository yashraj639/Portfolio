import { Navbar } from "@/components/navbar";
import { Project } from "@/components/project-card";
import { ProjectsList } from "./projects-list";

const projects: Project[] = [
  {
    title: "Snap-Form — OpenLabs Solutions",
    date: "2026",
    description:
      "Fullstack AI-powered form builder built in a Turborepo monorepo during my internship at OpenLabs. Shipped 21 merged PRs covering an OpenRouter AI generation pipeline, a form builder Redux slice with undo/redo state history, Zod-validated REST APIs, and core monorepo packages (@repo/db, @repo/types).",
    tags: [
      "Turborepo",
      "Next.js",
      "TypeScript",
      "Redux Toolkit",
      "Prisma",
      "PostgreSQL",
      "OpenRouter",
    ],
    githubUrl:
      "https://github.com/Openlabsops/Snap-form/pulls?q=is:pr+is:merged+author:yashraj639",
    githubLabel: "21 Merged PRs",
  },
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
    title: "Private Rooms",
    date: "2026",
    description:
      "A real-time chat system built with WebSockets for low-latency messaging (<100ms). Features an ephemeral architecture with automatic room deletion and anonymous 4-digit room codes.",
    tags: ["Next.js", "TypeScript", "Socket.io", "WebSockets"],
    liveUrl: "https://chat.yashrj.xyz",
    githubUrl: "https://github.com/yashraj639/Private-Rooms",
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
    title: "Agentforce Marketing",
    date: "2025",
    description:
      "A modern, animated marketing landing page built with Next.js 16, Tailwind CSS v4, and Framer Motion.",
    tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://agentforce-rho.vercel.app/",
    githubUrl: "https://github.com/yashraj639/Agentforce-Marketing",
  },
  {
    title: "SQL AI Agent",
    date: "2026",
    description:
      "A natural language to SQL engine with real-time query execution and schema-aware prompt pipelines. Reduces manual query effort by 80% and includes safety guardrails.",
    tags: ["Next.js", "TypeScript", "Gemini API", "SQLite"],
    liveUrl: "https://sql-agent-vert-six.vercel.app",
    githubUrl: "https://github.com/yashraj639/SQL-Agent",
  },
  {
    title: "Foliokit",
    date: "2026",
    description:
      "A portfolio template platform with structured design systems and interactive UI components. Offers downloadable starter kits that reduce portfolio setup time by 70%.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "https://foliokit-delta.vercel.app",
    githubUrl: "https://github.com/yashraj639/Foliokit",
  },
];

export default function ProjectsPage() {
  return (
    <div className="site-shell min-h-screen">
      <Navbar />
      <div className="px-3 pb-20 pt-28 sm:px-8 sm:pt-32">
        <div className="mx-auto max-w-175">
          <ProjectsList projects={projects} />
        </div>
      </div>
    </div>
  );
}
