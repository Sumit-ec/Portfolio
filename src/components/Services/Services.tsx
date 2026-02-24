"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Layout from "../HeroSection/Layout";
import { Section } from "../Section";
import {
  Code2,
  Zap,
  Brain,
  Network,
  MessageSquare,
  Rocket,
  Settings,
  Cloud
} from "lucide-react";

interface Service {
  icon: React.ElementType;
  title: string;
  description: string;
}

const services: Service[] = [
  {
    icon: Network,
    title: "Backend API Development",
    description: "Build scalable REST APIs using Node.js, Express.js, and TypeScript with clean architecture.",
  },
  {
    icon: Code2,
    title: "Frontend Development",
    description: "Craft responsive, performant UIs using React.js, Next.js, and modern CSS frameworks.",
  },
  {
    icon: Rocket,
    title: "Microservices Architecture",
    description: "Design and implement decoupled microservices with RabbitMQ for async communication.",
  },
  {
    icon: Brain,
    title: "Database Design & Optimization",
    description: "Design efficient schemas with MongoDB, PostgreSQL, and Prisma ORM. Optimize with Redis caching and indexing.",
  },
  {
    icon: Cloud,
    title: "DevOps & Containerization",
    description: "Containerize services with Docker & Docker Compose. Set up deployment pipelines and environments.",
  },
  {
    icon: Zap,
    title: "Full Stack Web Applications",
    description: "End-to-end development of modern web apps, from backend logic to polished frontend interfaces.",
  },
];

const ServiceCard = ({ service, index }: { service: Service; index: number }) => {
  const Icon = service.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative bg-white/5 border border-purple-500/30 rounded-2xl p-6 backdrop-blur-md hover:border-purple-500/60 transition-all duration-300 hover:scale-[1.02]"
    >
      {/* Icon */}
      <div className="mb-4 flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-r from-purple-500/20 to-blue-500/20 border border-purple-500/30 group-hover:from-purple-500/30 group-hover:to-blue-500/30 transition-all duration-300">
        <Icon className="w-8 h-8 text-purple-400 group-hover:text-purple-300 transition-colors" />
      </div>

      {/* Title */}
      <h3 className="text-white font-bold text-xl mb-3 group-hover:text-purple-200 transition-colors">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-gray-300 leading-relaxed text-base">
        {service.description}
      </p>

      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 rounded-2xl transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
};

export default function Services({ id }: any) {
  return (
    <Layout>
      <Section id="services">
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
              <p className="text-[#8b8bff] font-medium text-sm mb-2 mt-5">Services</p>
              <h1 className="sm:text-4xl text-2xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-white">What I</span>{" "}
                <span className="text-gray-300 font-semibold">Offer</span>
                <br />
                <span className="text-white">Full Stack,</span>{" "}
                <span className="text-gray-400 font-semibold">
                  Backend & Frontend Solutions
                </span>
              </h1>
              <p className="mt-6 text-[#cfcfcf] text-base md:text-lg max-w-2xl mx-auto">
                Comprehensive services to help your product scale with production-grade
                backend systems, modern frontends, and reliable DevOps practices.
              </p>
            </motion.div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {services.map((service, index) => (
                <ServiceCard key={service.title} service={service} index={index} />
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-center"
            >
              <Button
                onClick={() => {
                  const section = document.getElementById("contact");
                  if (section) {
                    section.scrollIntoView({ behavior: "smooth" });
                  }
                }}
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-6 rounded-xl font-semibold text-lg shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-all duration-300"
              >
                DISCUSS YOUR PROJECT
              </Button>
            </motion.div>
          </div>
        </div>
      </Section>
    </Layout>
  );
}
