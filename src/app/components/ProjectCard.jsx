import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const ProjectCard = ({
  imgUrl,
  title,
  description,
  gitUrl,
  previewUrl,
  tags = [],
}) => {
  return (
    <div className="group bg-[#18181b] border border-[#27272a] hover:border-[#3f3f46] rounded-2xl overflow-hidden transition-all duration-300 flex flex-col h-full shadow-lg hover:shadow-black/40">
      {/* Image Container — Gambar langsung terang 100% sejak awal */}
      <div
        className="h-48 sm:h-52 relative overflow-hidden bg-cover bg-center"
        style={{ backgroundImage: `url(${imgUrl})` }}
      >
        {/* Lapisan redup awal sudah dihapus dari sini */}

        {/* Modern Hover Control Overlay (Hanya muncul saat di-hover) */}
        <div className="absolute inset-0 bg-[#09090b]/75 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 backdrop-blur-xs">
          <Link
            href={gitUrl}
            className="h-12 w-12 border border-zinc-700 rounded-full flex items-center justify-center bg-zinc-900/80 hover:bg-zinc-800 hover:border-zinc-400 transition-all duration-200 group/btn"
          >
            <CodeBracketIcon className="h-5 w-5 text-zinc-400 group-hover/btn:text-white transition-colors duration-200" />
          </Link>
          <Link
            href={previewUrl}
            className="h-12 w-12 border border-zinc-700 rounded-full flex items-center justify-center bg-zinc-900/80 hover:bg-zinc-800 hover:border-zinc-400 transition-all duration-200 group/btn"
          >
            <EyeIcon className="h-5 w-5 text-zinc-400 group-hover/btn:text-white transition-colors duration-200" />
          </Link>
        </div>
      </div>

      {/* Content Area with Flex-Grow for Uniform Height */}
      <div className="flex flex-col flex-grow p-5 justify-between">
        <div>
          <h5 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-indigo-400 transition-colors duration-200">
            {title}
          </h5>
          <p className="text-[#ADB7BE] text-sm leading-relaxed mb-4">
            {description}
          </p>
        </div>

        {/* Small Inline Badges for Tech Category */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-2">
          {tags.map((tagItem, idx) => (
            <span
              key={idx}
              className="text-[10px] uppercase font-bold tracking-wider bg-zinc-800/60 border border-zinc-700/50 text-zinc-400 px-2 py-0.5 rounded-md"
            >
              {tagItem}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
