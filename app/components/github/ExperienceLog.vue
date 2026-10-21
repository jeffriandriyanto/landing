<template>
  <div class="space-y-6">
    <!-- Header Summary -->
    <div class="border border-gh-border rounded-md bg-gh-canvas p-4 sm:p-5 shadow-xs">
      <div class="flex items-center justify-between flex-wrap gap-2 mb-2">
        <h2 class="text-base font-semibold text-gh-fg flex items-center gap-2">
          <svg class="w-4 h-4 text-gh-muted" viewBox="0 0 16 16" fill="currentColor">
            <path d="M10.5 7.75a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm1.43.75a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 1 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 1 1 0 1.5h-3.32Z" />
          </svg>
          <span>Career Experience & Engineering Activity</span>
        </h2>
        <span class="text-xs font-mono text-gh-muted">
          8+ Years Production · 2017 — Present
        </span>
      </div>
      <p class="text-xs sm:text-sm text-gh-muted leading-relaxed">
        Chronological record of roles across enterprise software, high-growth startups, and consulting engineering studios.
      </p>
    </div>

    <!-- Timeline entries (GitHub Activity / Release Style) -->
    <div class="relative border-l border-gh-border ml-3 sm:ml-4 pl-5 sm:pl-6 space-y-8">
      <div
        v-for="exp in parcoursData"
        :key="exp.hash"
        class="relative group"
      >
        <!-- Git commit node dot on vertical rail -->
        <div
          class="absolute -left-[27px] sm:-left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-gh-border bg-gh-canvas group-hover:border-gh-blue group-hover:bg-gh-blue transition-colors flex items-center justify-center"
          :class="{ 'border-gh-green bg-gh-green': exp.isHead }"
        />

        <!-- Experience Box -->
        <div class="border border-gh-border rounded-md bg-gh-canvas p-5 shadow-xs hover:border-gh-muted transition-colors">
          <!-- Top Row: Role & Period -->
          <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2">
            <div>
              <h3 class="text-base font-semibold text-gh-fg flex items-center gap-2 flex-wrap">
                <span>{{ exp.role }}</span>
                <span class="text-xs font-normal text-gh-muted font-mono">
                  @ {{ exp.company }}
                </span>
              </h3>
              <div class="text-xs text-gh-muted font-mono flex items-center gap-2 mt-0.5">
                <span>{{ exp.location }}</span>
                <span>·</span>
                <span>{{ exp.employmentType }}</span>
              </div>
            </div>

            <span class="gh-badge text-[11px] font-mono whitespace-nowrap self-start sm:self-auto">
              {{ exp.date }}
            </span>
          </div>

          <!-- Description -->
          <p class="text-xs sm:text-sm text-gh-fg leading-relaxed my-3">
            {{ exp.desc }}
          </p>

          <!-- Key Responsibilities & Contributions -->
          <div class="space-y-1.5 my-3 text-xs sm:text-sm">
            <div
              v-for="(f, i) in exp.facts"
              :key="i"
              class="flex items-start gap-2 text-gh-fg"
            >
              <span class="text-gh-blue font-bold font-mono text-xs mt-0.5">›</span>
              <span class="leading-relaxed">{{ f }}</span>
            </div>
          </div>

          <!-- Technologies Used (Tags) -->
          <div class="pt-3 border-t border-gh-border-muted flex flex-wrap items-center justify-between gap-2">
            <div class="flex flex-wrap gap-1">
              <span
                v-for="t in exp.tags"
                :key="t"
                class="gh-topic-tag text-[10px] font-mono"
              >
                {{ t }}
              </span>
            </div>

            <span class="text-[11px] font-mono text-gh-muted">
              {{ exp.stat }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { parcoursData } from '~/data/parcours'
</script>
