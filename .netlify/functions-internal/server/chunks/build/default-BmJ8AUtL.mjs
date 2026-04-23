import { mergeProps, defineComponent, ref, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderList, ssrRenderAttr, ssrInterpolate } from 'vue/server-renderer';
import { _ as _export_sfc } from './server.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "NavBar",
  __ssrInlineRender: true,
  setup(__props) {
    const navRef = ref(null);
    const scrolled = ref(false);
    const navLinks = [
      { id: "works", label: "Works" },
      { id: "experience", label: "Experience" },
      { id: "tech", label: "Stack" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<nav${ssrRenderAttrs(mergeProps({
        ref_key: "navRef",
        ref: navRef,
        class: ["fixed top-0 left-0 right-0 z-50 transition-all duration-500", unref(scrolled) ? "glass py-3" : "py-5"]
      }, _attrs))}><div class="max-w-7xl mx-auto px-6 flex items-center justify-between"><a href="#hero" class="magnetic-wrap group flex items-center gap-3"><div class="w-8 h-8 rounded-md bg-accent/10 border border-accent/20 flex items-center justify-center group-hover:bg-accent/20 transition-all duration-300"><span class="text-accent font-mono font-bold text-sm">JA</span></div><span class="text-silver-bright font-medium text-sm tracking-wide hidden sm:block"> jeffri<span class="text-accent">.</span>dev </span></a><div class="hidden md:flex items-center gap-8"><!--[-->`);
      ssrRenderList(navLinks, (link) => {
        _push(`<a${ssrRenderAttr("href", `#${link.id}`)} class="magnetic-wrap text-silver-muted hover:text-silver-bright text-sm font-medium tracking-wide transition-colors duration-300 relative group">${ssrInterpolate(link.label)} <span class="absolute -bottom-1 left-0 w-0 h-px bg-accent group-hover:w-full transition-all duration-300"></span></a>`);
      });
      _push(`<!--]--></div><a href="#contact" class="magnetic-wrap px-5 py-2 text-sm font-medium text-void bg-accent rounded-md hover:bg-accent-glow transition-all duration-300 hover:shadow-[0_0_25px_rgba(0,220,160,0.3)]"> Let&#39;s Talk </a></div></nav>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/NavBar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$2, { __name: "NavBar" });
const _sfc_main$1 = {};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<footer${ssrRenderAttrs(mergeProps({
    id: "contact",
    class: "relative py-24 px-6 border-t border-white/5 bg-void"
  }, _attrs))}><div class="max-w-7xl mx-auto"><div class="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-end"><div class="space-y-8"><div><span class="text-xs font-mono text-accent tracking-[0.3em] uppercase block mb-4"> Connect </span><h2 class="text-4xl sm:text-5xl font-bold text-white leading-[1.1] tracking-tighter"> Let&#39;s Build<br>Something Great </h2><p class="text-silver-muted mt-6 max-w-md leading-relaxed text-lg font-light"> Looking for a frontend architect to transform complex logic into high-performance digital experiences? Let&#39;s talk. </p></div><div class="flex flex-wrap items-center gap-4"><a href="mailto:jeffriandriyanto.fe@gmail.com" class="group px-6 py-3.5 bg-accent text-void font-bold rounded-lg hover:bg-accent-glow transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,220,160,0.2)] text-sm flex items-center gap-2"> Email Me <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg></a><div class="flex items-center gap-3"><a href="https://linkedin.com/in/jeffriandriyanto" target="_blank" rel="noopener" aria-label="LinkedIn" class="w-12 h-12 rounded-lg glass border border-white/5 flex items-center justify-center text-silver-muted hover:text-accent hover:border-accent/20 transition-all duration-300"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"></path></svg></a><a href="https://github.com/jeffriandriyanto" target="_blank" rel="noopener" aria-label="GitHub" class="w-12 h-12 rounded-lg glass border border-white/5 flex items-center justify-center text-silver-muted hover:text-accent hover:border-accent/20 transition-all duration-300"><svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"></path></svg></a></div></div></div><div class="flex flex-col md:items-end text-left md:text-right space-y-6"><div class="space-y-1"><p class="text-silver-bright font-medium">Salatiga, Indonesia</p><p class="text-silver-dim text-sm tracking-wide"> Frontend Web Developer @ Creetech </p></div><div class="pt-6 border-t border-white/5 w-full md:w-auto"><p class="text-silver-dim text-xs font-mono uppercase tracking-[0.2em]"> © ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Jeffri Andriyanto </p><p class="text-void-400 text-[10px] mt-2 font-mono uppercase tracking-widest"> Built with <span class="text-silver-dim">Nuxt 4</span> &amp; <span class="text-silver-dim">GSAP</span></p></div></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FooterSection.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]), { __name: "FooterSection" });
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NavBar = __nuxt_component_0;
  const _component_FooterSection = __nuxt_component_1;
  _push(`<div${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-void text-silver" }, _attrs))}>`);
  _push(ssrRenderComponent(_component_NavBar, null, null, _parent));
  _push(`<main>`);
  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
  _push(`</main>`);
  _push(ssrRenderComponent(_component_FooterSection, null, null, _parent));
  _push(`</div>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const _default = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { _default as default };
//# sourceMappingURL=default-BmJ8AUtL.mjs.map
