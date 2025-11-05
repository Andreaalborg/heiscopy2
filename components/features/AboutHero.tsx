'use client'

import React from 'react'
import { motion } from 'framer-motion'

const AboutHero = () => {
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
            Om IMEM Lifts Norway
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Siden etableringen har vi vært dedikert til å levere førsteklasses heisløsninger 
            til norske kunder. Som autorisert IMEM-partner kombinerer vi lokal ekspertise 
            med internasjonal kvalitet og teknologi.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">30+</div>
            <div className="text-gray-600">År i bransjen</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
            <div className="text-gray-600">Installerte heiser</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-blue-600 mb-2">15+</div>
            <div className="text-gray-600">Erfarne teknikere</div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default AboutHero
