export type WorkspaceId = 'home' | 'projects' | 'parcours' | 'profil' | 'contact'

export const useDesktopState = () => {
  const activeSpace = useState<WorkspaceId>('desktop-active-space', () => 'home')
  const projectViewMode = useState<'grid' | 'index'>('desktop-project-view-mode', () => 'grid')

  const setSpace = (space: WorkspaceId) => {
    activeSpace.value = space
    if (typeof window !== 'undefined') {
      const hash = space === 'home' ? '' : `#${space}`
      window.history.replaceState(null, '', window.location.pathname + hash)
    }
  }

  const setProjectViewMode = (mode: 'grid' | 'index') => {
    projectViewMode.value = mode
  }

  const syncFromHash = () => {
    if (typeof window === 'undefined') return
    const hash = window.location.hash.replace('#', '')
    if (['home', 'projects', 'parcours', 'profil', 'contact'].includes(hash)) {
      activeSpace.value = hash as WorkspaceId
    }
  }

  return {
    activeSpace,
    projectViewMode,
    setSpace,
    setProjectViewMode,
    syncFromHash,
  }
}

