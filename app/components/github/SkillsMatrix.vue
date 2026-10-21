<template>
  <div class="space-y-6">
    <!-- Header -->
    <div class="border border-gh-border rounded-md bg-gh-canvas p-4 sm:p-5 shadow-xs">
      <h2 class="text-base font-semibold text-gh-fg flex items-center gap-2 mb-1">
        <svg class="w-4 h-4 text-gh-muted" viewBox="0 0 16 16" fill="currentColor">
          <path d="M6.5 1.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75V3h2.25c.69 0 1.25.56 1.25 1.25V6.5H14.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H13v2.25c0 .69-.56 1.25-1.25 1.25H9.5v1.25a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V13H4.25c-.69 0-1.25-.56-1.25-1.25V9.5H1.75a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75H3V4.25C3 3.56 3.56 3 4.25 3H6.5V1.75Zm-2 2.75a.25.25 0 0 0-.25.25v7c0 .138.112.25.25.25h7a.25.25 0 0 0 .25-.25v-7a.25.25 0 0 0-.25-.25h-7ZM5.5 6a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V6Z" />
        </svg>
        <span>Technical Skills & Architecture Stack</span>
      </h2>
      <p class="text-xs sm:text-sm text-gh-muted leading-relaxed">
        Comprehensive breakdown of verified technical proficiencies, frameworks, and architectures across 8+ years of production experience.
      </p>
    </div>

    <!-- 4-Grid Capability Categories -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
      <!-- 1. Frontend Core -->
      <div class="border border-gh-border rounded-md bg-gh-canvas p-5 shadow-xs">
        <div class="flex items-center justify-between pb-3 mb-4 border-b border-gh-border-muted">
          <h3 class="text-sm font-semibold text-gh-fg font-mono">
            01 / FRONTEND CORE & UI/UX
          </h3>
          <span class="gh-badge text-[10px]">Primary</span>
        </div>
        <ul class="space-y-2 text-xs sm:text-sm text-gh-fg">
          <li class="flex items-start gap-2">
            <span class="text-gh-blue font-bold font-mono">▸</span>
            <span><strong>Vue.js 3 & Nuxt (Nuxt 3 & Nuxt 4 SSR):</strong> Production architectures, composables, Nitro server routes.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-gh-blue font-bold font-mono">▸</span>
            <span><strong>React.js & Next.js:</strong> Enterprise state management, hooks, and responsive dashboard applications.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-gh-blue font-bold font-mono">▸</span>
            <span><strong>TypeScript & JavaScript (ESNext):</strong> Strict types, API response schemas, and resilient error handling.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-gh-blue font-bold font-mono">▸</span>
            <span><strong>Styling & Design Tokens:</strong> Tailwind CSS, SCSS, PrimeVue, Element Plus, and Vuetify.</span>
          </li>
        </ul>
      </div>

      <!-- 2. Micro-Frontends & Systems -->
      <div class="border border-gh-border rounded-md bg-gh-canvas p-5 shadow-xs">
        <div class="flex items-center justify-between pb-3 mb-4 border-b border-gh-border-muted">
          <h3 class="text-sm font-semibold text-gh-fg font-mono">
            02 / MFE & ARCHITECTURE
          </h3>
          <span class="gh-badge text-[10px]">Architecture</span>
        </div>
        <ul class="space-y-2 text-xs sm:text-sm text-gh-fg">
          <li class="flex items-start gap-2">
            <span class="text-gh-blue font-bold font-mono">▸</span>
            <span><strong>Module Federation (Vite):</strong> Decoupled host shell and remote micro-frontend applications.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-gh-blue font-bold font-mono">▸</span>
            <span><strong>Monorepo Engineering:</strong> Turborepo modular architecture with shared packages (@repo/ui, @repo/auth).</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-gh-blue font-bold font-mono">▸</span>
            <span><strong>Server-State Caching:</strong> Standardized data fetching and invalidation using TanStack Query.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-gh-blue font-bold font-mono">▸</span>
            <span><strong>PWA & Offline Resilience:</strong> Service Workers, client-side caching, and installable web apps.</span>
          </li>
        </ul>
      </div>

      <!-- 3. Fullstack & Backend -->
      <div class="border border-gh-border rounded-md bg-gh-canvas p-5 shadow-xs">
        <div class="flex items-center justify-between pb-3 mb-4 border-b border-gh-border-muted">
          <h3 class="text-sm font-semibold text-gh-fg font-mono">
            03 / FULLSTACK & BACKEND
          </h3>
          <span class="gh-badge text-[10px]">End-to-End</span>
        </div>
        <ul class="space-y-2 text-xs sm:text-sm text-gh-fg">
          <li class="flex items-start gap-2">
            <span class="text-gh-blue font-bold font-mono">▸</span>
            <span><strong>Laravel 12 API (PHP 8.3):</strong> RESTful API services, Eloquent ORM, and database migrations.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-gh-blue font-bold font-mono">▸</span>
            <span><strong>Database & Concurrency:</strong> MySQL 8 with database transactions and atomic inventory reservation locks.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-gh-blue font-bold font-mono">▸</span>
            <span><strong>Real-Time Messaging:</strong> WebSockets, Pusher protocol, and Firebase Cloud Messaging (FCM).</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-gh-blue font-bold font-mono">▸</span>
            <span><strong>DevOps & Production Hosting:</strong> Ubuntu VPS, Nginx reverse proxy, Node.js PM2, and Cloudflare DNS.</span>
          </li>
        </ul>
      </div>

      <!-- 4. IoT & Hardware Integrations -->
      <div class="border border-gh-border rounded-md bg-gh-canvas p-5 shadow-xs">
        <div class="flex items-center justify-between pb-3 mb-4 border-b border-gh-border-muted">
          <h3 class="text-sm font-semibold text-gh-fg font-mono">
            04 / HARDWARE & SPECIALIZED IOT
          </h3>
          <span class="gh-badge text-[10px]">Integrations</span>
        </div>
        <ul class="space-y-2 text-xs sm:text-sm text-gh-fg">
          <li class="flex items-start gap-2">
            <span class="text-gh-blue font-bold font-mono">▸</span>
            <span><strong>RFID / NFC Hardware Readers:</strong> Real-time WebSocket bridge to local desktop hardware for warranty cards.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-gh-blue font-bold font-mono">▸</span>
            <span><strong>MQTT IoT Telemetry:</strong> Greenhouse climate sensor streaming (temperature, soil moisture, automated valves).</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-gh-blue font-bold font-mono">▸</span>
            <span><strong>Geospatial Systems:</strong> Mapbox GL with browser Geolocation for dealer/store locating.</span>
          </li>
          <li class="flex items-start gap-2">
            <span class="text-gh-blue font-bold font-mono">▸</span>
            <span><strong>Specialized EdTech:</strong> Computer-Based Testing (CBT) engines with LaTeX/KaTeX formula rendering & Zoom Web SDK.</span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
