export const useGitHubTheme = () => {
  const isDark = useState<boolean>('github-is-dark', () => false)

  const applyTheme = (dark: boolean) => {
    isDark.value = dark
    if (typeof window !== 'undefined') {
      if (dark) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }
      localStorage.setItem('github-theme-mode', dark ? 'dark' : 'light')
    }
  }

  const toggleTheme = () => {
    applyTheme(!isDark.value)
  }

  const initTheme = () => {
    if (typeof window === 'undefined') return
    const saved = localStorage.getItem('github-theme-mode')
    if (saved === 'dark') {
      applyTheme(true)
    } else {
      applyTheme(false) // Default Light Mode
    }
  }

  return {
    isDark,
    toggleTheme,
    initTheme,
  }
}
