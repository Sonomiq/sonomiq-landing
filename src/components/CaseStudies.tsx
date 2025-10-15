'use client'

import { motion } from 'framer-motion'

interface Study {
  hospital: string
  result: string
  detail: string
  metric: string
}

interface CaseStudiesProps {
  title: string
  studies: Study[]
}

export function CaseStudies({ title, studies }: CaseStudiesProps) {
  return (
    <section className="py-24 bg-white">
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
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {studies.map((study, index) => (
              <motion.div
                key={study.hospital}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-8 border border-blue-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="mb-6">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                    <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 mb-2">
                    {study.hospital}
                  </h3>
                  <p className="text-blue-600 font-medium text-lg mb-2">
                    {study.result}
                  </p>
                </div>
                
                <div className="space-y-4">
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {study.detail}
                  </p>
                  
                  <div className="pt-4 border-t border-blue-200">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium text-slate-500">Key Metric:</span>
                      <span className="text-lg font-bold text-blue-600">{study.metric}</span>
                    </div>
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
