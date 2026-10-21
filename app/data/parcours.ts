export interface ParcoursNode {
  hash: string
  branch: 'main' | 'fe-core' | 'fullstack'
  date: string
  role: string
  company: string
  location: string
  employmentType: string
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
    hash: '01a717',
    branch: 'fe-core',
    date: 'Jul 2017 — Jul 2018',
    role: 'Frontend Web Developer',
    company: 'PT Nostra Solusi Teknologi',
    location: 'Greater Jakarta Area · On-site',
    employmentType: 'Full-time · 1 yr 1 mo',
    commitMsg: 'feat(fe): order management systems, maps & push messaging',
    desc: 'Developed management system interfaces and data processing features for web applications in parking services, order management, and financial services.',
    facts: [
      'Built Order Management System (OMS) features: CariParkir & Redkendi dashboards and partner management',
      'Integrated Google Maps API for partner location registration and mapping',
      'Implemented Firebase Cloud Messaging (FCM) for real-time push notifications',
      'Fixed application workflow issues and enhanced UI/UX across enterprise web apps',
    ],
    tags: ['angularjs', 'javascript', 'google-maps', 'firebase', 'oms', 'css3'],
    stat: '1st enterprise agency role',
  },
  {
    hash: '02b818',
    branch: 'fe-core',
    date: 'Aug 2018 — Jan 2019',
    role: 'Frontend Web Developer',
    company: 'Caption Hospitality',
    location: 'Yogyakarta Area · On-site',
    employmentType: 'Full-time · 6 mos',
    commitMsg: 'feat(cms): rebuilt hospitality CMS & MERN order management',
    desc: 'Rebuilt CMS interfaces and enhanced hospitality management systems. Resolved complex frontend data manipulation issues to improve application reliability.',
    facts: [
      'Rebuilt CMS interface and enhanced hospitality management workflows',
      'Developed interactive React.js interfaces for MERN stack order management (OMS)',
      'Collaborated closely with backend teams (Ruby on Rails & Node) to eliminate UI bottlenecks',
    ],
    tags: ['react.js', 'ruby-on-rails', 'mern-stack', 'cms', 'ui/ux', 'hospitality'],
    stat: 'React & CMS overhaul',
  },
  {
    hash: '03c319',
    branch: 'fe-core',
    date: 'Mar 2019 — Present',
    role: 'Frontend Web Developer',
    company: 'Duit Investech',
    location: 'Salatiga · On-site',
    employmentType: 'Full-time · 7 yrs 8 mos',
    commitMsg: 'feat(arch): micro-frontends, hardware IoT, smart cards & enterprise platforms',
    desc: 'Primary frontend driver for large-scale enterprise platforms. Spanning micro-frontends with Module Federation, real-time IoT hardware integrations, e-learning CBT engines, and smart ticketing infrastructure.',
    facts: [
      'Architected NMC IFM platform using Vite Module Federation across 5 decoupled Micro-Frontend remotes',
      'Integrated desktop RFID/NFC hardware readers via local WebSockets for Casio Smart Warranty platform',
      'Built SISTesi School Management & CBT engine with LaTeX/KaTeX formula rendering & Zoom Web SDK',
      'Engineered Gembira Loka Zoo (GLZoo) command center, entrance turnstiles, and visitor smart card CMS',
      'Developed ANTAM BrankasLM digital gold platform and Inagri IoT real-time greenhouse dashboard',
      'Implemented Progressive Web App (PWA) offline capabilities and automated data import pipelines',
    ],
    tags: ['vue.js', 'nuxt-3', 'typescript', 'micro-frontends', 'module-federation', 'iot-websockets', 'pwa'],
    stat: '7+ yrs enterprise frontend tenure',
  },
  {
    hash: '04d120',
    branch: 'fullstack',
    date: 'Jan 2020 — Present',
    role: 'Software Engineer & Founder',
    company: 'creetech.id',
    location: 'Salatiga, Central Java · Hybrid',
    employmentType: 'Self-employed · 6 yrs 10 mos',
    commitMsg: 'fork: feat(fullstack) end-to-end applications, Laravel 12, Nuxt & fullstack architecture',
    desc: 'Developing end-to-end full-stack web applications for clients across various industries, independently and collaboratively. Specializing in frontend architecture, API integrations, and robust database design.',
    facts: [
      'Engineered EPP Plant: export botanical OMS & e-commerce with concurrency-safe atomic inventory locking (Nuxt 4 SSR + Laravel 12 API)',
      'Built Bukit Wahid Regency: smart residential ecosystem with automated IPL/PAM billing, emergency panic dispatch, and e-voting',
      'Created KIRKA: electoral canvassing and real-time vote projection platform with hierarchical TPS tracking',
      'Configured full DevOps pipelines: Ubuntu VPS, Nginx reverse proxy, PM2, Cloudflare, MySQL 8',
    ],
    tags: ['fullstack', 'nuxt-4', 'laravel-12', 'vue-3', 'devops', 'mysql', 'echarts'],
    stat: 'Fullstack web applications',
    isFork: true,
  },
  {
    hash: '05e921',
    branch: 'fullstack',
    date: 'Sep 2021 — Feb 2023',
    role: 'Software Engineer',
    company: 'poteq',
    location: 'Jakarta, Indonesia · Remote',
    employmentType: 'Part-time · 1 yr 6 mos',
    commitMsg: 'feat(visual-dev): visual development environment & community platform',
    desc: 'Developed a web application using Bubble.io visual development to support community-based plan buying, selling, and sharing.',
    facts: [
      'Built user interfaces and application workflows to support core platform functionality',
      'Implemented data management and application logic within visual development environments',
      'Developed features to facilitate peer-to-peer interactions between community users',
    ],
    tags: ['bubble.io', 'visual-development', 'javascript', 'firebase', 'community-saas'],
    stat: 'Visual development & rapid ops',
  },
  {
    hash: '06f026',
    branch: 'main',
    date: '2026 — Present',
    role: 'Software Engineer & Product Builder',
    company: 'Salatiga, Central Java, ID',
    location: 'Remote Worldwide',
    employmentType: 'Open for Opportunities & High-Impact Ventures',
    commitMsg: 'merge: branch fullstack into main → senior frontend & fullstack engineering',
    desc: 'Operating from Salatiga with 8+ years of seasoned frontend expertise, combined with end-to-end fullstack execution. Turning complex product requirements into resilient, user-friendly, production-ready software.',
    facts: [
      'Uncompromising UI/UX craftsmanship: deep understanding of the DOM, reactive state, and user empathy',
      'Fullstack delivery: engineering scalable backends, database schemas, and micro-frontends with high reliability',
      'Available for frontend architecture leadership, fullstack contract projects, and complex web applications',
    ],
    tags: ['senior-frontend', 'frontend-architecture', 'salatiga', 'micro-frontends', 'fullstack', 'typescript'],
    stat: 'Ready for new ventures',
    isMerge: true,
    isHead: true,
  },
]
