import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import Layout from "../HeroSection/Layout";
import Image from "next/image";
import { Section } from "../Section";

// Reviews data (Humanized, masked & authentic for Sumit Kumar)
const reviews = [
  {
    name: "Dereje S.",
    username: "@dereje",
    body: "Sumit was very dependable throughout the project. He quickly understood our backend requirements and built stable scaling Node.js services that handled our load perfectly. Communication was smooth and delivery was on time.",
    img: "",
  },
  {
    name: "Open Source Contributor",
    username: "@oss_dev",
    body: "Sumit played a key role in building and stabilizing our platform. From React frontends to complex Node.js microservices and Redis integrations, he handled production issues responsibly and helped optimize performance.",
    img: "",
  },
  {
    name: "Sebastian S.",
    username: "@sebastian",
    body: "I liked how structured Sumit's approach was. He helped us refactor our legacy systems into modern full-stack applications. The code was clean, well documented, and very easy to maintain.",
    img: "",
  },
  {
    name: "Ofir",
    username: "@ofir",
    body: "Sumit delivered solid backend logic and REST integrations that worked smoothly in production. Even after delivery, he stayed responsive and helped with improvements when we needed adjustments.",
    img: "",
  },
  {
    name: "Rahil S.",
    username: "@rahil",
    body: "We needed someone who could move fast but still keep systems stable. Sumit built scalable APIs and React components that handled increasing user traffic without issues. Great collaboration.",
    img: "",
  },
  {
    name: "Oodles Colleague",
    username: "@oodles_dev",
    body: "Sumit helped streamline several internal microservices using RabbitMQ. Systems that used to be tightly coupled now run asynchronously and reliably. His problem-solving mindset made a real difference.",
    img: "",
  },
  {
    name: "Excellence Tech Team",
    username: "@extech",
    body: "Working with Sumit was smooth from start to finish. He integrated multiple external APIs, optimized React rendering, and ensured the system remained reliable. We value his technical ownership.",
    img: "",
  },
];

// Split into two rows
const firstRow = reviews.slice(0, Math.ceil(reviews.length / 2));
const secondRow = reviews.slice(Math.ceil(reviews.length / 2));

// Gradient backgrounds
const gradients = [
  "bg-gradient-to-br from-[#a772cb]/20 to-[#c084fc]/20",
  "bg-gradient-to-br from-[#4facfe]/20 to-[#00f2fe]/20",
  "bg-gradient-to-br from-[#43e97b]/20 to-[#38f9d7]/20",
  "bg-gradient-to-br from-[#f093fb]/20 to-[#f5576c]/20",
  "bg-gradient-to-br from-[#667eea]/20 to-[#764ba2]/20",
  "bg-gradient-to-br from-[#f6d365]/20 to-[#fda085]/20",
  "bg-gradient-to-br from-[#ff9a9e]/20 to-[#fad0c4]/20",
];

// Card component
const ReviewCard = ({
  img,
  name,
  username,
  body,
  gradientClass,
}: {
  img: string;
  name: string;
  username: string;
  body: string;
  gradientClass: string;
}) => {
  return (
    <figure
      className={cn(
        "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4 text-white",
        gradientClass,
        "hover:opacity-90 transition",
        "border-gray-950/[.1] dark:border-gray-50/[.1]"
      )}
    >
      <div className="flex flex-row items-center gap-2">
        <div className="flex flex-col">
          <figcaption className="font-bold">{name}</figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  );
};

// Main Component
export function MarqueeDemo({ reviews: _unused }: any) {
  return (
    <Layout>
      <Section id="reviews">
        <div className="md:my-16 my-8">
          <section className="mb-8 text-center">
            <p className="text-[#8b8bff] font-medium text-sm mb-4">
              Testimonial
            </p>

            <h1 className="sm:text-4xl text-2xl md:text-5xl font-bold leading-tight">
              <span className="text-white">What my </span>
              <span className="text-gray-300 font-semibold">peers & clients</span>
              <span className="text-gray-400 font-semibold"> say about me</span>
            </h1>

            <p className="text-[#cfcfcf] text-base md:text-lg mt-4">
              I take pride in delivering clean, scalable, and reliable software
              solutions that make a real difference for teams and businesses.
            </p>
          </section>

          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden rounded-lg">
            <Marquee pauseOnHover className="[--duration:20s]">
              {firstRow.map((review, index) => (
                <ReviewCard
                  key={review.username}
                  {...review}
                  gradientClass={gradients[index % gradients.length]}
                />
              ))}
            </Marquee>

            <Marquee reverse pauseOnHover className="[--duration:20s]">
              {secondRow.map((review, index) => (
                <ReviewCard
                  key={review.username}
                  {...review}
                  gradientClass={
                    gradients[(index + firstRow.length) % gradients.length]
                  }
                />
              ))}
            </Marquee>

            {/* Fade effect */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#09090B] dark:from-[#09090B]" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-[#09090B] dark:from-[#09090B]" />
          </div>
        </div>
      </Section>
    </Layout>
  );
}
