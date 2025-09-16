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
          className="w-full h-full object-cover"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/40 via-slate-800/30 to-blue-900/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 via-transparent to-slate-900/20"></div>
      </div>
      
      <BackgroundBeams />
      <div className="container mx-auto px-6 py-24 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <h1 className="text-6xl md:text-8xl font-light text-white mb-8 tracking-tight drop-shadow-lg">
              {title}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light drop-shadow-md">
              {subhead}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <ShimmerButton href={primaryCta.href}>{primaryCta.label}</ShimmerButton>
              <Button asChild variant="outline" size="lg" className="text-lg px-10 py-4 border-2 border-white/30 text-white hover:bg-white/10 rounded-full font-medium transition-all duration-300 backdrop-blur-sm">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-10 py-4 border-2 border-blue-300/50 text-blue-100 hover:bg-blue-500/20 rounded-full font-medium transition-all duration-300 backdrop-blur-sm">
                <Link href="#demo">Watch demo</Link>
              </Button>
            </div>
            
            <motion.div 
              className="inline-flex items-center text-sm text-slate-200 font-medium drop-shadow-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <svg className="w-4 h-4 mr-2 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {microproof}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
