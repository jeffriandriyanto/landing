<template>
  <section
    id="hero"
    ref="heroRef"
    class="relative min-h-screen flex items-center justify-center overflow-hidden bg-void"
  >
    <canvas
      ref="canvasRef"
      class="absolute inset-0 w-full h-full pointer-events-none"
      style="z-index: 0"
    />

    <div
      class="absolute inset-0 opacity-[0.03] pointer-events-none"
      style="
        background-image:
          linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);
        background-size: 80px 80px;
        z-index: 1;
      "
    />

    <div class="relative z-10 max-w-6xl mx-auto px-6 text-center">
      <div
        ref="tagRef"
        class="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8 border border-white/10"
      >
        <span class="w-2 h-2 rounded-full bg-accent animate-pulse" />
        <span
          class="text-xs font-mono text-silver-muted tracking-[0.2em] uppercase"
        >
          Available for Projects
        </span>
      </div>

      <h1 ref="h1Ref" class="flex flex-col gap-2">
        <span
          class="block text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tighter"
        >
          Senior Frontend
        </span>
        <span
          class="block text-5xl sm:text-7xl lg:text-8xl font-bold leading-none tracking-tighter"
        >
          <span class="text-gradient">Architect</span>
          <span class="text-white"> &</span>
        </span>
        <span
          class="block text-5xl sm:text-7xl lg:text-8xl font-bold text-white leading-none tracking-tighter"
        >
          Technical Web Manager
        </span>
      </h1>

      <p
        ref="subRef"
        class="mt-10 text-lg sm:text-xl text-silver-muted max-w-2xl mx-auto leading-relaxed font-light"
      >
        8+ years of transforming complex logic into elegant, high-performance
        digital experiences.
        <span class="text-silver-bright font-medium block mt-2">
          Architecture is my measure of progress.
        </span>
      </p>

      <div
        ref="ctaRef"
        class="flex flex-wrap items-center justify-center gap-4 mt-12"
      >
        <a
          href="#works"
          class="group px-8 py-4 bg-accent text-void font-bold rounded-lg hover:bg-accent-glow transition-all duration-300 hover:shadow-[0_0_40px_rgba(0,220,160,0.3)] flex items-center gap-2"
        >
          View Selected Works
          <svg
            class="w-4 h-4 group-hover:translate-x-1 transition-transform"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2.5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
        <a
          href="#experience"
          class="px-8 py-4 text-silver-bright font-semibold rounded-lg border border-white/10 hover:bg-white/5 transition-all duration-300"
        >
          About Me
        </a>
      </div>

      <div
        ref="scrollRef"
        class="absolute -bottom-24 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span
          class="text-[10px] font-mono text-silver-dim tracking-[0.3em] uppercase"
          >Scroll</span
        >
        <div
          class="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent opacity-50"
        />
      </div>
    </div>

    <div
      class="absolute top-12 left-12 w-24 h-24 border-t border-l border-accent/20"
    />
    <div
      class="absolute bottom-12 right-12 w-24 h-24 border-b border-r border-accent/20"
    />
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Refs
const heroRef = ref<HTMLElement | null>(null);
const canvasRef = ref<HTMLCanvasElement | null>(null);
const tagRef = ref<HTMLElement | null>(null);
const h1Ref = ref<HTMLElement | null>(null);
const subRef = ref<HTMLElement | null>(null);
const ctaRef = ref<HTMLElement | null>(null);
const scrollRef = ref<HTMLElement | null>(null);

// Types & State
interface Point {
  x: number;
  y: number;
  bx: number;
  by: number;
  vx: number;
  vy: number;
  r: number;
  a: number;
}
let points: Point[] = [];
let mouse = { x: -1000, y: -1000 };
let rafId: number;

// Canvas Logic
function initCanvas() {
  const canvas = canvasRef.value;
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const dpr = Math.min(window.devicePixelRatio, 2);
  let w: number, h: number;

  const resize = () => {
    w = canvas.clientWidth;
    h = canvas.clientHeight;
    canvas.width = w * dpr;
    canvas.height = h * dpr;
    ctx.scale(dpr, dpr);

    const count = Math.min(Math.floor((w * h) / 18000), 100);
    points = Array.from({ length: count }, () => {
      const x = Math.random() * w,
        y = Math.random() * h;
      return {
        x,
        y,
        bx: x,
        by: y,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 1.2 + 0.5,
        a: Math.random() * 0.4 + 0.1,
      };
    });
  };

  const animate = () => {
    ctx.clearRect(0, 0, w, h);
    for (let i = 0; i < points.length; i++) {
      const p: any = points[i];
      const dx = mouse.x - p.x,
        dy = mouse.y - p.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist < 200) {
        const force = (200 - dist) / 200;
        p.vx += (dx / dist) * force * 0.02;
        p.vy += (dy / dist) * force * 0.02;
      }

      p.vx += (p.bx - p.x) * 0.005;
      p.vy += (p.by - p.y) * 0.005;
      p.vx *= 0.95;
      p.vy *= 0.95;
      p.x += p.vx;
      p.y += p.vy;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(0, 220, 160, ${p.a})`;
      ctx.fill();

      for (let j = i + 1; j < points.length; j++) {
        const q: any = points[j];
        const distSq = Math.pow(p.x - q.x, 2) + Math.pow(p.y - q.y, 2);
        if (distSq < 150 * 150) {
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(q.x, q.y);
          ctx.strokeStyle = `rgba(0, 220, 160, ${(1 - Math.sqrt(distSq) / 150) * 0.12})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    rafId = requestAnimationFrame(animate);
  };

  const handleMouseMove = (e: MouseEvent) => {
    const rect = canvas.getBoundingClientRect();
    mouse.x = e.clientX - rect.left;
    mouse.y = e.clientY - rect.top;
  };

  window.addEventListener("resize", resize);
  window.addEventListener("mousemove", handleMouseMove);

  resize();
  animate();

  return () => {
    window.removeEventListener("resize", resize);
    window.removeEventListener("mousemove", handleMouseMove);
    cancelAnimationFrame(rafId);
  };
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  const cleanupCanvas = initCanvas();

  // Entry Animation
  const tl = gsap.timeline({ defaults: { ease: "expo.out" } });

  tl.fromTo(
    tagRef.value,
    { opacity: 0, y: 20 },
    { opacity: 1, y: 0, duration: 1 },
    0.2,
  )
    .fromTo(
      h1Ref.value,
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1.2 },
      0.4,
    )
    .fromTo(
      subRef.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      0.7,
    )
    .fromTo(
      ctaRef.value,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 1 },
      0.9,
    )
    .fromTo(
      scrollRef.value,
      { opacity: 0 },
      { opacity: 1, duration: 1.5 },
      1.5,
    );

  // Scroll Behavior (Parallax subtle)
  // Perbaikan: Kita hanya memberikan efek yPercent sedikit agar ada kedalaman,
  // tapi tidak mengubah opacity secara drastis agar tidak "menghilang".
  gsap.to(h1Ref.value, {
    yPercent: -20,
    scrollTrigger: {
      trigger: heroRef.value,
      start: "top top",
      end: "bottom top",
      scrub: true,
    },
  });

  onUnmounted(() => {
    if (cleanupCanvas) cleanupCanvas();
  });
});
</script>

<style scoped>
.glass {
  background: rgba(255, 255, 255, 0.03);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
}

.text-gradient {
  background: linear-gradient(135deg, #00dca0 0%, #00f2ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

.bg-void {
  background-color: #0a0a0c;
}

.text-silver-muted {
  color: #888891;
}
.text-silver-bright {
  color: #e4e4e7;
}
.text-silver-dim {
  color: #52525b;
}
.bg-accent {
  background-color: #00dca0;
}
.bg-accent-glow {
  background-color: #00f0ad;
}
</style>
