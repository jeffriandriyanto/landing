<template>
  <nav class="border-b border-gh-border mb-6 select-none overflow-x-auto" aria-label="Profile navigation">
    <div class="flex items-center gap-1 sm:gap-2">
      <!-- Overview Tab -->
      <button
        type="button"
        class="flex items-center gap-2 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-medium border-b-2 transition-all duration-150 whitespace-nowrap"
        :class="activeTab === 'overview'
          ? 'border-gh-orange text-gh-fg font-semibold'
          : 'border-transparent text-gh-muted hover:text-gh-fg hover:border-gh-border'"
        @click="switchTab('overview')"
      >
        <!-- Book open icon -->
        <svg class="w-4 h-4 flex-shrink-0" :class="activeTab === 'overview' ? 'text-gh-fg' : 'text-gh-muted'" viewBox="0 0 16 16" fill="currentColor">
          <path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.244a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.244a2.25 2.25 0 0 0-1.748.832l-.248.31a.75.75 0 0 1-1.172 0l-.248-.31A2.25 2.25 0 0 0 5.003 13H.75a.75.75 0 0 1-.75-.75ZM1.5 2.5v9h3.503a3.75 3.75 0 0 1 2.247.75v-9.5A2.25 2.25 0 0 0 5.003 2.5Zm13 0h-3.503a2.25 2.25 0 0 0-2.247.75v9.5a3.75 3.75 0 0 1 2.247-.75h3.503Z" />
        </svg>
        <span>Overview</span>
      </button>

      <!-- Repositories Tab -->
      <button
        type="button"
        class="flex items-center gap-2 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-medium border-b-2 transition-all duration-150 whitespace-nowrap"
        :class="activeTab === 'repositories'
          ? 'border-gh-orange text-gh-fg font-semibold'
          : 'border-transparent text-gh-muted hover:text-gh-fg hover:border-gh-border'"
        @click="switchTab('repositories')"
      >
        <!-- Repo icon -->
        <svg class="w-4 h-4 flex-shrink-0" :class="activeTab === 'repositories' ? 'text-gh-fg' : 'text-gh-muted'" viewBox="0 0 16 16" fill="currentColor">
          <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
        </svg>
        <span>Repositories</span>
        <span class="px-1.5 py-0.2 rounded-full text-[11px] font-mono bg-gh-border-muted text-gh-muted font-normal">
          {{ repoCount }}
        </span>
      </button>

      <!-- Experience Tab -->
      <button
        type="button"
        class="flex items-center gap-2 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-medium border-b-2 transition-all duration-150 whitespace-nowrap"
        :class="activeTab === 'experience'
          ? 'border-gh-orange text-gh-fg font-semibold'
          : 'border-transparent text-gh-muted hover:text-gh-fg hover:border-gh-border'"
        @click="switchTab('experience')"
      >
        <!-- Git commit / history icon -->
        <svg class="w-4 h-4 flex-shrink-0" :class="activeTab === 'experience' ? 'text-gh-fg' : 'text-gh-muted'" viewBox="0 0 16 16" fill="currentColor">
          <path d="M10.5 7.75a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm1.43.75a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 1 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 1 1 0 1.5h-3.32Z" />
        </svg>
        <span>Experience</span>
        <span class="px-1.5 py-0.2 rounded-full text-[11px] font-mono bg-gh-border-muted text-gh-muted font-normal">
          {{ experienceCount }}
        </span>
      </button>

      <!-- Skills & Architecture Tab -->
      <button
        type="button"
        class="flex items-center gap-2 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-medium border-b-2 transition-all duration-150 whitespace-nowrap"
        :class="activeTab === 'skills'
          ? 'border-gh-orange text-gh-fg font-semibold'
          : 'border-transparent text-gh-muted hover:text-gh-fg hover:border-gh-border'"
        @click="switchTab('skills')"
      >
        <!-- Cpu / Stack icon -->
        <svg class="w-4 h-4 flex-shrink-0" :class="activeTab === 'skills' ? 'text-gh-fg' : 'text-gh-muted'" viewBox="0 0 16 16" fill="currentColor">
          <path d="M6.5 1.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75V3h2.25c.69 0 1.25.56 1.25 1.25V6.5H14.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H13v2.25c0 .69-.56 1.25-1.25 1.25H9.5v1.25a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V13H4.25c-.69 0-1.25-.56-1.25-1.25V9.5H1.75a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75H3V4.25C3 3.56 3.56 3 4.25 3H6.5V1.75Zm-2 2.75a.25.25 0 0 0-.25.25v7c0 .138.112.25.25.25h7a.25.25 0 0 0 .25-.25v-7a.25.25 0 0 0-.25-.25h-7ZM5.5 6a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V6Z" />
        </svg>
        <span>Skills & Architecture</span>
      </button>
    </div>
  </nav>
</template>

<script setup lang="ts">
import type { GitHubTabId } from '~/composables/useNavigationState'

const props = defineProps<{
  activeTab: GitHubTabId
  repoCount: number
  experienceCount: number
}>()

const emit = defineEmits<{
  (e: 'change-tab', tab: GitHubTabId): void
}>()

const { playClick } = useRetroAudio()

const switchTab = (tab: GitHubTabId) => {
  playClick()
  emit('change-tab', tab)
}
</script>
