import { Metadata } from 'next'
import ProjectsHero from '@/components/features/ProjectsHero'
import ProjectsGallery from '@/components/features/ProjectsGallery'
import ProjectStats from '@/components/features/ProjectStats'

export const metadata: Metadata = {
  title: 'Prosjekter',
  description: 'Se våre referanseprosjekter - Fra boligblokker til næringsbygg, vi har erfaring med alle typer heisinstallasjoner',
}

export default function ProjectsPage() {
  return (
    <>
      <ProjectsHero />
      <ProjectsGallery />
      <ProjectStats />
    </>
  )
}
