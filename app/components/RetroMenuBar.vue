<template>
  <header class="fixed top-0 left-0 right-0 z-40 bg-black border-b border-white/20 select-none font-mono text-xs text-white">
    <div class="max-w-7xl mx-auto px-3 sm:px-6 h-9 flex items-center justify-between">
      <!-- Left: Logo & Menus -->
      <div class="flex items-center gap-1 sm:gap-2">
        <!-- Logo JA / System Menu -->
        <div class="relative" ref="systemMenuRef">
          <button
            type="button"
            class="px-2 py-1 flex items-center gap-1.5 hover:bg-white hover:text-black font-bold tracking-wider transition-colors"
            :class="{ 'bg-white text-black': openMenu === 'system' }"
            @click="toggleMenu('system')"
          >
            <span>[JA]</span>
          </button>
          <div
            v-if="openMenu === 'system'"
            class="absolute left-0 top-full mt-1 w-56 bg-black border border-white p-1 shadow-2xl z-50 text-xs"
          >
            <div class="px-3 py-1.5 font-bold border-b border-white/20 text-neutral-300">
              JEFFRI-OS v3.0
            </div>
            <div class="px-3 py-1.5 text-neutral-400 text-[11px] border-b border-white/10">
              Software Engineer & Builder<br />
              Salatiga, Central Java, ID
            </div>
            <button
              type="button"
              class="w-full text-left px-3 py-1.5 hover:bg-white hover:text-black flex justify-between items-center"
              @click="handleNavigate('profil')"
            >
              <span>About Developer</span>
              <kbd class="text-[10px] text-neutral-400">3</kbd>
            </button>
            <div class="my-1 border-t border-white/20" />
            <button
              type="button"
              class="w-full text-left px-3 py-1.5 hover:bg-white hover:text-black"
              @click="rebootOS"
            >
              Restart JEFFRI-OS...
            </button>
          </div>
        </div>

        <!-- File Menu -->
        <div class="relative" ref="fileMenuRef">
          <button
            type="button"
            class="px-2 py-1 hover:bg-white hover:text-black transition-colors"
            :class="{ 'bg-white text-black': openMenu === 'file' }"
            @click="toggleMenu('file')"
          >
            File
          </button>
          <div
            v-if="openMenu === 'file'"
            class="absolute left-0 top-full mt-1 w-64 bg-black border border-white p-1 shadow-2xl z-50 text-xs"
          >
            <button
              type="button"
              class="w-full text-left px-3 py-1.5 hover:bg-white hover:text-black flex justify-between items-center"
              @click="handleNavigate('home')"
            >
              <span>~/bureau (Desktop Home)</span>
              <kbd class="text-[10px] text-neutral-400">ESC</kbd>
            </button>
            <div class="my-1 border-t border-white/20" />
            <button
              type="button"
              class="w-full text-left px-3 py-1.5 hover:bg-white hover:text-black flex justify-between items-center"
              @click="handleNavigate('projects')"
            >
              <span>01 projets.vol (Works)</span>
              <kbd class="text-[10px] text-neutral-400">1</kbd>
            </button>
            <button
              type="button"
              class="w-full text-left px-3 py-1.5 hover:bg-white hover:text-black flex justify-between items-center"
              @click="handleNavigate('parcours')"
            >
              <span>02 parcours.log (Career Git)</span>
              <kbd class="text-[10px] text-neutral-400">2</kbd>
            </button>
            <button
              type="button"
              class="w-full text-left px-3 py-1.5 hover:bg-white hover:text-black flex justify-between items-center"
              @click="handleNavigate('profil')"
            >
              <span>03 profil.sys (Profile & Stack)</span>
              <kbd class="text-[10px] text-neutral-400">3</kbd>
            </button>
            <button
              type="button"
              class="w-full text-left px-3 py-1.5 hover:bg-white hover:text-black flex justify-between items-center"
              @click="handleNavigate('contact')"
            >
              <span>04 contact.app (Reach Out)</span>
              <kbd class="text-[10px] text-neutral-400">4</kbd>
            </button>
          </div>
        </div>

        <!-- System Menu -->
        <div class="relative" ref="viewMenuRef">
          <button
            type="button"
            class="px-2 py-1 hover:bg-white hover:text-black transition-colors"
            :class="{ 'bg-white text-black': openMenu === 'view' }"
            @click="toggleMenu('view')"
          >
            System
          </button>
          <div
            v-if="openMenu === 'view'"
            class="absolute left-0 top-full mt-1 w-64 bg-black border border-white p-1 shadow-2xl z-50 text-xs"
          >
            <button
              type="button"
              class="w-full text-left px-3 py-1.5 hover:bg-white hover:text-black flex justify-between items-center"
              @click="toggleCrt"
            >
              <span>CRT Scanlines</span>
              <span class="font-bold">[{{ crtEnabled ? 'ON' : 'OFF' }}]</span>
            </button>
            <button
              type="button"
              class="w-full text-left px-3 py-1.5 hover:bg-white hover:text-black flex justify-between items-center"
              @click="handleToggleSound"
            >
              <span>Retro Sound FX</span>
              <span class="font-bold">[{{ soundEnabled ? 'ON' : 'OFF' }}]</span>
            </button>
            <div class="my-1 border-t border-white/20" />
            <button
              type="button"
              class="w-full text-left px-3 py-1.5 hover:bg-white hover:text-black flex justify-between items-center"
              @click="toggleFullscreen"
            >
              <span>Toggle Fullscreen</span>
              <span class="text-[10px] text-neutral-400">F11</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Right: Status & Clock -->
      <div class="flex items-center gap-3 sm:gap-4">
        <!-- Availability indicator -->
        <button
          type="button"
          class="flex items-center gap-1.5 px-2 py-0.5 border border-white/20 hover:border-white transition-colors"
          @click="handleNavigate('contact')"
        >
          <span class="w-2 h-2 rounded-full bg-white animate-ping" />
          <span class="hidden sm:inline text-neutral-300">available</span>
        </button>

        <!-- Digital clock -->
        <div class="text-neutral-400 font-mono tracking-wider">
          {{ currentTime }}
        </div>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
const props = defineProps<{
  activeSpace: 'home' | 'projects' | 'parcours' | 'profil' | 'contact'
}>()

const emit = defineEmits<{
  (e: 'navigate', space: 'home' | 'projects' | 'parcours' | 'profil' | 'contact'): void
  (e: 'reboot'): void
}>()

const openMenu = ref<'system' | 'file' | 'view' | null>(null)
const crtEnabled = useState<boolean>('retro-crt-enabled', () => true)
const isBooting = useState<boolean>('retro-is-booting', () => false)
const { soundEnabled, toggleSound, playClick, playBeep, playSwitch } = useRetroAudio()

const currentTime = ref('00:00:00')

const toggleMenu = (menu: 'system' | 'file' | 'view') => {
  playClick()
  openMenu.value = openMenu.value === menu ? null : menu
}

const handleNavigate = (space: 'home' | 'projects' | 'parcours' | 'profil' | 'contact') => {
  playClick()
  openMenu.value = null
  emit('navigate', space)
}

const toggleCrt = () => {
  playSwitch()
  crtEnabled.value = !crtEnabled.value
  if (typeof window !== 'undefined') {
    localStorage.setItem('jeffri_os_crt', String(crtEnabled.value))
  }
}

const handleToggleSound = () => {
  toggleSound()
}

const rebootOS = () => {
  playClick()
  openMenu.value = null
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem('jeffri_os_booted')
  }
  isBooting.value = true
  emit('reboot')
}

const toggleFullscreen = () => {
  playClick()
  openMenu.value = null
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().catch(() => {})
  } else {
    document.exitFullscreen().catch(() => {})
  }
}

// Close menus when clicking outside
const onWindowClick = (e: MouseEvent) => {
  const target = e.target as HTMLElement
  if (!target.closest('header')) {
    openMenu.value = null
  }
}

// Update clock every second
let clockInterval: any = null
const updateTime = () => {
  const now = new Date()
  currentTime.value = now.toTimeString().split(' ')[0]
}

onMounted(() => {
  updateTime()
  clockInterval = setInterval(updateTime, 1000)
  window.addEventListener('click', onWindowClick)
})

onUnmounted(() => {
  if (clockInterval) clearInterval(clockInterval)
  window.removeEventListener('click', onWindowClick)
})
</script>

