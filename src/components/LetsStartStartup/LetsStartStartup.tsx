import React from "react";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import MyProfile from "../../../public/assets/sumit.png";
import Start from "../../../public/assets/cta.avif";
import { HoverBorderGradient } from "../ui/hover-border-gradient";
import { SpinningText } from "../magicui/spinning-text";

function ConceptToCreation() {
  return (
    <div className="relative text-white overflow-hidden flex flex-col items-center justify-center px-4 text-center md:py-10 py-5">
      {/* Background Image */}
      <div className="absolute inset-0 opacity-20 w-full h-full z-0">
        <Image
          src={Start}
          alt="Background gradient"
          className="w-full h-full object-cover"
          draggable={false}
          priority
        />
      </div>

      {/* Radial Mask Overlay */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-[#09090B]/100 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] z-0 " />
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-[#09090B]/100 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] z-0 " />
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center bg-[#09090B]/100 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)] z-0 " />

      {/* Circular Badge */}
      <div className="relative z-10 mb-2 w-[110px] h-[110px] rounded-full animate-spin-slow bg-gradient-to-tr from-pink-500 via-purple-500 to-blue-500 p-[2px]">
        <div className="rounded-full bg-black w-full h-full flex items-center justify-center">
          <Image
            src={MyProfile}
            alt="Profile Image"
            width={100}
            height={100}
            className="rounded-full p-1 w-full h-full"
            draggable={false}
          />
        </div>
      </div>

      {/* Main Headings */}
      <div className="relative">
        <h2 className="relative z-10 sm:text-4xl text-xl md:text-5xl md:mb-4 leading-tight ">
          FROM CONCEPT TO <span className="text-white font-bold">CREATION</span>
        </h2>

        <h2 className="relative z-10 sm:text-4xl text-2xl md:text-5xl mb-5 leading-tight">
          LET&apos;S MAKE IT{" "}
          <span className="text-white font-bold">HAPPEN!</span>
        </h2>
      </div>

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
        <span className="font-medium">Get In Touch</span>
        <ArrowRight className="w-4 h-4" />
      </HoverBorderGradient>

      {/* Subtitle Texts */}
      <div className="relative z-10 space-y-4 mt-6">
        <p className="text-lg md:text-2xl font-semibold text-gray-200">
          I&apos;m available for full-time roles.
        </p>
        <p className="text-gray-400 md:max-w-2xl mx-auto leading-relaxed md:text-lg text-sm">
          I thrive on crafting dynamic web applications,
          <br />
          and delivering seamless user experiences.
        </p>
      </div>
    </div>
  );
}

export default ConceptToCreation;
