'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Button from '@/components/ui/Button'

const steps = [
  {
    number: '01',
    title: 'Kontakt',
    description: 'Ta kontakt via telefon eller skjema for en uforpliktende samtale'
  },
  {
    number: '02',
    title: 'Befaring',
    description: 'Vi kommer på gratis befaring og vurderer dine behov'
  },
  {
    number: '03',
    title: 'Tilbud',
    description: 'Du får et detaljert tilbud med pris og tidsestimat'
  },
  {
    number: '04',
    title: 'Utførelse',
    description: 'Vi utfører arbeidet profesjonelt og til avtalt tid'
  }
]

const ServiceProcess = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center mb-12"
        >
          <h2 className="heading-2 text-gray-900 mb-4">
            Slik jobber vi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En enkel og transparent prosess fra første kontakt til ferdig arbeid
          </p>
        </motion.div>

        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="relative"
            >
              <div className="text-center">
                <div className="text-5xl font-bold text-blue-100 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">
                  {step.description}
                </p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 right-0 transform translate-x-1/2 text-gray-300">
                  <svg width="40" height="40" viewBox="0 0 40 40">
                    <path d="M10 20 L30 20 M30 20 L25 15 M30 20 L25 25" stroke="currentColor" strokeWidth="2" fill="none" />
                  </svg>
                </div>
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true, amount: 0.1 }}
          className="text-center"
        >
          <Link href="/kontakt">
            <Button size="lg" variant="primary">
              Start prosessen i dag
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default ServiceProcess
