import { ReactNode } from "react"

export function BentoGrid({ children }: { children: ReactNode }) {
  return (
    <div className="grid gap-6 md:grid-cols-3 auto-rows-[1fr]">
      {children}
    </div>
  )
}

export function BentoCard({
  title,
  description,
  icon,
  className = "",
}: {
  title: string
  description: string
  icon?: ReactNode
  className?: string
}) {
  return (
    <div className={`group relative overflow-hidden rounded-2xl border border-slate-100 bg-white p-6 shadow-sm transition-all duration-300 hover:shadow-xl hover:border-blue-200 ${className}`}>
      <div className="mb-4 flex items-center gap-3">
        {icon}
        <h3 className="text-lg font-medium text-slate-800">{title}</h3>
      </div>
      <p className="text-slate-600 leading-relaxed text-sm">{description}</p>
      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-blue-50 opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
    </div>
  )
}
