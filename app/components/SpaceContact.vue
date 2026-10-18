<template>
  <div class="py-10 px-4 sm:px-6 max-w-7xl mx-auto font-mono">
    <!-- Header -->
    <div class="mb-10 pb-6 border-b border-white/20">
      <div class="flex items-center gap-2 text-xs text-neutral-400 mb-2">
        <span>VOLUME 04</span>
        <span>/</span>
        <span>MOUNTED: ~/desktop/contact.app</span>
      </div>
      <h1 class="text-3xl sm:text-5xl font-bold tracking-tight text-white uppercase">
        Contact & Connect
      </h1>
      <p class="text-xs sm:text-sm text-neutral-400 font-sans mt-3 max-w-xl">
        Initiate direct communication. Whether you have a project ready for fullstack execution or need high-velocity vibe coding advisory.
      </p>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <!-- Terminal Contact Dispatcher -->
      <div class="lg:col-span-2 border border-white/20 bg-neutral-950 p-6 sm:p-8 space-y-6">
        <div class="flex items-center justify-between border-b border-white/10 pb-3 text-xs text-neutral-500">
          <span class="font-bold text-white">[ TERMINAL DISPATCHER ]</span>
          <span>PROTOCOL: SMTP / HTTPS</span>
        </div>

        <div class="space-y-4">
          <div class="p-4 border border-white/20 bg-black text-xs space-y-2">
            <div class="text-neutral-500">// direct email channel</div>
            <div class="flex items-center justify-between flex-wrap gap-2">
              <span class="text-white font-bold text-sm sm:text-base select-all">
                jeffriandriyanto.fe@gmail.com
              </span>
              <button
                type="button"
                class="px-3 py-1.5 border border-white hover:bg-white hover:text-black transition-colors text-xs font-bold"
                @click="copyEmail"
              >
                {{ copied ? '✓ COPIED TO BUFFER' : '[ COPY EMAIL ]' }}
              </button>
            </div>
          </div>

          <div class="flex flex-wrap gap-4 pt-2">
            <a
              href="mailto:jeffriandriyanto.fe@gmail.com"
              class="px-6 py-3 bg-white text-black font-bold border border-white hover:bg-black hover:text-white transition-colors text-xs flex items-center gap-2"
              @click="playClick"
            >
              <span>▮ LAUNCH MAIL CLIENT ▮</span>
              <span>↗</span>
            </a>
          </div>
        </div>

        <!-- Social Channels -->
        <div class="pt-6 border-t border-white/10">
          <div class="text-xs text-neutral-500 mb-4 font-bold">[ EXTERNAL NETWORKS ]</div>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://linkedin.com/in/jeffriandriyanto"
              target="_blank"
              rel="noopener"
              class="p-4 border border-white/20 hover:border-white bg-black hover:bg-white hover:text-black transition-colors flex items-center justify-between text-xs group"
              @click="playClick"
            >
              <div>
                <div class="font-bold">LINKEDIN</div>
                <div class="text-[11px] text-neutral-400 group-hover:text-neutral-700 font-sans">
                  /in/jeffriandriyanto
                </div>
              </div>
              <span class="font-bold">↗</span>
            </a>

            <a
              href="https://github.com/jeffriandriyanto"
              target="_blank"
              rel="noopener"
              class="p-4 border border-white/20 hover:border-white bg-black hover:bg-white hover:text-black transition-colors flex items-center justify-between text-xs group"
              @click="playClick"
            >
              <div>
                <div class="font-bold">GITHUB</div>
                <div class="text-[11px] text-neutral-400 group-hover:text-neutral-700 font-sans">
                  @jeffriandriyanto
                </div>
              </div>
              <span class="font-bold">↗</span>
            </a>
          </div>
        </div>
      </div>

      <!-- Live Status & Availability -->
      <div class="border border-white/20 bg-neutral-950 p-6 sm:p-8 flex flex-col justify-between">
        <div>
          <div class="text-xs text-neutral-500 font-bold border-b border-white/10 pb-3 mb-6">
            [ AVAILABILITY TELEMETRY ]
          </div>

          <div class="space-y-5 text-xs font-mono">
            <div>
              <div class="text-neutral-500 text-[10px] uppercase">STATUS</div>
              <div class="text-white font-bold text-sm flex items-center gap-2 mt-0.5">
                <span class="w-2 h-2 rounded-full bg-white animate-ping" />
                <span>Available for New Projects</span>
              </div>
            </div>

            <div>
              <div class="text-neutral-500 text-[10px] uppercase">ENGAGEMENT TYPES</div>
              <ul class="text-neutral-300 font-sans text-xs mt-1 space-y-1">
                <li>• Fullstack Product Building (0 to 1)</li>
                <li>• AI / Vibe Coding Implementation</li>
                <li>• Frontend Architecture Consulting</li>
              </ul>
            </div>

            <div>
              <div class="text-neutral-500 text-[10px] uppercase">RESPONSE TIME</div>
              <div class="text-white font-bold mt-0.5">Within 24 Hours</div>
            </div>

            <div>
              <div class="text-neutral-500 text-[10px] uppercase">TIMEZONE</div>
              <div class="text-white font-bold mt-0.5">Salatiga, Central Java (WIB / GMT+7) · Remote Worldwide</div>
            </div>
          </div>
        </div>

        <div class="pt-6 border-t border-white/10 mt-8 text-[11px] text-neutral-500">
          JEFFRI-OS // contact.app v3.0 · encrypted channel
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const { playClick, playBeep } = useRetroAudio()
const copied = ref(false)

const copyEmail = () => {
  playBeep(920, 0.05)
  if (navigator.clipboard) {
    navigator.clipboard.writeText('jeffriandriyanto.fe@gmail.com').then(() => {
      copied.value = true
      setTimeout(() => {
        copied.value = false
      }, 2500)
    })
  }
}
</script>

