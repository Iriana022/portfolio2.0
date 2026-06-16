// components/Contact.tsx
export default function Contact() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-xl mx-auto bg-gray-800 p-8 rounded-2xl shadow-xl text-center">
        <h2 className="text-3xl font-bold text-white mb-8">Contact</h2>
        
        <div className="space-y-6">
          <div className="p-4 bg-gray-900 rounded-lg">
            <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold">WhatsApp</p>
            <a 
              href="https://wa.me/261321486025" 
              className="text-white text-xl hover:text-blue-400 transition-colors"
            >
              +261 32 14 860 25
            </a>
          </div>

          <div className="p-4 bg-gray-900 rounded-lg">
            <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Email</p>
            <a 
              href="mailto:dev32.irin@gmail.com" 
              className="text-white text-xl hover:text-blue-400 transition-colors"
            >
              dev32.irin@gmail.com
            </a>
          </div>

          <div className="p-4 bg-gray-900 rounded-lg">
            <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold">LinkedIn</p>
            <a 
              href="https://www.linkedin.com/in/iriana-razafimandimby-784b431b0" // Remplace par ton URL exacte
              target="_blank"
              rel="noopener noreferrer"
              className="text-white text-xl hover:text-blue-400 transition-colors"
            >
              linkedin.com/in/Iriana
            </a>
          </div>

          <div className="p-4 bg-gray-900 rounded-lg">
            <p className="text-gray-400 text-sm uppercase tracking-wider font-semibold">Localisation</p>
            <p className="text-white text-xl">Antananarivo 101, Madagascar</p>
          </div>
        </div>
        
        <p className="mt-8 text-gray-500 text-sm">
          Disponible pour de nouvelles opportunités.
        </p>
      </div>
    </section>
  )
}