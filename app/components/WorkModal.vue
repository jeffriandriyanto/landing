<template>
  <Teleport to="body">
    <div
      class="fixed inset-0 z-[100] flex justify-end"
      @click.self="$emit('close')"
    >
      <div
        class="absolute inset-0 bg-black/70 backdrop-blur-sm"
        @click="$emit('close')"
      />
      <div
        ref="panelRef"
        class="relative w-full max-w-2xl h-full bg-void-50 border-l border-void-300 overflow-y-auto"
      >
        <div
          class="sticky top-0 z-10 glass-strong p-6 flex items-center justify-between"
        >
          <div>
            <span
              class="text-xs font-mono text-accent tracking-widest uppercase"
              >{{ project.role }}</span
            >
            <h3 class="text-xl font-bold text-white mt-1">
              {{ project.title }}
            </h3>
          </div>
          <button
            @click="$emit('close')"
            class="w-10 h-10 rounded-lg glass flex items-center justify-center text-silver-muted hover:text-white transition-colors"
          >
            <svg
              class="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div class="p-6 sm:p-8 space-y-8">
          <div>
            <span
              class="text-xs font-mono text-silver-dim tracking-wider uppercase"
              >Period</span
            >
            <p class="text-silver-bright mt-1">{{ project.year }}</p>
          </div>
          <div>
            <span
              class="text-xs font-mono text-silver-dim tracking-wider uppercase"
              >Overview</span
            >
            <p class="text-silver mt-2 leading-relaxed">
              {{ project.description }}
            </p>
          </div>
          <div>
            <span
              class="text-xs font-mono text-silver-dim tracking-wider uppercase"
              >Key Technical Highlights</span
            >
            <ul class="mt-3 space-y-3">
              <li
                v-for="h in project.highlights"
                :key="h"
                class="flex items-start gap-3"
              >
                <span
                  class="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0"
                />
                <span class="text-silver leading-relaxed">{{ h }}</span>
              </li>
            </ul>
          </div>
          <div>
            <span
              class="text-xs font-mono text-silver-dim tracking-wider uppercase"
              >Technology Stack</span
            >
            <div class="flex flex-wrap gap-2 mt-3">
              <span v-for="tag in project.tags" :key="tag" class="stack-tag">{{
                tag
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import type { Project } from "./WorksGrid.vue";

defineProps<{ project: Project }>();
defineEmits<{ close: [] }>();

const panelRef = ref<HTMLElement | null>(null);

onMounted(() => {
  if (panelRef.value) {
    gsap.fromTo(
      panelRef.value,
      { x: "100%" },
      { x: "0%", duration: 0.5, ease: "power3.out" },
    );
  }
  document.body.style.overflow = "hidden";
});

onUnmounted(() => {
  document.body.style.overflow = "";
});
</script>
