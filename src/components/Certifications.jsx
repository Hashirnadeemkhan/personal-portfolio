"use client"

import { motion } from "framer-motion"
import { ExternalLink } from "lucide-react"

const CERTIFICATIONS = [
  {
    year: "2025",
    title: "Google AI Essentials",
    issuer: "Google",
    description:
      "Gained foundational knowledge in artificial intelligence and its applications, covering key AI concepts and practical implementations.",
    status: "Completed",
    link: "https://www.coursera.org/account/accomplishments/verify/QODA76XTZPYQ",
  },
  {
    year: "2025",
    title: "Google Prompting Essentials",
    issuer: "Google",
    description:
      "Mastered techniques for effective prompt engineering with Large Language Models (LLMs) and AI systems.",
    status: "Completed",
    link: "https://coursera.org/share/cc90b2f8cc6b890169b3414aa6814375",
  },
  {
    year: "Ongoing",
    title: "Agentic & Robotics AI Engineer with Cloud Technologies",
    issuer: "Governor House (GIAIC)",
    description:
      "Advanced program focusing on agentic AI development, robotics integration, and cloud-based AI solutions.",
    status: "In Progress",
  },
]

const Certifications = () => {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h2
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center text-4xl"
      >
        Certifications
      </motion.h2>
      <div>
        {CERTIFICATIONS.map((cert, index) => (
          <div key={index} className="mb-8 flex flex-wrap lg:justify-center">
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              className="w-full lg:w-1/4"
            >
              <p className="mb-2 text-sm text-neutral-400">{cert.year}</p>
              <span
                className={`inline-block rounded px-2 py-1 text-xs font-medium ${
                  cert.status === "Completed" ? "bg-green-900 text-green-300" : "bg-blue-900 text-blue-300"
                }`}
              >
                {cert.status}
              </span>
            </motion.div>
            <motion.div
              whileInView={{ opacity: 1, x: 0 }}
              initial={{ opacity: 0, x: 100 }}
              transition={{ duration: 1 }}
              className="w-full max-w-xl lg:w-3/4"
            >
              <h6 className="mb-2 font-semibold">
                {cert.title} -<span className="text-sm text-purple-100"> {cert.issuer}</span>
              </h6>
              <p className="mb-4 text-neutral-400">{cert.description}</p>
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-800 bg-neutral-900 px-4 py-2 text-sm text-neutral-300 transition-colors hover:bg-neutral-800 hover:text-white"
                >
                  <ExternalLink size={16} />
                  View Certificate
                </a>
              )}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certifications
