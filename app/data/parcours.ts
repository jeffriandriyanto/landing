export interface ParcoursNode {
  hash: string
  branch: 'main' | 'fe-core' | 'vibe-fullstack'
  date: string
  role: string
  company: string
  commitMsg: string
  desc: string
  facts: string[]
  tags: string[]
  stat: string
  isMerge?: boolean
  isFork?: boolean
  isHead?: boolean
}

export const parcoursData: ParcoursNode[] = [
  {
    hash: '01a916',
    branch: 'fe-core',
    date: '2016 — 2018',
    role: 'Frontend Developer',
    company: 'Digital Agency & Web Studios',
    commitMsg: 'init(fe): learning the fundamentals of UI & modern JavaScript',
    desc: 'Began the software journey focusing on pure web fundamentals: HTML5 semantics, CSS3, vanilla JavaScript, and transitioning into Vue.js and React. Built responsive client applications and crafted early web experiences.',
    facts: [
      'Built 25+ dynamic web applications and client landing platforms',
      'Adopted early component-driven architecture with Vue 2 and modern tooling',
      'Developed strong pixel-perfection intuition and cross-browser resilience',
    ],
    tags: ['vue.js', 'javascript', 'css3', 'responsive-design'],
    stat: '1st professional coding era',
  },
  {
    hash: '4b7119',
    branch: 'fe-core',
    date: '2018 — 2021',
    role: 'Senior Frontend Engineer',
    company: 'High-Growth Tech Startup',
    commitMsg: 'feat(scale): state management, performance & SPA architecture',
    desc: 'Stepped into high-stakes product engineering. Took ownership of core client architecture, complex reactive state trees, TypeScript migration, and real-time dashboard interactions for tens of thousands of active users.',
    facts: [
      'Migrated entire JavaScript codebase to strict TypeScript with zero runtime regression',
      'Implemented offline-first caching and WebSocket live status syncing',
      'Engineered reusable component libraries cutting new feature delivery time by half',
    ],
    tags: ['typescript', 'vue.js', 'pinia', 'websockets', 'performance'],
    stat: '3+ years core scaling',
  },
  {
    hash: 'c82022',
    branch: 'main',
    date: '2021 — 2024',
    role: 'Technical Web Manager & Frontend Architect',
    company: 'Enterprise Technology Firm',
    commitMsg: 'merge: branch fe-core → architecture leadership & design systems',
    desc: 'Promoted to lead frontend architecture across multiple squads. Architected the organization-wide design token pipeline, micro-frontend runtime, and established rigorous web performance and accessibility (WCAG AA) standards.',
    facts: [
      'Architected multi-brand design system utilized across 14+ internal and customer-facing products',
      'Mentored and guided 12+ engineers on engineering best practices and code hygiene',
      'Drove Core Web Vitals to sub-second thresholds across key conversion funnels',
    ],
    tags: ['architecture', 'micro-frontends', 'design-systems', 'leadership', 'wcag-aa'],
    stat: '14+ enterprise products',
    isMerge: true,
  },
  {
    hash: 'fa2025',
    branch: 'vibe-fullstack',
    date: '2025 — 2026',
    role: 'Fullstack & Vibe Coding Pioneer',
    company: 'Indie Products & Consultancies',
    commitMsg: 'fork: feat(vibe-fullstack) embracing AI-augmented velocity',
    desc: 'Recognized the paradigm shift of AI in software development. Expanded deep frontend knowledge into fullstack engineering: writing backend Nitro APIs, Supabase/PostgreSQL schema designs, and shipping complete products at 10x speed using AI agents and vibe coding workflows.',
    facts: [
      'Built and shipped 3 autonomous full-stack SaaS prototypes end-to-end within weeks',
      'Engineered custom agentic prompts and coding workflows using Antigravity, Claude, and Gemini',
      'Architected robust serverless edge backends and real-time streaming architectures',
    ],
    tags: ['vibe-coding', 'fullstack', 'supabase', 'nitro', 'ai-agents'],
    stat: '10x delivery speed',
    isFork: true,
  },
  {
    hash: '9e2026',
    branch: 'main',
    date: '2026 — Present',
    role: 'Software Engineer & Product Builder',
    company: 'Independent / Open for Opportunities',
    commitMsg: 'wip(head): building high-impact fullstack software & tools',
    desc: 'Operating at the intersection of deep frontend architecture and rapid fullstack product development. Ready to partner with visionary teams to conceive, architect, and ship high-performance software from 0 to 1.',
    facts: [
      'Fullstack product delivery: Frontend polish + scalable backend logic + AI integrations',
      'Honest, battle-tested engineering craftsmanship meets cutting-edge AI velocity',
      'Available for fullstack contract engagements, technical consulting, and high-impact products',
    ],
    tags: ['software-engineer', 'product-builder', 'fullstack', 'indie-hacker'],
    stat: 'Ready for new ventures',
    isHead: true,
  },
]

