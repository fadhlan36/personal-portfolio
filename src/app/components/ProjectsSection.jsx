"use client";
import React, { useState, useRef } from "react";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";

const projectsData = [
  {
    id: 1,
    title: "Talka Social Media App",
    description:
      "A full-featured social media platform engineered for seamless story sharing.",
    image: "/images/projects/talka.jpeg",
    tag: ["All", "Web App"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 2,
    title: "Jourdy — Your Journal Buddy",
    description:
      "A smart digital journaling web app featuring AI-powered mood detection and personalized 7-day emotional insights.",
    image: "/images/projects/jourdy.jpeg",
    tag: ["All", "Web App"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 3,
    title: "Brick Store E-Commerce",
    description:
      "An e-commerce platform dedicated to LEGO enthusiasts, offering a wide selection of sets and exclusive products.",
    image: "/images/projects/brickStore.jpeg",
    tag: ["All", "Web App"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 4,
    title: "Taskify Task Management",
    description:
      "A Trello-inspired visual project management platform engineered with interactive Kanban workflows.",
    image: "/images/projects/taskify.jpeg",
    tag: ["All", "Web App"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 5,
    title: "Xtation Studio Music",
    description:
      "An online reservation web platform for musicians to search, view, and book music studios in real time.",
    image: "/images/projects/xtation.jpeg",
    tag: ["All", "Web App"],
    gitUrl: "/",
    previewUrl: "/",
  },
  {
    id: 6,
    title: "Professional Personal Portfolio",
    description:
      "A clean, responsive portfolio web application designed to showcase development projects and UI/UX mockups.",
    image: "/images/projects/portfolio.jpeg",
    tag: ["All", "Web App"],
    gitUrl: "/",
    previewUrl: "/",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag),
  );

  const cardVariants = {
    initial: { y: 40, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section id="projects" className="py-12">
      <div className="text-center max-w-xl mx-auto mb-8 md:mb-10">
        <h2 className="text-4xl font-bold text-white mb-3 tracking-tight">
          Featured Projects
        </h2>
        <p className="text-[#ADB7BE] text-sm sm:text-base">
          A curated collection of digital solutions, combining clean development
          patterns with functional user experiences.
        </p>
      </div>

      <div className="text-white flex flex-row justify-center items-center gap-3 py-4 mb-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web App"
          isSelected={tag === "Web App"}
        />
      </div>

      <ul
        ref={ref}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {filteredProjects.map((project, index) => (
          <motion.li
            key={project.id}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.4, delay: index * 0.15 }}
            className="list-none"
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              imgUrl={project.image}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
              tags={project.tag.filter((t) => t !== "All")}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
