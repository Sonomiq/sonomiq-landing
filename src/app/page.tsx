import { Header } from '@/components/Header'
import { Hero } from '@/components/Hero'
import { ProblemImpact } from '@/components/ProblemImpact'
import { HowItWorks } from '@/components/HowItWorks'
import { Demo } from '@/components/Demo'
import { LogoMarquee } from '@/components/aceternity/LogoMarquee'
import { Spotlight } from '@/components/aceternity/Spotlight'
import { GradientBorder } from '@/components/aceternity/GradientBorder'
import { ShimmerButton } from '@/components/aceternity/ShimmerButton'
import { Testimonials } from '@/components/Testimonials'
import { Marketplaces } from '@/components/Marketplaces'
import { FAQ } from '@/components/FAQ'
import { LeadForm } from '@/components/LeadForm'
import { Footer } from '@/components/Footer'
import { content } from '@/lib/content'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header ctaHref={content.hero.primaryCta.href} />
      
      <Hero
        title={content.hero.title}
        subhead={content.hero.subhead}
        primaryCta={content.hero.primaryCta}
        secondaryCta={content.hero.secondaryCta}
        microproof={content.hero.microproof}
      />
      
      <LogoMarquee />

      <div className="relative">
        <Spotlight />
        <ProblemImpact
          title={content.problem.title}
          description={content.problem.description}
          forStaff={content.problem.forStaff}
          forClinics={content.problem.forClinics}
          statCallout={content.problem.statCallout}
        />
      </div>
      
      <HowItWorks 
        title={content.howItWorks.title}
        description={content.howItWorks.description}
        steps={content.howItWorks.steps} 
      />

      <div className="text-center my-12">
        <ShimmerButton href="#lead">Get early access</ShimmerButton>
      </div>

      <Demo />

      <Testimonials />
      
      <Marketplaces items={content.marketplaces} />
      
      <FAQ items={content.faq} />
      
      <section id="lead" className="py-24 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-5xl md:text-6xl font-light text-slate-800 mb-8 tracking-tight">
              {content.cta.title}
            </h2>
            <p className="text-xl text-slate-600 mb-16 font-light leading-relaxed">
              Join the early access program and be the first to experience 
              intelligent scheduling for your ultrasound department.
            </p>
            <GradientBorder>
              <div className="bg-white p-12 rounded-2xl shadow-xl border border-slate-100">
                <LeadForm action="/api/lead" />
              </div>
            </GradientBorder>
          </div>
        </div>
      </section>
      
      <Footer
        links={content.footer.links}
        disclaimer={content.footer.disclaimer}
      />
    </main>
  )
}