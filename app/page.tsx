'use client'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Hero from "./components/hero"
import About from "./components/About"
import Stack from './components/stack'
import Projects from './components/Projects'

export default function Home() {
  const [activeSection, setActiveSection] = useState('home')

  return (
    <main className="bg-gray-900 min-h-screen text-white">
      {/* On passe setActiveSection au Hero pour que les liens du menu fonctionnent */}
      <Hero activeSection={activeSection} setActiveSection={setActiveSection} />

      {/* Zone de contenu dynamique */}
      <AnimatePresence mode="wait">
        {activeSection === 'about' && (
          <motion.div
            key="about"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            <About />
          </motion.div>
        )}
        {activeSection === 'stack' && (
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Stack />
          </motion.div>
        )}
        {activeSection === 'projects' && (
          <motion.div
            key="projects"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
          >
            <Projects />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  )
}