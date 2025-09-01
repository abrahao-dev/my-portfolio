"use client"

import { useState } from 'react'
import NextImage from 'next/image'
import { PlaceholderImage } from './placeholder-image'

interface ImageProps {
  src: string
  alt: string
  width: number
  height: number
  className?: string
  priority?: boolean
}

export function Image({
  src,
  alt,
  width,
  height,
  className = "",
  priority = false
}: ImageProps) {
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)

  if (error) {
    return (
      <PlaceholderImage
        width={width}
        height={height}
        alt={alt}
        className={className}
      />
    )
  }

  return (
    <div className={`relative ${className}`} style={{ width, height }}>
      <NextImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`w-full h-full object-cover transition-opacity duration-300 ${
          loading ? 'opacity-0' : 'opacity-100'
        }`}
        onLoad={() => setLoading(false)}
        onError={() => setError(true)}
        priority={priority}
      />
      {loading && (
        <div className="absolute inset-0 bg-muted animate-pulse rounded-lg" />
      )}
    </div>
  )
}
