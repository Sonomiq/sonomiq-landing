export type MarketplaceStatus = 'comingSoon' | 'available' | 'underReview';

export const content = {
  hero: {
    title: 'Smart scheduling for medical imaging.',
    subhead: 'SONOMIQ optimizes your existing scheduler to minimize WRMSD risk—without changing how you book.',
    primaryCta: { label: 'Get early access', href: '#lead' },
    secondaryCta: { label: 'See how it works', href: '#how' },
    microproof: 'Evidence-based scheduling optimization, built for medical imaging.'
  },
  problem: {
    title: 'The Problem',
    description: 'Medical imaging work is physically demanding, and poor scheduling practices compound WRMSD risk.',
    statistics: {
      primary: '90% of clinical sonographers experience symptoms of WRMSDs*',
      secondary: '20% of sonographers who were symptomatic suffered career-ending injuries*',
      source: 'https://fbe.com.au/Sonographer/Reports/Sonographer%20Safety%20Workplace%20Considerations.pdf'
    },
    forStaff: [
      'Repetitive, posture-intensive imaging procedures',
      'Consecutive high-strain cases increase injury risk',
      'No systematic approach to workload distribution'
    ],
    forClinics: [
      'Lost-time shifts and expensive backfill costs',
      'Injury claims, staff turnover, and training overhead',
      'Unpredictable capacity due to staff injuries'
    ],
    costImpact: {
      amount: 'up to $700,000+ USD',
      description: 'per sonographer injury when factoring in direct costs for managing the injury along with indirect costs due to lost productivity or hiring of replacement staff',
      source: 'https://journals.sagepub.com/doi/pdf/10.1177/8756479320907370'
    },
    statCallout: 'Lower WRMSD risk. Protected staff. Stable capacity.'
  },
  howItWorks: {
    title: 'How We Work',
    description: 'SONOMIQ integrates seamlessly with your existing scheduler to provide intelligent WRMSD risk optimization.',
    steps: [
      { 
        title: 'Connect', 
        text: 'SONOMIQ integrates with your existing scheduler via API—no disruption to current workflows.',
        detail: 'One-time setup connects to your current scheduling system through secure API integration.'
      },
      { 
        title: 'Analyze', 
        text: 'Our add-on analyzes your imaging schedules and scores WRMSD risk for each staff member.',
        detail: 'Real-time analysis of exam types, durations, and staff assignments to identify high-risk patterns.'
      },
      { 
        title: 'Suggest', 
        text: 'Get real-time optimization suggestions: rotations, micro-breaks, distribution, caps, and risk flags.',
        detail: 'Intelligent recommendations for task rotation, recovery periods, workload distribution, and exposure limits.'
      },
      { 
        title: 'Apply', 
        text: 'Review and apply suggestions with one click—all within your familiar scheduling interface.',
        detail: 'Seamless integration means suggestions appear directly in your existing scheduler workflow.'
      },
      { 
        title: 'Track', 
        text: 'Every optimization and override is logged for compliance and continuous improvement.',
        detail: 'Complete audit trail for regulatory compliance and ongoing optimization of scheduling rules.'
      }
    ]
  },
  marketplaces: [
    { name: 'ADP Marketplace', blurb: 'HR/payroll/time & scheduling ecosystem.', status: 'comingSoon' as MarketplaceStatus, linkLabel: 'ADP Marketplace' },
    { name: 'UKG Marketplace (Kronos + Ultimate)', blurb: 'Large WFM ecosystem in healthcare.', status: 'comingSoon' as MarketplaceStatus, linkLabel: 'UKG Marketplace' },
    { name: 'Workday Marketplace', blurb: 'Workday Extend partner solutions.', status: 'comingSoon' as MarketplaceStatus, linkLabel: 'Workday Marketplace' },
    { name: 'Dayforce (Ceridian) Partner Marketplace', blurb: 'HCM/payroll/scheduling.', status: 'comingSoon' as MarketplaceStatus, linkLabel: 'Dayforce Marketplace' },
    { name: 'Deputy App Marketplace', blurb: 'Shift scheduling; API-friendly.', status: 'comingSoon' as MarketplaceStatus, linkLabel: 'Deputy Integrations' },
    { name: 'When I Work Integrations', blurb: 'SMB scheduling extensions.', status: 'comingSoon' as MarketplaceStatus, linkLabel: 'When I Work Integrations' },
    { name: 'QGenda Integrated Partners', blurb: 'Direct healthcare integrations.', status: 'comingSoon' as MarketplaceStatus, linkLabel: 'QGenda Partners' }
  ],
  faq: [
    { q: 'Does SONOMIQ replace our scheduler?', a: 'No. It\'s an add-on that advises your existing scheduler with WRMSD risk analysis and optimization suggestions.' },
    { q: 'Will this slow down booking?', a: 'No. Suggestions appear inline; apply with one click. Overrides are supported with automatic mitigations.' },
    { q: 'What data do you need?', a: 'Imaging exam code/type, duration, staff/room availability, and optional constraints. No patient PHI is required.' },
    { q: 'Can we tune the rules?', a: 'Yes. Exposure limits, recovery periods, and rotation preferences are configurable by site.' }
  ],
  cta: {
    title: 'Add intelligent scheduling optimization to your existing system.',
    primary: { label: 'Request early access', href: '#lead' },
    secondary: { label: 'Platform compatibility', href: '#marketplaces' }
  },
  footer: {
    disclaimer: 'SONOMIQ supports WRMSD prevention; it is not a medical device or diagnostic tool.',
    links: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
      { label: 'Contact', href: 'mailto:marcus.tossmann@sonomiq.com' },
      { label: 'Status', href: 'https://status.sonomiq.example' }
    ]
  }
};