<template>
  <div
    class="border border-gh-border rounded-md bg-gh-canvas p-4 sm:p-5 flex flex-col justify-between hover:border-gh-muted transition-all duration-150 shadow-xs group cursor-pointer"
    @click="openModal"
  >
    <div>
      <!-- Top Row: Repo Title & Visibility Badge -->
      <div class="flex items-start justify-between gap-2 mb-2">
        <div class="flex items-center gap-2 min-w-0">
          <svg class="w-4 h-4 text-gh-muted flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
          </svg>
          <span class="text-sm sm:text-base font-semibold text-gh-blue group-hover:underline truncate">
            {{ project.title }}
          </span>
        </div>

        <span class="gh-badge text-[10px] flex-shrink-0 font-mono">
          {{ project.company || 'Enterprise' }}
        </span>
      </div>

      <!-- Tagline / Summary -->
      <p class="text-xs text-gh-muted leading-relaxed line-clamp-2 mb-3">
        {{ project.summary }}
      </p>

      <!-- Topic Tags (GitHub Style) -->
      <div class="flex flex-wrap gap-1.5 mb-4">
        <span
          v-for="tag in project.tags.slice(0, 4)"
          :key="tag"
          class="gh-topic-tag text-[10px] font-mono"
        >
          {{ tag }}
        </span>
      </div>
    </div>

    <!-- Bottom Row: Primary Language & Year & Action -->
    <div class="flex items-center justify-between text-xs text-gh-muted font-mono pt-3 border-t border-gh-border-muted">
      <div class="flex items-center gap-3">
        <!-- Language dot -->
        <div class="flex items-center gap-1.5">
          <span
            class="w-3 h-3 rounded-full flex-shrink-0"
            :style="{ backgroundColor: getLanguageColor(project.tags) }"
          />
          <span class="text-[11px]">{{ getPrimaryLanguage(project.tags) }}</span>
        </div>

        <span class="text-[11px] text-gh-muted">{{ project.year }}</span>
      </div>

      <span class="text-[11px] text-gh-blue font-sans group-hover:underline flex items-center gap-0.5">
        Details <span>▸</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/data/projects'

const props = defineProps<{
  project: Project
}>()

const emit = defineEmits<{
  (e: 'select', project: Project): void
}>()

const { playClick, playBeep } = useRetroAudio()

const openModal = () => {
  playBeep(780, 0.04)
  emit('select', props.project)
}

const getPrimaryLanguage = (tags: string[]): string => {
  if (tags.some(t => t.toLowerCase().includes('typescript'))) return 'TypeScript'
  if (tags.some(t => t.toLowerCase().includes('vue') || t.toLowerCase().includes('nuxt'))) return 'Vue'
  if (tags.some(t => t.toLowerCase().includes('react') || t.toLowerCase().includes('next'))) return 'React'
  if (tags.some(t => t.toLowerCase().includes('laravel') || t.toLowerCase().includes('php'))) return 'PHP'
  return 'JavaScript'
}

const getLanguageColor = (tags: string[]): string => {
  const lang = getPrimaryLanguage(tags)
  switch (lang) {
    case 'TypeScript': return '#3178c6'
    case 'Vue': return '#41b883'
    case 'React': return '#61dafb'
    case 'PHP': return '#777bb4'
    default: return '#f1e05a'
  }
}
</script>
