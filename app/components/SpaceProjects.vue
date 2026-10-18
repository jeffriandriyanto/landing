<template>
  <div class="py-10 px-4 sm:px-6 max-w-7xl mx-auto font-mono">
    <!-- Header -->
    <div class="mb-10 pb-6 border-b border-white/20 flex flex-col md:flex-row md:items-end justify-between gap-6">
      <div>
        <div class="flex items-center gap-2 text-xs text-neutral-400 mb-2">
          <span>VOLUME 01</span>
          <span>/</span>
          <span>MOUNTED: ~/desktop/projets.vol</span>
        </div>
        <h1 class="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
          Selected Works
        </h1>
        <p class="text-xs sm:text-sm text-neutral-400 font-sans mt-3 max-w-xl">
          Fullstack AI products, SaaS architectures, and high-performance design systems built with precision craftsmanship and vibe coding velocity.
        </p>
      </div>

      <!-- Category Filter Tabs -->
      <div class="flex flex-wrap gap-2 text-xs">
        <button
          v-for="cat in categories"
          :key="cat.id"
          type="button"
          class="px-3 py-1.5 border transition-colors"
          :class="selectedCategory === cat.id ? 'border-white bg-white text-black font-bold' : 'border-white/20 text-neutral-400 hover:border-white hover:text-white'"
          @click="selectCategory(cat.id)"
        >
          {{ cat.label }}
        </button>
      </div>
    </div>

    <!-- View Mode: Cards Grid -->
    <div v-if="viewMode === 'grid'" class="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="border border-white/20 bg-neutral-950 p-6 sm:p-8 flex flex-col justify-between hover:border-white transition-all duration-200 group relative"
      >
        <div>
          <!-- Top Row -->
          <div class="flex items-center justify-between text-xs text-neutral-500 mb-4 pb-3 border-b border-white/10">
            <span class="font-bold text-white group-hover:underline">{{ project.file }}</span>
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 border border-white/20 text-[10px] text-neutral-300">{{ project.company }}</span>
              <span class="hidden sm:inline px-2 py-0.5 border border-white/20 text-[10px]">{{ project.categoryLabel }}</span>
              <span>{{ project.year }}</span>
            </div>
          </div>

          <!-- Project Title & Tagline -->
          <h2 class="text-xl sm:text-2xl font-bold text-white mb-2 group-hover:text-neutral-200">
            {{ project.title }}
          </h2>
          <p class="text-xs text-neutral-400 font-sans leading-relaxed mb-6">
            {{ project.summary }}
          </p>

          <!-- Stack Tags -->
          <div class="flex flex-wrap gap-1.5 mb-6">
            <span
              v-for="tag in project.tags"
              :key="tag"
              class="stack-tag text-[10px]"
            >
              {{ tag }}
            </span>
          </div>
        </div>

        <!-- Metrics & Action -->
        <div>
          <div class="grid grid-cols-3 gap-2 py-3 border-t border-b border-white/10 my-4 text-[11px]">
            <div v-for="m in project.metrics" :key="m.label">
              <div class="text-neutral-500 text-[10px]">{{ m.label }}</div>
              <div class="text-white font-bold">{{ m.value }}</div>
            </div>
          </div>

          <button
            type="button"
            class="w-full mt-2 py-2 border border-white/30 text-xs font-mono text-white hover:bg-white hover:text-black transition-colors flex items-center justify-center gap-2"
            @click="openModal(project)"
          >
            <span>[ INSPECT ARCHITECTURE ]</span>
            <span>▸</span>
          </button>
        </div>
      </div>
    </div>

    <!-- View Mode: Index Table (Eddy Naboulet Style) -->
    <div v-else class="border border-white/20 bg-neutral-950">
      <div class="grid grid-cols-12 px-4 py-2 border-b border-white/20 text-xs text-neutral-500 font-bold">
        <div class="col-span-4 sm:col-span-3">FILE / IDENTIFIER</div>
        <div class="col-span-5 sm:col-span-4">TITLE</div>
        <div class="hidden sm:block sm:col-span-3">CATEGORY</div>
        <div class="col-span-3 sm:col-span-2 text-right">ACTION</div>
      </div>

      <div
        v-for="project in filteredProjects"
        :key="project.id"
        class="grid grid-cols-12 px-4 py-3.5 border-b border-white/10 last:border-b-0 text-xs items-center hover:bg-white hover:text-black cursor-pointer group transition-colors"
        @click="openModal(project)"
      >
        <div class="col-span-4 sm:col-span-3 font-bold">
          {{ project.file }}
        </div>
        <div class="col-span-5 sm:col-span-4 truncate text-neutral-300 group-hover:text-black">
          {{ project.title }}
        </div>
        <div class="hidden sm:block sm:col-span-3 text-neutral-500 group-hover:text-neutral-800 truncate">
          {{ project.categoryLabel }}
        </div>
        <div class="col-span-3 sm:col-span-2 text-right font-bold">
          inspect ↗
        </div>
      </div>
    </div>

    <!-- Project Detail Modal -->
    <div
      v-if="activeProject"
      class="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
      @click.self="closeModal"
    >
      <div class="bg-black border border-white max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto text-xs sm:text-sm font-mono shadow-2xl">
        <!-- Modal Header -->
        <div class="flex items-start justify-between border-b border-white/20 pb-4 mb-6">
          <div>
            <div class="flex items-center gap-2 text-neutral-400 text-xs mb-1">
              <span>{{ activeProject.file }}</span>
              <span>·</span>
              <span>{{ activeProject.year }}</span>
            </div>
            <h3 class="text-2xl font-bold text-white uppercase">
              {{ activeProject.title }}
            </h3>
            <p class="text-neutral-400 text-xs mt-1">
              {{ activeProject.tagline }}
            </p>
          </div>
          <button
            type="button"
            class="px-2 py-1 border border-white hover:bg-white hover:text-black font-bold text-xs"
            @click="closeModal"
          >
            [X] ESC
          </button>
        </div>

        <!-- Description -->
        <div class="space-y-6">
          <div>
            <div class="text-neutral-400 text-xs mb-2 font-bold">[ OVERVIEW ]</div>
            <p class="text-neutral-300 font-sans leading-relaxed text-xs sm:text-sm">
              {{ activeProject.description }}
            </p>
          </div>

          <!-- Key Highlights -->
          <div>
            <div class="text-neutral-400 text-xs mb-2 font-bold">[ KEY HIGHLIGHTS ]</div>
            <ul class="space-y-1.5 text-neutral-300 font-sans text-xs">
              <li
                v-for="(hl, i) in activeProject.highlights"
                :key="i"
                class="flex items-start gap-2"
              >
                <span class="text-white font-mono font-bold">»</span>
                <span>{{ hl }}</span>
              </li>
            </ul>
          </div>

          <!-- Architecture Specs -->
          <div>
            <div class="text-neutral-400 text-xs mb-2 font-bold">[ ARCHITECTURE STACK ]</div>
            <ul class="space-y-1.5 text-neutral-300 font-sans text-xs">
              <li
                v-for="(arch, i) in activeProject.architecture"
                :key="i"
                class="flex items-start gap-2"
              >
                <span class="text-white font-mono font-bold">✓</span>
                <span>{{ arch }}</span>
              </li>
            </ul>
          </div>

          <!-- Metrics -->
          <div class="p-4 border border-white/20 bg-neutral-950">
            <div class="text-neutral-400 text-xs mb-3 font-bold">[ BENCHMARKS & METRICS ]</div>
            <div class="grid grid-cols-3 gap-4 text-center">
              <div v-for="m in activeProject.metrics" :key="m.label">
                <div class="text-white font-bold text-base sm:text-lg">{{ m.value }}</div>
                <div class="text-neutral-500 text-[10px] mt-0.5">{{ m.label }}</div>
              </div>
            </div>
          </div>

          <!-- Links -->
          <div class="flex items-center justify-between pt-4 border-t border-white/20">
            <span class="text-neutral-500 text-xs">jeffri-os // repository access</span>
            <div class="flex items-center gap-3">
              <a
                v-if="activeProject.repoUrl"
                :href="activeProject.repoUrl"
                target="_blank"
                rel="noopener"
                class="px-4 py-2 border border-white/30 hover:border-white hover:bg-white hover:text-black transition-colors text-xs"
              >
                GitHub Profile ↗
              </a>
              <button
                type="button"
                class="px-4 py-2 bg-white text-black font-bold border border-white hover:bg-black hover:text-white transition-colors text-xs"
                @click="closeModal"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { projectsData, type Project } from '~/data/projects'

const props = withDefaults(
  defineProps<{
    viewMode?: 'grid' | 'index'
  }>(),
  {
    viewMode: 'grid',
  }
)

const { playClick, playBeep } = useRetroAudio()

const selectedCategory = ref<string>('all')
const activeProject = ref<Project | null>(null)

const categories = [
  { id: 'all', label: 'All Volumes [9]' },
  { id: 'fullstack', label: 'Fullstack & Vibe [3]' },
  { id: 'frontend', label: 'Frontend & MFEs [4]' },
  { id: 'iot-hardware', label: 'IoT & Hardware [2]' },
]

const filteredProjects = computed(() => {
  if (selectedCategory.value === 'all') return projectsData
  return projectsData.filter((p) => p.category === selectedCategory.value)
})

const selectCategory = (id: string) => {
  playClick()
  selectedCategory.value = id
}

const openModal = (project: Project) => {
  playBeep(750, 0.04)
  activeProject.value = project
}

const closeModal = () => {
  playClick()
  activeProject.value = null
}

const onKeyDown = (e: KeyboardEvent) => {
  if (e.key === 'Escape' && activeProject.value) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', onKeyDown)
})
</script>

