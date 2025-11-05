import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

export const metadata: Metadata = {
  title: {
    template: '%s | IMEM Lifts Norway',
    default: 'IMEM Lifts Norway - Heis installasjon og service'
  },
  description: 'Profesjonell heisinstallasjon, vedlikehold og modernisering. Din autoriserte IMEM-partner i Norge.',
  keywords: ['heis', 'elevator', 'installasjon', 'vedlikehold', 'IMEM', 'heisservice', 'modernisering'],
  openGraph: {
    type: 'website',
    locale: 'nb_NO',
    alternateLocale: 'en_US',
    siteName: 'IMEM Lifts Norway',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="no">
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}