"use client";

import { Badge } from "@/components/ui/badge";
import { Github, Lightbulb, Target, Users } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";

const projects = [
  {
    title: "HR & Payroll Management System",
    category: "Web Application",
    description:
      "A web-based HR and payroll system for managing employee data, attendance, salary calculation, and payroll reports.",
    image:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&h=400&fit=crop",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "REST API"],
    challenge:
      "Ensuring accurate payroll calculations and structured employee data",
    solution:
      "Designed normalized database schema and modular payroll calculation logic",
    outcome:
      "Simplified HR administration and reduced manual payroll processing",
    link: "#",
    github: "https://github.com/Rovineshutabarat/tax",
  },
  {
    title: "E-Learning Platform",
    category: "Web Application",
    description:
      "An online learning platform featuring course management, user roles, progress tracking, and content delivery.",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    technologies: ["Next.js", "Express.js", "PostgreSQL", "JWT"],
    challenge: "Managing user roles and tracking learning progress efficiently",
    solution:
      "Implemented role-based access control and structured progress tracking",
    outcome: "Provided a scalable foundation for online learning activities",
    link: "",
    github: "https://github.com/Rovineshutabarat/lms",
  },
  {
    title: "Banana Ripeness Classifier",
    category: "Machine Learning",
    description:
      "A machine learning application to classify banana ripeness levels using the K-Nearest Neighbors algorithm.",
    image:
      "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=600&h=400&fit=crop",
    technologies: ["Python", "Scikit-learn", "KNN", "Flask"],
    challenge: "Extracting relevant features for accurate classification",
    solution: "Applied feature normalization and optimal K selection for KNN",
    outcome: "Achieved reliable classification accuracy on test datasets",
    link: "#",
    github: "https://github.com/Rovineshutabarat/banana-ripeness-classifier",
  },
  {
    title: "E-Commerce Platform",
    category: "Web Application",
    description:
      "An e-commerce web application with product management, shopping cart, checkout flow, and order tracking.",
    image:
      "https://wpblogassets.paytm.com/businessblog/uploads/2022/11/Blog_P4B_E-commerce-User-Experience.png",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Stripe API"],
    challenge: "Handling cart state and transaction flow securely",
    solution:
      "Implemented transactional order processing and secure payment integration",
    outcome: "Enabled end-to-end online purchasing workflow",
    link: "#",
    github: "https://github.com/Rovineshutabarat/Laravel-Food-Order-Website",
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
          <div className="w-24 h-1 bg-primary mx-auto mb-8 rounded-full shadow-[inset_4px_4px_8px_#bebebe,_inset_-4px_-4px_8px_#ffffff]" />
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
              {/* Image with neumorphic wrapper */}
              <div className={`${index % 2 === 1 ? "lg:order-2" : ""}`}>
                <div className="relative p-1 rounded-2xl bg-[#e0e0e0] shadow-[8px_8px_16px_#bebebe,_-8px_-8px_16px_#ffffff]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-80 object-cover rounded-2xl"
                  />
                </div>
              </div>

              {/* Content */}
              <div className={`${index % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="mb-6">
                  <Badge variant="secondary" className="mb-4 text-sm shadow-sm">
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
                        className="bg-[#e0e0e0] p-4 rounded-xl shadow-[inset_6px_6px_12px_#bebebe,_inset_-6px_-6px_12px_#ffffff]"
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
                        className="px-3 py-1 rounded-md bg-[#e0e0e0] text-sm shadow-[2px_2px_6px_#bebebe,_-2px_-2px_6px_#ffffff] text-gray-700"
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
                    className="px-6 py-3 rounded-xl text-gray-800 font-semibold bg-[#e0e0e0] shadow-[6px_6px_12px_#bebebe,_-6px_-6px_12px_#ffffff] hover:scale-105 transition-all duration-300 flex items-center"
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
