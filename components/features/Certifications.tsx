'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  ShieldCheckIcon, 
  AcademicCapIcon,
  DocumentCheckIcon,
  GlobeEuropeAfricaIcon 
} from '@heroicons/react/24/outline'

const certifications = [
  {
    icon: ShieldCheckIcon,
    title: 'ISO 9001:2015',
    description: 'Sertifisert kvalitetsstyringssystem'
  },
  {
    icon: DocumentCheckIcon,
    title: 'Heisdirektivet',
    description: 'Godkjent iht. EU direktiv 2014/33/EU'
  },
  {
    icon: AcademicCapIcon,
    title: 'Autorisert IMEM-partner',
    description: 'Offisiell forhandler og serviceagent'
  },
  {
    icon: GlobeEuropeAfricaIcon,
    title: 'Miljøsertifisert',
    description: 'ISO 14001 miljøstyringssystem'
  }
]

const Certifications = () => {
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
            Våre sertifiseringer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Vi holder høyeste standard innen kvalitet, sikkerhet og miljø
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon
            return (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-gray-600">
                  {cert.description}
                </p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Certifications
