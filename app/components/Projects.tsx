'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cvData } from "@/data/cvData";
import ProjectDetail from "./ProjectDetail";

interface Project {
  name: string;
  category: string;
  tags: string[];
  description: string;
  details: string;
  challenges: string[];
  benefits: string;
  url: string;
}

export default function Projects() {
  const [filter, setFilter] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState(null);

  // Extraire les catégories uniques dynamiquement
  const categories = ["Tous", ...Array.from(new Set(cvData.projects.map(p => p.category)))];

  const filteredProjects = filter === "Tous" 
    ? cvData.projects 
    : cvData.projects.filter(p => p.category === filter);

  return (
    <div className="w-full py-20 px-6 flex flex-col items-center">
      <motion.h2 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-4xl font-black text-white mb-12"
      >
        Mes Réalisations
      </motion.h2>

      {/* Filtres */}
      <div className="flex gap-3 mb-12 overflow-x-auto pb-4 justify-center">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full border text-sm font-medium transition-all ${
              filter === cat 
                ? "bg-blue-600 border-blue-500 text-white shadow-[0_0_15px_rgba(37,99,235,0.5)]" 
                : "bg-gray-800/50 border-white/10 text-gray-400 hover:border-blue-500/50"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille de projets */}
      <motion.div 
        layout
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full"
      >
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, idx) => (
            <motion.div 
              key={project.name}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              onClick={() => setSelectedProject(project)}
              className="cursor-pointer group bg-gray-900/40 backdrop-blur-md border border-white/10 p-6 rounded-2xl hover:border-blue-500/50 transition-all hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(59,130,246,0.3)] flex flex-col"
            >
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {project.name}
              </h3>
              <p className="text-gray-400 text-sm mb-6 flex-grow">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag: string) => (
                  <span key={tag} className="text-[10px] uppercase font-bold tracking-widest text-blue-300 bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="mt-6 text-blue-400 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all">
                Voir les détails <span>→</span>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* Modale de détails */}
      <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />
    </div>
  );
}