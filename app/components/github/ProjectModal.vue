<template>
  <div
    v-if="project"
    class="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fade-in"
    role="dialog"
    aria-modal="true"
    @click.self="close"
  >
    <div
      class="w-full max-w-3xl max-h-[90vh] bg-gh-canvas border border-gh-border rounded-md shadow-modal overflow-hidden flex flex-col font-sans text-gh-fg"
    >
      <!-- Modal Header (GitHub Style) -->
      <div class="px-5 py-3.5 bg-gh-subtle border-b border-gh-border flex items-center justify-between gap-3">
        <div class="flex items-center gap-2.5 min-w-0">
          <svg class="w-4 h-4 text-gh-muted flex-shrink-0" viewBox="0 0 16 16" fill="currentColor">
            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z" />
          </svg>
          <span class="font-semibold text-sm sm:text-base text-gh-fg truncate">
            {{ project.title }}
          </span>
          <span class="gh-badge text-[10px] font-mono flex-shrink-0">
            {{ project.company }}
          </span>
        </div>

        <button
          type="button"
          class="p-1 text-gh-muted hover:text-gh-fg rounded hover:bg-gh-border-muted transition-colors"
          aria-label="Close dialog"
          @click="close"
        >
          <svg class="w-5 h-5" viewBox="0 0 16 16" fill="currentColor">
            <path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z" />
          </svg>
        </button>
      </div>

      <!-- Modal Body (Scrollable) -->
      <div class="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm">
        <!-- Tagline & Timeline -->
        <div class="border-b border-gh-border-muted pb-4">
          <div class="text-xs text-gh-muted font-mono mb-1">
            Timeline: {{ project.year }} · Category: {{ project.categoryLabel }}
          </div>
          <p class="text-base text-gh-fg font-medium">
            {{ project.tagline }}
          </p>
        </div>

        <!-- 1. Context & Business Problem -->
        <div>
          <h3 class="text-xs font-semibold text-gh-muted uppercase tracking-wider mb-2 font-mono">
            [ Project Context & Problem ]
          </h3>
          <p class="text-xs sm:text-sm text-gh-fg leading-relaxed">
            {{ project.description }}
          </p>
        </div>

        <!-- 2. Implementation Highlights & Scope -->
        <div>
          <h3 class="text-xs font-semibold text-gh-muted uppercase tracking-wider mb-2 font-mono">
            [ Scope of Responsibility & Key Contributions ]
          </h3>
          <ul class="space-y-2 text-xs sm:text-sm text-gh-fg">
            <li
              v-for="(hl, i) in project.highlights"
              :key="i"
              class="flex items-start gap-2.5"
            >
              <span class="text-gh-blue font-bold font-mono">✓</span>
              <span class="leading-relaxed">{{ hl }}</span>
            </li>
          </ul>
        </div>

        <!-- 3. Technical Decisions & Architecture -->
        <div>
          <h3 class="text-xs font-semibold text-gh-muted uppercase tracking-wider mb-2 font-mono">
            [ Technical Decisions & Architecture ]
          </h3>
          <div class="bg-gh-subtle border border-gh-border rounded-md p-4 space-y-1.5 font-mono text-xs">
            <div
              v-for="(arch, i) in project.architecture"
              :key="i"
              class="flex items-start gap-2 text-gh-fg"
            >
              <span class="text-gh-muted">•</span>
              <span>{{ arch }}</span>
            </div>
          </div>
        </div>

        <!-- 4. Factual Metrics & Verification -->
        <div v-if="project.metrics && project.metrics.length > 0">
          <h3 class="text-xs font-semibold text-gh-muted uppercase tracking-wider mb-2 font-mono">
            [ Verified Architectural Dimensions ]
          </h3>
          <div class="grid grid-cols-3 gap-3">
            <div
              v-for="m in project.metrics"
              :key="m.label"
              class="p-3 border border-gh-border rounded-md bg-gh-subtle text-center"
            >
              <div class="text-xs sm:text-sm font-bold font-mono text-gh-fg">
                {{ m.value }}
              </div>
              <div class="text-[11px] text-gh-muted mt-0.5">
                {{ m.label }}
              </div>
            </div>
          </div>
        </div>

        <!-- 5. Technologies Actually Used -->
        <div>
          <h3 class="text-xs font-semibold text-gh-muted uppercase tracking-wider mb-2 font-mono">
            [ Technologies Used ]
          </h3>
          <div class="flex flex-wrap gap-1.5">
            <span
              v-for="t in project.tags"
              :key="t"
              class="gh-badge font-mono text-xs"
            >
              {{ t }}
            </span>
          </div>
        </div>
      </div>

      <!-- Modal Footer -->
      <div class="px-5 py-3 bg-gh-subtle border-t border-gh-border flex items-center justify-between">
        <span class="text-xs text-gh-muted font-mono hidden sm:inline">
          Esc to close
        </span>

        <div class="flex items-center gap-2">
          <a
            v-if="project.repoUrl"
            :href="project.repoUrl"
            target="_blank"
            rel="noopener"
            class="gh-btn text-xs"
            @click="playClick"
          >
            <span>LinkedIn Record</span>
            <span class="text-[10px] text-gh-muted">↗</span>
          </a>

          <button
            type="button"
            class="gh-btn text-xs font-medium"
            @click="close"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Project } from '~/data/projects'

const props = defineProps<{
  project: Project | null
}>()

const emit = defineEmits<{
  (e: 'close'): void
}>()

const { playClick } = useRetroAudio()

const close = () => {
  playClick()
  emit('close')
}

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && props.project) {
    close()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
})
</script>
