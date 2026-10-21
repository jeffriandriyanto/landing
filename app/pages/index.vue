<template>
  <div class="min-h-screen bg-gh-canvas text-gh-fg font-sans flex flex-col selection:bg-gh-blue-subtle selection:text-gh-blue">
    <!-- GitHub Global Header -->
    <SiteHeader />

    <!-- Main Container: 2-Column GitHub Profile Grid -->
    <div class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start">
        <!-- Left Profile Sidebar (~296px) -->
        <div class="lg:col-span-4 xl:col-span-3">
          <ProfileSidebar />
        </div>

        <!-- Right Main Content Area -->
        <main class="lg:col-span-8 xl:col-span-9 min-w-0">
          <!-- GitHub Tabs Navigation -->
          <NavigationTabs
            :active-tab="activeTab"
            :repo-count="projectsData.length"
            :experience-count="parcoursData.length"
            @change-tab="handleTabChange"
          />

          <!-- Tab Content Views -->

          <!-- 1. OVERVIEW TAB -->
          <section v-if="activeTab === 'overview'" aria-label="Overview">
            <!-- README.md Box -->
            <ReadmeCard />

            <!-- Pinned Repositories Section -->
            <div class="mb-8">
              <div class="flex items-center justify-between mb-3">
                <h2 class="text-sm font-semibold text-gh-fg">
                  Pinned Repositories
                </h2>
                <span class="text-xs text-gh-muted font-mono">
                  6 Featured Architectures
                </span>
              </div>

              <!-- 2-Column Grid of Pinned Repos -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
                <RepositoryCard
                  v-for="p in pinnedProjects"
                  :key="p.id"
                  :project="p"
                  @select="openProjectModal"
                />
              </div>
            </div>
          </section>

          <!-- 2. REPOSITORIES / PROJECTS TAB -->
          <section v-else-if="activeTab === 'repositories'" aria-label="Repositories">
            <!-- Filter & Search Toolbar (GitHub Style) -->
            <div class="border-b border-gh-border pb-4 mb-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
              <!-- Search input -->
              <div class="relative flex-1">
                <svg class="w-4 h-4 text-gh-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" viewBox="0 0 16 16" fill="currentColor">
                  <path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z" />
                </svg>
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Find a repository or project..."
                  class="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm rounded-md border border-gh-border bg-gh-canvas text-gh-fg placeholder-gh-muted focus:outline-none focus:border-gh-blue focus:ring-1 focus:ring-gh-blue transition-colors"
                >
              </div>

              <!-- Category Filter Buttons -->
              <div class="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs">
                <button
                  v-for="cat in repoCategories"
                  :key="cat.id"
                  type="button"
                  class="gh-btn text-xs whitespace-nowrap"
                  :class="{ 'primary': selectedCategory === cat.id }"
                  @click="selectCategory(cat.id)"
                >
                  {{ cat.label }}
                </button>
              </div>
            </div>

            <!-- Repository List Count Result -->
            <div class="text-xs text-gh-muted mb-4 font-mono">
              Showing {{ filteredProjects.length }} of {{ projectsData.length }} total repositories
            </div>

            <!-- Repository Cards Grid -->
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4">
              <RepositoryCard
                v-for="p in filteredProjects"
                :key="p.id"
                :project="p"
                @select="openProjectModal"
              />
            </div>
          </section>

          <!-- 3. EXPERIENCE TAB -->
          <section v-else-if="activeTab === 'experience'" aria-label="Experience">
            <ExperienceLog />
          </section>

          <!-- 4. SKILLS & ARCHITECTURE TAB -->
          <section v-else-if="activeTab === 'skills'" aria-label="Skills">
            <SkillsMatrix />
          </section>
        </main>
      </div>
    </div>

    <!-- Project Detail Modal Dialog -->
    <ProjectModal
      v-if="selectedProject"
      :project="selectedProject"
      @close="closeProjectModal"
    />

    <!-- GitHub Footer -->
    <SiteFooter />
  </div>
</template>

<script setup lang="ts">
import SiteHeader from '~/components/github/SiteHeader.vue'
import ProfileSidebar from '~/components/github/ProfileSidebar.vue'
import NavigationTabs from '~/components/github/NavigationTabs.vue'
import ReadmeCard from '~/components/github/ReadmeCard.vue'
import RepositoryCard from '~/components/github/RepositoryCard.vue'
import ProjectModal from '~/components/github/ProjectModal.vue'
import ExperienceLog from '~/components/github/ExperienceLog.vue'
import SkillsMatrix from '~/components/github/SkillsMatrix.vue'
import SiteFooter from '~/components/github/SiteFooter.vue'

import { projectsData, type Project } from '~/data/projects'
import { parcoursData } from '~/data/parcours'
import { useNavigationState, type GitHubTabId } from '~/composables/useNavigationState'

const { activeTab, setTab, syncFromHash } = useNavigationState()
const { playClick, playBeep } = useRetroAudio()

// 6 Top Pinned Projects for Overview
const pinnedProjects = computed(() => projectsData.slice(0, 6))

// State for active modal dialog
const selectedProject = ref<Project | null>(null)

// Filtering state in Repositories tab
const searchQuery = ref('')
const selectedCategory = ref('all')

const repoCategories = [
  { id: 'all', label: 'All' },
  { id: 'frontend', label: 'Micro-Frontends' },
  { id: 'fullstack', label: 'Fullstack' },
  { id: 'iot-hardware', label: 'IoT Hardware' },
]

const filteredProjects = computed(() => {
  return projectsData.filter((p) => {
    const matchesCategory = selectedCategory.value === 'all' || p.category === selectedCategory.value
    const matchesSearch =
      searchQuery.value.trim() === '' ||
      p.title.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      p.summary.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
      p.tags.some(t => t.toLowerCase().includes(searchQuery.value.toLowerCase()))
    return matchesCategory && matchesSearch
  })
})

const handleTabChange = (tab: GitHubTabId) => {
  setTab(tab)
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}

const selectCategory = (id: string) => {
  playClick()
  selectedCategory.value = id
}

const openProjectModal = (project: Project) => {
  selectedProject.value = project
}

const closeProjectModal = () => {
  selectedProject.value = null
}

// Global keyboard shortcut for quick navigation
const onKeyDown = (e: KeyboardEvent) => {
  const target = e.target as HTMLElement
  if (target && ['INPUT', 'TEXTAREA'].includes(target.tagName)) return

  if (e.key === '/') {
    e.preventDefault()
    setTab('repositories')
    playClick()
    setTimeout(() => {
      const searchInput = document.querySelector('input[type="text"]') as HTMLInputElement
      if (searchInput) searchInput.focus()
    }, 100)
  } else if (e.key === '1') {
    e.preventDefault()
    handleTabChange('overview')
  } else if (e.key === '2') {
    e.preventDefault()
    handleTabChange('repositories')
  } else if (e.key === '3') {
    e.preventDefault()
    handleTabChange('experience')
  } else if (e.key === '4') {
    e.preventDefault()
    handleTabChange('skills')
  }
}

onMounted(() => {
  syncFromHash()
  window.addEventListener('hashchange', syncFromHash)
  window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('hashchange', syncFromHash)
  window.removeEventListener('keydown', onKeyDown)
})

useHead({
  title: 'Jeffri Andriyanto — Software Engineer',
  meta: [
    {
      name: 'description',
      content:
        'GitHub-inspired developer profile of Jeffri Andriyanto. Software Engineer with 8+ years of production experience in Vue, Nuxt, React, Next.js, TypeScript, and Fullstack Web Systems. Based in Salatiga, Indonesia.',
    },
    { property: 'og:title', content: 'Jeffri Andriyanto — Software Engineer' },
    { property: 'og:description', content: 'GitHub-inspired developer profile of Jeffri Andriyanto. Software Engineer with 8+ years of production experience.' },
  ],
})
</script>
