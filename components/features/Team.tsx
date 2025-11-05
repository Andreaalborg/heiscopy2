'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { UserGroupIcon } from '@heroicons/react/24/outline'

const teamMembers = [
  {
    name: 'Per Hansen',
    role: 'Daglig leder',
    image: '/images/team-1.jpg',
    description: '20+ års erfaring i heisbransjen'
  },
  {
    name: 'Kari Olsen',
    role: 'Teknisk sjef',
    image: '/images/team-2.jpg',
    description: 'Spesialist på modernisering'
  },
  {
    name: 'Ole Andersen',
    role: 'Serviceleder',
    image: '/images/team-3.jpg',
    description: 'Ansvarlig for 24/7 service'
  }
]

const Team = () => {
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
          <h2 className="heading-2 text-gray-900 mb-6">
            Vårt team
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Vårt team består av over 15 erfarne teknikere og spesialister innen 
            heisinstallasjon og vedlikehold. Alle våre teknikere er sertifiserte 
            og gjennomgår regelmessig opplæring.
          </p>
        </motion.div>

        {/* Team Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="aspect-square relative bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                <div className="w-20 h-20 rounded-full bg-blue-600 text-white flex items-center justify-center text-2xl font-bold">
                  {member.name.split(' ').map(n => n[0]).slice(0,2).join('')}
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-blue-600 font-medium mb-2">{member.role}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true, amount: 0.1 }}
          className="bg-white rounded-2xl p-8 shadow-sm"
        >
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">5+</div>
              <div className="text-gray-600">Prosjektledere</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">8+</div>
              <div className="text-gray-600">Serviceteknikere</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-600 mb-1">3+</div>
              <div className="text-gray-600">Installatører</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Team
