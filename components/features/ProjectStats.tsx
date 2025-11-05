'use client'

import React from 'react'
import { motion } from 'framer-motion'

const stats = [
  { number: '500+', label: 'Installerte heiser' },
  { number: '50+', label: 'Boligprosjekter' },
  { number: '30+', label: 'Næringsbygg' },
  { number: '20+', label: 'Offentlige bygg' },
]

const ProjectStats = () => {
  return (
    <section className="section bg-gradient-to-br from-blue-500 to-blue-600 text-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 mb-4">
            Prosjekter i tall
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Våre tall taler for seg selv - vi har levert kvalitet i over 30 år
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold mb-2">
                {stat.number}
              </div>
              <div className="text-blue-100">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectStats
