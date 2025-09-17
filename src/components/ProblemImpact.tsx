'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Users, TrendingDown } from 'lucide-react'
import { useCountUp } from '@/hooks/useCountUp'

interface ProblemImpactProps {
  title: string
  description: string
  statistics: {
    primary: string
    secondary: string
    source: string
  }
  forStaff: string[]
  forClinics: string[]
  costImpact: {
    amount: string
    description: string
    source: string
  }
  statCallout: string
}

export function ProblemImpact({ title, description, statistics, forStaff, forClinics, costImpact, statCallout }: ProblemImpactProps) {
  const { count: count90, ref: ref90 } = useCountUp({
    end: 90,
    duration: 2000,
    delay: 500,
    suffix: '%'
  })

  const { count: count20, ref: ref20 } = useCountUp({
    end: 20,
    duration: 2000,
    delay: 1000,
    suffix: '%'
  })

  return (
    <section id="problem" className="py-24 bg-slate-50">
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
              {title}
            </h2>
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed mb-16">
              {description}
            </p>
          </motion.div>


          {/* Problem Sections Side by Side */}
          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* For Imaging Staff */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-red-50 rounded-2xl mb-4">
                  <AlertCircle className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-3xl font-light text-slate-800 tracking-wide mb-3">For Imaging Staff</h3>
                <p className="text-slate-600 text-sm">
                  Sonographers face significant physical risks that impact their health and career longevity.
                </p>
              </div>
              
              <ul className="space-y-4 mb-6">
                {forStaff.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-red-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-600 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              
              {/* Statistics */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="grid grid-cols-2 gap-4 mb-3">
                  <div className="text-center">
                    <div 
                      ref={ref90}
                      className="text-2xl font-bold text-red-600 mb-1 transition-all duration-300"
                    >
                      {count90}
                    </div>
                    <p className="text-slate-700 text-xs">
                      {statistics.primary}
                    </p>
                  </div>
                  <div className="text-center">
                    <div 
                      ref={ref20}
                      className="text-2xl font-bold text-red-600 mb-1 transition-all duration-300"
                    >
                      {count20}
                    </div>
                    <p className="text-slate-700 text-xs">
                      {statistics.secondary}
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <a 
                    href={statistics.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-800 underline"
                  >
                    Source: Sonographer Safety Workplace Considerations Report
                  </a>
                </div>
              </div>
            </motion.div>

            {/* For Clinics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100"
            >
              <div className="text-center mb-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-amber-50 rounded-2xl mb-4">
                  <Users className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-3xl font-light text-slate-800 tracking-wide mb-3">For Clinics</h3>
                <p className="text-slate-600 text-sm">
                  Healthcare facilities bear substantial financial and operational costs from sonographer injuries.
                </p>
              </div>
              
              <ul className="space-y-4 mb-6">
                {forClinics.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-2 h-2 bg-amber-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span className="text-slate-600 text-sm leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
              
              {/* Cost Impact */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-red-600 mb-2">
                    {costImpact.amount}
                  </div>
                  <p className="text-slate-700 text-xs mb-3">
                    {costImpact.description}
                  </p>
                  <a 
                    href={costImpact.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 hover:text-blue-800 underline"
                  >
                    Source: Journal of Diagnostic Medical Sonography
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  )
}
