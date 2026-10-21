<template>
  <div class="min-h-screen bg-gh-subtle text-gh-fg font-sans py-6 sm:py-10 px-4 sm:px-6 transition-colors duration-150">
    <!-- Top Action Toolbar (Hidden during print) -->
    <div class="max-w-4xl mx-auto mb-6 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3 print:hidden">
      <NuxtLink
        to="/"
        class="gh-btn text-xs font-medium self-start sm:self-auto flex items-center gap-1.5"
        @click="playClick"
      >
        <span>←</span>
        <span>Back to GitHub Profile</span>
      </NuxtLink>

      <div class="flex items-center gap-2">
        <button
          type="button"
          class="gh-btn text-xs font-medium flex items-center gap-1.5"
          @click="copyPlainText"
        >
          <svg class="w-3.5 h-3.5 text-gh-muted" viewBox="0 0 16 16" fill="currentColor">
            <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z" />
            <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z" />
          </svg>
          <span>{{ copiedText ? '✓ Text Copied!' : 'Copy Plain Text' }}</span>
        </button>

        <button
          type="button"
          class="gh-btn primary text-xs font-semibold flex items-center gap-1.5 shadow-sm"
          @click="triggerPrint"
        >
          <svg class="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
            <path d="M4 1.75A.75.75 0 0 1 4.75 1h6.5a.75.75 0 0 1 .75.75V4h-8V1.75ZM2.5 4h-1A1.5 1.5 0 0 0 0 5.5v5A1.5 1.5 0 0 0 1.5 12h1v2.25c0 .414.336.75.75.75h9.5a.75.75 0 0 0 .75-.75V12h1a1.5 1.5 0 0 0 1.5-1.5v-5A1.5 1.5 0 0 0 14.5 4h-1V1.75A2.25 2.25 0 0 0 11.25 0h-6.5A2.25 2.25 0 0 0 2.5 1.75V4Zm1 9.5v-3.75h9V13.5h-9Zm9.25-6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z" />
          </svg>
          <span>Download PDF / Print ATS Resume</span>
        </button>
      </div>
    </div>

    <!-- ATS-Compliant Resume Document Container -->
    <article
      id="ats-resume"
      class="max-w-4xl mx-auto bg-white text-neutral-900 border border-neutral-300 rounded-md p-6 sm:p-12 shadow-sm font-sans print:border-none print:shadow-none print:p-0 print:m-0"
    >
      <!-- Header / Contact Information (ATS Parsable single-column format) -->
      <header class="border-b-2 border-neutral-900 pb-4 mb-6">
        <h1 class="text-2xl sm:text-3xl font-bold uppercase tracking-tight text-neutral-900">
          Jeffri Andriyanto
        </h1>
        <div class="text-sm font-semibold text-neutral-700 mt-1">
          Software Engineer & Engineering Lead
        </div>
        <div class="text-xs text-neutral-600 flex flex-wrap items-center gap-x-3 gap-y-1 mt-2">
          <span>Salatiga, Central Java, Indonesia</span>
          <span>•</span>
          <a href="mailto:jeffriandriyanto.fe@gmail.com" class="text-neutral-900 hover:underline">
            jeffriandriyanto.fe@gmail.com
          </a>
          <span>•</span>
          <a href="https://www.linkedin.com/in/jeffriandriyanto/" target="_blank" rel="noopener" class="text-neutral-900 hover:underline">
            linkedin.com/in/jeffriandriyanto
          </a>
          <span>•</span>
          <a href="https://github.com/jeffriandriyanto" target="_blank" rel="noopener" class="text-neutral-900 hover:underline">
            github.com/jeffriandriyanto
          </a>
        </div>
      </header>

      <!-- Section: Professional Summary -->
      <section class="mb-6">
        <h2 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2.5">
          Professional Summary
        </h2>
        <p class="text-xs sm:text-sm text-neutral-800 leading-relaxed text-justify">
          Software Engineer with over 8 years of production experience architecting scalable web applications, micro-frontends, and full-stack systems. Proven background in technical frontend leadership, multi-brand design token frameworks, and complex workflow implementations across enterprise, agency, and startup environments. Highly proficient in JavaScript/TypeScript ecosystems (Vue.js, Nuxt 3/4 SSR, React, Next.js) backed by robust backend API and database engineering (Laravel, Node, MySQL). Passionate about the union of rigorous architecture, WCAG AA accessibility, and intuitive UI/UX.
        </p>
      </section>

      <!-- Section: Core Technical Skills (Clean ATS Keywords) -->
      <section class="mb-6">
        <h2 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2.5">
          Core Technical Skills
        </h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs sm:text-sm text-neutral-800">
          <div>
            <strong class="text-neutral-900">Frontend Architecture:</strong> Vue.js (Vue 2/3), Nuxt 3 & Nuxt 4 (SSR), React.js, Next.js, TypeScript, JavaScript (ESNext), Module Federation (Vite), Turborepo.
          </div>
          <div>
            <strong class="text-neutral-900">Full-Stack & Backend:</strong> Laravel 12 API (PHP 8.3), Node.js / Nitro, MySQL, REST APIs, WebSockets / Pusher, Firebase Cloud Messaging (FCM).
          </div>
          <div>
            <strong class="text-neutral-900">UI/UX & Design Systems:</strong> Tailwind CSS, SCSS, PrimeVue, Element Plus, Vuetify, Headless Components, Responsive Layouts.
          </div>
          <div>
            <strong class="text-neutral-900">Hardware & Telemetry:</strong> RFID / NFC Hardware Readers via local WebSockets, MQTT IoT Telemetry, Mapbox GL Geolocation, KaTeX CBT.
          </div>
          <div class="sm:col-span-2">
            <strong class="text-neutral-900">Engineering Practices:</strong> Progressive Web Apps (PWA), Service Workers, CI/CD, Git, TanStack Query, Docker, Performance Optimization, WCAG AA.
          </div>
        </div>
      </section>

      <!-- Section: Professional Experience -->
      <section class="mb-6">
        <h2 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-3">
          Professional Experience
        </h2>

        <!-- Position 1: Duit Investech -->
        <div class="mb-5">
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
            <h3 class="text-xs sm:text-sm font-bold text-neutral-900">
              Frontend Web Developer <span class="font-normal text-neutral-700">| Duit Investech</span>
            </h3>
            <span class="text-xs text-neutral-600 font-mono">
              Mar 2019 — Present (7 yrs 8 mos) | Salatiga, Indonesia
            </span>
          </div>
          <ul class="list-disc pl-5 text-xs sm:text-sm text-neutral-800 space-y-1">
            <li>Architected enterprise-grade multi-tenant Integrated Facility Management (IFM) platform using Vite Module Federation across 5 decoupled remote applications in a high-performance Turborepo monorepo.</li>
            <li>Engineered client-side WebSocket communication bridge to local desktop RFID/NFC card readers for zero-latency card detection on the Casio Smart Warranty & Service platform.</li>
            <li>Developed SISTesi Integrated School Management & E-Learning platform, featuring a Computer-Based Testing (CBT) engine with KaTeX mathematical formula rendering, embedded Zoom Web SDK, and Mapbox attendance.</li>
            <li>Constructed Gembira Loka Zoo (GLZoo) command center, monitoring automated entrance turnstiles, desktop/mobile POS terminals, and visitor smart card CMS with financial audit reporting.</li>
            <li>Engineered ANTAM BrankasLM digital gold platform layouts and physical buyback transaction flows.</li>
            <li>Developed Inagri IoT greenhouse management web dashboard consuming real-time MQTT telemetry streams.</li>
            <li>Implemented Progressive Web App (PWA) offline capabilities and automated data import pipelines via Excel and REST APIs.</li>
          </ul>
        </div>

        <!-- Position 2: creetech.id -->
        <div class="mb-5">
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
            <h3 class="text-xs sm:text-sm font-bold text-neutral-900">
              Software Engineer & Founder <span class="font-normal text-neutral-700">| creetech.id</span>
            </h3>
            <span class="text-xs text-neutral-600 font-mono">
              Jan 2020 — Present (6 yrs 10 mos) | Salatiga, Indonesia
            </span>
          </div>
          <ul class="list-disc pl-5 text-xs sm:text-sm text-neutral-800 space-y-1">
            <li>Engineered EPP Plant, an export-grade botanical order management system (OMS) & e-commerce platform solving international logistics and inventory double-booking using database atomic reservation locks (Nuxt 4 SSR + Laravel 12 API).</li>
            <li>Architected Bukit Wahid Regency smart residential platform, automating utility billing (IPL/PAM), emergency panic button security dispatch, and democratic real-time e-voting (ECharts).</li>
            <li>Developed KIRKA electoral intelligence web platform for candidate canvassing, demographic projections, and hierarchical polling station (TPS) vote recapitulation.</li>
            <li>Configured production cloud servers on Ubuntu VPS, Nginx reverse proxy, Node.js PM2, MySQL 8, SSL encryption, and Cloudflare DNS.</li>
          </ul>
        </div>

        <!-- Position 3: poteq -->
        <div class="mb-5">
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
            <h3 class="text-xs sm:text-sm font-bold text-neutral-900">
              Software Engineer <span class="font-normal text-neutral-700">| poteq</span>
            </h3>
            <span class="text-xs text-neutral-600 font-mono">
              Sep 2021 — Feb 2023 (1 yr 6 mos) | Remote
            </span>
          </div>
          <ul class="list-disc pl-5 text-xs sm:text-sm text-neutral-800 space-y-1">
            <li>Developed community-based plan trading and resource-sharing web application utilizing Bubble.io visual development and Firebase backend.</li>
            <li>Configured core application workflows, database logic, and peer-to-peer user interaction features.</li>
          </ul>
        </div>

        <!-- Position 4: Caption Hospitality -->
        <div class="mb-5">
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
            <h3 class="text-xs sm:text-sm font-bold text-neutral-900">
              Frontend Web Developer <span class="font-normal text-neutral-700">| Caption Hospitality</span>
            </h3>
            <span class="text-xs text-neutral-600 font-mono">
              Aug 2018 — Jan 2019 (6 mos) | Yogyakarta, Indonesia
            </span>
          </div>
          <ul class="list-disc pl-5 text-xs sm:text-sm text-neutral-800 space-y-1">
            <li>Rebuilt content management system (CMS) interfaces and enhanced management workflows in Ruby on Rails.</li>
            <li>Engineered interactive React.js order management system (OMS) components under a MERN stack architecture.</li>
          </ul>
        </div>

        <!-- Position 5: PT Nostra Solusi Teknologi -->
        <div>
          <div class="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-1">
            <h3 class="text-xs sm:text-sm font-bold text-neutral-900">
              Frontend Web Developer <span class="font-normal text-neutral-700">| PT Nostra Solusi Teknologi</span>
            </h3>
            <span class="text-xs text-neutral-600 font-mono">
              Jul 2017 — Jul 2018 (1 yr 1 mo) | Jakarta, Indonesia
            </span>
          </div>
          <ul class="list-disc pl-5 text-xs sm:text-sm text-neutral-800 space-y-1">
            <li>Developed front-end features for CariParkir platform, integrating Google Maps API for partner location registration and Firebase Cloud Messaging for push notifications.</li>
            <li>Built order processing and partner management interfaces for Redkendi catering marketplace OMS in AngularJS.</li>
          </ul>
        </div>
      </section>

      <!-- Section: Key Featured Projects -->
      <section class="mb-6">
        <h2 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-3">
          Key Representative Projects
        </h2>

        <div class="space-y-3 text-xs sm:text-sm text-neutral-800">
          <div>
            <strong class="text-neutral-900">NMC Integrated Facility Management (IFM):</strong> Multi-tenant enterprise platform built with Vite Module Federation, 5 decoupled remote micro-frontends, Turborepo, and TanStack Query.
          </div>
          <div>
            <strong class="text-neutral-900">EPP Plant Export OMS:</strong> Fullstack botanical e-commerce system with atomic inventory locking, international cargo shipping algorithms, Nuxt 4 SSR, and Laravel 12 API.
          </div>
          <div>
            <strong class="text-neutral-900">Casio Smart Warranty Platform:</strong> Hardware-integrated after-sales service portal with desktop RFID/NFC reader WebSocket listeners, Mapbox GL, and 6-tier RBAC.
          </div>
          <div>
            <strong class="text-neutral-900">SISTesi Integrated School Platform:</strong> Enterprise school operations portal featuring Computer-Based Testing (CBT) with KaTeX math rendering and embedded Zoom Web SDK.
          </div>
        </div>
      </section>

      <!-- Section: Education & Language -->
      <section>
        <h2 class="text-xs sm:text-sm font-bold uppercase tracking-wider text-neutral-900 border-b border-neutral-300 pb-1 mb-2.5">
          Languages & Availability
        </h2>
        <div class="text-xs sm:text-sm text-neutral-800 space-y-1">
          <div><strong class="text-neutral-900">Languages:</strong> Indonesian (Native), English (Professional Working Proficiency).</div>
          <div><strong class="text-neutral-900">Work Authorization:</strong> Available for Full-Time, Contract, and Remote Engagements Worldwide (WIB / UTC+7).</div>
        </div>
      </section>
    </article>
  </div>
</template>

<script setup lang="ts">
const { playClick, playBeep } = useRetroAudio()
const copiedText = ref(false)

const triggerPrint = () => {
  playBeep(940, 0.05)
  if (typeof window !== 'undefined') {
    window.print()
  }
}

const copyPlainText = () => {
  playClick()
  const plainText = `JEFFRI ANDRIYANTO
Software Engineer & Engineering Lead
Salatiga, Central Java, Indonesia
Email: jeffriandriyanto.fe@gmail.com
LinkedIn: https://www.linkedin.com/in/jeffriandriyanto/
GitHub: https://github.com/jeffriandriyanto

PROFESSIONAL SUMMARY
Software Engineer with over 8 years of production experience architecting scalable web applications, micro-frontends, and full-stack systems. Proven background in technical frontend leadership, multi-brand design token frameworks, and complex workflow implementations. Expert in Vue.js, Nuxt 3/4 SSR, React, Next.js, and TypeScript, backed by robust backend capabilities in Laravel and Node.js.

CORE TECHNICAL SKILLS
- Frontend Architecture: Vue.js (Vue 2/3), Nuxt 3 & Nuxt 4 (SSR), React.js, Next.js, TypeScript, Module Federation (Vite), Turborepo.
- Full-Stack & Backend: Laravel 12 API (PHP 8.3), Node.js / Nitro, MySQL, REST APIs, WebSockets / Pusher, Firebase Cloud Messaging.
- UI/UX & Design Systems: Tailwind CSS, SCSS, PrimeVue, Element Plus, Vuetify, Headless Components.
- Hardware & Telemetry: RFID/NFC Hardware Readers via WebSockets, MQTT Telemetry, Mapbox GL Geolocation, KaTeX CBT.
- Practices & Tooling: PWA, Service Workers, CI/CD, Git, TanStack Query, Docker, Performance Optimization, WCAG AA.

PROFESSIONAL EXPERIENCE

Frontend Web Developer | Duit Investech
Mar 2019 — Present | Salatiga, Indonesia
- Architected enterprise-grade multi-tenant Integrated Facility Management (IFM) platform using Vite Module Federation across 5 decoupled remote applications in Turborepo monorepo.
- Engineered client-side WebSocket communication bridge to local desktop RFID/NFC card readers for zero-latency card detection on the Casio Smart Warranty platform.
- Developed SISTesi Integrated School Management & E-Learning platform, featuring a CBT examination engine with KaTeX mathematical rendering, embedded Zoom Web SDK, and Mapbox attendance.
- Constructed Gembira Loka Zoo (GLZoo) command center, monitoring automated entrance turnstiles, desktop/mobile POS terminals, and visitor smart card CMS with financial audit reporting.
- Engineered ANTAM BrankasLM digital gold platform layouts and physical buyback transaction flows.
- Developed Inagri IoT greenhouse management web dashboard consuming real-time MQTT telemetry streams.

Software Engineer & Founder | creetech.id
Jan 2020 — Present | Salatiga, Indonesia
- Engineered EPP Plant, an export-grade botanical order management system (OMS) & e-commerce platform solving international logistics and inventory contention using atomic database locks (Nuxt 4 SSR + Laravel 12 API).
- Architected Bukit Wahid Regency smart residential platform, automating utility billing (IPL/PAM), emergency panic button security dispatch, and democratic real-time e-voting (ECharts).
- Developed KIRKA electoral intelligence web platform for candidate canvassing, demographic projections, and hierarchical polling station (TPS) vote recapitulation.
- Configured production cloud servers on Ubuntu VPS, Nginx reverse proxy, Node.js PM2, MySQL 8, and Cloudflare DNS.

Software Engineer | poteq
Sep 2021 — Feb 2023 | Remote
- Developed community-based plan trading and resource-sharing web application utilizing Bubble.io visual development and Firebase backend.

Frontend Web Developer | Caption Hospitality
Aug 2018 — Jan 2019 | Yogyakarta, Indonesia
- Rebuilt CMS interfaces and enhanced hospitality management workflows. Developed interactive React.js order management system (OMS) components under a MERN stack architecture.

Frontend Web Developer | PT Nostra Solusi Teknologi
Jul 2017 — Jul 2018 | Jakarta, Indonesia
- Developed front-end features for CariParkir platform, integrating Google Maps API for partner location registration and Firebase Cloud Messaging for push notifications.
- Built order processing and partner management interfaces for Redkendi catering marketplace OMS in AngularJS.

KEY REPRESENTATIVE PROJECTS
- NMC Integrated Facility Management (IFM): Multi-tenant enterprise platform built with Vite Module Federation, 5 decoupled remote micro-frontends, Turborepo, and TanStack Query.
- EPP Plant Export OMS: Fullstack botanical e-commerce system with atomic inventory locking, international cargo shipping algorithms, Nuxt 4 SSR, and Laravel 12 API.
- Casio Smart Warranty Platform: Hardware-integrated after-sales service portal with desktop RFID/NFC reader WebSocket listeners, Mapbox GL, and 6-tier RBAC.
- SISTesi Integrated School Platform: Enterprise school operations portal featuring Computer-Based Testing (CBT) with KaTeX math rendering and embedded Zoom Web SDK.

LANGUAGES & AVAILABILITY
- Languages: Indonesian (Native), English (Professional Working Proficiency)
- Availability: Open for Full-Time, Contract, and Remote Engagements Worldwide (WIB / UTC+7)`

  if (navigator.clipboard) {
    navigator.clipboard.writeText(plainText).then(() => {
      copiedText.value = true
      setTimeout(() => {
        copiedText.value = false
      }, 2500)
    })
  }
}

useHead({
  title: 'ATS Resume / CV — Jeffri Andriyanto (Software Engineer)',
  meta: [
    {
      name: 'description',
      content:
        'ATS-compliant single-column curriculum vitae of Jeffri Andriyanto. Software Engineer with 8+ years of production experience in Vue, Nuxt, React, Next.js, TypeScript, and Fullstack Web Systems.',
    },
    { property: 'og:title', content: 'ATS Resume / CV — Jeffri Andriyanto' },
    { property: 'og:description', content: 'Download or print the ATS-compliant resume of Jeffri Andriyanto, Software Engineer.' },
  ],
})
</script>

<style scoped>
@media print {
  @page {
    margin: 1.2cm;
    size: auto;
  }
  body {
    background: white !important;
    color: black !important;
  }
  #ats-resume {
    border: none !important;
    box-shadow: none !important;
    padding: 0 !important;
    max-width: 100% !important;
  }
}
</style>
