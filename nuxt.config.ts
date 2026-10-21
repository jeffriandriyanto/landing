// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-05-15",
  future: { compatibilityVersion: 4 },
  devtools: { enabled: false },
  nitro: {
    preset: 'netlify' // Memberitahu Nitro untuk membangun output sesuai standar Netlify
  },
  runtimeConfig: {
    apiSecret: "",
  },

  modules: ["@nuxtjs/tailwindcss"],
  css: ["~/assets/scss/main.scss"],

  tailwindcss: {
    cssPath: false,
  },

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      title: "Jeffri Andriyanto — Software Engineer",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content:
            "Portfolio of Jeffri Andriyanto. Software Engineer with 8+ years of production experience in Vue, Nuxt, React, Next.js, TypeScript, and Fullstack Web Systems. Based in Salatiga, Indonesia.",
        },
        { name: "theme-color", content: "#ffffff" },
        {
          property: "og:title",
          content: "Jeffri Andriyanto — Software Engineer",
        },
        {
          property: "og:description",
          content:
            "GitHub-inspired developer profile of Jeffri Andriyanto. Software Engineer with 8+ years of production experience.",
        },
        { property: "og:type", content: "website" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/png",
          href: "/logo.png",
        },
        {
          rel: "preconnect",
          href: "https://fonts.googleapis.com",
        },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap",
        },
      ],
    },
    pageTransition: { name: "page", mode: "out-in" },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: "modern-compiler",
        },
      },
    },
  },
});
