<template>
  <section id="tech" class="relative py-32 px-6 overflow-hidden">
    <div class="max-w-7xl mx-auto">
      <div ref="headerRef" class="reveal mb-20 text-center">
        <span class="text-xs font-mono text-accent tracking-widest uppercase"
          >Expertise</span
        >
        <h2
          class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 tracking-tight"
        >
          Tech Stack Galaxy
        </h2>
        <p class="text-silver-muted mt-4 max-w-lg mx-auto text-lg">
          An interactive map of technologies mastered over 8+ years of
          engineering.
        </p>
      </div>

      <!-- Galaxy Canvas -->
      <div
        ref="galaxyWrap"
        class="relative w-full aspect-square max-w-2xl mx-auto"
      >
        <canvas ref="galaxyCanvas" class="w-full h-full" />
        <!-- Hover tooltip -->
        <div
          v-if="hoveredTech"
          class="absolute pointer-events-none glass-strong px-4 py-3 rounded-lg z-20 transition-all duration-150"
          :style="{
            left: tooltipX + 'px',
            top: tooltipY + 'px',
            transform: 'translate(-50%,-120%)',
          }"
        >
          <p class="text-white font-semibold text-sm">{{ hoveredTech.name }}</p>
          <p class="text-silver-muted text-xs mt-0.5">
            {{ hoveredTech.category }}
          </p>
          <div class="flex items-center gap-1.5 mt-1.5">
            <div
              class="h-1 rounded-full bg-accent"
              :style="{ width: hoveredTech.level * 20 + 'px' }"
            />
            <span class="text-xs text-accent font-mono"
              >{{ hoveredTech.level }}/5</span
            >
          </div>
        </div>
      </div>

      <!-- Flat Grid Fallback / Legend -->
      <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mt-16">
        <div
          v-for="cat in categories"
          :key="cat.name"
          ref="catRefs"
          class="reveal p-5 rounded-xl glass border border-void-300 hover:border-accent/20 transition-all duration-300 group"
        >
          <div class="flex items-center gap-2 mb-3">
            <div
              class="w-2 h-2 rounded-full"
              :style="{ background: cat.color }"
            />
            <span
              class="text-xs font-mono text-silver-dim tracking-wider uppercase"
              >{{ cat.name }}</span
            >
          </div>
          <div class="space-y-2">
            <div
              v-for="t in cat.techs"
              :key="t.name"
              class="flex items-center justify-between"
            >
              <span class="text-sm text-silver-bright">{{ t.name }}</span>
              <div class="flex gap-0.5">
                <div
                  v-for="n in 5"
                  :key="n"
                  class="w-1.5 h-1.5 rounded-full"
                  :class="n <= t.level ? 'bg-accent' : 'bg-void-400'"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Tech {
  name: string;
  category: string;
  level: number;
  angle: number;
  orbit: number;
  color: string;
}

const headerRef = ref<HTMLElement | null>(null);
const galaxyWrap = ref<HTMLElement | null>(null);
const galaxyCanvas = ref<HTMLCanvasElement | null>(null);
const catRefs = ref<HTMLElement[]>([]);
const hoveredTech = ref<Tech | null>(null);
const tooltipX = ref(0);
const tooltipY = ref(0);

const categories = [
  {
    name: "Frontend",
    color: "#00dca0",
    techs: [
      { name: "Vue / Nuxt", level: 5 },
      { name: "React / Next", level: 4 },
      { name: "TypeScript", level: 5 },
      { name: "Tailwind CSS", level: 5 },
    ],
  },
  {
    name: "Design & Creative",
    color: "#9b5de5", // Warna ungu untuk kategori desain
    techs: [
      { name: "Figma", level: 5 },
      { name: "Adobe Illustrator", level: 4 },
      { name: "Adobe Photoshop", level: 4 },
    ],
  },
  {
    name: "Mobile",
    color: "#00b4d8",
    techs: [
      { name: "Flutter", level: 3 },
      { name: "Ionic", level: 3 },
      { name: "PWA", level: 4 },
    ],
  },
  {
    name: "Backend",
    color: "#f4a261",
    techs: [
      { name: "Laravel", level: 4 },
      { name: "Node.js", level: 4 },
    ],
  },
  {
    name: "Infrastructure",
    color: "#e76f51",
    techs: [
      { name: "Firebase", level: 4 },
      { name: "CI/CD", level: 4 },
      { name: "Git", level: 5 },
    ],
  },
];

const allTechs: Tech[] = [];
let totalTechs = 0;
categories.forEach((cat) => (totalTechs += cat.techs.length));

let ai = 0;
categories.forEach((cat) => {
  cat.techs.forEach((t) => {
    allTechs.push({
      name: t.name,
      category: cat.name,
      level: t.level,
      // Menggunakan totalTechs agar jarak antar "planet" tetap proporsional
      angle: (ai / totalTechs) * Math.PI * 2 + Math.random() * 0.2,
      orbit: 0.25 + (t.level / 5) * 0.55 + Math.random() * 0.05,
      color: cat.color,
    });
    ai++;
  });
});

let raf = 0;
function initGalaxy() {
  const c = galaxyCanvas.value;
  if (!c) return;
  const ctx = c.getContext("2d");
  if (!ctx) return;
  const dpr = Math.min(devicePixelRatio, 2);
  let w = 0,
    h = 0,
    cx = 0,
    cy = 0,
    time = 0;

  function resize() {
    w = c!.clientWidth;
    h = c!.clientHeight;
    c!.width = w * dpr;
    c!.height = h * dpr;
    ctx!.scale(dpr, dpr);
    cx = w / 2;
    cy = h / 2;
  }

  function draw() {
    ctx!.clearRect(0, 0, w, h);
    time += 0.002;

    // Draw orbit rings
    for (let r = 0.2; r <= 0.85; r += 0.15) {
      ctx!.beginPath();
      ctx!.arc(cx, cy, r * Math.min(cx, cy), 0, Math.PI * 2);
      ctx!.strokeStyle = "rgba(255,255,255,0.03)";
      ctx!.lineWidth = 1;
      ctx!.stroke();
    }

    // Draw center glow
    const cg = ctx!.createRadialGradient(cx, cy, 0, cx, cy, 30);
    cg.addColorStop(0, "rgba(0,220,160,0.2)");
    cg.addColorStop(1, "rgba(0,220,160,0)");
    ctx!.beginPath();
    ctx!.arc(cx, cy, 30, 0, Math.PI * 2);
    ctx!.fillStyle = cg;
    ctx!.fill();

    // Draw techs
    allTechs.forEach((t) => {
      const a = t.angle + time * (1 / (t.orbit + 0.5));
      const r = t.orbit * Math.min(cx, cy) * 0.9;
      const x = cx + Math.cos(a) * r;
      const y = cy + Math.sin(a) * r;
      const sz = 3 + t.level * 1.5;

      // Glow
      const g = ctx!.createRadialGradient(x, y, 0, x, y, sz * 3);
      g.addColorStop(0, t.color + "40");
      g.addColorStop(1, t.color + "00");
      ctx!.beginPath();
      ctx!.arc(x, y, sz * 3, 0, Math.PI * 2);
      ctx!.fillStyle = g;
      ctx!.fill();

      // Dot
      ctx!.beginPath();
      ctx!.arc(x, y, sz, 0, Math.PI * 2);
      ctx!.fillStyle = t.color;
      ctx!.fill();

      // Label
      ctx!.font = "10px Inter, sans-serif";
      ctx!.fillStyle = "rgba(255,255,255,0.5)";
      ctx!.textAlign = "center";
      ctx!.fillText(t.name, x, y + sz + 14);

      // Store screen pos for hit detection
      (t as any)._x = x;
      (t as any)._y = y;
      (t as any)._sz = sz;
    });

    raf = requestAnimationFrame(draw);
  }

  resize();
  draw();
  window.addEventListener(
    "resize",
    () => {
      ctx!.setTransform(1, 0, 0, 1, 0, 0);
      resize();
    },
    { passive: true },
  );

  // Hit detection
  c!.addEventListener(
    "mousemove",
    (e) => {
      const rect = c!.getBoundingClientRect();
      const ex = e.clientX - rect.left,
        ey = e.clientY - rect.top;
      let found: Tech | null = null;
      allTechs.forEach((t) => {
        const dx = ex - (t as any)._x,
          dy = ey - (t as any)._y;
        if (Math.sqrt(dx * dx + dy * dy) < (t as any)._sz + 10) found = t;
      });
      hoveredTech.value = found;
      if (found) {
        tooltipX.value = (found as any)._x;
        tooltipY.value = (found as any)._y;
      }
    },
    { passive: true },
  );

  c!.addEventListener(
    "mouseleave",
    () => {
      hoveredTech.value = null;
    },
    { passive: true },
  );
  onUnmounted(() => cancelAnimationFrame(raf));
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
  initGalaxy();
  gsap.fromTo(
    headerRef.value,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: { trigger: headerRef.value, start: "top 85%" },
    },
  );
  catRefs.value.forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        delay: i * 0.08,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 90%" },
      },
    );
  });
});
</script>
