'use client'

import { motion } from 'framer-motion'
import { 
  RotateCcw, 
  Clock, 
  Users, 
  Shield, 
  AlertTriangle 
} from 'lucide-react'
import { BentoGrid, BentoCard } from '@/components/aceternity/BentoGrid'

interface EvidenceGridProps {
  items: { title: string; text: string }[]
}

const iconMap = {
  'Rotate tasks (case mix)': RotateCcw,
  'Insert micro-breaks': Clock,
  'Spread complex cases': Users,
  'Cap high-strain scans': Shield,
  'Flag high-risk slots': AlertTriangle,
} as const

export function EvidenceGrid({ items }: EvidenceGridProps) {
  return (
    <section id="evidence" className="py-20 bg-gray-50">
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
              Evidence-Based Strategies
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              SONOMIQ implements proven scheduling optimization principles to reduce WRMSD risk in medical imaging departments.
            </p>
          </motion.div>

          <BentoGrid>
            {items.map((item, index) => {
              const Icon = (iconMap as Record<string, any>)[item.title] ?? Shield
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <BentoCard
                    title={item.title}
                    description={item.text}
                    icon={
                      <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                        <Icon className="w-6 h-6" />
                      </div>
                    }
                  />
                </motion.div>
              )
            })}
          </BentoGrid>

          {/* Additional context */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <div className="bg-blue-600 text-white p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">
                Research-Backed Approach
              </h3>
              <p className="text-lg max-w-3xl mx-auto">
                These strategies are based on occupational health research and proven to reduce 
                work-related musculoskeletal disorders (WRMSDs) in medical imaging settings.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
