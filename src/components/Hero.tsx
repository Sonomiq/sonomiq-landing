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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
      <BackgroundBeams />
      <div className="container mx-auto px-6 py-24">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            
            <h1 className="text-6xl md:text-8xl font-light text-slate-800 mb-8 tracking-tight">
              {title}
            </h1>
            
            <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
              {subhead}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
              <ShimmerButton href={primaryCta.href}>{primaryCta.label}</ShimmerButton>
              <Button asChild variant="outline" size="lg" className="text-lg px-10 py-4 border-2 border-slate-300 text-slate-700 hover:bg-slate-50 rounded-full font-medium transition-all duration-300">
                <Link href={secondaryCta.href}>{secondaryCta.label}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-10 py-4 border-2 border-blue-200 text-blue-700 hover:bg-blue-50 rounded-full font-medium transition-all duration-300">
                <Link href="#demo">Watch demo</Link>
              </Button>
            </div>
            
            <motion.div 
              className="inline-flex items-center text-sm text-slate-500 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              <svg className="w-4 h-4 mr-2 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              {microproof}
            </motion.div>
          </motion.div>
        </div>
      </div>
      
      {/* Subtle medical-inspired elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-32 h-32 bg-blue-100 rounded-full opacity-30"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-slate-100 rounded-full opacity-40"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 bg-blue-50 rounded-full opacity-50"></div>
      </div>
    </section>
  )
}
