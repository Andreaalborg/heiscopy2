'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { PhoneIcon, EnvelopeIcon, ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'

export default function ContactPage() {
  return (
    <>
      {/* Hero Section with Background Image */}
      <section className="relative min-h-[400px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/hero-kontakt.png"
            alt="IMEM team planlegger"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-slate-900/60" />
        </div>
        
        <div className="container-custom relative z-10 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="heading-1 text-white mb-6">
              Kontakt oss
            </h1>
            <p className="text-xl text-gray-300">
              Vi er her for å hjelpe deg med alle spørsmål om heis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Contact Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Phone Card */}
              <motion.a
                href="tel:21418103"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-sky-50 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-sky-200 text-center"
              >
                <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <PhoneIcon className="h-10 w-10 text-sky-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Ring oss
                </h2>
                <p className="text-3xl font-bold text-sky-600">
                  21 41 81 03
                </p>
              </motion.a>

              {/* Email Card */}
              <motion.a
                href="mailto:post@imemnorway.no"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="group bg-gray-50 rounded-2xl p-8 hover:bg-sky-50 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-sky-200 text-center"
              >
                <div className="w-20 h-20 bg-sky-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <EnvelopeIcon className="h-10 w-10 text-sky-600" />
                </div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  Send e-post
                </h2>
                <p className="text-2xl font-bold text-sky-600">
                  post@imemnorway.no
                </p>
              </motion.a>
            </div>

            {/* Certification Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gray-50 rounded-2xl p-8 md:p-12 text-center"
            >
              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex-shrink-0">
                  <Image 
                    src="/images/sentral-godkjenning.png" 
                    alt="Sentralt Godkjent" 
                    width={120}
                    height={120}
                    className="mx-auto"
                  />
                </div>
                <div className="text-left">
                  <h3 className="text-2xl font-bold text-gray-900 mb-3">
                    Sentralt Godkjent
                  </h3>
                  <p className="text-gray-600 mb-4 max-w-md">
                    IMEM Lifts Norway AS er sentralt godkjent for heisarbeid i Norge. 
                    Dette sikrer at vi oppfyller alle krav til kvalitet og sikkerhet.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-12 text-center"
            >
              <p className="text-lg text-gray-700">
                Ta gjerne kontakt – vi er alltid klare for en prat!
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
