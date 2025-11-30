'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

const products = [
  {
    title: 'Personheiser',
    description: 'Moderne og komfortable personheiser for boligbygg, kontorer og offentlige bygg. Tilpasset alle behov og bygningstyper.',
    image: '🏢',
    link: 'https://imem.com/en/lifts/'
  },
  {
    title: 'Vareheiser',
    description: 'Robuste vareheiser designet for effektiv transport av gods. Ideell for lager, industri og forretningsbygg.',
    image: '📦',
    link: 'https://imem.com/en/lifts/'
  },
  {
    title: 'Tilgjengelighetsheiser',
    description: 'Heiser designet for universell utforming. Sikrer tilgjengelighet for alle brukere i alle typer bygg.',
    image: '♿',
    link: 'https://imem.com/en/lifts/'
  },
  {
    title: 'Rulletrapper',
    description: 'Energieffektive rulletrapper for kjøpesentre, stasjoner og offentlige bygg. Høy kapasitet og driftssikkerhet.',
    image: '🛗',
    link: 'https://imem.com/en/escalators/'
  },
  {
    title: 'Rullende fortau',
    description: 'Horisontale transportløsninger for flyplasser, stasjoner og store bygningskomplekser.',
    image: '🚶',
    link: 'https://imem.com/en/moving-walks/'
  },
  {
    title: 'IMEM Connectivity',
    description: 'Smart heisteknologi med fjernovervåking, prediktivt vedlikehold og sanntidsdata for optimal drift.',
    image: '📡',
    link: 'https://imem.com/en/connectivity/'
  }
]

export default function ProdukterPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-32 pb-20">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.03) 35px, rgba(255,255,255,.03) 70px)`,
          }} />
        </div>
        
        <div className="container-custom relative z-10">
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
            {products.map((product, index) => (
              <motion.a
                key={product.title}
                href={product.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-sky-50 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-sky-200"
              >
                <div className="text-5xl mb-4">{product.image}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">
                  {product.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {product.description}
                </p>
                <span className="inline-flex items-center gap-2 text-sky-600 font-medium">
                  Se produkter
                  <ArrowTopRightOnSquareIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </motion.a>
            ))}
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
                IMEM er en ledende europeisk heisprodusent med hovedkontor i Spania. 
                Med over 40 års erfaring leverer IMEM innovative og pålitelige heisløsninger 
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

