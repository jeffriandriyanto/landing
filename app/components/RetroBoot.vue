<template>
  <Transition name="boot-fade">
    <div
      v-if="isBooting"
      class="fixed inset-0 z-[100] flex flex-col justify-between bg-black text-white p-6 sm:p-12 font-mono select-none"
      role="dialog"
      aria-label="System Boot Sequence"
    >
      <!-- Header -->
      <div class="flex items-center justify-between border-b border-white/20 pb-4 text-xs sm:text-sm">
        <div class="flex items-center gap-3">
          <span class="px-2 py-0.5 bg-white text-black font-bold">JEFFRI-OS</span>
          <span class="text-neutral-400">version 3.0 — salatiga, id</span>
        </div>
        <button
          type="button"
          class="hover:text-white text-neutral-400 border border-white/20 hover:border-white px-2 py-1 text-xs transition-colors"
          @click="toggleSound"
        >
          [S] sound : {{ soundEnabled ? 'on' : 'off' }}
        </button>
      </div>

      <!-- Boot Logs -->
      <div class="my-auto max-w-2xl w-full mx-auto space-y-2 text-xs sm:text-sm">
        <div
          v-for="(log, i) in displayedLogs"
          :key="i"
          class="flex items-center justify-between font-mono tracking-tight"
        >
          <span class="text-neutral-300">{{ log.text }}</span>
          <span :class="log.statusColor">{{ log.status }}</span>
        </div>

        <!-- Progress Bar -->
        <div class="pt-6">
          <div class="h-2 w-full border border-white/30 bg-neutral-900 p-0.5">
            <div
              class="h-full bg-white transition-all duration-150 ease-out"
              :style="{ width: `${progress}%` }"
            />
          </div>
          <div class="flex justify-between text-[11px] text-neutral-500 mt-2">
            <span>mounting volumes...</span>
            <span>{{ Math.min(progress, 100) }}%</span>
          </div>
        </div>
      </div>

      <!-- Footer Prompt -->
      <div class="border-t border-white/20 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
        <div class="text-neutral-500">
          <span>AI-AUGMENTED SOFTWARE ENGINE · DUAL-CORE FE & FULLSTACK</span>
        </div>
        <button
          v-if="readyToEnter"
          type="button"
          class="w-full sm:w-auto px-6 py-2.5 bg-white text-black font-bold border border-white hover:bg-black hover:text-white transition-colors animate-pulse"
          @click="finishBoot"
        >
          ▮ [ ENTER DESKTOP ] ▮
        </button>
        <button
          v-else
          type="button"
          class="text-neutral-500 hover:text-white underline"
          @click="skipBoot"
        >
          [ skip boot sequence ]
        </button>
      </div>
    </div>
  </Transition>
</template>

<script setup lang="ts">
const emit = defineEmits<{
  (e: 'boot-complete'): void
}>()

const isBooting = useState<boolean>('retro-is-booting', () => true)
const { soundEnabled, toggleSound, playBeep, playBoot, playClick } = useRetroAudio()

const logs = [
  { text: '[ OK ] memory integrity test (8+ yrs engineering)', status: 'PASSED', statusColor: 'text-neutral-400' },
  { text: '[ OK ] fe_architecture.sys (vue, nuxt, typescript)', status: 'MOUNTED', statusColor: 'text-neutral-400' },
  { text: '[ OK ] vibe_coding.engine (ai-assisted product ops)', status: 'ONLINE', statusColor: 'text-white font-bold' },
  { text: '[ OK ] fullstack_tools.drv (nitro, postgres, apis)', status: 'READY', statusColor: 'text-neutral-400' },
  { text: '[ OK ] crt_display.drv (scanlines, phosphor)', status: 'ACTIVE', statusColor: 'text-neutral-400' },
  { text: '[ !! ] coffee_level.sys ..........................', status: 'LOW (REFILL)', statusColor: 'text-neutral-400' },
  { text: '[ OK ] desktop workspaces (projets, parcours, bio)', status: 'READY', statusColor: 'text-white font-bold' },
]

const displayedLogs = ref<typeof logs>([])
const progress = ref(0)
const readyToEnter = ref(false)

let intervalId: any = null

const startBoot = () => {
  let index = 0
  displayedLogs.value = []
  progress.value = 0
  readyToEnter.value = false

  intervalId = setInterval(() => {
    if (index < logs.length) {
      displayedLogs.value.push(logs[index])
      progress.value = Math.round(((index + 1) / logs.length) * 100)
      playBeep(400 + index * 80, 0.03)
      index++
    } else {
      clearInterval(intervalId)
      readyToEnter.value = true
      playBoot()
    }
  }, 220)
}

const finishBoot = () => {
  playClick()
  isBooting.value = false
  emit('boot-complete')
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('jeffri_os_booted', 'true')
  }
}

const skipBoot = () => {
  clearInterval(intervalId)
  finishBoot()
}

// Listen for Enter or Space key to enter desktop
const onKeyDown = (e: KeyboardEvent) => {
  if (!isBooting.value) return
  if (e.key === 'Enter' || e.key === ' ') {
    e.preventDefault()
    finishBoot()
  }
}

onMounted(() => {
  if (sessionStorage.getItem('jeffri_os_booted') === 'true') {
    isBooting.value = false
    emit('boot-complete')
    return
  }
  startBoot()
  window.addEventListener('keydown', onKeyDown)
})

onUnmounted(() => {
  if (intervalId) clearInterval(intervalId)
  window.removeEventListener('keydown', onKeyDown)
})
</script>

<style scoped>
.boot-fade-enter-active,
.boot-fade-leave-active {
  transition: opacity 0.4s ease;
}
.boot-fade-enter-from,
.boot-fade-leave-to {
  opacity: 0;
}
</style>

