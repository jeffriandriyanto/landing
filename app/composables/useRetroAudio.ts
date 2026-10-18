export const useRetroAudio = () => {
  const soundEnabled = useState<boolean>('retro-sound-enabled', () => true)
  let audioCtx: AudioContext | null = null

  const getAudioContext = (): AudioContext | null => {
    if (typeof window === 'undefined') return null
    if (!audioCtx) {
      const AudioCtxClass = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext
      if (AudioCtxClass) {
        audioCtx = new AudioCtxClass()
      }
    }
    if (audioCtx && audioCtx.state === 'suspended') {
      audioCtx.resume().catch(() => {})
    }
    return audioCtx
  }

  onMounted(() => {
    const saved = localStorage.getItem('jeffri_os_sound')
    if (saved !== null) {
      soundEnabled.value = saved === 'true'
    }
  })

  const toggleSound = () => {
    soundEnabled.value = !soundEnabled.value
    if (typeof window !== 'undefined') {
      localStorage.setItem('jeffri_os_sound', String(soundEnabled.value))
    }
    if (soundEnabled.value) {
      playBeep(980, 0.06)
    }
  }

  // Snappy retro mechanical keyclick
  const playClick = () => {
    if (!soundEnabled.value) return
    const ctx = getAudioContext()
    if (!ctx) return

    try {
      const now = ctx.currentTime
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'triangle'
      osc.frequency.setValueAtTime(1200, now)
      osc.frequency.exponentialRampToValueAtTime(180, now + 0.03)

      gain.gain.setValueAtTime(0.08, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.03)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now)
      osc.stop(now + 0.03)
    } catch {
      // Audio playback fails silently if browser blocks
    }
  }

  // 8-bit blip tone
  const playBeep = (freq = 880, duration = 0.05) => {
    if (!soundEnabled.value) return
    const ctx = getAudioContext()
    if (!ctx) return

    try {
      const now = ctx.currentTime
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'square'
      osc.frequency.setValueAtTime(freq, now)

      gain.gain.setValueAtTime(0.05, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + duration)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now)
      osc.stop(now + duration)
    } catch {
      // Audio playback fails silently if browser blocks
    }
  }

  // Vintage BIOS boot chord
  const playBoot = () => {
    if (!soundEnabled.value) return
    const ctx = getAudioContext()
    if (!ctx) return

    try {
      const now = ctx.currentTime
      const notes = [440, 554.37, 659.25] // A major chord
      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator()
        const gain = ctx.createGain()

        osc.type = 'sine'
        osc.frequency.setValueAtTime(freq, now + i * 0.08)

        gain.gain.setValueAtTime(0.06, now + i * 0.08)
        gain.gain.exponentialRampToValueAtTime(0.001, now + i * 0.08 + 0.4)

        osc.connect(gain)
        gain.connect(ctx.destination)

        osc.start(now + i * 0.08)
        osc.stop(now + i * 0.08 + 0.4)
      })
    } catch {}
  }

  // CRT Tube power toggle sound
  const playSwitch = () => {
    if (!soundEnabled.value) return
    const ctx = getAudioContext()
    if (!ctx) return

    try {
      const now = ctx.currentTime
      const osc = ctx.createOscillator()
      const gain = ctx.createGain()

      osc.type = 'sawtooth'
      osc.frequency.setValueAtTime(300, now)
      osc.frequency.exponentialRampToValueAtTime(80, now + 0.08)

      gain.gain.setValueAtTime(0.07, now)
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.08)

      osc.connect(gain)
      gain.connect(ctx.destination)

      osc.start(now)
      osc.stop(now + 0.08)
    } catch {}
  }

  return {
    soundEnabled,
    toggleSound,
    playClick,
    playBeep,
    playBoot,
    playSwitch,
  }
}

