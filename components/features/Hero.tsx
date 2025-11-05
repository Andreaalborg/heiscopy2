'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-gray-50 to-blue-100 pt-28 md:pt-36">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(0,0,0,.05) 35px, rgba(0,0,0,.05) 70px)`,
        }} />
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="heading-1 text-gray-900 mb-6">
              Din pålitelige partner for{' '}
              <span className="text-blue-500">heisløsninger</span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              IMEM Lifts Norway AS leverer førsteklasses heisinstallasjon, 
              vedlikehold og modernisering. Med over 30 års erfaring er vi 
              din autoriserte IMEM-partner i Norge.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt">
                <Button size="lg" variant="primary">
                  Få gratis befaring
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/tjenester">
                <Button size="lg" variant="outline">
                  Se våre tjenester
                </Button>
              </Link>
            </div>

            {/* Trust Indicators */}
            <motion.div 
              className="grid grid-cols-3 gap-8 mt-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div>
                <div className="text-3xl font-bold text-blue-500">30+</div>
                <div className="text-sm text-gray-600">års erfaring</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-500">500+</div>
                <div className="text-sm text-gray-600">fornøyde kunder</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-blue-500">24/7</div>
                <div className="text-sm text-gray-600">nødservice</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Graphic (uten foto) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-blue-700 rounded-2xl shadow-2xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-4">IMEM</div>
                  <div className="text-2xl">LIFTS</div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-orange-500 rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
