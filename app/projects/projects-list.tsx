"use client";

import { motion } from "motion/react";
import { ProjectCard, Project } from "@/components/project-card";

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

export function ProjectsList({ projects }: { projects: Project[] }) {
  return (
    <motion.div
      initial="hidden"
      animate="show"
      className="overflow-hidden border border-(--line)"
    >
      <div className="px-3 py-8">
        <motion.div variants={headerItem} className="mb-3">
          <h1 className="text-4xl font-medium tracking-tight text-(--foreground) sm:text-5xl font-(family-name:--font-funnel)">
            Projects
          </h1>
        </motion.div>

        <motion.div variants={headerItem}>
          <p className="max-w-[640px] text-[0.95rem] leading-7 text-(--muted)">
            Selected systems and tools, written up with a little more
            structure and less noise.
          </p>
        </motion.div>
      </div>

      <motion.div variants={headerItem} className="my-10 divider" />

      {projects.map((project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
    </motion.div>
  );
}