"use client"

import { motion } from "framer-motion"

export function Demo() {
  return (
    <section id="demo" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 tracking-tight">
              Watch the Demo
            </h2>
            <p className="text-xl text-slate-600 font-light">
              See how SONOMIQ optimizes imaging schedules to minimize WRMSD risk.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-100"
          >
            <div className="aspect-video w-full bg-slate-100">
              <video
                className="h-full w-full object-cover"
                autoPlay
                muted
                loop
                playsInline
                controls={false}
              >
                <source src="/hero-video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
