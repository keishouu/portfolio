"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const projects = [
  {
    title: "Lush and Local",
    description:
      "A responsive e-commerce platform designed for all screen sizes, delivering a seamless and engaging shopping experience for fresh, locally sourced products.",
    image: "/LandingPage.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://keishouu.github.io/lushnlocal/index.html",
    figmaLink:
      "https://www.figma.com/design/E8YbHhn36uEmGwCCwGBYYt/Lush---Local-prototype?t=A5iUroHF24mEE5Cs-1",
  },
  {
    title: "Pour Decisions",
    description:
      "A fully responsive, online card-based drinking game designed to fit all screen sizes, offering a fun, highly interactive, and engaging experience that can be enjoyed anytime, anywhere with friends.",
    image: "/PourDecisions.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://keishouu.github.io/pour-decision/",
    figmaLink: "https://www.figma.com/design/another-figma-file-id",
  },
  {
    title: "MISDesk",
    description:
      "An AI-enhanced online ticketing system powered by Gemini AI, designed to streamline concern reporting to MISD staff in Emilio Aguinaldo College Cavite, ensuring faster, smarter, and more efficient issue resolution.",
    image: "/MISDesk.png",
    tags: ["React", "Next.js", "SupaBase", "Tailwind CSS", "Gemini AI"],
    link: "https://eac-misd.vercel.app/",
  },
];

export default function ProjectsSection() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-2 text-center text-gray-900"
        >
          Featured Projects
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-l mb-12 text-center text-gray-900"
        >
          Here are some of my recent projects that showcase my skills in Web
          Development.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="group block relative bg-white rounded-xl overflow-hidden backdrop-blur-sm border border-gray-200 shadow-lg"
            >
              <Link
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block"
              >
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/0 to-transparent transition-transform duration-300 group-hover:scale-105" />
                </div>
              </Link>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-sm px-3 py-1 bg-blue-50 text-blue-700 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons Section */}
                <div className="flex gap-3">
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                  >
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                    View Live
                  </Link>

                  {/* Conditionally render Figma button */}
                  {project.figmaLink && (
                    <Link
                      href={project.figmaLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-colors duration-200 text-sm font-medium"
                    >
                      <svg
                        className="w-4 h-4"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M15.852 8.981h-4.588V0h4.588c2.476 0 4.49 2.014 4.49 4.49s-2.014 4.491-4.49 4.491zM12.735 7.51h3.117c1.665 0 3.019-1.355 3.019-3.019s-1.354-3.019-3.019-3.019h-3.117V7.51zm0 1.471H8.148c-2.476 0-4.49-2.015-4.49-4.491S5.672 0 8.148 0h4.588v8.981zm-4.587-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.354 3.02 3.019 3.02h3.117V1.471H8.148zm4.587 15.019H8.148c-2.476 0-4.49-2.014-4.49-4.49s2.014-4.49 4.49-4.49h4.588v8.98zM8.148 8.981c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019h3.117V8.981H8.148zM8.172 24c-2.489 0-4.515-2.014-4.515-4.49s2.014-4.49 4.49-4.49h4.588v4.441c0 2.503-2.047 4.539-4.563 4.539zm-.024-7.51c-1.665 0-3.019 1.355-3.019 3.019s1.355 3.019 3.019 3.019c1.665 0 3.019-1.355 3.019-3.019V16.49H8.148z" />
                      </svg>
                      Design
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
