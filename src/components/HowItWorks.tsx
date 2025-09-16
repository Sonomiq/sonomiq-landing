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
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              {title}
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              {description}
            </p>
          </motion.div>

          <div className="relative">
            {/* Connection lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gray-200 transform -translate-y-1/2 z-0"></div>
            
            <div className="grid lg:grid-cols-5 gap-8 relative z-10">
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

          {/* Process Flow Diagram */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-16 bg-gray-50 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
              Simple Integration Flow
            </h3>
            <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
              <div className="bg-white p-4 rounded-lg shadow-sm text-center min-w-[120px]">
                <div className="text-sm font-medium text-gray-600 mb-2">Your Scheduler</div>
                <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto flex items-center justify-center">
                  <Database className="w-6 h-6 text-green-600" />
                </div>
              </div>
              
              <div className="text-gray-400">→</div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm text-center min-w-[120px]">
                <div className="text-sm font-medium text-gray-600 mb-2">SONOMIQ</div>
                <div className="w-12 h-12 bg-blue-100 rounded-lg mx-auto flex items-center justify-center">
                  <BarChart3 className="w-6 h-6 text-blue-600" />
                </div>
              </div>
              
              <div className="text-gray-400">→</div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm text-center min-w-[120px]">
                <div className="text-sm font-medium text-gray-600 mb-2">Risk & Suggestions</div>
                <div className="w-12 h-12 bg-yellow-100 rounded-lg mx-auto flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-yellow-600" />
                </div>
              </div>
              
              <div className="text-gray-400">→</div>
              
              <div className="bg-white p-4 rounded-lg shadow-sm text-center min-w-[120px]">
                <div className="text-sm font-medium text-gray-600 mb-2">Back to Scheduler</div>
                <div className="w-12 h-12 bg-green-100 rounded-lg mx-auto flex items-center justify-center">
                  <MousePointer className="w-6 h-6 text-green-600" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
