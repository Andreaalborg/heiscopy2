'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { ArrowRightIcon, PhoneIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 pt-28 md:pt-36">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 35px, rgba(255,255,255,.03) 35px, rgba(255,255,255,.03) 70px)`,
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
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-sm text-white/90">Autorisert IMEM-partner i Norge</span>
            </div>

            <h1 className="heading-1 text-white mb-6">
              Totallerandør innen{' '}
              <span className="text-sky-400">heisløsninger</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              IMEM Lifts Norway AS leverer komplette heisløsninger – fra nyinstallasjon 
              og modernisering til service og vedlikehold. Vi er drevet av erfarne 
              fagfolk med lang erfaring i heisbransjen.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/kontakt">
                <Button size="lg" variant="primary" className="bg-sky-500 hover:bg-sky-600">
                  Kontakt oss
                  <ArrowRightIcon className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <a 
                href="https://imem.com/en/" 
                target="_blank" 
                rel="noopener noreferrer"
              >
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                  Se produkter på IMEM.com
                </Button>
              </a>
            </div>

            {/* Trust Indicators */}
            <motion.div 
              className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-white/10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <div>
                <div className="text-3xl font-bold text-sky-400">Erfarne</div>
                <div className="text-sm text-gray-400">fagfolk</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sky-400">Sentralt</div>
                <div className="text-sm text-gray-400">godkjent</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-sky-400">24/7</div>
                <div className="text-sm text-gray-400">service</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Image/Graphic */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="aspect-square relative">
              {/* IMEM Logo Display */}
              <div className="absolute inset-0 bg-gradient-to-br from-sky-500/20 to-blue-600/20 rounded-2xl backdrop-blur-sm border border-white/10" />
              <div className="absolute inset-0 flex items-center justify-center p-12">
                <Image 
                  src="/images/imem-logo.png" 
                  alt="IMEM Lifts" 
                  width={300}
                  height={300}
                  className="w-full h-auto max-w-[280px] drop-shadow-2xl"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-sky-500 rounded-full opacity-20 blur-xl" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-blue-500 rounded-full opacity-20 blur-2xl" />
            </div>

            {/* Contact Card */}
            <motion.div 
              className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-2xl p-4 flex items-center gap-3"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.4 }}
            >
              <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center">
                <PhoneIcon className="w-6 h-6 text-sky-600" />
              </div>
              <div>
                <div className="text-xs text-gray-500">Ring oss</div>
                <a href="tel:21418103" className="font-semibold text-gray-900 hover:text-sky-600">
                  21 41 81 03
                </a>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
