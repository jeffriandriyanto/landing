export type GitHubTabId = 'overview' | 'repositories' | 'experience' | 'skills'

export const useNavigationState = () => {
  const activeTab = useState<GitHubTabId>('github-active-tab', () => 'overview')

  const setTab = (tab: GitHubTabId) => {
    activeTab.value = tab
    if (typeof window !== 'undefined') {
      const hash = tab === 'overview' ? '' : `#${tab}`
      window.history.replaceState(null, '', window.location.pathname + hash)
    }
  }

  const syncFromHash = () => {
    if (typeof window === 'undefined') return
    const hash = window.location.hash.replace('#', '')
    if (['overview', 'repositories', 'experience', 'skills'].includes(hash)) {
      activeTab.value = hash as GitHubTabId
    }
  }

  return {
    activeTab,
    setTab,
    syncFromHash,
  }
}
