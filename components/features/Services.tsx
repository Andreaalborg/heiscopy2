'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Card from '@/components/ui/Card'
import { 
  WrenchScrewdriverIcon,
  ArrowPathIcon,
  SparklesIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const services = [
  {
    icon: WrenchScrewdriverIcon,
    title: 'Heisinstallasjon',
    description: 'Profesjonell installasjon av nye heiser fra IMEM. Vi leverer skreddersydde løsninger tilpasset din bygning.',
    link: '/tjenester/installasjon'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Vedlikehold',
    description: 'Regelmessig vedlikehold for optimal drift og sikkerhet. Forleng levetiden på din heis med våre serviceavtaler.',
    link: '/tjenester/vedlikehold'
  },
  {
    icon: SparklesIcon,
    title: 'Modernisering',
    description: 'Oppgrader eksisterende heiser med moderne teknologi. Øk sikkerhet, komfort og energieffektivitet.',
    link: '/tjenester/modernisering'
  },
  {
    icon: ArrowPathIcon,
    title: '24/7 Nødservice',
    description: 'Rask respons ved nødsituasjoner. Vårt erfarne team er tilgjengelig døgnet rundt, året rundt.',
    link: '/kontakt'
  }
]

const Services = () => {
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
          <h2 className="heading-2 text-imem-gray-900 mb-4">
            Våre tjenester
          </h2>
          <p className="text-xl text-imem-gray-600 max-w-3xl mx-auto">
            Fra installasjon til vedlikehold - vi har ekspertisen for å håndtere alle dine heisbehov
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <Link href={service.link}>
                  <Card className="h-full hover:border-imem-blue transition-colors">
                    <div className="flex flex-col items-center text-center">
                      <div className="w-16 h-16 bg-imem-blue-light/20 rounded-full flex items-center justify-center mb-4">
                        <Icon className="h-8 w-8 text-imem-blue" />
                      </div>
                      <h3 className="text-xl font-semibold text-imem-gray-900 mb-3">
                        {service.title}
                      </h3>
                      <p className="text-imem-gray-600 mb-4 flex-grow">
                        {service.description}
                      </p>
                      <span className="text-imem-blue font-medium hover:underline">
                        Les mer →
                      </span>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
