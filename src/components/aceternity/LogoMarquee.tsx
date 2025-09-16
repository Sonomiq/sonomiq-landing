"use client"

import Image from "next/image"

const logos = [
  { src: "/logos/adp.svg", alt: "ADP" },
  { src: "/logos/ukg.svg", alt: "UKG" },
  { src: "/logos/workday.svg", alt: "Workday" },
  { src: "/logos/dayforce.svg", alt: "Dayforce" },
  { src: "/logos/deputy.svg", alt: "Deputy" },
  { src: "/logos/wheniwork.svg", alt: "When I Work" },
  { src: "/logos/qgenda.svg", alt: "QGenda" },
]

export function LogoMarquee() {
  return (
    <section aria-label="Platform logos" className="py-12 bg-white">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden">
          <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          <div className="[--gap:3rem] flex gap-[var(--gap)] overflow-hidden">
            <ul className="flex animate-[marquee_30s_linear_infinite] gap-[var(--gap)] min-w-full">
              {logos.concat(logos).map((logo, idx) => (
                <li key={idx} className="shrink-0 opacity-70 hover:opacity-100 transition-opacity">
                  <Image src={logo.src} alt={logo.alt} width={120} height={40} className="h-8 w-auto" />
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
