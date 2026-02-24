import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
import { BellIcon, Share2Icon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Marquee } from "../magicui/marquee";
import AnimatedListDemo from "../magicui/animated-list-demo";
import AnimatedBeamMultipleOutputDemo from "../magicui/animated-beam-multiple-outputs";
import { BentoCard, BentoGrid } from "../magicui/bento-grid";
import Layout from "../HeroSection/Layout";
import Wings from "../../../public/assets/wings.svg";
import Image from "next/image";
import { ComicText } from "../magicui/comic-text";
import { Section } from "../Section";
import { ScriptCopyBtn } from "../magicui/script-copy-btn";

const customCommandMap = {
  email: "k.sumit.ec@gmail.com",
};

const files = [
  {
    name: "server.ts",
    body: "Node.js & Express REST API with TypeScript, JWT auth, and Prisma ORM.",
  },
  {
    name: "schema.prisma",
    body: "Prisma schema for PostgreSQL with relational data models.",
  },
  {
    name: "consumer.ts",
    body: "RabbitMQ consumer for async microservice event processing.",
  },
  {
    name: "App.tsx",
    body: "React component with Redux state management and API integration.",
  },
  {
    name: "docker-compose.yml",
    body: "Containerized Node.js, MongoDB, Redis, and RabbitMQ services.",
  },
];

// Feature grid cards focused on Backend / Automation / AI
const features = [
  {
    Icon: BellIcon,
    name: "Production Monitoring & Reliability",
    description:
      "Track API health, workflow execution, retries, failures, and system performance in real time.",
    href: "#",
    cta: "connect",
    className: "col-span-3 lg:col-span-1",
    background: (
      <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
    ),
  },

  {
    Icon: FileTextIcon,
    name: "Scalable Backend Architecture",
    description:
      "Well-structured Python services with clean APIs, modular design, and production-ready deployment.",
    href: "#",
    cta: "connect",
    className: "col-span-3 lg:col-span-2",
    background: (
      <Marquee
        pauseOnHover
        className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
      >
        {files.map((f, idx) => (
          <figure
            key={idx}
            className={cn(
              "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
              "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
              "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
              "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
            )}
          >
            <div className="flex flex-row items-center gap-2">
              <div className="flex flex-col">
                <figcaption className="text-sm font-medium dark:text-white ">
                  {f.name}
                </figcaption>
              </div>
            </div>
            <blockquote className="mt-2 text-xs text-white">
              {f.body}
            </blockquote>
          </figure>
        ))}
      </Marquee>
    ),
  },

  {
    Icon: Share2Icon,
    name: "Modern Frontend & Full Stack Delivery",
    description:
      "React.js, Next.js, and TypeScript frontends integrated with robust Node.js backend APIs.",
    href: "#",
    cta: "connect",
    className: "col-span-3 lg:col-span-2",
    background: (
      <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
    ),
  },

  {
    cta: "connect",
    className: "col-span-3 lg:col-span-1",
    background: (
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
        <Image
          src={Wings}
          alt="Wings Background"
          className="fixed top-16 inset-0 mx-auto"
        />

        <div className="relative z-10 h-16 w-16 rounded-full text-white flex items-center justify-center text-xl font-bold shadow-lg ring-1 ring-white/10 backdrop-blur">
          SK
        </div>

        <div className="">
          <ComicText>Let's work together</ComicText>
          <ComicText>on your next project</ComicText>
        </div>

        <ScriptCopyBtn
          showMultiplePackageOptions={true}
          codeLanguage="shell"
          lightTheme="nord"
          darkTheme="vitesse-dark"
          commandMap={customCommandMap}
        />
      </div>
    ),
  },
];

export default function WhyChooseUs({ whyme }: any) {
  return (
    <Layout>
      <Section id="whyme">
        <section className="mb-5 pt-20 md:pt-24">
          <p className="text-[#8b8bff] font-medium text-sm mb-4">Why me?</p>

          <h1 className="sm:text-4xl text-2xl md:text-5xl font-bold leading-tight mb-4">
            <span className="text-white">Engineering</span>{" "}
            <span className="text-gray-300 font-semibold">modern</span>
            <br />
            <span className="text-white">full-stack systems</span>{" "}
            <span className="text-gray-400 font-semibold">
              that scale in production
            </span>
          </h1>

          <p className="mt-6 text-[#cfcfcf] text-base md:text-lg">
            Explore how I build reliable backend services, scalable APIs,
            and modern frontend applications for real-world production environments.
          </p>
        </section>

        <BentoGrid>
          {features.map((feature: any, idx: any) => (
            <BentoCard key={idx} {...feature} />
          ))}
        </BentoGrid>
      </Section>
    </Layout>
  );
}










// import { CalendarIcon, FileTextIcon } from "@radix-ui/react-icons";
// import { BellIcon, Share2Icon } from "lucide-react";
// import { cn } from "@/lib/utils";
// import { Marquee } from "../magicui/marquee";
// import AnimatedListDemo from "../magicui/animated-list-demo";
// import AnimatedBeamMultipleOutputDemo from "../magicui/animated-beam-multiple-outputs";
// import { BentoCard, BentoGrid } from "../magicui/bento-grid";
// import Layout from "../HeroSection/Layout";
// import Wings from "../../../public/assets/wings.svg";
// import Image from "next/image";
// import { ComicText } from "../magicui/comic-text";
// import { Section } from "../Section";
// import { ScriptCopyBtn } from "../magicui/script-copy-btn";

// const customCommandMap = {
//   email: "k.sumit.ec@gmail.com",
// };

// // Sample files related to MERN Stack / Full Stack development
// const files = [
//   {
//     name: "api-routes.js",
//     body: "Contains Express.js backend API routes for user and product management.",
//   },
//   {
//     name: "dashboard.jsx",
//     body: "React component for admin dashboard interface with real-time stats.",
//   },
//   {
//     name: "schema.js",
//     body: "MongoDB schema for user profiles using Mongoose.",
//   },
//   {
//     name: "authController.js",
//     body: "Handles JWT-based authentication and role-based access control.",
//   },
//   {
//     name: "deployment.yml",
//     body: "CI/CD configuration file for deploying the app to production with GitHub Actions.",
//   },
// ];

// // Feature grid cards focused on MERN Stack / Web Dev
// const features = [
//   {
//     Icon: BellIcon,
//     name: "Real-time Development Alerts",
//     description:
//       "Stay updated with API responses, database connections, build status, and deployment notifications.",
//     href: "#",
//     cta: "connect",
//     className: "col-span-3 lg:col-span-1",
//     background: (
//       <AnimatedListDemo className="absolute right-2 top-4 h-[300px] w-full scale-75 border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-90" />
//     ),
//   },

//   {
//     Icon: FileTextIcon,
//     name: "Code Management",
//     description:
//       "Organize, version, and manage your MERN stack codebase efficiently.",
//     href: "#",
//     cta: "connect",
//     className: "col-span-3 lg:col-span-2",
//     background: (
//       <Marquee
//         pauseOnHover
//         className="absolute top-10 [--duration:20s] [mask-image:linear-gradient(to_top,transparent_40%,#000_100%)] "
//       >
//         {files.map((f, idx) => (
//           <figure
//             key={idx}
//             className={cn(
//               "relative w-32 cursor-pointer overflow-hidden rounded-xl border p-4",
//               "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//               "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
//               "transform-gpu blur-[1px] transition-all duration-300 ease-out hover:blur-none"
//             )}
//           >
//             <div className="flex flex-row items-center gap-2">
//               <div className="flex flex-col">
//                 <figcaption className="text-sm font-medium dark:text-white ">
//                   {f.name}
//                 </figcaption>
//               </div>
//             </div>
//             <blockquote className="mt-2 text-xs text-white">
//               {f.body}
//             </blockquote>
//           </figure>
//         ))}
//       </Marquee>
//     ),
//   },

//   {
//     Icon: Share2Icon,
//     name: "Third-Party Integrations",
//     description:
//       "Integrate with MongoDB, Stripe, Firebase, and more for full-stack flexibility.",
//     href: "#",
//     cta: "connect",
//     className: "col-span-3 lg:col-span-2",
//     background: (
//       <AnimatedBeamMultipleOutputDemo className="absolute right-2 top-4 h-[300px] border-none transition-all duration-300 ease-out [mask-image:linear-gradient(to_top,transparent_10%,#000_100%)] group-hover:scale-105" />
//     ),
//   },

//   {
//     cta: "connect",
//     className: "col-span-3 lg:col-span-1",
//     background: (
//       <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-center">
//         <Image
//           src={Wings}
//           alt="Wings Background"
//           className="fixed top-16 inset-0 mx-auto"
//         />

//         <div className="relative z-10 h-16 w-16 rounded-full text-white flex items-center justify-center text-xl font-bold shadow-lg ring-1 ring-white/10 backdrop-blur">
//           AV
//         </div>

//         <div className="">
//           <ComicText>Let's work together </ComicText>
//           <ComicText>on your next project</ComicText>
//         </div>

//         <ScriptCopyBtn
//           showMultiplePackageOptions={true}
//           codeLanguage="shell"
//           lightTheme="nord"
//           darkTheme="vitesse-dark"
//           commandMap={customCommandMap}
//         />

//         {/* <h4 className="bg-white/5 border border-white/10 sm:text-sm text-xs md:px-4 px-3 py-1.5 rounded-full text-gray-300 backdrop-blur-md logo md:tracking-wide text-center">
//           {`k.sumit.ec@gmail.com`}
//         </h4> */}
//       </div>
//     ),
//   },
// ];

// export default function WhyChooseUs({ whyme }: any) {
//   return (
//     <Layout>
//       <Section id="whyme">
//         <section className="mb-5">
//           <p className="text-[#8b8bff] font-medium text-sm mb-4">Why me?</p>

//           <h1 className="sm:text-4xl text-2xl md:text-5xl font-bold leading-tight mb-4">
//             <span className="text-white">Mad capabilities</span>{" "}
//             <span className="text-gray-300 font-semibold">for slick</span>
//             <br />
//             <span className="text-white">procedures</span>{" "}
//             <span className="text-gray-400 font-semibold">
//               and superior webpages
//             </span>
//           </h1>

//           <p className="mt-6 text-[#cfcfcf] text-base md:text-lg">
//             Discover my{" "}
//             <span className="text-white font-semibold">capabilities</span> that
//             distinguish me from the rest of the marketplace's innovators!
//           </p>
//         </section>
//         <BentoGrid>
//           {features.map((feature: any, idx: any) => (
//             <BentoCard key={idx} {...feature} />
//           ))}
//         </BentoGrid>
//       </Section>
//     </Layout>
//   );
// }
