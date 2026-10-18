<template>
  <div class="sticky top-9 z-30 bg-black/90 backdrop-blur-sm border-b border-white/10 font-mono text-xs text-neutral-400 py-1.5 px-3 sm:px-6 select-none">
    <div class="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2">
      <!-- Breadcrumb path -->
      <div class="flex items-center gap-1.5 text-neutral-300">
        <button
          type="button"
          class="hover:text-white transition-colors"
          :class="{ 'text-white font-bold': activeSpace === 'home' }"
          @click="navigate('home')"
        >
          ~/desktop
        </button>

        <span v-if="activeSpace !== 'home'" class="text-neutral-600">/</span>

        <span
          v-if="activeSpace === 'projects'"
          class="text-white font-bold bg-white/10 px-1.5 py-0.5 rounded-none"
        >
          projets.vol
        </span>
        <span
          v-else-if="activeSpace === 'parcours'"
          class="text-white font-bold bg-white/10 px-1.5 py-0.5 rounded-none"
        >
          parcours.log
        </span>
        <span
          v-else-if="activeSpace === 'profil'"
          class="text-white font-bold bg-white/10 px-1.5 py-0.5 rounded-none"
        >
          profil.sys
        </span>
        <span
          v-else-if="activeSpace === 'contact'"
          class="text-white font-bold bg-white/10 px-1.5 py-0.5 rounded-none"
        >
          contact.app
        </span>
      </div>

      <!-- Center Action / View Switch for Projects -->
      <div v-if="activeSpace === 'projects'" class="hidden md:flex items-center gap-2">
        <span class="text-[11px] text-neutral-500">view:</span>
        <button
          type="button"
          class="px-2 py-0.5 border text-[11px] transition-colors"
          :class="projectViewMode === 'grid' ? 'border-white text-white bg-white/10 font-bold' : 'border-white/20 text-neutral-400 hover:text-white'"
          @click="setProjectViewMode('grid')"
        >
          [ Cards ]
        </button>
        <button
          type="button"
          class="px-2 py-0.5 border text-[11px] transition-colors"
          :class="projectViewMode === 'index' ? 'border-white text-white bg-white/10 font-bold' : 'border-white/20 text-neutral-400 hover:text-white'"
          @click="setProjectViewMode('index')"
        >
          [ Index ]
        </button>
      </div>

      <!-- Right: Keyboard Shortcut Hints -->
      <div class="hidden lg:flex items-center gap-3 text-[11px] text-neutral-500">
        <span class="hover:text-neutral-300 cursor-pointer" @click="navigate('projects')">[1] Projets</span>
        <span class="hover:text-neutral-300 cursor-pointer" @click="navigate('parcours')">[2] Parcours</span>
        <span class="hover:text-neutral-300 cursor-pointer" @click="navigate('profil')">[3] Profil</span>
        <span class="hover:text-neutral-300 cursor-pointer" @click="navigate('contact')">[4] Contact</span>
        <span class="hover:text-neutral-300 cursor-pointer" @click="navigate('home')">[ESC] Home</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  activeSpace: 'home' | 'projects' | 'parcours' | 'profil' | 'contact'
  projectViewMode: 'grid' | 'index'
}>()

const emit = defineEmits<{
  (e: 'navigate', space: 'home' | 'projects' | 'parcours' | 'profil' | 'contact'): void
  (e: 'update:projectViewMode', mode: 'grid' | 'index'): void
}>()

const { playClick } = useRetroAudio()

const navigate = (space: 'home' | 'projects' | 'parcours' | 'profil' | 'contact') => {
  playClick()
  emit('navigate', space)
}

const setProjectViewMode = (mode: 'grid' | 'index') => {
  playClick()
  emit('update:projectViewMode', mode)
}
</script>

