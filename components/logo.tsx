"use client"

import Image from "next/image"
import Link from "next/link"

interface LogoProps {
  variant?: "default" | "compact" | "icon"
  size?: "sm" | "md" | "lg"
  withGlow?: boolean
  className?: string
}

const sizeMap = {
  sm: { width: 120, height: 40 },
  md: { width: 180, height: 60 },
  lg: { width: 240, height: 80 },
}

const compactSizeMap = {
  sm: { width: 100, height: 35 },
  md: { width: 140, height: 48 },
  lg: { width: 180, height: 62 },
}

const iconSizeMap = {
  sm: 32,
  md: 40,
  lg: 56,
}

export function Logo({ 
  variant = "default", 
  size = "md", 
  withGlow = true,
  className = "" 
}: LogoProps) {
  const dimensions = variant === "compact" ? compactSizeMap[size] : sizeMap[size]
  const iconSize = iconSizeMap[size]

  if (variant === "icon") {
    return (
      <Link 
        href="/" 
        className={`relative block group ${className}`}
        aria-label="NetDefesa 360 - Página inicial"
      >
        {/* Glow effect */}
        {withGlow && (
          <div 
            className="absolute inset-0 rounded-xl bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-150"
            aria-hidden="true"
          />
        )}
        
        {/* Icon container with neon border */}
        <div 
          className={`relative rounded-xl overflow-hidden neon-border-hover transition-all duration-300 group-hover:scale-105`}
          style={{ width: iconSize, height: iconSize }}
        >
          <Image
            src="/images/netdefesa-logo.jpg"
            alt="NetDefesa 360"
            fill
            className="object-cover object-left"
            sizes={`${iconSize}px`}
          />
        </div>
      </Link>
    )
  }

  return (
    <Link 
      href="/" 
      className={`relative block group ${className}`}
      aria-label="NetDefesa 360 - Página inicial"
    >
      {/* Animated glow effect behind logo */}
      {withGlow && (
        <div 
          className="absolute inset-0 bg-primary/10 blur-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 scale-125 rounded-full"
          aria-hidden="true"
        />
      )}
      
      {/* Logo image with neon glow on hover */}
      <div 
        className={`relative transition-all duration-300 group-hover:scale-105 ${withGlow ? 'drop-shadow-[0_0_15px_rgba(0,217,255,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(0,217,255,0.5)]' : ''}`}
        style={{ width: dimensions.width, height: dimensions.height }}
      >
        <Image
          src="/images/netdefesa-logo.jpg"
          alt="NetDefesa 360 - Segurança Integrada"
          fill
          className="object-contain"
          sizes={`${dimensions.width}px`}
          priority
        />
      </div>
    </Link>
  )
}

export function LogoText({ 
  size = "md",
  className = "" 
}: { 
  size?: "sm" | "md" | "lg"
  className?: string 
}) {
  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  }

  return (
    <Link 
      href="/"
      className={`group flex items-center gap-2 ${className}`}
      aria-label="NetDefesa 360 - Página inicial"
    >
      <span className={`font-heading ${textSizes[size]} font-bold text-foreground transition-colors group-hover:text-primary`}>
        NET<span className="text-primary">DEFESA</span>
      </span>
    </Link>
  )
}
