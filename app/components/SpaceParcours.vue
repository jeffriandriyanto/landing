<template>
  <div class="py-10 px-4 sm:px-6 max-w-7xl mx-auto font-mono">
    <!-- Terminal Command Header -->
    <div class="mb-10 pb-6 border-b border-white/20">
      <div class="flex items-center gap-2 text-xs text-neutral-400 mb-2">
        <span>VOLUME 02</span>
        <span>/</span>
        <span>MOUNTED: ~/desktop/parcours.log</span>
      </div>
      <div class="bg-neutral-950 border border-white/20 p-3 sm:p-4 mb-4 flex items-center justify-between text-xs sm:text-sm">
        <div class="flex items-center gap-2 truncate">
          <span class="text-neutral-500">jeffri@workstation:~$</span>
          <span class="text-white font-bold">git log --graph --all --decorate parcours/</span>
          <span class="retro-cursor" />
        </div>
        <span class="hidden sm:inline text-neutral-500 text-xs">HEAD: main (9e2026)</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
        Career Git Graph
      </h1>
      <p class="text-xs sm:text-sm text-neutral-400 font-sans mt-3 max-w-xl">
        A version-controlled journey through 8+ years of engineering evolution: starting in deep frontend mechanics, ascending to architectural leadership, and branching into AI-accelerated fullstack product engineering.
      </p>
    </div>

    <!-- Branch Legend -->
    <div class="flex flex-wrap items-center gap-4 text-xs mb-8 p-3 border border-white/10 bg-neutral-950">
      <span class="text-neutral-500 font-bold">Branches:</span>
      <div class="flex items-center gap-1.5">
        <span class="w-2.5 h-2.5 bg-white border border-white inline-block" />
        <span class="text-white font-bold">main</span>
        <span class="text-neutral-500">(current / production)</span>
      </div>
      <div class="flex items-center gap-1.5">
        <span class="w-2.5 h-2.5 bg-neutral-400 border border-white inline-block" />
        <span class="text-neutral-300">fe-core</span>
        <span class="text-neutral-500">(frontend architecture foundation)</span>
      </div>
      <div class="flex items-center gap-1.5">
        <span class="w-2.5 h-2.5 bg-neutral-700 border border-white inline-block" />
        <span class="text-neutral-300">vibe-fullstack</span>
        <span class="text-neutral-500">(ai-assisted product engineering)</span>
      </div>
    </div>

    <!-- Git Commit Timeline -->
    <div class="relative border-l-2 border-white/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12 pb-8">
      <div
        v-for="node in parcoursData"
        :key="node.hash"
        class="relative group"
        @mouseenter="playClick"
      >
        <!-- Commit Node on the git line -->
        <div
          class="absolute -left-[31px] sm:-left-[47px] top-1.5 w-4 h-4 bg-black border-2 border-white group-hover:bg-white transition-colors flex items-center justify-center"
          :class="{ 'bg-white': node.isHead }"
        >
          <span v-if="node.isHead" class="w-1.5 h-1.5 bg-black" />
          <span v-else-if="node.isMerge" class="w-1.5 h-1.5 bg-white group-hover:bg-black" />
        </div>

        <!-- Commit Card -->
        <div class="border border-white/20 bg-neutral-950 p-6 sm:p-8 hover:border-white transition-colors">
          <!-- Commit Metadata -->
          <div class="flex flex-wrap items-center justify-between gap-2 text-xs border-b border-white/10 pb-3 mb-4">
            <div class="flex items-center gap-2">
              <span class="px-2 py-0.5 bg-white text-black font-bold">commit {{ node.hash }}</span>
              <span class="px-2 py-0.5 border border-white/30 text-neutral-300">
                branch: {{ node.branch }}
              </span>
              <span v-if="node.isMerge" class="px-2 py-0.5 bg-neutral-800 text-white border border-white/40">
                MERGE
              </span>
              <span v-if="node.isFork" class="px-2 py-0.5 bg-neutral-800 text-white border border-white/40">
                FORK
              </span>
            </div>
            <span class="text-neutral-400">{{ node.date }}</span>
          </div>

          <!-- Commit Message -->
          <div class="text-xs text-neutral-400 font-mono mb-3">
            <span class="text-neutral-600">$</span> {{ node.commitMsg }}
          </div>

          <!-- Role & Company -->
          <h2 class="text-xl sm:text-2xl font-bold text-white uppercase tracking-tight">
            {{ node.role }}
          </h2>
          <div class="text-xs text-neutral-400 font-mono mt-1 mb-4">
            @ {{ node.company }}
          </div>

          <!-- Narrative Description -->
          <p class="text-xs sm:text-sm text-neutral-300 font-sans leading-relaxed mb-6">
            {{ node.desc }}
          </p>

          <!-- Key Milestones / Facts -->
          <div class="mb-6 space-y-1.5 font-sans text-xs text-neutral-400">
            <div v-for="(f, i) in node.facts" :key="i" class="flex items-start gap-2">
              <span class="text-white font-mono font-bold">»</span>
              <span>{{ f }}</span>
            </div>
          </div>

          <!-- Footer: Tags & Milestone Stat -->
          <div class="pt-4 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            <div class="flex flex-wrap gap-1.5">
              <span v-for="t in node.tags" :key="t" class="stack-tag text-[10px]">
                {{ t }}
              </span>
            </div>
            <span class="text-white font-bold bg-white/10 px-2 py-1 border border-white/20 whitespace-nowrap">
              {{ node.stat }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { parcoursData } from '~/data/parcours'

const { playClick } = useRetroAudio()
</script>

