"use client";
import React from "react";

type SectionProps = {
  id?: string;
  className?: string;
  children: React.ReactNode;
};

export const Section = ({ id, className = "", children }: SectionProps) => {
  return <section id={id}>{children}</section>;
};
