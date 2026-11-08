import type { Project } from "@/components/main/project-data";
import { Badge } from "@/components/ui/badge";
import { Dot, ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export function ProjectDetails({ project }: { project: Project }) {
  return (
    <>
      <div className="mb-5">
        <div className="flex flex-wrap gap-2 mb-3">
          {project.categories.map((category) => (
            <Badge
              key={category}
              variant="secondary"
              className="rounded-md border border-gray-400/40 bg-white/40 px-2.5 py-1 text-xs font-medium text-gray-800"
            >
              {category}
            </Badge>
          ))}
        </div>
        <h3 className="text-2xl lg:text-3xl font-bold tracking-tight leading-tight mb-1 text-gray-800">
          {project.title}
        </h3>
        <p className="text-gray-600 leading-relaxed text-sm">
          {project.description}
        </p>
      </div>

      <div className="mb-6">
        <p className="text-sm font-semibold text-gray-700 mb-1">Key Features</p>
        <ul>
          {project.features.map((feature) => (
            <li
              key={feature}
              className="flex items-start gap-1 text-sm text-gray-600 leading-relaxed"
            >
              <Dot
                size={18}
                className="text-gray-800 shrink-0 mt-0.5"
              />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mb-3">
        <div className="flex flex-wrap gap-2 mb-5">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-md border border-gray-400/40 bg-white/30 px-2.5 py-1 text-xs text-gray-700"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {(project.link !== "" && project.link !== "#") ||
        (project.github !== "" && project.github !== "#") ? (
        <div className="flex flex-wrap gap-3">
          {project.link !== "" && project.link !== "#" && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
            >
              <ExternalLink size={18} className="mr-2" />
              View Live Demo
            </Link>
          )}
          {project.github !== "" && project.github !== "#" && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className={
                project.link !== "" && project.link !== "#"
                  ? "flex items-center rounded-lg border border-gray-400/50 px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-white/40"
                  : "flex items-center rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-gray-800"
              }
            >
              <Github size={18} className="mr-2" />
              View on GitHub
            </Link>
          )}
        </div>
      ) : null}
    </>
  );
}
