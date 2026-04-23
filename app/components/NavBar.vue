<template>
  <nav
    ref="navRef"
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
    :class="scrolled ? 'glass py-3' : 'py-5'"
  >
    <div class="max-w-7xl mx-auto px-6 flex items-center justify-between">
      <!-- Logo -->
      <a
        href="#hero"
        class="magnetic-wrap group flex items-center gap-3"
        @mouseenter="onMagnetic"
        @mouseleave="offMagnetic"
        @mousemove="moveMagnetic"
      >
        <div
          class="w-8 h-8 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300"
        >
          <span class="text-accent font-mono font-bold text-sm">JA</span>
        </div>
        <span
          class="text-silver-bright font-medium text-sm tracking-wide hidden sm:block"
        >
          jeffri<span class="text-accent">.</span>dev
        </span>
      </a>

      <!-- Navigation Links -->
      <div class="hidden md:flex items-center gap-8">
        <a
          v-for="link in navLinks"
          :key="link.id"
          :href="`#${link.id}`"
          class="magnetic-wrap text-silver-muted hover:text-silver-bright text-sm font-medium tracking-wide transition-colors duration-300 relative group"
          @mouseenter="onMagnetic"
          @mouseleave="offMagnetic"
          @mousemove="moveMagnetic"
        >
          {{ link.label }}
          <span
            class="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"
          />
        </a>
      </div>

      <!-- CTA -->
      <a
        href="#contact"
        class="magnetic-wrap px-5 py-2 text-sm font-medium text-void bg-accent rounded-md hover:bg-accent-glow transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,220,160,0.3)]"
        @mouseenter="onMagnetic"
        @mouseleave="offMagnetic"
        @mousemove="moveMagnetic"
      >
        Let's Talk
      </a>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { gsap } from "gsap";

const navRef = ref<HTMLElement | null>(null);
const scrolled = ref(false);

const navLinks = [
  { id: "works", label: "Works" },
  { id: "experience", label: "Experience" },
  { id: "tech", label: "Stack" },
];

// Magnetic hover effect
function onMagnetic(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement;
  gsap.to(el, { scale: 1.05, duration: 0.3, ease: "power2.out" });
}

function offMagnetic(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement;
  gsap.to(el, {
    scale: 1,
    x: 0,
    y: 0,
    duration: 0.5,
    ease: "elastic.out(1, 0.5)",
  });
}

function moveMagnetic(e: MouseEvent) {
  const el = e.currentTarget as HTMLElement;
  const rect = el.getBoundingClientRect();
  const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
  const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
  gsap.to(el, { x, y, duration: 0.3, ease: "power2.out" });
}

onMounted(() => {
  const onScroll = () => {
    scrolled.value = window.scrollY > 50;
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onUnmounted(() => window.removeEventListener("scroll", onScroll));
});
</script>
