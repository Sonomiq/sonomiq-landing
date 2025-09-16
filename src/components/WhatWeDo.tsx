'use client'

import { motion } from 'framer-motion'
import { 
  Shield, 
  Clock, 
  Users, 
  AlertTriangle, 
  Zap,
  RotateCcw
} from 'lucide-react'
import type React from 'react'

interface WhatWeDoProps {
  intro: string
  bullets: string[]
}

type IconComp = React.ComponentType<{ className?: string }>
const iconMap: Record<string, IconComp> = {
  'Rotate tasks (case mix)': RotateCcw,
  'Insert micro-breaks': Clock,
  'Spread complex cases': Users,
  'Cap high-strain scans': Shield,
  'Flag high-risk slots': AlertTriangle,
  'API-first integration': Zap,
}

export function WhatWeDo({ intro, bullets }: WhatWeDoProps) {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-8 tracking-tight">
              What We Do
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl mx-auto font-light">
              {intro}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bullets.map((bullet, index) => {
              const Icon: IconComp = iconMap[bullet] ?? Shield
              return (
                <motion.div
                  key={bullet}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group text-center p-8 rounded-2xl border border-slate-100 hover:border-blue-200 hover:shadow-xl transition-all duration-300 bg-gradient-to-br from-white to-slate-50"
                >
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-medium text-slate-800 mb-4 tracking-wide">
                    {bullet}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {bullet === 'Risk-based scheduling' && 'WRMSD risk indicators for each imaging procedure'}
                    {bullet === 'Automatic recovery periods' && 'Automatic recovery time insertion after demanding procedures'}
                    {bullet === 'Smart staff rotations' && 'Intelligent staff rotation suggestions to balance workload'}
                    {bullet === 'Exposure limits & alerts' && 'Configurable exposure limits and WRMSD risk warnings'}
                    {bullet === 'Just-in-time guidance' && 'Risk awareness reminders and preparation tips'}
                    {bullet === 'API-first integration' && 'Seamless integration with any scheduling system'}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
