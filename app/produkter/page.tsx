'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { 
  ArrowTopRightOnSquareIcon,
  BuildingOffice2Icon,
  CubeIcon,
  HomeIcon,
  WrenchScrewdriverIcon,
  ArrowPathIcon,
  ShieldCheckIcon
} from '@heroicons/react/24/outline'

const products = [
  {
    title: 'Personheiser',
    description: 'Moderne personheiser for boligbygg, kontorer og offentlige bygg. Inkluderer Silens Pro-serien og SwiftRise med eller uten maskinrom.',
    icon: BuildingOffice2Icon,
    link: 'https://imem.com/en/lifts/'
  },
  {
    title: 'Vareheiser',
    description: 'Robuste vareheiser for effektiv transport av gods. RHINOlift og RHINOlift Pro er ideelle for lager, industri og næringsbygg.',
    icon: CubeIcon,
    link: 'https://imem.com/en/lifts/'
  },
  {
    title: 'Hjemmeheiser',
    description: 'Kompakte heisløsninger for private boliger. IMPROlift og IMPROlift Plus gir komfort og tilgjengelighet i hjemmet.',
    icon: HomeIcon,
    link: 'https://imem.com/en/lifts/'
  },
  {
    title: 'Heismodernisering',
    description: 'Oppgrader eksisterende heiser med Revolution UP. Øk sikkerhet, komfort og energieffektivitet uten full utskiftning.',
    icon: ArrowPathIcon,
    link: 'https://imem.com/en/lifts/'
  },
  {
    title: 'Heiskomponenter',
    description: 'Komplette heiskomponenter inkludert heishytter, strukturer og reservedeler. Alt du trenger for vedlikehold og reparasjon.',
    icon: WrenchScrewdriverIcon,
    link: 'https://imem.com/en/lifts/'
  },
  {
    title: 'Service og vedlikehold',
    description: 'Regelmessig service og vedlikehold for optimal drift og sikkerhet. Vi tilbyr serviceavtaler tilpasset dine behov.',
    icon: ShieldCheckIcon,
    link: '/kontakt'
  }
]

export default function ProdukterPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[400px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero-produkter.jpg"
            alt="Heissjakt"
            fill
            className="object-cover"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-slate-900/70" />
        </div>
        
        <div className="container-custom relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="heading-1 text-white mb-6">
              IMEM Produkter
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Som autorisert IMEM-partner tilbyr vi hele produktsortimentet fra IMEM. 
              Utforsk våre løsninger og finn produktinformasjon på IMEM sin hovedside.
            </p>
            <a 
              href="https://imem.com/en/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-sky-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-600 transition-colors"
            >
              Besøk IMEM.com
              <ArrowTopRightOnSquareIcon className="w-5 h-5" />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="section bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="heading-2 text-gray-900 mb-4">
              Produktkategorier
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Klikk på en kategori for å se detaljert produktinformasjon på IMEM sin nettside
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => {
              const Icon = product.icon
              const isExternal = product.link.startsWith('http')
              return (
                <motion.a
                  key={product.title}
                  href={product.link}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group bg-gray-50 rounded-2xl p-8 hover:bg-sky-50 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-sky-200"
                >
                  <div className="w-16 h-16 bg-sky-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-sky-200 transition-colors">
                    <Icon className="w-8 h-8 text-sky-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                    {product.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {product.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-sky-600 font-medium">
                    {isExternal ? 'Les mer på IMEM.com' : 'Kontakt oss'}
                    {isExternal ? (
                      <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    ) : (
                      <span className="group-hover:translate-x-1 transition-transform">→</span>
                    )}
                  </span>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* About IMEM Section */}
      <section className="section bg-gray-50">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="heading-2 text-gray-900 mb-6">
                Om IMEM
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                IMEM er en ledende europeisk heisprodusent med over 50 års erfaring. 
                Siden 1968 har IMEM levert innovative og pålitelige heisløsninger 
                til kunder over hele verden.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Som autorisert IMEM-partner i Norge har vi direkte tilgang til hele 
                produktsortimentet, reservedeler og teknisk support fra fabrikken.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="https://imem.com/en/about/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-sky-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-sky-700 transition-colors"
                >
                  Les mer om IMEM
                  <ArrowTopRightOnSquareIcon className="w-5 h-5" />
                </a>
                <a 
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-100 transition-colors"
                >
                  Kontakt oss for tilbud
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
