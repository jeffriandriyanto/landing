import { defineComponent, computed, ref, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderAttr, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from 'vue/server-renderer';
import { u as useState, a as useGitHubTheme } from './useGitHubTheme-C490PMid.mjs';
import { _ as _export_sfc } from './server.mjs';
import { u as useHead } from './v4-Dc1twzv4.mjs';
import '../nitro/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'node:fs';
import 'node:path';
import 'node:crypto';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/utils';
import 'vue-router';

const useRetroAudio = () => {
  const soundEnabled = useState("retro-sound-enabled", () => true);
  const toggleSound = () => {
    soundEnabled.value = !soundEnabled.value;
    if (soundEnabled.value) {
      playBeep(980, 0.06);
    }
  };
  const playClick = () => {
    if (!soundEnabled.value) return;
    return;
  };
  const playBeep = (freq = 880, duration = 0.05) => {
    if (!soundEnabled.value) return;
    return;
  };
  const playBoot = () => {
    if (!soundEnabled.value) return;
    return;
  };
  const playSwitch = () => {
    if (!soundEnabled.value) return;
    return;
  };
  return {
    soundEnabled,
    toggleSound,
    playClick,
    playBeep,
    playBoot,
    playSwitch
  };
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "SiteHeader",
  __ssrInlineRender: true,
  setup(__props) {
    const { isDark } = useGitHubTheme();
    const { soundEnabled } = useRetroAudio();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "bg-gh-subtle border-b border-gh-border text-gh-fg text-sm select-none sticky top-0 z-30 transition-colors duration-150" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between gap-4"><div class="flex items-center gap-3"><a href="/" class="flex items-center gap-2 font-semibold text-gh-fg hover:text-gh-blue transition-colors" aria-label="Home"><svg height="24" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="24" fill="currentColor"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg><span class="font-mono text-xs px-1.5 py-0.5 rounded border border-gh-border bg-gh-canvas text-gh-fg font-bold">JA</span></a><div class="hidden sm:flex items-center text-gh-muted text-xs font-mono"><span>/</span><a href="#overview" class="ml-1 text-gh-fg font-semibold hover:text-gh-blue hover:underline"> jeffriandriyanto </a></div></div><div class="flex items-center gap-2 sm:gap-3"><div class="hidden md:flex items-center gap-2 px-2.5 py-1 text-xs border border-gh-border rounded-md bg-gh-canvas text-gh-muted"><svg class="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg><span>Type <kbd class="px-1 border border-gh-border rounded bg-gh-subtle text-[10px] font-mono">/</kbd> to search</span></div><button type="button" class="gh-btn text-xs px-2"${ssrRenderAttr("title", unref(soundEnabled) ? "Mute sound effects" : "Enable sound effects")}>`);
      if (unref(soundEnabled)) {
        _push(`<svg class="w-3.5 h-3.5 text-gh-green" viewBox="0 0 16 16" fill="currentColor"><path d="M7.559 1.978a.75.75 0 0 1 .791.17l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.29-.53V2.5a.75.75 0 0 1 .5-.522ZM1.75 5.5h2.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 .75-.75Z"></path><path d="M13.53 4.47a.75.75 0 0 1 1.06 0 5 5 0 0 1 0 7.06.75.75 0 0 1-1.06-1.06 3.5 3.5 0 0 0 0-4.94.75.75 0 0 1 0-1.06Z"></path></svg>`);
      } else {
        _push(`<svg class="w-3.5 h-3.5 text-gh-muted" viewBox="0 0 16 16" fill="currentColor"><path d="M7.559 1.978a.75.75 0 0 1 .791.17l4.5 4.5a.75.75 0 0 1 0 1.06l-4.5 4.5a.75.75 0 0 1-1.29-.53V2.5a.75.75 0 0 1 .5-.522ZM1.75 5.5h2.5a.75.75 0 0 1 .75.75v3.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1-.75-.75v-3.5a.75.75 0 0 1 .75-.75Z"></path><path d="m12.28 6.22 2.5 2.5a.75.75 0 0 1-1.06 1.06l-2.5-2.5a.75.75 0 1 1 1.06-1.06Zm1.44 0-2.5 2.5a.75.75 0 1 1-1.06-1.06l2.5-2.5a.75.75 0 1 1 1.06 1.06Z"></path></svg>`);
      }
      _push(`<span class="hidden sm:inline font-mono text-[11px]">${ssrInterpolate(unref(soundEnabled) ? "SFX" : "Muted")}</span></button><a href="https://github.com/jeffriandriyanto" target="_blank" rel="noopener" class="gh-btn text-xs" title="GitHub Profile"><span>GitHub</span><span class="text-[10px] text-gh-muted">↗</span></a><a href="https://www.linkedin.com/in/jeffriandriyanto/" target="_blank" rel="noopener" class="gh-btn text-xs" title="LinkedIn Profile"><span>LinkedIn</span><span class="text-[10px] text-gh-muted">↗</span></a><button type="button" class="gh-btn p-1.5"${ssrRenderAttr("title", unref(isDark) ? "Switch to Light theme" : "Switch to Dark theme")}>`);
      if (unref(isDark)) {
        _push(`<svg class="w-4 h-4 text-amber-400" viewBox="0 0 16 16" fill="currentColor"><path d="M8 12a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm0-1.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Zm5.657-8.157a.75.75 0 0 1 0 1.061l-1.061 1.06a.749.749 0 0 1-1.275-.326.749.749 0 0 1 .215-.734l1.06-1.061a.75.75 0 0 1 1.061 0Zm-9.193 9.193a.75.75 0 0 1 0 1.06l-1.06 1.061a.75.75 0 1 1-1.061-1.06l1.06-1.061a.75.75 0 0 1 1.061 0ZM8 0a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V.75A.75.75 0 0 1 8 0ZM3 8a.75.75 0 0 1-.75.75H.75a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 3 8Zm13 0a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1 0-1.5h1.5A.75.75 0 0 1 16 8Zm-12.596 4.404a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 0-1.061Zm9.192-9.192a.75.75 0 0 1 1.06 0l1.061 1.06a.75.75 0 0 1-1.06 1.061l-1.061-1.06a.75.75 0 0 1 0-1.061ZM8 13a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0v-1.5A.75.75 0 0 1 8 13Z"></path></svg>`);
      } else {
        _push(`<svg class="w-4 h-4 text-gh-muted" viewBox="0 0 16 16" fill="currentColor"><path d="M9.598 1.591a.749.749 0 0 1 .785-.175 7.001 7.001 0 1 1-8.967 8.967.75.75 0 0 1 .961-.96 5.5 5.5 0 0 0 7.046-7.046.75.75 0 0 1 .175-.786Zm1.616 1.945a7 7 0 0 1-7.678 7.678 5.499 5.499 0 1 0 7.678-7.678Z"></path></svg>`);
      }
      _push(`</button></div></div></header>`);
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/github/SiteHeader.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const SiteHeader = Object.assign(_sfc_main$9, { __name: "GithubSiteHeader" });
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "ProfileSidebar",
  __ssrInlineRender: true,
  setup(__props) {
    useRetroAudio();
    const emailCopied = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<aside${ssrRenderAttrs(mergeProps({ class: "w-full font-sans text-gh-fg" }, _attrs))}><div class="flex flex-row lg:flex-col items-center lg:items-start gap-4 mb-4"><div class="relative flex-shrink-0"><div class="w-20 h-20 sm:w-28 sm:h-28 lg:w-64 lg:h-64 rounded-full lg:rounded-md border border-gh-border bg-gh-subtle overflow-hidden flex items-center justify-center shadow-xs"><div class="w-full h-full bg-gradient-to-br from-gh-subtle to-gh-border flex flex-col items-center justify-center select-none"><span class="text-3xl sm:text-4xl lg:text-7xl font-bold font-mono text-gh-fg tracking-tighter">JA</span><span class="text-[10px] sm:text-xs font-mono text-gh-muted uppercase tracking-widest mt-1">Salatiga, ID</span></div></div><div class="hidden lg:flex items-center gap-1.5 absolute -bottom-2 left-3 px-2 py-0.5 rounded-full border border-gh-border bg-gh-canvas text-[11px] shadow-xs text-gh-fg"><span class="w-2 h-2 rounded-full bg-gh-green animate-pulse"></span><span class="text-gh-muted">Available for work</span></div></div><div class="flex-1 min-w-0"><h1 class="text-xl sm:text-2xl font-bold leading-tight text-gh-fg tracking-tight"> Jeffri Andriyanto </h1><div class="text-sm font-normal text-gh-muted font-mono flex items-center gap-1.5 mt-0.5"><span>jeffriandriyanto</span><span>·</span><span class="text-xs">he/him</span></div><div class="text-xs font-medium text-gh-blue mt-1 flex items-center gap-1"><span>Senior Frontend Engineer</span></div></div></div><div class="flex lg:hidden items-center gap-1.5 mb-4 px-2.5 py-1 rounded-md border border-gh-border bg-gh-subtle text-xs w-fit"><span class="w-2 h-2 rounded-full bg-gh-green animate-pulse"></span><span class="text-gh-muted">Available for projects &amp; roles</span></div><div class="text-xs sm:text-sm text-gh-fg leading-relaxed mb-4"><p> Seasoned Web Developer with <strong>8+ years of experience</strong> based in Salatiga, mainly focused on frontend architecture and UI/UX with full-stack capabilities. </p></div><div class="flex flex-col gap-2 mb-6"><a href="mailto:jeffriandriyanto.fe@gmail.com" class="gh-btn primary w-full py-1.5 text-xs font-semibold"><svg class="w-4 h-4 mr-1" viewBox="0 0 16 16" fill="currentColor"><path d="M1.75 2h12.5c.966 0 1.75.784 1.75 1.75v8.5A1.75 1.75 0 0 1 14.25 14H1.75A1.75 1.75 0 0 1 0 12.25v-8.5C0 2.784.784 2 1.75 2ZM1.5 12.251c0 .138.112.25.25.25h12.5a.25.25 0 0 0 .25-.25V5.809L8.38 9.397a.75.75 0 0 1-.76 0L1.5 5.809v6.442Zm13-7.681L8 8.358 1.5 4.57V3.75a.25.25 0 0 1 .25-.25h12.5a.25.25 0 0 1 .25.25v.82Z"></path></svg><span>Get in Touch</span></a><button type="button" class="gh-btn w-full py-1.5 text-xs"><svg class="w-3.5 h-3.5 text-gh-muted mr-1" viewBox="0 0 16 16" fill="currentColor"><path d="M0 6.75C0 5.784.784 5 1.75 5h1.5a.75.75 0 0 1 0 1.5h-1.5a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-1.5a.75.75 0 0 1 1.5 0v1.5A1.75 1.75 0 0 1 9.25 16h-7.5A1.75 1.75 0 0 1 0 14.25Z"></path><path d="M5 1.75C5 .784 5.784 0 6.75 0h7.5C15.216 0 16 .784 16 1.75v7.5A1.75 1.75 0 0 1 14.25 11h-7.5A1.75 1.75 0 0 1 5 9.25Zm1.75-.25a.25.25 0 0 0-.25.25v7.5c0 .138.112.25.25.25h7.5a.25.25 0 0 0 .25-.25v-7.5a.25.25 0 0 0-.25-.25Z"></path></svg><span>${ssrInterpolate(unref(emailCopied) ? "✓ Copied to clipboard!" : "Copy Email Address")}</span></button></div><div class="space-y-2.5 text-xs text-gh-fg border-t border-gh-border pt-4 pb-6"><div class="flex items-center gap-2"><svg class="w-4 h-4 text-gh-muted flex-shrink-0" viewBox="0 0 16 16" fill="currentColor"><path d="M1.75 1A1.75 1.75 0 0 0 0 2.75v9.5C0 13.216.784 14 1.75 14h12.5A1.75 1.75 0 0 0 16 12.25v-9.5A1.75 1.75 0 0 0 14.25 1H1.75ZM1.5 2.75a.25.25 0 0 1 .25-.25h12.5a.25.25 0 0 1 .25.25v9.5a.25.25 0 0 1-.25.25H1.75a.25.25 0 0 1-.25-.25v-9.5ZM3 4.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm0 3a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5A.75.75 0 0 1 3 7.75Zm0 3a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5h-1.5a.75.75 0 0 1-.75-.75Zm4-6a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 7 4.75Zm0 3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 7 7.75Zm0 3a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5A.75.75 0 0 1 7 10.75Z"></path></svg><span class="truncate">Duit Investech · creetech.id</span></div><div class="flex items-center gap-2"><svg class="w-4 h-4 text-gh-muted flex-shrink-0" viewBox="0 0 16 16" fill="currentColor"><path d="m12.596 11.596-3.535 3.536a1.5 1.5 0 0 1-2.122 0l-3.535-3.536a6.5 6.5 0 1 1 9.192-9.193 6.5 6.5 0 0 1 0 9.193Zm-1.06-8.132A5 5 0 1 0 4.464 10.535L8 14.07l3.536-3.535a5 5 0 0 0 0-7.071ZM8 7.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3Z"></path></svg><span>Salatiga, Central Java, ID</span></div><div class="flex items-center gap-2"><svg class="w-4 h-4 text-gh-muted flex-shrink-0" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0a8 8 0 1 1 0 16A8 8 0 0 1 8 0ZM1.5 8a6.5 6.5 0 1 0 13 0 6.5 6.5 0 0 0-13 0Zm7-3.25v3.69l2.72 1.63a.75.75 0 1 1-.77 1.28L7.25 9.47A.75.75 0 0 1 7 8.82V4.75a.75.75 0 0 1 1.5 0Z"></path></svg><span>WIB (UTC+7) · Remote worldwide</span></div><div class="flex items-center gap-2"><svg class="w-4 h-4 text-gh-muted flex-shrink-0" viewBox="0 0 16 16" fill="currentColor"><path d="M7.775 3.275a.75.75 0 0 0 1.06 1.06l1.25-1.25a2 2 0 1 1 2.83 2.83l-2.5 2.5a2 2 0 0 1-2.83 0 .75.75 0 0 0-1.06 1.06 3.5 3.5 0 0 0 4.95 0l2.5-2.5a3.5 3.5 0 0 0-4.95-4.95l-1.25 1.25zm-.05 9.45a.75.75 0 0 0-1.06-1.06l-1.25 1.25a2 2 0 0 1-2.83-2.83l2.5-2.5a2 2 0 0 1 2.83 0 .75.75 0 0 0 1.06-1.06 3.5 3.5 0 0 0-4.95 0l-2.5 2.5a3.5 3.5 0 0 0 4.95 4.95l1.25-1.25z"></path></svg><a href="https://www.linkedin.com/in/jeffriandriyanto/" target="_blank" rel="noopener" class="text-gh-fg hover:text-gh-blue hover:underline truncate"> in/jeffriandriyanto </a></div><div class="flex items-center gap-2"><svg class="w-4 h-4 text-gh-muted flex-shrink-0" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg><a href="https://github.com/jeffriandriyanto" target="_blank" rel="noopener" class="text-gh-fg hover:text-gh-blue hover:underline truncate"> @jeffriandriyanto </a></div></div><div class="border-t border-gh-border pt-4"><h2 class="text-xs font-semibold text-gh-muted uppercase tracking-wider mb-2.5"> Core Capabilities </h2><div class="flex flex-wrap gap-1.5"><span class="gh-badge font-mono text-[11px]">Vue 3 / Nuxt 3</span><span class="gh-badge font-mono text-[11px]">TypeScript</span><span class="gh-badge font-mono text-[11px]">Micro-Frontends</span><span class="gh-badge font-mono text-[11px]">Module Federation</span><span class="gh-badge font-mono text-[11px]">React / Next.js</span><span class="gh-badge font-mono text-[11px]">Tailwind CSS</span><span class="gh-badge font-mono text-[11px]">Fullstack (Laravel/Node)</span><span class="gh-badge font-mono text-[11px]">Hardware &amp; IoT</span></div></div></aside>`);
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/github/ProfileSidebar.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const ProfileSidebar = Object.assign(_sfc_main$8, { __name: "GithubProfileSidebar" });
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "NavigationTabs",
  __ssrInlineRender: true,
  props: {
    activeTab: {},
    repoCount: {},
    experienceCount: {}
  },
  emits: ["change-tab"],
  setup(__props, { emit: __emit }) {
    useRetroAudio();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        class: "border-b border-gh-border mb-6 select-none overflow-x-auto",
        "aria-label": "Profile navigation"
      }, _attrs))}><div class="flex items-center gap-1 sm:gap-2"><button type="button" class="${ssrRenderClass([__props.activeTab === "overview" ? "border-gh-orange text-gh-fg font-semibold" : "border-transparent text-gh-muted hover:text-gh-fg hover:border-gh-border", "flex items-center gap-2 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-medium border-b-2 transition-all duration-150 whitespace-nowrap"])}"><svg class="${ssrRenderClass([__props.activeTab === "overview" ? "text-gh-fg" : "text-gh-muted", "w-4 h-4 flex-shrink-0"])}" viewBox="0 0 16 16" fill="currentColor"><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.244a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.244a2.25 2.25 0 0 0-1.748.832l-.248.31a.75.75 0 0 1-1.172 0l-.248-.31A2.25 2.25 0 0 0 5.003 13H.75a.75.75 0 0 1-.75-.75ZM1.5 2.5v9h3.503a3.75 3.75 0 0 1 2.247.75v-9.5A2.25 2.25 0 0 0 5.003 2.5Zm13 0h-3.503a2.25 2.25 0 0 0-2.247.75v9.5a3.75 3.75 0 0 1 2.247-.75h3.503Z"></path></svg><span>Overview</span></button><button type="button" class="${ssrRenderClass([__props.activeTab === "repositories" ? "border-gh-orange text-gh-fg font-semibold" : "border-transparent text-gh-muted hover:text-gh-fg hover:border-gh-border", "flex items-center gap-2 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-medium border-b-2 transition-all duration-150 whitespace-nowrap"])}"><svg class="${ssrRenderClass([__props.activeTab === "repositories" ? "text-gh-fg" : "text-gh-muted", "w-4 h-4 flex-shrink-0"])}" viewBox="0 0 16 16" fill="currentColor"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path></svg><span>Repositories</span><span class="px-1.5 py-0.2 rounded-full text-[11px] font-mono bg-gh-border-muted text-gh-muted font-normal">${ssrInterpolate(__props.repoCount)}</span></button><button type="button" class="${ssrRenderClass([__props.activeTab === "experience" ? "border-gh-orange text-gh-fg font-semibold" : "border-transparent text-gh-muted hover:text-gh-fg hover:border-gh-border", "flex items-center gap-2 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-medium border-b-2 transition-all duration-150 whitespace-nowrap"])}"><svg class="${ssrRenderClass([__props.activeTab === "experience" ? "text-gh-fg" : "text-gh-muted", "w-4 h-4 flex-shrink-0"])}" viewBox="0 0 16 16" fill="currentColor"><path d="M10.5 7.75a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm1.43.75a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 1 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 1 1 0 1.5h-3.32Z"></path></svg><span>Experience</span><span class="px-1.5 py-0.2 rounded-full text-[11px] font-mono bg-gh-border-muted text-gh-muted font-normal">${ssrInterpolate(__props.experienceCount)}</span></button><button type="button" class="${ssrRenderClass([__props.activeTab === "skills" ? "border-gh-orange text-gh-fg font-semibold" : "border-transparent text-gh-muted hover:text-gh-fg hover:border-gh-border", "flex items-center gap-2 px-3 sm:px-4 py-2.5 text-xs sm:text-sm font-medium border-b-2 transition-all duration-150 whitespace-nowrap"])}"><svg class="${ssrRenderClass([__props.activeTab === "skills" ? "text-gh-fg" : "text-gh-muted", "w-4 h-4 flex-shrink-0"])}" viewBox="0 0 16 16" fill="currentColor"><path d="M6.5 1.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75V3h2.25c.69 0 1.25.56 1.25 1.25V6.5H14.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H13v2.25c0 .69-.56 1.25-1.25 1.25H9.5v1.25a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V13H4.25c-.69 0-1.25-.56-1.25-1.25V9.5H1.75a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75H3V4.25C3 3.56 3.56 3 4.25 3H6.5V1.75Zm-2 2.75a.25.25 0 0 0-.25.25v7c0 .138.112.25.25.25h7a.25.25 0 0 0 .25-.25v-7a.25.25 0 0 0-.25-.25h-7ZM5.5 6a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V6Z"></path></svg><span>Skills &amp; Architecture</span></button></div></nav>`);
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/github/NavigationTabs.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const NavigationTabs = Object.assign(_sfc_main$7, { __name: "GithubNavigationTabs" });
const _sfc_main$6 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-gh-border rounded-md bg-gh-canvas mb-6 shadow-xs overflow-hidden" }, _attrs))}><div class="bg-gh-subtle border-b border-gh-border px-4 py-2.5 flex items-center justify-between text-xs"><div class="flex items-center gap-2 font-mono text-gh-fg font-medium"><svg class="w-4 h-4 text-gh-muted" viewBox="0 0 16 16" fill="currentColor"><path d="M0 1.75A.75.75 0 0 1 .75 1h4.253c1.227 0 2.317.59 3 1.501A3.743 3.743 0 0 1 11.006 1h4.244a.75.75 0 0 1 .75.75v10.5a.75.75 0 0 1-.75.75h-4.244a2.25 2.25 0 0 0-1.748.832l-.248.31a.75.75 0 0 1-1.172 0l-.248-.31A2.25 2.25 0 0 0 5.003 13H.75a.75.75 0 0 1-.75-.75ZM1.5 2.5v9h3.503a3.75 3.75 0 0 1 2.247.75v-9.5A2.25 2.25 0 0 0 5.003 2.5Zm13 0h-3.503a2.25 2.25 0 0 0-2.247.75v9.5a3.75 3.75 0 0 1 2.247-.75h3.503Z"></path></svg><span>jeffriandriyanto / README.md</span></div><div class="text-gh-muted text-[11px] font-mono flex items-center gap-1.5"><span>markdown</span></div></div><div class="p-5 sm:p-6 markdown-body text-gh-fg"><h2 class="text-lg sm:text-xl font-semibold border-b border-gh-border pb-2 mb-4 text-gh-fg"> Senior Frontend Engineer &amp; Engineering Leader </h2><p class="text-sm leading-relaxed text-gh-fg"> 👋 Hi there! I&#39;m a Web Developer with <strong>8+ years of production experience</strong> based in Salatiga, Central Java, Indonesia. My core specialization centers on frontend architecture, responsive dashboard interfaces, and maintainable web applications with full-stack delivery capability. </p><p class="text-sm leading-relaxed text-gh-fg"> Throughout my career across enterprise firms, high-growth startups, and consulting agencies, I have architected and maintained applications relied upon by thousands of daily users — from micro-frontend suites and IoT hardware reader integrations to export-grade order management systems and educational testing platforms. </p><h3 class="text-base font-semibold text-gh-fg mt-5 mb-2"> Core Engineering Focus </h3><ul class="text-sm space-y-1.5 text-gh-fg"><li><strong>Frontend Architecture &amp; Micro-Frontends:</strong> Module Federation (Vite) across decoupled remote apps, Turborepo monorepos, and centralized design systems. </li><li><strong>Modern Reactive Stack:</strong> Deep expertise in Vue.js 3, Nuxt 3 &amp; 4 (SSR), React.js, Next.js, and strict TypeScript with TanStack Query. </li><li><strong>Full-Stack &amp; Systems Engineering:</strong> End-to-end applications with Laravel 12 API (PHP 8.3), Nitro serverless handlers, PostgreSQL / MySQL, and atomic stock reservation locks. </li><li><strong>Hardware, Real-Time &amp; IoT Integrations:</strong> Desktop RFID/NFC card readers via local WebSockets, MQTT greenhouse telemetry streaming, and automated gate turnstile POS infrastructure. </li></ul><h3 class="text-base font-semibold text-gh-fg mt-5 mb-2"> Aesthetic Vision &amp; Craftsmanship </h3><p class="text-sm leading-relaxed text-gh-fg"> I believe the <em>marriage of functionality and aesthetics</em> is the cornerstone of captivating digital products. By pairing empathetic UI/UX intuition with architectural rigor, I bridge the gap between design vision and technical execution. </p></div></div>`);
}
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/github/ReadmeCard.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const ReadmeCard = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$6, [["ssrRender", _sfc_ssrRender$1]]), { __name: "GithubReadmeCard" });
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "RepositoryCard",
  __ssrInlineRender: true,
  props: {
    project: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    useRetroAudio();
    const getPrimaryLanguage = (tags) => {
      if (tags.some((t) => t.toLowerCase().includes("typescript"))) return "TypeScript";
      if (tags.some((t) => t.toLowerCase().includes("vue") || t.toLowerCase().includes("nuxt"))) return "Vue";
      if (tags.some((t) => t.toLowerCase().includes("react") || t.toLowerCase().includes("next"))) return "React";
      if (tags.some((t) => t.toLowerCase().includes("laravel") || t.toLowerCase().includes("php"))) return "PHP";
      return "JavaScript";
    };
    const getLanguageColor = (tags) => {
      const lang = getPrimaryLanguage(tags);
      switch (lang) {
        case "TypeScript":
          return "#3178c6";
        case "Vue":
          return "#41b883";
        case "React":
          return "#61dafb";
        case "PHP":
          return "#777bb4";
        default:
          return "#f1e05a";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "border border-gh-border rounded-md bg-gh-canvas p-4 sm:p-5 flex flex-col justify-between hover:border-gh-muted transition-all duration-150 shadow-xs group cursor-pointer" }, _attrs))}><div><div class="flex items-start justify-between gap-2 mb-2"><div class="flex items-center gap-2 min-w-0"><svg class="w-4 h-4 text-gh-muted flex-shrink-0" viewBox="0 0 16 16" fill="currentColor"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path></svg><span class="text-sm sm:text-base font-semibold text-gh-blue group-hover:underline truncate">${ssrInterpolate(__props.project.title)}</span></div><span class="gh-badge text-[10px] flex-shrink-0 font-mono">${ssrInterpolate(__props.project.company || "Enterprise")}</span></div><p class="text-xs text-gh-muted leading-relaxed line-clamp-2 mb-3">${ssrInterpolate(__props.project.summary)}</p><div class="flex flex-wrap gap-1.5 mb-4"><!--[-->`);
      ssrRenderList(__props.project.tags.slice(0, 4), (tag) => {
        _push(`<span class="gh-topic-tag text-[10px] font-mono">${ssrInterpolate(tag)}</span>`);
      });
      _push(`<!--]--></div></div><div class="flex items-center justify-between text-xs text-gh-muted font-mono pt-3 border-t border-gh-border-muted"><div class="flex items-center gap-3"><div class="flex items-center gap-1.5"><span class="w-3 h-3 rounded-full flex-shrink-0" style="${ssrRenderStyle({ backgroundColor: getLanguageColor(__props.project.tags) })}"></span><span class="text-[11px]">${ssrInterpolate(getPrimaryLanguage(__props.project.tags))}</span></div><span class="text-[11px] text-gh-muted">${ssrInterpolate(__props.project.year)}</span></div><span class="text-[11px] text-gh-blue font-sans group-hover:underline flex items-center gap-0.5"> Details <span>▸</span></span></div></div>`);
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/github/RepositoryCard.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const RepositoryCard = Object.assign(_sfc_main$5, { __name: "GithubRepositoryCard" });
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ProjectModal",
  __ssrInlineRender: true,
  props: {
    project: {}
  },
  emits: ["close"],
  setup(__props, { emit: __emit }) {
    useRetroAudio();
    return (_ctx, _push, _parent, _attrs) => {
      if (__props.project) {
        _push(`<div${ssrRenderAttrs(mergeProps({
          class: "fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/60 backdrop-blur-xs animate-fade-in",
          role: "dialog",
          "aria-modal": "true"
        }, _attrs))}><div class="w-full max-w-3xl max-h-[90vh] bg-gh-canvas border border-gh-border rounded-md shadow-modal overflow-hidden flex flex-col font-sans text-gh-fg"><div class="px-5 py-3.5 bg-gh-subtle border-b border-gh-border flex items-center justify-between gap-3"><div class="flex items-center gap-2.5 min-w-0"><svg class="w-4 h-4 text-gh-muted flex-shrink-0" viewBox="0 0 16 16" fill="currentColor"><path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path></svg><span class="font-semibold text-sm sm:text-base text-gh-fg truncate">${ssrInterpolate(__props.project.title)}</span><span class="gh-badge text-[10px] font-mono flex-shrink-0">${ssrInterpolate(__props.project.company)}</span></div><button type="button" class="p-1 text-gh-muted hover:text-gh-fg rounded hover:bg-gh-border-muted transition-colors" aria-label="Close dialog"><svg class="w-5 h-5" viewBox="0 0 16 16" fill="currentColor"><path d="M3.72 3.72a.75.75 0 0 1 1.06 0L8 6.94l3.22-3.22a.749.749 0 0 1 1.275.326.749.749 0 0 1-.215.734L9.06 8l3.22 3.22a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215L8 9.06l-3.22 3.22a.751.751 0 0 1-1.042-.018.751.751 0 0 1-.018-1.042L6.94 8 3.72 4.78a.75.75 0 0 1 0-1.06Z"></path></svg></button></div><div class="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm"><div class="border-b border-gh-border-muted pb-4"><div class="text-xs text-gh-muted font-mono mb-1"> Timeline: ${ssrInterpolate(__props.project.year)} · Category: ${ssrInterpolate(__props.project.categoryLabel)}</div><p class="text-base text-gh-fg font-medium">${ssrInterpolate(__props.project.tagline)}</p></div><div><h3 class="text-xs font-semibold text-gh-muted uppercase tracking-wider mb-2 font-mono"> [ Project Context &amp; Problem ] </h3><p class="text-xs sm:text-sm text-gh-fg leading-relaxed">${ssrInterpolate(__props.project.description)}</p></div><div><h3 class="text-xs font-semibold text-gh-muted uppercase tracking-wider mb-2 font-mono"> [ Scope of Responsibility &amp; Key Contributions ] </h3><ul class="space-y-2 text-xs sm:text-sm text-gh-fg"><!--[-->`);
        ssrRenderList(__props.project.highlights, (hl, i) => {
          _push(`<li class="flex items-start gap-2.5"><span class="text-gh-blue font-bold font-mono">✓</span><span class="leading-relaxed">${ssrInterpolate(hl)}</span></li>`);
        });
        _push(`<!--]--></ul></div><div><h3 class="text-xs font-semibold text-gh-muted uppercase tracking-wider mb-2 font-mono"> [ Technical Decisions &amp; Architecture ] </h3><div class="bg-gh-subtle border border-gh-border rounded-md p-4 space-y-1.5 font-mono text-xs"><!--[-->`);
        ssrRenderList(__props.project.architecture, (arch, i) => {
          _push(`<div class="flex items-start gap-2 text-gh-fg"><span class="text-gh-muted">•</span><span>${ssrInterpolate(arch)}</span></div>`);
        });
        _push(`<!--]--></div></div>`);
        if (__props.project.metrics && __props.project.metrics.length > 0) {
          _push(`<div><h3 class="text-xs font-semibold text-gh-muted uppercase tracking-wider mb-2 font-mono"> [ Verified Architectural Dimensions ] </h3><div class="grid grid-cols-3 gap-3"><!--[-->`);
          ssrRenderList(__props.project.metrics, (m) => {
            _push(`<div class="p-3 border border-gh-border rounded-md bg-gh-subtle text-center"><div class="text-xs sm:text-sm font-bold font-mono text-gh-fg">${ssrInterpolate(m.value)}</div><div class="text-[11px] text-gh-muted mt-0.5">${ssrInterpolate(m.label)}</div></div>`);
          });
          _push(`<!--]--></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div><h3 class="text-xs font-semibold text-gh-muted uppercase tracking-wider mb-2 font-mono"> [ Technologies Used ] </h3><div class="flex flex-wrap gap-1.5"><!--[-->`);
        ssrRenderList(__props.project.tags, (t) => {
          _push(`<span class="gh-badge font-mono text-xs">${ssrInterpolate(t)}</span>`);
        });
        _push(`<!--]--></div></div></div><div class="px-5 py-3 bg-gh-subtle border-t border-gh-border flex items-center justify-between"><span class="text-xs text-gh-muted font-mono hidden sm:inline"> Esc to close </span><div class="flex items-center gap-2">`);
        if (__props.project.repoUrl) {
          _push(`<a${ssrRenderAttr("href", __props.project.repoUrl)} target="_blank" rel="noopener" class="gh-btn text-xs"><span>LinkedIn Record</span><span class="text-[10px] text-gh-muted">↗</span></a>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<button type="button" class="gh-btn text-xs font-medium"> Done </button></div></div></div></div>`);
      } else {
        _push(`<!---->`);
      }
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/github/ProjectModal.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const ProjectModal = Object.assign(_sfc_main$4, { __name: "GithubProjectModal" });
const parcoursData = [
  {
    hash: "01a717",
    branch: "fe-core",
    date: "Jul 2017 — Jul 2018",
    role: "Frontend Web Developer",
    company: "PT Nostra Solusi Teknologi",
    location: "Greater Jakarta Area · On-site",
    employmentType: "Full-time · 1 yr 1 mo",
    commitMsg: "feat(fe): order management systems, maps & push messaging",
    desc: "Developed management system interfaces and data processing features for web applications in parking services, order management, and financial services.",
    facts: [
      "Built Order Management System (OMS) features: CariParkir & Redkendi dashboards and partner management",
      "Integrated Google Maps API for partner location registration and mapping",
      "Implemented Firebase Cloud Messaging (FCM) for real-time push notifications",
      "Fixed application workflow issues and enhanced UI/UX across enterprise web apps"
    ],
    tags: ["angularjs", "javascript", "google-maps", "firebase", "oms", "css3"],
    stat: "1st enterprise agency role"
  },
  {
    hash: "02b818",
    branch: "fe-core",
    date: "Aug 2018 — Jan 2019",
    role: "Frontend Web Developer",
    company: "Caption Hospitality",
    location: "Yogyakarta Area · On-site",
    employmentType: "Full-time · 6 mos",
    commitMsg: "feat(cms): rebuilt hospitality CMS & MERN order management",
    desc: "Rebuilt CMS interfaces and enhanced hospitality management systems. Resolved complex frontend data manipulation issues to improve application reliability.",
    facts: [
      "Rebuilt CMS interface and enhanced hospitality management workflows",
      "Developed interactive React.js interfaces for MERN stack order management (OMS)",
      "Collaborated closely with backend teams (Ruby on Rails & Node) to eliminate UI bottlenecks"
    ],
    tags: ["react.js", "ruby-on-rails", "mern-stack", "cms", "ui/ux", "hospitality"],
    stat: "React & CMS overhaul"
  },
  {
    hash: "03c319",
    branch: "fe-core",
    date: "Mar 2019 — Present",
    role: "Frontend Web Developer",
    company: "Duit Investech",
    location: "Salatiga · On-site",
    employmentType: "Full-time · 7 yrs 8 mos",
    commitMsg: "feat(arch): micro-frontends, hardware IoT, smart cards & enterprise platforms",
    desc: "Primary frontend driver for large-scale enterprise platforms. Spanning micro-frontends with Module Federation, real-time IoT hardware integrations, e-learning CBT engines, and smart ticketing infrastructure.",
    facts: [
      "Architected NMC IFM platform using Vite Module Federation across 5 decoupled Micro-Frontend remotes",
      "Integrated desktop RFID/NFC hardware readers via local WebSockets for Casio Smart Warranty platform",
      "Built SISTesi School Management & CBT engine with LaTeX/KaTeX formula rendering & Zoom Web SDK",
      "Engineered Gembira Loka Zoo (GLZoo) command center, entrance turnstiles, and visitor smart card CMS",
      "Developed ANTAM BrankasLM digital gold platform and Inagri IoT real-time greenhouse dashboard",
      "Implemented Progressive Web App (PWA) offline capabilities and automated data import pipelines"
    ],
    tags: ["vue.js", "nuxt-3", "typescript", "micro-frontends", "module-federation", "iot-websockets", "pwa"],
    stat: "7+ yrs enterprise frontend tenure"
  },
  {
    hash: "04d120",
    branch: "fullstack",
    date: "Jan 2020 — Present",
    role: "Software Engineer & Founder",
    company: "creetech.id",
    location: "Salatiga, Central Java · Hybrid",
    employmentType: "Self-employed · 6 yrs 10 mos",
    commitMsg: "fork: feat(fullstack) end-to-end applications, Laravel 12, Nuxt & fullstack architecture",
    desc: "Developing end-to-end full-stack web applications for clients across various industries, independently and collaboratively. Specializing in frontend architecture, API integrations, and robust database design.",
    facts: [
      "Engineered EPP Plant: export botanical OMS & e-commerce with concurrency-safe atomic inventory locking (Nuxt 4 SSR + Laravel 12 API)",
      "Built Bukit Wahid Regency: smart residential ecosystem with automated IPL/PAM billing, emergency panic dispatch, and e-voting",
      "Created KIRKA: electoral canvassing and real-time vote projection platform with hierarchical TPS tracking",
      "Configured full DevOps pipelines: Ubuntu VPS, Nginx reverse proxy, PM2, Cloudflare, MySQL 8"
    ],
    tags: ["fullstack", "nuxt-4", "laravel-12", "vue-3", "devops", "mysql", "echarts"],
    stat: "Fullstack web applications",
    isFork: true
  },
  {
    hash: "05e921",
    branch: "fullstack",
    date: "Sep 2021 — Feb 2023",
    role: "Software Engineer",
    company: "poteq",
    location: "Jakarta, Indonesia · Remote",
    employmentType: "Part-time · 1 yr 6 mos",
    commitMsg: "feat(visual-dev): visual development environment & community platform",
    desc: "Developed a web application using Bubble.io visual development to support community-based plan buying, selling, and sharing.",
    facts: [
      "Built user interfaces and application workflows to support core platform functionality",
      "Implemented data management and application logic within visual development environments",
      "Developed features to facilitate peer-to-peer interactions between community users"
    ],
    tags: ["bubble.io", "visual-development", "javascript", "firebase", "community-saas"],
    stat: "Visual development & rapid ops"
  },
  {
    hash: "06f026",
    branch: "main",
    date: "2026 — Present",
    role: "Software Engineer & Product Builder",
    company: "Salatiga, Central Java, ID",
    location: "Remote Worldwide",
    employmentType: "Open for Opportunities & High-Impact Ventures",
    commitMsg: "merge: branch fullstack into main → senior frontend & fullstack engineering",
    desc: "Operating from Salatiga with 8+ years of seasoned frontend expertise, combined with end-to-end fullstack execution. Turning complex product requirements into resilient, user-friendly, production-ready software.",
    facts: [
      "Uncompromising UI/UX craftsmanship: deep understanding of the DOM, reactive state, and user empathy",
      "Fullstack delivery: engineering scalable backends, database schemas, and micro-frontends with high reliability",
      "Available for frontend architecture leadership, fullstack contract projects, and complex web applications"
    ],
    tags: ["senior-frontend", "frontend-architecture", "salatiga", "micro-frontends", "fullstack", "typescript"],
    stat: "Ready for new ventures",
    isMerge: true,
    isHead: true
  }
];
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ExperienceLog",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="border border-gh-border rounded-md bg-gh-canvas p-4 sm:p-5 shadow-xs"><div class="flex items-center justify-between flex-wrap gap-2 mb-2"><h2 class="text-base font-semibold text-gh-fg flex items-center gap-2"><svg class="w-4 h-4 text-gh-muted" viewBox="0 0 16 16" fill="currentColor"><path d="M10.5 7.75a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm1.43.75a4.002 4.002 0 0 1-7.86 0H.75a.75.75 0 1 1 0-1.5h3.32a4.002 4.002 0 0 1 7.86 0h3.32a.75.75 0 1 1 0 1.5h-3.32Z"></path></svg><span>Career Experience &amp; Engineering Activity</span></h2><span class="text-xs font-mono text-gh-muted"> 8+ Years Production · 2017 — Present </span></div><p class="text-xs sm:text-sm text-gh-muted leading-relaxed"> Chronological record of roles across enterprise software, high-growth startups, and consulting engineering studios. </p></div><div class="relative border-l border-gh-border ml-3 sm:ml-4 pl-5 sm:pl-6 space-y-8"><!--[-->`);
      ssrRenderList(unref(parcoursData), (exp) => {
        _push(`<div class="relative group"><div class="${ssrRenderClass([{ "border-gh-green bg-gh-green": exp.isHead }, "absolute -left-[27px] sm:-left-[31px] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-gh-border bg-gh-canvas group-hover:border-gh-blue group-hover:bg-gh-blue transition-colors flex items-center justify-center"])}"></div><div class="border border-gh-border rounded-md bg-gh-canvas p-5 shadow-xs hover:border-gh-muted transition-colors"><div class="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-2"><div><h3 class="text-base font-semibold text-gh-fg flex items-center gap-2 flex-wrap"><span>${ssrInterpolate(exp.role)}</span><span class="text-xs font-normal text-gh-muted font-mono"> @ ${ssrInterpolate(exp.company)}</span></h3><div class="text-xs text-gh-muted font-mono flex items-center gap-2 mt-0.5"><span>${ssrInterpolate(exp.location)}</span><span>·</span><span>${ssrInterpolate(exp.employmentType)}</span></div></div><span class="gh-badge text-[11px] font-mono whitespace-nowrap self-start sm:self-auto">${ssrInterpolate(exp.date)}</span></div><p class="text-xs sm:text-sm text-gh-fg leading-relaxed my-3">${ssrInterpolate(exp.desc)}</p><div class="space-y-1.5 my-3 text-xs sm:text-sm"><!--[-->`);
        ssrRenderList(exp.facts, (f, i) => {
          _push(`<div class="flex items-start gap-2 text-gh-fg"><span class="text-gh-blue font-bold font-mono text-xs mt-0.5">›</span><span class="leading-relaxed">${ssrInterpolate(f)}</span></div>`);
        });
        _push(`<!--]--></div><div class="pt-3 border-t border-gh-border-muted flex flex-wrap items-center justify-between gap-2"><div class="flex flex-wrap gap-1"><!--[-->`);
        ssrRenderList(exp.tags, (t) => {
          _push(`<span class="gh-topic-tag text-[10px] font-mono">${ssrInterpolate(t)}</span>`);
        });
        _push(`<!--]--></div><span class="text-[11px] font-mono text-gh-muted">${ssrInterpolate(exp.stat)}</span></div></div></div>`);
      });
      _push(`<!--]--></div></div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/github/ExperienceLog.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const ExperienceLog = Object.assign(_sfc_main$3, { __name: "GithubExperienceLog" });
const _sfc_main$2 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "space-y-6" }, _attrs))}><div class="border border-gh-border rounded-md bg-gh-canvas p-4 sm:p-5 shadow-xs"><h2 class="text-base font-semibold text-gh-fg flex items-center gap-2 mb-1"><svg class="w-4 h-4 text-gh-muted" viewBox="0 0 16 16" fill="currentColor"><path d="M6.5 1.75a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 .75.75V3h2.25c.69 0 1.25.56 1.25 1.25V6.5H14.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-.75.75H13v2.25c0 .69-.56 1.25-1.25 1.25H9.5v1.25a.75.75 0 0 1-.75.75h-1.5a.75.75 0 0 1-.75-.75V13H4.25c-.69 0-1.25-.56-1.25-1.25V9.5H1.75a.75.75 0 0 1-.75-.75v-1.5a.75.75 0 0 1 .75-.75H3V4.25C3 3.56 3.56 3 4.25 3H6.5V1.75Zm-2 2.75a.25.25 0 0 0-.25.25v7c0 .138.112.25.25.25h7a.25.25 0 0 0 .25-.25v-7a.25.25 0 0 0-.25-.25h-7ZM5.5 6a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V6Z"></path></svg><span>Technical Skills &amp; Architecture Stack</span></h2><p class="text-xs sm:text-sm text-gh-muted leading-relaxed"> Comprehensive breakdown of verified technical proficiencies, frameworks, and architectures across 8+ years of production experience. </p></div><div class="grid grid-cols-1 md:grid-cols-2 gap-4"><div class="border border-gh-border rounded-md bg-gh-canvas p-5 shadow-xs"><div class="flex items-center justify-between pb-3 mb-4 border-b border-gh-border-muted"><h3 class="text-sm font-semibold text-gh-fg font-mono"> 01 / FRONTEND CORE &amp; UI/UX </h3><span class="gh-badge text-[10px]">Primary</span></div><ul class="space-y-2 text-xs sm:text-sm text-gh-fg"><li class="flex items-start gap-2"><span class="text-gh-blue font-bold font-mono">▸</span><span><strong>Vue.js 3 &amp; Nuxt (Nuxt 3 &amp; Nuxt 4 SSR):</strong> Production architectures, composables, Nitro server routes.</span></li><li class="flex items-start gap-2"><span class="text-gh-blue font-bold font-mono">▸</span><span><strong>React.js &amp; Next.js:</strong> Enterprise state management, hooks, and responsive dashboard applications.</span></li><li class="flex items-start gap-2"><span class="text-gh-blue font-bold font-mono">▸</span><span><strong>TypeScript &amp; JavaScript (ESNext):</strong> Strict types, API response schemas, and resilient error handling.</span></li><li class="flex items-start gap-2"><span class="text-gh-blue font-bold font-mono">▸</span><span><strong>Styling &amp; Design Tokens:</strong> Tailwind CSS, SCSS, PrimeVue, Element Plus, and Vuetify.</span></li></ul></div><div class="border border-gh-border rounded-md bg-gh-canvas p-5 shadow-xs"><div class="flex items-center justify-between pb-3 mb-4 border-b border-gh-border-muted"><h3 class="text-sm font-semibold text-gh-fg font-mono"> 02 / MFE &amp; ARCHITECTURE </h3><span class="gh-badge text-[10px]">Architecture</span></div><ul class="space-y-2 text-xs sm:text-sm text-gh-fg"><li class="flex items-start gap-2"><span class="text-gh-blue font-bold font-mono">▸</span><span><strong>Module Federation (Vite):</strong> Decoupled host shell and remote micro-frontend applications.</span></li><li class="flex items-start gap-2"><span class="text-gh-blue font-bold font-mono">▸</span><span><strong>Monorepo Engineering:</strong> Turborepo modular architecture with shared packages (@repo/ui, @repo/auth).</span></li><li class="flex items-start gap-2"><span class="text-gh-blue font-bold font-mono">▸</span><span><strong>Server-State Caching:</strong> Standardized data fetching and invalidation using TanStack Query.</span></li><li class="flex items-start gap-2"><span class="text-gh-blue font-bold font-mono">▸</span><span><strong>PWA &amp; Offline Resilience:</strong> Service Workers, client-side caching, and installable web apps.</span></li></ul></div><div class="border border-gh-border rounded-md bg-gh-canvas p-5 shadow-xs"><div class="flex items-center justify-between pb-3 mb-4 border-b border-gh-border-muted"><h3 class="text-sm font-semibold text-gh-fg font-mono"> 03 / FULLSTACK &amp; BACKEND </h3><span class="gh-badge text-[10px]">End-to-End</span></div><ul class="space-y-2 text-xs sm:text-sm text-gh-fg"><li class="flex items-start gap-2"><span class="text-gh-blue font-bold font-mono">▸</span><span><strong>Laravel 12 API (PHP 8.3):</strong> RESTful API services, Eloquent ORM, and database migrations.</span></li><li class="flex items-start gap-2"><span class="text-gh-blue font-bold font-mono">▸</span><span><strong>Database &amp; Concurrency:</strong> MySQL 8 with database transactions and atomic inventory reservation locks.</span></li><li class="flex items-start gap-2"><span class="text-gh-blue font-bold font-mono">▸</span><span><strong>Real-Time Messaging:</strong> WebSockets, Pusher protocol, and Firebase Cloud Messaging (FCM).</span></li><li class="flex items-start gap-2"><span class="text-gh-blue font-bold font-mono">▸</span><span><strong>DevOps &amp; Production Hosting:</strong> Ubuntu VPS, Nginx reverse proxy, Node.js PM2, and Cloudflare DNS.</span></li></ul></div><div class="border border-gh-border rounded-md bg-gh-canvas p-5 shadow-xs"><div class="flex items-center justify-between pb-3 mb-4 border-b border-gh-border-muted"><h3 class="text-sm font-semibold text-gh-fg font-mono"> 04 / HARDWARE &amp; SPECIALIZED IOT </h3><span class="gh-badge text-[10px]">Integrations</span></div><ul class="space-y-2 text-xs sm:text-sm text-gh-fg"><li class="flex items-start gap-2"><span class="text-gh-blue font-bold font-mono">▸</span><span><strong>RFID / NFC Hardware Readers:</strong> Real-time WebSocket bridge to local desktop hardware for warranty cards.</span></li><li class="flex items-start gap-2"><span class="text-gh-blue font-bold font-mono">▸</span><span><strong>MQTT IoT Telemetry:</strong> Greenhouse climate sensor streaming (temperature, soil moisture, automated valves).</span></li><li class="flex items-start gap-2"><span class="text-gh-blue font-bold font-mono">▸</span><span><strong>Geospatial Systems:</strong> Mapbox GL with browser Geolocation for dealer/store locating.</span></li><li class="flex items-start gap-2"><span class="text-gh-blue font-bold font-mono">▸</span><span><strong>Specialized EdTech:</strong> Computer-Based Testing (CBT) engines with LaTeX/KaTeX formula rendering &amp; Zoom Web SDK.</span></li></ul></div></div></div>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/github/SkillsMatrix.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const SkillsMatrix = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$2, [["ssrRender", _sfc_ssrRender]]), { __name: "GithubSkillsMatrix" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SiteFooter",
  __ssrInlineRender: true,
  setup(__props) {
    useRetroAudio();
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<footer${ssrRenderAttrs(mergeProps({ class: "mt-16 border-t border-gh-border bg-gh-subtle py-8 text-xs text-gh-muted font-sans select-none transition-colors duration-150" }, _attrs))}><div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4"><div class="flex items-center gap-2"><svg height="20" aria-hidden="true" viewBox="0 0 16 16" version="1.1" width="20" fill="currentColor" class="text-gh-muted"><path d="M8 0c4.42 0 8 3.58 8 8a8.013 8.013 0 0 1-5.45 7.59c-.4.08-.55-.17-.55-.38 0-.27.01-1.13.01-2.2 0-.75-.25-1.23-.54-1.48 1.78-.2 3.65-.88 3.65-3.95 0-.88-.31-1.59-.82-2.15.08-.2.36-1.02-.08-2.12 0 0-.67-.22-2.2.82-.64-.18-1.32-.27-2-.27-.68 0-1.36.09-2 .27-1.53-1.03-2.2-.82-2.2-.82-.44 1.1-.16 1.92-.08 2.12-.51.56-.82 1.28-.82 2.15 0 3.06 1.86 3.75 3.64 3.95-.23.2-.44.55-.51 1.07-.46.21-1.61.55-2.33-.66-.15-.24-.6-.83-1.23-.82-.67.01-.27.38.01.53.34.19.73.9.82 1.13.16.45.68 1.31 2.69.94 0 .67.01 1.3.01 1.49 0 .21-.15.45-.55.38A7.995 7.995 0 0 1 0 8c0-4.42 3.58-8 8-8Z"></path></svg><span>© 2026 Jeffri Andriyanto · Salatiga, Indonesia.</span></div><div class="flex items-center gap-4 text-xs"><a href="https://www.linkedin.com/in/jeffriandriyanto/" target="_blank" rel="noopener" class="hover:text-gh-blue hover:underline"> LinkedIn </a><a href="https://github.com/jeffriandriyanto" target="_blank" rel="noopener" class="hover:text-gh-blue hover:underline"> GitHub </a><a href="mailto:jeffriandriyanto.fe@gmail.com" class="hover:text-gh-blue hover:underline"> Contact </a><button type="button" class="hover:text-gh-blue hover:underline"> Back to Top ↑ </button></div></div></footer>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/github/SiteFooter.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SiteFooter = Object.assign(_sfc_main$1, { __name: "GithubSiteFooter" });
const projectsData = [
  {
    id: "nmc-ifm",
    title: "NMC Integrated Facility Management (IFM)",
    tagline: "Enterprise Multi-Tenant Micro-Frontend Platform",
    company: "Duit Investech",
    category: "frontend",
    categoryLabel: "Micro-Frontend Architecture",
    year: "2026",
    file: "nmc-ifm.sys",
    summary: "Enterprise-grade Integrated Facility Management platform built with modern Micro-Frontend (MFE) architecture to automate facility operations across multiple business units.",
    description: "Architected and developed an enterprise-grade multi-tenant IFM web platform across multiple business units and client branches. Features dynamic tenant-switching, single sign-on (SSO), granular Role-Based Access Control (RBAC), real-time attendance matrix, warehouse asset lifecycle (GRN & BAST), facility ticketing dispatch, and pool fleet tracking.",
    highlights: [
      "Implemented Module Federation with Vite across 5 decoupled applications (Host + 4 Remote MFEs) in Turborepo",
      "Built internal modular packages (@repo/ui, @repo/auth, @repo/utils) to enforce design consistency and shared token management",
      "Standardized server-state caching using TanStack Query across federated remotes"
    ],
    architecture: [
      "Vite Module Federation (Host shell + 4 Remote MFEs)",
      "TypeScript & Turborepo Monorepo",
      "TanStack Query server-state management",
      "Tailwind CSS & Shared Component Library (@repo/ui)"
    ],
    tags: ["Micro-Frontends", "TypeScript", "Module Federation", "Turborepo", "TanStack Query", "Vue 3"],
    metrics: [
      { label: "MFEs Decoupled", value: "5 Apps" },
      { label: "Architecture", value: "Turborepo" },
      { label: "RBAC Roles", value: "Multi-Tenant" }
    ],
    liveUrl: "#",
    repoUrl: "https://www.linkedin.com/in/jeffriandriyanto/"
  },
  {
    id: "epp-plant",
    title: "EPP Plant — International Botanical Export OMS",
    tagline: "Export-Grade Botanical E-Commerce & Concurrency-Safe OMS",
    company: "creetech.id",
    category: "fullstack",
    categoryLabel: "Fullstack Engineering",
    year: "2026",
    file: "epp-plant.app",
    summary: "Full-stack export order management system tailored for shipping rare, high-value hybrid plants from Indonesia to international collectors worldwide.",
    description: "Designed and engineered an export-grade botanical OMS and e-commerce platform. Solved international logistics, strict phytosanitary quarantine compliance, and high-concurrency inventory contention on unique 1-of-1 botanical specimens using database transactions and atomic locking.",
    highlights: [
      "Concurrency-safe stock reservation: atomic locking prevented double-booking on unique 1-of-1 specimen plants with 24h verification window",
      "International group cargo consolidation & bespoke private direct shipping calculation engine",
      "Digital Plant Passport & QR-coded provenance certification for genetic lineage verification",
      "Decoupled monorepo: Laravel 12 API backend + Nuxt 4 (SSR) customer storefront + Vue 3 TypeScript PrimeVue admin"
    ],
    architecture: [
      "Nuxt 4 SSR Customer Storefront",
      "Vue 3 + PrimeVue + TypeScript Admin Portal",
      "Laravel 12 API (PHP 8.3) Core Backend & MySQL 8",
      "Ubuntu VPS, Nginx Reverse Proxy, Cloudflare, PM2"
    ],
    tags: ["Fullstack", "Nuxt 4 SSR", "Laravel 12", "Vue 3", "PrimeVue", "TypeScript", "DevOps"],
    metrics: [
      { label: "Stack", value: "Nuxt 4 + Laravel 12" },
      { label: "Shipping", value: "Global Hubs" },
      { label: "Inventory", value: "Atomic Lock" }
    ],
    liveUrl: "#",
    repoUrl: "https://www.linkedin.com/in/jeffriandriyanto/"
  },
  {
    id: "casio-warranty",
    title: "Casio Smart Warranty & Service Platform",
    tagline: "IoT Smart RFID/NFC Warranty Lifecycle Platform",
    company: "Duit Investech",
    category: "iot-hardware",
    categoryLabel: "IoT & Hardware Integration",
    year: "2025 – 2026",
    file: "casio-service.app",
    summary: "Enterprise-grade digital warranty and after-sales service management platform for Casio timepieces in Indonesia utilizing smart RFID/NFC cards.",
    description: "Streamlined the entire warranty lifecycle across card manufacturers, official distributors, retail dealers, service centers, and customers. Integrated client-side WebSockets directly with desktop RFID/NFC card readers for zero-latency card detection upon physical tap.",
    highlights: [
      "Real-time hardware integration: WebSocket client communication with local desktop RFID/NFC card readers for zero-latency detection",
      "Dynamic multi-tenant authorization and routing across 6 distinct user roles (Super Admin to Service Center Technician)",
      "Geospatial dealer locator integrating Mapbox GL and browser Geolocation for real-time distance calculation"
    ],
    architecture: [
      "Nuxt 3 (Vue 3) & TypeScript Reactive Frontend",
      "Hardware integration via local WebSocket bridge to RFID/NFC reader",
      "Mapbox GL geospatial search & Pinia state management",
      "Tailwind CSS & Element Plus UI toolkit"
    ],
    tags: ["Nuxt 3", "TypeScript", "IoT Hardware", "WebSockets", "Mapbox GL", "RFID/NFC"],
    metrics: [
      { label: "User Roles", value: "6 Personas" },
      { label: "Card Detection", value: "< 50ms" },
      { label: "Hardware", value: "RFID / NFC" }
    ],
    liveUrl: "#",
    repoUrl: "https://www.linkedin.com/in/jeffriandriyanto/"
  },
  {
    id: "bukit-wahid-regency",
    title: "Bukit Wahid Regency Smart Residential Ecosystem",
    tagline: "Smart Estate Governance, Automated Billing & Mobile Platform",
    company: "creetech.id",
    category: "fullstack",
    categoryLabel: "Fullstack Engineering",
    year: "2026",
    file: "bukit-wahid.app",
    summary: "End-to-end digital residential ecosystem automating community governance, utility billing (IPL/PAM), rapid emergency dispatch, and resident communication.",
    description: "Comprehensive smart estate platform comprising a high-performance Web Admin Dashboard for estate leaders and cross-platform mobile apps for residents and security personnel. Features automated metered water billing, digital receipts with certified stamps, and emergency panic button dispatch.",
    highlights: [
      "Automated billing & accounting engine for maintenance fees (IPL) and metered water usage (PAM) with financial reporting",
      "Rapid emergency panic button connecting residents directly to security post with live camera situation capture",
      "Democratic e-voting platform featuring real-time data visualizations (ECharts) and audit-ready voter breakdowns",
      "Automated WhatsApp Gateway and Firebase Cloud Messaging for scheduled payment reminders and announcements"
    ],
    architecture: [
      "Nuxt 3 & Vue.js Web Administration Dashboard",
      "Cross-platform mobile application integration",
      "ECharts analytics & data visualization",
      "WhatsApp Gateway & Firebase Cloud Messaging (FCM)"
    ],
    tags: ["Fullstack", "Nuxt 3", "Vue.js", "ECharts", "Firebase", "WhatsApp Gateway"],
    metrics: [
      { label: "Billing Modules", value: "IPL + PAM" },
      { label: "Analytics", value: "ECharts" },
      { label: "Emergency", value: "Instant Dispatch" }
    ],
    liveUrl: "#",
    repoUrl: "https://www.linkedin.com/in/jeffriandriyanto/"
  },
  {
    id: "sistesi-elearning",
    title: "SISTesi — Integrated School & E-Learning Platform",
    tagline: "Enterprise School Management, CBT Engine & Virtual Classroom",
    company: "Duit Investech",
    category: "frontend",
    categoryLabel: "Frontend Architecture",
    year: "2019 – Present",
    file: "sistesi.app",
    summary: "Enterprise web-based School Management and E-Learning Platform streamlining operations for administrators, teachers, students, and parents.",
    description: "Unified educational ecosystem managing the entire student lifecycle from admissions (PPDB) to graduation. Includes a Computer-Based Testing (CBT) engine equipped with LaTeX/KaTeX mathematical formula rendering, anti-cheat detection, embedded Zoom Web SDK virtual classrooms, and smart attendance tracking.",
    highlights: [
      "Online examination CBT engine with LaTeX/KaTeX math formula rendering and instant score analytics",
      "Seamlessly embedded Zoom Web SDK enabling live virtual classrooms directly inside the portal",
      "Smart attendance tracking with geolocation mapping (Mapbox) and RFID smart card readiness",
      "Real-time communication and announcements powered by WebSockets/Pusher"
    ],
    architecture: [
      "Vue.js & Vuex centralized state architecture",
      "Zoom Web SDK integration",
      "LaTeX / KaTeX mathematical rendering pipeline",
      "WebSockets / Pusher real-time event streaming"
    ],
    tags: ["Vue.js", "Vuex", "Zoom Web SDK", "KaTeX", "WebSockets", "Mapbox"],
    metrics: [
      { label: "Lifecycle", value: "PPDB to Alumni" },
      { label: "Exam Engine", value: "KaTeX CBT" },
      { label: "Classroom", value: "Embedded Zoom" }
    ],
    liveUrl: "#",
    repoUrl: "https://www.linkedin.com/in/jeffriandriyanto/"
  },
  {
    id: "inagri-iot",
    title: "Inagri – IoT Smart Farming & Greenhouse Dashboard",
    tagline: "Real-Time MQTT Greenhouse Telemetry & Crop Management",
    company: "Duit Investech",
    category: "iot-hardware",
    categoryLabel: "IoT & Real-Time Telemetry",
    year: "2024",
    file: "inagri-iot.app",
    summary: "Responsive smart farming web dashboard monitoring real-time greenhouse environments and agricultural operations via IoT sensors.",
    description: "Empowers agricultural operators to monitor greenhouse climate and automated irrigation systems in real time. Listens to MQTT telemetry streams for temperature, humidity, soil moisture, and nutrient metrics, paired with comprehensive crop lifecycle scheduling and farmer subscription management.",
    highlights: [
      "Integrated MQTT protocol for real-time telemetry from greenhouse sensors with live valve/mist actuators",
      "End-to-end crop lifecycle scheduling and plant population tracking",
      "Dynamic data visualizations using ApexCharts to present member growth and regional distribution"
    ],
    architecture: [
      "Next.js & Tailwind CSS modern client application",
      "MQTT client protocol connection for IoT telemetry streams",
      "ApexCharts interactive data visualization"
    ],
    tags: ["Next.js", "Tailwind CSS", "MQTT", "IoT Telemetry", "ApexCharts"],
    metrics: [
      { label: "Telemetry", value: "Real-time MQTT" },
      { label: "Visuals", value: "ApexCharts" },
      { label: "Controls", value: "Smart Valves" }
    ],
    liveUrl: "#",
    repoUrl: "https://www.linkedin.com/in/jeffriandriyanto/"
  },
  {
    id: "kirka-electoral",
    title: "KIRKA — Electoral Canvassing & Vote Projection",
    tagline: "Campaign Intelligence, Canvassing & Vote Recapitulation",
    company: "creetech.id",
    category: "fullstack",
    categoryLabel: "Fullstack Engineering",
    year: "2024",
    file: "kirka.app",
    summary: "Campaign intelligence web platform designed to streamline voter canvassing, demographic projections, and multi-tier vote recapitulation.",
    description: "Designed for election campaign headquarters. Enables field runners to map voter pledges hierarchically down to sub-districts and polling stations (TPS), paired with a multi-tier data verification workflow and batch CSV/Excel demographic importing.",
    highlights: [
      "Interactive analytics dashboard using ApexCharts comparing real-time projections against official voter rolls (DPT)",
      "Hierarchical field-entry module tracking voter pledges down to TPS and neighborhood levels",
      "Role-based security (@nuxtjs/auth-next) with dynamic permission-based routing for candidates, verifiers, and field runners"
    ],
    architecture: [
      "Vue.js & Vuetify responsive UI components",
      "@nuxtjs/auth-next role-based security layer",
      "ApexCharts vote projection visualization",
      "Batch CSV/Excel import data processor"
    ],
    tags: ["Vue.js", "Nuxt.js", "Vuetify", "ApexCharts", "RBAC", "Data Processing"],
    metrics: [
      { label: "Granularity", value: "Down to TPS" },
      { label: "Import", value: "Batch Excel/CSV" },
      { label: "Analytics", value: "ApexCharts" }
    ],
    liveUrl: "#",
    repoUrl: "https://www.linkedin.com/in/jeffriandriyanto/"
  },
  {
    id: "glzoo-command",
    title: "Gembira Loka Zoo (GLZoo) Command Center",
    tagline: "Turnstiles, POS & Smart Card Ticketing Infrastructure",
    company: "Duit Investech",
    category: "frontend",
    categoryLabel: "Frontend Architecture & Systems",
    year: "2019",
    file: "glzoo-command.sys",
    summary: "Centralized command center and back-office platform overseeing automated entrance turnstiles, smart visitor cards, and point-of-sale infrastructure.",
    description: "Engineered for Gembira Loka Zoo to monitor park infrastructure in real time. Covered entrance turnstiles, desktop and mobile POS terminals, visitor smart card encoding and lifecycle management, tour operator group quotas, and automated financial tax reconciliation.",
    highlights: [
      "Real-time operational command center monitoring automated entrance turnstiles and POS terminals",
      "Card Management System (CMS) managing visitor smart card encoding, balance top-ups, and transaction audits",
      "Advanced financial and tax reporting module generating daily revenue reconciliations and foundation audits"
    ],
    architecture: [
      "Vue.js & Vuex enterprise state management",
      "JWT-based role authentication and turnstile hardware APIs",
      "Smart card encoding & POS terminal integration"
    ],
    tags: ["Vue.js", "Vuex", "Hardware POS", "Turnstiles", "Smart Cards", "Reporting"],
    metrics: [
      { label: "Infrastructure", value: "Gates & POS" },
      { label: "Cards", value: "Visitor Smart Card" },
      { label: "Reporting", value: "Daily Tax & Audit" }
    ],
    liveUrl: "#",
    repoUrl: "https://www.linkedin.com/in/jeffriandriyanto/"
  },
  {
    id: "antam-brankaslm",
    title: "ANTAM — BrankasLM Digital Gold Platform",
    tagline: "Digital Gold Transactions, Buyback & Membership",
    company: "Duit Investech",
    category: "frontend",
    categoryLabel: "Frontend Architecture",
    year: "2023 – 2024",
    file: "antam-gold.app",
    summary: "Frontend components for ANTAM's BrankasLM platform, supporting digital gold transactions, buyback processing, and membership management.",
    description: "Contributed to building the foundational layouts, transaction flows, and user interfaces for digital gold purchasing and physical gold buyback. Implemented secure token refresh handlers to ensure continuous session security.",
    highlights: [
      "Built core transaction workflows for digital gold orders and physical buyback requests",
      "Developed reusable layout components and public landing page structures",
      "Implemented robust refresh token handling to support seamless session continuity and authentication"
    ],
    architecture: [
      "Vue.js & Vuex state management",
      "Strict transaction validation workflows",
      "JWT refresh-token session continuity management"
    ],
    tags: ["Vue.js", "Vuex", "Fintech", "Digital Gold", "Auth Security"],
    metrics: [
      { label: "Domain", value: "Digital Gold" },
      { label: "Feature", value: "Physical Buyback" },
      { label: "Auth", value: "Token Refresh" }
    ],
    liveUrl: "#",
    repoUrl: "https://www.linkedin.com/in/jeffriandriyanto/"
  }
];
const useNavigationState = () => {
  const activeTab = useState("github-active-tab", () => "overview");
  const setTab = (tab) => {
    activeTab.value = tab;
  };
  const syncFromHash = () => {
    return;
  };
  return {
    activeTab,
    setTab,
    syncFromHash
  };
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const { activeTab, setTab } = useNavigationState();
    useRetroAudio();
    const pinnedProjects = computed(() => projectsData.slice(0, 6));
    const selectedProject = ref(null);
    const searchQuery = ref("");
    const selectedCategory = ref("all");
    const repoCategories = [
      { id: "all", label: "All" },
      { id: "frontend", label: "Micro-Frontends" },
      { id: "fullstack", label: "Fullstack" },
      { id: "iot-hardware", label: "IoT Hardware" }
    ];
    const filteredProjects = computed(() => {
      return projectsData.filter((p) => {
        const matchesCategory = selectedCategory.value === "all" || p.category === selectedCategory.value;
        const matchesSearch = searchQuery.value.trim() === "" || p.title.toLowerCase().includes(searchQuery.value.toLowerCase()) || p.summary.toLowerCase().includes(searchQuery.value.toLowerCase()) || p.tags.some((t) => t.toLowerCase().includes(searchQuery.value.toLowerCase()));
        return matchesCategory && matchesSearch;
      });
    });
    const handleTabChange = (tab) => {
      setTab(tab);
    };
    const openProjectModal = (project) => {
      selectedProject.value = project;
    };
    const closeProjectModal = () => {
      selectedProject.value = null;
    };
    useHead({
      title: "Jeffri Andriyanto — Senior Frontend Engineer",
      meta: [
        {
          name: "description",
          content: "GitHub-inspired developer profile of Jeffri Andriyanto. Senior Frontend Engineer with 8+ years of experience in Vue, Nuxt, React, Next.js, TypeScript, and Micro-Frontends. Based in Salatiga, Indonesia."
        },
        { property: "og:title", content: "Jeffri Andriyanto — Senior Frontend Engineer" },
        { property: "og:description", content: "GitHub-inspired developer profile of Jeffri Andriyanto. Senior Frontend Engineer with 8+ years of production experience." }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gh-canvas text-gh-fg font-sans flex flex-col selection:bg-gh-blue-subtle selection:text-gh-blue" }, _attrs))}>`);
      _push(ssrRenderComponent(SiteHeader, null, null, _parent));
      _push(`<div class="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8"><div class="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-start"><div class="lg:col-span-4 xl:col-span-3">`);
      _push(ssrRenderComponent(ProfileSidebar, null, null, _parent));
      _push(`</div><main class="lg:col-span-8 xl:col-span-9 min-w-0">`);
      _push(ssrRenderComponent(NavigationTabs, {
        "active-tab": unref(activeTab),
        "repo-count": unref(projectsData).length,
        "experience-count": unref(parcoursData).length,
        onChangeTab: handleTabChange
      }, null, _parent));
      if (unref(activeTab) === "overview") {
        _push(`<section aria-label="Overview">`);
        _push(ssrRenderComponent(ReadmeCard, null, null, _parent));
        _push(`<div class="mb-8"><div class="flex items-center justify-between mb-3"><h2 class="text-sm font-semibold text-gh-fg"> Pinned Repositories </h2><span class="text-xs text-gh-muted font-mono"> 6 Featured Architectures </span></div><div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"><!--[-->`);
        ssrRenderList(unref(pinnedProjects), (p) => {
          _push(ssrRenderComponent(RepositoryCard, {
            key: p.id,
            project: p,
            onSelect: openProjectModal
          }, null, _parent));
        });
        _push(`<!--]--></div></div></section>`);
      } else if (unref(activeTab) === "repositories") {
        _push(`<section aria-label="Repositories"><div class="border-b border-gh-border pb-4 mb-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3"><div class="relative flex-1"><svg class="w-4 h-4 text-gh-muted absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none" viewBox="0 0 16 16" fill="currentColor"><path d="M10.68 11.74a6 6 0 0 1-7.922-8.982 6 6 0 0 1 8.982 7.922l3.04 3.04a.749.749 0 0 1-.326 1.275.749.749 0 0 1-.734-.215ZM11.5 7a4.499 4.499 0 1 0-8.997 0A4.499 4.499 0 0 0 11.5 7Z"></path></svg><input${ssrRenderAttr("value", unref(searchQuery))} type="text" placeholder="Find a repository or project..." class="w-full pl-9 pr-3 py-1.5 text-xs sm:text-sm rounded-md border border-gh-border bg-gh-canvas text-gh-fg placeholder-gh-muted focus:outline-none focus:border-gh-blue focus:ring-1 focus:ring-gh-blue transition-colors"></div><div class="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0 text-xs"><!--[-->`);
        ssrRenderList(repoCategories, (cat) => {
          _push(`<button type="button" class="${ssrRenderClass([{ "primary": unref(selectedCategory) === cat.id }, "gh-btn text-xs whitespace-nowrap"])}">${ssrInterpolate(cat.label)}</button>`);
        });
        _push(`<!--]--></div></div><div class="text-xs text-gh-muted mb-4 font-mono"> Showing ${ssrInterpolate(unref(filteredProjects).length)} of ${ssrInterpolate(unref(projectsData).length)} total repositories </div><div class="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-4"><!--[-->`);
        ssrRenderList(unref(filteredProjects), (p) => {
          _push(ssrRenderComponent(RepositoryCard, {
            key: p.id,
            project: p,
            onSelect: openProjectModal
          }, null, _parent));
        });
        _push(`<!--]--></div></section>`);
      } else if (unref(activeTab) === "experience") {
        _push(`<section aria-label="Experience">`);
        _push(ssrRenderComponent(ExperienceLog, null, null, _parent));
        _push(`</section>`);
      } else if (unref(activeTab) === "skills") {
        _push(`<section aria-label="Skills">`);
        _push(ssrRenderComponent(SkillsMatrix, null, null, _parent));
        _push(`</section>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</main></div></div>`);
      if (unref(selectedProject)) {
        _push(ssrRenderComponent(ProjectModal, {
          project: unref(selectedProject),
          onClose: closeProjectModal
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(SiteFooter, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CiLbJ3MB.mjs.map
