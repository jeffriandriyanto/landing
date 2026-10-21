<template>
  <aside class="w-full font-sans text-gh-fg">
    <!-- Avatar & Status Section -->
    <div class="flex flex-row lg:flex-col items-center lg:items-start gap-4 mb-4">
      <!-- Avatar with 6px rounded border -->
      <div class="relative flex-shrink-0">
        <div class="w-20 h-20 sm:w-28 sm:h-28 lg:w-64 lg:h-64 rounded-full lg:rounded-md border border-gh-border bg-gh-subtle overflow-hidden flex items-center justify-center shadow-xs">
          <img
            src="/img.png"
            alt="Jeffri Andriyanto"
            class="w-full h-full object-cover"
          />
        </div>

        <!-- Available Status Pill / Indicator -->
        <div class="hidden lg:flex items-center gap-1.5 absolute -bottom-2 left-3 px-2 py-0.5 rounded-full border border-gh-border bg-gh-canvas text-[11px] shadow-xs text-gh-fg">
          <span class="w-2 h-2 rounded-full bg-gh-green animate-pulse" />
          <span class="text-gh-muted">Available for work</span>
        </div>
      </div>

      <!-- Names & Handle -->
      <div class="flex-1 min-w-0">
        <h1 class="text-xl sm:text-2xl font-bold leading-tight text-gh-fg tracking-tight">
          Jeffri Andriyanto
        </h1>
        <div class="text-sm font-normal text-gh-muted font-mono flex items-center gap-1.5 mt-0.5">
          <span>jeffriandriyanto</span>
          <span>·</span>
          <span class="text-xs">he/him</span>
        </div>
        <div class="text-xs font-medium text-gh-blue mt-1 flex items-center gap-1">
          <span>Software Engineer</span>
        </div>
      </div>
    </div>

    <!-- Mobile Available Status Pill -->
    <div class="flex lg:hidden items-center gap-1.5 mb-4 px-2.5 py-1 rounded-md border border-gh-border bg-gh-subtle text-xs w-fit">
      <span class="w-2 h-2 rounded-full bg-gh-green animate-pulse" />
      <span class="text-gh-muted">Available for projects & roles</span>
    </div>

    <!-- Authentic Bio -->
    <div class="text-xs sm:text-sm text-gh-fg leading-relaxed mb-4">
      <p>
        <strong>Software Engineer</strong> with 8+ years of experience based in Salatiga, specializing in frontend architecture, UI/UX systems, and full-stack web applications.
      </p>
    </div>

    <!-- Action Buttons -->
    <div class="flex flex-col gap-2 mb-6">
      <a
        href="mailto:jeffriandriyanto.fe@gmail.com"
        class="gh-btn primary w-full py-1.5 text-xs font-semibold"
        @click="playClick"
      >
        <svg class="w-4 h-4 mr-1" viewBox="0 0 16 16" fill="currentColor">
          <path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-7.681L8 8.358 1.5 4.57V3.75a.25.25 0 0 1 .25-.25h12.5a.25.25 0 0 1 .25.25v.82Z" />
        </svg>
        <span>Get in Touch</span>
      </a>

      <NuxtLink
        to="/cv"
        class="gh-btn w-full py-1.5 text-xs font-medium text-gh-fg flex items-center justify-center gap-1.5"
        @click="playClick"
      >
        <svg class="w-3.5 h-3.5 text-gh-muted" viewBox="0 0 16 16" fill="currentColor">
          <path d="M4.75 0a1.75 1.75 0 0 0-1.75 1.75v12.5c0 .966.784 1.75 1.75 1.75h6.5A1.75 1.75 0 0 0 13 14.25V4.828a1.75 1.75 0 0 0-.513-1.237L9.914.513A1.75 1.75 0 0 0 8.677 0H4.75ZM4.5 1.75a.25.25 0 0 1 .25-.25h3.75v3.25c0 .414.336.75.75.75h3.25v8.75a.25.25 0 0 1-.25.25H4.75a.25.25 0 0 1-.25-.25V1.75Z" />
        </svg>
        <span>View ATS CV / Resume</span>
        <span class="text-[10px] text-gh-blue font-mono bg-blue-500/10 px-1 py-0.5 rounded border border-blue-500/20">ATS</span>
      </NuxtLink>

      <button
        type="button"
        class="gh-btn w-full py-1.5 text-xs"
        @click="copyEmail"
      >
        <svg class="w-3.5 h-3.5 text-gh-muted mr-1" viewBox="0 0 16 16" fill="currentColor">
          <path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z" />
          <path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z" />
        </svg>
        <span>{{ emailCopied ? '✓ Copied to clipboard!' : 'Copy Email Address' }}</span>
      </button>
    </div>

    <!-- Metadata Details List (GitHub Style) -->
    <div class="space-y-2.5 text-xs text-gh-fg border-t border-gh-border pt-4 pb-6">
      <!-- Organization -->
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-gh-muted flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
          <path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v9.5C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0 0 16 12.25v-9.5A1.75 1.75 0 0 0 14.25 1H1.75ZM1.5 2.75a.25.25 0 0 1 .25-.25h12.5a.25.25 0 0 1 .25.25v9.5a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25v-9.5ZM3 4.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 3 7.75Zm0 3a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm4-6a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 7 4.75Zm0 3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 7 7.75Zm0 3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 7 10.75Z" />
        </svg>
        <span class="truncate">Duit Investech · creetech.id</span>
      </div>

      <!-- Location -->
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-gh-muted flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
          <path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132A5 5 0 1 0 4.464 10.535L8 14.07l3.536-3.535a5 5 0 0 0 0-7.071ZM8 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z" />
        </svg>
        <span>Salatiga, Central Java, ID</span>
      </div>

      <!-- Timezone -->
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-gh-muted flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7-3.25v3.69l2.72 1.63a.75.75 0 1 1-.77 1.28L7.25 9.47A.75.75 0 0 1 7 8.82V4.75a.75.75 0 0 1 1.5 0Z" />
        </svg>
        <span>WIB (UTC+7) · Remote worldwide</span>
      </div>

      <!-- LinkedIn -->
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-gh-muted flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
          <path d="M7.775 3.275a.75.75 0 0 0 1.06 1.06l1.25-1.25a2 2 0 1 1 2.83 2.83l-2.5 2.5a2 2 0 0 1-2.83 0 .75.75 0 0 0-1.06 1.06 3.5 3.5 0 0 0 4.95 0l2.5-2.5a3.5 3.5 0 0 0-4.95-4.95l-1.25 1.25zm-.05 9.45a.75.75 0 0 0-1.06-1.06l-1.25 1.25a2 2 0 0 1-2.83-2.83l2.5-2.5a2 2 0 0 1 2.83 0 .75.75 0 0 0 1.06-1.06 3.5 3.5 0 0 0-4.95 0l-2.5 2.5a3.5 3.5 0 0 0 4.95 4.95l1.25-1.25z" />
        </svg>
        <a
          href="https://www.linkedin.com/in/jeffriandriyanto/"
          target="_blank"
          rel="noopener"
          class="text-gh-fg hover:text-gh-blue hover:underline truncate"
          @click="playClick"
        >
          in/jeffriandriyanto
        </a>
      </div>

      <!-- GitHub -->
      <div class="flex items-center gap-2">
        <svg class="w-4 h-4 text-gh-muted flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
          <path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z" />
        </svg>
        <a
          href="https://github.com/jeffriandriyanto"
          target="_blank"
          rel="noopener"
          class="text-gh-fg hover:text-gh-blue hover:underline truncate"
          @click="playClick"
        >
          @jeffriandriyanto
        </a>
      </div>
    </div>

    <!-- Core Stack Badges (GitHub Style) -->
    <div class="border-t border-gh-border pt-4">
      <h2 class="text-xs font-semibold text-gh-muted uppercase tracking-wider mb-2.5">
        Core Capabilities
      </h2>
      <div class="flex flex-wrap gap-1.5">
        <span class="gh-badge font-mono text-[11px]">Vue 3 / Nuxt 3</span>
        <span class="gh-badge font-mono text-[11px]">TypeScript</span>
        <span class="gh-badge font-mono text-[11px]">Micro-Frontends</span>
        <span class="gh-badge font-mono text-[11px]">Module Federation</span>
        <span class="gh-badge font-mono text-[11px]">React / Next.js</span>
        <span class="gh-badge font-mono text-[11px]">Tailwind CSS</span>
        <span class="gh-badge font-mono text-[11px]">Fullstack (Laravel/Node)</span>
        <span class="gh-badge font-mono text-[11px]">Hardware & IoT</span>
      </div>
    </div>
  </aside>
</template>

<script setup lang="ts">
const { playClick, playBeep } = useRetroAudio()
const emailCopied = ref(false)

const copyEmail = () => {
  playBeep(880, 0.05)
  if (navigator.clipboard) {
    navigator.clipboard.writeText('jeffriandriyanto.fe@gmail.com').then(() => {
      emailCopied.value = true
      setTimeout(() => {
        emailCopied.value = false
      }, 2500)
    })
  }
}
</script>
