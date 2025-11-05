'use client'

import React from 'react'
import { motion } from 'framer-motion'

const timelineEvents = [
  {
    year: '1990',
    title: 'Grunnleggelsen',
    description: 'Selskapet ble etablert med fokus på kvalitet og service.'
  },
  {
    year: '2005',
    title: 'IMEM-partnerskap',
    description: 'Ble autorisert forhandler og servicepartner for IMEM.'
  },
  {
    year: '2015',
    title: 'Ekspansjon',
    description: 'Utvidet virksomheten til å dekke hele Norge.'
  },
  {
    year: '2023',
    title: 'Modernisering',
    description: 'Investerte i ny teknologi og digitale løsninger for bedre service.'
  }
]

const Timeline = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-gray-900 mb-4">
            Vår historie
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Fra lokal aktør til nasjonal leverandør av heisløsninger
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {timelineEvents.map((event, index) => (
            <motion.div
              key={event.year}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className={`flex gap-8 mb-12 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}
            >
              <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{event.title}</h3>
                  <p className="text-gray-600">{event.description}</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  {event.year.slice(2)}
                </div>
                {index < timelineEvents.length - 1 && (
                  <div className="w-0.5 h-24 bg-gray-300 mt-4"></div>
                )}
              </div>
              
              <div className="flex-1"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Timeline
