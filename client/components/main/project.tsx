"use client";

import { ProjectDetails } from "@/components/main/project-details";
import { projects } from "@/components/main/project-data";
import { ProjectImages } from "@/components/main/project-media";
import { motion } from "motion/react";

export function Project() {
  return (
    <section id="projects" className="py-16 lg:py-20 bg-[#e0e0e0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold tracking-tight mb-5 text-gray-800">
            Featured Work
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]" />
          <p className="text-gray-600 max-w-2xl mx-auto text-base">
            A selection of projects that showcase my approach to solving complex
            problems through design and development.
          </p>
        </div>

        <div className="space-y-14 lg:space-y-20 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center"
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <ProjectImages project={project} />
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <ProjectDetails project={project} />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
