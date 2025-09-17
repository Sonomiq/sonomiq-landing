'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface FooterLink {
  label: string
  href: string
}

interface FooterProps {
  links: FooterLink[]
  disclaimer: string
}

export function Footer({ links, disclaimer }: FooterProps) {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="md:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-light mb-6 tracking-wide">SONOMIQ</h3>
                <p className="text-slate-300 mb-8 max-w-lg text-lg leading-relaxed font-light">
                  Smart scheduling for medical imaging. Reduce WRMSD risk with 
                  intelligent scheduling optimization.
                </p>
                <div className="flex space-x-6">
                  <a 
                    href="mailto:marcus.tossmann@sonomiq.com" 
                    className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800"
                  >
                    <span className="sr-only">Email</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </a>
                  <a 
                    href="https://status.sonomiq.example" 
                    className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-slate-800"
                  >
                    <span className="sr-only">Status</span>
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-medium mb-6 tracking-wide">Product</h4>
                <ul className="space-y-4">
                  <li>
                    <Link href="#how" className="text-slate-300 hover:text-white transition-colors text-lg font-light">
                      How it works
                    </Link>
                  </li>
                  <li>
                    <Link href="#problem" className="text-slate-300 hover:text-white transition-colors text-lg font-light">
                      Problem
                    </Link>
                  </li>
                  <li>
                    <Link href="#marketplaces" className="text-slate-300 hover:text-white transition-colors text-lg font-light">
                      Integrations
                    </Link>
                  </li>
                  <li>
                    <Link href="#faq" className="text-slate-300 hover:text-white transition-colors text-lg font-light">
                      FAQ
                    </Link>
                  </li>
                </ul>
              </motion.div>
            </div>

            {/* Legal */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-medium mb-6 tracking-wide">Legal</h4>
                <ul className="space-y-4">
                  {links.map((link, index) => (
                    <li key={index}>
                      <Link 
                        href={link.href} 
                        className="text-slate-300 hover:text-white transition-colors text-lg font-light"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>

          {/* Disclaimer */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="border-t border-slate-700 pt-8"
          >
            <p className="text-sm text-slate-400 text-center font-light leading-relaxed">
              {disclaimer}
            </p>
            <p className="text-sm text-slate-500 text-center mt-4 font-light">
              © 2024 SONOMIQ. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
