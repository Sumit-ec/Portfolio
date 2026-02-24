"use client";
import About from "@/components/About/About";
import Faq from "@/components/FAQ/Faq";
import { Header } from "@/components/Header/Header";
import { Background } from "@/components/HeroSection/Background";
import LetsStartStartup from "@/components/LetsStartStartup/LetsStartStartup";
import { MarqueeDemo } from "@/components/Marquee/Marquee";
import Services from "@/components/Services/Services";
import WhyChooseUs from "@/components/WhyChooseUs/WhyChooseUs";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { Project } from "@/components/Projects/Project";
import ContactForm from "@/components/Contact/ContactForm";
import OpenToWorkBadge from "@/components/OpenToWorkBadge";
import { ToastContainer } from "react-toastify";
import Footer from "@/components/footer/Footer";
import Chatbot from "@/components/Chatbot/Chatbot";

const Page = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      setTheme(savedTheme);
    }
  }, []);

  useEffect(() => {
    document.body.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <motion.div className={`relative ${theme} select select-none`}>
      {/* <div className="sm:block hidden">
        <SmoothCursor />
      </div> */}
      <div>
        <Header />
        <Background id="home" />
        <About />
        <Project />
        <Services id="services" />
        <WhyChooseUs id="whyme" />
        {/* <MarqueeDemo id="reviews" /> */}
        <Faq />
        <ContactForm id="contact" />
        <LetsStartStartup />
      </div>

      <Footer />
      <OpenToWorkBadge />
      <Chatbot />
      <ToastContainer />
    </motion.div>
  );
};

export default Page;
