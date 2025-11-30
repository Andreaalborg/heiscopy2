'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-28 md:pt-36">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="IMEM heisteknikere på jobb"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-slate-900/60" />
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
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-slate-900">
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

          {/* Right side - Empty for background image to show */}
          <div className="hidden lg:block" />
        </div>
      </div>
    </section>
  )
}

export default Hero
