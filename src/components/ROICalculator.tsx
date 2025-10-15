'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

export function ROICalculator() {
  const [sonographers, setSonographers] = useState(10)
  const [injuriesPerYear, setInjuriesPerYear] = useState(2)
  const [schedulingHours, setSchedulingHours] = useState(20)

  const calculateSavings = () => {
    // Cost per injury: $700,000 USD
    const costPerInjury = 700000
    const injuryReduction = 0.45 // 45% reduction
    const timeReduction = 0.6 // 60% time reduction
    const hourlyRate = 50 // Average hourly rate for scheduling manager
    
    const injurySavings = injuriesPerYear * injuryReduction * costPerInjury
    const timeSavings = schedulingHours * 52 * timeReduction * hourlyRate // 52 weeks per year
    
    return {
      injurySavings: Math.round(injurySavings),
      timeSavings: Math.round(timeSavings),
      totalSavings: Math.round(injurySavings + timeSavings)
    }
  }

  const savings = calculateSavings()

  return (
    <section className="py-24 bg-gradient-to-br from-green-50 to-emerald-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 tracking-tight">
              Calculate Your Potential Savings
            </h2>
            <p className="text-xl text-slate-600 font-light max-w-3xl mx-auto">
              See how much SONOMIQ could save your organization annually
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="bg-white rounded-2xl p-8 shadow-xl border border-green-100"
          >
            <div className="grid md:grid-cols-2 gap-8">
              {/* Inputs */}
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-slate-800 mb-6">Your Current Situation</h3>
                
                <div>
                  <label className="block text-sm font-light text-slate-700 mb-2">
                    Number of Sonographers
                  </label>
                  <input
                    type="number"
                    value={sonographers}
                    onChange={(e) => setSonographers(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="1"
                    max="100"
                  />
                </div>

                <div>
                  <label className="block text-sm font-light text-slate-700 mb-2">
                    WRMSD Injuries per Year
                  </label>
                  <input
                    type="number"
                    value={injuriesPerYear}
                    onChange={(e) => setInjuriesPerYear(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="0"
                    max="20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-light text-slate-700 mb-2">
                    Hours Spent on Scheduling per Week
                  </label>
                  <input
                    type="number"
                    value={schedulingHours}
                    onChange={(e) => setSchedulingHours(Number(e.target.value))}
                    className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    min="1"
                    max="80"
                  />
                </div>
              </div>

              {/* Results */}
              <div className="space-y-6">
                <h3 className="text-2xl font-light text-slate-800 mb-6">Potential Annual Savings</h3>
                
                <div className="space-y-4">
                  <div className="bg-green-50 rounded-lg p-4 border border-green-200">
                    <div className="flex justify-between items-center">
                      <span className="text-green-800 font-light">Injury Cost Savings</span>
                      <span className="text-2xl font-light text-green-600">
                        ${savings.injurySavings.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-green-700 mt-1">45% reduction in WRMSD incidents</p>
                  </div>

                  <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                    <div className="flex justify-between items-center">
                      <span className="text-blue-800 font-light">Time Savings</span>
                      <span className="text-2xl font-light text-blue-600">
                        ${savings.timeSavings.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-sm text-blue-700 mt-1">60% reduction in scheduling time</p>
                  </div>

                  <div className="bg-gradient-to-r from-green-500 to-emerald-600 rounded-lg p-6 text-white">
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-light">Total Annual Savings</span>
                      <span className="text-4xl font-light">
                        ${savings.totalSavings.toLocaleString()}
                      </span>
                    </div>
                    <p className="text-green-100 mt-2">ROI typically achieved within 3-6 months</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
