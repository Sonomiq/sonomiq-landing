'use client'

import { motion } from 'framer-motion'
import { AlertCircle, Users, TrendingDown } from 'lucide-react'

interface ProblemImpactProps {
  title: string
  description: string
  forStaff: string[]
  forClinics: string[]
  statCallout: string
}

export function ProblemImpact({ title, description, forStaff, forClinics, statCallout }: ProblemImpactProps) {
  return (
    <section className="py-24 bg-slate-50">
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
            <p className="text-xl text-slate-600 max-w-4xl mx-auto font-light leading-relaxed">
              {description}
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 mb-20">
            {/* For Sonographers */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100"
            >
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-red-50 rounded-2xl flex items-center justify-center mr-6">
                  <AlertCircle className="w-8 h-8 text-red-500" />
                </div>
                <h3 className="text-3xl font-light text-slate-800 tracking-wide">For Imaging Staff</h3>
              </div>
              <ul className="space-y-6">
                {forStaff.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-3 h-3 bg-red-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-slate-600 text-lg leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* For Clinics */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white p-10 rounded-2xl shadow-lg border border-slate-100"
            >
              <div className="flex items-center mb-8">
                <div className="w-16 h-16 bg-amber-50 rounded-2xl flex items-center justify-center mr-6">
                  <Users className="w-8 h-8 text-amber-500" />
                </div>
                <h3 className="text-3xl font-light text-slate-800 tracking-wide">For Clinics</h3>
              </div>
              <ul className="space-y-6">
                {forClinics.map((point, index) => (
                  <li key={index} className="flex items-start">
                    <div className="w-3 h-3 bg-amber-400 rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <span className="text-slate-600 text-lg leading-relaxed">{point}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Stat Callout */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white p-12 rounded-2xl shadow-2xl"
          >
            <div className="flex items-center justify-center mb-6">
              <TrendingDown className="w-10 h-10 mr-4" />
              <h3 className="text-3xl font-light tracking-wide">The Solution</h3>
            </div>
            <p className="text-2xl font-light max-w-3xl mx-auto leading-relaxed">{statCallout}</p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
