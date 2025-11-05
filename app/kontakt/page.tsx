import { Metadata } from 'next'
import ContactHero from '@/components/features/ContactHero'
import ContactForm from '@/components/features/ContactForm'
import ContactInfo from '@/components/features/ContactInfo'

export const metadata: Metadata = {
  title: 'Kontakt oss',
  description: 'Ta kontakt med IMEM Lifts Norway for gratis befaring og tilbud på heisløsninger',
}

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <div className="section bg-white">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
