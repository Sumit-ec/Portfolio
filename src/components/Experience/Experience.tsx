"use client";

import React from "react";
import { motion } from "framer-motion";
import { Briefcase, Calendar, MapPin, CheckCircle2 } from "lucide-react";
import Layout from "../HeroSection/Layout";
import { Section } from "../Section";
import { cn } from "@/lib/utils";

interface ExperienceItem {
    role: string;
    company: string;
    period: string;
    location?: string;
    points: string[];
}

const experiences: ExperienceItem[] = [
    {
        role: "Junior Web Developer",
        company: "Excellence Technologies",
        period: "May 2025 - October 2025",
        points: [
            "Built and maintained responsive web applications using modern JavaScript frameworks.",
            "Implemented reusable UI components and improved overall user experience.",
            "Optimized rendering performance and ensured cross-browser compatibility.",
            "Worked with component-driven architecture, state management, and asynchronous data flows.",
            "Enhanced workflows through testing, styling improvements, and responsive design adjustments.",
        ],
    },
    {
        role: "Assistant Consultant - Development",
        company: "Oodles Technologies",
        period: "Nov 2025 - Present",
        points: [
            "Built and maintained scalable backend services using Node.js, Express, TypeScript, MongoDB, and Prisma ORM.",
            "Improved application performance and reliability using Redis caching and MongoDB indexing strategies.",
            "Developed and deployed Solidity smart contracts, including custom fee-based logic, and tested them on Ethereum testnets.",
            "Containerized services using Docker and Docker Compose, resolving networking and deployment issues.",
            "Implemented RabbitMQ for asynchronous microservice communication and queue-based processing.",
            "Maintained technical documentation and development progress logs.",
        ],
    },
];

export function Experience() {
    return (
        <Layout>
            <Section id="experience">
                <div className="relative w-full overflow-hidden py-20">
                    <div className="relative z-10 mx-auto px-4">
                        {/* Header Section */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <p className="text-[#8b8bff] font-medium text-sm mb-2 mt-5">Career Path</p>
                            <h1 className="sm:text-4xl text-2xl md:text-5xl font-bold leading-tight mb-6">
                                <span className="text-white">Work</span>{" "}
                                <span className="text-gray-300 font-semibold">Experience</span>
                            </h1>
                            <p className="mt-4 text-[#cfcfcf] text-base md:text-lg max-w-2xl mx-auto">
                                My professional journey in software development, focusing on backend engineering,
                                scalable systems, and modern web technologies.
                            </p>
                        </motion.div>

                        {/* Experience List */}
                        <div className="max-w-4xl mx-auto space-y-8 relative">
                            {/* Vertical Line */}
                            <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-purple-500/50 via-blue-500/50 to-transparent hidden md:block" />

                            {experiences.map((exp, index) => (
                                <motion.div
                                    key={exp.company + exp.period}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className={cn(
                                        "relative flex flex-col md:flex-row gap-8 items-start md:items-center w-full",
                                        index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                                    )}
                                >
                                    {/* Timeline Dot */}
                                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 top-0 md:top-auto w-4 h-4 rounded-full bg-purple-500 border-4 border-[#09090B] z-10 hidden md:block" />

                                    {/* Period Mobile/Side */}
                                    <div className={cn(
                                        "md:w-1/2 flex items-center gap-2 text-purple-400 font-medium text-sm md:text-base",
                                        index % 2 === 0 ? "md:justify-end" : "md:justify-start"
                                    )}>
                                        <Calendar className="w-4 h-4" />
                                        <span>{exp.period}</span>
                                    </div>

                                    {/* Card */}
                                    <div className="md:w-1/2 w-full">
                                        <div className={cn(
                                            "p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-md hover:border-purple-500/30 transition-all duration-300 group",
                                            index % 2 === 0 ? "md:text-left" : "md:text-left"
                                        )}>
                                            <div className="flex items-center gap-3 mb-4">
                                                <div className="p-2 rounded-lg bg-purple-500/10 text-purple-400 group-hover:bg-purple-500/20 transition-colors">
                                                    <Briefcase className="w-5 h-5" />
                                                </div>
                                                <div>
                                                    <h3 className="text-xl font-bold text-white group-hover:text-purple-300 transition-colors">
                                                        {exp.role}
                                                    </h3>
                                                    <p className="text-gray-400 font-medium">{exp.company}</p>
                                                </div>
                                            </div>

                                            <ul className="space-y-3">
                                                {exp.points.map((point, i) => (
                                                    <li key={i} className="flex gap-3 text-sm text-gray-300 leading-relaxed">
                                                        <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0 mt-0.5" />
                                                        <span>{point}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </Section>
        </Layout>
    );
}
