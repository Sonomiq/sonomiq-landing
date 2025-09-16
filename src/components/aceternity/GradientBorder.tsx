"use client"

import { ReactNode } from "react"

export function GradientBorder({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`relative rounded-2xl p-[1px] bg-[conic-gradient(at_0%_0%,#60a5fa_0%,#22d3ee_25%,#a78bfa_50%,#60a5fa_100%)] ${className}`}>
      <div className="rounded-2xl bg-white">
        {children}
      </div>
    </div>
  )
}
