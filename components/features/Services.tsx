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
    title: 'Nyinstallasjon',
    description: 'Profesjonell installasjon av nye IMEM-heiser. Vi leverer komplette løsninger tilpasset din bygning.',
    link: 'https://imem.com/en/lifts/'
  },
  {
    icon: SparklesIcon,
    title: 'Modernisering',
    description: 'Oppgrader eksisterende heiser med moderne teknologi. Øk sikkerhet, komfort og energieffektivitet.',
    link: 'https://imem.com/en/lifts/'
  },
  {
    icon: ShieldCheckIcon,
    title: 'Service & Vedlikehold',
    description: 'Regelmessig vedlikehold for optimal drift og sikkerhet. Forleng levetiden på din heis.',
    link: '/kontakt'
  },
  {
    icon: ArrowPathIcon,
    title: '24/7 Nødservice',
    description: 'Rask respons ved nødsituasjoner. Vårt erfarne team er tilgjengelig døgnet rundt.',
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
          <h2 className="heading-2 text-gray-900 mb-4">
            Hva vi tilbyr
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Som totallerandør leverer vi alt innen heis – fra nyinstallasjon til service og modernisering
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon
            const isExternal = service.link.startsWith('http')
            
            const CardContent = (
              <Card className="h-full hover:border-sky-500 hover:shadow-lg transition-all duration-300 p-6">
                <div className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-sky-100 rounded-full flex items-center justify-center mb-4">
                    <Icon className="h-8 w-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {service.description}
                  </p>
                  <span className="text-sky-600 font-medium hover:underline inline-flex items-center gap-1">
                    {isExternal ? 'Se produkter' : 'Kontakt oss'} 
                    {isExternal && (
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                      </svg>
                    )}
                    {!isExternal && ' →'}
                  </span>
                </div>
              </Card>
            )

            return (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                {isExternal ? (
                  <a href={service.link} target="_blank" rel="noopener noreferrer">
                    {CardContent}
                  </a>
                ) : (
                  <Link href={service.link}>
                    {CardContent}
                  </Link>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services
