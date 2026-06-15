import { cvData } from "@/data/cvData";

export default function About() {
  return (
    <div className="w-full h-full pt-32 pb-10 px-6 flex flex-col items-center"> 
       <div className="max-w-4xl w-full bg-gray-800/50 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-2xl shadow-2xl">
          
          <div className="flex items-center gap-4 mb-8">
            <div className="h-px flex-1 bg-gradient-to-r from-blue-500 to-transparent"></div>
            <h2 className="text-3xl font-bold text-white uppercase tracking-widest">À Propos</h2>
            <div className="h-px flex-1 bg-gradient-to-l from-blue-500 to-transparent"></div>
          </div>

          <p className="text-xl text-gray-300 leading-relaxed font-light italic border-l-4 border-blue-500 pl-6">
            {cvData.profile.summary}
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
             <div className="space-y-4">
                <h3 className="text-blue-400 font-mono text-sm uppercase tracking-wider">Expertise</h3>
                <p className="text-gray-400 text-sm">9 années d'expérience en transformation de systèmes legacy et déploiement d'architectures modernes.</p>
             </div>
             <div className="space-y-4">
                <h3 className="text-blue-400 font-mono text-sm uppercase tracking-wider">Formation</h3>
                <p className="text-gray-400 text-sm">Formé par la pédagogie 42. Orienté projet, résolution de problèmes complexes et optimisation de performance.</p>
             </div>
          </div>
       </div>
    </div>
  );
}