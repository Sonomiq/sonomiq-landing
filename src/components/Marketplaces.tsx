'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, Clock } from 'lucide-react'
import { MarketplaceStatus } from '@/lib/content'

interface MarketplaceItem {
  name: string
  blurb: string
  status: MarketplaceStatus
  linkLabel?: string
}

interface MarketplacesProps {
  items: MarketplaceItem[]
}

export function Marketplaces({ items }: MarketplacesProps) {
  return (
    <section id="marketplaces" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
              Platform Integrations
            </h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              SONOMIQ will be available on major scheduling platforms. 
              Request early access for your platform.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {items.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 flex-1">
                    {item.name}
                  </h3>
                  <Badge 
                    variant={item.status === 'comingSoon' ? 'comingSoon' : 'default'}
                    className="ml-2"
                  >
                    {item.status === 'comingSoon' && (
                      <Clock className="w-3 h-3 mr-1" />
                    )}
                    {item.status === 'comingSoon' ? 'Coming Soon' : 
                     item.status === 'available' ? 'Available' : 'Under Review'}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm mb-4">
                  {item.blurb}
                </p>
                {item.linkLabel && (
                  <Button 
                    variant="outline" 
                    size="sm" 
                    disabled={item.status === 'comingSoon'}
                    className="w-full"
                  >
                    {item.linkLabel}
                    {item.status !== 'comingSoon' && (
                      <ExternalLink className="w-4 h-4 ml-2" />
                    )}
                  </Button>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-center bg-blue-50 p-8 rounded-lg"
          >
            <h3 className="text-2xl font-light text-gray-900 mb-4">
              Don't see your platform?
            </h3>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              We're constantly adding new integrations. Let us know which platform you use, 
              and we'll prioritize it for development.
            </p>
            <Button asChild size="lg">
              <a href="#lead">Notify me when my platform is ready</a>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
