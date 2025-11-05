'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ProjectsHero = () => {
  return (
    <section className="pt-32 pb-16 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="heading-1 text-gray-900 mb-6">
            Våre prosjekter
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Med over 500 installerte heiser har vi bred erfaring fra alle typer 
            bygninger. Her er et utvalg av våre referanseprosjekter som viser 
            mangfoldet i vårt arbeid.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsHero
