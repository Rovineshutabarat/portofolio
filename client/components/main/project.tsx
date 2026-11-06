"use client";

import { Badge } from "@/components/ui/badge";
import { Github, Lightbulb, Target, Users } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const projects = [
  {
    title: "Study Box",
    category: "Web Application",
    description:
      "An online learning platform featuring course management, user roles, progress tracking, and content delivery.",
    image: "/lms.png",
    technologies: ["Next.js", "Express.js", "PostgreSQL", "JWT"],
    portrait: false,
    challenge: "Managing user roles and tracking learning progress efficiently",
    solution:
      "Implemented role-based access control and structured progress tracking",
    outcome: "Provided a scalable foundation for online learning activities",
    link: "",
    github: "https://github.com/Rovineshutabarat/e-course",
  },
  {
    title: "AnemiScan",
    category: "Mobile Application",
    description:
      "A mobile application for anemia screening used by Puskesmas officers, featuring patient screening, lab result verification, and data synchronization.",
    image: "/anemiscan.jpeg",
    technologies: ["Flutter", "Dart", "REST API"],
    portrait: true,
    challenge:
      "Supporting accurate screening records and lab verification in the field",
    solution:
      "Built a mobile workflow with screening status tracking and end-of-shift data sync",
    outcome:
      "Streamlined anemia screening and data collection for Puskesmas officers",
    link: "",
    github: "#",
  },
  {
    title: "PLN ULP Medan Baru Visitor Registration",
    category: "Web Application",
    description:
      "An official visit registration system for PLN ULP Medan Baru, enabling customers to register visits and check their status online.",
    image: "/pln.png",
    technologies: ["Laravel", "Blade", "Tailwind CSS", "MySQL"],
    portrait: false,
    challenge:
      "Digitizing the visitor registration process for an electricity service office",
    solution:
      "Built a structured online registration and status-checking workflow",
    outcome: "Made customer visits more organized and easier to track",
    link: "",
    github: "https://github.com/Rovineshutabarat/web-kunjungan-pln-medan-baru",
  },
  {
    title: "Banana Ripeness Classifier",
    category: "Machine Learning",
    description:
      "A machine learning application to classify banana ripeness levels using the K-Nearest Neighbors algorithm.",
    image:
      "https://github.com/Rovineshutabarat/banana-ripeness-classifier/raw/main/client/public/preview.png",
    technologies: ["Python", "Scikit-learn", "KNN", "Flask"],
    portrait: false,
    challenge: "Extracting relevant features for accurate classification",
    solution: "Applied feature normalization and optimal K selection for KNN",
    outcome: "Achieved reliable classification accuracy on test datasets",
    link: "#",
    github: "https://github.com/Rovineshutabarat/banana-ripeness-classifier",
  },
];

export function Project() {
  return (
    <section id="projects" className="py-24 bg-[#e0e0e0]">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-800">
            Featured Work
          </h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full shadow-[inset_4px_4px_8px_#bebebe,inset_-4px_-4px_8px_#ffffff]" />
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            A selection of projects that showcase my approach to solving complex
            problems through design and development.
          </p>
        </div>

        <div className="space-y-24 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="grid lg:grid-cols-2 gap-12 items-center"
            >
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div
                  className={`relative p-1 rounded-2xl bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,-8px_-8px_16px_#ffffff] ${
                    project.portrait ? "w-fit mx-auto" : ""
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className={`rounded-2xl ${
                      project.portrait ? "h-[420px] w-auto" : "w-full h-auto"
                    }`}
                  />
                </div>
              </div>

              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="mb-6">
                  <Badge
                    variant="secondary"
                    className="px-3 py-1 rounded-md mb-4 bg-[#e0e0e0] text-sm shadow-[2px_2px_6px_#bebebe,-2px_-2px_6px_#ffffff] text-gray-700"
                  >
                    {project.category}
                  </Badge>
                  <h3 className="text-3xl font-bold mb-4 text-gray-800">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                    {project.description}
                  </p>
                </div>

                <div className="mb-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                    {[
                      {
                        icon: (
                          <Target size={18} className="text-primary mr-2" />
                        ),
                        label: "Challenge",
                        text: project.challenge,
                      },
                      {
                        icon: (
                          <Lightbulb size={18} className="text-primary mr-2" />
                        ),
                        label: "Solution",
                        text: project.solution,
                      },
                      {
                        icon: <Users size={18} className="text-primary mr-2" />,
                        label: "Outcome",
                        text: project.outcome,
                      },
                    ].map(({ icon, label, text }, idx) => (
                      <div
                        key={idx}
                        className="bg-[#e0e0e0] p-4 rounded-xl shadow-[inset_6px_6px_12px_#bebebe,inset_-6px_-6px_12px_#ffffff]"
                      >
                        <div className="flex items-center mb-3">
                          {icon}
                          <span className="font-semibold text-gray-700">
                            {label}
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed">
                          {text}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-8">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 rounded-md bg-[#e0e0e0] text-sm shadow-[2px_2px_6px_#bebebe,-2px_-2px_6px_#ffffff] text-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4">
                  <Link
                    href={project.github}
                    target="_blank"
                    className="px-6 py-3 rounded-xl text-gray-800 font-semibold bg-[#e0e0e0] shadow-[6px_6px_12px_#bebebe,-6px_-6px_12px_#ffffff] hover:scale-105 transition-all duration-300 flex items-center"
                  >
                    <Github size={18} className="mr-2" />
                    View on GitHub
                  </Link>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
