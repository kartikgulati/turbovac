"use client";

import { projects } from "@/lib/site-data";
import { ProjectCard } from "./project-card";

export function ProjectsGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={project.title} {...project} index={index} />
      ))}
    </div>
  );
}
