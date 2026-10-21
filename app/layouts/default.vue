<template>
  <div class="min-h-screen bg-gh-canvas text-gh-fg font-sans antialiased transition-colors duration-150">
    <slot />
  </div>
</template>

<script setup lang="ts">
const { initTheme } = useGitHubTheme()

onMounted(() => {
  initTheme()
})
</script>
