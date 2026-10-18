export interface Project {
  id: string
  title: string
  tagline: string
  category: 'fullstack' | 'frontend' | 'ai-vibe'
  categoryLabel: string
  year: string
  file: string // retro file naming e.g. "nexus-ai.app"
  summary: string
  description: string
  highlights: string[]
  architecture: string[]
  tags: string[]
  metrics: { label: string; value: string }[]
  liveUrl?: string
  repoUrl?: string
}

export const projectsData: Project[] = [
  {
    id: 'nexus-ai-studio',
    title: 'Nexus AI Studio',
    tagline: 'Fullstack AI Generation & Workflow Platform',
    category: 'ai-vibe',
    categoryLabel: 'Fullstack & Vibe Coding',
    year: '2026',
    file: 'nexus-ai.app',
    summary: 'A full-stack generative AI workspace built rapidly using modern AI-assisted engineering and vibe coding workflows.',
    description: 'Nexus AI Studio is an autonomous content and code intelligence platform. Leveraging modern LLM orchestrations, streaming server-sent events, and edge database sync, this application was conceptualized and shipped end-to-end with high-velocity vibe coding.',
    highlights: [
      'Rapid prototype-to-production execution within 2 weeks utilizing AI-augmented development',
      'Streaming token responses via Server-Sent Events with zero UI stutter',
      'Edge vector search integration for contextual document retrieval',
    ],
    architecture: [
      'Nuxt 3 Fullstack server engine with Nitro edge handlers',
      'PostgreSQL & pgvector via Supabase backend',
      'AI SDK integrations (Gemini & Anthropic) with schema-validated outputs',
      'Tailwind CSS monochrome theme with optimistic UI updates',
    ],
    tags: ['Fullstack', 'Vibe Coding', 'Nuxt 3', 'TypeScript', 'Supabase', 'AI SDK'],
    metrics: [
      { label: 'Time to Ship', value: '14 Days' },
      { label: 'Latency', value: '< 180ms' },
      { label: 'Test Coverage', value: '88%' },
    ],
    liveUrl: '#',
    repoUrl: 'https://github.com/jeffriandriyanto',
  },
  {
    id: 'omniflow-saas',
    title: 'OmniFlow SaaS',
    tagline: 'Cloud Workflow & Team Automation Engine',
    category: 'fullstack',
    categoryLabel: 'Fullstack Engineering',
    year: '2025',
    file: 'omniflow.io',
    summary: 'Multi-tenant cloud automation platform connecting webhook triggers to scheduled serverless jobs and external APIs.',
    description: 'Designed as a fullstack micro-SaaS, OmniFlow enables non-technical operators to construct declarative workflow automations. Complete with authentication, role-based access control, billing subscription pipelines, and webhook handlers.',
    highlights: [
      'End-to-end multi-tenant schema with instant tenant isolation',
      'Real-time job queue execution with retry logic and telemetry dashboard',
      'Stripe subscription checkout with automated webhook provisioning',
    ],
    architecture: [
      'Vue 3 / Nuxt 3 full-stack composition with Pinia state management',
      'Serverless Nitro API routes with Redis (Upstash) rate-limiting',
      'PostgreSQL relational data modeling with Prisma ORM',
      'Docker containerized deployment pipeline',
    ],
    tags: ['Fullstack', 'Nuxt 3', 'Prisma', 'PostgreSQL', 'Stripe', 'Redis'],
    metrics: [
      { label: 'Uptime', value: '99.98%' },
      { label: 'Throughput', value: '1.2k req/s' },
      { label: 'Active Users', value: '5,000+' },
    ],
    liveUrl: '#',
    repoUrl: 'https://github.com/jeffriandriyanto',
  },
  {
    id: 'core-design-system',
    title: 'Core Design System',
    tagline: 'Enterprise Multi-Brand UI Token Framework',
    category: 'frontend',
    categoryLabel: 'Frontend Architecture',
    year: '2024',
    file: 'design-system.pkg',
    summary: 'A unified UI foundation powering 14+ enterprise web products with zero-runtime CSS tokens and accessible component primitives.',
    description: 'Built to solve multi-team fragmentation across a large organization. Established automated token synchronization from Figma directly to CSS custom properties, accompanied by fully accessible, headless UI primitives compliant with WCAG AA standards.',
    highlights: [
      'Reduced design-to-production turnaround time by 60% across 5 squads',
      'Zero-runtime design token pipeline with automated CI npm publishing',
      '100% WCAG 2.1 AA accessibility compliance across 45+ components',
    ],
    architecture: [
      'TypeScript-first headless primitives with Vue 3 and React wrappers',
      'Style Dictionary token transformations with automatic Tailwind preset generation',
      'Storybook interactive documentation and automated visual regression testing',
      'Vite-powered multi-package monorepo',
    ],
    tags: ['Frontend Architecture', 'Design Systems', 'TypeScript', 'Storybook', 'WCAG AA'],
    metrics: [
      { label: 'Products Powered', value: '14+' },
      { label: 'Team Adoption', value: '100%' },
      { label: 'Bundle Size', value: '18 KB' },
    ],
    liveUrl: '#',
    repoUrl: 'https://github.com/jeffriandriyanto',
  },
  {
    id: 'micro-frontend-platform',
    title: 'Micro-Frontend Platform',
    tagline: 'Distributed Module Federation Architecture',
    category: 'frontend',
    categoryLabel: 'Frontend Architecture',
    year: '2023',
    file: 'mfe-orchestrator.sys',
    summary: 'Scalable micro-frontend runtime enabling 6 independent engineering squads to deploy decoupled applications autonomously.',
    description: 'Spearheaded the technical migration from a monolithic legacy frontend into an extensible micro-frontend ecosystem. Employs Webpack/Vite Module Federation with dynamic route resolution and shared state bus.',
    highlights: [
      'Squad deployments completely decoupled: zero cross-team deployment blockers',
      'Dynamic lazy hydration with shared singleton dependencies (Vue, Router, Pinia)',
      'Shared global authentication and event-bus messaging contracts',
    ],
    architecture: [
      'Vite Module Federation runtime with fallback resilience',
      'Cross-microapp shared event bus with custom browser event dispatchers',
      'Isolated CI/CD pipelines deploying independently to Netlify edge nodes',
    ],
    tags: ['Frontend Architecture', 'Module Federation', 'Micro-Frontends', 'Vue 3', 'CI/CD'],
    metrics: [
      { label: 'Deploy Frequency', value: '8x / day' },
      { label: 'Lead Time', value: '-65%' },
      { label: 'Squads Enabled', value: '6 Squads' },
    ],
    liveUrl: '#',
    repoUrl: 'https://github.com/jeffriandriyanto',
  },
  {
    id: 'subsecond-perf-engine',
    title: 'Performance Optimization Engine',
    tagline: 'Sub-Second Web Vital & Asset Pipeline',
    category: 'frontend',
    categoryLabel: 'Frontend Architecture',
    year: '2022',
    file: 'perf-engine.drv',
    summary: 'Comprehensive frontend performance tuning campaign driving Largest Contentful Paint (LCP) down to 0.7s.',
    description: 'Systematic performance overhaul of high-traffic customer-facing web portals. Addressed critical rendering path bottlenecks, established font subsetting, image modern format conversions, tree-shaking dead dependencies, and edge caching strategies.',
    highlights: [
      'LCP dropped from 3.8s to 0.72s, lifting conversion metrics by 18%',
      'Lighthouse performance scores reached a consistent 98-100 across mobile and desktop',
      'Automated synthetic web vital checks in pull-request CI pipeline',
    ],
    architecture: [
      'Next-gen asset pipeline with modern AVIF/WebP responsive image sets',
      'Critical CSS inlining and dynamic import route-splitting',
      'Edge SSR caching headers and stale-while-revalidate policies',
    ],
    tags: ['Frontend Architecture', 'Web Vitals', 'Performance', 'Lighthouse', 'Vite'],
    metrics: [
      { label: 'LCP', value: '0.72s' },
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Conversion Lift', value: '+18%' },
    ],
    liveUrl: '#',
    repoUrl: 'https://github.com/jeffriandriyanto',
  },
  {
    id: 'realtime-telemetry',
    title: 'Live Telemetry Dashboard',
    tagline: 'WebSocket Real-Time Metrics & Terminal',
    category: 'fullstack',
    categoryLabel: 'Fullstack & Vibe Coding',
    year: '2025',
    file: 'telemetry.app',
    summary: 'Fullstack live telemetry interface streaming 20,000+ system events per second with custom canvas visualizations.',
    description: 'Built to provide immediate observability across distributed services. Combines an ultra-lightweight Node/WebSocket ingestion service with a retro-styled high-frequency HTML5 Canvas rendering engine.',
    highlights: [
      'Zero-jank 60fps streaming charts rendering thousands of real-time metrics nodes',
      'Dual mode: Retro Terminal ASCII stream and High-Density graphical charts',
      'Configurable alert thresholds with audio-visual notifications',
    ],
    architecture: [
      'WebSocket duplex connection with binary data packing',
      'Offscreen Canvas rendering worker for zero main-thread blocking',
      'Nuxt 3 client UI with custom retro CRT instrumentation styling',
    ],
    tags: ['Fullstack', 'WebSockets', 'Canvas API', 'TypeScript', 'Node.js'],
    metrics: [
      { label: 'Frame Rate', value: '60 FPS' },
      { label: 'Event Rate', value: '20k evt/s' },
      { label: 'CPU Load', value: '< 4%' },
    ],
    liveUrl: '#',
    repoUrl: 'https://github.com/jeffriandriyanto',
  },
]

