'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ShimmerButton } from '@/components/aceternity/ShimmerButton'
import { motion } from 'framer-motion'
import { BackgroundBeams } from '@/components/aceternity/BackgroundBeams'

interface HeroProps {
  title: string
  subhead: string
  primaryCta: { label: string; href: string }
  secondaryCta: { label: string; href: string }
  microproof: string
}

export function Hero({ title, subhead, primaryCta, secondaryCta, microproof }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          controls={false}
          preload="auto"
          disablePictureInPicture
          disableRemotePlayback
          className="w-full h-full object-cover"
          style={{ objectFit: 'cover', width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, zIndex: 1 }}
        >
          <source src="/stock_video.mp4" type="video/mp4" />
        </video>
        {/* Dark overlays for readability */}
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/80 via-transparent to-slate-900/70" />
      </div>

      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <h1 className="text-5xl md:text-6xl font-light text-white mb-6 tracking-tight">
              {title}
            </h1>
            
            <p className="text-xl md:text-2xl text-white/90 mb-10 max-w-4xl mx-auto leading-relaxed font-light">
              {subhead}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <ShimmerButton href={primaryCta.href}>{primaryCta.label}</ShimmerButton>
              <ShimmerButton href={secondaryCta.href}>{secondaryCta.label}</ShimmerButton>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  )
}
