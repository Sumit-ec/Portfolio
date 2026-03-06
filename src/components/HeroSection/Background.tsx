import React from "react";
import { motion } from "framer-motion";
import Layout from "./Layout";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { ArrowUpRight, Download } from "lucide-react";
import HeroUp from "../../../public/assets/hero-up.svg";
import HeroDown from "../../../public/assets/hero-down.svg";
import Image from "next/image";
import LottiePlayer from "../LottiePlayer";
import animationData from "../../../public/lottie/star-magic.json";
import { CompanyList } from "../companiess/CompanyList";
import { Section } from "../Section";
import { AnimatedGradientTextDemo } from "../magicui/AnimatedGradientTextDemo";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export function Background(id?: any) {
  return (
    <Section id="home">
      <div className="w-full bg-grid-gray-100/[0.05] relative overflow-hidden px-2">
        {/* Top Blur SVG */}
        <div className="absolute top-0 left-0 select-none z-10">
          <Image
            src={HeroUp}
            alt=""
            width={100}
            height={100}
            draggable={false}
            className="w-full h-40 blur-3xl md:opacity-50  select-none "
          />
        </div>

        {/* Radial Mask Background */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-[#09090B]/100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] z-0" />

        <Layout>
          <div className="relative z-20 py-20 sm:mt-16 mt-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-center md:gap-5 gap-6"
            >
              {/* Tagline */}
              {/* <motion.h4
                variants={fadeUp}
                className="bg-white/5 border border-white/10 sm:text-sm text-xs md:px-4 px-3 py-1.5 rounded-full text-gray-300 backdrop-blur-md logo md:tracking-wide text-center"
              >
                {`sumit.dev – Your Full-Stack Partner`}
              </motion.h4> */}
              <motion.div variants={fadeUp}>
                <AnimatedGradientTextDemo />
              </motion.div>

              {/* Hero Heading */}
              <motion.h1
                variants={fadeUp}
                className="text-4xl sm:text-5xl md:text-6xl text-white text-center"
              >
                Building{" "}
                <span className="text-[#8b8bff]">Scalable Backend Systems</span>, APIs &{" "}
                <span className="text-[#8b8bff]">Modern Web Apps</span>
                <br />
                <span className="leading-tight tracking-tight text-gray-300 text-xl sm:text-2xl block mt-3">
                  Full Stack Developer • Node.js & React • TypeScript & Next.js
                </span>
              </motion.h1>

              {/* Paragraph */}
              <motion.p
                variants={fadeUp}
                className="text-base sm:text-lg text-gray-400 max-w-2xl text-center"
              >
                I build scalable backend services and modern frontend applications
                using Node.js, React, Next.js, and TypeScript. From REST APIs to
                microservices — I deliver production-ready full-stack solutions.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                variants={fadeUp}
                className="flex flex-col items-center gap-3"
              >
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {/* Primary CTA */}
                  <HoverBorderGradient
                    containerClassName="rounded-full"
                    as="button"
                    className="bg-[#2d2d54] text-white px-5 py-2.5 flex items-center space-x-2 hover:bg-[#3d3d74] transition duration-300"
                    onClick={() => {
                      const section = document.getElementById("contact");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                  >
                    <span className="font-medium">Let's Build Scalable Systems</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </HoverBorderGradient>

                  {/* Download Resume Button */}
                  <a
                    href="/resume/Sumit__Resume.pdf"
                    download="Sumit__Resume.pdf"
                    className="flex items-center space-x-2 px-5 py-2.5 rounded-full border border-gray-600/50 text-gray-300 hover:text-white hover:border-purple-400/60 hover:bg-purple-500/10 transition-all duration-300 font-medium text-sm"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download Resume</span>
                  </a>
                </div>

                {/* Footer Text */}
                <motion.span
                  variants={fadeUp}
                  className="text-gray-500 text-sm"
                >
                  Open to full-time roles.
                </motion.span>
              </motion.div>
            </motion.div>
          </div>
        </Layout>

        {/* Bottom Blur SVG */}
        <div className="absolute sm:bottom-[70px] bottom-[60px] right-0 select-none">
          <Image
            src={HeroDown}
            alt=""
            width={100}
            height={100}
            draggable={false}
            className="w-full h-32 blur-3xl md:opacity-50 select-none"
          />
        </div>

        {/* Company Logos */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="md:-mt-14 -mt-20 px-5 md:mb-10"
        >
          <CompanyList />
        </motion.div>
      </div>
    </Section>
  );
}
