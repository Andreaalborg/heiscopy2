import React from 'react'
import Image from 'next/image'
import { cn } from '@/lib/utils'

interface CardProps {
  title?: string
  description?: string
  image?: string
  imageAlt?: string
  className?: string
  children?: React.ReactNode
  onClick?: () => void
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  image,
  imageAlt,
  className,
  children,
  onClick
}) => {
  const Component = onClick ? 'button' : 'div'

  return (
    <Component
      className={cn(
        'card group',
        onClick && 'cursor-pointer hover:scale-[1.02] transform transition-transform',
        className
      )}
      onClick={onClick}
    >
      {image && (
        <div className="relative h-48 w-full mb-4 -mx-6 -mt-6 overflow-hidden rounded-t-xl">
          <Image
            src={image}
            alt={imageAlt || title || 'Card image'}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      
      {title && (
        <h3 className="text-xl font-semibold text-imem-gray-900 mb-2">
          {title}
        </h3>
      )}
      
      {description && (
        <p className="text-imem-gray-600 mb-4">
          {description}
        </p>
      )}
      
      {children}
    </Component>
  )
}

export default Card
