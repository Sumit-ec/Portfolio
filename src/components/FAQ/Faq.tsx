"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Mail, Phone, Linkedin } from "lucide-react";
import Layout from "../HeroSection/Layout";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "What do you specialize in?",
    answer:
      "I specialize in full stack development with a strong backend focus. My core areas include Node.js API development, React frontend engineering, TypeScript, microservices, database design (MongoDB, PostgreSQL), and DevOps with Docker.",
  },
  {
    question: "What technologies do you work with?",
    answer:
      "Node.js, Express.js, React.js, Next.js, TypeScript, MongoDB, PostgreSQL, Prisma ORM, Redis, RabbitMQ, Docker, Git, REST APIs, Solidity, Redux, and Postman.",
  },
  {
    question: "Do you have real professional experience?",
    answer:
      "Yes. I'm currently working as an Assistant Consultant - Development at Oodles Technologies (Nov 2025–Present), and previously as a Junior Web Developer at Excellence Technologies (May 2025–Oct 2025). I've built production-grade APIs, microservices, and full stack applications.",
  },
  {
    question: "What kind of projects have you built?",
    answer:
      "Microservices-based blogging platforms (Blogify), scalable REST APIs with JWT authentication, Redis caching pipelines, RabbitMQ event-driven systems, responsive React frontends, and Solidity smart contracts.",
  },
  {
    question: "Do you build full stack systems end-to-end?",
    answer:
      "Yes. I handle backend API design, frontend development, database modeling, containerization with Docker, and deployment pipelines — delivering complete, production-ready solutions.",
  },
  {
    question: "Can you integrate third-party services and APIs?",
    answer:
      "Absolutely. I have experience integrating REST APIs, payment gateways, OAuth services, and building custom middleware for third-party platform communication.",
  },
  {
    question: "Can you deploy and containerize applications?",
    answer:
      "Yes. I use Docker & Docker Compose to containerize services including Node.js APIs, databases (MongoDB, PostgreSQL), Redis, and RabbitMQ for consistent, reproducible deployments.",
  },
  {
    question: "Are you open to full-time roles?",
    answer:
      "Yes, I'm actively open to full-time opportunities as a Full Stack Developer, Backend Developer, or Node.js/React Developer.",
  },
  {
    question: "What is your educational background?",
    answer:
      "I completed my Bachelor's in Electronics and Communication Engineering from JSS Academy of Technical Education (2020–2024) with a CGPA of 7.70. I also hold a React JS Udemy certification and an IBM NodeJS Certification.",
  },
  {
    question: "How can someone contact or hire you?",
    answer:
      "📩 k.sumit.ec@gmail.com\n📞 +91 7783873885\n🔗 https://linkedin.com/in/sumit-kumar-669a8021b",
  },
];


export default function Faq() {
  const leftFaqs = faqData.slice(0, 5);
  const rightFaqs = faqData.slice(5);

  return (
    <Layout>
      <div className="flex items-center justify-center">
        <div className="w-full rounded-2xl shadow-xl overflow-hidden">
          <section className="mb-5 text-center">
            <p className="text-[#8b8bff] font-medium text-sm mb-4">FAQs</p>

            <h1 className="sm:text-4xl text-2xl md:text-5xl leading-tight mb-4">
              <span className="bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                Questions? We have answers.
              </span>
            </h1>
          </section>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              {leftFaqs.map((item, index) => (
                <FAQItem key={index} item={item} index={index} />
              ))}
            </div>
            <div>
              {rightFaqs.map((item, index) => (
                <FAQItem key={index + 3} item={item} index={index + 3} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

function FAQItem({ item, index }: { item: FAQItem; index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mb-4 last:mb-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex justify-between items-center w-full text-left p-4 rounded-t-lg backdrop-blur-md bg-white bg-opacity-10 transition-colors duration-300 text-xl"
      >
        <span className="sm:text-lg text-m font-normal text-white">
          {item.question}
        </span>
        <motion.span>
          <ChevronDown className="w-6 h-6 text-gray-400" />
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            {item.question.includes("How can someone contact or hire you?") ? (
              <div className="p-4 bg-white bg-opacity-10 rounded-b-lg text-white space-y-3">
                <a
                  href="mailto:k.sumit.ec@gmail.com"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Mail className="w-5 h-3" />
                  <span>k.sumit.ec@gmail.com</span>
                </a>
                <a
                  href="tel:+917783873885"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Phone className="w-5 h-3" />
                  <span>+91 7783873885</span>
                </a>
                <a
                  href="https://linkedin.com/in/sumit-kumar-669a8021b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors"
                >
                  <Linkedin className="w-5 h-3" />
                  <span>LinkedIn</span>
                </a>
              </div>
            ) : (
              <p className="p-4 text-white bg-white bg-opacity-10 rounded-b-lg md:text-lg whitespace-pre-line">
                {item.answer}
              </p>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
