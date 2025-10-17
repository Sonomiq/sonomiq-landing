import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { Demo } from '@/components/Demo'
import Link from 'next/link'
import { HowItWorks } from '@/components/HowItWorks'
import { FAQ } from '@/components/FAQ'
import { ProblemImpact } from '@/components/ProblemImpact'
import { content } from '@/lib/content'
import { LeadForm } from '@/components/LeadForm'
import { GradientBorder } from '@/components/aceternity/GradientBorder'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header ctaHref="#lead" />

      {/* Minimal hero */}
      <section className="bg-white">
        <Hero
          title="SONOMIQ"
          subhead="An AI assistant for schedulers, trained on WRMSD mitigation strategies and ASA guidelines."
          primaryCta={{ label: 'Request early access', href: '#lead' }}
          secondaryCta={{ label: 'Watch the demo', href: '#demo' }}
          microproof=""
        />
      </section>

      {/* Demo */}
      <Demo />

      {/* Seamless divider */}
      <div className="my-16 h-[1px] w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* Problem / Impact */}
      <ProblemImpact
        title="The Hidden Cost of Manual Scheduling"
        description="Manual scheduling leads to conflicts, burnout, and lost capacity. Traditional scheduling tools manage your calendar, but they don't optimise for staff wellbeing and operational efficiency."
        statistics={content.problem.statistics}
        forStaff={content.problem.forStaff}
        forClinics={content.problem.forClinics}
        costImpact={content.problem.costImpact}
        statCallout={content.problem.statCallout}
      />

      {/* Seamless divider */}
      <div className="my-16 h-[1px] w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* How We Work */}
      <HowItWorks 
        title="How We Work"
        description="SONOMIQ integrates seamlessly with your existing scheduler to provide intelligent WRMSD risk optimisation."
        steps={[
          { title: 'Connect', text: 'SONOMIQ integrates with your existing scheduler via API—no disruption to current workflows.', detail: '' },
          { title: 'Analyse', text: 'Our add-on analyses your imaging schedules and scores WRMSD risk for each staff member.', detail: '' },
          { title: 'Suggest', text: 'Get real-time optimisation suggestions: rotations, micro-breaks, distribution, caps, and risk flags.', detail: '' },
          { title: 'Apply', text: 'Review and apply suggestions with one click—all within your familiar scheduling interface.', detail: '' },
          { title: 'Track', text: 'Every optimisation and override is logged for compliance and continuous improvement.', detail: '' },
        ]}
      />

      {/* Seamless divider */}
      <div className="my-16 h-[1px] w-full bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

      {/* FAQ */}
      <FAQ
        items={[
          { q: "Does SONOMIQ replace our scheduler?", a: "No. It’s an assistant that layers on top of your existing scheduler to provide risk-aware suggestions." },
          { q: "Will this slow down booking?", a: "No. Suggestions appear inline and can be applied in one click. Overrides are supported." },
          { q: "What data do you need?", a: "Exam type/code, duration, staff/room availability, and optional constraints. No patient PHI is required." },
          { q: "Can we tune the rules?", a: "Yes. Exposure limits, recovery periods, case rotation preferences, and thresholds are configurable per site." },
        ]}
      />

      {/* Section divider */}
      <div className="h-px bg-slate-200 my-12" />

      {/* Lead form section matching CTA target */}
      <section id="lead" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-6 tracking-tight">
              Add intelligent scheduling optimisation to your existing system.
            </h2>
            <p className="text-xl text-slate-600 mb-12 font-light leading-relaxed">
              Join the early access programme and be the first to experience intelligent scheduling for your ultrasound department.
            </p>
            <GradientBorder>
              <div className="bg-white p-12 rounded-2xl shadow-xl border border-slate-100">
                <LeadForm action="/api/lead" />
              </div>
            </GradientBorder>
          </div>
        </div>
      </section>
    </main>
  )
}