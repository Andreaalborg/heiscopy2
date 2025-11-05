'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  WrenchScrewdriverIcon,
  ShieldCheckIcon,
  SparklesIcon,
  ClockIcon,
  CogIcon,
  DocumentTextIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    icon: WrenchScrewdriverIcon,
    title: 'Heisinstallasjon',
    description: 'Profesjonell installasjon av nye heiser fra IMEM',
    image: '/images/service-1.jpg',
    features: [
      'Behovsanalyse og rådgivning',
      'Prosjektering og design',
      'Komplett installasjon',
      'Testing og igangkjøring',
      'Opplæring av personell'
    ]
  },
  {
    icon: ShieldCheckIcon,
    title: 'Vedlikehold',
    description: 'Regelmessig vedlikehold for optimal drift',
    image: '/images/service-2.jpg',
    features: [
      'Forebyggende vedlikehold',
      'Månedlige inspeksjoner',
      'Smøring og justering',
      'Sikkerhetssjekker',
      'Detaljert rapportering'
    ]
  },
  {
    icon: SparklesIcon,
    title: 'Modernisering',
    description: 'Oppgrader eksisterende heiser med ny teknologi',
    image: '/images/service-3.jpg',
    features: [
      'Styringssystem-oppgradering',
      'Energieffektivisering',
      'Kabinrenovering',
      'Sikkerhetsoppgraderinger',
      'Økt hastighet og komfort'
    ]
  },
  {
    icon: ClockIcon,
    title: '24/7 Nødservice',
    description: 'Alltid tilgjengelig når du trenger oss',
    features: [
      'Døgnåpen vakttelefon',
      'Rask responstid',
      'Erfarne teknikere',
      'Midlertidig reparasjon',
      'Permanent løsning'
    ]
  },
  {
    icon: CogIcon,
    title: 'Reparasjoner',
    description: 'Ekspertise på alle typer heisreparasjoner',
    features: [
      'Feilsøking og diagnose',
      'Komponentbytte',
      'Elektronikkreparasjon',
      'Mekaniske reparasjoner',
      'Garantert arbeid'
    ]
  },
  {
    icon: DocumentTextIcon,
    title: 'Konsulentbistand',
    description: 'Rådgivning for heisprosjekter',
    features: [
      'Teknisk rådgivning',
      'Prosjektplanlegging',
      'Kostnadsestimater',
      'Regelverksveiledning',
      'Second opinion'
    ]
  }
]

const ServicesList = () => {
  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Services Grid (uten bilder) */}
        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow"
              >
                <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                  <Icon className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm">
                  {service.description}
                </p>
                <ul className="space-y-1.5">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2">
                      <div className="w-1 h-1 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-xs text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ServicesList
