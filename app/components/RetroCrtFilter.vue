<template>
  <div
    v-if="crtEnabled"
    class="crt-overlay pointer-events-none fixed inset-0 z-50 overflow-hidden"
    aria-hidden="true"
  >
    <div class="crt-flicker absolute inset-0 w-full h-full" />
  </div>
</template>

<script setup lang="ts">
const crtEnabled = useState<boolean>('retro-crt-enabled', () => true)

onMounted(() => {
  const saved = localStorage.getItem('jeffri_os_crt')
  if (saved !== null) {
    crtEnabled.value = saved === 'true'
  }
})
</script>

