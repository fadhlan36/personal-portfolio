"use client";
import React from "react";

const techFocusList = [
  {
    category: "Core Programming",
    skills: ["Python", "JavaScript (ES6+)", "Node.js"],
    description:
      "Building robust backend logic, automated scripts, and efficient data workflows.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    category: "UI/UX Design",
    skills: ["Figma", "Wireframing", "User-Centric Design"],
    description:
      "Crafting intuitive user interfaces, digital mockups, and seamless user experiences with a modern aesthetic.",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    category: "Web Development",
    skills: ["React.js", "Next.js", "Tailwind CSS"],
    description:
      "Crafting modern, responsive, and high-performance interactive web applications.",
    gradient: "from-cyan-500 to-teal-600",
  },
];

const AchievementsSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="mb-8">
        <h2 className="text-white text-2xl font-bold mb-2">
          Technical Focus & Expertise
        </h2>
        <p className="text-[#ADB7BE] text-base max-w-xl">
          A glance at the core technologies and domains I specialize in to bring
          complex ideas to life.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {techFocusList.map((item, index) => {
          return (
            <div
              key={index}
              className="bg-[#181818] border border-[#33353F] hover:border-[#9c33ff] transition-all duration-300 rounded-xl p-6 flex flex-col justify-between group"
            >
              <div>
                <div
                  className={`w-fit text-xs font-semibold px-3 py-1 rounded-full bg-gradient-to-r ${item.gradient} text-white mb-4 shadow-sm`}
                >
                  {item.category}
                </div>
                <p className="text-[#ADB7BE] text-sm leading-relaxed mb-6 group-hover:text-white transition-colors duration-300">
                  {item.description}
                </p>
              </div>

              <div className="flex flex-wrap gap-2 mt-auto">
                {item.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="text-xs bg-[#242426] text-slate-300 px-2.5 py-1 rounded-md border border-[#33353F]"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
