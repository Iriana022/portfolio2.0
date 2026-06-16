'use client'

import { useState } from "react";
import { cvData } from "@/data/cvData";

export default function Projects() {
  const [filter, setFilter] = useState("Tous");
  
  // Extraire les catégories uniques dynamiquement
  const categories = ["Tous", ...Array.from(new Set(cvData.projects.map(p => p.category)))];

  const filteredProjects = filter === "Tous" 
    ? cvData.projects 
    : cvData.projects.filter(p => p.category === filter);

  return (
    <div className="w-full py-20 px-6 flex flex-col items-center">
      <h2 className="text-3xl font-bold text-white mb-8">Projets</h2>

      {/* Filtres */}
      <div className="flex gap-2 mb-10 overflow-x-auto pb-2">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded-full border text-sm transition-all ${
              filter === cat ? "bg-blue-600 border-blue-500 text-white" : "bg-gray-800 border-gray-700 text-gray-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille de projets */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {filteredProjects.map((project, idx) => (
          <div key={idx} className="bg-gray-900 border border-gray-800 p-6 rounded-xl hover:border-blue-500 transition-all flex flex-col">
            <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
            <p className="text-gray-400 text-sm mb-4 flex-grow">{project.description}</p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tags.map(tag => (
                <span key={tag} className="text-[10px] uppercase tracking-wider text-blue-300 bg-blue-900/20 px-2 py-1 rounded">
                  {tag}
                </span>
              ))}
            </div>
            
            {project.url !== "#" && (
              <a href={project.url} target="_blank" className="mt-4 text-blue-400 text-sm hover:underline">Voir le projet →</a>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}