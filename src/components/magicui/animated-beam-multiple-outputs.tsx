"use client";

import React, { forwardRef, useRef } from "react";

import {
  SiPython,
  SiN8N,
  SiDjango,
  SiPostman,
  SiGithub,
  SiVisualstudiocode,
} from "react-icons/si";
import { FaUser } from "react-icons/fa";

import { cn } from "@/lib/utils";
import { AnimatedBeam } from "./animated-beam";

const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-12 items-center justify-center rounded-full border-2 bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Circle.displayName = "Circle";

export default function AnimatedBeamMultipleOutputDemo({
  className,
}: {
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const userRef = useRef<HTMLDivElement>(null);

  return (
    <div
      className={cn(
        "relative flex h-[500px] w-full items-center justify-center overflow-hidden p-10",
        className
      )}
      ref={containerRef}
    >
      <div className="flex size-full max-w-lg flex-row items-stretch justify-between gap-10">
        {/* User */}
        <div className="flex flex-col justify-center">
          <Circle ref={userRef}>
            <Icons.user fill="#000" />
          </Circle>
        </div>

        {/* Center Tool */}
        <div className="flex flex-col justify-center">
          <Circle ref={centerRef} className="size-16 text-black">
            <Icons.vscode fill="#0000FF" size={25} />
          </Circle>
        </div>

        {/* Tech Stack */}
        <div className="flex flex-col justify-center gap-2">
          <Circle ref={div3Ref}>
            <Icons.python className="text-blue-600 text-3xl" />
          </Circle>

          <Circle ref={div4Ref}>
            <Icons.n8n className="text-red-500 text-3xl" />
          </Circle>

          <Circle ref={div5Ref}>
            <Icons.django className="text-green-700 text-3xl" />
          </Circle>

          <Circle ref={div6Ref}>
            <Icons.postman className="text-orange-500 text-3xl" />
          </Circle>

          <Circle ref={div7Ref}>
            <Icons.github className="text-black text-3xl" />
          </Circle>

        </div>
      </div>

      {/* Animated Beams */}
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div1Ref}
        toRef={centerRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div2Ref}
        toRef={centerRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div3Ref}
        toRef={centerRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div4Ref}
        toRef={centerRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div5Ref}
        toRef={centerRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div6Ref}
        toRef={centerRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={div7Ref}
        toRef={centerRef}
        duration={3}
      />
      <AnimatedBeam
        containerRef={containerRef}
        fromRef={centerRef}
        toRef={userRef}
        duration={3}
      />
    </div>
  );
}

const Icons = {
  user: FaUser,
  python: SiPython,
  n8n: SiN8N,
  django: SiDjango,
  postman: SiPostman,
  github: SiGithub,
  vscode: SiVisualstudiocode,
};
