"use client";

import { motion } from "framer-motion";
import { FC } from "react";
import Layout from "../HeroSection/Layout";
import { Section } from "../Section";
import Image from "next/image";
import { Code2, Zap, Brain, Award, Briefcase, Heart } from "lucide-react";

const AboutPage: FC = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Solidity",
    "React.js",
    "Next.js",
    "Node.js",
    "Express.js",
    "Redux",
    "MongoDB",
    "PostgreSQL",
    "SQL",
    "Docker",
    "RabbitMQ",
    "Prisma ORM",
    "Redis",
    "REST APIs",
    "Git",
    "Postman",
  ];

  const achievements = [
    {
      icon: Briefcase,
      title: "Backend Engineering",
      description: "Built scalable Node.js & Express services with MongoDB, PostgreSQL, and Prisma ORM",
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Implemented Redis caching & MongoDB indexing for high-throughput systems",
    },
    {
      icon: Brain,
      title: "Microservices & Messaging",
      description: "Designed RabbitMQ-based async microservice communication and Docker deployments",
    },
    {
      icon: Award,
      title: "Full Stack Development",
      description: "Delivered end-to-end web applications using React, Next.js, and Node.js",
    },
  ];

  return (
    <Layout>
      <Section id="about">
        <div className="relative min-h-screen w-full overflow-hidden py-20">
          <div className="relative z-10 mx-auto px-4">
            {/* Header Section */}
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              className="text-center mb-10"
            >
              <p className="text-[#8b8bff] font-medium text-sm mb-2 mt-3">About Me</p>
              <h1 className="sm:text-4xl text-2xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-white">Building</span>{" "}
                <span className="text-gray-300 font-semibold">scalable</span>
                <br />
                <span className="text-white">full-stack systems</span>{" "}
                <span className="text-gray-400 font-semibold">
                  with modern web technologies
                </span>
              </h1>
            </motion.div>

            {/* Main Content Grid */}
            <div className="grid md:grid-cols-2 gap-12 mb-6">
              {/* Personal Section */}
              <motion.div
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.2 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Personal</h2>
                </div>
                <div className="flex justify-center mb-6">
                  <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-purple-500/30">
                    <Image
                      src="/assets/sumit.png"
                      alt="Sumit Kumar"
                      fill
                      sizes="192px"
                      className="object-cover"
                      draggable={false}
                    />
                  </div>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I'm a Full Stack Developer who loves building systems that are reliable, scalable, and easy to maintain — from backend APIs to modern React frontends.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  Outside of coding, I enjoy exploring new technologies, contributing to open-source, and solving real-world engineering challenges with clean, efficient code.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed">
                  I believe great software is not just about features, but about performance, reliability, and real business impact.
                </p>
              </motion.div>

              {/* Professional Section */}
              <motion.div
                variants={fadeIn}
                initial="initial"
                animate="animate"
                transition={{ delay: 0.3 }}
                className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-md"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center">
                    <Briefcase className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-bold text-white">Professional</h2>
                </div>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I specialize in building production-grade backend services using Node.js, TypeScript, Express.js, and databases like MongoDB and PostgreSQL. I help teams ship reliable, scalable APIs fast.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  I've built microservices with RabbitMQ, containerized apps with Docker, implemented Redis caching, written Solidity smart contracts, and crafted modern UIs with React and Next.js.
                </p>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  My work focuses on clean architecture, performance optimization, and production-ready code — ensuring systems remain stable and maintainable at scale.
                </p>
                <div className="flex items-center gap-2 text-purple-400">
                  <Code2 className="w-4 h-4" />
                  <span className="font-semibold">Always learning, always building, always shipping.</span>
                </div>
              </motion.div>
            </div>

            {/* Skills Section */}
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.4 }}
              className="mb-16"
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Skills & Technologies
              </h2>
              <div className="flex flex-wrap gap-3 justify-center">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.05 }}
                    className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 px-6 py-3 rounded-full text-white font-medium hover:border-purple-500/60 hover:scale-105 transition-all duration-300"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Achievements Section */}
            <motion.div
              variants={fadeIn}
              initial="initial"
              animate="animate"
              transition={{ delay: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-white mb-8 text-center">
                Key Achievements
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {achievements.map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <motion.div
                      key={achievement.title}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 + index * 0.1 }}
                      className="bg-white/5 border border-white/10 rounded-xl p-6 backdrop-blur-md hover:border-purple-500/30 transition-all duration-300"
                    >
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-white mb-2">
                            {achievement.title}
                          </h3>
                          <p className="text-gray-300 leading-relaxed">
                            {achievement.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default AboutPage;
