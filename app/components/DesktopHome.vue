<template>
  <div class="relative py-12 px-4 sm:px-6 max-w-7xl mx-auto font-mono">
    <!-- Desktop Masthead -->
    <header class="text-center pt-8 pb-16">
      <div class="inline-flex items-center gap-2 px-3 py-1 border border-white/20 bg-neutral-950 mb-6 text-xs text-neutral-400">
        <span class="w-2 h-2 bg-white rounded-full animate-ping" />
        <span>software engineer · product builder</span>
      </div>

      <h1 class="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tighter text-white uppercase mb-6">
        Jeffri Andriyanto
      </h1>

      <p class="max-w-2xl mx-auto text-sm sm:text-base text-neutral-400 leading-relaxed font-sans font-light">
        Engineering software from strong frontend foundations to modern fullstack products.
        Leveraging <span class="text-white font-mono font-normal">AI-assisted engineering & vibe coding</span> to ship resilient, high-velocity digital solutions.
      </p>

      <div class="mt-6 flex items-center justify-center gap-4 text-xs">
        <span class="text-neutral-500">Salatiga, ID</span>
        <span class="text-neutral-600">/</span>
        <span class="text-neutral-500">Dual-Core: Frontend & Fullstack</span>
        <span class="text-neutral-600">/</span>
        <span class="text-neutral-300">Open for Projects</span>
      </div>
    </header>

    <!-- 4 Workspace Drives (Ala Eddy Naboulet) -->
    <div class="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-16">
      <!-- Drive 01: Projets -->
      <button
        type="button"
        class="group text-left p-6 sm:p-8 border border-white/20 bg-neutral-950/80 hover:border-white hover:bg-white hover:text-black transition-all duration-200 relative overflow-hidden flex flex-col justify-between min-h-[220px]"
        @click="navigate('projects')"
      >
        <div class="flex items-start justify-between w-full">
          <span class="text-3xl sm:text-4xl font-bold text-neutral-500 group-hover:text-black transition-colors">
            01
          </span>
          <span class="text-[11px] px-2 py-0.5 border border-white/20 group-hover:border-black text-neutral-400 group-hover:text-black">
            projets.vol
          </span>
        </div>

        <div class="my-4">
          <h2 class="text-2xl font-bold tracking-tight text-white group-hover:text-black transition-colors mb-2">
            Selected Works
          </h2>
          <p class="text-xs text-neutral-400 group-hover:text-neutral-800 transition-colors font-sans leading-relaxed">
            Fullstack AI applications, SaaS platforms, and enterprise-grade design systems.
          </p>
        </div>

        <div class="flex items-center justify-between text-xs font-mono pt-3 border-t border-white/10 group-hover:border-black/20">
          <span class="text-neutral-500 group-hover:text-neutral-700">6 Projects Loaded</span>
          <span class="font-bold flex items-center gap-1">
            mount volume ▸
          </span>
        </div>
      </button>

      <!-- Drive 02: Parcours (Git Log) -->
      <button
        type="button"
        class="group text-left p-6 sm:p-8 border border-white/20 bg-neutral-950/80 hover:border-white hover:bg-white hover:text-black transition-all duration-200 relative overflow-hidden flex flex-col justify-between min-h-[220px]"
        @click="navigate('parcours')"
      >
        <div class="flex items-start justify-between w-full">
          <span class="text-3xl sm:text-4xl font-bold text-neutral-500 group-hover:text-black transition-colors">
            02
          </span>
          <span class="text-[11px] px-2 py-0.5 border border-white/20 group-hover:border-black text-neutral-400 group-hover:text-black">
            parcours.log
          </span>
        </div>

        <div class="my-4">
          <h2 class="text-2xl font-bold tracking-tight text-white group-hover:text-black transition-colors mb-2">
            Career Git Graph
          </h2>
          <p class="text-xs text-neutral-400 group-hover:text-neutral-800 transition-colors font-sans leading-relaxed">
            Visual commit timeline: evolution from junior frontend to technical manager and vibe-coding engineer.
          </p>
        </div>

        <div class="flex items-center justify-between text-xs font-mono pt-3 border-t border-white/10 group-hover:border-black/20">
          <span class="text-neutral-500 group-hover:text-neutral-700">5 Commits · 3 Branches</span>
          <span class="font-bold flex items-center gap-1">
            inspect graph ▸
          </span>
        </div>
      </button>

      <!-- Drive 03: Profil -->
      <button
        type="button"
        class="group text-left p-6 sm:p-8 border border-white/20 bg-neutral-950/80 hover:border-white hover:bg-white hover:text-black transition-all duration-200 relative overflow-hidden flex flex-col justify-between min-h-[220px]"
        @click="navigate('profil')"
      >
        <div class="flex items-start justify-between w-full">
          <span class="text-3xl sm:text-4xl font-bold text-neutral-500 group-hover:text-black transition-colors">
            03
          </span>
          <span class="text-[11px] px-2 py-0.5 border border-white/20 group-hover:border-black text-neutral-400 group-hover:text-black">
            profil.sys
          </span>
        </div>

        <div class="my-4">
          <h2 class="text-2xl font-bold tracking-tight text-white group-hover:text-black transition-colors mb-2">
            Engineering Bio & Stack
          </h2>
          <p class="text-xs text-neutral-400 group-hover:text-neutral-800 transition-colors font-sans leading-relaxed">
            Philosophy of rapid iteration, clean architecture, and categorized tech arsenal.
          </p>
        </div>

        <div class="flex items-center justify-between text-xs font-mono pt-3 border-t border-white/10 group-hover:border-black/20">
          <span class="text-neutral-500 group-hover:text-neutral-700">v3.0 Specifications</span>
          <span class="font-bold flex items-center gap-1">
            read specs ▸
          </span>
        </div>
      </button>

      <!-- Drive 04: Contact -->
      <button
        type="button"
        class="group text-left p-6 sm:p-8 border border-white/20 bg-neutral-950/80 hover:border-white hover:bg-white hover:text-black transition-all duration-200 relative overflow-hidden flex flex-col justify-between min-h-[220px]"
        @click="navigate('contact')"
      >
        <div class="flex items-start justify-between w-full">
          <span class="text-3xl sm:text-4xl font-bold text-neutral-500 group-hover:text-black transition-colors">
            04
          </span>
          <span class="text-[11px] px-2 py-0.5 border border-white/20 group-hover:border-black text-neutral-400 group-hover:text-black">
            contact.app
          </span>
        </div>

        <div class="my-4">
          <h2 class="text-2xl font-bold tracking-tight text-white group-hover:text-black transition-colors mb-2">
            Contact & Availability
          </h2>
          <p class="text-xs text-neutral-400 group-hover:text-neutral-800 transition-colors font-sans leading-relaxed">
            Direct terminal connection, email dispatcher, LinkedIn, and GitHub links.
          </p>
        </div>

        <div class="flex items-center justify-between text-xs font-mono pt-3 border-t border-white/10 group-hover:border-black/20">
          <span class="text-neutral-500 group-hover:text-neutral-700">Status: Available</span>
          <span class="font-bold flex items-center gap-1">
            open terminal ▸
          </span>
        </div>
      </button>
    </div>

    <!-- Desktop Diagnostic Terminal Footer -->
    <div class="border border-white/10 bg-neutral-950 p-4 text-xs text-neutral-500 flex flex-col sm:flex-row justify-between items-center gap-2">
      <div class="flex items-center gap-3">
        <span class="text-white font-bold">[JEFFRI-OS]</span>
        <span>branch: <span class="text-neutral-300">main</span></span>
        <span>commit: <span class="text-neutral-300">9e2026</span></span>
      </div>
      <div class="flex items-center gap-4 text-[11px]">
        <span>RAM: 64MB / 64MB</span>
        <span>Display: Monochrome CRT</span>
        <span>Status: Nominal</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'navigate', space: 'home' | 'projects' | 'parcours' | 'profil' | 'contact'): void
}>()

const { playClick } = useRetroAudio()

const navigate = (space: 'home' | 'projects' | 'parcours' | 'profil' | 'contact') => {
  playClick()
  emit('navigate', space)
}
</script>

