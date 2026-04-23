<template>
  <section id="works" class="relative py-32 px-6">
    <div class="max-w-7xl mx-auto">
      <div ref="headerRef" class="reveal mb-20">
        <span class="text-xs font-mono text-accent tracking-widest uppercase"
          >Portfolio</span
        >
        <h2
          class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 tracking-tight"
        >
          Selected Works
        </h2>
        <p class="text-silver-muted mt-4 max-w-lg text-lg">
          High-stakes projects built with precision engineering and scalable
          architecture.
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div
          v-for="(project, i) in projects"
          :key="project.id"
          ref="cardRefs"
          class="reveal group relative rounded-xl overflow-hidden cursor-pointer border border-void-300 hover:border-accent/30 transition-all duration-500"
          :class="i === 0 ? 'md:col-span-2 md:row-span-1' : ''"
          @click="openModal(project)"
          @mouseenter="onCardEnter($event)"
          @mouseleave="onCardLeave($event)"
        >
          <div
            class="absolute inset-0 bg-gradient-to-br opacity-60 group-hover:opacity-80 transition-opacity duration-500"
            :style="{ background: project.gradient }"
          />
          <div
            class="relative p-8 sm:p-10 flex flex-col justify-end min-h-[280px]"
            :class="i === 0 ? 'md:min-h-[360px]' : ''"
          >
            <div class="flex flex-wrap gap-2 mb-4">
              <span
                v-for="tag in project.tags.slice(0, 3)"
                :key="tag"
                class="stack-tag"
                >{{ tag }}</span
              >
            </div>
            <h3
              class="text-2xl sm:text-3xl font-bold text-white group-hover:text-accent-glow transition-colors duration-300"
            >
              {{ project.title }}
            </h3>
            <p class="text-silver-muted mt-2 text-sm leading-relaxed max-w-lg">
              {{ project.summary }}
            </p>
            <div
              class="mt-6 flex items-center gap-2 text-accent text-sm font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300"
            >
              <span>View Details</span>
              <svg
                class="w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
          <div
            class="absolute top-4 right-4 w-8 h-8 rounded-full glass flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <svg
              class="w-4 h-4 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 4h7V2H2v9h2V4zm13 0h-7V2h9v9h-2V4zM4 20h7v2H2v-9h2v7zm13 0h-7v2h9v-9h-2v7z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
    <WorkModal
      v-if="activeProject"
      :project="activeProject"
      @close="activeProject = null"
    />
  </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export interface Project {
  id: string;
  title: string;
  summary: string;
  description: string;
  tags: string[];
  role: string;
  year: string;
  gradient: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    id: "antam",
    title: "ANTAM Gold",
    summary:
      "Physical gold order system with enterprise-grade refresh token security and real-time pricing.",
    description:
      "Built the end-to-end physical gold ordering platform for PT ANTAM Tbk, one of Indonesia's largest state-owned mining companies. Implemented refresh token rotation with secure HTTP-only cookies, real-time gold price feeds, and a multi-step order pipeline with payment gateway integration.",
    tags: ["Nuxt.js", "REST API", "OAuth 2.0", "JWT", "Payment Gateway", "SSR"],
    role: "Frontend Engineer",
    year: "2023",
    gradient: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    highlights: [
      "Refresh token rotation with zero-downtime auth",
      "Real-time gold pricing with WebSocket feeds",
      "Multi-step order pipeline with idempotency keys",
      "PCI-DSS compliant payment integration",
    ],
  },
  {
    id: "siakad",
    title: "Si Akad / SISTesi",
    summary:
      "Large-scale school management system: LMS, E-testing, data profiling for 50+ institutions.",
    description:
      "Architected a comprehensive School Management Information System handling LMS, E-testing with proctoring, student/teacher profiling, and academic reporting across 50+ educational institutions. Managed complex data relationships and role-based access for admins, teachers, students, and parents.",
    tags: ["Vue.js", "Nuxt.js", "Laravel", "MySQL", "REST API", "RBAC"],
    role: "Lead Frontend Engineer",
    year: "2021–2023",
    gradient: "linear-gradient(135deg, #0d1117 0%, #161b22 50%, #1a2332 100%)",
    highlights: [
      "Multi-tenant architecture serving 50+ schools",
      "E-testing engine with anti-cheat proctoring",
      "Complex RBAC with 6+ user roles",
      "Bulk data import/export for academic records",
    ],
  },
  {
    id: "cariparkir",
    title: "CariParkir & Redkendi",
    summary:
      "Order Management Systems with Google Maps integration and real-time fleet tracking.",
    description:
      "Built two interconnected OMS platforms: CariParkir for parking space discovery/booking and Redkendi for fleet management. Both featured deep Google Maps integration with custom overlays, geofencing, real-time location tracking, and comprehensive order lifecycle management.",
    tags: [
      "React.js",
      "Google Maps API",
      "Node.js",
      "WebSocket",
      "OMS",
      "Geofencing",
    ],
    role: "Senior Frontend Developer",
    year: "2020–2022",
    gradient: "linear-gradient(135deg, #0a0f0d 0%, #1a2f2a 50%, #0d3320 100%)",
    highlights: [
      "Custom Google Maps overlays with geofencing",
      "Real-time fleet tracking via WebSocket",
      "Multi-stage order lifecycle management",
      "Optimized map rendering for 1000+ markers",
    ],
  },
  {
    id: "ekta",
    title: "E-KTA Polri",
    summary:
      "Native WebSocket printing system and CMS for Indonesia National Police digital ID cards.",
    description:
      "Developed the digital ID card (KTA) management system for the Indonesian National Police. The key technical challenge was implementing native WebSocket-based printing that communicated directly with card printers from the browser, eliminating the need for desktop applications.",
    tags: [
      "Vue.js",
      "WebSocket",
      "Native Print",
      "CMS",
      "Government",
      "Security",
    ],
    role: "Frontend Engineer",
    year: "2019–2020",
    gradient: "linear-gradient(135deg, #0a0a1a 0%, #1a1a3e 50%, #0f0f4e 100%)",
    highlights: [
      "Browser-to-printer WebSocket bridge",
      "Zero-install printing via native WebSocket",
      "CMS with hierarchical organizational data",
      "Government-grade security compliance",
    ],
  },
  {
    id: "rw11",
    title: "RW 11 Bukit Wahid",
    summary:
      "Community dashboard with financial reporting, resident management, and digital infrastructure.",
    description:
      "Created a modern community management dashboard for RW 11 Bukit Wahid residential complex. Features include financial reporting with automated calculations, resident data management, announcement systems, and digital infrastructure tools that replaced manual paper-based processes.",
    tags: ["Nuxt.js", "Firebase", "Chart.js", "PWA", "Dashboard", "Reporting"],
    role: "Frontend Engineer",
    year: "2026",
    gradient: "linear-gradient(135deg, #0d0d0d 0%, #1a1a1a 50%, #2a2a2a 100%)",
    highlights: [
      "Real-time financial reporting dashboard",
      "Automated monthly financial calculations"
    ],
  },
];

const activeProject = ref<Project | null>(null);
const headerRef = ref<HTMLElement | null>(null);
const cardRefs = ref<HTMLElement[]>([]);

function openModal(p: Project) {
  activeProject.value = p;
}

function onCardEnter(e: MouseEvent) {
  gsap.to(e.currentTarget, { scale: 1.02, duration: 0.4, ease: "power2.out" });
}
function onCardLeave(e: MouseEvent) {
  gsap.to(e.currentTarget, {
    scale: 1,
    duration: 0.5,
    ease: "elastic.out(1,0.5)",
  });
}

onMounted(() => {
  gsap.registerPlugin(ScrollTrigger);
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
  cardRefs.value.forEach((card, i) => {
    gsap.fromTo(
      card,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power3.out",
        scrollTrigger: { trigger: card, start: "top 85%" },
      },
    );
  });
});
</script>
