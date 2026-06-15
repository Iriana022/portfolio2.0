'use client'
import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

export default function Hero({ activeSection, setActiveSection }: { activeSection: string, setActiveSection: (s: string) => void }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const menuItems = [
    { name: 'Projets', id: 'projects' },
    { name: 'Stack Technique', id: 'stack' },
    { name: 'À Propos', id: 'about' },
  ]

  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <button onClick={() => setActiveSection('home')} className="flex items-center gap-2 group">
              <svg width="220" height="50" viewBox="0 0 220 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="30" fontFamily="monospace" fontSize="28" fontWeight="bold" fill="#ffffff">IRIANA R.</text>
                <rect x="180" y="10" width="8" height="22" fill="#3b82f6" />
                <rect x="194" y="10" width="8" height="22" fill="#3b82f6" />
              </svg>
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {menuItems.map((item) => (
              <button 
                key={item.name} 
                onClick={() => setActiveSection(item.id)} 
                className="text-sm font-semibold text-white hover:text-blue-400 transition-colors"
              >
                {item.name}
              </button>
            ))}
          </div>
        </nav>
      </header>

      {/* Hero Content (affiché uniquement si on est sur la page d'accueil) */}
      {activeSection === 'home' && (
        <div className="px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 text-center">
            <h1 className="text-5xl font-bold text-white sm:text-7xl">
              Architecte <span className="text-blue-500">Fullstack</span> & DevOps
            </h1>
            <p className="mt-8 text-lg text-gray-400">Expertise en systèmes distribués et conteneurisation.</p>
            <div className="mt-10">
              <button onClick={() => setActiveSection('projects')} className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500">
                Voir mes projets
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}