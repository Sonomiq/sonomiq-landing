'use client'

import { motion } from 'framer-motion'
import { 
  Database, 
  BarChart3, 
  Lightbulb, 
  MousePointer, 
  FileText 
} from 'lucide-react'
import type React from 'react'

interface HowItWorksProps {
  title: string
  description: string
  steps: { title: string; text: string; detail: string }[]
}

type IconComp = React.ComponentType<{ className?: string }>

const iconMap: Record<string, IconComp> = {
  'Connect': Database,
  'Analyze': BarChart3,
  'Suggest': Lightbulb,
  'Apply': MousePointer,
  'Track': FileText,
}

export function HowItWorks({ title, description, steps }: HowItWorksProps) {
  return (
    <section id="how" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 tracking-tight">
              {title}
            </h2>
            <p className="text-xl text-slate-600 font-light">
              {description}
            </p>
          </motion.div>

          <div className="relative">
            <div className="grid lg:grid-cols-5 gap-8">
              {steps.map((step, index) => {
                const Icon: IconComp = iconMap[step.title] ?? Database
                return (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 relative">
                      <Icon className="w-10 h-10 text-white" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold text-blue-600">{index + 1}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600 text-sm">
                      {step.text}
                    </p>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
