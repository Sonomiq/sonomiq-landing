'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

interface HeaderProps {
  ctaHref: string
}

export function Header({ ctaHref }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 32)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-slate-100' 
          : 'bg-transparent'
      }`}
    >
      {/* Gradient overlay for header readability when over video */}
      {!isScrolled && (
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/30 via-slate-900/10 to-transparent pointer-events-none"></div>
      )}
      <div className="container mx-auto px-6 py-6 relative z-10">
        <div className="flex items-center justify-between">
          <Link href="/" className={`text-4xl font-light tracking-wide transition-colors ${
            isScrolled ? 'text-slate-800' : 'text-white'
          }`}>
            SONOMIQ
          </Link>
          
          <nav className="hidden md:flex items-center space-x-10">
            <Link 
              href="#how" 
              className={`transition-colors font-medium text-base tracking-wide ${
                isScrolled 
                  ? 'text-slate-600 hover:text-slate-800' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              How it works
            </Link>
            <Link 
              href="#evidence" 
              className={`transition-colors font-medium text-base tracking-wide ${
                isScrolled 
                  ? 'text-slate-600 hover:text-slate-800' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Evidence
            </Link>
            <Link 
              href="#marketplaces" 
              className={`transition-colors font-medium text-base tracking-wide ${
                isScrolled 
                  ? 'text-slate-600 hover:text-slate-800' 
                  : 'text-white/90 hover:text-white'
              }`}
            >
              Integrations
            </Link>
            <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-medium text-base shadow-lg hover:shadow-xl transition-all duration-300">
              <Link href={ctaHref}>Get early access</Link>
            </Button>
          </nav>

          {/* Mobile menu button */}
          <Button variant="ghost" className="md:hidden p-2">
            <svg className={`h-6 w-6 transition-colors ${
              isScrolled ? 'text-slate-600' : 'text-white'
            }`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Button>
        </div>
      </div>
    </motion.header>
  )
}
