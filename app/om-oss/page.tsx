import { Metadata } from 'next'
import AboutHero from '@/components/features/AboutHero'
import Timeline from '@/components/features/Timeline'
import Team from '@/components/features/Team'
import Certifications from '@/components/features/Certifications'

export const metadata: Metadata = {
  title: 'Om oss',
  description: 'Lær mer om IMEM Lifts Norway AS - din pålitelige partner for heisløsninger siden 1990',
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Timeline />
      <Team />
      <Certifications />
    </>
  )
}
