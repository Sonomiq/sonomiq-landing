'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
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
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Seamless oval container */}
      <motion.div
        className="relative"
        animate={{
          paddingTop: isScrolled ? '16px' : '0px',
          paddingLeft: isScrolled ? '16px' : '0px',
          paddingRight: isScrolled ? '16px' : '0px',
        }}
        transition={{ duration: 0.6, ease: "easeInOut" }}
      >
        <motion.div
          className={`relative overflow-hidden ${
            isScrolled 
              ? 'rounded-full bg-white/90 backdrop-blur-xl shadow-2xl border border-white/20' 
              : 'rounded-none bg-transparent'
          }`}
          animate={{
            borderRadius: isScrolled ? '9999px' : '0px',
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Gradient overlay for header readability when over video */}
          {!isScrolled && (
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/40 to-transparent pointer-events-none"></div>
          )}
          <div className="container mx-auto px-4 py-3 relative z-10">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-start -ml-4" aria-label="SONOMIQ home">
                <Image
                  src={isScrolled ? '/sonomiq-wordmark.svg?v=8' : '/sonomiq-wordmark-white.svg?v=8'}
                  alt="SONOMIQ"
                  width={420}
                  height={70}
                  priority
                  className="object-contain h-14"
                />
              </Link>
              
              <nav className="hidden md:flex items-center space-x-8">
                <Link 
                  href="#how" 
                  className={`transition-colors font-light text-sm tracking-wide hover:scale-105 ${
                    isScrolled 
                      ? 'text-slate-600 hover:text-slate-800' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  How it works
                </Link>
                <Link 
                  href="#problem" 
                  className={`transition-colors font-light text-sm tracking-wide hover:scale-105 ${
                    isScrolled 
                      ? 'text-slate-600 hover:text-slate-800' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  Problem
                </Link>
                <Link 
                  href="#marketplaces" 
                  className={`transition-colors font-light text-sm tracking-wide hover:scale-105 ${
                    isScrolled 
                      ? 'text-slate-600 hover:text-slate-800' 
                      : 'text-white/90 hover:text-white'
                  }`}
                >
                  Integrations
                </Link>
                <Button asChild className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full font-light text-sm shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
                  <Link href={ctaHref}>Get early access</Link>
                </Button>
              </nav>

              {/* Mobile menu button */}
              <Button variant="ghost" className="md:hidden p-2">
                <svg className={`h-6 w-6 transition-colors ${
                  isScrolled ? 'text-slate-600' : 'text-white'
                }`} fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true" focusable="false">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </Button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.header>
  )
}
