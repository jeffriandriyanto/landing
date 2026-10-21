<template>
  <div class="border border-gh-border rounded-md bg-gh-canvas mb-6 shadow-xs overflow-hidden">
    <!-- Card Header (GitHub README style) -->
    <div class="bg-gh-subtle border-b border-gh-border px-4 py-2.5 flex items-center justify-between text-xs">
      <div class="flex items-center gap-2 font-mono text-gh-fg font-medium">
        <svg class="w-4 h-4 text-gh-muted" viewBox="0 0 16 16" fill="currentColor">
          <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.244a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.244a2.25 2.25 0 0 0-1.748.832l-.248.31a.75.75 0 0 1-1.172 0l-.248-.31A2.25 2.25 0 0 0 5.003 13H.75a.75.75 0 0 1-.75-.75ZM1.5 2.5v9h3.503a3.75 3.75 0 0 1 2.247.75v-9.5A2.25 2.25 0 0 0 5.003 2.5Zm13 0h-3.503a2.25 2.25 0 0 0-2.247.75v9.5a3.75 3.75 0 0 1 2.247-.75h3.503Z" />
        </svg>
        <span>jeffriandriyanto / README.md</span>
      </div>

      <div class="text-gh-muted text-[11px] font-mono flex items-center gap-1.5">
        <span>markdown</span>
      </div>
    </div>

    <!-- Card Body -->
    <div class="p-5 sm:p-6 markdown-body text-gh-fg">
      <h2 class="text-lg sm:text-xl font-semibold border-b border-gh-border pb-2 mb-4 text-gh-fg">
        Software Engineer & Engineering Lead
      </h2>

      <p class="text-sm leading-relaxed text-gh-fg">
        👋 Hi there! I'm a <strong>Software Engineer</strong> with 8+ years of production experience based in Salatiga, Central Java, Indonesia. With deep foundations in frontend architecture, I specialize in building scalable web applications, responsive user interfaces, and full-stack product systems.
      </p>

      <p class="text-sm leading-relaxed text-gh-fg">
        Throughout my career across enterprise firms, high-growth startups, and consulting agencies, I have architected and maintained applications relied upon by thousands of daily users — from micro-frontend suites and IoT hardware reader integrations to export-grade order management systems and educational testing platforms.
      </p>

      <h3 class="text-base font-semibold text-gh-fg mt-5 mb-2">
        Core Engineering Focus
      </h3>
      <ul class="text-sm space-y-1.5 text-gh-fg">
        <li>
          <strong>Frontend Architecture & Micro-Frontends:</strong> Module Federation (Vite) across decoupled remote apps, Turborepo monorepos, and centralized design systems.
        </li>
        <li>
          <strong>Modern Reactive Stack:</strong> Deep expertise in Vue.js 3, Nuxt 3 & 4 (SSR), React.js, Next.js, and strict TypeScript with TanStack Query.
        </li>
        <li>
          <strong>Full-Stack & Systems Engineering:</strong> End-to-end applications with Laravel 12 API (PHP 8.3), Nitro serverless handlers, PostgreSQL / MySQL, and atomic stock reservation locks.
        </li>
        <li>
          <strong>Hardware, Real-Time & IoT Integrations:</strong> Desktop RFID/NFC card readers via local WebSockets, MQTT greenhouse telemetry streaming, and automated gate turnstile POS infrastructure.
        </li>
      </ul>

      <h3 class="text-base font-semibold text-gh-fg mt-5 mb-2">
        Aesthetic Vision & Craftsmanship
      </h3>
      <p class="text-sm leading-relaxed text-gh-fg">
        I believe the <em>marriage of functionality and aesthetics</em> is the cornerstone of captivating digital products. By pairing empathetic UI/UX intuition with architectural rigor, I bridge the gap between design vision and technical execution.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts"></script>
