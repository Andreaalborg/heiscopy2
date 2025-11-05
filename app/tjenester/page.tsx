import { Metadata } from 'next'
import ServicesHero from '@/components/features/ServicesHero'
import ServicesList from '@/components/features/ServicesList'
import ServiceProcess from '@/components/features/ServiceProcess'

export const metadata: Metadata = {
  title: 'Våre tjenester',
  description: 'IMEM Lifts tilbyr komplett heisservice - installasjon, vedlikehold, modernisering og nødservice',
}

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <ServiceProcess />
    </>
  )
}
