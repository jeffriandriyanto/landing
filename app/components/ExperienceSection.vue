<template>
  <section id="experience" class="relative py-32 px-6">
    <div class="max-w-7xl mx-auto">
      <div ref="headerRef" class="reveal mb-20">
        <span class="text-xs font-mono text-accent tracking-widest uppercase"
          >Journey</span
        >
        <h2
          class="text-4xl sm:text-5xl md:text-6xl font-bold text-white mt-3 tracking-tight"
        >
          The Technical Engine
        </h2>
        <p class="text-silver-muted mt-4 max-w-lg text-lg">
          8 years of evolution from Frontend Developer to Technical Web Manager.
        </p>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <div
          class="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-void-300 md:-translate-x-px"
        />
        <div
          v-for="(item, i) in timeline"
          :key="item.year"
          ref="timeRefs"
          class="reveal relative mb-16 last:mb-0"
        >
          <div
            class="flex flex-col md:flex-row items-start gap-8"
            :class="i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'"
          >
            <div
              class="w-full md:w-1/2 pl-12 md:pl-0"
              :class="i % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16'"
            >
              <span class="font-mono text-accent text-sm">{{ item.year }}</span>
              <h3 class="text-xl font-bold text-white mt-1">
                {{ item.title }}
              </h3>
              <p class="text-silver-muted mt-2 text-sm leading-relaxed">
                {{ item.company }}
              </p>
              <p class="text-silver mt-3 text-sm leading-relaxed">
                {{ item.desc }}
              </p>
              <div
                class="flex flex-wrap gap-2 mt-4"
                :class="i % 2 === 0 ? 'md:justify-end' : ''"
              >
                <span v-for="t in item.tags" :key="t" class="stack-tag">{{
                  t
                }}</span>
              </div>
            </div>
            <div
              class="absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-accent border-4 border-void -translate-x-1.5 md:-translate-x-1.5 mt-1 glow-accent"
            />
            <div class="hidden md:block w-1/2" />
          </div>
        </div>
      </div>

      <!-- Creetech Philosophy -->
      <div
        ref="philRef"
        class="reveal mt-24 p-8 sm:p-12 rounded-2xl glass border border-void-300"
      >
        <div class="flex items-start gap-4 mb-6">
          <div
            class="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0"
          >
            <svg
              class="w-6 h-6 text-accent"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="1.5"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z"
              />
            </svg>
          </div>
          <div>
            <h3 class="text-xl font-bold text-white">My Philosophy</h3>
            <p class="text-silver-muted text-sm mt-1">
              The principles that drive every line of code
            </p>
          </div>
        </div>
        <div class="grid sm:grid-cols-2 gap-6">
          <div
            v-for="p in principles"
            :key="p.title"
            class="p-5 rounded-xl bg-void/50 border border-void-300"
          >
            <h4 class="text-sm font-semibold text-accent mb-2">
              {{ p.title }}
            </h4>
            <p class="text-silver-muted text-sm leading-relaxed">
              {{ p.desc }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const headerRef = ref<HTMLElement | null>(null);
const timeRefs = ref<HTMLElement[]>([]);
const philRef = ref<HTMLElement | null>(null);

const timeline = [
  {
    year: "2019–Present",
    title: "Senior Web Developer & Technical Web Manager",
    company: "PT DUIT Investech",
    desc: "Leading the architectural design and frontend execution of enterprise-scale systems, including PT Antam's Brankas e-commerce and KTA Polri. Managed mission-critical platforms for the Indonesian Military Academies (AAU & AAL), SISTesi school management, and GLZoo ticketing. Remained hands-on in implementing secure encryption for sensitive resident data (NIK/KK), PWA features via Service Workers, and complex performance reporting for KONI DKI Jakarta.",
    tags: ["Vue.js", "Laravel", "Security Architecture", "PWA"],
  },
  {
    year: "2020–Present",
    title: "Senior Web Architect (Freelance)",
    company: "CREETECH",
    desc: "Designing and scaling web-based solutions, including a comprehensive Residential Management System (RT/RW) and industrial IoT monitoring dashboards. high-traffic event platforms with real-time QR ticketing.",
    tags: ["IoT Dashboards", "E-commerce", "Web Performance", "Architecture"],
  },
  {
    year: "2021–2023",
    title: "Frontend Developer (Part-time)",
    company: "Poteq.com",
    desc: "Delivered rapid-market digital solutions for Jakarta-based clients. Specialized in streamlining workflows using Bubble.io and custom JavaScript to bridge the gap between low-code speed and full-code flexibility.",
    tags: ["Bubble.io", "JavaScript", "No-code/Low-code"],
  },
  {
    year: "2018–2019",
    title: "Frontend Web Developer",
    company: "Caption Hospitality",
    desc: "Architected hospitality-focused CMS solutions. Focused on rebuilding core management systems, optimizing data manipulation on the frontend, and enhancing UI responsiveness for better user retention.",
    tags: ["React.js", "SASS", "CMS Optimization"],
  },
  {
    year: "2017–2018",
    title: "Frontend Web Developer",
    company: "PT Nostra Solusi Teknologi",
    desc: "Built the foundational infrastructure for 'Cari Parkir' and 'Redkendi'. Implemented complex map-based logic using Google Maps API and real-time event handling with Firebase Push Notifications.",
    tags: ["React.js", "Google Maps", "Firebase", "UI/UX"],
  },
];

const principles = [
  {
    title: "Zero-Ego Engineering",
    desc: "I believe the best solutions stem from objective analysis. I treat every code review as an optimization opportunity and every piece of feedback as vital data for collective progress.",
  },
  {
    title: "Architectural Integrity",
    desc: "Scalability and maintainability are non-negotiable. I architect robust, well-documented systems designed to endure and remain relevant long after the initial release cycle.",
  },
  {
    title: "Deployment Rigor",
    desc: "Quality is a byproduct of disciplined systems, not chance. I enforce rigorous automated testing and CI/CD pipelines to ensure every line of code is production-ready and battle-tested.",
  },
  {
    title: "Adaptive Mastery",
    desc: "In a fast-evolving landscape, stagnation is regression. I am committed to continuous experimentation and technical evolution to ensure my solutions always leverage industry best practices.",
  },
];

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
  timeRefs.value.forEach((el, i) => {
    gsap.fromTo(
      el,
      { opacity: 0, x: i % 2 === 0 ? -50 : 50 },
      {
        opacity: 1,
        x: 0,
        duration: 0.8,
        ease: "power3.out",
        scrollTrigger: { trigger: el, start: "top 85%" },
      },
    );
  });
  gsap.fromTo(
    philRef.value,
    { opacity: 0, y: 40 },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power3.out",
      scrollTrigger: { trigger: philRef.value, start: "top 85%" },
    },
  );
});
</script>
