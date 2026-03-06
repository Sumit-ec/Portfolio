"use client";
import React, { useState, useEffect } from "react";
import { Menu as NavMenu } from "../ui/navbar-menu";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { BsTelephone } from "react-icons/bs";
import { Menu as MenuIcon, X, Download } from "lucide-react";

export function Header({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  // Close mobile menu when clicking outside or on escape
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMenuOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".mobile-menu-container")) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Experience", id: "experience" },
    { name: "Projects", id: "projects" },
    { name: "Services", id: "services" },
    { name: "Why me ?", id: "whyme" },
    // { name: "Reviews", id: "reviews" },
    { name: "Contact", id: "contact" },
  ];

  return (
    <>
      <div
        className={cn(
          "fixed md:top-5 top-0 inset-x-0 max-w-[1350px] mx-auto z-50 md:px-2",
          className
        )}
      >
        <NavMenu setActive={setActive}>
          <div className="flex justify-between items-center w-full">
            {/* Logo */}
            <div
              onClick={() => {
                const section = document.getElementById("home");
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" });
                }
              }}
              className="text-xl font-bold text-white logo"
            >
              sumit.dev
            </div>

            {/* Desktop Links */}
            <div className="hidden md:flex items-center lg:space-x-8 space-x-4">
              {navItems.map((item, index) => (
                <a
                  key={item.name}
                  className="text-white hover:text-purple-300 cursor-pointer transition-colors duration-300 relative group"
                  onClick={() => {
                    const section = document.getElementById(item.id);
                    if (section) {
                      section.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>

            {/* Desktop Resume + Connect Buttons */}
            <div className="hidden md:flex items-center gap-3">
              {/* Download Resume */}
              <a
                href="/resume/Sumit__Resume.pdf"
                download="Sumit__Resume.pdf"
                className="flex items-center space-x-2 px-4 py-2 rounded-full border border-gray-600/50 text-gray-300 hover:text-white hover:border-purple-400/60 hover:bg-purple-500/10 transition-all duration-300 text-sm font-medium"
              >
                <Download className="w-4 h-4" />
                <span>Resume</span>
              </a>

              {/* Connect Button */}
              <a href="tel:+917783873885">
                <HoverBorderGradient
                  containerClassName="rounded-full"
                  as="div"
                  className="bg-[#2d2d54] text-white px-6 py-3 flex items-center space-x-2 hover:bg-[#3d3d74] transition duration-300 text-sm font-medium"
                >
                  <BsTelephone className="w-4 h-4" />
                  <span>Connect</span>
                </HoverBorderGradient>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <motion.div
              className="md:hidden mobile-menu-container"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.3 }}
            >
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
                aria-label="Toggle menu"
                aria-expanded={isMenuOpen}
              >
                <motion.div
                  animate={{ rotate: isMenuOpen ? 90 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {isMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
                </motion.div>
              </button>
            </motion.div>
          </div>
        </NavMenu>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.div
              className="fixed inset-0 bg-transparent backdrop-blur-2xl z-40 md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsMenuOpen(false)}
            />

            {/* Mobile Menu with your site's styling */}
            <motion.div
              className="fixed top-20 left-4 right-4 backdrop-blur-xl rounded-2xl p-2 space-y-2 z-50 md:hidden border border-purple-500/20 shadow-2xl mobile-menu-container"
              initial={{ opacity: 0, scale: 0.9, y: -30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: -30 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {/* Mobile Navigation Items */}
              <div className="space-y-2">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.name}
                    className="block text-white hover:text-purple-400 cursor-pointer transition-all duration-300 text-lg py-1 px-6 rounded-xl hover:bg-purple-500/10 hover:backdrop-blur-sm border border-transparent hover:border-purple-500/20 group"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index, duration: 0.3 }}
                    onClick={() => {
                      const section = document.getElementById(item.id);
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                      setIsMenuOpen(false);
                    }}
                  >
                    <span className="relative">
                      {item.name}
                      <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-400 to-blue-500 transition-all duration-300 group-hover:w-full"></span>
                    </span>
                  </motion.a>
                ))}
              </div>

              {/* Divider */}
              <div className="h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>
              {/* Mobile Connect Button */}

              {/* Mobile Download Resume Button */}
              <a
                href="/resume/Sumit__Resume.pdf"
                download="Sumit__Resume.pdf"
                onClick={() => setIsMenuOpen(false)}
              >
                <HoverBorderGradient
                  containerClassName="rounded-full w-full"
                  as="button"
                  className="bg-gray-800/60 w-full justify-center text-white px-6 py-3 flex items-center space-x-2 hover:bg-gray-700/60 transition duration-300 text-base font-medium"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Resume</span>
                </HoverBorderGradient>
              </a>

              {/* Mobile Connect Button */}
              <a href="tel:+917783873885">
                <HoverBorderGradient
                  containerClassName="rounded-full w-full"
                  as="button"
                  className="bg-[#2d2d54] w-full justify-center text-white px-6 py-3 flex items-center space-x-2 hover:bg-[#3d3d74] transition duration-300 text-base font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <BsTelephone className="w-4 h-4" />
                  <span>Connect</span>
                </HoverBorderGradient>
              </a>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
