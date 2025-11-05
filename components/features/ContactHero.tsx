'use client'

import React from 'react'
import { motion } from 'framer-motion'

const ContactHero = () => {
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
            Kontakt oss
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Vi er her for å hjelpe deg med alle dine heisspørsmål. 
            Ta kontakt for gratis befaring, tilbud eller teknisk rådgivning.
          </p>
        </motion.div>
      </div>
    </section>
  )
}

export default ContactHero
