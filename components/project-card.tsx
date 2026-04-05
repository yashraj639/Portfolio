"use client";

import { motion } from "motion/react";

export interface Project {
  title: string;
  date: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const item = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      variants={item}
      className="group border-b border-[var(--line)] bg-transparent px-3 py-6 last:border-b-0 sm:px-4"
    >
      <div className="space-y-4">
        <div className="flex items-baseline justify-between gap-3">
          <h3 className="text-[1.1rem] font-semibold tracking-tight text-[var(--foreground)]">
            {project.title}
          </h3>
          <span className="shrink-0 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.12em] text-[var(--muted)]">
            {project.date}
          </span>
        </div>

        <p className="max-w-[38rem] text-[0.9rem] leading-8 text-[var(--muted)]">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-none border border-[var(--line)] px-2.5 py-1 font-[family-name:var(--font-mono)] text-[11px] text-[var(--muted)]"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center gap-5 pt-1 text-[13px] text-[var(--muted)]">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--foreground)]"
            >
              demo
              <span aria-hidden="true">↗</span>
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 transition-colors hover:text-[var(--foreground)]"
            >
              GitHub
              <span aria-hidden="true">↗</span>
            </a>
          )}

          {!project.liveUrl && !project.githubUrl && (
            <span className="inline-flex items-center">Private project</span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
