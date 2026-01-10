"use client";

import { Download, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-16 px-4 bg-[#e0e0e0]"
    >
      <div className="container mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-2xl sm:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 bg-clip-text text-transparent">
              Hi, I'm{" "}
              <span className="text-gray-800">Rovines Derlan Hutabarat</span>
            </h1>
            <h2 className="text-xl sm:text-2xl text-gray-600 mb-6 font-medium">
              Backend Developer Enthusiast
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8 leading-relaxed">
              I create modern, responsive web applications and enjoy writing
              clean code, improving user experience, and learning new
              technologies.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button className="px-6 py-3 rounded-xl text-gray-800 font-semibold bg-[#e0e0e0] shadow-[6px_6px_12px_#bebebe,_-6px_-6px_12px_#ffffff] hover:scale-105 transition-all duration-300 flex items-center">
              <Download className="w-4 h-4 mr-2" />
              Download CV
            </button>
            <Link
              href="#projects"
              className="px-6 py-3 rounded-xl text-gray-800 font-semibold bg-[#e0e0e0] shadow-[inset_6px_6px_12px_#bebebe,_inset_-6px_-6px_12px_#ffffff] hover:scale-105 transition-all duration-300"
            >
              View Projects
            </Link>
          </div>

          <div className="flex justify-center space-x-6">
            {[
              {
                icon: <Github className="h-6 w-6" />,
                href: "https://github.com/Rovineshutabarat",
                label: "GitHub",
              },
              {
                icon: <Linkedin className="h-6 w-6" />,
                href: "https://www.linkedin.com/in/rovines-hutabarat/",
                label: "LinkedIn",
              },
              {
                icon: <Mail className="h-6 w-6" />,
                href: "mailto:rovineshutabarat23@gmail.com",
                label: "Email",
              },
            ].map(({ icon, href, label }, idx) => (
              <Link
                key={idx}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-12 flex items-center justify-center rounded-full bg-[#e0e0e0] shadow-[6px_6px_12px_#bebebe,_-6px_-6px_12px_#ffffff] hover:scale-110 transition-all duration-300"
              >
                {icon}
                <span className="sr-only">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
