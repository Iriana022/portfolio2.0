// components/PortfolioContent.tsx
'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from "./hero"
import About from "./About"
import Stack from './stack'
import Projects from './Projects'
import Contact from './Contact'

export default function PortfolioContent() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <main className="bg-gray-900 min-h-screen text-white">
      <Hero activeSection={activeSection} setActiveSection={setActiveSection} />

      <AnimatePresence mode="wait">
        {activeSection === 'about' && (
          <motion.div key="about" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <About />
          </motion.div>
        )}
        
        {activeSection === 'stack' && (
          <motion.div key="stack" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}>
            <Stack />
          </motion.div>
        )}

        {activeSection === 'projects' && (
          <motion.div key="projects" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.4 }}>
            <Projects />
          </motion.div>
        )}

        {activeSection === 'contact' && (
          <motion.div key="contact" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }} transition={{ duration: 0.4 }}>
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}