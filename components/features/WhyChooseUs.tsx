'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  CheckBadgeIcon,
  ShieldCheckIcon,
  UserGroupIcon,
  GlobeAltIcon
} from '@heroicons/react/24/outline'

const reasons = [
  {
    icon: CheckBadgeIcon,
    title: 'Autorisert IMEM-partner',
    description: 'Offisiell forhandler med direkte tilgang til IMEMs kvalitetsprodukter og support fra Spania.'
  },
  {
    icon: UserGroupIcon,
    title: 'Erfarne fagfolk',
    description: 'Teamet vårt har lang erfaring fra heisbransjen og leverer kvalitet i alle ledd.'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Sentralt godkjent',
    description: 'Vi er sentralt godkjent for heisarbeid og følger alle norske forskrifter og standarder.'
  },
  {
    icon: GlobeAltIcon,
    title: 'Totallerandør',
    description: 'Alt innen heis – nyinstallasjon, modernisering, service og 24/7 nødservice.'
  }
]

const WhyChooseUs = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-gray-900 mb-4">
              Hvorfor velge oss?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              IMEM Lifts Norway kombinerer lokal ekspertise med internasjonal kvalitet fra IMEM i Spania.
            </p>

            <div className="space-y-6">
              {reasons.map((reason, index) => {
                const Icon = reason.icon
                return (
                  <motion.div
                    key={reason.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-12 h-12 bg-sky-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Icon className="h-6 w-6 text-sky-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">
                        {reason.title}
                      </h3>
                      <p className="text-gray-600">
                        {reason.description}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>

          {/* Right side - Certification Badge */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 lg:p-12">
              <div className="text-center">
                <div className="mb-6">
                  <Image 
                    src="/images/sentral-godkjenning.png" 
                    alt="Sentralt Godkjent" 
                    width={150}
                    height={150}
                    className="mx-auto"
                  />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Sentralt Godkjent
                </h3>
                <p className="text-gray-600 mb-6">
                  IMEM Lifts Norway AS er sentralt godkjent for heisarbeid i Norge. 
                  Dette sikrer at vi oppfyller alle krav til kvalitet og sikkerhet.
                </p>
                <a 
                  href="https://imem.com/en/about/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sky-600 font-medium hover:underline"
                >
                  Les mer om IMEM
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-sky-500 rounded-full opacity-10 blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500 rounded-full opacity-10 blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
