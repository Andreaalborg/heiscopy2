import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | IMEM Lifts Norway',
    default: 'IMEM Lifts Norway AS - Totallerandør innen heisløsninger'
  },
  description: 'IMEM Lifts Norway AS er din autoriserte IMEM-partner i Norge. Vi leverer nyinstallasjon, modernisering, service og 24/7 nødservice for heiser. Sentralt godkjent.',
  keywords: [
    'heis', 
    'heisinstallasjon', 
    'heisservice', 
    'heisvedlikehold', 
    'modernisering', 
    'IMEM', 
    'IMEM Lifts', 
    'heisløsninger', 
    'personheis', 
    'vareheis',
    'rulletrapp',
    'sentralt godkjent',
    'Norge',
    'Oslo'
  ],
  authors: [{ name: 'IMEM Lifts Norway AS' }],
  creator: 'IMEM Lifts Norway AS',
  publisher: 'IMEM Lifts Norway AS',
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    url: 'https://imemnorway.no',
    siteName: 'IMEM Lifts Norway AS',
    title: 'IMEM Lifts Norway AS - Totallerandør innen heisløsninger',
    description: 'Autorisert IMEM-partner i Norge. Nyinstallasjon, modernisering, service og 24/7 nødservice.',
    images: [
      {
        url: '/images/imem-logo.png',
        width: 512,
        height: 512,
        alt: 'IMEM Lifts Norway',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IMEM Lifts Norway AS',
    description: 'Totallerandør innen heisløsninger - Autorisert IMEM-partner i Norge',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification when available
    // google: 'verification-code',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="no">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://imemnorway.no" />
      </head>
      <body className="antialiased min-h-screen flex flex-col bg-white">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
