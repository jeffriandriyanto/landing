import { u as useState } from './state-CuouCpJu.mjs';

const useGitHubTheme = () => {
  const isDark = useState("github-is-dark", () => false);
  const applyTheme = (dark) => {
    isDark.value = dark;
  };
  const toggleTheme = () => {
    applyTheme(!isDark.value);
  };
  const initTheme = () => {
    return;
  };
  return {
    isDark,
    toggleTheme,
    initTheme
  };
};

export { useGitHubTheme as u };
//# sourceMappingURL=useGitHubTheme-B2YxDf5c.mjs.map
