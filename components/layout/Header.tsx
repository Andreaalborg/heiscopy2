'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'Hjem', href: '/' },
  { name: 'Om oss', href: '/om-oss' },
  { name: 'Tjenester', href: '/tjenester' },
  { name: 'Prosjekter', href: '/prosjekter' },
  { name: 'Kontakt', href: '/kontakt' },
]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed top-0 w-full z-50 transition-all duration-300 border-b border-gray-100',
        scrolled ? 'bg-white shadow-md py-4' : 'bg-white py-5'
      )}
    >
      <nav className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image 
              src="/images/imem-logo.jpg" 
              alt="IMEM Lifts Logo" 
              width={120} 
              height={40}
              className="h-10 w-auto"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:gap-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  'text-base font-medium transition-colors duration-200',
                  pathname === item.href
                    ? 'text-blue-500'
                    : 'text-gray-700 hover:text-blue-500'
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Selector */}
          <div className="hidden lg:flex items-center gap-4">
            <button className="text-sm font-medium text-imem-gray-600 hover:text-imem-blue">
              NO
            </button>
            <span className="text-imem-gray-300">|</span>
            <button className="text-sm font-medium text-imem-gray-600 hover:text-imem-blue">
              EN
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="lg:hidden -m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-imem-gray-700"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Åpne hovedmeny</span>
            {mobileMenuOpen ? (
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            ) : (
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            )}
          </button>
        </div>
      </nav>

      {/* Backdrop for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 bg-white lg:hidden"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Mobile menu */}
      <div
        className={cn(
          'lg:hidden fixed inset-0 z-50 bg-white transition-transform duration-300',
          mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="px-6 py-6">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center space-x-2">
              <Image 
                src="/images/imem-logo.jpg" 
                alt="IMEM Lifts Logo" 
                width={120} 
                height={40}
                className="h-10 w-auto"
                priority
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-imem-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Lukk meny</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-imem-gray-100">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      'block px-3 py-2 text-base font-semibold leading-7',
                      pathname === item.href
                        ? 'text-imem-blue'
                        : 'text-imem-gray-900 hover:text-imem-blue'
                    )}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
              <div className="py-6">
                <div className="flex gap-4">
                  <button className="text-base font-semibold text-imem-gray-900">
                    NO
                  </button>
                  <span className="text-imem-gray-300">|</span>
                  <button className="text-base font-semibold text-imem-gray-600">
                    EN
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
