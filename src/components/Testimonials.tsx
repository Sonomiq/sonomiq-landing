"use client"

import { motion } from "framer-motion"

const testimonials = [
  {
    quote: "Our imaging rosters are smoother and staff fatigue is way down.",
    name: "Imaging Operations Lead",
    org: "Regional Health Network",
    isPlaceholder: true,
  },
  {
    quote: "WRMSD risk is finally visible in our daily lists.",
    name: "Chief Sonographer",
    org: "City Imaging Group",
    isPlaceholder: true,
  },
  {
    quote: "Scheduling conflicts dropped and staff distribution improved.",
    name: "Clinic Manager",
    org: "Metro Medical Imaging",
    isPlaceholder: true,
  },
]

export function Testimonials() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-4 tracking-tight">
              What imaging teams are saying
            </h2>
            <p className="text-sm text-slate-500 italic">
              *Example testimonials - real customer feedback coming soon
            </p>
          </motion.div>

          <div className="relative overflow-hidden">
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />

            <ul className="flex animate-[marquee_40s_linear_infinite] gap-6 min-w-full">
              {testimonials.concat(testimonials).map((t, i) => (
                <li key={i} className="shrink-0 w-80">
                  <div className="h-full rounded-2xl border border-slate-100 bg-white p-6 shadow-sm relative">
                    {t.isPlaceholder && (
                      <div className="absolute top-3 right-3 text-xs text-slate-400 bg-slate-50 px-2 py-1 rounded-full">
                        Example
                      </div>
                    )}
                    <p className="text-slate-700 leading-relaxed mb-6">"{t.quote}"</p>
                    <div className="text-sm text-slate-500">
                      <div className="font-medium text-slate-700">{t.name}</div>
                      <div>{t.org}</div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <style jsx global>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  )
}
