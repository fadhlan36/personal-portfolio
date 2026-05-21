"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 text-sm">
        {/* Backend & Logic */}
        <div className="flex flex-col gap-1.5">
          <span className="text-xs text-indigo-400 font-semibold uppercase tracking-wider">
            Backend
          </span>
          <span className="text-slate-300">Laravel</span>
          <span className="text-slate-300">Node.js</span>
          <span className="text-slate-300">Express</span>
        </div>
        {/* Frontend & Web */}
        <div className="flex flex-col gap-1.5">
          <span className="text-xs text-cyan-400 font-semibold uppercase tracking-wider">
            Frontend
          </span>
          <span className="text-slate-300">React / Next.js</span>
          <span className="text-slate-300">TypeScript</span>
          <span className="text-slate-300">Tailwind CSS</span>
        </div>
        {/* Design & Tools */}
        <div className="flex flex-col gap-1.5">
          <span className="text-xs text-pink-400 font-semibold uppercase tracking-wider">
            Design & DB
          </span>
          <span className="text-slate-300">Figma (UI/UX)</span>
          <span className="text-slate-300">PostgreSQL</span>
          <span className="text-slate-300">Prisma ORM</span>
        </div>
      </div>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <div className="border-l border-[#33353F] pl-4 py-1">
        <h4 className="text-white text-base font-semibold">
          University of Bhinneka Nusantara
        </h4>
        <p className="text-[#ADB7BE] text-sm mt-1">
          Computer Science / Information Technology
        </p>
      </div>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <div className="relative rounded-2xl overflow-hidden border border-[#33353F] shadow-2xl group">
          <Image
            src="/images/about.jpeg"
            width={500}
            height={500}
            alt="About me illustration"
            className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <div className="mt-6 md:mt-0 text-left flex flex-col h-full justify-center">
          <h2 className="text-4xl font-bold text-white mb-4 tracking-tight">
            About Me
          </h2>
          <p className="text-[#ADB7BE] text-base leading-relaxed mb-6">
            I am a software developer with a strong focus on bridging the gap
            between robust backend logic and intuitive frontend user
            experiences. My expertise spans building automated workflows with
            Python, developing scalable full-stack web applications, and
            crafting modern UI/UX digital mockups.
          </p>
          <p className="text-[#ADB7BE] text-base leading-relaxed">
            I thrive on turning complex problems into elegant, functional code.
            With an eye for modern design constraints and a passion for
            continuous learning, I aim to deliver digital solutions that are
            both technically sound and delightful to use.
          </p>

          <div className="flex flex-row justify-start mt-8 border-b border-[#33353F] pb-2">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
          </div>

          <div className="mt-6 min-h-[120px]">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
