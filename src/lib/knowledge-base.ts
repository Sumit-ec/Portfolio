/**
 * Knowledge Base for Sumit Kumar's Portfolio Chatbot (SumitBOT)
 * Contains comprehensive information about Sumit compiled from portfolio content
 */

export const knowledgeBase = `
# About Sumit Kumar

## Personal Information
- Name: Sumit Kumar
- Role: Full Stack Developer | Node.js & React Developer
- Current Position: Assistant Consultant - Development at Oodles Technologies (Nov 2025 – Present)
- Previous Position: Junior Web Developer at Excellence Technologies (May 2025 – Oct 2025)
- Email: k.sumit.ec@gmail.com
- Phone: +91 7783873885
- LinkedIn: https://linkedin.com/in/sumit-kumar-669a8021b
- GitHub: https://github.com/Sumit-ec

## Personal Background
I'm a Full Stack Developer who loves building systems that are reliable, scalable, and easy to maintain — from backend APIs to modern React frontends. Outside of coding, I enjoy exploring new technologies, contributing to open-source, and solving real-world engineering challenges with clean, efficient code. I believe great software is not just about features, but about performance, reliability, and real business impact.

## Professional Background
I specialize in building production-grade backend services using Node.js, TypeScript, Express.js, and databases like MongoDB and PostgreSQL. I've built microservices with RabbitMQ, containerized apps with Docker, implemented Redis caching, written Solidity smart contracts, and crafted modern UIs with React and Next.js. My work focuses on clean architecture, performance optimization, and production-ready code — ensuring systems remain stable and maintainable at scale.

## Skills & Technologies

### Languages
- HTML, CSS, JavaScript, TypeScript, Solidity, Java

### Frameworks & Libraries
- React.js, Next.js, Node.js, Express.js, Redux

### Databases
- MongoDB, PostgreSQL, SQL

### Tools & Technologies
- Git, Postman, REST APIs, Docker, RabbitMQ, Prisma ORM, Redis

## Work Experience

### Assistant Consultant - Development | Oodles Technologies (Nov 2025 – Present)
- Built scalable backend services using Node.js, Express, TypeScript, MongoDB, Prisma ORM
- Implemented Redis caching and MongoDB indexing for performance optimization
- Developed Solidity smart contracts with custom fee logic
- Containerized services using Docker & Docker Compose
- Implemented RabbitMQ for asynchronous microservice communication
- Maintained documentation and deployment pipelines

### Junior Web Developer | Excellence Technologies (May 2025 – Oct 2025)
- Built responsive web applications using modern JavaScript frameworks
- Created reusable UI components
- Improved rendering performance and cross-browser compatibility
- Worked with state management and async data flows
- Enhanced UI/UX and testing workflows

## Education
- Bachelor's in Electronics and Communication Engineering
- JSS Academy of Technical Education | 2020 – 2024 | CGPA: 7.70

## Certifications
- React JS – Complete Guide for Frontend Web Development (Udemy)
- IBM NodeJS Certification

## Projects

### 1. Smart Bookmark Manager
- **Type**: Full-Stack SaaS App • Real-Time • 72-Hour Hackathon Build
- **Description**: Production-ready real-time bookmark management SaaS built in 72 hours with Google OAuth, per-user RLS, and live cross-tab synchronization via PostgreSQL Realtime WebSockets.
- **Role**: Full-Stack Developer
- **Platform**: Next.js 15 + Supabase + TypeScript + Vercel
- **Impact**: Built in 72 hrs • Real-time sync across tabs • Row-Level Security per user
- **Overview**: Smart Bookmark Manager is a production-ready, real-time bookmark management SaaS application built in 72 hours as a technical hackathon challenge. It supports Google OAuth authentication, per-user private cloud storage secured by Supabase Row Level Security (RLS), and real-time synchronization using PostgreSQL Realtime WebSockets — so changes sync instantly across all open tabs without a page refresh. Full CRUD operations with a smooth Smart Edit UX pattern.
- **Technical Highlights**: Google OAuth with Supabase Auth, Row Level Security (RLS), PostgreSQL Realtime WebSockets for live cross-tab sync, Key Prop Pattern for form state reset, onAuthStateChange global listener, supabase_realtime publication with REPLICA IDENTITY FULL
- **Tech Stack**: Next.js 15, TypeScript, Supabase, PostgreSQL, Tailwind CSS v4, Google OAuth, Vercel
- **GitHub**: https://github.com/Sumit-ec/smart-bookmark-app

### 2. Telegram Joke Bot 🤖
- **Type**: Automated Humor Delivery • Real-time Cron Scheduling • User-Centric Customization
- **Description**: A scalable and robust Telegram bot engineered to deliver automated humor at scale. Built with a Node.js backend and MongoDB Atlas for high-availability persistence, the bot features a sophisticated cron-based scheduling engine.
- **Role**: Backend Bot Architect
- **Platform**: Node.js + Express + MongoDB Atlas
- **Impact**: Automated High-Engagement Humor System
- **Overview**: Scoped as a scalable humor delivery system, the bot uses Node.js and MongoDB Atlas for persistent session management. It features a sophisticated cron-based engine allowing users to calibrate delivery frequencies and toggle activity via an intuitive slash-command interface (/set, /enable, /disable).
- **Technical Highlights**: Cloud-Native Architecture with MongoDB Atlas, Efficient Cron Scheduling with node-cron, Modular service-oriented design, Real-time state persistence, Markdown-v2 response parsing.
- **Tech Stack**: Node.js, Express, MongoDB Atlas, Telegram Bot API, node-cron, Axios, Git

### 3. 🎬 Netflix Clone
- **Type**: Movie Streaming UI • TMDB API Integration • Trailer Playback • Responsive Design
- **Description**: A high-fidelity Netflix clone built with React, featuring dynamic content fetching from the TMDB (The Movie Database) API. Categorized movie rows, dynamic hero banner, and YouTube trailer playback.
- **Role**: Frontend Developer / UI Engineer
- **Platform**: React + TMDB API + Firebase Hosting
- **Impact**: Created a high-performance, enterprise-grade streaming interface with real-time data synchronization.
- **Overview**: Implements component-driven design with modular UI architecture. Fetches real-time movie data across 8+ categories like Netflix Originals and Trending. Features a hero banner that auto-refreshes and integrated multimedia playback without disrupting user scroll position.
- **Technical Highlights**: REST API integration with real-time sync, Dynamic image rendering with optimized hierarchy, Conditional rendering for varied row formats, Fully responsive grid using CSS Flex/Grid.
- **Tech Stack**: React.js, Axios, TMDB API, CSS3, Firebase, React-YouTube, Git

### 4. AI-Powered Knowledge Hub
- **Type**: AI Content Analysis • Article Management • Role-Based Access • Smart Summarization
- **Description**: A production-ready AI Knowledge Hub supporting efficient article management, intelligent summarization using OpenAI GPT-3.5, and strict role-based access control.
- **Role**: Full Stack Developer / AI Integration Engineer
- **Platform**: Next.js + Node.js + MongoDB + Docker
- **Impact**: Intelligent content management platform with automated AI summarization
- **Overview**: Supports multi-role RBAC (Admin/User), secure JWT authentication, and automated PDF exports. Implements OpenAI GPT-3.5 for high-quality article summarization with caching for performance.
- **Technical Highlights**: Multi-role RBAC architecture, OpenAI GPT-3.5 integration, Containerized deployment with Docker, Automated PDF generation, Persistent dark/light mode.
- **Tech Stack**: Node.js, Express, MongoDB, Next.js, OpenAI, JWT, Docker, Git

### 5. Blogify – Full Stack Blogging Platform
- **Type**: Microservices • REST APIs • Event-Driven • Backend Engineering
- **Description**: Microservices-based blogging platform built with Node.js and Express, featuring async RabbitMQ communication, JWT authentication, and scalable backend architecture.
- **Role**: Backend Developer
- **Platform**: Node.js + Express.js + MongoDB + RabbitMQ + Docker
- **Impact**: Scalable microservices backend with async communication
- **Technical Highlights**: Separate User and Blog microservices, JWT Authentication with bcrypt, RabbitMQ-based async communication, Joi validation middleware, REST API architecture, Docker containerization.
- **Tech Stack**: Node.js, Express.js, MongoDB, RabbitMQ, JWT, Docker

### 6. Portfolio Website
- **Type**: Modern UI • Responsive • Performance Optimized • SEO Optimized
- **Description**: A modern portfolio website showcasing projects, skills, and professional experience with smooth animations and optimized performance.
- **Role**: Full Stack Developer
- **Platform**: Next.js 15 + React + TypeScript + Tailwind CSS + OpenAI
- **Tech Stack**: Next.js, React, TypeScript, Tailwind CSS, Framer Motion

## Services Offered

1. **Backend API Development**: Build scalable REST APIs using Node.js, Express.js, and TypeScript with clean architecture.
2. **Frontend Development**: Craft responsive, performant UIs using React.js, Next.js, and modern CSS frameworks.
3. **Microservices Architecture**: Design and implement decoupled microservices with RabbitMQ for async communication.
4. **Database Design & Optimization**: Design efficient schemas with MongoDB, PostgreSQL, and Prisma ORM. Optimize with Redis caching and indexing.
5. **DevOps & Containerization**: Containerize services with Docker & Docker Compose. Set up deployment pipelines and environments.
6. **Full Stack Web Applications**: End-to-end development of modern web apps, from backend logic to polished frontend interfaces.

## Frequently Asked Questions

**Q: What do you specialize in?**
A: I specialize in full stack development with a strong backend focus. My core areas include Node.js API development, React frontend engineering, TypeScript, microservices, database design (MongoDB, PostgreSQL), and DevOps with Docker.

**Q: What technologies do you work with?**
A: Node.js, Express.js, React.js, Next.js, TypeScript, MongoDB, PostgreSQL, Prisma ORM, Redis, RabbitMQ, Docker, Git, REST APIs, Solidity, Redux, and Postman.

**Q: Do you have real professional experience?**
A: Yes. I'm currently working as an Assistant Consultant - Development at Oodles Technologies (Nov 2025–Present), and previously as a Junior Web Developer at Excellence Technologies (May 2025–Oct 2025). I've built production-grade APIs, microservices, and full stack applications.

**Q: What kind of projects have you built?**
A: A real-time Smart Bookmark Manager SaaS (built in 72 hours), a Telegram Joke Bot with automated scheduling, the Netflix Clone with TMDB integration, the AI Knowledge Hub with GPT-3.5, and microservices-based blogging platforms (Blogify).

**Q: Are you open to full-time roles?**
A: Yes, I'm actively open to full-time opportunities as a Full Stack Developer, Backend Developer, or Node.js/React Developer.

**Q: How can someone contact or hire you?**
A: 📩 k.sumit.ec@gmail.com | 📞 +91 7783873885 | 🔗 https://linkedin.com/in/sumit-kumar-669a8021b

## Professional Philosophy
Always learning, always building, always shipping. I focus on building systems that are not just functional, but reliable, scalable, and maintainable in production environments.
`;
