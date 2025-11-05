'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  CheckBadgeIcon,
  ClockIcon,
  UserGroupIcon,
  CurrencyDollarIcon,
  AcademicCapIcon,
  GlobeEuropeAfricaIcon
} from '@heroicons/react/24/outline'

const reasons = [
  {
    icon: CheckBadgeIcon,
    title: 'Autorisert IMEM-partner',
    description: 'Offisiell forhandler med direkte tilgang til IMEMs kvalitetsprodukter og support.'
  },
  {
    icon: ClockIcon,
    title: '30+ års erfaring',
    description: 'Bred erfaring innen heisinstallasjon, service og modernisering.'
  },
  {
    icon: UserGroupIcon,
    title: 'Sertifiserte teknikere',
    description: 'Vårt team består av høyt kvalifiserte og sertifiserte heisteknikere.'
  },
  {
    icon: CurrencyDollarIcon,
    title: 'Konkurransedyktige priser',
    description: 'Beste verdi for pengene med transparente priser og ingen skjulte kostnader.'
  },
  {
    icon: AcademicCapIcon,
    title: 'Kontinuerlig opplæring',
    description: 'Vi holder oss oppdatert med de nyeste teknologiene og standardene.'
  },
  {
    icon: GlobeEuropeAfricaIcon,
    title: 'Miljøvennlige løsninger',
    description: 'Energieffektive heiser som reduserer miljøpåvirkning og driftskostnader.'
  }
]

const WhyChooseUs = () => {
  return (
    <section className="section bg-imem-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-imem-gray-900 mb-4">
            Hvorfor velge IMEM Lifts Norway?
          </h2>
          <p className="text-xl text-imem-gray-600 max-w-3xl mx-auto">
            Vi kombinerer lokal ekspertise med internasjonal kvalitet for å levere de beste heisløsningene
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => {
            const Icon = reason.icon
            return (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, margin: "-50px" }}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-imem-blue-light/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-imem-blue" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-imem-gray-900 mb-2">
                      {reason.title}
                    </h3>
                    <p className="text-imem-gray-600">
                      {reason.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
