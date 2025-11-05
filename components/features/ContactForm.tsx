'use client'

import React, { useState } from 'react'
import { motion } from 'framer-motion'
import Button from '@/components/ui/Button'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

const contactSchema = z.object({
  name: z.string().min(2, 'Navn må være minst 2 tegn'),
  email: z.string().email('Ugyldig e-postadresse'),
  phone: z.string().min(8, 'Telefonnummer må være minst 8 siffer'),
  company: z.string().optional(),
  subject: z.string().min(2, 'Emne er påkrevd'),
  message: z.string().min(10, 'Meldingen må være minst 10 tegn'),
  type: z.enum(['befaring', 'service', 'tilbud', 'annet'])
})

type ContactFormData = z.infer<typeof contactSchema>

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      type: 'befaring'
    }
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    console.log('Form data:', data)
    setSubmitSuccess(true)
    reset()
    setIsSubmitting(false)
    
    // Reset success message after 5 seconds
    setTimeout(() => setSubmitSuccess(false), 5000)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">
        Send oss en melding
      </h2>

      {submitSuccess && (
        <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
          Takk for din henvendelse! Vi tar kontakt innen 24 timer.
        </div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">
              Navn *
            </label>
            <input
              type="text"
              {...register('name')}
              className="form-input"
              placeholder="Ditt navn"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>

          <div>
            <label className="form-label">
              E-post *
            </label>
            <input
              type="email"
              {...register('email')}
              className="form-input"
              placeholder="din@epost.no"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="form-label">
              Telefon *
            </label>
            <input
              type="tel"
              {...register('phone')}
              className="form-input"
              placeholder="+47 000 00 000"
            />
            {errors.phone && (
              <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>

          <div>
            <label className="form-label">
              Firma (valgfritt)
            </label>
            <input
              type="text"
              {...register('company')}
              className="form-input"
              placeholder="Firmanavn"
            />
          </div>
        </div>

        <div>
          <label className="form-label">
            Type henvendelse *
          </label>
          <select {...register('type')} className="form-input">
            <option value="befaring">Gratis befaring</option>
            <option value="service">Service/vedlikehold</option>
            <option value="tilbud">Tilbud på ny heis</option>
            <option value="annet">Annet</option>
          </select>
        </div>

        <div>
          <label className="form-label">
            Emne *
          </label>
          <input
            type="text"
            {...register('subject')}
            className="form-input"
            placeholder="Hva gjelder henvendelsen?"
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
          )}
        </div>

        <div>
          <label className="form-label">
            Melding *
          </label>
          <textarea
            {...register('message')}
            rows={5}
            className="form-input"
            placeholder="Beskriv ditt behov eller spørsmål..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          variant="primary"
          loading={isSubmitting}
          className="w-full md:w-auto"
        >
          Send melding
        </Button>
      </form>
    </motion.div>
  )
}

export default ContactForm
