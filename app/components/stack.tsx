import { cvData } from "@/data/cvData";
import { Server, Code2, Database, Terminal, Wrench } from "lucide-react";

export default function Stack() {
  const categories = [
    { name: "Langages", icon: <Code2 className="text-blue-400" />, skills: cvData.hard_skills.languages_runtimes },
    { name: "Frameworks", icon: <Server className="text-emerald-400" />, skills: cvData.hard_skills.frameworks_libraries },
    { name: "DevOps & OPS", icon: <Terminal className="text-purple-400" />, skills: cvData.hard_skills.devops_infrastructure },
    { name: "Data & CMS", icon: <Database className="text-orange-400" />, skills: cvData.hard_skills.databases_cms },
    { name: "Outils", icon: <Wrench className="text-yellow-400" />, skills: cvData.hard_skills.tools_methods },
  ];

  return (
    <div className="w-full h-full pt-32 pb-10 px-6 flex flex-col items-center">
      <div className="max-w-5xl w-full">
        <h2 className="text-3xl font-bold text-white mb-12 text-center tracking-widest uppercase">Stack Technique</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat, idx) => (
            <div key={idx} className="bg-gray-800/40 border border-white/5 p-6 rounded-xl hover:border-blue-500/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                {cat.icon}
                <h3 className="font-semibold text-gray-200">{cat.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.skills.map((skill) => (
                  <span key={skill} className="px-2 py-1 bg-gray-900 border border-gray-700 rounded text-xs text-gray-400 font-mono">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}