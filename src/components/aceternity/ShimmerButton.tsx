"use client"

import Link from "next/link"
import { ReactNode } from "react"

export function ShimmerButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <Link
      href={href}
      className={`relative inline-flex items-center justify-center rounded-full px-8 py-3 text-white font-medium transition-transform duration-300 hover:scale-[1.02] ${className}`}
    >
      <span className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-600 via-cyan-500 to-violet-600" />
      <span className="absolute -inset-px rounded-full blur-lg bg-gradient-to-r from-blue-600/30 via-cyan-500/30 to-violet-600/30" />
      <span className="relative">{children}</span>
    </Link>
  )
}
