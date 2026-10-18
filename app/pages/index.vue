<template>
  <div class="min-h-screen bg-black text-white flex flex-col relative overflow-x-hidden">
    <!-- Boot Sequence -->
    <RetroBoot />

    <!-- Top OS Menu Bar -->
    <RetroMenuBar
      :active-space="activeSpace"
      @navigate="handleNavigate"
    />

    <!-- Sub Breadcrumb & Quick Action Bar -->
    <RetroSubBar
      :active-space="activeSpace"
      :project-view-mode="projectViewMode"
      @navigate="handleNavigate"
      @update:project-view-mode="setProjectViewMode"
    />

    <!-- Main Workspace Area -->
    <main class="flex-1 w-full bg-retro-grid min-h-[calc(100vh-68px)]">
      <Transition name="workspace" mode="out-in">
        <DesktopHome
          v-if="activeSpace === 'home'"
          key="home"
          @navigate="handleNavigate"
        />
        <SpaceProjects
          v-else-if="activeSpace === 'projects'"
          key="projects"
          :view-mode="projectViewMode"
        />
        <SpaceParcours
          v-else-if="activeSpace === 'parcours'"
          key="parcours"
        />
        <SpaceProfil
          v-else-if="activeSpace === 'profil'"
          key="profil"
        />
        <SpaceContact
          v-else-if="activeSpace === 'contact'"
          key="contact"
        />
      </Transition>
    </main>
  </div>
</template>

<script setup lang="ts">
import type { WorkspaceId } from '~/composables/useDesktopState'

const { activeSpace, projectViewMode, setSpace, setProjectViewMode, syncFromHash } = useDesktopState()
const { playClick, playBeep } = useRetroAudio()

const handleNavigate = (space: WorkspaceId) => {
  if (activeSpace.value !== space) {
    playClick()
    setSpace(space)
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}

// Global Keyboard Navigation
const handleKeyDown = (e: KeyboardEvent) => {
  // Ignore if user is inside an input or textarea
  const target = e.target as HTMLElement
  if (target && ['INPUT', 'TEXTAREA'].includes(target.tagName)) return

  if (e.key === '1') {
    e.preventDefault()
    handleNavigate('projects')
  } else if (e.key === '2') {
    e.preventDefault()
    handleNavigate('parcours')
  } else if (e.key === '3') {
    e.preventDefault()
    handleNavigate('profil')
  } else if (e.key === '4') {
    e.preventDefault()
    handleNavigate('contact')
  } else if (e.key === 'Escape') {
    e.preventDefault()
    handleNavigate('home')
  }
}

onMounted(() => {
  syncFromHash()
  window.addEventListener('hashchange', syncFromHash)
  window.addEventListener('keydown', handleKeyDown)
})

onUnmounted(() => {
  window.removeEventListener('hashchange', syncFromHash)
  window.removeEventListener('keydown', handleKeyDown)
})

useHead({
  title: 'Jeffri Andriyanto — Software Engineer & Product Builder',
  meta: [
    {
      name: 'description',
      content:
        'JEFFRI-OS: Interactive retro desktop portfolio of Jeffri Andriyanto. Software Engineer with solid frontend foundations, crafting fullstack products and AI vibe-coding solutions.',
    },
  ],
})
</script>

<style scoped>
.workspace-enter-active,
.workspace-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.workspace-enter-from {
  opacity: 0;
  transform: translateY(8px);
}

.workspace-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
