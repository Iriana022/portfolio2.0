import { Metadata } from 'next';
import PortfolioContent from '@/app/components/PortfolioContent';

export const metadata: Metadata = {
  title: 'Iriana Razafimandimby | Fullstack Architect & DevOps',
  description: 'Développeur Fullstack avec 9 ans d\'expérience spécialisé en DevOps, architecture système et solutions Web performantes. Portfolio de projets (42, agence web, agritech).',
};

export default function Home() {
  return <PortfolioContent />;
}