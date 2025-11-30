'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { PhoneIcon, EnvelopeIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const CTA = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <div className="text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-gray-900 mb-6">
              Ta kontakt med oss
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Har du spørsmål om heisløsninger? Vi er her for å hjelpe deg.
            </p>
          </motion.div>

          {/* Contact Options */}
          <motion.div 
            className="grid md:grid-cols-2 gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <a 
              href="tel:21418103" 
              className="flex items-center justify-center gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:bg-sky-50 hover:border-sky-200 transition-all group"
            >
              <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <PhoneIcon className="h-7 w-7 text-sky-600" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-500">Ring oss</div>
                <div className="text-xl font-semibold text-gray-900">21 41 81 03</div>
              </div>
            </a>
            
            <a 
              href="mailto:post@imemnorway.no" 
              className="flex items-center justify-center gap-4 p-6 rounded-xl bg-gray-50 border border-gray-100 hover:bg-sky-50 hover:border-sky-200 transition-all group"
            >
              <div className="w-14 h-14 bg-sky-100 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                <EnvelopeIcon className="h-7 w-7 text-sky-600" />
              </div>
              <div className="text-left">
                <div className="text-sm text-gray-500">Send e-post</div>
                <div className="text-xl font-semibold text-gray-900">post@imemnorway.no</div>
              </div>
            </a>
          </motion.div>

          {/* Link to IMEM main site */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-600 mb-4">
              Vil du vite mer om IMEM og våre produkter?
            </p>
            <a 
              href="https://imem.com/en/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sky-600 hover:text-sky-700 font-medium transition-colors"
            >
              Besøk IMEM.com
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA
