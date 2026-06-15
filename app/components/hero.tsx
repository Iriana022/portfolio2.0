'use client'

import { useState } from 'react'
import { Dialog, DialogPanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Projets', href: '#projects' },
  { name: 'Stack Technique', href: '#stack' },
  { name: 'À Propos', href: '#about' },
]

export default function Hero() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <div className="bg-gray-900 min-h-screen">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          <div className="flex lg:flex-1">
            <a href="/" className="flex items-center gap-2 group">
              <svg width="220" height="50" viewBox="0 0 220 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                <text x="0" y="30" fontFamily="monospace" fontSize="28" fontWeight="bold" fill="#ffffff">
                  IRIANA R.
                </text>
                <rect x="180" y="10" width="8" height="22" fill="#3b82f6" className="group-hover:fill-white transition-colors" />
                <rect x="194" y="10" width="8" height="22" fill="#3b82f6" className="group-hover:fill-white transition-colors" />
              </svg>
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <Bars3Icon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <a key={item.name} href={item.href} className="text-sm/6 font-semibold text-white hover:text-blue-400 transition-colors">
                {item.name}
              </a>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <a href="#contact" className="text-sm/6 font-semibold text-white border border-white/20 px-4 py-1.5 rounded-full hover:bg-white/10 transition-all">
              Contact <span aria-hidden="true">&rarr;</span>
            </a>
          </div>
        </nav>
        
        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50 bg-gray-900/80 backdrop-blur-sm" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm">
            <div className="flex items-center justify-between">
              <span className="font-bold text-white font-mono">IRIANA R.</span>
              <button type="button" onClick={() => setMobileMenuOpen(false)} className="-m-2.5 rounded-md p-2.5 text-gray-200">
                <XMarkIcon aria-hidden="true" className="size-6" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <a key={item.name} href={item.href} onClick={() => setMobileMenuOpen(false)} className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold text-white hover:bg-white/5">
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* Main Content */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56 text-center">
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">
            Architecte <span className="text-blue-500">Fullstack</span> & DevOps
          </h1>
          <p className="mt-8 text-lg font-medium text-gray-400">
            Expertise en systèmes distribués, conteneurisation et performance algorithmique. 
            Développement robuste, orienté scalabilité.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a href="#projects" className="rounded-md bg-blue-600 px-5 py-3 text-sm font-semibold text-white hover:bg-blue-500 transition-all">
              Voir mes projets
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}