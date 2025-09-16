export type MarketplaceStatus = 'comingSoon' | 'available' | 'underReview';

export const content = {
  hero: {
    title: 'Evidence-based scheduling for imaging teams.',
    subhead: 'SONOMIQ PTY LTD is an add-on to medical imaging schedulers that bakes evidence-based rules into rosters: rotate tasks, insert micro-breaks, spread complex cases, cap high-strain scans, and flag high-risk slots—lowering WRMSD risk, protecting sonographers, and stabilizing clinic capacity.',
    primaryCta: { label: 'Get early access', href: '#lead' },
    secondaryCta: { label: 'See how it works', href: '#how' },
    microproof: 'Rotate. Recover. Distribute. Cap. Flag—inside your existing schedule.'
  },
  whatWeDo: {
    intro: 'SONOMIQ PTY LTD is an add-on that integrates with your existing medical imaging scheduler to provide intelligent WRMSD risk optimization—without changing how you book appointments.',
    bullets: [
      'Rotate tasks (case mix)',
      'Insert micro-breaks',
      'Spread complex cases',
      'Cap high-strain scans',
      'Flag high-risk slots',
      'API-first integration'
    ]
  },
  problem: {
    forSonographers: [
      'Repetitive, posture-intensive imaging procedures',
      'Consecutive high‑strain cases increase WRMSD risk'
    ],
    forClinics: [
      'Lost-time shifts and backfill costs',
      'Injury claims, turnover, and training overhead'
    ],
    statCallout: 'Lower WRMSD risk. Protected staff. Stable capacity.'
  },
  howItWorks: [
    { title: 'Connect', text: 'SONOMIQ integrates with your existing scheduler via API—no disruption to current workflows.' },
    { title: 'Analyze', text: 'Our add-on analyzes your imaging schedules and scores WRMSD risk for each staff member.' },
    { title: 'Suggest', text: 'Get real-time optimization suggestions: rotations, micro-breaks, distribution, caps, and risk flags.' },
    { title: 'Apply', text: 'Review and apply suggestions with one click—all within your familiar scheduling interface.' },
    { title: 'Track', text: 'Every optimization and override is logged for compliance and continuous improvement.' }
  ],
  evidence: [
    { title: 'Rotate tasks (case mix)', text: 'Balance high‑risk with lower‑risk procedures to reduce repetitive strain.' },
    { title: 'Insert micro-breaks', text: 'Add short recovery periods after demanding or prolonged scans.' },
    { title: 'Spread complex cases', text: 'Distribute complex imaging across available staff.' },
    { title: 'Cap high-strain scans', text: 'Set limits per shift/day/week to prevent peak exposure.' },
    { title: 'Flag high-risk slots', text: 'Risk chips and preparation prompts before high‑risk lists.' }
  ],
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
} as const;