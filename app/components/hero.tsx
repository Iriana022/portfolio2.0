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
    { name: 'Contact', id: 'contact' },
  ]

  return (
    <div className="">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          <button onClick={() => setActiveSection('home')} className="flex items-center gap-2 group">
            <svg width="220" height="50" viewBox="0 0 220 50" fill="none" xmlns="http://www.w3.org/2000/svg">
              <text x="0" y="30" fontFamily="monospace" fontSize="28" fontWeight="bold" fill="#ffffff">IRIANA R.</text>
              <rect x="180" y="10" width="8" height="22" className="fill-blue-500" />
              <rect x="194" y="10" width="8" height="22" className="fill-blue-500" />
            </svg>
          </button>

          <div className="flex lg:hidden">
            <button type="button" className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-400" onClick={() => setMobileMenuOpen(true)}>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          <div className="hidden lg:flex lg:gap-x-12">
            {menuItems.map((item) => (
              <button key={item.name} onClick={() => setActiveSection(item.id)} className="text-sm font-semibold text-white hover:text-blue-400 transition-colors">
                {item.name}
              </button>
            ))}
          </div>
        </nav>

        <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
          <div className="fixed inset-0 z-50 bg-gray-900/80" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-white/10">
            <div className="flex items-center justify-between">
              <button type="button" className="-m-2.5 rounded-md p-2.5 text-gray-400" onClick={() => setMobileMenuOpen(false)}>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {menuItems.map((item) => (
                    <button
                      key={item.name}
                      onClick={() => { setActiveSection(item.id); setMobileMenuOpen(false); }}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-white hover:bg-gray-800 w-full text-left"
                    >
                      {item.name}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {activeSection === 'home' && (
        <div className="px-6 pt-14 lg:px-8">
          <div className="mx-auto max-w-2xl py-32 text-center">
            <h1 className="text-4xl font-bold text-white sm:text-7xl">
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