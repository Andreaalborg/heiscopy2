import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className="text-white" style={{ backgroundColor: '#302f2e' }}>
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <Image 
                src="/images/imem-logo.png" 
                alt="IMEM Lifts" 
                width={50}
                height={50}
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold">IMEM Lifts Norway AS</h3>
                <p className="text-sm text-gray-400">Autorisert IMEM-partner</p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Totalleverandør innen heisløsninger. Vi leverer nyinstallasjon, 
              modernisering, service og 24/7 nødservice.
            </p>
            
            {/* Contact Info */}
            <div className="space-y-2 text-gray-300">
              <a href="tel:21418103" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                </svg>
                21 41 81 03
              </a>
              <a href="mailto:post@imemnorway.no" className="flex items-center gap-2 hover:text-sky-400 transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                </svg>
                post@imemnorway.no
              </a>
            </div>
          </div>

          {/* Sider */}
          <div>
            <h4 className="font-semibold mb-4 text-white">Sider</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Hjem
                </Link>
              </li>
              <li>
                <Link href="/produkter" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Produkter
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-300 hover:text-sky-400 transition-colors">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* IMEM Links - Right side */}
          <div>
            <h4 className="font-semibold mb-4 text-white">IMEM</h4>
            <ul className="space-y-2">
              <li>
                <a 
                  href="https://imem.com/en/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-sky-400 transition-colors inline-flex items-center gap-1"
                >
                  IMEM.com
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="https://imem.com/en/lifts/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-sky-400 transition-colors inline-flex items-center gap-1"
                >
                  Heiser
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </li>
              <li>
                <a 
                  href="https://imem.com/en/manufacturer-of-special-lifts-imem-lifts/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-sky-400 transition-colors inline-flex items-center gap-1"
                >
                  Om IMEM
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} IMEM Lifts Norway AS. Alle rettigheter reservert.
          </p>
          <p className="text-sm text-gray-500">
            Laget av{' '}
            <a 
              href="https://intellisense.no" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-300"
            >
              Intellisense AS
            </a>
          </p>
          <p className="text-sm text-gray-500">
            Autorisert partner for{' '}
            <a 
              href="https://imem.com/en/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sky-400 hover:text-sky-300"
            >
              IMEM
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
