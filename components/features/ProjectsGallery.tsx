'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { BuildingOfficeIcon, HomeIcon, BuildingLibraryIcon, HeartIcon } from '@heroicons/react/24/outline'

const categories = [
  { id: 'all', name: 'Alle prosjekter', icon: null },
  { id: 'residential', name: 'Bolig', icon: HomeIcon },
  { id: 'commercial', name: 'Næring', icon: BuildingOfficeIcon },
  { id: 'public', name: 'Offentlig', icon: BuildingLibraryIcon },
  { id: 'healthcare', name: 'Helse', icon: HeartIcon },
]

const projects = [
  {
    id: 1,
    title: 'Grünerløkka Borettslag',
    category: 'residential',
    location: 'Oslo',
    elevators: 3,
    type: 'Modernisering',
    description: 'Full modernisering av 3 heiser i boligblokk fra 1970-tallet'
  },
  {
    id: 2,
    title: 'Oslo Business Center',
    category: 'commercial',
    location: 'Oslo',
    elevators: 6,
    type: 'Nyinstallasjon',
    description: 'Installasjon av 6 nye høyhastighetsheiser i moderne kontorbygg'
  },
  {
    id: 3,
    title: 'Ullevål Sykehus',
    category: 'healthcare',
    location: 'Oslo',
    elevators: 2,
    type: 'Sykehusheiser',
    description: 'Spesialheiser for pasienttransport med ekstra kapasitet'
  },
  {
    id: 4,
    title: 'Bergen Rådhus',
    category: 'public',
    location: 'Bergen',
    elevators: 4,
    type: 'Modernisering',
    description: 'Oppgradering av heiser med fokus på universell utforming'
  },
  {
    id: 5,
    title: 'Bjørvika Terrasse',
    category: 'residential',
    location: 'Oslo',
    elevators: 8,
    type: 'Nyinstallasjon',
    description: 'Luksusleiligheter med panoramaheiser og smart-teknologi'
  },
  {
    id: 6,
    title: 'Trondheim Handelshøyskole',
    category: 'public',
    location: 'Trondheim',
    elevators: 3,
    type: 'Nyinstallasjon',
    description: 'Energieffektive heiser med regenerativ teknologi'
  }
]

const ProjectsGallery = () => {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory)

  return (
    <section className="section bg-white">
      <div className="container-custom">
        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`
                  flex items-center gap-2 px-6 py-3 rounded-full transition-all
                  ${activeCategory === category.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }
                `}
              >
                {Icon && <Icon className="h-5 w-5" />}
                {category.name}
              </button>
            )
          })}
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300">
                <div className="relative h-64 bg-gradient-to-br from-gray-600 to-gray-800">
                  <div className="absolute inset-0 flex items-center justify-center text-white">
                    <BuildingOfficeIcon className="h-20 w-20 opacity-50" />
                  </div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <span className="bg-black/30 px-3 py-1 rounded-full text-sm">
                      {project.type}
                    </span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        {project.location}
                      </span>
                      <span>{project.elevators} heiser</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsGallery
