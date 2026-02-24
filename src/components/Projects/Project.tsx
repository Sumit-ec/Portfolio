"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ExternalLink, Github, Code2, X, Check } from "lucide-react";
import Layout from "../HeroSection/Layout";
import { Section } from "../Section";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

// Project data structure
interface ProjectDetail {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tags: string[];
  role: string;
  platform: string;
  impact: string;
  overview: string;
  workflowStats?: {
    totalNodes?: string;
    aiAnalysis?: string;
    database?: string;
  };
  architecture?: string[];
  workflowBreakdown?: {
    title: string;
    nodeCount?: string;
    description: string;
    features: string[];
  }[];
  technicalHighlights?: string[];
  keySkills?: string[];
  whyItMatters?: string[];
  techStack: string[];
  demoLink?: string;
  githubLink?: string;
}

const projects: ProjectDetail[] = [
  {
    title: "Smart Bookmark Manager",
    subtitle: "Full-Stack SaaS App • Real-Time • 72-Hour Hackathon Build",
    description:
      "Production-ready real-time bookmark management SaaS built in 72 hours with Google OAuth, per-user RLS, and live cross-tab synchronization via PostgreSQL Realtime WebSockets.",
    image: "/assets/projectsImages/SmartBookmark.png",
    tags: [
      "Next.js 15",
      "Supabase",
      "TypeScript",
      "Google OAuth",
      "PostgreSQL",
      "Tailwind CSS v4",
      "Realtime WebSockets",
      "Vercel",
    ],
    role: "Full-Stack Developer",
    platform: "Next.js 15 + Supabase + TypeScript + Vercel",
    impact: "Built in 72 hrs • Real-time sync across tabs • Row-Level Security per user",
    overview:
      "Smart Bookmark Manager is a production-ready, real-time bookmark management SaaS application built in 72 hours as a technical hackathon challenge. It supports Google OAuth authentication, per-user private cloud storage secured by Supabase Row Level Security (RLS), and real-time synchronization using PostgreSQL Realtime WebSockets — so changes sync instantly across all open tabs without a page refresh. The app supports full CRUD operations with a smooth 'Smart Edit' UX pattern and a custom Tailwind CSS confirmation modal for deletions.",
    workflowStats: {
      totalNodes: "Google OAuth (Supabase)",
      aiAnalysis: "WebSocket Pub/Sub",
      database: "PostgreSQL (Supabase RLS)",
    },
    architecture: [
      "Next.js 15 App Router (React + Tailwind CSS v4)",
      "└── Supabase Backend-as-a-Service",
      "    ├── Auth — Google OAuth (Session Management)",
      "    ├── Database — PostgreSQL with Row Level Security",
      "    ├── Realtime — WebSocket Pub/Sub (supabase_realtime)",
      "    └── API — Supabase JS Client (server + client components)",
    ],
    workflowBreakdown: [
      {
        title: "Authentication & Per-User Security",
        nodeCount: "Google OAuth + RLS",
        description:
          "Secure, zero-password login via Google OAuth with strict per-user data isolation enforced at the database level using Supabase Row Level Security.",
        features: [
          "Google OAuth — no passwords required",
          "Row Level Security (RLS) — User A cannot see User B's data",
          "Session management via Supabase Auth",
          "Global onAuthStateChange listener for instant logout UI clear",
        ],
      },
      {
        title: "Real-Time Synchronization",
        nodeCount: "PostgreSQL Realtime WebSockets",
        description:
          "Changes to bookmarks sync instantly across all open browser tabs using PostgreSQL Realtime pub/sub, without any manual refresh.",
        features: [
          "supabase_realtime publication created via SQL",
          "REPLICA IDENTITY FULL set on bookmarks table",
          "Delete events trigger live UI updates across all tabs",
          "WebSocket channel subscription with automatic cleanup",
        ],
      },
      {
        title: "CRUD & Smart UX Patterns",
        nodeCount: "4 operations + 2 UX patterns",
        description:
          "Full CRUD operations with a smooth Smart Edit mode and a custom confirmation modal for deletions, following advanced React state patterns.",
        features: [
          "Add, View, Edit, Delete bookmarks",
          "Key Prop Pattern — form resets on editingId change (no useEffect)",
          "Custom Tailwind CSS confirmation modal for deletes",
          "Smooth-scroll to edit form on 'Edit' click",
        ],
      },
    ],
    technicalHighlights: [
      "Google OAuth with Supabase Auth — zero passwords",
      "Row Level Security (RLS) — strict per-user data isolation",
      "PostgreSQL Realtime WebSockets — live cross-tab sync",
      "Key Prop Pattern for form state reset — eliminates cascading re-renders",
      "onAuthStateChange global listener — instant post-logout UI clear",
      "supabase_realtime publication + REPLICA IDENTITY FULL — delete event support",
    ],
    keySkills: [
      "Next.js App Router",
      "Supabase Auth & RLS",
      "Real-time architecture",
      "TypeScript",
      "Full-stack development",
      "OAuth integrations",
      "Performance optimization",
    ],
    whyItMatters: [
      "Built a complete production SaaS app solo in 72 hours",
      "Demonstrates deep Supabase internals (RLS, Realtime, Auth)",
      "Shows debugging skills — solved hydration, WebSocket, and state-sync issues",
      "Proves ability to architect secure, multi-user real-time systems",
    ],
    techStack: [
      "Next.js 15",
      "TypeScript",
      "Supabase",
      "PostgreSQL",
      "Tailwind CSS v4",
      "Google OAuth",
      "Vercel",
    ],
    githubLink: "https://github.com/Sumit-ec/smart-bookmark-app",
  },

  {
    title: "Telegram Joke Bot 🤖",
    subtitle: "Automated Humor Delivery • Real-time Cron Scheduling • User-Centric Customization",
    description:
      "A scalable and robust Telegram bot engineered to deliver automated humor at scale. Built with a Node.js backend and MongoDB Atlas for high-availability persistence, the bot features a sophisticated cron-based scheduling engine.",
    image: "/assets/projectsImages/telegram_joke_bot.png",
    tags: ["Node.js", "Express", "MongoDB Atlas", "Telegram Bot API", "node-cron", "Axios", "Git"],
    role: "Backend Bot Architect",
    platform: "Node.js + Express + MongoDB Atlas",
    impact: "Automated High-Engagement Humor System",
    overview:
      "A scalable and robust Telegram bot engineered to deliver automated humor at scale. Built with a Node.js backend and MongoDB Atlas for high-availability persistence, the bot features a sophisticated cron-based scheduling engine. It empowers users with full control over their experience, allowing them to calibrate delivery frequencies and toggle bot activity in real-time through an intuitive slash-command interface.",

    workflowStats: {
      totalNodes: "4+ Core Service Modules",
      aiAnalysis: "Dynamic Scheduling & State Management",
      database: "MongoDB Atlas (User Preferences)",
    },

    architecture: [
      "Telegram Client",
      "└── Node.js Backend Engine",
      "    ├── Bot Interface (node-telegram-bot-api)",
      "    ├── State Persistence (MongoDB Atlas)",
      "    ├── Task Scheduler (node-cron)",
      "    ├── Humor Service (Official Joke API)",
      "    └── Global Error Handler",
    ],

    workflowBreakdown: [
      {
        title: "User Lifecycle & State Persistence",
        nodeCount: "4-6 modules",
        description:
          "Ensures persistent sessions and preference tracking across bot restarts.",
        features: [
          "Unique ChatID-based session initialization and validation",
          "Persistent storage of personalized delivery intervals",
          "Real-time global state tracking (Enabled/Disabled toggles)",
          "Secure multi-environment configuration via .env",
        ],
      },
      {
        title: "Intelligent Automated Scheduling",
        nodeCount: "3-5 modules",
        description:
          "Optimized cron-runner that handles delivery logic without per-user server overhead.",
        features: [
          "Minute-level precision global cron scheduling",
          "Delta-time algorithm for personalized delivery windows",
          "Resource-efficient polling for Joke API delivery",
          "Self-healing mechanism for interrupted delivery tasks",
        ],
      },
      {
        title: "Command Suite & Interaction",
        nodeCount: "2-4 modules",
        description:
          "Clean, slash-command driven interface for zero-friction user control.",
        features: [
          "/set <n>: Dynamic frequency calibration logic",
          "/enable & /disable: Instant activity toggles with immediate state sync",
          "Markdown-v2 response parsing for a premium UI/UX",
          "Context-aware help menus and intelligent error feedback",
        ],
      },
    ],

    technicalHighlights: [
      "Cloud-Native Architecture: Integrated with MongoDB Atlas for reliable data clusters",
      "Efficient Cron Scheduling: Event-driven logic replaces costly per-user timers",
      "Modular Design: Service-oriented file structure for clean maintenance and scaling",
      "External API Integration: Seamless microservice handshake for dynamic content",
      "Stateful Resilience: Stateless bot logic paired with reliable stateful persistence",
      "Performance Optimized: Lightweight memory footprint for low-cost cloud deployment",
    ],

    keySkills: [
      "Bot Development",
      "Backend Architecture",
      "Asynchronous Task Scheduling",
      "NoSQL Database Orchestration",
      "API Integration",
      "Stateful UI Interaction",
    ],

    whyItMatters: [
      "Mastery of Engagement Loops: Demonstrates building tools that keep users coming back",
      "Async Task Proficiency: Shows deep understanding of managing complex task queues",
      "Industry-Standard Code: Highlights a clean, modular, and professional backend structure",
      "Cloud Infrastructure: Proves capability in deploying and managing production-ready cloud services",
    ],

    techStack: [
      "Node.js",
      "Express",
      "MongoDB Atlas",
      "Telegram Bot API",
      "node-cron",
      "Axios",
      "Git",
    ],
  },

  {
    title: "🎬 Netflix Clone",
    subtitle: "Movie Streaming UI • TMDB API Integration • Trailer Playback • Responsive Design",
    description:
      "A high-fidelity Netflix clone built with React, featuring dynamic content fetching from the TMDB (The Movie Database) API. The application provides a seamless, immersive browsing experience with categorized movie rows, a dynamic hero banner with auto-refreshing content, and integrated YouTube trailer playback upon interaction.",
    image: "/assets/projectsImages/netflix_clone.png",
    tags: ["React.js", "Axios", "TMDB API", "CSS3", "Firebase", "React-YouTube", "Git"],
    role: "Frontend Developer / UI Engineer",
    platform: "React + TMDB API + Firebase Hosting",
    impact: "Created a high-performance, enterprise-grade streaming interface with real-time data synchronization.",
    overview:
      "A high-fidelity Netflix clone built with React, featuring dynamic content fetching from the TMDB (The Movie Database) API. The application provides a seamless, immersive browsing experience with categorized movie rows, a dynamic hero banner with auto-refreshing content, and integrated YouTube trailer playback upon interaction.",

    workflowStats: {
      totalNodes: "Component-Driven Design",
      aiAnalysis: "TMDB API (RESTful)",
      database: "Youtube Video Orchestration",
    },

    architecture: [
      "React Functional Components (Modular UI structure)",
      "└── TMDB REST API Layer (Real-time data synchronization)",
      "    ├── Dynamic Data Fetching (Custom Axios configuration)",
      "    ├── Trailer Search Engine (movie-trailer integration)",
      "    ├── Multimedia Playback (react-youtube player)",
      "    └── State Management (Efficient use of useState & useEffect)",
    ],

    workflowBreakdown: [
      {
        title: "Dynamic Content Orchestration",
        nodeCount: "3-4 modules",
        description:
          "Fetches real-time movie data across 8+ curated categories (Trending, Netflix Originals, Top Rated, Action, etc.).",
        features: [
          "Implements specialized endpoint handling for different media types (TV Shows vs. Movies)",
          "Manages asynchronous state transitions for smooth data loading",
          "Real-time content synchronization via TMDB API endpoints",
        ],
      },
      {
        title: "Immersive UI/UX Design",
        nodeCount: "2-3 modules",
        description:
          "High-fidelity replica with smooth animations and dynamic featured content.",
        features: [
          "Hero Banner: Randomly selects featured content on every refresh",
          "Sticky Navigation: Scroll-aware transparency for a premium feel",
          "Row Interactions: CSS hardware-accelerated hover effects and scaling",
        ],
      },
      {
        title: "Multimedia Integration",
        nodeCount: "2 modules",
        description:
          "Dynamic resolve of YouTube IDs for trailer playback.",
        features: [
          "Leverages movie-trailer logic to resolve YouTube IDs dynamically",
          "Overlay video player toggles without disrupting scroll position",
          "Stateless playback management for performance",
        ],
      },
    ],

    technicalHighlights: [
      "REST API Integration: Real-time synchronization of thousands of movie titles",
      "Dynamic Image Rendering: Backdrop and poster paths for optimized hierarchy",
      "Conditional Rendering: Advanced logic for large-format vs. standard rows",
      "Responsive Grid: Fully fluid layout using CSS Flexbox and Grid",
      "API Security: Centralized endpoint configuration for secure API key management",
    ],

    keySkills: [
      "React.js Development",
      "REST API Integration",
      "Modern CSS (Flex/Grid)",
      "Asynchronous JavaScript",
      "Component-Driven Architecture",
      "Frontend Performance Tuning",
    ],

    whyItMatters: [
      "Complex UI Replication: High-fidelity replica of industry-leading platform",
      "Real-world API Usage: Proficient in handling live data and 3rd-party integrations",
      "Interactive Multimedia: Capability in managing complex video states",
      "Professional State Logic: Efficient use of React Hooks for data-heavy apps",
    ],

    techStack: [
      "React.js",
      "Axios",
      "TMDB API",
      "CSS3",
      "Firebase",
      "React-YouTube",
      "Git",
    ],
  },

  {
    title: "LLM Article Summarizer",
    subtitle: "AI Content Analysis • Article Management • Role-Based Access • Smart Summarization",
    description:
      "A production-ready AI Knowledge Hub supporting efficient article management, intelligent summarization using OpenAI GPT-3.5, and strict role-based access control.",
    image: "/assets/projectsImages/llm-article-summerizer.png",
    tags: ["Node.js", "Express", "MongoDB", "Next.js", "OpenAI", "JWT", "Docker", "Git"],
    role: "Full Stack Developer / AI Integration Engineer",
    platform: "Next.js + Node.js + MongoDB + Docker",
    impact: "Intelligent content management platform with automated AI summarization",
    overview:
      "A production-ready AI Knowledge Hub supporting efficient article management, intelligent summarization using OpenAI GPT-3.5, and strict role-based access control. Features include secure JWT authentication, multi-role permissions (Admin/User), automated PDF exports, and a responsive, themeable UI with dark/light mode support.",

    workflowStats: {
      totalNodes: "12+ Core Modules",
      aiAnalysis: "OpenAI GPT-3.5 Summarization",
      database: "MongoDB (NoSQL)",
    },

    architecture: [
      "Client Applications (Next.js Web Interface)",
      "└── Node.js/Express REST API Layer",
      "    ├── Authentication (JWT, RBAC)",
      "    ├── Article & Content Management",
      "    ├── AI Summarization Service (OpenAI)",
      "    ├── PDF Generation & Export",
      "    └── Database & Storage (MongoDB)",
    ],

    workflowBreakdown: [
      {
        title: "Authentication & Security",
        nodeCount: "4 modules",
        description:
          "Ensures secure user access and role-based permissions across the platform.",
        features: [
          "JWT authentication with secure token handling",
          "Role-based permissions (Admin vs Standard User)",
          "Bcrypt-hashed password security",
          "Protected Route middleware for API and UI security",
        ],
      },
      {
        title: "Article Management & Content",
        nodeCount: "5 modules",
        description:
          "Streamlines the creation, organization, and distribution of knowledge.",
        features: [
          "Full CRUD operations with rich text support",
          "Smart pagination for optimized data loading",
          "PDF export pipeline for article distribution",
          "Owner-based editing logic for data integrity",
        ],
      },
      {
        title: "AI & Summarization Service",
        nodeCount: "3 modules",
        description:
          "Leverages LLMs to provide instant value from long-form content.",
        features: [
          "OpenAI GPT-3.5 integration for summarization",
          "Configurable providers (Mock/OpenAI) for dev/prod",
          "Summary caching within the database for performance",
          "Graceful fallback mechanisms for API reliability",
        ],
      },
    ],

    technicalHighlights: [
      "Intelligent AI summarization using OpenAI GPT-3.5",
      "Multi-role RBAC architecture for secure data access",
      "Containerized deployment using Docker and Docker Compose",
      "Responsive UI with persistent dark/light mode theming",
      "Efficient pagination and NoSQL database indexing",
      "Automated PDF generation for offline reading",
    ],

    keySkills: [
      "Full Stack Development",
      "AI Model Integration (LLMs)",
      "System Architecture",
      "Security Engineering",
      "Database Management",
      "Containerization & DevOps",
    ],

    whyItMatters: [
      "Demonstrates capability in building AI-augmented apps",
      "Shows proficiency in modern full-stack patterns",
      "Highlights security-first mindset with robust RBAC",
      "Proves ability to integrate complex third-party APIs",
    ],

    techStack: [
      "Node.js",
      "Express",
      "MongoDB",
      "Next.js",
      "OpenAI",
      "JWT",
      "Docker",
      "Git",
    ],
  },

  {
    title: "Poll Management System",
    subtitle: "Real-time Polling Engine • Admin Control Center • Firebase Integration • Live Analytics",
    description:
      "A robust, real-time polling ecosystem designed for instant feedback and administrative transparency. Built with a serverless backend using Firebase, the system features a secure multi-role authentication flow, a comprehensive admin dashboard for poll lifecycle management, and a live results engine.",
    image: "/assets/projectsImages/poll_management_system.png",
    tags: ["React 19", "TypeScript", "Vite", "Firebase Auth", "Cloud Firestore", "Material UI", "React Router"],
    role: "Full-Stack Developer / System Architect",
    platform: "React 19 + TypeScript + Firebase Serverless Architecture",
    impact: "Streamlined real-time feedback and high-concurrency decision-making platform",
    overview:
      "A robust, real-time polling ecosystem designed for instant feedback and administrative transparency. Built with a serverless backend using Firebase, the system features a secure multi-role authentication flow, a comprehensive admin dashboard for poll lifecycle management, and a live results engine. The application leverages Cloud Firestore for millisecond-latency data synchronization across all connected clients.",

    workflowStats: {
      totalNodes: "7+ Core Modules",
      aiAnalysis: "Firebase Real-time Sync",
      database: "Cloud Firestore (NoSQL)",
    },

    architecture: [
      "Client Application (React/Vite)",
      "└── Firebase Serverless Backend",
      "    ├── Authentication — Firebase Auth",
      "    ├── Database — Cloud Firestore (Real-time)",
      "    ├── Routing — React Router (Protected)",
      "    └── UI — Material UI 7 System",
    ],

    workflowBreakdown: [
      {
        title: "Identity & Access Management",
        nodeCount: "3-4 modules",
        description:
          "Secure Login and Registration workflows with built-in validation and session persistence.",
        features: [
          "Firebase Identity Integration",
          "Advanced React Router Guards",
          "Protected Admin/User Views",
          "Automated Session Persistence",
        ],
      },
      {
        title: "Admin Lifecycle Management",
        nodeCount: "4-5 modules",
        description:
          "Interactive forms for real-time poll creation and full CRUD lifecycle management.",
        features: [
          "Dynamic Poll Creation Forms",
          "Firestore CRUD Orchestration",
          "Centralized Admin Dashboard",
          "Organizational Data Hub",
        ],
      },
      {
        title: "Real-time Analytics Engine",
        nodeCount: "3-4 modules",
        description:
          "Atomic voting system with live data streaming and visual progress tracking.",
        features: [
          "Atomic UID-based Voting",
          "High-Concurrency Increment Logic",
          "Zero-Refresh Results Sync",
          "Live Trend Analytics",
        ],
      },
    ],

    technicalHighlights: [
      "Multi-Role Access Control (RBAC) implementation",
      "Serverless Infrastructure using Firebase services",
      "Firestore Atomic operations for high-concurrency voting",
      "100% TypeScript coverage for type safety",
      "Mobile-First Design using MUI Grid & Box systems",
    ],

    keySkills: [
      "React.js Expert",
      "Serverless Architecture",
      "TypeScript Engineering",
      "Real-time Database Design",
      "Material UI UX/UI",
      "State Management",
    ],

    whyItMatters: [
      "Demonstrates Serverless Cloud Proficiency",
      "Deep Real-time Sync Knowledge (WebSockets/Snapshots)",
      "High-Security Architecture with Protected Routes",
      "Scalable High-Concurrency Logic Pattern",
    ],

    techStack: [
      "React",
      "TypeScript",
      "Vite",
      "Firebase Auth",
      "Cloud Firestore",
      "Material UI",
      "React Router",
    ],
  },

  {
    title: "Blogify",
    subtitle: "Microservices • Event-Driven • Backend Engineering",
    description:
      "A scalable microservices-based blogging platform featuring separate user/blog services, JWT authentication, and asynchronous communication via RabbitMQ.",
    image: "/assets/projectsImages/blogify.png",
    tags: ["Node.js", "Express.js", "MongoDB", "RabbitMQ", "JWT", "Docker", "Joi Validation"],
    role: "Backend Developer",
    platform: "Node.js + Express.js + MongoDB + RabbitMQ + Docker",
    impact: "Scalable microservices architecture with asynchronous decoupling",
    overview:
      "Blogify is a production-ready blogging platform designed with a microservices architecture. It decouples user management and blog operations into separate services. It uses JWT for secure authentication, Bcrypt for password hashing, and RabbitMQ for reliable asynchronous communication between services. The project demonstrates advanced backend patterns including middleware-based validation, event-driven architecture, and containerization.",

    workflowStats: {
      totalNodes: "2 Microservices",
      aiAnalysis: "RabbitMQ Event Processing",
      database: "MongoDB (Cloud/Atlas)",
    },

    architecture: [
      "Client (REST API Requests)",
      "└── API Gateway / Load Balancer",
      "    ├── User Microservice (Auth, Profiles)",
      "    ├── Blog Microservice (Posts, Comments)",
      "    ├── RabbitMQ Message Broker (Async Events)",
      "    └── MongoDB Cluster (Data Persistence)",
    ],

    workflowBreakdown: [
      {
        title: "Microservices Communication",
        nodeCount: "RabbitMQ Implementation",
        description:
          "Enables decoupled, asynchronous communication between the User and Blog services for high availability and scalability.",
        features: [
          "RabbitMQ producer/consumer pattern",
          "Event-driven state synchronization",
          "Decoupled service architecture",
          "Reliable message delivery pipelines",
        ],
      },
      {
        title: "Security & Authentication",
        nodeCount: "JWT + Bcrypt",
        description:
          "Handles secure user boarding and API access control using industry-standard tokens and encryption.",
        features: [
          "JWT based stateless authentication",
          "Bcrypt password hashing",
          "Role-based access middleware",
          "Secure header handling",
        ],
      },
      {
        title: "Data Integrity",
        nodeCount: "Joi Validation",
        description:
          "Strict schema enforcement for all API endpoints ensuring only valid data enters the system.",
        features: [
          "Request payload validation",
          "Custom error handling",
          "Schema-driven API contracts",
          "Input sanitization",
        ],
      },
    ],

    technicalHighlights: [
      "Microservices-based architecture with Node.js and Express",
      "Asynchronous communication using RabbitMQ",
      "JWT Authentication with secure password hashing",
      "Strict data validation using Joi middleware",
      "Multi-service containerization with Docker",
      "RESTful API design best practices",
    ],

    keySkills: [
      "Microservices architecture",
      "Node.js & Express.js",
      "RabbitMQ messaging",
      "MongoDB aggregation",
      "Docker containerization",
      "REST API engineering",
    ],

    whyItMatters: [
      "Demonstrates ability to build decoupled distributed systems",
      "Shows deep understanding of backend security and auth",
      "Proves skills in managing scalable cloud databases",
      "Highlights production-ready validation and error logic",
    ],

    techStack: [
      "Node.js",
      "Express.js",
      "MongoDB",
      "RabbitMQ",
      "JWT",
      "Docker",
      "Joi",
    ],
  }
];

const ProjectCard = ({
  project,
  index,
  onOpen,
}: {
  project: ProjectDetail;
  index: number;
  onOpen: () => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-2xl border border-white/10",
        "bg-white/5 backdrop-blur-md cursor-pointer",
        "hover:border-purple-500/30 transition-all duration-300"
      )}
      onClick={onOpen}
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          draggable={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090B] via-transparent to-transparent opacity-80" />
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors mb-2">
            {project.title}
          </h3>
          <p className="text-gray-400 text-sm mb-3">{project.subtitle}</p>
        </div>

        <p className="text-gray-300 leading-relaxed mb-4 text-sm">
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-xs text-purple-300"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Quick Stats */}
        <div className="flex items-center gap-2 text-purple-400 text-sm">
          <Code2 className="w-4 h-4" />
          <span>Click to view details</span>
        </div>
      </div>

      {/* Hover Gradient Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-blue-500/0 to-purple-500/0 group-hover:from-purple-500/5 group-hover:via-blue-500/5 group-hover:to-purple-500/5 transition-all duration-500 pointer-events-none" />
    </motion.div>
  );
};

const ProjectDetailModal = ({
  project,
  isOpen,
  onClose,
}: {
  project: ProjectDetail | null;
  isOpen: boolean;
  onClose: () => void;
}) => {
  // Prevent scroll on backdrop
  const handleBackdropWheel = (e: React.WheelEvent) => {
    e.preventDefault();
  };

  // Prevent scroll on backdrop touch
  const handleBackdropTouchMove = (e: React.TouchEvent) => {
    e.preventDefault();
  };

  if (!project || !isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
        onWheel={handleBackdropWheel}
        onTouchMove={handleBackdropTouchMove}
        className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
      />
      {/* Modal */}
      <div
        className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 overflow-hidden"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="bg-[#09090B] border border-white/10 rounded-2xl max-w-6xl w-full max-h-[90vh] overflow-hidden relative flex flex-col"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Scrollable Content Container */}
          <div
            className="overflow-y-auto flex-1 p-6 md:p-8 lg:p-12"
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors z-20"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Header */}
            <div className="mb-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h2 className="text-4xl md:text-5xl font-bold text-white mb-2">
                    {project.title}
                  </h2>
                  <p className="text-gray-400 text-lg mb-4">{project.subtitle}</p>
                </div>
                <div className="flex gap-2">
                  {project.demoLink && (
                    <a
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-purple-500/30 flex items-center justify-center transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                  )}
                  {project.githubLink && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 hover:bg-purple-500/30 flex items-center justify-center transition-colors"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  )}
                </div>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-sm text-purple-300"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Project Details Box */}
              <div className="grid md:grid-cols-3 gap-4 bg-white/5 border border-white/10 rounded-xl p-6 mb-8">
                <div>
                  <p className="text-gray-400 text-sm mb-1">Role</p>
                  <p className="text-white font-semibold">{project.role}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Platform</p>
                  <p className="text-white font-semibold">{project.platform}</p>
                </div>
                <div>
                  <p className="text-gray-400 text-sm mb-1">Impact</p>
                  <p className="text-purple-400 font-semibold">{project.impact}</p>
                </div>
              </div>
            </div>

            {/* Project Overview */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-2">
                Project <span className="text-purple-400">Overview</span>
              </h3>
              <p className="text-gray-300 leading-relaxed">{project.overview}</p>
            </div>

            {/* Workflow Stats */}
            {project.workflowStats && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Workflow <span className="text-purple-400">Scale & Architecture</span>
                </h3>
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {project.workflowStats.totalNodes && (
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <p className="text-gray-400 text-sm mb-1">Total Nodes</p>
                      <p className="text-2xl font-bold text-white">
                        {project.workflowStats.totalNodes}
                      </p>
                    </div>
                  )}
                  {project.workflowStats.aiAnalysis && (
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <p className="text-gray-400 text-sm mb-1">AI Analysis</p>
                      <p className="text-white font-semibold">
                        {project.workflowStats.aiAnalysis}
                      </p>
                    </div>
                  )}
                  {project.workflowStats.database && (
                    <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                      <p className="text-gray-400 text-sm mb-1">Database</p>
                      <p className="text-white font-semibold">
                        {project.workflowStats.database}
                      </p>
                    </div>
                  )}
                </div>

                {/* Architecture */}
                {project.architecture && (
                  <div className="bg-white/5 border border-white/10 rounded-xl p-6 mb-6">
                    <h4 className="text-lg font-semibold text-white mb-3">
                      High-Level Architecture
                    </h4>
                    <div className="space-y-1 font-mono text-sm text-gray-300">
                      {project.architecture.map((line, idx) => (
                        <div key={idx}>{line}</div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}

            {/* Workflow Breakdown */}
            {project.workflowBreakdown && project.workflowBreakdown.length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Detailed Workflow <span className="text-purple-400">Breakdown</span>
                </h3>
                <div className="space-y-6">
                  {project.workflowBreakdown.map((workflow, idx) => (
                    <div
                      key={idx}
                      className="bg-white/5 border border-white/10 rounded-xl p-6"
                    >
                      <div className="flex items-start justify-between mb-3">
                        <h4 className="text-xl font-semibold text-white">
                          {workflow.title}
                        </h4>
                        {workflow.nodeCount && (
                          <span className="text-purple-400 font-semibold">
                            {workflow.nodeCount}
                          </span>
                        )}
                      </div>
                      <p className="text-gray-300 mb-4">{workflow.description}</p>
                      <ul className="space-y-2">
                        {workflow.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2 text-gray-300">
                            <span className="text-purple-400 mt-1">•</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Highlights */}
            {project.technicalHighlights && project.technicalHighlights.length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Technical <span className="text-purple-400">Highlights</span>
                </h3>
                <div className="grid md:grid-cols-2 gap-3">
                  {project.technicalHighlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="flex items-start gap-2 bg-white/5 border border-white/10 rounded-lg p-3"
                    >
                      <span className="text-purple-400 mt-0.5">•</span>
                      <span className="text-gray-300">{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Skills */}
            {project.keySkills && project.keySkills.length > 0 && (
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Key Skills <span className="text-purple-400">Demonstrated</span>
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.keySkills.map((skill, idx) => (
                    <span
                      key={idx}
                      className="px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Why It Matters */}
            {project.whyItMatters && project.whyItMatters.length > 0 && (
              <div className="pb-4">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Why This Project <span className="text-purple-400">Matters</span>
                </h3>
                <div className="space-y-3">
                  {project.whyItMatters.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-purple-400 mt-0.5 flex-shrink-0" />
                      <p className="text-gray-300">{point}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </>
  );
};

export function Project() {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenProject = (project: ProjectDetail) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <Layout>
      <Section id="projects">
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
              <p className="text-[#8b8bff] font-medium text-sm mb-2 mt-5">Projects</p>
              <h1 className="sm:text-4xl text-2xl md:text-5xl font-bold leading-tight mb-6">
                <span className="text-white">Featured</span>{" "}
                <span className="text-gray-300 font-semibold">Projects</span>
                <br />
                <span className="text-white">Built for</span>{" "}
                <span className="text-gray-400 font-semibold">
                  production environments
                </span>
              </h1>
              <p className="mt-4 text-[#cfcfcf] text-base md:text-lg max-w-2xl mx-auto">
                Explore my portfolio of backend systems, automation workflows, and AI
                solutions that solve real-world problems at scale.
              </p>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  onOpen={() => handleOpenProject(project)}
                />
              ))}
            </div>

            {/* Call to Action */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-16 text-center"
            >
              <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full px-8 py-4 backdrop-blur-md">
                <Code2 className="w-5 h-5 text-purple-400" />
                <p className="text-gray-300">
                  More projects coming soon.{" "}
                  <button
                    onClick={() => {
                      const section = document.getElementById("contact");
                      if (section) {
                        section.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    className="text-purple-400 hover:text-purple-300 font-semibold transition-colors"
                  >
                    Let's discuss your project
                  </button>
                </p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Project Detail Modal */}
        <ProjectDetailModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      </Section>
    </Layout>
  );
}
