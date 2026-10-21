<template>
  <header class="bg-gh-subtle border-b border-gh-border text-gh-fg text-sm select-none sticky top-0 z-30 transition-colors duration-150">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4">
      <!-- Left: Logo & Breadcrumb -->
      <div class="flex items-center gap-3">
        <a
          href="/"
          class="flex items-center gap-2 font-semibold text-gh-fg hover:text-gh-blue transition-colors"
          aria-label="Home"
          @click="playClick"
        >
          <img src="/logo.png" alt="Jeffri Andriyanto" class="w-6 h-6 object-contain rounded" />
        </a>

        <div class="hidden sm:flex items-center text-gh-muted text-xs font-mono">
          <span>/</span>
          <a
            href="#overview"
            class="ml-1 text-gh-fg font-semibold hover:text-gh-blue hover:underline"
            @click="playClick"
          >
            jeffriandriyanto
          </a>
        </div>
      </div>

      <!-- Right: Search bar, External Links, Sound & Theme Switcher -->
      <div class="flex items-center gap-2 sm:gap-3">
        <!-- Quick search indicator -->
        <div class="hidden md:flex items-center gap-2 px-2.5 py-1 text-xs border border-gh-border rounded-md bg-gh-canvas text-gh-muted">
          <svg class="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
            <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z" />
          </svg>
          <span>Type <kbd class="px-1 border border-gh-border rounded bg-gh-subtle text-[10px] font-mono">/</kbd> to search</span>
        </div>

        <!-- Sound FX Toggle Button -->
        <button
          type="button"
          class="gh-btn text-xs px-2"
          :title="soundEnabled ? 'Mute sound effects' : 'Enable sound effects'"
          @click="toggleSound"
        >
          <!-- Speaker with sound waves -->
          <svg v-if="soundEnabled" class="w-3.5 h-3.5 text-gh-green" viewBox="0 0 16 16" fill="currentColor">
            <path d="M7.559 1.978a.75.75 0 0 1 .791.17l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.29-.53V2.5a.75.75 0 0 1 .5-.522ZM1.75 5.5h2.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 .75-.75Z" />
            <path d="M13.53 4.47a.75.75 0 0 1 1.06 0 5 5 0 0 1 0 7.06.75.75 0 0 1-1.06-1.06 3.5 3.5 0 0 0 0-4.94.75.75 0 0 1 0-1.06Z" />
          </svg>
          <!-- Muted Speaker -->
          <svg v-else class="w-3.5 h-3.5 text-gh-muted" viewBox="0 0 16 16" fill="currentColor">
            <path d="M7.559 1.978a.75.75 0 0 1 .791.17l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.29-.53V2.5a.75.75 0 0 1 .5-.522ZM1.75 5.5h2.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 .75-.75Z" />
            <path d="m12.28 6.22 2.5 2.5a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 1 1 1.06-1.06Zm1.44 0-2.5 2.5a.75.75 0 1 1-1.06-1.06l2.5-2.5a.75.75 0 1 1 1.06 1.06Z" />
          </svg>
          <span class="hidden sm:inline font-mono text-[11px]">{{ soundEnabled ? 'SFX' : 'Muted' }}</span>
        </button>

        <!-- External Profile Links -->
        <a
          href="https://github.com/jeffriandriyanto"
          target="_blank"
          rel="noopener"
          class="gh-btn text-xs"
          title="GitHub Profile"
          @click="playClick"
        >
          <span>GitHub</span>
          <span class="text-[10px] text-gh-muted">↗</span>
        </a>

        <a
          href="https://www.linkedin.com/in/jeffriandriyanto/"
          target="_blank"
          rel="noopener"
          class="gh-btn text-xs"
          title="LinkedIn Profile"
          @click="playClick"
        >
          <span>LinkedIn</span>
          <span class="text-[10px] text-gh-muted">↗</span>
        </a>

        <!-- Theme Toggle (Sun / Moon) -->
        <button
          type="button"
          class="gh-btn p-1.5"
          :title="isDark ? 'Switch to Light theme' : 'Switch to Dark theme'"
          @click="handleThemeToggle"
        >
          <!-- Sun icon (when dark) -->
          <svg v-if="isDark" class="w-4 h-4 text-amber-400" viewBox="0 0 16 16" fill="currentColor">
            <path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-1.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm5.657-8.157a.75.75 0 0 1 0 1.061l-1.061 1.06a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.06-1.061a.75.75 0 0 1 1.061 0Zm-9.193 9.193a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.061 0ZM8 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 8 0ZM3 8a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 3 8Zm13 0a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 16 8Zm-12.596 4.404a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 0-1.061Zm9.192-9.192a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 0-1.061ZM8 13a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 13Z" />
          </svg>
          <!-- Moon icon (when light) -->
          <svg v-else class="w-4 h-4 text-gh-muted" viewBox="0 0 16 16" fill="currentColor">
            <path d="M9.598 1.591a.749.749 0 0 1 .785-.175 7.001 7.001 0 1 1-8.967 8.967.75.75 0 0 1 .961-.96 5.5 5.5 0 0 0 7.046-7.046.75.75 0 0 1 .175-.786Zm1.616 1.945a7 7 0 0 1-7.678 7.678 5.499 5.499 0 1 0 7.678-7.678Z" />
          </svg>
        </button>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const { isDark, toggleTheme } = useGitHubTheme()
const { soundEnabled, toggleSound, playClick } = useRetroAudio()

const handleThemeToggle = () => {
  playClick()
  toggleTheme()
}
</script>
