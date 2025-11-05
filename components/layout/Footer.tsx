import React from 'react'
import Link from 'next/link'
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon 
} from '@heroicons/react/24/outline'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-imem-gray-900 text-white">
      <div className="container-custom py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <div className="text-imem-blue font-heading font-bold text-2xl">
                IMEM
              </div>
              <div className="text-imem-gray-300 font-heading text-lg">
                LIFTS NORWAY AS
              </div>
            </div>
            <p className="text-imem-gray-400 text-sm">
              Din partner for heisinstallasjon, vedlikehold og modernisering. 
              Autorisert IMEM-forhandler i Norge.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hurtiglenker</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/om-oss" className="text-imem-gray-400 hover:text-imem-blue transition-colors">
                  Om oss
                </Link>
              </li>
              <li>
                <Link href="/tjenester" className="text-imem-gray-400 hover:text-imem-blue transition-colors">
                  Tjenester
                </Link>
              </li>
              <li>
                <Link href="/prosjekter" className="text-imem-gray-400 hover:text-imem-blue transition-colors">
                  Prosjekter
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-imem-gray-400 hover:text-imem-blue transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Våre tjenester</h3>
            <ul className="space-y-2">
              <li className="text-imem-gray-400">Heisinstallasjon</li>
              <li className="text-imem-gray-400">Vedlikehold</li>
              <li className="text-imem-gray-400">Modernisering</li>
              <li className="text-imem-gray-400">24/7 Nødservice</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Kontakt oss</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-imem-blue flex-shrink-0 mt-0.5" />
                <p className="text-imem-gray-400 text-sm">
                  Adresse kommer her<br />
                  0000 Oslo, Norge
                </p>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="h-5 w-5 text-imem-blue flex-shrink-0" />
                <a href="tel:+4700000000" className="text-imem-gray-400 hover:text-imem-blue transition-colors">
                  +47 00 00 00 00
                </a>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="h-5 w-5 text-imem-blue flex-shrink-0" />
                <a href="mailto:post@imemlifts.no" className="text-imem-gray-400 hover:text-imem-blue transition-colors">
                  post@imemlifts.no
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-imem-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-imem-gray-400 text-sm">
              © {currentYear} IMEM Lifts Norway AS. Alle rettigheter reservert.
            </p>
            <div className="flex gap-6">
              <Link href="/personvern" className="text-imem-gray-400 hover:text-imem-blue text-sm transition-colors">
                Personvern
              </Link>
              <Link href="/vilkar" className="text-imem-gray-400 hover:text-imem-blue text-sm transition-colors">
                Vilkår
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
