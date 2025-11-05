'use client'

import React from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { PhoneIcon, CalendarIcon, CheckCircleIcon } from '@heroicons/react/24/outline'

const CTA = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="heading-2 text-gray-900 mb-6">
              La oss ta vare på dine heiser
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Med over 30 års erfaring og direkte tilgang til IMEM kvalitetsprodukter, 
              er vi din beste partner for heisløsninger i Norge.
            </p>
            
            <ul className="space-y-3 mb-8">
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Gratis befaring og tilstandsvurdering</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">Skreddersydde serviceavtaler</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircleIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
                <span className="text-gray-700">24/7 nødservice inkludert</span>
              </li>
            </ul>
          </motion.div>

          {/* Right side - Contact box */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                Kontakt oss i dag
              </h3>
              
              <div className="space-y-4 mb-6">
                <a href="tel:+4700000000" className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors group">
                  <PhoneIcon className="h-6 w-6 text-blue-600 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold text-gray-900">Ring oss direkte</div>
                    <div className="text-sm text-gray-600">+47 00 00 00 00</div>
                  </div>
                </a>
                
                <Link href="/kontakt" className="flex items-center gap-4 p-4 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors">
                  <CalendarIcon className="h-6 w-6 text-gray-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Book befaring</div>
                    <div className="text-sm text-gray-600">Vi kommer til deg</div>
                  </div>
                </Link>
              </div>
              
              <p className="text-center text-sm text-gray-500">
                Åpent man-fre: 07:00 - 16:00
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default CTA