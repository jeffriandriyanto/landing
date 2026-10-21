<template>
  <footer class="mt-16 border-t border-gh-border bg-gh-subtle py-8 text-xs text-gh-muted font-sans select-none transition-colors duration-150">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
      <!-- Left: Logo & Copyright -->
      <div class="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" class="w-5 h-5 object-contain" />
        <span>© 2026 Jeffri Andriyanto · Salatiga, Indonesia.</span>
      </div>

      <!-- Right: Links -->
      <div class="flex items-center gap-4 text-xs">
        <a
          href="https://www.linkedin.com/in/jeffriandriyanto/"
          target="_blank"
          rel="noopener"
          class="hover:text-gh-blue hover:underline"
          @click="playClick"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/jeffriandriyanto"
          target="_blank"
          rel="noopener"
          class="hover:text-gh-blue hover:underline"
          @click="playClick"
        >
          GitHub
        </a>
        <a
          href="mailto:jeffriandriyanto.fe@gmail.com"
          class="hover:text-gh-blue hover:underline"
          @click="playClick"
        >
          Contact
        </a>
        <button
          type="button"
          class="hover:text-gh-blue hover:underline"
          @click="scrollToTop"
        >
          Back to Top ↑
        </button>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
const { playClick } = useRetroAudio()

const scrollToTop = () => {
  playClick()
  if (typeof window !== 'undefined') {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
}
</script>
