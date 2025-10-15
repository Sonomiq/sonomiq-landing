'use client'

import { motion } from 'framer-motion'

interface Advantage {
  feature: string
  description: string
  benefit: string
}

interface CompetitiveAdvantageProps {
  title: string
  description: string
  advantages: Advantage[]
}

export function CompetitiveAdvantage({ title, description, advantages }: CompetitiveAdvantageProps) {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 tracking-tight">
              {title}
            </h2>
            <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto">
              {description}
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {advantages?.map((advantage, index) => (
              <motion.div
                key={advantage.feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-lg border border-slate-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex items-start justify-between mb-6">
                  <h3 className="text-2xl font-light text-slate-800">
                    {advantage.feature}
                  </h3>
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <p className="text-slate-600 leading-relaxed">
                    {advantage.description}
                  </p>
                  
                  <div className="p-4 bg-blue-50 rounded-lg border-l-4 border-blue-400">
                    <p className="text-sm font-light text-blue-800 mb-1">Key Benefit:</p>
                    <p className="text-blue-700 font-light">{advantage.benefit}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
