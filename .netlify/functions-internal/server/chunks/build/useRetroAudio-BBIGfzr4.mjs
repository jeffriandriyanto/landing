import { u as useState } from './state-CuouCpJu.mjs';

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

export { useRetroAudio as u };
//# sourceMappingURL=useRetroAudio-BBIGfzr4.mjs.map
