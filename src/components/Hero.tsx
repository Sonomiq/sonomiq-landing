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
      {/* Video Background */}
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
          style={{ 
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1
          }}
        >
          <source src="/stock_video.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability - extremely dark */}
        <div className="absolute inset-0 bg-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/95 via-slate-800/90 to-blue-900/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/80"></div>
        <div className="absolute inset-0 bg-black/70"></div>
        {/* Stronger gradient at top for header readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/98 via-slate-900/80 to-transparent"></div>
        {/* Additional dark overlay for maximum text contrast */}
        <div className="absolute inset-0 bg-black/60"></div>
        {/* Extra dark overlay for maximum darkness */}
        <div className="absolute inset-0 bg-black/50"></div>
        {/* Final dark overlay to ensure maximum darkness */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <BackgroundBeams />
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <h1 className="text-6xl md:text-8xl font-light text-white mb-8 tracking-tight drop-shadow-2xl" style={{ textShadow: '0 0 20px rgba(0,0,0,0.8), 0 0 40px rgba(0,0,0,0.6)' }}>
              {title}
            </h1>
            
            <p className="text-xl md:text-2xl text-white mb-12 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-xl" style={{ textShadow: '0 0 15px rgba(0,0,0,0.8), 0 0 30px rgba(0,0,0,0.6)' }}>
              {subhead}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <ShimmerButton href={primaryCta.href}>{primaryCta.label}</ShimmerButton>
              <ShimmerButton href={secondaryCta.href}>{secondaryCta.label}</ShimmerButton>
              <ShimmerButton href="#demo">Watch demo</ShimmerButton>
            </div>
            
          </motion.div>
        </div>
      </div>
    </section>
  )
}
