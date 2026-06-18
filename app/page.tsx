import PortfolioContent from '@/app/components/PortfolioContent';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="relative w-full min-h-screen">
      {/* Fond forcé directement dans la page */}
      <div className="fixed inset-0 -z-10">
        <Image 
          src="/7be3e6dc-b445-4dac-a3a8-e61ef4e0e5ff.jpg.jpeg" 
          alt="Background" 
          fill
          priority
          style={{ objectFit: 'cover' }}
        />
        <div className="absolute inset-0 bg-gray-900/85" />
      </div>

      {/* Contenu */}
      <div className="relative z-10">
        <PortfolioContent />
      </div>
    </main>
  );
}