'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon, 
  ClockIcon 
} from '@heroicons/react/24/outline'

const contactDetails = [
  {
    icon: MapPinIcon,
    title: 'Besøksadresse',
    lines: [
      'Industrivegen 25',
      '0580 Oslo',
      'Norge'
    ]
  },
  {
    icon: PhoneIcon,
    title: 'Telefon',
    lines: [
      '+47 00 00 00 00',
      'Vakttelefon: +47 00 00 00 01'
    ]
  },
  {
    icon: EnvelopeIcon,
    title: 'E-post',
    lines: [
      'post@imemlifts.no',
      'service@imemlifts.no'
    ]
  },
  {
    icon: ClockIcon,
    title: 'Åpningstider',
    lines: [
      'Mandag - Fredag: 07:00 - 16:00',
      'Lørdag - Søndag: Stengt',
      '24/7 Nødservice tilgjengelig'
    ]
  }
]

const ContactInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Kontaktinformasjon
      </h2>

      <div className="space-y-6">
        {contactDetails.map((detail, index) => {
          const Icon = detail.icon
          return (
            <motion.div
              key={detail.title}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex gap-4"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Icon className="h-6 w-6 text-blue-600" />
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">
                  {detail.title}
                </h3>
                {detail.lines.map((line, i) => (
                  <p key={i} className="text-gray-600">
                    {line}
                  </p>
                ))}
              </div>
            </motion.div>
          )
        })}
      </div>

      {/* Map */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-8"
      >
        <h3 className="font-semibold text-gray-900 mb-4">
          Finn oss
        </h3>
        <div className="bg-gray-200 rounded-lg h-64 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-20" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <MapPinIcon className="h-12 w-12 text-blue-600 mx-auto mb-2" />
              <p className="text-gray-700 font-medium">Kart kommer her</p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Quick actions */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
        className="mt-8 p-6 bg-blue-50 rounded-lg"
      >
        <h3 className="font-semibold text-gray-900 mb-3">
          Rask kontakt?
        </h3>
        <p className="text-gray-600 mb-4">
          For akutte hendelser, ring vår 24/7 vakttelefon
        </p>
        <a 
          href="tel:+4700000001"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700"
        >
          <PhoneIcon className="h-5 w-5" />
          +47 00 00 00 01
        </a>
      </motion.div>
    </motion.div>
  )
}

export default ContactInfo
