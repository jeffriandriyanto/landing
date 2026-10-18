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
      title: "Jeffri Andriyanto — Software Engineer & Product Builder",
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      meta: [
        {
          name: "description",
          content:
            "JEFFRI-OS. Software engineer with deep frontend roots, building fullstack apps and products with modern AI and vibe coding workflows. Interactive retro OS portfolio.",
        },
        { name: "theme-color", content: "#000000" },
        {
          property: "og:title",
          content: "Jeffri Andriyanto — Software Engineer & Product Builder",
        },
        {
          property: "og:description",
          content:
            "JEFFRI-OS: Interactive retro desktop portfolio of Jeffri Andriyanto.",
        },
        { property: "og:type", content: "website" },
      ],
      link: [
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
