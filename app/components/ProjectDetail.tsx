'use client'
import { motion, AnimatePresence } from "framer-motion";

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

export default function ProjectDetail({ project, onClose }: { project: Project | null, onClose: () => void }) {
  if (!project) return null;

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div 
          initial={{ scale: 0.9 }} animate={{ scale: 1 }} exit={{ scale: 0.9 }}
          className="bg-gray-900 border border-blue-500/30 p-8 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
          onClick={(e) => e.stopPropagation()}
        >
          <h2 className="text-3xl font-bold text-white mb-4">{project.name}</h2>
          <p className="text-gray-300 mb-6">{project.details}</p>
          
          <h4 className="font-bold text-blue-400 mb-2">Défis Techniques :</h4>
          <ul className="list-disc ml-5 mb-6 text-gray-400 space-y-1">
            {project.challenges?.map((c: string, i: number) => <li key={i}>{c}</li>)}
          </ul>
          
          <h4 className="font-bold text-emerald-400 mb-2">Bénéfices :</h4>
          <p className="text-gray-400 mb-8">{project.benefits}</p>
          
          <div className="flex flex-wrap gap-4 mt-8">
            <button 
              onClick={onClose} 
              className="px-6 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-700 transition-colors"
            >
              Fermer
            </button>
            
            {project.url !== "#" && (
              <a 
                href={project.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="px-6 py-2 bg-blue-600 rounded-lg text-white hover:bg-blue-500 transition-colors flex items-center gap-2"
              >
                Voir le projet <span>↗</span>
              </a>
            )}
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}